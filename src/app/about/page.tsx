import AboutPageClient from "@/components/About page/AboutPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - 17+ Years of EVA Sole Manufacturing Excellence",
  description:
    "Learn about Sparsh Polymer's journey since 2009 in EVA sole manufacturing. Located in Mangolpuri, Delhi with state-of-the-art facilities, ISO certified quality, and 500+ satisfied clients across India.",
  keywords: [
    "about sparsh polymer",
    "EVA sole manufacturer Delhi",
    "shoe sole factory Mangolpuri",
    "footwear manufacturing company India",
    "ISO certified sole manufacturer",
    "B-339 Mangolpuri industrial area",
  ],
  openGraph: {
    title:
      "About Sparsh Polymer - EVA Sole Manufacturing Excellence Since 2009",
    description:
      "17+ years of experience in premium EVA sole manufacturing. ISO certified facility in Mangolpuri, Delhi serving 500+ clients.",
    url: "https://sparshpolymer.com/about",
    siteName: "Sparsh Polymer",
    images: [
      {
        url: "https://sparshpolymer.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Sparsh Polymer Factory - About Us",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sparshpolymer.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
