"use client";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState, use } from "react";
import {
  ArrowLeft,
  CheckCircle,
  Package,
  Truck,
  Shield,
  Phone,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { products, getProductById } from "@/data/products";

export default function ProductDetailClient({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const product = getProductById(resolvedParams.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link
            href="/products"
            className="text-rose-600 hover:underline cursor-pointer"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
    );
  };

  const handleCloseModal = () => {
    setShowQuoteModal(false);
    setIsSubmitted(false);
    setFormData({ name: "", phone: "", email: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset and close after 2 seconds
    setTimeout(() => {
      handleCloseModal();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Images Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows - Only show if more than 1 image */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition cursor-pointer"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-900" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition cursor-pointer"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-900" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Images - Only show if more than 1 image */}
              {product.images.length > 1 && (
                <div
                  className={`grid gap-4 ${
                    product.images.length === 2
                      ? "grid-cols-2"
                      : product.images.length === 3
                        ? "grid-cols-3"
                        : product.images.length === 4
                          ? "grid-cols-4"
                          : product.images.length >= 5
                            ? "grid-cols-5"
                            : "grid-cols-3"
                  }`}
                >
                  {product.images.map((img, index) => (
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
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {product.name}
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Sizes - Only show if sizes exist */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    Available Sizes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium text-sm"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Colors - Only show if colors exist */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    Available Colors
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features - Only show if features exist */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    Key Features
                  </h3>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications - Only show if applications exist */}
              {product.applications && product.applications.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowQuoteModal(true)}
                  className="flex-1 bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-rose-700 transition cursor-pointer"
                >
                  Get Quote
                </button>
                <Link href="/contact" className="flex-1 cursor-pointer">
                  <button className="w-full border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:border-rose-600 hover:text-rose-600 transition cursor-pointer">
                    Contact Sales
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Specifications
            </h2>
            <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
              {/* Material */}
              <div className="flex flex-col sm:flex-row sm:items-center p-6">
                <h3 className="text-sm font-semibold text-gray-500 w-full sm:w-1/3 mb-2 sm:mb-0">
                  Material
                </h3>
                <p className="text-lg text-gray-900">{product.material}</p>
              </div>

              {/* Weight - Only show if exists */}
              {product.weight && (
                <div className="flex flex-col sm:flex-row sm:items-center p-6">
                  <h3 className="text-sm font-semibold text-gray-500 w-full sm:w-1/3 mb-2 sm:mb-0">
                    Weight
                  </h3>
                  <p className="text-lg text-gray-900">{product.weight}</p>
                </div>
              )}

              {/* Thickness - Only show if exists */}
              {product.thickness && (
                <div className="flex flex-col sm:flex-row sm:items-center p-6">
                  <h3 className="text-sm font-semibold text-gray-500 w-full sm:w-1/3 mb-2 sm:mb-0">
                    Thickness
                  </h3>
                  <p className="text-lg text-gray-900">{product.thickness}</p>
                </div>
              )}

              {/* Density - Only show if exists */}
              {product.density && (
                <div className="flex flex-col sm:flex-row sm:items-center p-6">
                  <h3 className="text-sm font-semibold text-gray-500 w-full sm:w-1/3 mb-2 sm:mb-0">
                    Density
                  </h3>
                  <p className="text-lg text-gray-900">{product.density}</p>
                </div>
              )}

              {/* MOQ - Only show if exists */}
              {product.moq && (
                <div className="flex flex-col sm:flex-row sm:items-center p-6">
                  <h3 className="text-sm font-semibold text-gray-500 w-full sm:w-1/3 mb-2 sm:mb-0">
                    Minimum Order Quantity
                  </h3>
                  <p className="text-lg text-gray-900">{product.moq}</p>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="flex flex-col sm:flex-row sm:items-center p-6">
                  <h3 className="text-sm font-semibold text-gray-500 w-full sm:w-1/3 mb-2 sm:mb-0">
                    Available Sizes
                  </h3>
                  <p className="text-lg text-gray-900">
                    {product.sizes.join(", ")}
                  </p>
                </div>
              )}

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="flex flex-col sm:flex-row sm:items-center p-6">
                  <h3 className="text-sm font-semibold text-gray-500 w-full sm:w-1/3 mb-2 sm:mb-0">
                    Available Colors
                  </h3>
                  <p className="text-lg text-gray-900">
                    {product.colors.join(", ")}
                  </p>
                </div>
              )}

              {/* Manufacturing */}
              <div className="flex flex-col sm:flex-row sm:items-center p-6">
                <h3 className="text-sm font-semibold text-gray-500 w-full sm:w-1/3 mb-2 sm:mb-0">
                  Manufacturing
                </h3>
                <p className="text-lg text-gray-900">Made in India</p>
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

      {/* Quote Modal */}
      <AnimatePresence>
        {showQuoteModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={handleCloseModal}
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>

                {!isSubmitted ? (
                  <>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Get a Quote
                    </h2>
                    <p className="text-gray-600 mb-6">
                      For:{" "}
                      <span className="font-semibold text-rose-600">
                        {product.name}
                      </span>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-600 transition"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-600 transition"
                          placeholder="+91 99999 99999"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-600 transition"
                          placeholder="john@example.com"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className={`w-full bg-rose-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-rose-700 transition cursor-pointer ${
                          isSubmitting ? "opacity-80" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </div>
                        ) : (
                          "Submit Request"
                        )}
                      </motion.button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Request Submitted!
                    </h3>
                    <p className="text-gray-600">
                      We'll get back to you within 24 hours with your quote.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
