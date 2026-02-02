import HomePage from "@/components/HomePage/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium EVA Shoe Sole Manufacturer in Delhi | Sparsh Polymer",
  description:
    "Leading EVA shoe sole manufacturer in Delhi since 2009. Premium quality EVA soles for footwear industry. ISO certified, wholesale & custom manufacturing. Contact: +91 78001 67300",
  keywords: [
    "sparsh polymer",
    "sparsh soles",
    "EVA sole manufacturer Delhi",
    "EVA shoe soles",
    "shoe sole manufacturer India",
    "footwear sole supplier",
    "EVA soles wholesale",
    "custom EVA soles",
    "Mangolpuri Delhi",
    "premium shoe soles",
    "footwear manufacturing India",
  ],
  authors: [{ name: "Sparsh Polymer" }],
  openGraph: {
    title: "Sparsh Polymer - Premium EVA Shoe Sole Manufacturer in Delhi",
    description:
      "Leading EVA shoe sole manufacturer since 2009. ISO certified, premium quality soles for footwear industry. Wholesale & custom manufacturing available.",
    url: "https://sparshpolymer.com",
    siteName: "Sparsh Polymer",
    // images: [
    //   {
    //     url: "https://sparshpolymer.com/og-home.jpg", // Add this image to public folder
    //     width: 1200,
    //     height: 630,
    //     alt: "Sparsh Polymer - EVA Shoe Soles Manufacturing",
    //   },
    // ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://sparshpolymer.com",
  },
};

export default function Home() {
  return <HomePage />;
}
