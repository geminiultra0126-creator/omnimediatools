import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Omni Media Tools Disclaimer — Important information about our service, responsibilities, and limitations.",
  alternates: { canonical: `${SITE_CONFIG.url}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Disclaimer</h1>
        <p className="mb-10 text-sm text-[hsl(var(--muted-foreground))]">Last updated: June 1, 2026</p>

        <div className="prose max-w-none space-y-6">
          <h2>1. General Disclaimer</h2>
          <p>
            Omni Media Tools ({SITE_CONFIG.url}) provides free browser-based media management tools. The information and tools provided on this website are for general informational and personal use purposes only.
          </p>

          <h2>2. No Hosting of Content</h2>
          <p>
            Omni Media Tools does not host, store, upload, or distribute any media content. Our tools process publicly available URLs from third-party platforms. We do not maintain copies of any files processed through our service.
          </p>

          <h2>3. Copyright and Intellectual Property</h2>
          <p>
            Our tools are designed exclusively for managing your own content, public-domain media, or content you have explicit permission to use. We do not support, encourage, or condone copyright infringement or unauthorized downloading of any kind.
          </p>
          <p>
            Users are solely responsible for ensuring they have the legal right to process any content through our tools. By using Omni Media Tools, you agree that you will only process content that you own or have permission to use.
          </p>

          <h2>4. Third-Party Platforms</h2>
          <p>
            Omni Media Tools is not affiliated with, endorsed by, or connected to any of the third-party platforms mentioned on our website (including but not limited to YouTube, Instagram, TikTok, Twitter/X, Facebook, Spotify, SoundCloud, etc.). All platform names and logos are trademarks of their respective owners.
          </p>

          <h2>5. No Warranties</h2>
          <p>
            The tools and information on this website are provided &quot;as is&quot; without any representations or warranties, express or implied. Omni Media Tools makes no representations or warranties in relation to the accuracy, completeness, or reliability of any information or tools on this website.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Omni Media Tools shall not be liable for any losses, damages, or claims arising from the use of our website or tools. This includes, but is not limited to, any direct, indirect, incidental, or consequential damages.
          </p>

          <h2>7. External Links</h2>
          <p>
            This website may contain links to external websites that are not operated by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
          </p>

          <h2>8. Advertisements</h2>
          <p>
            Our website displays advertisements through Google AdSense. These ads are served by Google and are subject to Google&apos;s own terms and privacy policies. We are not responsible for the content of any advertisements displayed on our website.
          </p>

          <h2>9. Changes to This Disclaimer</h2>
          <p>
            We may update this Disclaimer from time to time. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2>10. Contact</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us at <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a> or visit our <Link href="/contact">Contact page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
