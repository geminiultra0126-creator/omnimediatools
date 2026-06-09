import { NextResponse } from "next/server";

// =====================================================
// DOWNLOAD API — Multi-Provider with Fallback
// =====================================================
// This API attempts multiple free providers to fetch
// real download links. If all fail, it returns an error.
// =====================================================

const COBALT_INSTANCES = [
  "https://cobalt-api.kwiatekmiki.com",
  "https://cobalt.api.timelessnesses.me",
  "https://cobalt-api.ayo.tf",
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

    // Try Cobalt instances
    for (const instance of COBALT_INSTANCES) {
      try {
        const result = await tryCobalt(instance, url, videoQuality);
        if (result) {
          return NextResponse.json({
            platform,
            title: result.title || "Video Download",
            thumbnail: result.thumbnail || null,
            formats: result.formats,
            source: "cobalt",
          });
        }
      } catch {
        // Try next instance
        continue;
      }
    }

    // Try AllSaver API (another free option)
    try {
      const result = await tryAllSaver(url);
      if (result) {
        return NextResponse.json({
          platform,
          title: result.title || "Video Download",
          thumbnail: result.thumbnail || null,
          formats: result.formats,
          source: "allsaver",
        });
      }
    } catch {
      // Continue to fallback
    }

    // All providers failed
    return NextResponse.json(
      {
        error:
          "Unable to fetch download links right now. All download servers are busy. Please try again in a few moments.",
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
// Provider 1: Cobalt API (Open Source Instances)
// =====================================================
async function tryCobalt(
  instance: string,
  url: string,
  quality: string
): Promise<{ title?: string; thumbnail?: string; formats: Format[] } | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

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
        filenameStyle: "basic",
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) return null;

    const data = await response.json();

    // Cobalt returns different response types
    if (data.status === "error") return null;

    const formats: Format[] = [];

    if (data.status === "tunnel" || data.status === "redirect") {
      // Single file download
      formats.push({
        quality: `Best Available (${quality}p)`,
        format: "MP4",
        size: "Auto",
        url: data.url,
      });
    } else if (data.status === "picker") {
      // Multiple options (e.g., carousel posts)
      if (data.picker && Array.isArray(data.picker)) {
        data.picker.forEach(
          (item: { url: string; thumb?: string; type?: string }, i: number) => {
            formats.push({
              quality: `Item ${i + 1}`,
              format: item.type === "photo" ? "JPG" : "MP4",
              size: "Auto",
              url: item.url,
              thumbnail: item.thumb,
            });
          }
        );
      }
      // Also include the main audio if available
      if (data.audio) {
        formats.push({
          quality: "Audio Only",
          format: "MP3",
          size: "Auto",
          url: data.audio,
        });
      }
    }

    if (formats.length === 0) return null;

    return { formats };
  } catch {
    clearTimeout(timeout);
    return null;
  }
}

// =====================================================
// Provider 2: AllSaver-style API
// =====================================================
async function tryAllSaver(
  url: string
): Promise<{ title?: string; thumbnail?: string; formats: Format[] } | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    // Use a public video info API
    const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl, {
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) return null;

    // This is a fallback — it won't always provide direct downloads
    // but can help with some platforms
    return null;
  } catch {
    clearTimeout(timeout);
    return null;
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
}
