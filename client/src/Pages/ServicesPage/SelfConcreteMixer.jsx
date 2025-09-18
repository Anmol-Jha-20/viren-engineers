import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import HeroImage from "../../assets/Hero1.png";

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

function SelfConcreteMixer() {
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
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535217040/MF/ZN/JZ/109289942/ajax-fiori-self-loading-concrete-mixer-500x500.jpeg",
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/3/494881521/LJ/SB/AW/109289942/earthmoving-equipment-rental-service-500x500.jpeg",
      title: "Ajax Fiori Self Loading Concrete Mixer",
      description:
        "Ajax Fiori Self Loading Concrete Mixer is a mobile unit that combines loading, mixing, and transporting of concrete in one machine. Ideal for remote sites and small to medium projects, it offers high efficiency, easy operation, and cost-effective on-site concrete production.",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535217031/FR/KD/GL/109289942/self-loading-concrete-mixer-truck-500x500.jpeg",
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535216439/YB/JH/NK/109289942/tower-crane-rental-500x500.jpeg",
      title: "Self Loading Concrete Mixer Truck",
      description:
        "A Self Loading Concrete Mixer Truck is a mobile, all-in-one machine that combines the functions of a loader, mixer, and transport vehicle. It automatically loads raw materials, mixes them into concrete, and delivers it directly to the site. Ideal for small to medium construction projects and remote locations, it improves efficiency by reducing the need for separate batching plants and manual labor.",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535217090/CJ/PZ/QX/109289942/concrete-mixer-500x500.jpeg",
      icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535216570/FO/KN/VZ/109289942/screening-machine-500x500.jpeg",
      title: "Concrete Mixer",
      description:
        "A Concrete Mixer is a machine used to combine cement, aggregates (like sand or gravel), and water to form concrete. It mixes these ingredients thoroughly to produce a uniform and workable concrete mix. Concrete mixers come in various sizes and types, from small portable units to large truck-mounted mixers, and are essential equipment in construction for preparing concrete efficiently and consistently on-site or in batching plants.",
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
              Self Loading Concrete Mixer
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
                Self Loading Concrete Mixer
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
                Our Self Loading Concrete Mixer
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

export default SelfConcreteMixer;
