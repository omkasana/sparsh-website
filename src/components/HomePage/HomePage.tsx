"use client";

import {
  ArrowRight,
  Award,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Factory,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { products } from "@/data/products";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 20,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Hero carousel - IMAGE FOCUSED with minimal text
  const heroSlides = [
    {
      id: 1,
      image: "/images/sp-101.jpeg",
      alt: "Easy to Wear",
    },
    {
      id: 2,
      image: "/images/sp-103.jpeg",
      alt: "Soft & Cushioned",
    },
    {
      id: 3,
      image: "/images/sp-105.jpeg",
      alt: "Lightweight",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "ISO certified manufacturing with strict quality control",
    },
    {
      icon: Factory,
      title: "Modern Facility",
      description: "State-of-the-art production equipment and technology",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to excellence",
    },
    {
      icon: TrendingUp,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality",
    },
  ];

  const stats = [
    { value: "29+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "1M+", label: "Soles Produced" },
    { value: "99%", label: "Client Satisfaction" },
  ];
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Carousel - Image Focused */}
        <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden bg-white">
          <div className="embla h-full" ref={emblaRef}>
            <div className="embla__container h-full flex">
              {heroSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="embla__slide flex-[0_0_100%] min-w-0 h-full"
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Desktop only, no background */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-gray-900 hover:text-gray-700 transition cursor-pointer z-20 items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-10 h-10" strokeWidth={1.5} />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-gray-900 hover:text-gray-700 transition cursor-pointer z-20 items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="w-10 h-10" strokeWidth={1.5} />
          </button>

          {/* Dots Indicator - High Visibility */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-50">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === selectedIndex
                    ? "bg-black scale-125"
                    : "bg-white/70 hover:bg-white border border-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 shadow-lg -mt-12 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Clean Premium Style */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {/* Generic Manufacturing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
            >
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Generic Manufacturing"
                  className="w-full h-[400px] object-cover rounded-sm"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-sm font-semibold text-blue-600 mb-3 tracking-wider uppercase">
                  Manufacturing Services
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Generic Sole Production
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  High-volume production of standardized designs across EVA,
                  Rubber, PU, and TPR. Built for scale, consistency, and
                  competitive pricing.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Cost-optimized for bulk orders",
                    "Consistent batch-to-batch quality",
                    "Quick turnaround for established designs",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5" />
                      <span className="text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <Link href="/contact">
                  <button className="text-blue-600 font-semibold text-lg inline-flex items-center gap-2 hover:gap-4 transition-all">
                    Get Quote
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Custom Manufacturing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <div className="text-sm font-semibold text-blue-600 mb-3 tracking-wider uppercase">
                  Custom Solutions
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Custom Sole Development
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  From concept to production—tailor-made soles engineered for
                  your brand's unique performance, comfort, and aesthetic needs.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Co-design with your R&D team",
                    "Material & density customization",
                    "Rapid prototyping & sampling",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5" />
                      <span className="text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <Link href="/contact">
                  <button className="text-blue-600 font-semibold text-lg inline-flex items-center gap-2 hover:gap-4 transition-all">
                    Start Custom Project
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?w=800&q=80"
                  alt="Custom Development"
                  className="w-full h-[400px] object-cover rounded-sm"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section - Wave Path with Fun Animations */}
        <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-center mb-16"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block text-6xl mb-4"
              >
                ⚡
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Your Journey With Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Four exciting stages to bring your soles to life
              </p>
            </motion.div>

            {/* Desktop - Horizontal Wave Path */}
            <div
              className="hidden lg:block max-w-6xl mx-auto relative"
              style={{ height: "500px" }}
            >
              {/* Animated wavy path */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1200 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M 100 250 Q 300 100, 400 250 T 700 250 Q 900 400, 1100 250"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating steps along the wave */}
              {[
                {
                  x: "8%",
                  y: "30%",
                  icon: "🎯",
                  title: "Discovery",
                  subtitle: "Tell us your vision",
                  color: "from-blue-500 to-blue-600",
                  details: [
                    "Product specifications",
                    "Volume & timeline needs",
                    "Technical requirements",
                    "Market positioning",
                  ],
                  rotate: -5,
                },
                {
                  x: "33%",
                  y: "40%",
                  icon: "✨",
                  title: "Creation",
                  subtitle: "We design & sample",
                  color: "from-indigo-500 to-indigo-600",
                  details: [
                    "Custom mold development",
                    "Material selection",
                    "Sample production",
                    "Testing & iteration",
                  ],
                  rotate: 5,
                },
                {
                  x: "55%",
                  y: "35%",
                  icon: "🔬",
                  title: "Validation",
                  subtitle: "Test & refine",
                  color: "from-violet-500 to-violet-600",
                  details: [
                    "Pilot batch production",
                    "Fit & durability testing",
                    "Quality checks",
                    "Final approval",
                  ],
                  rotate: -3,
                },
                {
                  x: "83%",
                  y: "35%",
                  icon: "🚀",
                  title: "Launch",
                  subtitle: "Scale & deliver",
                  color: "from-blue-600 to-blue-700",
                  details: [
                    "Full-scale manufacturing",
                    "Quality monitoring",
                    "On-time delivery",
                    "Ongoing support",
                  ],
                  rotate: 4,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: step.rotate }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="absolute group cursor-pointer z-10"
                  style={{
                    left: step.x,
                    top: step.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Pulsing background glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-2xl pointer-events-none`}
                  />

                  {/* Main node */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 0 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-32 h-32 bg-gradient-to-br ${step.color} rounded-3xl shadow-2xl flex items-center justify-center transform transition-all`}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="text-5xl"
                    >
                      {step.icon}
                    </motion.span>
                  </motion.div>

                  {/* Info card - appears on hover */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-2xl shadow-2xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 z-50">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100" />
                    <div className="text-sm font-bold text-gray-400 mb-1">
                      STEP {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {step.subtitle}
                    </p>
                    <div className="space-y-2">
                      {step.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-gray-600"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color} mt-1.5 flex-shrink-0`}
                          />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Label below */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 text-center whitespace-nowrap pointer-events-none">
                    <div className="text-sm font-bold text-gray-900">
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500">{step.subtitle}</div>
                  </div>
                </motion.div>
              ))}

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full blur-sm pointer-events-none"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${30 + Math.random() * 40}%`,
                  }}
                />
              ))}
            </div>

            {/* Mobile - Vertical Wave with Click to Expand */}
            <div className="lg:hidden max-w-md mx-auto relative">
              {/* Vertical wavy line */}
              <svg
                className="absolute left-8 top-0 h-full pointer-events-none"
                width="40"
                viewBox="0 0 40 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M 20 0 Q 35 100, 20 200 T 20 400 Q 5 500, 20 600 T 20 1000"
                  stroke="url(#gradient-mobile)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient
                    id="gradient-mobile"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="space-y-8">
                {[
                  {
                    icon: "🎯",
                    title: "Discovery",
                    subtitle: "Tell us your vision",
                    color: "from-blue-500 to-blue-600",
                    bg: "bg-blue-50",
                    details: [
                      "Product specifications",
                      "Volume & timeline needs",
                      "Technical requirements",
                      "Market positioning",
                    ],
                  },
                  {
                    icon: "✨",
                    title: "Creation",
                    subtitle: "We design & sample",
                    color: "from-indigo-500 to-indigo-600",
                    bg: "bg-indigo-50",
                    details: [
                      "Custom mold development",
                      "Material selection",
                      "Sample production",
                      "Testing & iteration",
                    ],
                  },
                  {
                    icon: "🔬",
                    title: "Validation",
                    subtitle: "Test & refine",
                    color: "from-violet-500 to-violet-600",
                    bg: "bg-violet-50",
                    details: [
                      "Pilot batch production",
                      "Fit & durability testing",
                      "Quality checks",
                      "Final approval",
                    ],
                  },
                  {
                    icon: "🚀",
                    title: "Launch",
                    subtitle: "Scale & deliver",
                    color: "from-blue-600 to-blue-700",
                    bg: "bg-blue-50",
                    details: [
                      "Full-scale manufacturing",
                      "Quality monitoring",
                      "On-time delivery",
                      "Ongoing support",
                    ],
                  },
                ].map((step, index) => {
                  const [expanded, setExpanded] = React.useState(false);

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50, rotate: -5 }}
                      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="relative pl-20"
                    >
                      {/* Node on wave */}
                      <motion.div
                        onClick={() => setExpanded(!expanded)}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          rotate: {
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3,
                          },
                        }}
                        className={`absolute left-0 top-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg cursor-pointer z-10`}
                      >
                        <span className="text-3xl">{step.icon}</span>
                      </motion.div>

                      {/* Pulsing glow */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className={`absolute left-0 top-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl blur-xl pointer-events-none`}
                      />

                      {/* Content */}
                      <div
                        onClick={() => setExpanded(!expanded)}
                        className="cursor-pointer"
                      >
                        <div className="text-xs font-bold text-gray-400 mb-1">
                          STEP {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {step.subtitle}
                        </p>

                        {/* Expandable details */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: expanded ? "auto" : 0,
                            opacity: expanded ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div
                            className={`${step.bg} rounded-xl p-3 mt-3 space-y-2`}
                          >
                            {step.details.map((detail, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                  opacity: expanded ? 1 : 0,
                                  x: expanded ? 0 : -10,
                                }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2 text-xs text-gray-700"
                              >
                                <div
                                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color} mt-1.5 flex-shrink-0`}
                                />
                                <span>{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Click indicator */}
                        <button className="text-xs text-blue-600 font-medium mt-2 flex items-center gap-1">
                          {expanded ? "Show less" : "Show more"}
                          <motion.span
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            ▼
                          </motion.span>
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Strip - Add anywhere */}
        <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🏆", label: "ISO 9001:2015", sublabel: "Certified" },
                { icon: "🌱", label: "Eco-Friendly", sublabel: "Materials" },
                { icon: "⚡", label: "48-Hour", sublabel: "Sampling" },
                { icon: "🔬", label: "In-House", sublabel: "Testing Lab" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-xl font-bold">{item.label}</div>
                  <div className="text-sm text-blue-200">{item.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why EVA Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Why EVA Soles?
              </h2>
              <p className="text-xl text-gray-600">
                EVA (Ethylene-Vinyl Acetate) is the perfect material for modern
                footwear, offering unmatched comfort and performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                  alt="EVA Material Benefits"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {[
                  {
                    title: "Lightweight Comfort",
                    description:
                      "EVA is significantly lighter than traditional materials, reducing fatigue during extended wear while maintaining structural integrity.",
                  },
                  {
                    title: "Superior Cushioning",
                    description:
                      "Closed-cell foam structure provides excellent shock absorption, protecting joints and ensuring all-day comfort.",
                  },
                  {
                    title: "Water Resistance",
                    description:
                      "Natural water-resistant properties make EVA ideal for all-weather footwear and easy maintenance.",
                  },
                  {
                    title: "Durability & Flexibility",
                    description:
                      "Maintains shape and flexibility over time, resisting compression and providing consistent performance.",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* EVA Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500K+", label: "Soles Monthly" },
                { value: "8+", label: "EVA Variants" },
                { value: "100%", label: "Quality Assured" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our Manufacturing Process
              </h2>
              <p className="text-xl text-gray-600">
                From raw material to finished product, every step is
                quality-controlled
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-16">
              {[
                {
                  step: "01",
                  title: "Material Selection",
                  description:
                    "Premium EVA compounds sourced from certified suppliers, tested for quality and consistency before production.",
                },
                {
                  step: "02",
                  title: "Precision Molding",
                  description:
                    "Advanced injection molding with temperature-controlled processes ensuring uniform density and perfect finish.",
                },
                {
                  step: "03",
                  title: "Quality Testing",
                  description:
                    "Every batch undergoes rigorous testing for durability, flexibility, and performance standards.",
                },
                {
                  step: "04",
                  title: "Finishing & Packaging",
                  description:
                    "Final inspection, surface treatment, and secure packaging for safe delivery to your facility.",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div
                    className={`lg:col-span-5 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="text-7xl font-bold text-rose-100 mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {process.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                  <div
                    className={`lg:col-span-7 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="h-[300px] bg-gray-200 rounded-lg" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section - Flat Grid */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Every Footwear Segment
              </h2>
              <p className="text-xl text-gray-600">
                From daily wear to performance sports—our soles power diverse
                footwear categories with precision-engineered materials.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-200">
              {[
                "Casual & Daily Wear",
                "Sports & Training",
                "School Uniform",
                "Safety / Industrial",
                "Flip-Flops & Sandals",
                "Fashion Lifestyle",
                "Kids Footwear",
                "Export Quality",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white p-8 hover:bg-gray-50 transition-colors"
                >
                  <div className="text-lg font-semibold text-gray-900">
                    {item}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our EVA Sole Collection
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Premium EVA soles designed for every footwear application
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.slice(0, 8).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-square mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-rose-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          EVA
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      {product.description}
                    </p>
                    {product.price && (
                      <p className="text-rose-600 font-semibold">
                        {product.price}
                      </p>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/products" className="inline-block cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-700 transition inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-rose-600/20"
                >
                  View All Products
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section> */}

        {/* Products Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Product Collection
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Premium shoe soles designed for every footwear application
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.slice(0, 8).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-square mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/products" className="inline-block cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-700 transition inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-rose-600/20"
                >
                  View All Products
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section - Add before Quality Commitment */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Trusted by Leading Brands
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Building long-term partnerships through consistent quality,
                transparent communication, and reliable delivery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  company: "Leading Footwear Brand",
                  location: "Delhi NCR",
                  quote:
                    "Their soles helped us standardize quality across multiple product lines while keeping lead times predictable. Exceptional reliability.",
                  rating: 5,
                },
                {
                  company: "Export House",
                  location: "Agra",
                  quote:
                    "From sampling to bulk production, the team is responsive and technically sound. Our international clients appreciate the comfort and finish.",
                  rating: 5,
                },
                {
                  company: "Private Label Brand",
                  location: "Mumbai",
                  quote:
                    "We rely on them for both generic and custom soles. The flexibility and consistent support make them a true long-term partner.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
                >
                  {/* Quote Icon */}
                  <div className="text-blue-600 text-5xl font-serif mb-4">
                    "
                  </div>

                  {/* Quote Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Company Info */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-bold text-gray-900">
                      {testimonial.company}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Commitment */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our Commitment to Quality
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Every sole we produce undergoes rigorous quality testing to
                  ensure it meets international standards and exceeds customer
                  expectations.
                </p>
                <div className="space-y-4">
                  {[
                    "ISO 9001:2015 Certified Manufacturing",
                    "Advanced Testing Equipment",
                    "Eco-Friendly Materials",
                    "Customization Options Available",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-6 h-6 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5fGVufDF8fHx8MTc2OTMxMDczMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Quality Manufacturing"
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Let's
                discuss how we can meet your sole manufacturing needs.
              </p>
              <Link href="/contact" className="inline-block cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-blue-700 transition inline-flex items-center gap-2 cursor-pointer"
                >
                  Contact Us Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
