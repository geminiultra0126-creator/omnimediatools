import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Copyright Policy",
  description: "Omni Media Tools Copyright Policy — Our stance on copyright, intellectual property, and responsible use.",
  alternates: { canonical: `${SITE_CONFIG.url}/copyright` },
};

export default function CopyrightPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Copyright Policy</h1>
        <p className="mb-10 text-sm text-[hsl(var(--muted-foreground))]">Last updated: June 1, 2026</p>

        <div className="prose max-w-none space-y-6">
          <h2>1. Our Commitment to Copyright</h2>
          <p>
            Omni Media Tools is committed to respecting intellectual property rights and expects all users to do the same. Our tools are designed to help users manage their own content, public-domain media, and content they have explicit permission to use.
          </p>

          <h2>2. Permitted Use</h2>
          <p>Our tools may only be used to process:</p>
          <ul>
            <li><strong>Your own content:</strong> Videos, images, and audio that you personally created and uploaded to any platform.</li>
            <li><strong>Public domain content:</strong> Works whose copyright has expired or that have been explicitly released into the public domain.</li>
            <li><strong>Creative Commons content:</strong> Works released under Creative Commons licenses that permit downloading and reuse.</li>
            <li><strong>Licensed content:</strong> Content for which you have received explicit written permission from the copyright holder.</li>
          </ul>

          <h2>3. Prohibited Use</h2>
          <p>The following uses of our tools are strictly prohibited:</p>
          <ul>
            <li>Downloading or processing copyrighted music, movies, TV shows, or other media without the rights holder&apos;s permission</li>
            <li>Circumventing digital rights management (DRM) protections</li>
            <li>Downloading content from paid subscription services (such as premium streaming platforms)</li>
            <li>Redistributing or selling content obtained through our tools without proper authorization</li>
            <li>Using our tools to facilitate piracy in any form</li>
          </ul>

          <h2>4. User Responsibility</h2>
          <p>
            Users are solely responsible for determining whether they have the legal right to process any content through our tools. Omni Media Tools does not verify copyright ownership and cannot guarantee that any particular use is permissible.
          </p>
          <p>
            By using our tools, you represent and warrant that you have the necessary rights or permissions for any content you process.
          </p>

          <h2>5. Copyright Infringement Reports</h2>
          <p>
            If you are a copyright holder and believe that our service is being used to infringe your rights, please submit a formal DMCA takedown notice. See our <Link href="/dmca">DMCA Policy</Link> for detailed instructions.
          </p>

          <h2>6. Consequences of Violation</h2>
          <p>
            Users who are found to be using our tools in violation of this Copyright Policy may have their access restricted or terminated. We cooperate with rights holders and law enforcement when required by applicable law.
          </p>

          <h2>7. Educational Resources</h2>
          <p>We encourage all users to educate themselves about copyright law. Here are some helpful resources:</p>
          <ul>
            <li><a href="https://creativecommons.org/licenses/" target="_blank" rel="noopener noreferrer">Creative Commons License Types</a></li>
            <li><a href="https://www.copyright.gov/fair-use/" target="_blank" rel="noopener noreferrer">U.S. Copyright Office — Fair Use</a></li>
          </ul>

          <h2>8. Contact</h2>
          <p>
            For copyright-related inquiries, please contact us at <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>. Please include &quot;Copyright Inquiry&quot; in the subject line.
          </p>
        </div>
      </div>
    </div>
  );
}
