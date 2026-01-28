"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const products = [
    { name: "EVA Soles", href: "/categories/eva-soles" },
    { name: "PU Soles", href: "/categories/pu-soles" },
    { name: "TPR Soles", href: "/categories/tpr-soles" },
    { name: "Rubber Soles", href: "/categories/rubber-soles" },
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        {/* Top Bar - Slimmer */}
        <div className="bg-gradient-to-r from-rose-600 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-xs py-1.5">
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-1.5 hover:opacity-80 transition"
                >
                  <Phone className="w-3 h-3" />
                  <span>+91 99999 99999</span>
                </a>
                <a
                  href="mailto:info@sparshpolymer.com"
                  className="flex items-center gap-1.5 hover:opacity-80 transition"
                >
                  <Mail className="w-3 h-3" />
                  <span>info@sparshpolymer.com</span>
                </a>
              </div>
              <div className="ml-auto text-[11px]">
                Premium Sole Manufacturing Since 2009
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation - Slimmer */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <div className="text-xl md:text-2xl font-bold">
                <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                  Sparsh Polymer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-rose-600 font-medium transition cursor-pointer text-sm"
              >
                Home
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-rose-600 font-medium transition cursor-pointer text-sm">
                  Products
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1"
                    >
                      {products.map((product, index) => (
                        <Link
                          key={index}
                          href={product.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition cursor-pointer"
                        >
                          {product.name}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <Link
                          href="/categories"
                          className="block px-4 py-2 text-sm text-rose-600 font-semibold hover:bg-rose-50 transition cursor-pointer"
                        >
                          View All →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                className="text-gray-700 hover:text-rose-600 font-medium transition cursor-pointer text-sm"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-rose-600 font-medium transition cursor-pointer text-sm"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link href="/contact" className="inline-block cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-rose-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-rose-700 transition cursor-pointer text-sm"
                >
                  Get Quote
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-rose-600 transition cursor-pointer"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="text-xl font-bold">
                  <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                    Sparsh Polymer
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-rose-600 transition cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-6 space-y-1">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-rose-600 font-medium py-3 cursor-pointer border-b border-gray-50"
                >
                  Home
                </Link>

                <div className="border-b border-gray-50">
                  <div className="text-gray-700 font-medium py-3">Products</div>
                  <div className="pl-4 pb-2 space-y-1">
                    {products.map((product, index) => (
                      <Link
                        key={index}
                        href={product.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-gray-600 hover:text-rose-600 py-2 text-sm cursor-pointer"
                      >
                        {product.name}
                      </Link>
                    ))}
                    <Link
                      href="/categories"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-rose-600 font-semibold py-2 text-sm cursor-pointer"
                    >
                      View All Products →
                    </Link>
                  </div>
                </div>

                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-rose-600 font-medium py-3 cursor-pointer border-b border-gray-50"
                >
                  About Us
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-rose-600 font-medium py-3 cursor-pointer border-b border-gray-50"
                >
                  Contact
                </Link>

                {/* Mobile CTA */}
                <div className="pt-6">
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block cursor-pointer"
                  >
                    <button className="w-full bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-700 transition cursor-pointer">
                      Get Quote
                    </button>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="pt-8 space-y-3 text-sm text-gray-600">
                  <a
                    href="tel:+919999999999"
                    className="flex items-center gap-2 hover:text-rose-600 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 99999 99999</span>
                  </a>
                  <a
                    href="mailto:info@sparshpolymer.com"
                    className="flex items-center gap-2 hover:text-rose-600 transition"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@sparshpolymer.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
