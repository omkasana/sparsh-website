"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useState, use } from "react";
import { ArrowLeft, Grid, List, ArrowRight } from "lucide-react";
import { getCategoryBySlug, getProductsByCategory } from "@/data/products";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");

  const category = getCategoryBySlug(resolvedParams.slug);
  const products = getProductsByCategory(resolvedParams.slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Category Not Found
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

  // Sort products
  let sortedProducts = [...products];
  if (sortBy === "name-asc") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "name-desc") {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb & Header */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {category.name}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{category.description}</p>
            <p className="text-sm text-gray-500">
              Showing all {products.length} results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="bg-white py-6 border-b border-gray-200 sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-600">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-rose-600 cursor-pointer"
              >
                <option value="default">Default sorting</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>

            {/* View Toggle */}
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
      </section>

      {/* Products Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="group block cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-rose-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {product.material}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {product.description}
                    </p>
                    <button className="text-rose-600 text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6 max-w-5xl mx-auto">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="flex flex-col sm:flex-row gap-6 bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <div className="sm:w-64 h-64 sm:h-auto flex-shrink-0 bg-gray-200 relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <span className="inline-block bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {product.material}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
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
                      <button className="text-rose-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Full Details
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {sortedProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

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
              Interested in These Products?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get in touch for pricing, customization, and bulk orders
            </p>
            <Link href="/contact" className="inline-block cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-rose-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-rose-700 transition inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-rose-600/20"
              >
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
