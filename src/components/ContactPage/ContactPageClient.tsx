"use client";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Have questions about our products? Need a custom solution?
              <br />
              We're here to help your business succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info - Simple List */}
      <section className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Phone className="w-8 h-8 text-rose-600 mb-4" />
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+917800167300"
                  className="text-lg text-gray-900 hover:text-rose-600 transition"
                >
                  +91 7800167300
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Mail className="w-8 h-8 text-rose-600 mb-4" />
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Email
                </h3>
                <a
                  href="mailto:SS903084@gmail.com"
                  className="text-lg text-gray-900 hover:text-rose-600 transition"
                >
                  SS903084@gmail.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <MapPin className="w-8 h-8 text-rose-600 mb-4" />
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Location
                </h3>
                <p className="text-lg text-gray-900">
                  B-339, Phase 1, Mangolpuri Industrial Area,
                  <br />
                  Delhi - 110083, India
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Clock className="w-8 h-8 text-rose-600 mb-4" />
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Hours
                </h3>
                <p className="text-lg text-gray-900">
                  Mon-Sat: 9AM - 6PM
                  <br />
                  Sunday: Closed
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Side by Side */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Let's Talk About Your Requirements
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Fill out the form and our team will get back to you within 24
                hours. For urgent inquiries, please call us directly.
              </p>

              {/* Benefits List */}
              <div className="space-y-6">
                {[
                  "Quick response within 24 hours",
                  "Free consultation & quotes",
                  "Custom development available",
                  "Bulk order discounts",
                  "Flexible MOQ options",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-rose-600 rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-rose-600 focus:outline-none transition text-gray-900"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-rose-600 focus:outline-none transition text-gray-900"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-rose-600 focus:outline-none transition text-gray-900"
                      placeholder="+91 99999 99999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-rose-600 focus:outline-none transition text-gray-900"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-rose-600 focus:outline-none transition cursor-pointer text-gray-900"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="quote-request">Quote Request</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="custom-development">
                      Custom Development
                    </option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-rose-600 focus:outline-none transition resize-none text-gray-900"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                  className={`w-full sm:w-auto px-12 py-4 rounded-full font-semibold text-lg transition inline-flex items-center justify-center gap-2 cursor-pointer ${
                    isSubmitted
                      ? "bg-green-600 text-white"
                      : "bg-rose-600 text-white hover:bg-rose-700"
                  } ${isSubmitting || isSubmitted ? "opacity-80" : ""}`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width */}
      <section className="py-0 bg-gray-50">
        <div className="h-[500px] bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352.8830970384406!2d77.09678804974035!3d28.69637856450347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d055536e50c83%3A0xb0ed8b29259ec909!2sSparsh%20polymer!5e0!3m2!1sen!2sin!4v1769685923400!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FAQ Section - Minimal */}
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
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to help you get started
            </p>
          </motion.div>

          <div className="max-w-4xl space-y-12">
            {[
              {
                q: "What is your minimum order quantity?",
                a: "We offer flexible MOQs based on product type and customization requirements. Contact us to discuss your specific needs.",
              },
              {
                q: "Do you offer custom sole development?",
                a: "Yes! We provide custom mold development and can create soles tailored to your exact specifications and brand requirements.",
              },
              {
                q: "What is the typical delivery time?",
                a: "Standard orders are typically delivered within 15-20 days. Custom orders may take 30-45 days depending on complexity.",
              },
              {
                q: "Do you ship outside Delhi?",
                a: "Yes, we ship across India with reliable logistics partners. International shipping can also be arranged for bulk orders.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-b border-gray-100 pb-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
