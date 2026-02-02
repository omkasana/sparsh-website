import ContactPageClient from "@/components/ContactPage/ContactPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get In Touch for EVA Sole Orders & Inquiries",
  description:
    "Contact Sparsh Polymer for EVA sole orders, custom manufacturing, and wholesale inquiries. Located at B-339, Phase 1, Mangolpuri Industrial Area, Delhi - 110083. Call: +91 78001 67300 | Email: SS903084@gmail.com",
  keywords: [
    "contact sparsh polymer",
    "EVA sole inquiry",
    "wholesale shoe soles Delhi",
    "custom sole manufacturing",
    "B-339 Mangolpuri Delhi",
    "shoe sole supplier contact",
    "EVA soles order",
    "+91 78001 67300",
  ],
  openGraph: {
    title: "Contact Sparsh Polymer - EVA Sole Manufacturer in Delhi",
    description:
      "Get in touch for EVA sole orders and inquiries. Located in Mangolpuri Industrial Area, Delhi. Call +91 78001 67300",
    url: "https://sparshpolymer.com/contact",
    siteName: "Sparsh Polymer",
    // images: [
    //   {
    //     url: "https://sparshpolymer.com/og-contact.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Contact Sparsh Polymer - Delhi",
    //   },
    // ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://sparshpolymer.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
