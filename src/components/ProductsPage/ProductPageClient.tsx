"use client";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Grid, List, ArrowRight, Search, X, CheckCircle } from "lucide-react";
import { products } from "@/data/products";

export default function AllProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Filter products by search query
  let filteredProducts = [...products];

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  // Sort products
  if (sortBy === "name-asc") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "name-desc") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  const handleQuoteClick = (productName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProduct(productName);
    setShowQuoteModal(true);
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
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600">
              Browse our complete range of premium shoe soles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="bg-white py-6 border-b border-gray-200 sticky top-[65px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Left Side - Search & Sort */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-600 transition text-gray-900 placeholder:text-gray-500"
                />
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-rose-600 cursor-pointer text-gray-900"
              >
                <option value="default">Default sorting</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>

            {/* Right Side - View Toggle & Count */}
            <div className="flex items-center justify-between sm:justify-end gap-4">
              <span className="text-sm text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </span>

              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-white text-rose-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition cursor-pointer ${
                    viewMode === "list"
                      ? "bg-white text-rose-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="group">
                      <Link href={`/products/${product.id}`}>
                        <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                          {product.description}
                        </p>
                      </Link>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/products/${product.id}`}
                          className="flex-1"
                        >
                          <button className="w-full text-rose-600 text-sm font-semibold py-2 px-4 border border-rose-600 rounded-lg hover:bg-rose-50 transition inline-flex items-center justify-center gap-1 cursor-pointer">
                            View Details
                          </button>
                        </Link>
                        <button
                          onClick={(e) => handleQuoteClick(product.name, e)}
                          className="flex-1 bg-rose-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-rose-700 transition cursor-pointer"
                        >
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6 max-w-5xl mx-auto">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="flex flex-col sm:flex-row gap-6 bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                      <Link
                        href={`/products/${product.id}`}
                        className="sm:w-64 h-64 sm:h-auto flex-shrink-0 bg-gray-200 relative overflow-hidden cursor-pointer"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </Link>
                      <div className="flex-1 p-6">
                        <Link href={`/products/${product.id}`}>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors cursor-pointer">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {product.description}
                          </p>
                        </Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.features.slice(0, 3).map((feature, i) => (
                            <span
                              key={i}
                              className="text-xs bg-white px-3 py-1 rounded-full text-gray-600 border border-gray-200"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3">
                          <Link href={`/products/${product.id}`}>
                            <button className="text-rose-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                              View Full Details
                              <ArrowRight className="w-5 h-5" />
                            </button>
                          </Link>
                          <button
                            onClick={(e) => handleQuoteClick(product.name, e)}
                            className="bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-rose-700 transition cursor-pointer"
                          >
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 mb-4">
                No products found matching your criteria.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-rose-600 font-semibold hover:underline cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

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
                        {selectedProduct}
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Need Something Specific?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find what you're looking for? We offer custom sole
              development tailored to your requirements.
            </p>
            <Link href="/contact" className="inline-block cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-rose-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-rose-700 transition inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-rose-600/20"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
