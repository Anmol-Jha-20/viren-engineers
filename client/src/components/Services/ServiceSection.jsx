// import React from "react";
// import { motion } from "framer-motion";

// const ServiceCard = ({ image, icon, title, description, index }) => {
//   return (
//     <div className="relative group overflow-hidden rounded-lg shadow-lg">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: index * 0.2 }}
//         className="relative h-80 md:h-96"
//       >
//         {/* Service Image */}
//         <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
//           <img src={image} alt={title} className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

//           {/* Service Icon and Title */}
//           <div className="absolute bottom-0 left-0 p-6">
//             <div className="flex items-center space-x-4">
//               <div className="w-16 h-16 bg-yellow-400 rounded flex items-center justify-center">
//                 <div className="text-2xl">{icon}</div>
//               </div>
//               <h3 className="text-white text-xl font-semibold">{title}</h3>
//             </div>
//           </div>
//         </div>

//         {/* Service Details (shown on hover) */}
//         <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8">
//           <div className="flex items-center space-x-4 mb-6">
//             <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center">
//               <div className="text-yellow-400 text-2xl">{icon}</div>
//             </div>
//             <h3 className="text-gray-800 text-xl font-semibold">{title}</h3>
//           </div>

//           <p className="text-gray-600 text-sm leading-relaxed mb-6">
//             {description}
//           </p>

//           <button className="text-yellow-400 font-semibold text-sm hover:text-yellow-500 transition-colors duration-200 self-start">
//             READ MORE →
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const ServicesSection = () => {
//   const services = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       icon: "🏗️",
//       title: "Property Sketching",
//       description:
//         "Builder Service typesetting constration. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       icon: "📋",
//       title: "Property Sketching",
//       description:
//         "Builder Service typesetting constration. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       icon: "✏️",
//       title: "Property Sketching",
//       description:
//         "Builder Service typesetting constration. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden">
//       {/* Background Tools */}
//       {/* <div className="absolute top-0 left-0 opacity-10">
//         <img
//           src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
//           alt="Tools"
//           className="w-64 h-32 object-contain"
//         />
//       </div>

//       <div className="absolute top-8 left-8">
//         <div className="w-12 h-12 bg-yellow-400 rounded flex items-center justify-center">
//           <span className="text-white text-xl">⚙️</span>
//         </div>
//       </div> */}

//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wide mb-2">
//             Our Services
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
//             What's Our Offers
//           </h2>
//           <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
//         </motion.div>

//         {/* Service Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <ServiceCard
//               key={index}
//               image={service.image}
//               icon={service.icon}
//               title={service.title}
//               description={service.description}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* Pagination Dots */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="flex justify-center space-x-2 mt-12"
//         >
//           <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
//           <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // Close icon

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
                <div className="text-2xl">{icon}</div>
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
              <div className="text-yellow-400 text-2xl">{icon}</div>
            </div>
            <h3 className="text-gray-800 text-xl font-semibold">{title}</h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {description}
          </p>

          <button className="text-yellow-400 font-semibold text-sm hover:text-yellow-500 transition-colors duration-200 self-start">
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
      icon: "🏗️",
      title: "Rental Service",
      description:
        "Service Provider of a wide range of services which include Sandvik S6 Screen Crusher Machine Rental Service, Hitachi Zaxis 120 Rental Service, Tata Hitachi Super 210 Rental Service, Tata Hitachi 215 Quarry Rental Service, Alpha SP 453 Mobile Tower Crane Rental Service and Earthmoving Equipment Rental Service.",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535216439/YB/JH/NK/109289942/tower-crane-rental-500x500.jpeg",
      icon: "🏗️",
      title: "Tower Crane Rental Services",
      description:
        "Our service range includes a wide range of Mobile Tower Crane Sp 453, Tower Crane Rental, Mobile Tower Crane Rental Service, Construction Tower Crane Rental Service and Tower Crane 2418 Sp 453 Alpha.",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535216570/FO/KN/VZ/109289942/screening-machine-500x500.jpeg",
      icon: "🏗️",
      title: "Screening Machinery",
      description:
        "Service Provider of a wide range of services which include Kleemann MS 952 Screen Machine, Biomining Screen Machines and Screening Machine.",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494894724/YN/UN/AV/109289942/mine-development-service-500x500.jpg",
      icon: "🏗️",
      title: "Development Service",
      description:
        "Offering you a complete choice of services which include Mine Development Service. Mine development service involves the planning excavation and construction of infrastructure in mining projects including drilling blasting and ore extraction to prepare the site for production.",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535216746/GO/GI/DU/109289942/solid-waste-biomining-500x500.jpeg",
      icon: "🏗️",
      title: "Waste Management Services",
      description:
        "Pioneers in the industry, we offer Solid Waste Management, Solid Waste Management Equipment, Biomining Machines, Biomining Plant, Solid Waste Management Solutions and Solid Waste Biomining from India.",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535217040/MF/ZN/JZ/109289942/ajax-fiori-self-loading-concrete-mixer-500x500.jpeg",
      icon: "🏗️",
      title: "Self Loading Concrete Mixer",
      description:
        "Pioneers in the industry, we offer Ajax Fiori Self Loading Concrete Mixer, Self Loading Concrete Mixer Truck and Concrete Mixer from India.",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494827156/WO/HT/OZ/109289942/rcc-digester-work-500x500.jpg",
      icon: "🏗️",
      title: "Work Service",
      description:
        "Our team is experienced in constructing high-strength RCC digesters that meet industrial standards and client-specific requirements. Whether for wastewater treatment plants, biogas units, or industrial processing systems, we ensure every structure is built with quality materials, expert workmanship, and a commitment to safety and efficiency.",
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
