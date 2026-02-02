"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Sparsh Polymer
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Manufacturing premium EVA shoe soles since 2009. Your trusted
              partner for quality and innovation.
            </p>

            {/* Contact Action Buttons */}
            <div className="flex gap-3">
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/917800167300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition cursor-pointer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:SS903084@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+917800167300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
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

          {/* Contact Info */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm lg:text-base">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                <span>
                  B-339, Phase 1,
                  <br />
                  Mangolpuri Industrial Area,
                  <br />
                  Delhi - 110083, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm lg:text-base">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a
                  href="tel:+917800167300"
                  className="hover:text-rose-400 transition"
                >
                  +91 78001 67300
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm lg:text-base">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a
                  href="mailto:SS903084@gmail.com"
                  className="hover:text-rose-400 transition break-all"
                >
                  SS903084@gmail.com
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
                href="/privacy-policy"
                className="hover:text-rose-400 transition cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
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
