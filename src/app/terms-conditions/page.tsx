import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions - Sparsh Polymer",
  description:
    "Terms and conditions for using Sparsh Polymer services and purchasing our products.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
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
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mb-8">Last updated: February 2, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Sparsh Polymer. These Terms & Conditions govern your
              use of our website and the purchase of our products. By accessing
              our website or placing an order, you agree to be bound by these
              terms.
            </p>
          </section>

          {/* Use of Website */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Use of Website
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using our website, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use the website only for lawful purposes</li>
              <li>Not interfere with or disrupt the website's functionality</li>
              <li>
                Not attempt to gain unauthorized access to any part of the
                website
              </li>
              <li>
                Provide accurate and complete information when contacting us
              </li>
            </ul>
          </section>

          {/* Products and Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Products and Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We manufacture and supply EVA shoe soles and related products. All
              product descriptions, specifications, and images on our website
              are for informational purposes and may be subject to change. We
              reserve the right to modify or discontinue products without prior
              notice.
            </p>
          </section>

          {/* Orders and Quotations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Orders and Quotations
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All orders are subject to acceptance and availability</li>
              <li>Quotations are valid for 30 days unless otherwise stated</li>
              <li>Minimum order quantities (MOQ) may apply</li>
              <li>We reserve the right to refuse or cancel any order</li>
              <li>Custom orders may have different terms and lead times</li>
            </ul>
          </section>

          {/* Pricing and Payment */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Pricing and Payment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All prices are in Indian Rupees (INR) unless otherwise stated.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Prices are subject to change without notice</li>
              <li>GST and other applicable taxes are additional</li>
              <li>
                Payment terms will be specified in the quotation or invoice
              </li>
              <li>
                We accept bank transfers, cheques, and other agreed payment
                methods
              </li>
            </ul>
          </section>

          {/* Delivery */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Delivery
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Delivery timelines are estimates and may vary based on order
              volume, customization requirements, and other factors. We will
              make reasonable efforts to meet agreed delivery dates but are not
              liable for delays beyond our control.
            </p>
          </section>

          {/* Quality and Returns */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Quality and Returns
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to delivering high-quality products:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All products are manufactured to specified standards</li>
              <li>Defective products may be replaced subject to inspection</li>
              <li>Returns must be reported within 7 days of delivery</li>
              <li>Custom-made products are non-returnable unless defective</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including text, images, logos, and
              designs, is the property of Sparsh Polymer and protected by
              intellectual property laws. You may not reproduce, distribute, or
              use any content without our written permission.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, Sparsh Polymer shall not
              be liable for any indirect, incidental, special, or consequential
              damages arising from the use of our products or website. Our total
              liability shall not exceed the value of the product purchased.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms & Conditions are governed by the laws of India. Any
              disputes shall be subject to the exclusive jurisdiction of the
              courts in Delhi, India.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms & Conditions, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
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

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms & Conditions at any
              time. Changes will be effective immediately upon posting to the
              website. Continued use of our website or services constitutes
              acceptance of the updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
