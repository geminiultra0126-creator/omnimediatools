import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "../../lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Omni Media Tools — free browser-based media tools for creators, students, marketers, and everyday users.",
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
          About <span className="gradient-text">Omni Media Tools</span>
        </h1>

        <div className="prose max-w-none space-y-6">
          <p className="text-lg leading-relaxed">
            Omni Media Tools is a free, fast, and reliable suite of browser-based
            media tools designed to help creators, students, marketers, and
            everyday users manage their own media content. No registration, no
            software installation, and absolutely no cost.
          </p>

          <h2>Our Mission</h2>
          <p>
            We believe that managing your own media content should be simple and
            accessible. Whether you need to back up your YouTube uploads, save
            your Instagram Reels for repurposing, extract audio from your own
            video content, or convert media formats — Omni Media Tools makes it
            possible in just a few clicks.
          </p>

          <h2>What We Offer</h2>
          <ul>
            <li><strong>20+ Platform Support:</strong> Manage media from YouTube, Instagram, TikTok, Twitter/X, Facebook, Pinterest, Reddit, Vimeo, LinkedIn, and many more.</li>
            <li><strong>Multiple Formats:</strong> Save content as MP4, MP3, WEBM, M4A, and other popular formats.</li>
            <li><strong>Quality up to 8K:</strong> Process media in the highest available quality, from 360p to 8K Ultra HD.</li>
            <li><strong>100% Free:</strong> No hidden costs, no premium tiers, no subscription fees. Omni Media Tools is completely free to use.</li>
            <li><strong>No Registration:</strong> Start using our tools immediately. No sign-up or account creation needed.</li>
            <li><strong>Privacy Focused:</strong> We don&apos;t store your files or personal information. All processing happens in real-time.</li>
          </ul>

          <h2>How It Works</h2>
          <p>Omni Media Tools works by processing publicly available media URLs. When you paste a URL:</p>
          <ol>
            <li>Our system identifies the platform and content type</li>
            <li>We fetch all available format and quality options</li>
            <li>You choose your preferred option and the file is saved directly to your device</li>
          </ol>
          <p>The entire process takes just seconds, and no content is stored on our servers.</p>

          <h2>Responsible Use</h2>
          <p>
            Omni Media Tools is designed for downloading and managing your own
            content, public-domain media, or content you have permission to use.
            We do not support copyright infringement or unauthorized downloading.
            Users are solely responsible for ensuring they have the right to use
            any content processed through our tools.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li><strong>Simplicity:</strong> Anyone should be able to use our tools, regardless of technical ability.</li>
            <li><strong>Transparency:</strong> We&apos;re upfront about what we do and how we handle your data.</li>
            <li><strong>Respect for Creators:</strong> We encourage users to respect copyright and creator rights at all times.</li>
            <li><strong>Privacy:</strong> We minimize data collection and never sell user information.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            Have questions, feedback, or suggestions? We&apos;d love to hear from you. Visit our <Link href="/contact">Contact page</Link> or email us at <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
