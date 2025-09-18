import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import HeroImage from "../assets/Hero1.png";
import AboutImage from "../assets/About.jpeg";
import MiniAboutUs from "../components/About/AboutusSection";
import WhyChooseUs from "../components/WhyUs/WhyUsSection";

const AboutPage = () => {
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
            About Us
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
            <span className="text-orange-400 font-medium">ABOUT US</span>
          </nav>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* About Us Badge */}
            <motion.div
              className="inline-flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-orange-400 font-semibold text-xl tracking-wide">
                About Us
              </span>
              {/* </div> */}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Civil, Mechanical & Equipment Experts
            </motion.h1>

            {/* Experience Badge */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-lg font-semibold text-gray-900">
                5+ Years Experience Working
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We are versatile and dynamic construction company with a track
              record of delivering high-quality projects across Maharashtra.
              Specializing in civil and mechanical engineering, we have
              established ourselves as a reliable partner in executing
              large-scale infrastructure projects. With in-house expertise in
              ground surface reservoirs, jack wells, water wells, canal
              construction, bridges, and culverts, our team brings unmatched
              efficiency to every project. Our diverse equipment fleet,
              including Hywa trucks, Poclains, and our Alpha Mobile Tower Crane,
              RMC batching plant, allows us to offer competitive pricing and
              quick turnaround times. Other than this we do we have mining units
              – six screen machines with production capacity of 500t/h.
            </motion.p>

            {/* Read More Button */}
            <motion.button
              className="bg-orange-400 hover:bg-orange-500 cursor-pointer text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "tel:+918888822150")}
            >
              CONTACT US
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.img
                src={AboutImage}
                alt="Modern architecture building with glass facade"
                className="w-full h-[500px] md:h-[500px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />

              {/* Decorative dots pattern */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 opacity-20"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="grid grid-cols-4 gap-1 w-full h-full">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="bg-gray-400 rounded-full"></div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative dots pattern bottom left */}
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 opacity-20"
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="grid grid-cols-4 gap-1 w-full h-full">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="bg-orange-400 rounded-full"></div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <WhyChooseUs />

      <MiniAboutUs />
    </div>
  );
};

export default AboutPage;
