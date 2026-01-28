"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useState, use } from "react";
import {
  ArrowLeft,
  CheckCircle,
  Package,
  Truck,
  Shield,
  Phone,
} from "lucide-react";
import { products } from "@/data/products";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [selectedImage, setSelectedImage] = useState(0);
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link
            href="/categories"
            className="text-rose-600 hover:underline cursor-pointer"
          >
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  // Mock images (in real scenario, product would have multiple images)
  const images = [product.image, product.image, product.image];

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <Link
            href={`/categories/${product.category}`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Category
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg bg-gray-100 aspect-square cursor-pointer border-2 transition ${
                      selectedImage === index
                        ? "border-rose-600"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-block bg-rose-100 text-rose-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                {product.material}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Package className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Bulk Orders Available</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Truck className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Fast Delivery</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Shield className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Quality Assured</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Phone className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">24/7 Support</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="flex-1 cursor-pointer">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-700 transition cursor-pointer shadow-lg shadow-rose-600/20"
                  >
                    Request Quote
                  </motion.button>
                </Link>
                <Link href="/contact" className="flex-1 cursor-pointer">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 transition cursor-pointer"
                  >
                    Contact Sales
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Product Specifications
            </h2>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    Material
                  </h3>
                  <p className="text-lg text-gray-900">{product.material}</p>
                </div>
                <div className="p-6 border-b md:border-b-0 border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    Category
                  </h3>
                  <p className="text-lg text-gray-900 capitalize">
                    {product.category.replace("-", " ")}
                  </p>
                </div>
                <div className="p-6 md:border-r border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    Suitable For
                  </h3>
                  <p className="text-lg text-gray-900">
                    {product.applications.join(", ")}
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    Manufacturing
                  </h3>
                  <p className="text-lg text-gray-900">Made in India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={`/products/${relatedProduct.id}`}
                    className="group block cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
