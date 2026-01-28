"use client";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const products = [
    { name: "EVA Soles", href: "/categories/eva-soles" },
    { name: "PU Soles", href: "/categories/pu-soles" },
    { name: "TPR Soles", href: "/categories/tpr-soles" },
    { name: "Rubber Soles", href: "/categories/rubber-soles" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "All Products", href: "/categories" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info - Full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Sparsh Polymer
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Manufacturing premium shoe soles since 2009. Your trusted partner
              for quality EVA, PU, TPR, and Rubber soles.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition cursor-pointer"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-rose-400 transition text-sm lg:text-base cursor-pointer inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">
              Products
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.href}
                    className="text-gray-400 hover:text-rose-400 transition text-sm lg:text-base cursor-pointer inline-block"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">
              Contact Us
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm lg:text-base">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                <span>
                  Mangolpuri Industrial Area,
                  <br />
                  New Delhi, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm lg:text-base">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a
                  href="tel:+919999999999"
                  className="hover:text-rose-400 transition"
                >
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm lg:text-base">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a
                  href="mailto:info@sparshpolymer.com"
                  className="hover:text-rose-400 transition break-all"
                >
                  info@sparshpolymer.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Sparsh Polymer. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6">
              <Link
                href="/privacy"
                className="hover:text-rose-400 transition cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-rose-400 transition cursor-pointer"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
