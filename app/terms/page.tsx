import { Metadata } from "next";
import { SITE_CONFIG } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Omni Media Tools Terms of Service — Rules and guidelines for using our free media management tools.",
  alternates: { canonical: `${SITE_CONFIG.url}/terms` },
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Terms of Service</h1>
        <p className="mb-10 text-sm text-[hsl(var(--muted-foreground))]">Last updated: June 1, 2026</p>

        <div className="prose max-w-none space-y-6">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Omni Media Tools ({SITE_CONFIG.url}), you accept and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our service.</p>

          <h2>2. Description of Service</h2>
          <p>Omni Media Tools provides free browser-based tools that allow users to manage, convert, and process their own media content from various platforms. Our service is provided &quot;as is&quot; and &quot;as available&quot; without any warranties.</p>

          <h2>3. Acceptable Use</h2>
          <p>You agree to use Omni Media Tools only for lawful purposes. You must not:</p>
          <ul>
            <li>Download or process copyrighted content without permission from the copyright holder</li>
            <li>Use the service to access private or restricted content</li>
            <li>Redistribute content for commercial purposes without authorization</li>
            <li>Use automated tools or bots to access our service</li>
            <li>Attempt to bypass any security measures on our website</li>
            <li>Use the service in any way that could damage or impair the service</li>
            <li>Use the service to circumvent digital rights management (DRM) protections</li>
          </ul>

          <h2>4. Responsible Use Policy</h2>
          <p>Omni Media Tools is designed for managing your own content, public-domain media, or content you have explicit permission to use. By using our tools, you represent and warrant that:</p>
          <ul>
            <li>You own the content being processed, or</li>
            <li>You have received explicit permission from the rights holder, or</li>
            <li>The content is in the public domain or released under a permissive license (such as Creative Commons)</li>
          </ul>
          <p>We do not condone or support copyright infringement in any form. Users who violate these terms may have their access restricted.</p>

          <h2>5. Intellectual Property</h2>
          <p>Omni Media Tools does not host, store, or own any of the content processed through our service. We provide tools to manage publicly available content and are not responsible for the content created by third parties.</p>
          <p>Users are solely responsible for ensuring they have the right to use any content obtained through our service.</p>

          <h2>6. Copyright and DMCA</h2>
          <p>We respect intellectual property rights. If you believe any content accessible through our service infringes your copyright, please see our <a href="/dmca">DMCA Policy</a> for instructions on how to submit a takedown request.</p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>Omni Media Tools is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, express or implied, regarding:</p>
          <ul>
            <li>The availability or reliability of the service</li>
            <li>The accuracy of format or quality options</li>
            <li>The compatibility of processed files with your device</li>
            <li>Freedom from viruses or other harmful components</li>
          </ul>

          <h2>8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Omni Media Tools and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.</p>

          <h2>9. Third-Party Content and Advertisements</h2>
          <p>Our website may display advertisements provided by Google AdSense and may contain links to third-party websites. We are not responsible for the content, privacy practices, or policies of third-party websites or advertisers.</p>

          <h2>10. Modifications to Terms</h2>
          <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the service after any changes constitutes acceptance of the new terms.</p>

          <h2>11. Governing Law</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>

          <h2>12. Contact</h2>
          <p>For questions about these Terms, contact us at <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.</p>
        </div>
      </div>
    </div>
  );
}
