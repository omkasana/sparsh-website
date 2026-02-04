import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Sparsh Polymer",
  description:
    "Privacy policy for Sparsh Polymer. Learn how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/"
          className="text-rose-600 hover:text-rose-700 mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">Last updated: February 2, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Sparsh Polymer ("we", "our", or "us") respects your privacy and is
              committed to protecting your personal data. This privacy policy
              explains how we collect, use, and safeguard your information when
              you visit our website or contact us for business inquiries.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly to us:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and business details</li>
              <li>Product inquiries and requirements</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Respond to your inquiries and provide quotes</li>
              <li>Process your orders and fulfill your requests</li>
              <li>Communicate with you about our products and services</li>
              <li>Improve our website and customer service</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Data Storage */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Data Storage and Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access,
              alteration, disclosure, or destruction. Your information is stored
              securely and is only accessible to authorized personnel.
            </p>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Information Sharing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and property</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
              <li>Lodge a complaint with authorities</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may use cookies to enhance your browsing experience.
              Cookies are small files stored on your device that help us
              understand how you use our website. You can control cookie
              settings through your browser preferences.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy or wish to
              exercise your rights, please contact us:
            </p>
            <div className="mt-4 bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 font-semibold mb-2">Sparsh Polymer</p>
              <p className="text-gray-700">
                B-339, Phase 1, Mangolpuri Industrial Area
                <br />
                Delhi - 110083, India
              </p>
              <p className="text-gray-700 mt-2">
                Phone:{" "}
                <a
                  href="tel:+917800167300"
                  className="text-rose-600 hover:underline"
                >
                  +91 78001 67300
                </a>
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:SS903084@gmail.com"
                  className="text-rose-600 hover:underline"
                >
                  SS903084@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
