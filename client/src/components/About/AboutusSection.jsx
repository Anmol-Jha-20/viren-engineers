import React from "react";
import { motion } from "framer-motion";
import { Award, Diamond, Building, HandHeart } from "lucide-react";
import StoneImage from "../../assets/stoneimage.webp";

const MiniAboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert & Professional",
      color: "text-yellow-500",
    },
    {
      icon: <Diamond className="w-8 h-8" />,
      title: "Professional Approach",
      color: "text-yellow-500",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "High Quality Work",
      color: "text-yellow-500",
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Satisfaction Guarantee",
      color: "text-yellow-500",
    },
  ];

  const services = [
    {
      title: "Services",
      description:
        'Established in the year 2020 in Pune,Maharashtra, India, We “Viren Engineers And Contractors" engaged as the foremost Service Provider of Crane and Screen Machine Rental Services.',
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494881521/LJ/SB/AW/109289942/earthmoving-equipment-rental-service-500x500.jpeg",
    },
    {
      title: "Projects",
      description:
        "Viren Engineers and Contractors delivers civil and mechanical infrastructure projects across Maharashtra with in-house expertise and advanced equipment.",
      image: StoneImage,
    },
  ];

  return (
    <section
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      role="region"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Header with Icon */}
            <motion.div
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h2
                id="about-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800"
              >
                About Us
              </h2>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Building the Future of Infrastructure
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              variants={itemVariants}
            >
              Established in 2020, Viren Engineers and Contractors is a
              Pune-based construction company specializing in civil and
              mechanical engineering. We deliver large-scale infrastructure
              projects across Maharashtra, backed by in-house technical
              expertise and a modern fleet of equipment. Our services span
              construction, equipment rentals, and mining operations, making us
              a one-stop solution for industrial and infrastructure development.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`${feature.color} flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {feature.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content Section - Services */}
          <div className="flex flex-col lg:flex-row gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Service Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={`${service.title} services - Professional architectural work`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>

                {/* Service Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MiniAboutUs;
