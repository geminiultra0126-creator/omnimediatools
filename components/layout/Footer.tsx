import Link from "next/link";
import { platforms } from "../../lib/platforms";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[hsl(var(--border))] bg-[hsl(var(--card)/.5)]">
      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 inline-block">
              <span className="text-xl font-bold tracking-tight">
                Omni <span className="gradient-text">Media Tools</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              Free online media tools for creators, students, marketers, and
              everyday users.
            </p>
          </div>

          {/* Media Tools */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
              Media Tools
            </h3>
            <ul className="space-y-2.5">
              {platforms.slice(0, 8).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/tools/${p.slug}`}
                    className="text-sm text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--foreground))]"
                  >
                    {p.name} Tools
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
              Legal
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--foreground))]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--foreground))]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--foreground))]"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--foreground))]"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/dmca"
                  className="text-sm text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--foreground))]"
                >
                  DMCA
                </Link>
              </li>
              <li>
                <Link
                  href="/copyright"
                  className="text-sm text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--foreground))]"
                >
                  Copyright Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--foreground))]"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
              Support
            </h3>
            <p className="mb-4 text-sm text-[hsl(var(--muted-foreground))]">
              Having issues? We&apos;re here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-4 py-2 text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--card-hover))]"
            >
              <svg
                className="h-4 w-4 text-[hsl(var(--primary))]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[hsl(var(--border))] pt-8 text-xs text-[hsl(var(--muted))] sm:flex-row">
          <p>&copy; {currentYear} Omni Media Tools. All rights reserved.</p>
          <p className="text-center">
            Omni Media Tools does not host any media files and does not support
            copyright infringement.
          </p>
        </div>
      </div>
    </footer>
  );
}
