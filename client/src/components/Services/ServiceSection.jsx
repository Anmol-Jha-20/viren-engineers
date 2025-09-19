import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ image, icon, title, description, index, link }) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

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

          <button
            onClick={() => {
              navigate(link);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-yellow-400 font-semibold text-sm cursor-pointer hover:text-yellow-500 transition-colors duration-200 self-start"
          >
            READ MORE →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494881521/LJ/SB/AW/109289942/earthmoving-equipment-rental-service-500x500.jpeg",
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/3/494881521/LJ/SB/AW/109289942/earthmoving-equipment-rental-service-500x500.jpeg",
      title: "Rental Service",
      description:
        "Service Provider of a wide range of services which include Sandvik S6 Screen Crusher Machine Rental Service, Hitachi Zaxis 120 Rental Service, Tata Hitachi Super 210 Rental Service, Tata Hitachi 215 Quarry Rental Service, Alpha SP 453 Mobile Tower Crane Rental Service and Earthmoving Equipment Rental Service.",
      link: "/rental-service",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535216439/YB/JH/NK/109289942/tower-crane-rental-500x500.jpeg",
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535216439/YB/JH/NK/109289942/tower-crane-rental-500x500.jpeg",
      title: "Tower Crane Rental Services",
      description:
        "Our service range includes a wide range of Mobile Tower Crane Sp 453, Tower Crane Rental, Mobile Tower Crane Rental Service, Construction Tower Crane Rental Service and Tower Crane 2418 Sp 453 Alpha.",
      link: "/tower-crane-rental-services",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535216570/FO/KN/VZ/109289942/screening-machine-500x500.jpeg",
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535216570/FO/KN/VZ/109289942/screening-machine-500x500.jpeg",
      title: "Screening Machinery",
      description:
        "Service Provider of a wide range of services which include Kleemann MS 952 Screen Machine, Biomining Screen Machines and Screening Machine.",
      link: "/screening-machinery",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494894724/YN/UN/AV/109289942/mine-development-service-500x500.jpg",
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/3/494894724/YN/UN/AV/109289942/mine-development-service-500x500.jpg",
      title: "Development Service",
      description:
        "Offering you a complete choice of services which include Mine Development Service. Mine development service involves the planning excavation and construction of infrastructure in mining projects including drilling blasting and ore extraction to prepare the site for production.",
      link: "/development-service",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535216746/GO/GI/DU/109289942/solid-waste-biomining-500x500.jpeg",
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535216746/GO/GI/DU/109289942/solid-waste-biomining-500x500.jpeg",
      title: "Waste Management Services",
      description:
        "Pioneers in the industry, we offer Solid Waste Management, Solid Waste Management Equipment, Biomining Machines, Biomining Plant, Solid Waste Management Solutions and Solid Waste Biomining from India.",
      link: "/waste-management-services",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535217040/MF/ZN/JZ/109289942/ajax-fiori-self-loading-concrete-mixer-500x500.jpeg",
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535217040/MF/ZN/JZ/109289942/ajax-fiori-self-loading-concrete-mixer-500x500.jpeg",
      title: "Self Loading Concrete Mixer",
      description:
        "Pioneers in the industry, we offer Ajax Fiori Self Loading Concrete Mixer, Self Loading Concrete Mixer Truck and Concrete Mixer from India.",
      link: "/self-loading-concrete-mixer",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494827156/WO/HT/OZ/109289942/rcc-digester-work-500x500.jpg",
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/3/494827156/WO/HT/OZ/109289942/rcc-digester-work-500x500.jpg",
      title: "Work Service",
      description:
        "Our team is experienced in constructing high-strength RCC digesters that meet industrial standards and client-specific requirements. Whether for wastewater treatment plants, biogas units, or industrial processing systems, we ensure every structure is built with quality materials, expert workmanship, and a commitment to safety and efficiency.",
      link: "/work-service",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wide mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What's Our Offers
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
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
              link={service.link}
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

export default ServicesSection;
