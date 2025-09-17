import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const ServiceCard = ({ image, icon, title, description, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = () => {
    setShowDetails(!showDetails);
  };

  const handleClose = (e) => {
    e.stopPropagation(); // parent click trigger na ho
    setShowDetails(false);
  };

  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={handleToggle} // mobile par click se toggle hoga
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="relative h-80 md:h-96"
      >
        {/* Service Image & Title */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            showDetails ? "opacity-0 md:group-hover:opacity-0" : "opacity-100"
          }`}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div className="absolute bottom-0 left-0 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-400 rounded flex items-center justify-center">
                {/* <div className="text-2xl">{icon}</div> */}
                <img src={icon} className="object-cover h-full w-full" alt="" />
              </div>
              <h3 className="text-white text-xl font-semibold">{title}</h3>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-300 flex flex-col justify-center p-8 ${
            showDetails ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
          }`}
        >
          {/* Close button (only for mobile) */}
          {showDetails && (
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2"
            >
              <X size={20} />
            </button>
          )}

          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center">
              {/* <div className="text-yellow-400 text-2xl">{icon}</div> */}
              <img src={icon} className="object-cover h-full w-full" alt="" />
            </div>
            <h3 className="text-gray-800 text-xl font-semibold">{title}</h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {description}
          </p>

          <button className="text-yellow-400 font-semibold cursor-pointer text-sm hover:text-yellow-500 transition-colors duration-200 self-start">
            CONTACT US →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const ServicesSectionTemp = ({
  bgImage1,
  serviceTitle1,
  serviceDescription1,
  bgImage2,
  serviceTitle2,
  serviceDescription2,
  bgImage3,
  serviceTitle3,
  serviceDescription3,
  bgImage4,
  serviceTitle4,
  serviceDescription4,
  bgImage5,
  serviceTitle5,
  serviceDescription5,
  bgImage6,
  serviceTitle6,
  serviceDescription6,
  bgImage7,
  serviceTitle7,
  serviceDescription7,
  bgImage8,
  serviceTitle8,
  serviceDescription8,
  bgImage9,
  serviceTitle9,
  serviceDescription9,
  bgImage10,
  serviceTitle10,
  serviceDescription10,
  bgImage11,
  serviceTitle11,
  serviceDescription11,
  bgImage12,
  serviceTitle12,
  serviceDescription12,
}) => {
  const services = [
    {
      image: bgImage1,
      icon: bgImage1,
      title: serviceTitle1,
      description: serviceDescription1,
    },
    {
      image: bgImage2,
      icon: bgImage2,
      title: serviceTitle2,
      description: serviceDescription2,
    },
    {
      image: bgImage3,
      icon: bgImage3,
      title: serviceTitle3,
      description: serviceDescription3,
    },
    {
      image: bgImage4,
      icon: bgImage4,
      title: serviceTitle4,
      description: serviceDescription4,
    },
    {
      image: bgImage5,
      icon: bgImage5,
      title: serviceTitle5,
      description: serviceDescription5,
    },
    {
      image: bgImage6,
      icon: bgImage6,
      title: serviceTitle6,
      description: serviceDescription6,
    },
    {
      image: bgImage7,
      icon: bgImage7,
      title: serviceTitle7,
      description: serviceDescription7,
    },
    {
      image: bgImage8,
      icon: bgImage8,
      title: serviceTitle8,
      description: serviceDescription8,
    },
    {
      image: bgImage9,
      icon: bgImage9,
      title: serviceTitle9,
      description: serviceDescription9,
    },
    {
      image: bgImage10,
      icon: bgImage10,
      title: serviceTitle10,
      description: serviceDescription10,
    },
    {
      image: bgImage11,
      icon: bgImage11,
      title: serviceTitle11,
      description: serviceDescription11,
    },
    {
      image: bgImage12,
      icon: bgImage12,
      title: serviceTitle12,
      description: serviceDescription12,
    },
  ];

  return (
    <section className="px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wide mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What's Our Offers
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto"></div> */}
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center space-x-2 mt-12"
        >
          <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
          <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSectionTemp;
