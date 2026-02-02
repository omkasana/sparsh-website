import ProductPageClient from "@/components/ProductsPage/ProductPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EVA Shoe Soles - Premium Quality Products | Sparsh Polymer",
  description:
    "Explore Sparsh Polymer's range of premium EVA shoe soles. Lightweight, durable, and comfortable soles for all types of footwear. Wholesale & custom manufacturing available. 500+ designs in stock.",
  keywords: [
    "EVA soles",
    "shoe soles",
    "footwear soles India",
    "EVA sole products",
    "buy EVA soles",
    "wholesale shoe soles",
    "sparsh polymer products",
    "EVA sole designs",
    "custom EVA soles",
  ],
  openGraph: {
    title: "Premium EVA Shoe Soles - Sparsh Polymer Products",
    description:
      "Browse our complete range of premium quality EVA shoe soles. Wholesale & custom orders available.",
    url: "https://sparshpolymer.com/products",
    siteName: "Sparsh Polymer",
    images: [
      {
        url: "https://sparshpolymer.com/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "Sparsh Polymer EVA Sole Products",
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
    canonical: "https://sparshpolymer.com/products",
  },
};

export default function ProductsPage() {
  return <ProductPageClient />;
}
