import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Globe,
  ChevronRight,
} from "lucide-react";
import HeroImage from "../assets/Hero1.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImage})`,
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8">
            Contact Us
          </h1>

          {/* Breadcrumb Navigation */}
          <nav
            className="flex items-center space-x-2 text-sm sm:text-base"
            aria-label="Breadcrumb"
          >
            <a
              href="/"
              className="text-white hover:text-orange-400 transition-colors duration-300 font-medium"
              aria-label="Home"
            >
              HOME
            </a>
            <ChevronRight
              className="w-4 h-4 text-orange-400"
              aria-hidden="true"
            />
            <span className="text-orange-400 font-medium">CONTACT</span>
          </nav>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm text-[#fbb908] font-bold mb-2 tracking-wider uppercase">
              Write a Message
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Have Any Questions?
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Thank you very much for your interest in our company and our
              services and if you have any questions, please write us a message
              now!
            </p>
          </motion.div>

          <motion.form
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                />
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400 resize-vertical min-h-32"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 bg-orange-400 hover:bg-orange-500 cursor-pointer text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* Contact Info and Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm text-[#fbb908] font-bold mb-2 tracking-wider uppercase">
                Contact Us
              </h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h3>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We're here to help you with all your needs. Whether you have
                questions about our services, need support, or want to discuss a
                project, don't hesitate to reach out to us.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-6"
              >
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">
                      Call us: +91 888 882 2150
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">
                      chavanviren14@gmail.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">
                      Open Hours: 09:00 am - 06:00 pm
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">
                      Second Floor, Office No 4, Image Building, Karve Road S No
                      15, Erandawane, Pune-411004, Maharashtra, India
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={fadeInUp} className="mt-12">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow on:
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 hover:bg-orange-400 rounded-full flex items-center justify-center transition-all duration-200 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 hover:bg-orange-400 rounded-full flex items-center justify-center transition-all duration-200 group"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 hover:bg-orange-400 rounded-full flex items-center justify-center transition-all duration-200 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-200 hover:bg-orange-400 rounded-full flex items-center justify-center transition-all duration-200 group"
                    aria-label="Website"
                  >
                    <Globe className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-96 lg:h-full min-h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0267890154705!2d73.83932931489394!3d18.50902498739582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf9c6e6a1eb1%3A0x4c5e4e4e4e4e4e4e!2sKarve%20Road%2C%20Erandwane%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635754234567!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "384px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location - Karve Road, Erandawane, Pune"
                  ></iframe>
                </div>

                {/* Map Overlay Info */}
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Pune Office
                  </h4>
                  <p className="text-sm text-gray-600">
                    Erandawane, Pune-411004
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Karve+Road,+Erandwane,+Pune,+Maharashtra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 mt-2 font-medium"
                  >
                    View larger map
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
