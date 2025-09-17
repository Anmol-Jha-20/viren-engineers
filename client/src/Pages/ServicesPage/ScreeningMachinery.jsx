import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import HeroImage from "../../assets/Hero1.png";
import ServicesSectionTemp from "../../components/Services/ServiceSectionTemp.jsx";

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

          <button className="text-yellow-400 font-semibold text-sm hover:text-yellow-500 transition-colors duration-200 self-start">
            CONTACT US →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

function ScreeningMachineryService() {
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
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535216597/WK/QQ/YQ/109289942/kleemann-ms-952-screen-machine-500x500.jpeg",
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/3/494881521/LJ/SB/AW/109289942/earthmoving-equipment-rental-service-500x500.jpeg",
      title: "Kleemann MS 952 Screen Machine",
      description:
        "The Kleemann MS 952 Screen Machine is a high-performance mobile screening plant used for the classification of materials in aggregate processing, mining, and recycling operations. It's typically used to sort and screen materials such as sand, gravel, crushed stone, and various types of recycling materials (e.g., crushed concrete and asphalt).",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535216550/XM/HA/SK/109289942/biomining-screen-machines-500x500.jpeg",
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535216439/YB/JH/NK/109289942/tower-crane-rental-500x500.jpeg",
      title: "Biomining Screen Machines",
      description:
        "Biomining Screen Machines are specialized machines used in the biomining process, which involves the extraction of valuable metals from ores using biological processes, such as microbial leaching. These machines are designed to screen and sort materials during the biomining operation, ensuring that the right particle size and composition are achieved for optimal microbial action.",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535216570/FO/KN/VZ/109289942/screening-machine-500x500.jpeg",
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535216570/FO/KN/VZ/109289942/screening-machine-500x500.jpeg",
      title: "Screening Machine",
      description:
        "A Screening Machine is a piece of equipment designed to separate or classify materials based on their size, shape, or other physical properties through the process of screening. It is widely used in industries like mining, construction, recycling, food processing, chemical manufacturing, and more.",
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
              Screening Machinery
            </h1>

            {/* Breadcrumb Navigation */}
            <nav
              className="flex items-center space-x-2 text-sm sm:text-base"
              aria-label="Breadcrumb"
            >
              <a
                href="/"
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
                aria-label="Home"
              >
                HOME
              </a>
              <ChevronRight
                className="w-4 h-4 text-yellow-400"
                aria-hidden="true"
              />
              <span className="text-yellow-400 uppercase font-medium">
                Screening Machinery
              </span>
            </nav>
          </div>
        </section>

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
                Our Screening Machinery
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

export default ScreeningMachineryService;
