export interface Platform {
  slug: string;
  name: string;
  color: string;
  description: string;
  tagline: string;
  features: string[];
  formats: string[];
  popular?: boolean;
  hidden?: boolean;
  iconSvg: string;
  metaTitle: string;
  metaDescription: string;
  howTo: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  longContent?: string;
}

export const platforms: Platform[] = [
  {
    slug: "youtube-downloader",
    name: "YouTube",
    color: "#FF0000",
    description: "Save creator-owned or permission-based video content from YouTube. Manage your own uploads, educational resources, and public-domain videos.",
    tagline: "Videos, Shorts & Audio",
    features: ["4K/8K Video", "Audio Extraction", "Shorts", "Public Content", "Subtitles"],
    formats: ["MP4", "WEBM", "MP3", "M4A", "OGG"],
    popular: true,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    metaTitle: "YouTube Media Tools — Save & Convert Your Own Videos | Omni Media Tools",
    metaDescription: "Use free YouTube media tools to save your own uploads, extract audio from permitted videos, and manage creator-owned content in multiple formats.",
    howTo: [
      { step: "Copy the video URL", description: "Go to YouTube, find your own video or permitted content, and copy the URL from the address bar or share button." },
      { step: "Paste & choose format", description: "Paste the link in the input box above. Select your preferred format (MP4 for video, MP3 for audio) and quality." },
      { step: "Save to your device", description: "Click the button and your file will be saved directly to your device. No registration or software needed." },
    ],
    faqs: [
      { question: "What content can I process with this tool?", answer: "You can use this tool to manage your own uploaded content, public-domain videos, Creative Commons content, or any content you have explicit permission to use." },
      { question: "What quality options are available?", answer: "Omni Media Tools supports all available qualities from 360p up to 8K Ultra HD, depending on the original video quality." },
      { question: "Can I extract audio from video content?", answer: "Yes, you can convert your own video files or permitted media into audio format (MP3 up to 320kbps, M4A, OGG, or other formats)." },
      { question: "Is this tool free to use?", answer: "Yes, Omni Media Tools is 100% free with no hidden costs, no premium tiers, and no usage limits." },
      { question: "Do I need to install any software?", answer: "No, Omni Media Tools works entirely in your web browser. Just paste a link and go — no software, extensions, or apps needed." },
    ],
    longContent: `<h2>What Is the YouTube Media Tool?</h2>
<p>The YouTube Media Tool from Omni Media Tools is a free, browser-based utility designed to help content creators, educators, students, and everyday users manage their own YouTube content efficiently. Whether you need to back up your own uploaded videos, extract audio from your own lectures or podcasts, or convert your content into different formats for cross-platform publishing, this tool makes the process simple and fast.</p>
<p>Unlike desktop software that requires installation and updates, our YouTube tool works entirely in your web browser. There is nothing to download, no accounts to create, and no fees to pay. Simply paste the URL of your own YouTube content, choose your preferred format and quality, and save the file directly to your device.</p>

<h2>Who Can Use This Tool?</h2>
<p>This tool is designed for anyone who needs to manage their own YouTube content responsibly:</p>
<ul>
<li><strong>Content Creators:</strong> Back up your own uploads, repurpose videos for other platforms like Instagram or TikTok, or extract audio for podcast episodes.</li>
<li><strong>Educators & Students:</strong> Save your own educational lectures, presentations, or tutorials for offline access. Students can save their own project submissions or school-related content.</li>
<li><strong>Marketers:</strong> Convert your own promotional videos into different formats optimized for various social media platforms and email campaigns.</li>
<li><strong>Personal Users:</strong> Keep backup copies of your own family videos, travel vlogs, or personal content that you have uploaded to YouTube.</li>
</ul>

<h2>Copyright-Safe Use Cases</h2>
<p>Omni Media Tools is committed to responsible media management. Here are examples of legitimate, copyright-safe uses of this tool:</p>
<ul>
<li>Backing up your own YouTube channel videos to a local drive</li>
<li>Converting your own video content to MP3 for podcast distribution</li>
<li>Saving Creative Commons or public-domain educational content</li>
<li>Downloading your own tutorials for offline editing and re-uploading</li>
<li>Extracting audio from your own recorded interviews or lectures</li>
</ul>
<p>Always ensure you have the right to use any content you process through this tool. Never use it to download copyrighted music, movies, or other people's creative work without their explicit permission.</p>

<h2>Step-by-Step Guide</h2>
<ol>
<li><strong>Find Your Content:</strong> Navigate to YouTube and locate the video you own or have permission to use. Make sure the content is publicly accessible.</li>
<li><strong>Copy the URL:</strong> Click on the address bar in your browser and copy the full URL. You can also use the Share button on YouTube and copy the link from there.</li>
<li><strong>Paste into Omni Media Tools:</strong> Return to this page and paste the copied URL into the input box above. The tool will automatically detect the content.</li>
<li><strong>Select Format & Quality:</strong> Choose your preferred output format (MP4 for video, MP3 for audio) and select the quality level from 360p up to 8K Ultra HD.</li>
<li><strong>Save to Your Device:</strong> Click the download button and the file will be saved directly to your device. No registration or additional steps required.</li>
</ol>

<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading. Users are solely responsible for ensuring they have the legal right to process any content through our tools.</p>`,
  },
  {
    slug: "instagram-downloader",
    name: "Instagram",
    color: "#E1306C",
    description: "Manage your own Instagram content — save your Reels, Posts, and Stories for backup or repurposing across platforms.",
    tagline: "Reels, Posts & Stories",
    features: ["Reels", "Posts", "Stories", "IGTV", "Photos"],
    formats: ["MP4", "JPG", "PNG"],
    popular: true,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
    metaTitle: "Instagram Media Tools — Save Your Own Reels & Posts | Omni Media Tools",
    metaDescription: "Use free Instagram media tools to save your own Reels, Posts, and Stories for backup or repurposing. Manage creator-owned content easily.",
    howTo: [
      { step: "Copy the Instagram link", description: "Open Instagram, tap the three dots on your own post/reel and select 'Copy Link' or copy the URL from your browser." },
      { step: "Paste the link", description: "Paste the Instagram URL into the tool above. Omni Media Tools will automatically detect the content type." },
      { step: "Save to your device", description: "Click the button and the content will be saved directly to your device in full quality." },
    ],
    faqs: [
      { question: "Can I save my own Instagram Reels?", answer: "Yes! Simply copy your Reel's link and paste it into Omni Media Tools. The video will be saved in its original quality." },
      { question: "Can I backup my Instagram Stories?", answer: "Yes, Omni Media Tools supports saving Stories from public accounts. This is useful for backing up your own content before it expires." },
      { question: "Do I need to log in to my Instagram account?", answer: "No, you don't need to log in. Omni Media Tools works with any public Instagram content URL." },
      { question: "What quality are the saved files?", answer: "Omni Media Tools saves Instagram content in the highest available quality, matching the original upload quality." },
    ],
    longContent: `<h2>What Is the Instagram Media Tool?</h2>
<p>The Instagram Media Tool is a free, browser-based utility that helps you manage your own Instagram content. Content creators who post across multiple platforms often need to save their own Reels, Posts, and Stories for repurposing, portfolio building, or simple backup. This tool makes that process effortless — just paste the URL and save.</p>
<p>Instagram Stories disappear after 24 hours, making backup particularly important if you want to preserve your creative work. Our tool lets you save your own Stories before they expire, ensuring you never lose content you have worked hard to create.</p>

<h2>Who Can Use This Tool?</h2>
<ul>
<li><strong>Influencers & Creators:</strong> Save your own Reels and Posts for repurposing on YouTube Shorts, TikTok, or your personal website portfolio.</li>
<li><strong>Small Business Owners:</strong> Back up your own product photos, promotional Reels, and brand content for use in other marketing channels.</li>
<li><strong>Students:</strong> Save your own educational or project-related Instagram content for presentations and portfolios.</li>
<li><strong>Personal Users:</strong> Keep copies of your own photos, stories, and memories posted on Instagram.</li>
</ul>

<h2>Copyright-Safe Use Cases</h2>
<ul>
<li>Backing up your own Instagram Reels before deleting them from your profile</li>
<li>Saving your own Stories before they expire after 24 hours</li>
<li>Repurposing your own Posts for use on other platforms or your website</li>
<li>Archiving your own brand content for internal records</li>
</ul>

<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "tiktok-downloader",
    name: "TikTok",
    color: "#00F2EA",
    description: "Save your own TikTok videos for backup, repurposing, or cross-platform publishing. Manage your creator content easily.",
    tagline: "Save your own videos",
    features: ["HD Quality", "Audio Extraction", "Slideshows", "Creator Tools"],
    formats: ["MP4", "MP3"],
    popular: true,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
    metaTitle: "TikTok Media Tools — Save & Manage Your Own TikTok Videos | Omni Media Tools",
    metaDescription: "Free TikTok media tools to save your own videos for backup or cross-platform publishing. Manage creator content in HD quality.",
    howTo: [
      { step: "Copy the TikTok link", description: "Open TikTok, tap 'Share' on your own video, then tap 'Copy Link' to copy the video URL." },
      { step: "Paste & select format", description: "Paste the TikTok link above. Choose between video (MP4) or audio extraction (MP3)." },
      { step: "Save your content", description: "Click the button to save the video directly to your device." },
    ],
    faqs: [
      { question: "Can I save my own TikTok videos?", answer: "Yes! Omni Media Tools lets you save your own TikTok content in HD quality for backup or cross-platform use." },
      { question: "Can I extract audio from TikTok videos?", answer: "Yes, you can extract the audio from your own TikTok video and save it as an MP3 file." },
      { question: "Does this work with private accounts?", answer: "No, Omni Media Tools can only process content from public TikTok accounts. Private account content cannot be accessed." },
    ],
    longContent: `<h2>What Is the TikTok Media Tool?</h2>
<p>The TikTok Media Tool helps content creators save and manage their own TikTok videos. TikTok's native save feature adds watermarks and reduces quality, which can be problematic when you want to repurpose your own content on other platforms like YouTube Shorts, Instagram Reels, or your personal website.</p>
<p>Our browser-based tool gives you a clean, high-quality copy of your own TikTok content that you can use for cross-platform publishing, portfolio building, or archival purposes. No app installation needed — it works entirely in your web browser.</p>

<h2>Who Can Use This Tool?</h2>
<ul>
<li><strong>TikTok Creators:</strong> Save your own viral videos for repurposing on YouTube Shorts, Instagram, or Facebook Reels.</li>
<li><strong>Digital Marketers:</strong> Back up your own brand's TikTok campaigns for analytics, reporting, and internal presentations.</li>
<li><strong>Educators:</strong> Save your own educational TikTok content for use in classroom settings or online courses.</li>
<li><strong>Personal Users:</strong> Keep backup copies of your own personal TikTok memories and creative projects.</li>
</ul>

<h2>Copyright-Safe Use Cases</h2>
<ul>
<li>Saving your own TikTok videos in HD quality for cross-platform publishing</li>
<li>Backing up your own content before account changes or deletions</li>
<li>Extracting audio from your own TikTok videos for podcast use</li>
<li>Archiving your own brand's TikTok marketing content</li>
</ul>

<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "twitter-downloader",
    name: "Twitter / X",
    color: "#1DA1F2",
    description: "Save your own Twitter/X videos and GIFs. Manage your posted media content for backup or repurposing.",
    tagline: "Videos & GIFs from posts",
    features: ["Videos", "GIFs", "HD Quality", "Multiple Formats"],
    formats: ["MP4", "GIF"],
    popular: true,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    metaTitle: "Twitter / X Media Tools — Save Your Own Videos & GIFs | Omni Media Tools",
    metaDescription: "Free Twitter/X media tools to save your own videos and GIFs from tweets. Manage your posted content in HD quality.",
    howTo: [
      { step: "Copy the tweet URL", description: "Find your tweet with the video, click the share icon, and select 'Copy link to Tweet'." },
      { step: "Paste the link", description: "Paste the Twitter/X link into the tool above. Omni Media Tools will fetch available formats." },
      { step: "Choose quality & save", description: "Select your preferred quality and click the button. The video will be saved to your device." },
    ],
    faqs: [
      { question: "Can I save my own Twitter/X videos?", answer: "Yes! Omni Media Tools supports saving videos from both Twitter and X. Just paste the tweet URL." },
      { question: "Can I save GIFs from tweets?", answer: "Yes, Twitter GIFs are actually short MP4 videos, and Omni Media Tools can save them in their original quality." },
      { question: "Do I need a Twitter account?", answer: "No, you can process media from any public tweet without having a Twitter/X account." },
    ],
    longContent: `<h2>What Is the Twitter / X Media Tool?</h2>
<p>The Twitter / X Media Tool allows you to save your own posted videos and GIFs from tweets for backup, repurposing, or content management. Twitter does not provide a native download option for videos, which can be frustrating when you need your own content in a portable format.</p>
<p>This free, browser-based tool solves that problem. Simply paste the URL of your own tweet containing a video, and save it directly to your device in full quality. Works on any browser, any device, with no registration required.</p>

<h2>Who Can Use This Tool?</h2>
<ul>
<li><strong>Journalists & Writers:</strong> Save your own video tweets for portfolio building and cross-platform publishing.</li>
<li><strong>Brand Managers:</strong> Back up your own brand's video tweets for social media reports and campaign archives.</li>
<li><strong>Content Creators:</strong> Repurpose your own Twitter/X video content for Instagram, TikTok, or YouTube.</li>
<li><strong>Personal Users:</strong> Save your own GIFs and video memories from your Twitter/X posts.</li>
</ul>

<h2>Copyright-Safe Use Cases</h2>
<ul>
<li>Saving your own video tweets for backup before deleting them</li>
<li>Backing up your own GIF posts for portfolio or archives</li>
<li>Repurposing your own video content for use on other social platforms</li>
<li>Saving your own brand's campaign videos for internal reporting</li>
</ul>

<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "facebook-downloader",
    name: "Facebook",
    color: "#1877F2",
    description: "Save your own Facebook videos and Reels for backup or cross-platform publishing. Manage your creator content.",
    tagline: "Videos & Reels",
    features: ["Videos", "Reels", "Watch", "HD Quality", "Creator Content"],
    formats: ["MP4"],
    popular: true,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    metaTitle: "Facebook Media Tools — Save Your Own FB Videos | Omni Media Tools",
    metaDescription: "Free Facebook media tools to save your own videos, Reels, and Watch content for backup. Manage creator content in HD quality.",
    howTo: [
      { step: "Copy the Facebook video URL", description: "Open your Facebook video, click the three dots menu and select 'Copy link', or copy the URL from your browser." },
      { step: "Paste the link", description: "Paste the Facebook video URL into the tool above." },
      { step: "Save in HD", description: "Choose between HD or SD quality and click to save the video." },
    ],
    faqs: [
      { question: "Can I save my own Facebook Reels?", answer: "Yes, Omni Media Tools supports saving Facebook Reels. Just copy the Reel's URL and paste it." },
      { question: "Can I save private Facebook videos?", answer: "No, Omni Media Tools can only process publicly available Facebook videos." },
      { question: "What quality options are available?", answer: "Facebook videos are typically available in HD (720p) and SD (360p). Omni Media Tools lets you choose your preferred quality." },
    ],
    longContent: `<h2>What Is the Facebook Media Tool?</h2>
<p>The Facebook Media Tool helps you save and manage your own Facebook videos, Reels, and Watch content. As a creator or business page owner, you may want to back up your own video content, repurpose it for other platforms, or simply keep a local copy for your records.</p>
<p>Facebook does not always make it easy to download your own videos in their original quality. Our browser-based tool provides a simple solution — paste the URL of your own Facebook video and save it to your device in HD or SD quality.</p>

<h2>Who Can Use This Tool?</h2>
<ul>
<li><strong>Business Page Owners:</strong> Back up your own product videos, live streams, and promotional content for use across marketing channels.</li>
<li><strong>Content Creators:</strong> Save your own Facebook Reels for repurposing on Instagram, TikTok, or YouTube.</li>
<li><strong>Community Managers:</strong> Archive your own group's video content for internal documentation and training.</li>
<li><strong>Personal Users:</strong> Save your own family videos, event recordings, and personal memories from Facebook.</li>
</ul>

<h2>Copyright-Safe Use Cases</h2>
<ul>
<li>Downloading your own Facebook Live recordings for archival</li>
<li>Saving your own Facebook Reels for cross-platform publishing</li>
<li>Backing up your own business page's video content</li>
<li>Preserving your own personal video memories from Facebook</li>
</ul>

<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "pinterest-downloader",
    name: "Pinterest",
    color: "#E60023",
    description: "Save your own Pinterest pins, video pins, and images for backup or creative projects.",
    tagline: "Pins & video pins",
    features: ["Video Pins", "Images", "GIFs", "High Resolution"],
    formats: ["MP4", "JPG", "PNG", "GIF"],
    popular: false,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/></svg>`,
    metaTitle: "Pinterest Media Tools — Save Pins & Video Pins | Omni Media Tools",
    metaDescription: "Free Pinterest media tools to save your own pins, video pins, and images in full resolution.",
    howTo: [
      { step: "Copy the Pin URL", description: "Open any Pinterest pin, click the share icon and copy the link, or copy from your browser's address bar." },
      { step: "Paste & detect", description: "Paste the Pinterest URL above. Omni Media Tools auto-detects whether it's a video pin, image, or GIF." },
      { step: "Save the pin", description: "Click the button to save the pin in its original quality to your device." },
    ],
    faqs: [
      { question: "Can I save Pinterest video pins?", answer: "Yes, Omni Media Tools supports saving both video pins and image pins from Pinterest." },
      { question: "What resolution are saved images?", answer: "Omni Media Tools saves Pinterest images in the highest available resolution, typically the original upload quality." },
    ],
    longContent: `<h2>What Is the Pinterest Media Tool?</h2>
<p>The Pinterest Media Tool helps creators and marketers save their own pins, video pins, and images for portfolio building, backup, or cross-platform sharing. Pinterest is a visual discovery platform, and creators who invest time creating pin-worthy content need reliable ways to manage their media library.</p>
<h2>Who Can Use This Tool?</h2>
<ul><li><strong>Graphic Designers:</strong> Back up your own design pins and infographics for portfolio use.</li><li><strong>Bloggers:</strong> Save your own pin graphics for reuse across platforms and blog posts.</li><li><strong>Marketers:</strong> Archive your own brand's Pinterest campaigns for analytics and reporting.</li><li><strong>Personal Users:</strong> Keep copies of your own uploaded recipe pins, DIY project pins, and inspiration boards.</li></ul>
<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "reddit-downloader",
    name: "Reddit",
    color: "#FF4500",
    description: "Save your own Reddit video posts and GIFs with audio for backup or repurposing.",
    tagline: "Videos & GIFs from posts",
    features: ["Videos with Audio", "GIFs", "HD Quality", "All Subreddits"],
    formats: ["MP4", "GIF"],
    popular: false,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>`,
    metaTitle: "Reddit Media Tools — Save Reddit Videos with Audio | Omni Media Tools",
    metaDescription: "Free Reddit media tools to save your own video posts with audio. Manage your posted GIFs and videos for backup.",
    howTo: [
      { step: "Copy the Reddit post URL", description: "Open your Reddit post with the video, click Share, and copy the link." },
      { step: "Paste the link", description: "Paste the Reddit URL into the tool above." },
      { step: "Save with audio", description: "Click the button. Omni Media Tools automatically merges video and audio (Reddit stores them separately)." },
    ],
    faqs: [
      { question: "Why do Reddit videos often have no audio?", answer: "Reddit stores video and audio in separate files. Omni Media Tools automatically merges them so you get the complete video with sound." },
      { question: "Can I save Reddit GIFs?", answer: "Yes! Omni Media Tools can save GIFs from Reddit posts in their original quality." },
    ],
    longContent: `<h2>What Is the Reddit Media Tool?</h2>
<p>The Reddit Media Tool solves a common frustration: Reddit stores video and audio in separate files, making it difficult to save your own video posts with sound. Our tool automatically merges them, giving you a complete video file with audio intact.</p>
<h2>Who Can Use This Tool?</h2>
<ul><li><strong>Reddit Content Creators:</strong> Save your own video posts for backup or repurposing on other platforms.</li><li><strong>Community Moderators:</strong> Archive your own community's video content for documentation.</li><li><strong>Researchers:</strong> Save public domain or permitted research-related video content.</li></ul>
<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "snapchat-downloader",
    name: "Snapchat",
    color: "#FFFC00",
    description: "Save your own Snapchat Spotlight videos and public Stories for backup or content management.",
    tagline: "Stories & Spotlights",
    features: ["Spotlight", "Public Stories", "HD Video"],
    formats: ["MP4"],
    popular: false,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301a.603.603 0 0 1 .272-.063c.12 0 .24.03.36.09a.57.57 0 0 1 .33.48c.036.299-.18.539-.36.675-.12.09-.301.18-.496.27-.093.045-.192.09-.276.135a2.138 2.138 0 0 0-.42.27c-.12.12-.18.27-.18.42a.744.744 0 0 0 .024.18c.033.135.12.42.48 1.08.18.33.39.63.6.87.63.72 1.26 1.14 2.04 1.38.12.03.18.06.24.09.18.09.27.21.27.33 0 .18-.12.33-.33.42a2.497 2.497 0 0 1-.9.18c-.18.02-.36.06-.54.12-.36.11-.48.36-.75.81-.18.27-.42.54-.84.78s-.78.36-1.14.42c-.18.03-.36.03-.54.03-.18 0-.42-.03-.66-.06a4.456 4.456 0 0 0-.96-.12c-.24 0-.48.03-.72.09a4.983 4.983 0 0 0-.72.27c-.69.33-1.38.78-2.13 1.02a4.317 4.317 0 0 1-1.32.21c-.42 0-.84-.09-1.2-.21a7.728 7.728 0 0 0-2.13-1.02c-.24-.09-.48-.15-.72-.18s-.48-.09-.72-.09c-.36 0-.66.03-.96.12-.18.03-.42.06-.66.06a3.3 3.3 0 0 1-.54-.03c-.36-.06-.78-.18-1.14-.42s-.66-.51-.84-.78c-.27-.45-.39-.7-.75-.81-.18-.06-.36-.1-.54-.12a2.497 2.497 0 0 1-.9-.18c-.21-.09-.33-.24-.33-.42 0-.12.09-.24.27-.33.06-.03.12-.06.24-.09.78-.24 1.41-.66 2.04-1.38.21-.24.42-.54.6-.87.36-.66.45-.96.48-1.08a.744.744 0 0 0 .024-.18.52.52 0 0 0-.18-.42 2.138 2.138 0 0 0-.42-.27c-.084-.045-.183-.09-.276-.135-.195-.09-.375-.18-.496-.27-.18-.135-.396-.375-.36-.675a.57.57 0 0 1 .33-.48.612.612 0 0 1 .36-.09c.093 0 .18.015.272.063.374.18.733.285 1.033.301.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.3-4.847C7.86 1.069 11.216.793 12.206.793z"/></svg>`,
    metaTitle: "Snapchat Media Tools — Save Stories & Spotlights | Omni Media Tools",
    metaDescription: "Free Snapchat media tools to save your own Spotlight videos and public Stories for backup.",
    howTo: [
      { step: "Copy the Snapchat link", description: "Open Snapchat, find the Spotlight or public Story, tap Share, and copy the link." },
      { step: "Paste the URL", description: "Paste the Snapchat link into the tool above." },
      { step: "Save the video", description: "Click the button to save the Snapchat video to your device." },
    ],
    faqs: [
      { question: "Can I save Snapchat Stories?", answer: "Yes, Omni Media Tools can save publicly shared Snapchat Stories. Private stories cannot be accessed." },
      { question: "Can I save Snapchat Spotlight videos?", answer: "Yes! Simply copy the Spotlight video link and paste it into Omni Media Tools." },
    ],
    longContent: `<h2>What Is the Snapchat Media Tool?</h2>
<p>The Snapchat Media Tool lets you save your own Spotlight videos and public Stories for backup before they expire. Snapchat content is ephemeral by design, making backup essential for creators who want to preserve their creative work.</p>
<h2>Who Can Use This Tool?</h2>
<ul><li><strong>Spotlight Creators:</strong> Save your own viral Spotlight videos for repurposing on TikTok or Instagram.</li><li><strong>Brand Accounts:</strong> Archive your own brand's Snapchat campaigns for internal records.</li><li><strong>Personal Users:</strong> Keep copies of your own Snapchat memories and Stories.</li></ul>
<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "linkedin-downloader",
    name: "LinkedIn",
    color: "#0A66C2",
    description: "Save your own LinkedIn video posts for backup or professional portfolio management.",
    tagline: "Video posts & articles",
    features: ["Video Posts", "Article Videos", "HD Quality"],
    formats: ["MP4"],
    popular: false,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    metaTitle: "LinkedIn Media Tools — Save Your LinkedIn Videos | Omni Media Tools",
    metaDescription: "Free LinkedIn media tools to save your own video posts for portfolio management or backup.",
    howTo: [
      { step: "Copy the LinkedIn post URL", description: "Open your LinkedIn post with the video, click the three dots, and select 'Copy link to post'." },
      { step: "Paste the URL", description: "Paste the LinkedIn video URL into the tool above." },
      { step: "Save the video", description: "Click the button and the LinkedIn video will be saved to your device." },
    ],
    faqs: [
      { question: "Can I save my LinkedIn videos?", answer: "Yes, Omni Media Tools supports saving videos from public LinkedIn posts and articles." },
      { question: "Do I need a LinkedIn account?", answer: "The video must be publicly accessible. Some LinkedIn content requires being logged in to view." },
    ],
    longContent: `<h2>What Is the LinkedIn Media Tool?</h2>
<p>The LinkedIn Media Tool helps professionals save their own video posts for portfolio management, presentation reuse, or backup. LinkedIn does not offer a native video download option, which can be frustrating when you need your own content in a portable format for client presentations or professional portfolios.</p>
<h2>Who Can Use This Tool?</h2>
<ul><li><strong>Professionals:</strong> Save your own video posts for use in professional portfolios and resumes.</li><li><strong>Corporate Trainers:</strong> Back up your own training videos for offline use in workshops.</li><li><strong>Thought Leaders:</strong> Archive your own LinkedIn video content for repurposing into courses or webinars.</li></ul>
<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "threads-downloader",
    name: "Threads",
    color: "#000000",
    description: "Save your own Threads videos and media posts for backup or content management.",
    tagline: "Videos & media posts",
    features: ["Videos", "Media Posts", "Photos"],
    formats: ["MP4", "JPG"],
    popular: false,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.17.408-2.265 1.333-3.082.878-.774 2.132-1.224 3.637-1.302 1.102-.057 2.148.033 3.132.203a8.87 8.87 0 0 0-.07-1.033c-.197-1.46-.818-2.086-2.311-2.169a5.788 5.788 0 0 0-.122-.003c-.98 0-1.96.332-2.467.882l-1.42-1.42c.852-.917 2.24-1.464 3.887-1.464l.131.003c2.637.143 4.127 1.545 4.42 4.167.048.432.076.887.083 1.365a7.922 7.922 0 0 1 2.2 1.663c1.186 1.348 1.512 2.963 1.153 4.541-.509 2.237-1.986 3.886-4.27 4.77-1.415.547-3.05.84-4.863.872zm-1.593-6.49c-.954.05-1.69.315-2.134.68-.508.42-.615.94-.586 1.46.043.77.592 1.766 2.834 1.766.081 0 .163-.002.246-.006 1.648-.09 2.777-1.084 3.01-3.09a10.84 10.84 0 0 0-3.37-.81z"/></svg>`,
    metaTitle: "Threads Media Tools — Save Your Threads Videos | Omni Media Tools",
    metaDescription: "Free Threads media tools to save your own videos and media posts for backup.",
    howTo: [
      { step: "Copy the Threads post link", description: "Open the Threads app, tap the share icon on your post, and copy the link." },
      { step: "Paste the URL", description: "Paste the Threads link into the tool above." },
      { step: "Save the content", description: "Click the button to save the video or image to your device." },
    ],
    faqs: [
      { question: "Can I save Threads videos?", answer: "Yes, Omni Media Tools supports saving videos posted on Meta's Threads platform." },
      { question: "Can I save Threads photos?", answer: "Yes, you can save both videos and photos from public Threads posts." },
    ],
    longContent: `<h2>What Is the Threads Media Tool?</h2>
<p>The Threads Media Tool helps you save your own videos and media posts from Meta's Threads platform. As a newer social platform, Threads does not yet offer robust content management features, making external tools essential for creators who want to back up or repurpose their content.</p>
<h2>Who Can Use This Tool?</h2>
<ul><li><strong>Content Creators:</strong> Save your own Threads videos for cross-posting to Instagram, TikTok, or YouTube.</li><li><strong>Brand Managers:</strong> Archive your own brand's Threads content for campaign tracking.</li><li><strong>Early Adopters:</strong> Keep copies of your own content as the platform evolves.</li></ul>
<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "vimeo-downloader",
    name: "Vimeo",
    color: "#1AB7EA",
    description: "Save your own Vimeo videos for backup or offline viewing. Manage your creator content in various formats.",
    tagline: "High-quality video",
    features: ["HD/4K Video", "Multiple Formats", "Creator Content"],
    formats: ["MP4", "WEBM"],
    popular: false,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/></svg>`,
    metaTitle: "Vimeo Media Tools — Save Your Vimeo Videos | Omni Media Tools",
    metaDescription: "Free Vimeo media tools to save your own videos in HD and 4K quality for offline viewing.",
    howTo: [
      { step: "Copy the Vimeo URL", description: "Go to Vimeo, find your video, and copy the URL from the address bar." },
      { step: "Paste & select quality", description: "Paste the Vimeo link above and choose your preferred video quality." },
      { step: "Save the video", description: "Click the button and the Vimeo video will be saved to your device." },
    ],
    faqs: [
      { question: "Can I save Vimeo videos in 4K?", answer: "Yes, if the original video was uploaded in 4K, Omni Media Tools will offer 4K as an option." },
      { question: "Can I save private Vimeo videos?", answer: "No, Omni Media Tools can only process publicly available Vimeo videos." },
    ],
    longContent: `<h2>What Is the Vimeo Media Tool?</h2>
<p>The Vimeo Media Tool is designed for filmmakers, videographers, and creators who host their work on Vimeo. Vimeo is known for its high-quality, ad-free video hosting, and our tool helps you save your own uploaded content in the highest available quality for backup or offline editing.</p>
<h2>Who Can Use This Tool?</h2>
<ul><li><strong>Filmmakers:</strong> Back up your own short films, showreels, and demo reels from Vimeo.</li><li><strong>Videographers:</strong> Save your own client project previews for portfolio management.</li><li><strong>Educators:</strong> Archive your own educational content hosted on Vimeo for offline classroom use.</li></ul>
<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "dailymotion-downloader",
    name: "Dailymotion",
    color: "#0066DC",
    description: "Save your own Dailymotion videos for offline viewing and content management.",
    tagline: "HD video management",
    features: ["HD Video", "Multiple Qualities", "Fast Processing"],
    formats: ["MP4"],
    popular: false,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.08 4.85c-1.75 0-3.27.67-4.51 1.84V.5H7.03v14.24c0 1.82.43 3.25 1.38 4.35 1.17 1.37 2.89 2.11 4.82 2.11 1.69 0 3.2-.61 4.43-1.76 1.37-1.29 2.19-3.16 2.19-5.32 0-1.97-.76-3.68-2.02-4.9a6.04 6.04 0 0 0-2.75-1.37zm-.23 10.1c-.98.91-2.36.98-3.06.43-.59-.45-.78-1.21-.78-2.21 0-1.17.37-2.18 1.14-2.95.83-.82 1.78-1.05 2.62-.73.75.29 1.27.93 1.53 1.73.17.53.22 1.08.11 1.72-.14.85-.63 1.15-1.56 2.01z"/></svg>`,
    metaTitle: "Dailymotion Media Tools — Save Dailymotion Videos | Omni Media Tools",
    metaDescription: "Free Dailymotion media tools to save your own videos in HD quality for offline viewing.",
    howTo: [
      { step: "Copy the Dailymotion URL", description: "Go to Dailymotion, find your video, and copy the URL from the address bar." },
      { step: "Paste the link", description: "Paste the Dailymotion URL into the tool above." },
      { step: "Save in HD", description: "Select your preferred quality and click to save." },
    ],
    faqs: [
      { question: "What quality options are available?", answer: "Omni Media Tools supports saving Dailymotion videos in all available qualities, from 240p to 1080p HD." },
    ],
    longContent: `<h2>What Is the Dailymotion Media Tool?</h2>
<p>The Dailymotion Media Tool helps creators save their own Dailymotion videos for offline viewing and content management. Dailymotion is a popular alternative to YouTube, and many creators host content there alongside other platforms.</p>
<h2>Who Can Use This Tool?</h2>
<ul><li><strong>Multi-Platform Creators:</strong> Save your own Dailymotion uploads for cross-platform distribution.</li><li><strong>News Organizations:</strong> Archive your own published video reports for internal records.</li><li><strong>Educators:</strong> Save your own educational content for offline classroom use.</li></ul>
<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "spotify-downloader",
    name: "Spotify",
    color: "#1DB954",
    description: "Audio management tools for Spotify content. Convert your own podcast episodes or permitted audio content.",
    tagline: "Audio management tools",
    features: ["Podcasts", "Audio Conversion", "High Quality Audio"],
    formats: ["MP3", "M4A", "OGG"],
    popular: false,
    hidden: true,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
    metaTitle: "Spotify Audio Tools — Manage Your Audio Content | Omni Media Tools",
    metaDescription: "Free Spotify audio tools for managing podcast episodes and permitted audio content. Convert and save in multiple formats.",
    howTo: [
      { step: "Copy the Spotify link", description: "Open Spotify, find the podcast episode or permitted content, click Share, and copy the link." },
      { step: "Paste & convert", description: "Paste the Spotify URL above. Omni Media Tools will process the audio into your preferred format." },
      { step: "Save the audio", description: "Click the button to save the audio file to your device." },
    ],
    faqs: [
      { question: "What content can I process?", answer: "You can use this tool for podcast episodes and audio content you have permission to use. Always respect copyright." },
      { question: "What audio quality is available?", answer: "Omni Media Tools offers audio in various qualities up to 320kbps." },
      { question: "Can I save podcast episodes?", answer: "Yes, podcast episodes from public feeds can be saved as audio files for offline listening." },
    ],
  },
  {
    slug: "soundcloud-downloader",
    name: "SoundCloud",
    color: "#FF5500",
    description: "Audio management tools for SoundCloud content. Save your own tracks or permitted audio for offline use.",
    tagline: "Audio tools",
    features: ["Your Tracks", "Audio Conversion", "High Quality Audio"],
    formats: ["MP3", "WAV"],
    popular: false,
    hidden: true,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.057-.049-.1-.084-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.282c.013.06.045.094.09.094.042 0 .074-.038.087-.094l.196-1.282-.196-1.332c-.013-.057-.045-.094-.073-.094zm1.81-1.108c-.074 0-.12.046-.127.1l-.214 2.434.214 2.318c.007.06.053.098.127.098.073 0 .12-.038.126-.098l.241-2.319-.24-2.434c-.008-.06-.054-.1-.127-.1zm.891-.166c-.074 0-.12.046-.127.1l-.214 2.6.214 2.4c.007.06.053.098.127.098.073 0 .12-.038.127-.098l.24-2.4-.24-2.6c-.007-.06-.054-.1-.127-.1zm.93-.262c-.087 0-.134.046-.14.107l-.2 2.762.2 2.443c.007.067.054.107.14.107.087 0 .134-.04.14-.107l.226-2.443-.226-2.762c-.006-.06-.053-.107-.14-.107zm.94-.116c-.1 0-.147.053-.153.113l-.186 2.878.186 2.47c.006.067.053.113.153.113.1 0 .147-.046.153-.113l.21-2.47-.21-2.878c-.006-.06-.053-.113-.153-.113zm1.014-.18c-.1 0-.16.053-.166.12l-.172 3.058.172 2.496c.006.073.066.12.166.12.093 0 .16-.047.166-.12l.193-2.496-.193-3.058c-.006-.067-.073-.12-.166-.12zm.94.01c-.107 0-.167.053-.173.12l-.159 3.048.159 2.496c.006.073.066.12.173.12.106 0 .166-.047.173-.12l.18-2.496-.18-3.049c-.007-.066-.067-.119-.173-.119zm.953-.18c-.12 0-.18.06-.186.127l-.146 3.228.146 2.503c.007.073.067.127.186.127.12 0 .18-.054.187-.127l.165-2.503-.165-3.228c-.007-.067-.067-.127-.187-.127zm.94-.034c-.12 0-.187.06-.193.127l-.133 3.262.133 2.503c.006.08.073.127.193.127s.187-.047.193-.127l.15-2.503-.15-3.262c-.006-.067-.073-.127-.193-.127zm1.01-.07c-.127 0-.193.066-.2.133l-.12 3.332.12 2.496c.007.08.073.133.2.133.127 0 .193-.053.2-.133l.133-2.496-.134-3.333c-.006-.066-.072-.132-.199-.132zm.947.053c-.133 0-.2.06-.206.127l-.107 3.28.107 2.49c.006.08.073.133.206.133.134 0 .2-.053.207-.134l.12-2.49-.12-3.28c-.007-.066-.073-.126-.207-.126zm2.754-1.492c-.18 0-.2.02-.2.2v5.04c0 .18.02.2.2.2h2.393c1.667 0 3.013-1.347 3.013-3.014 0-1.666-1.346-3.013-3.013-3.013h-2.393v.587z"/></svg>`,
    metaTitle: "SoundCloud Audio Tools — Manage Your Audio Content | Omni Media Tools",
    metaDescription: "Free SoundCloud audio tools to save your own tracks and permitted audio content for offline use.",
    howTo: [
      { step: "Copy the SoundCloud link", description: "Open SoundCloud, find your track or permitted content, click Share, and copy the link." },
      { step: "Paste the URL", description: "Paste the SoundCloud URL into the tool above." },
      { step: "Save the audio", description: "Click the button to save the track as an audio file." },
    ],
    faqs: [
      { question: "Can I save my own SoundCloud tracks?", answer: "Yes, you can save your own uploaded tracks for backup or offline use." },
      { question: "What audio quality is available?", answer: "Omni Media Tools saves SoundCloud audio in the highest available quality." },
    ],
  },
  {
    slug: "twitch-downloader",
    name: "Twitch",
    color: "#9146FF",
    description: "Save your own Twitch clips, VODs, and highlights for backup or content repurposing.",
    tagline: "Clips, VODs & Highlights",
    features: ["Clips", "VODs", "Highlights", "HD Quality"],
    formats: ["MP4"],
    popular: false,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>`,
    metaTitle: "Twitch Media Tools — Save Your Clips & VODs | Omni Media Tools",
    metaDescription: "Free Twitch media tools to save your own clips, VODs, and highlights for backup or content repurposing.",
    howTo: [
      { step: "Copy the Twitch clip/VOD URL", description: "Go to Twitch, find your clip or VOD, and copy the URL from your browser." },
      { step: "Paste the URL", description: "Paste the Twitch URL into the tool above." },
      { step: "Save the clip", description: "Click the button to save the Twitch clip or VOD to your device." },
    ],
    faqs: [
      { question: "Can I save Twitch clips?", answer: "Yes, Omni Media Tools supports saving clips, VODs, and highlights from Twitch." },
      { question: "Can I save full Twitch VODs?", answer: "Yes, you can save full Twitch VODs (Video on Demand) for offline viewing." },
    ],
    longContent: `<h2>What Is the Twitch Media Tool?</h2>
<p>The Twitch Media Tool helps streamers save their own clips, VODs (Video on Demand), and highlights for backup or content repurposing. Twitch VODs expire after a set period, making backup critical for preserving your streaming content.</p>
<h2>Who Can Use This Tool?</h2>
<ul><li><strong>Streamers:</strong> Save your own stream highlights for YouTube compilations or social media clips.</li><li><strong>Esports Players:</strong> Archive your own gameplay clips for montages or portfolio building.</li><li><strong>Content Editors:</strong> Save your own Twitch clips for editing into longer YouTube videos.</li></ul>
<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "bilibili-downloader",
    name: "Bilibili",
    color: "#00A1D6",
    description: "Save your own Bilibili videos for offline viewing and content management.",
    tagline: "HD video management",
    features: ["HD Video", "Multiple Qualities", "Creator Content"],
    formats: ["MP4", "FLV"],
    popular: false,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/></svg>`,
    metaTitle: "Bilibili Media Tools — Save Bilibili Videos | Omni Media Tools",
    metaDescription: "Free Bilibili media tools to save your own videos in HD quality for offline viewing.",
    howTo: [
      { step: "Copy the Bilibili URL", description: "Go to Bilibili, find your video, and copy the URL from the address bar." },
      { step: "Paste the link", description: "Paste the Bilibili URL into the tool above." },
      { step: "Save the video", description: "Select quality and click to save the video." },
    ],
    faqs: [
      { question: "Can I save Bilibili videos?", answer: "Yes, Omni Media Tools supports saving videos from Bilibili in various qualities." },
    ],
    longContent: `<h2>What Is the Bilibili Media Tool?</h2>
<p>The Bilibili Media Tool helps creators save their own Bilibili videos for backup, repurposing, or offline viewing. Bilibili is one of the largest video platforms in Asia, and our tool makes it easy to manage your content across platforms.</p>
<h2>Who Can Use This Tool?</h2>
<ul><li><strong>Content Creators:</strong> Save your own Bilibili uploads for cross-platform publishing.</li><li><strong>Anime Fans:</strong> Save your own fan-created, original content for backup.</li><li><strong>Educators:</strong> Archive your own educational content for offline access.</li></ul>
<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "tumblr-downloader",
    name: "Tumblr",
    color: "#36465D",
    description: "Save your own Tumblr videos, GIFs, and images for backup or content management.",
    tagline: "Videos, GIFs & images",
    features: ["Videos", "GIFs", "Images", "HD Quality"],
    formats: ["MP4", "GIF", "JPG"],
    popular: false,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.168z"/></svg>`,
    metaTitle: "Tumblr Media Tools — Save Tumblr Videos & GIFs | Omni Media Tools",
    metaDescription: "Free Tumblr media tools to save your own videos, GIFs, and images in original quality.",
    howTo: [
      { step: "Copy the Tumblr post URL", description: "Open the Tumblr post and copy the URL from your browser." },
      { step: "Paste the URL", description: "Paste the Tumblr URL into the tool above." },
      { step: "Save the content", description: "Click the button to save the video, GIF, or image." },
    ],
    faqs: [
      { question: "Can I save Tumblr GIFs?", answer: "Yes, Omni Media Tools supports saving both videos and GIFs from Tumblr." },
    ],
    longContent: `<h2>What Is the Tumblr Media Tool?</h2>
<p>The Tumblr Media Tool helps you save your own Tumblr videos, GIFs, and media posts for backup or repurposing. Tumblr's unique multimedia blogging format makes it a popular platform for creative expression, and our tool helps you manage your content library.</p>
<h2>Who Can Use This Tool?</h2>
<ul><li><strong>Artists & Illustrators:</strong> Back up your own artwork posts and video content from Tumblr.</li><li><strong>Writers:</strong> Save your own multimedia blog posts for archival.</li><li><strong>Fandom Creators:</strong> Keep copies of your own original fan art and creative works.</li></ul>
<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "vk-downloader",
    name: "VK",
    color: "#4680C2",
    description: "Save your own VK videos for offline viewing and content backup.",
    tagline: "HD video management",
    features: ["HD Video", "Multiple Qualities", "Fast Processing"],
    formats: ["MP4"],
    popular: false,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.305-.491.746-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/></svg>`,
    metaTitle: "VK Media Tools — Save VKontakte Videos | Omni Media Tools",
    metaDescription: "Free VK media tools to save your own VKontakte videos in HD quality for offline viewing.",
    howTo: [
      { step: "Copy the VK video URL", description: "Go to VK, find your video, and copy the URL from the address bar." },
      { step: "Paste the link", description: "Paste the VK URL into the tool above." },
      { step: "Save the video", description: "Select quality and click to save." },
    ],
    faqs: [
      { question: "Can I save VK videos?", answer: "Yes, Omni Media Tools supports saving videos from VKontakte in various qualities." },
    ],
    longContent: `<h2>What Is the VK Media Tool?</h2>
<p>The VK (VKontakte) Media Tool helps you save your own VK video posts for backup or cross-platform sharing. VK is one of the largest social networks in Eastern Europe and Russia, and our tool makes managing your VK video content simple.</p>
<h2>Who Can Use This Tool?</h2>
<ul><li><strong>VK Creators:</strong> Save your own video posts for repurposing on YouTube or Instagram.</li><li><strong>Community Managers:</strong> Archive your own community's video content for records.</li><li><strong>Personal Users:</strong> Keep backup copies of your own family videos and memories from VK.</li></ul>
<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "likee-downloader",
    name: "Likee",
    color: "#FF2D55",
    description: "Save your own Likee videos for backup or content repurposing across platforms.",
    tagline: "Save your own videos",
    features: ["HD Quality", "Fast Processing", "Creator Tools"],
    formats: ["MP4"],
    popular: false,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-6.276 6.276a.9.9 0 01-1.272 0L7.106 11.26a.9.9 0 111.272-1.272l2.604 2.604 5.64-5.64a.9.9 0 111.272 1.27z"/></svg>`,
    metaTitle: "Likee Media Tools — Save Your Own Likee Videos | Omni Media Tools",
    metaDescription: "Free Likee media tools to save your own short videos in HD quality for backup or repurposing.",
    howTo: [
      { step: "Copy the Likee link", description: "Open Likee, tap Share on your video, and copy the link." },
      { step: "Paste the URL", description: "Paste the Likee URL into the tool above." },
      { step: "Save your content", description: "Click the button to save the video to your device." },
    ],
    faqs: [
      { question: "Can I save my own Likee videos?", answer: "Yes, Omni Media Tools lets you save your own Likee content in original quality for backup." },
    ],
    longContent: `<h2>What Is the Likee Media Tool?</h2>
<p>The Likee Media Tool helps you save your own Likee short videos for backup or content repurposing. Likee is a popular short-video platform, and our tool helps creators manage their content across multiple platforms efficiently.</p>
<h2>Who Can Use This Tool?</h2>
<ul><li><strong>Likee Creators:</strong> Save your own viral videos for cross-posting to TikTok, Instagram Reels, or YouTube Shorts.</li><li><strong>Content Managers:</strong> Archive your own brand's Likee campaigns for reporting.</li><li><strong>Personal Users:</strong> Keep backup copies of your own creative Likee videos.</li></ul>
<h2>Responsible Use Disclaimer</h2>
<p>Only use this tool for content you own, public-domain media, or content you have permission to use. Omni Media Tools does not support copyright infringement or unauthorized downloading.</p>`,
  },
  {
    slug: "bandcamp-downloader",
    name: "Bandcamp",
    color: "#1DA0C3",
    description: "Audio management tools for Bandcamp. Manage your own artist uploads and permitted audio content.",
    tagline: "Audio tools",
    features: ["Your Tracks", "Albums", "High Quality Audio"],
    formats: ["MP3", "FLAC"],
    popular: false,
    hidden: true,
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5z"/></svg>`,
    metaTitle: "Bandcamp Audio Tools — Manage Your Audio Content | Omni Media Tools",
    metaDescription: "Free Bandcamp audio tools to manage your own artist uploads and permitted audio content in high quality.",
    howTo: [
      { step: "Copy the Bandcamp link", description: "Go to Bandcamp, find your track or album, and copy the URL." },
      { step: "Paste the URL", description: "Paste the Bandcamp URL into the tool above." },
      { step: "Save the audio", description: "Click the button to save the track as an audio file." },
    ],
    faqs: [
      { question: "What content can I process?", answer: "You can use this tool for your own artist uploads and content you have permission to use. Always support artists by purchasing their music." },
      { question: "What audio quality is available?", answer: "Omni Media Tools offers high-quality audio in MP3 and FLAC formats." },
    ],
  },
];

export function getPlatformBySlug(slug: string): Platform | undefined {
  return platforms.find((p) => p.slug === slug);
}

export function getVisiblePlatforms(): Platform[] {
  return platforms.filter((p) => !p.hidden);
}

export function getPopularPlatforms(): Platform[] {
  return platforms.filter((p) => p.popular && !p.hidden);
}
