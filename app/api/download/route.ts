import { NextResponse } from "next/server";

// =====================================================
// DOWNLOAD API — Multi-Provider with Fallback
// Uses verified community Cobalt instances from cobalt.directory
// All instances below have 100% service score (23/23 services)
// =====================================================

const COBALT_INSTANCES = [
  "https://cobaltapi.cjs.nz",                // ✅ Tested working - imputnet/cobalt
  "https://cobaltapi.kittycat.boo",           // ✅ Tested working - zImPatrick/cobalt
  "https://api.cobalt.blackcat.sweeux.org",   // ✅ Tested working - zImPatrick/cobalt
];

export async function POST(request: Request) {
  try {
    const { url, quality } = await request.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "Please provide a valid URL" },
        { status: 400 }
      );
    }

    // Detect platform
    const platform = detectPlatform(url);
    const videoQuality = quality || "1080";

    // Try Cobalt instances one by one
    let lastError = "";
    for (const instance of COBALT_INSTANCES) {
      try {
        const result = await tryCobalt(instance, url, videoQuality);
        if (result) {
          return NextResponse.json({
            platform,
            title: result.title || `${platform} Download`,
            thumbnail: result.thumbnail || null,
            formats: result.formats,
            source: instance.split("//")[1]?.split(".")[0] || "cobalt",
          });
        }
      } catch (err) {
        lastError = err instanceof Error ? err.message : "Unknown error";
        continue;
      }
    }

    // All providers failed
    return NextResponse.json(
      {
        error: `Unable to fetch download links. ${lastError || "All servers are busy."}. Please try again in a few moments.`,
        platform,
      },
      { status: 503 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// =====================================================
// Cobalt API Integration
// Docs: https://github.com/imputnet/cobalt/blob/main/docs/api.md
// =====================================================
async function tryCobalt(
  instance: string,
  url: string,
  quality: string
): Promise<{
  title?: string;
  thumbnail?: string;
  formats: Format[];
} | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(instance, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        videoQuality: quality,
        audioFormat: "mp3",
        audioBitrate: "320",
        filenameStyle: "pretty",
        downloadMode: "auto",
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      if (errorData?.error?.code) {
        throw new Error(errorData.error.code);
      }
      return null;
    }

    const data = await response.json();

    // Handle error responses
    if (data.status === "error") {
      throw new Error(data.error?.code || "Download failed");
    }

    const formats: Format[] = [];

    if (data.status === "tunnel" || data.status === "redirect") {
      // Single file — direct download URL
      const filename = data.filename || "download";
      const isAudio =
        filename.endsWith(".mp3") ||
        filename.endsWith(".ogg") ||
        filename.endsWith(".wav");

      formats.push({
        quality: isAudio ? "Audio" : `Video (${quality}p)`,
        format: isAudio ? "MP3" : "MP4",
        size: "Ready",
        url: data.url,
        filename: filename,
      });

      // If it's a video, also offer audio-only
      if (!isAudio) {
        // Make a second request for audio only
        try {
          const audioResponse = await fetch(instance, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              url,
              downloadMode: "audio",
              audioFormat: "mp3",
              audioBitrate: "320",
            }),
          });

          if (audioResponse.ok) {
            const audioData = await audioResponse.json();
            if (
              audioData.status === "tunnel" ||
              audioData.status === "redirect"
            ) {
              formats.push({
                quality: "Audio Only (MP3 320kbps)",
                format: "MP3",
                size: "Ready",
                url: audioData.url,
                filename: audioData.filename || "audio.mp3",
              });
            }
          }
        } catch {
          // Audio extraction failed, skip it
        }
      }
    } else if (data.status === "picker") {
      // Multiple items (e.g., Instagram carousel, TikTok slideshow)
      if (data.picker && Array.isArray(data.picker)) {
        data.picker.forEach(
          (
            item: { url: string; thumb?: string; type?: string },
            i: number
          ) => {
            formats.push({
              quality: `${item.type === "photo" ? "Photo" : "Video"} ${i + 1}`,
              format: item.type === "photo" ? "JPG" : "MP4",
              size: "Ready",
              url: item.url,
              thumbnail: item.thumb,
            });
          }
        );
      }
      // Include audio if available (e.g., TikTok slideshow audio)
      if (data.audio) {
        formats.push({
          quality: "Audio Track",
          format: "MP3",
          size: "Ready",
          url: data.audio,
        });
      }
    }

    if (formats.length === 0) return null;

    return { formats };
  } catch (err) {
    clearTimeout(timeout);
    throw err;
  }
}

// =====================================================
// Platform Detection
// =====================================================
function detectPlatform(url: string): string {
  const u = url.toLowerCase();
  if (u.includes("youtube.com") || u.includes("youtu.be")) return "YouTube";
  if (u.includes("instagram.com")) return "Instagram";
  if (u.includes("tiktok.com")) return "TikTok";
  if (u.includes("twitter.com") || u.includes("x.com")) return "Twitter / X";
  if (u.includes("facebook.com") || u.includes("fb.watch")) return "Facebook";
  if (u.includes("pinterest.com") || u.includes("pin.it")) return "Pinterest";
  if (u.includes("reddit.com")) return "Reddit";
  if (u.includes("snapchat.com")) return "Snapchat";
  if (u.includes("linkedin.com")) return "LinkedIn";
  if (u.includes("threads.net")) return "Threads";
  if (u.includes("vimeo.com")) return "Vimeo";
  if (u.includes("dailymotion.com")) return "Dailymotion";
  if (u.includes("spotify.com")) return "Spotify";
  if (u.includes("soundcloud.com")) return "SoundCloud";
  if (u.includes("twitch.tv")) return "Twitch";
  if (u.includes("bilibili.com")) return "Bilibili";
  if (u.includes("tumblr.com")) return "Tumblr";
  if (u.includes("vk.com")) return "VK";
  if (u.includes("likee.com")) return "Likee";
  if (u.includes("bandcamp.com")) return "Bandcamp";
  return "Video";
}

// =====================================================
// Types
// =====================================================
interface Format {
  quality: string;
  format: string;
  size: string;
  url: string;
  thumbnail?: string;
  filename?: string;
}
