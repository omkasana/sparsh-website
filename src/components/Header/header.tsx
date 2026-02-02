"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  // Hide top bar on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide top bar after scrolling down 100px
      if (currentScrollY > 100) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        {/* Top Bar - Slimmer - Animated */}
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          animate={{
            height: showTopBar ? "auto" : 0,
            opacity: showTopBar ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-gradient-to-r from-rose-600 to-orange-600 text-white overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-xs py-1.5">
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="tel:+917800167300"
                  className="flex items-center gap-1.5 hover:opacity-80 transition"
                >
                  <Phone className="w-3 h-3" />
                  <span>+91 7800167300</span>
                </a>
                <a
                  href="mailto:SS903084@gmail.com"
                  className="flex items-center gap-1.5 hover:opacity-80 transition"
                >
                  <Mail className="w-3 h-3" />
                  <span>SS903084@gmail.com</span>
                </a>
              </div>
              <div className="ml-auto text-[11px]">
                Premium Sole Manufacturing Since 2009
              </div>
            </div>
          </div>
        </motion.div>

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

              <Link
                href="/products"
                className="text-gray-700 hover:text-rose-600 font-medium transition cursor-pointer text-sm"
              >
                Products
              </Link>

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

                <Link
                  href="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-rose-600 font-medium py-3 cursor-pointer border-b border-gray-50"
                >
                  Products
                </Link>

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
                    href="tel:+917800167300"
                    className="flex items-center gap-2 hover:text-rose-600 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 7800167300</span>
                  </a>
                  <a
                    href="mailto:SS903084@gmail.com"
                    className="flex items-center gap-2 hover:text-rose-600 transition"
                  >
                    <Mail className="w-4 h-4" />
                    <span>SS903084@gmail.com</span>
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
