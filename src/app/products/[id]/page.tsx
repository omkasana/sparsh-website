import ProductDetailClient from "@/components/ProductsPage/ProductDeatilClient";
import { products } from "@/data/products";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

// Generate SEO metadata for each product dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    return {
      title: "Product Not Found | Sparsh Polymer",
      description: "The product you're looking for is not available.",
    };
  }

  return {
    title: `${product.name} - Premium ${product.material} Sole | Sparsh Polymer`,
    description: `${product.description}. Available in ${product.sizes?.join(", ") || "multiple sizes"}. Premium quality EVA sole by Sparsh Polymer, Delhi. Wholesale & custom orders available. Contact: +91 78001 67300`,
    keywords: [
      product.name,
      product.material,
      "EVA sole",
      "shoe sole",
      "sparsh polymer",
      `buy ${product.name}`,
      `${product.material} sole manufacturer`,
      "footwear sole India",
      ...(product.applications || []),
    ],
    openGraph: {
      title: `${product.name} - Sparsh Polymer`,
      description: product.description,
      url: `https://sparshpolymer.com/products/${product.id}`,
      siteName: "Sparsh Polymer",
      images: [
        {
          url: product.images[0] || product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: "website", // Changed from "product" to "website"
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - Sparsh Polymer`,
      description: product.description,
      images: [product.images[0] || product.image],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://sparshpolymer.com/products/${product.id}`,
    },
  };
}

// Pre-generate all product pages at build time for better SEO
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient params={params} />;
}
