import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import HeroImage from "../../assets/Hero1.png";
import FactoryShedImage from "../../assets/FactoryShed.png";
import FactoryShedTwo from "../../assets/FactoryShedTwo.png";
import SolarEnergyProject from "../../assets/SolarEnergyProject.png";
import StoneCrusherImage from "../../assets/StoneCrusherImage.png";

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

          <button
            onClick={() => (window.location.href = "tel:+918888822150")}
            className="text-yellow-400 font-semibold text-sm cursor-pointer hover:text-yellow-500 transition-colors duration-200 self-start"
          >
            CONTACT US →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

function PrivateProjects() {
  const [activeService, setActiveService] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      image: FactoryShedImage,
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/3/494881521/LJ/SB/AW/109289942/earthmoving-equipment-rental-service-500x500.jpeg",
      title: "Nanded Phata - Factory Shed",
      description:
        "In 2003-2004, we successfully completed the construction of a Factory Shed for Suhas Enterprises at Nanded Phata, Pune. This project, valued at INR 1.7 crore, exemplified our commitment to quality and precision, delivering a robust and efficient industrial space within the specified timelines.",
    },
    {
      image: FactoryShedTwo,
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535216439/YB/JH/NK/109289942/tower-crane-rental-500x500.jpeg",
      title: "Kahne phata - Factory Shed",
      description:
        "From October 2010 to January 2011, we completed the construction of a Factory Shed for GPK Engg. Pvt. Ltd. at Kahne Phata, Pune. With a project value of INR 1.52 crore, we ensured the delivery of a high-quality, functional industrial space, meeting all requirements and timelines with precision and expertise.",
    },
    {
      image: SolarEnergyProject,
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535216570/FO/KN/VZ/109289942/screening-machine-500x500.jpeg",
      title: "Solar Energy Project",
      description:
        "Between March and November 2013, we executed a Solar Energy Project for Welspun Energy Pvt. Ltd. at Mangalwedha, Solapur. Valued at INR 5.0 crores, this project showcased our capabilities in the renewable energy sector, delivering a high-efficiency infrastructure that met the client’s sustainability and performance goals on time and to exacting standards.",
    },
    {
      image: StoneCrusherImage,
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535216570/FO/KN/VZ/109289942/screening-machine-500x500.jpeg",
      title: "Stone Crusher Development",
      description:
        "From September to December 2018, we successfully completed the Stone Crusher Development project for Shiv Stone Crusher in Saswad, Pune. With a project value of INR 2.65 crores, this development involved robust engineering and timely execution, delivering a durable and high-performance crushing facility tailored to the client’s operational needs.",
    },
  ];

  const handleServiceClick = (serviceId) => {
    if (isMobile) {
      setActiveService(activeService === serviceId ? null : serviceId);
    }
  };

  const handleCloseModal = () => {
    setActiveService(null);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}

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
                Our Private Projects
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Private Completed Projects
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
            </motion.div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  image={service.image}
                  icon={service.image}
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
      </div>
    </>
  );
}

export default PrivateProjects;
