"use client";
import { motion } from "motion/react";
import {
  Target,
  Eye,
  Award,
  Users,
  Globe,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Factory,
  Shield,
  Zap,
  Package,
  Clock,
  ThumbsUp,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description:
        "Every sole undergoes rigorous quality checks. ISO-compliant processes ensure consistency and durability.",
      color: "rose",
      emoji: "⭐",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Your success drives us. We collaborate closely to understand needs and deliver beyond expectations.",
      color: "blue",
      emoji: "🤝",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "Investing in advanced technology and materials to stay ahead in the competitive sole industry.",
      color: "emerald",
      emoji: "💡",
    },
    {
      icon: TrendingUp,
      title: "Sustainability",
      description:
        "Eco-friendly materials and processes that minimize environmental impact without compromising quality.",
      color: "purple",
      emoji: "🌱",
    },
  ];

  const capabilities = [
    {
      icon: Factory,
      label: "Modern Manufacturing Facility",
      desc: "Advanced machinery for precision production",
    },
    {
      icon: Shield,
      label: "Quality Assurance",
      desc: "Multi-stage inspection and testing",
    },
    {
      icon: Zap,
      label: "Fast Turnaround",
      desc: "Efficient production cycles",
    },
    {
      icon: Package,
      label: "Custom Solutions",
      desc: "Tailored designs for your brand",
    },
  ];

  const products = [
    {
      name: "EVA Soles",
      desc: "Lightweight, cushioned, ideal for sports and casual footwear",
      volume: "High-volume production",
    },
    {
      name: "PU Soles",
      desc: "Durable, flexible, perfect for formal and semi-formal shoes",
      volume: "Custom orders available",
    },
    {
      name: "TPR Soles",
      desc: "Slip-resistant, cost-effective for mass market footwear",
      volume: "Bulk manufacturing",
    },
    {
      name: "Rubber Soles",
      desc: "Maximum grip and weather resistance for industrial use",
      volume: "Specialized production",
    },
  ];

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description:
        "Sparsh Polymer established in New Delhi with a vision to deliver quality soles",
    },
    {
      year: "2012",
      title: "Product Line Expansion",
      description:
        "Expanded EVA sole range with new designs and specifications",
    },
    {
      year: "2015",
      title: "Regional Growth",
      description:
        "Extended market reach across North India, serving 100+ clients",
    },
    {
      year: "2018",
      title: "Technology Upgrade",
      description: "Invested in state-of-the-art injection molding machinery",
    },
    {
      year: "2021",
      title: "Quality Certifications",
      description: "Achieved industry-recognized quality and safety standards",
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Launched comprehensive online presence and e-catalog",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500K+", label: "Soles Produced Monthly" },
    { value: "200+", label: "Active Clients" },
    { value: "50+", label: "Design Variants" },
  ];

  const whyChooseUs = [
    "Consistent quality across all production batches",
    "Competitive pricing without compromising standards",
    "Flexible MOQs for both small and large orders",
    "On-time delivery and reliable logistics",
    "Technical support for product selection",
    "Custom mold development available",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Gradient */}
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-orange-50 py-32 overflow-hidden">
        {/* Animated background blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-20 -right-20 w-96 h-96 bg-rose-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block text-7xl mb-6"
            >
              👞
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              About Sparsh Polymer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Manufacturing premium EVA, PU, TPR, and Rubber shoe soles since
              2009. Your trusted partner for quality, innovation, and
              reliability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-block cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-700 transition inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-rose-600/20"
                >
                  Get Quote
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/categories" className="inline-block cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 transition cursor-pointer"
                >
                  View Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block mb-6">
                <span className="text-sm font-bold text-rose-600 uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Building Quality Since 2009
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Sparsh Polymer was founded with a clear mission: to
                  manufacture high-quality, reliable shoe soles that meet the
                  evolving needs of India's footwear industry. Starting from our
                  base in New Delhi's Mangolpuri Industrial Area, we've grown
                  into a trusted name among footwear manufacturers.
                </p>
                <p>
                  Our expertise spans EVA sports shoe soles, PU formal soles,
                  TPR mass-market solutions, and specialized rubber soles. Every
                  product is crafted with precision using modern injection
                  molding technology and undergoes multi-stage quality checks.
                </p>
                <p>
                  What sets us apart is our commitment to both quality and
                  service. We understand that our clients need consistent
                  products, competitive pricing, and reliable delivery
                  schedules. That's exactly what we deliver, order after order.
                </p>
                <p>
                  Today, we serve 200+ footwear brands across North India,
                  producing over 500,000 soles monthly. Our team combines
                  traditional craftsmanship with modern manufacturing efficiency
                  to ensure every sole meets our exacting standards.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Sparsh Polymer Manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Modern Manufacturing Facility
                  </h3>
                  <p className="text-sm opacity-90">
                    State-of-the-art equipment in Mangolpuri, New Delhi
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced infrastructure and expertise to serve your manufacturing
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl mb-6 shadow-lg shadow-rose-500/20"
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.label}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What We Manufacture
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive range of soles for every footwear application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 hover:border-rose-200 transition-all group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.desc}
                </p>
                <div className="flex items-center gap-2 text-sm text-rose-600 font-medium">
                  <CheckCircle className="w-4 h-4" />
                  {product.volume}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-orange-500 rounded-3xl mb-6 shadow-xl shadow-rose-500/30"
                >
                  <Target className="w-10 h-10 text-white" />
                </motion.div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To deliver superior quality shoe soles that combine innovation,
                durability, and comfort at competitive prices. We're committed
                to supporting our clients' success through:
              </p>
              <ul className="space-y-3">
                {[
                  "Consistent quality standards",
                  "Reliable delivery schedules",
                  "Technical product support",
                  "Flexible order quantities",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-rose-600 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-rose-500 rounded-3xl mb-6 shadow-xl shadow-orange-500/30"
                >
                  <Eye className="w-10 h-10 text-white" />
                </motion.div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To be recognized as North India's most trusted sole
                manufacturing partner, known for quality craftsmanship,
                customer-centric approach, and continuous innovation in
                materials and processes.
              </p>
              <ul className="space-y-3">
                {[
                  "Industry-leading quality standards",
                  "Expanding product range",
                  "Eco-friendly manufacturing",
                  "Long-term client partnerships",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-orange-600 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Colorful Cards */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work every single day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -10, rotate: 2 }}
                className="group cursor-pointer"
              >
                <div
                  className={`bg-${value.color}-50 rounded-3xl p-8 relative overflow-hidden h-full`}
                >
                  {/* Animated blob */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 rounded-full blur-3xl`}
                  />

                  {/* Emoji that bounces */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="text-5xl mb-6 inline-block relative z-10"
                  >
                    {value.emoji}
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Why Choose Sparsh Polymer
              </h2>
              <p className="text-xl text-gray-600">
                Six compelling reasons to partner with us
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 flex items-start gap-4 hover:border-rose-200 hover:shadow-lg transition-all group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                      <ThumbsUp className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg pt-1 group-hover:text-gray-900">
                    {reason}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones that shaped Sparsh Polymer
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-8 mb-16 last:mb-0 group"
              >
                <div className="flex-shrink-0 w-28 text-right pt-1">
                  <div className="text-3xl font-bold bg-gradient-to-br from-rose-600 to-orange-600 bg-clip-text text-transparent">
                    {milestone.year}
                  </div>
                </div>
                <div className="relative flex-grow pb-8">
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="absolute left-0 top-3 w-4 h-4 bg-gradient-to-br from-rose-600 to-orange-600 rounded-full shadow-lg shadow-rose-600/30"
                  />
                  {index !== milestones.length - 1 && (
                    <div className="absolute left-1.5 top-7 w-px h-full bg-gradient-to-b from-rose-200 to-transparent" />
                  )}
                  <div className="ml-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 1 - Mid Page */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-orange-600 relative overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Custom Sole Solutions?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              From design consultation to production—we're here to help
            </p>
            <Link href="/contact" className="inline-block cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-rose-600 px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-50 transition inline-flex items-center gap-2 cursor-pointer shadow-2xl"
              >
                Request Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Build Something Together
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Whether you need high-volume production or custom sole
              development, we're ready to support your footwear manufacturing
              needs. Get in touch to discuss specifications, pricing, and
              delivery schedules.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-block cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-rose-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-rose-700 transition inline-flex items-center gap-2 cursor-pointer shadow-xl shadow-rose-600/20"
                >
                  Contact Us Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/categories" className="inline-block cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-full font-semibold text-lg hover:border-rose-600 hover:text-rose-600 transition cursor-pointer"
                >
                  View Product Catalog
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
