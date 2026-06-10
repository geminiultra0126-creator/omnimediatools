import Link from "next/link";
import { getVisiblePlatforms } from "../lib/platforms";
import DownloadForm from "../components/DownloadForm";


export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-12 pt-20 md:pb-20 md:pt-28 lg:pt-36">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-[hsl(var(--primary)/.08)] blur-[150px]" />
          <div className="absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-violet-500/5 blur-[120px]" />
          <div className="absolute left-0 bottom-0 h-[200px] w-[200px] rounded-full bg-indigo-500/5 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-1.5 text-xs font-medium text-[hsl(var(--muted-foreground))]">
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--success))] animate-pulse" />
              Free Browser-Based Media Tools
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Free Online Media Tools
              <br className="hidden sm:block" /> for{" "}
              <span className="gradient-text">Creators.</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base text-[hsl(var(--muted-foreground))] md:text-lg">
              Download, convert, compress, and manage your own videos, audio,
              and public-domain media using fast, simple, and browser-based
              tools.
            </p>

            {/* Trust badges */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
              {["100% Free", "No Registration", "Browser-Based", "Creator Friendly"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card)/.5)] px-3 py-1.5 text-xs font-medium text-[hsl(var(--muted-foreground))]"
                  >
                    <svg
                      className="h-3.5 w-3.5 text-[hsl(var(--success))]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="animate-fade-in-up-delay-1">
            <DownloadForm />
            {/* Responsible use disclaimer */}
            <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card)/.5)] px-5 py-3">
              <p className="text-center text-xs leading-relaxed text-[hsl(var(--muted))]">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-1.5 -mt-0.5 text-[hsl(var(--primary))]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Omni Media Tools is designed for downloading and managing your own content,
                public-domain media, or content you have permission to use. We do not
                support copyright infringement or unauthorized downloading.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--surface)/.5)] py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "20+", label: "Platforms Supported" },
              { value: "⚡", label: "Fast Browser-Based Tools" },
              { value: "HD+", label: "High-Quality Output" },
              { value: "100%", label: "Free Forever" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="mb-1 text-3xl font-black tracking-tight text-[hsl(var(--foreground))] sm:text-4xl">
                  {value}
                </div>
                <div className="text-xs font-medium uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Free Media Tools */}
      <section id="tools" className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Popular Free <span className="gradient-text">Media Tools</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-[hsl(var(--muted-foreground))]">
              Manage your own media from popular platforms. Paste a link to your
              content and choose your preferred format.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {getVisiblePlatforms().map((platform) => (
              <Link
                key={platform.slug}
                href={`/tools/${platform.slug}`}
                className="card-shine group relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--card-hover))] hover:shadow-xl hover:shadow-black/10"
              >
                {platform.popular && (
                  <span className="absolute right-2.5 top-2.5 rounded-full bg-[hsl(var(--primary)/.1)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[hsl(var(--primary))]">
                    Popular
                  </span>
                )}
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${platform.color}10`,
                    color: platform.color,
                  }}
                  dangerouslySetInnerHTML={{ __html: platform.iconSvg }}
                />
                <h3 className="text-sm font-bold text-[hsl(var(--foreground))]">
                  {platform.name}
                </h3>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {platform.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="mx-auto max-w-lg text-base text-[hsl(var(--muted-foreground))]">
              Use our free media tools in three simple steps. No technical
              knowledge required.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Paste Your Link",
                desc: "Copy the URL of your own content or permitted media from any supported platform and paste it into the input box.",
                icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.915-3.071a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.343 8.07",
              },
              {
                num: "02",
                title: "Choose Format & Quality",
                desc: "Select your preferred format and quality — from standard to high definition for video, or MP3/WAV for audio extraction.",
                icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75",
              },
              {
                num: "03",
                title: "Save to Your Device",
                desc: "Click download and the file is saved directly to your device. No signup or installation needed.",
                icon: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3",
              },
            ].map(({ num, title, desc, icon }) => (
              <div
                key={num}
                className="group relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8 transition-all hover:border-[hsl(var(--primary)/.3)] hover:bg-[hsl(var(--card-hover))]"
              >
                <span className="mb-5 block text-[40px] font-black leading-none text-[hsl(var(--border))]">
                  {num}
                </span>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--primary)/.1)] text-[hsl(var(--primary))] transition-transform group-hover:scale-110">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={icon}
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Omni Media Tools */}
      <section className="py-20 sm:py-28 border-t border-[hsl(var(--border))]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose <span className="gradient-text">Omni Media Tools</span>?
            </h2>
            <p className="mx-auto max-w-lg text-base text-[hsl(var(--muted-foreground))]">
              Built for creators who need fast, reliable, and responsible media management.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 12l2 2 4-4", title: "Browser-Based", desc: "No downloads, no installs. Works directly in your web browser on any device." },
              { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Privacy First", desc: "We don't store your files or personal data. All processing happens in real-time." },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Lightning Fast", desc: "Optimized for speed. Get your media files in seconds, not minutes." },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Responsible Use", desc: "Designed for your own content and public-domain media. We respect copyright." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 transition-all hover:bg-[hsl(var(--card-hover))]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--primary)/.1)] text-[hsl(var(--primary))]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <h3 className="mb-2 text-base font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Use These Tools */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Who Can Use <span className="gradient-text">These Tools</span>?
            </h2>
            <p className="mx-auto max-w-lg text-base text-[hsl(var(--muted-foreground))]">
              Our tools are built for anyone who works with media responsibly.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "🎬", title: "Content Creators", desc: "Manage, convert, and optimize your own video and audio content for multiple platforms." },
              { emoji: "🎓", title: "Students & Educators", desc: "Save educational content, lectures, and public-domain resources for offline study." },
              { emoji: "📈", title: "Marketers", desc: "Compress and convert media files for social media campaigns and presentations." },
              { emoji: "👤", title: "Personal Users", desc: "Save your own social media posts, personal videos, and permitted media for backup." },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 text-center transition-all hover:bg-[hsl(var(--card-hover))]">
                <div className="mb-3 text-3xl">{emoji}</div>
                <h3 className="mb-2 text-base font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Use Policy */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl border border-[hsl(var(--primary)/.2)] bg-[hsl(var(--primary)/.05)] p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--primary)/.15)] text-[hsl(var(--primary))]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h2 className="mb-3 text-xl font-bold sm:text-2xl">Responsible Use Policy</h2>
                <p className="mb-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  Omni Media Tools is designed to help you manage your own content, public-domain media, and content you have explicit permission to use. Our platform is <strong>not</strong> intended for:
                </p>
                <ul className="space-y-1.5 text-sm text-[hsl(var(--muted-foreground))]">
                  <li className="flex items-center gap-2"><span className="text-red-400">✕</span> Downloading copyrighted content without permission</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">✕</span> Circumventing platform restrictions or DRM</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">✕</span> Redistributing content for commercial purposes without authorization</li>
                </ul>
                <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">
                  By using our tools, you agree to our{" "}
                  <Link href="/terms" className="text-[hsl(var(--primary))] underline">Terms &amp; Conditions</Link> and{" "}
                  <Link href="/copyright" className="text-[hsl(var(--primary))] underline">Copyright Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="py-20 sm:py-28">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="mx-auto max-w-lg text-base text-[hsl(var(--muted-foreground))]">
              Everything you need to know about using Omni Media Tools.
            </p>
          </div>
          <div className="space-y-3">
            <FAQItems />
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItems() {
  const faqs = [
    {
      q: "Is Omni Media Tools completely free to use?",
      a: "Yes, Omni Media Tools is 100% free with no hidden costs or premium tiers. You can use all our media tools without any registration or payment.",
    },
    {
      q: "What platforms does Omni Media Tools support?",
      a: "Omni Media Tools supports 20+ platforms including YouTube, Instagram, TikTok, Twitter/X, Facebook, Pinterest, Reddit, Vimeo, LinkedIn, Twitch, and more. Each tool is optimized for the specific platform.",
    },
    {
      q: "What quality options are available?",
      a: "We support a wide range of qualities including standard and high-definition video. For audio, we support MP3, OGG, WAV, and OPUS formats.",
    },
    {
      q: "Do I need to install any software?",
      a: "No, Omni Media Tools works entirely in your web browser. Just paste a link and choose your format — no software, browser extensions, or apps needed.",
    },
    {
      q: "Is it safe to use Omni Media Tools?",
      a: "Yes, Omni Media Tools is completely safe. We don't store any of your files or personal information. All processing happens in real-time and we use secure HTTPS connections.",
    },
    {
      q: "What is your responsible use policy?",
      a: "Omni Media Tools is designed for managing your own content, public-domain media, or content you have permission to use. We do not support copyright infringement or unauthorized downloading. Users are responsible for ensuring they have the right to use any content processed through our tools.",
    },
  ];

  return (
    <>
      {faqs.map(({ q, a }) => (
        <details
          key={q}
          className="group overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] transition-colors hover:bg-[hsl(var(--card-hover))]"
        >
          <summary className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left list-none">
            <span className="pr-4 text-sm font-semibold text-[hsl(var(--foreground))] sm:text-base">
              {q}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-[hsl(var(--muted-foreground))] transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <div className="px-6 pb-5">
            <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              {a}
            </p>
          </div>
        </details>
      ))}
    </>
  );
}
