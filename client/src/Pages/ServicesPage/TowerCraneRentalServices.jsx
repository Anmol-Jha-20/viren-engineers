// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight, X } from "lucide-react";
// import HeroImage from "../../assets/Hero1.png";
// import ServicesSectionTemp from "../../components/Services/ServiceSectionTemp.jsx";

// const ServiceCard = ({ image, icon, title, description, index }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const handleToggle = () => {
//     setShowDetails(!showDetails);
//   };

//   const handleClose = (e) => {
//     e.stopPropagation(); // parent click trigger na ho
//     setShowDetails(false);
//   };

//   return (
//     <div
//       className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
//       onClick={handleToggle} // mobile par click se toggle hoga
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: index * 0.2 }}
//         className="relative h-80 md:h-96"
//       >
//         {/* Service Image & Title */}
//         <div
//           className={`absolute inset-0 transition-opacity duration-300 ${
//             showDetails ? "opacity-0 md:group-hover:opacity-0" : "opacity-100"
//           }`}
//         >
//           <img src={image} alt={title} className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

//           <div className="absolute bottom-0 left-0 p-6">
//             <div className="flex items-center space-x-4">
//               <div className="w-16 h-16 bg-yellow-400 rounded flex items-center justify-center">
//                 {/* <div className="text-2xl">{icon}</div> */}
//                 <img src={icon} className="object-cover h-full w-full" alt="" />
//               </div>
//               <h3 className="text-white text-xl font-semibold">{title}</h3>
//             </div>
//           </div>
//         </div>

//         {/* Service Details */}
//         <div
//           className={`absolute inset-0 bg-white transition-opacity duration-300 flex flex-col justify-center p-8 ${
//             showDetails ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
//           }`}
//         >
//           {/* Close button (only for mobile) */}
//           {showDetails && (
//             <button
//               onClick={handleClose}
//               className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2"
//             >
//               <X size={20} />
//             </button>
//           )}

//           <div className="flex items-center space-x-4 mb-6">
//             <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center">
//               {/* <div className="text-yellow-400 text-2xl">{icon}</div> */}
//               <img src={icon} className="object-cover h-full w-full" alt="" />
//             </div>
//             <h3 className="text-gray-800 text-xl font-semibold">{title}</h3>
//           </div>

//           <p className="text-gray-600 text-sm leading-relaxed mb-6">
//             {description}
//           </p>

//           <button
//             onClick={() => (window.location.href = "tel:+918888822150")}
//             className="text-yellow-400 font-semibold text-sm cursor-pointer hover:text-yellow-500 transition-colors duration-200 self-start"
//           >
//             CONTACT US →
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// function TowerCraneRentalService() {
//   const [activeService, setActiveService] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   React.useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const services = [
//     {
//       image:
//         "https://5.imimg.com/data5/IOS/Default/2023/8/337096915/TD/VZ/AS/109289942/product-jpeg-500x500.png",
//       icon: "https://5.imimg.com/data5/SELLER/Default/2025/3/494881521/LJ/SB/AW/109289942/earthmoving-equipment-rental-service-500x500.jpeg",
//       title: "Mobile Tower Crane Sp 453",
//       description:
//         "Service Provider of a wide range of services which include Sandvik S6 Screen Crusher Machine Rental Service, Hitachi Zaxis 120 Rental Service, Tata Hitachi Super 210 Rental Service, Tata Hitachi 215 Quarry Rental Service, Alpha SP 453 Mobile Tower Crane Rental Service and Earthmoving Equipment Rental Service.",
//     },
//     {
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2025/8/535216439/YB/JH/NK/109289942/tower-crane-rental-500x500.jpeg",
//       icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535216439/YB/JH/NK/109289942/tower-crane-rental-500x500.jpeg",
//       title: "Tower Crane Rental",
//       description:
//         "Our service range includes a wide range of Mobile Tower Crane Sp 453, Tower Crane Rental, Mobile Tower Crane Rental Service, Construction Tower Crane Rental Service and Tower Crane 2418 Sp 453 Alpha.",
//     },
//     {
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2025/8/535216394/HD/GM/OO/109289942/mobile-tower-crane-rental-service-500x500.jpeg",
//       icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535216570/FO/KN/VZ/109289942/screening-machine-500x500.jpeg",
//       title: "Mobile Tower Crane Rental Service",
//       description:
//         "Service Provider of a wide range of services which include Kleemann MS 952 Screen Machine, Biomining Screen Machines and Screening Machine.",
//     },
//     {
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2025/3/494894724/YN/UN/AV/109289942/mine-development-service-500x500.jpg",
//       icon: "https://5.imimg.com/data5/SELLER/Default/2025/3/494894724/YN/UN/AV/109289942/mine-development-service-500x500.jpg",
//       title: "Development Service",
//       description:
//         "Offering you a complete choice of services which include Mine Development Service. Mine development service involves the planning excavation and construction of infrastructure in mining projects including drilling blasting and ore extraction to prepare the site for production.",
//     },
//     {
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2025/8/535216746/GO/GI/DU/109289942/solid-waste-biomining-500x500.jpeg",
//       icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535216746/GO/GI/DU/109289942/solid-waste-biomining-500x500.jpeg",
//       title: "Waste Management Services",
//       description:
//         "Pioneers in the industry, we offer Solid Waste Management, Solid Waste Management Equipment, Biomining Machines, Biomining Plant, Solid Waste Management Solutions and Solid Waste Biomining from India.",
//     },
//     {
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2025/8/535217040/MF/ZN/JZ/109289942/ajax-fiori-self-loading-concrete-mixer-500x500.jpeg",
//       icon: "https://5.imimg.com/data5/SELLER/Default/2025/8/535217040/MF/ZN/JZ/109289942/ajax-fiori-self-loading-concrete-mixer-500x500.jpeg",
//       title: "Self Loading Concrete Mixer",
//       description:
//         "Pioneers in the industry, we offer Ajax Fiori Self Loading Concrete Mixer, Self Loading Concrete Mixer Truck and Concrete Mixer from India.",
//     },
//     {
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2025/3/494827156/WO/HT/OZ/109289942/rcc-digester-work-500x500.jpg",
//       icon: "https://5.imimg.com/data5/SELLER/Default/2025/3/494827156/WO/HT/OZ/109289942/rcc-digester-work-500x500.jpg",
//       title: "Work Service",
//       description:
//         "Our team is experienced in constructing high-strength RCC digesters that meet industrial standards and client-specific requirements. Whether for wastewater treatment plants, biogas units, or industrial processing systems, we ensure every structure is built with quality materials, expert workmanship, and a commitment to safety and efficiency.",
//     },
//   ];

//   const handleServiceClick = (serviceId) => {
//     if (isMobile) {
//       setActiveService(activeService === serviceId ? null : serviceId);
//     }
//   };

//   const handleCloseModal = () => {
//     setActiveService(null);
//   };
//   return (
//     <>
//       <div className="min-h-screen bg-gray-50">
//         {/* Header */}
//         <section className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
//           {/* Background Image with Overlay */}
//           <div
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImage})`,
//             }}
//           />

//           {/* Content Container */}
//           <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//             {/* Main Heading */}
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8">
//               Tower Crane Rental Services
//             </h1>

//             {/* Breadcrumb Navigation */}
//             <nav
//               className="flex items-center space-x-2 text-sm sm:text-base"
//               aria-label="Breadcrumb"
//             >
//               <a
//                 href="/"
//                 className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
//                 aria-label="Home"
//               >
//                 HOME
//               </a>
//               <ChevronRight
//                 className="w-4 h-4 text-yellow-400"
//                 aria-hidden="true"
//               />
//               <span className="text-yellow-400 uppercase font-medium">
//                 Tower Crane Rental Services
//               </span>
//             </nav>
//           </div>
//         </section>

//         <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden">
//           <div className="max-w-7xl mx-auto">
//             {/* Section Header */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-center mb-16"
//             >
//               <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wide mb-2">
//                 Our Tower Crane Rental Services
//               </p>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
//                 What's Our Offers
//               </h2>
//               <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
//             </motion.div>

//             {/* Service Cards Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {services.map((service, index) => (
//                 <ServiceCard
//                   key={index}
//                   image={service.image}
//                   icon={service.image}
//                   title={service.title}
//                   description={service.description}
//                   index={index}
//                 />
//               ))}
//             </div>

//             {/* Pagination Dots */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               className="flex justify-center space-x-2 mt-12"
//             >
//               <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
//               <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export default TowerCraneRentalService;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  MapPin,
  Calendar,
  Phone,
  ArrowRight,
  Building2,
  Mountain,
  Settings,
  Shield,
  Clock,
  DollarSign,
  Star,
  ChevronRight,
  X,
  Truck,
  Wrench,
  Undo2,
  SlidersHorizontal,
} from "lucide-react";
import HeroImage from "../../assets/Hero1.png";
import AboutImage from "../../assets/About.jpeg";

const TowerCraneRentalService = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Site Assessment & Planning",
      description:
        "Thorough evaluation of site conditions and lifting requirements to determine optimal crane type, placement, and configuration.",
    },
    {
      icon: <SlidersHorizontal className="w-8 h-8" />,
      title: "Crane Selection & Customization",
      description:
        "Access to a wide range of tower cranes with customizable heights and capacities to match project specifications.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Delivery & Installation",
      description:
        "Timely transportation, on-site assembly, and erection of cranes using certified equipment and experienced personnel.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Operation & Maintenance",
      description:
        "Skilled operators and technicians ensure safe, efficient crane operation, with regular maintenance for uninterrupted performance.",
    },
    {
      icon: <Undo2 className="w-8 h-8" />,
      title: "Dismantling & Removal",
      description:
        "Safe and efficient dismantling and removal of cranes upon project completion, ensuring minimal disruption to your site.",
    },
  ];

  const advantages = [
    {
      icon: <Star className="w-6 h-6" />,
      text: "Skilled and experienced workforce",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      text: "Reliable, modern crane fleet",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Strong focus on safety and environmental compliance",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Timely and efficient project execution",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      text: "Cost-effective and scalable rental solutions",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
            Tower Crane Rental Services
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
              Tower Crane Rental Services
            </span>
          </nav>
        </div>
      </section>

      {/* Main Service Highlight */}
      <section id="main-service" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isVisible["main-service"] ? "visible" : "hidden"}
            variants={fadeInUp}
            className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 lg:p-12 shadow-xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                  Tower Crane Rental Services
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We provide reliable and high-performance tower crane rental
                  solutions for all types of construction projects. Our fleet
                  features modern, well-maintained cranes operated by trained
                  professionals, ensuring maximum safety, efficiency, and
                  precision on-site. Whether for high-rise buildings or
                  industrial structures, we offer flexible rental plans, timely
                  deployment, and full technical support to meet your project
                  demands with confidence.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-slate-900 font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2"
                  onClick={() => (window.location.href = "tel:+918888822150")}
                >
                  Get Latest Price
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
              <div className="relative">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2025/8/535216439/YB/JH/NK/109289942/tower-crane-rental-500x500.jpeg"
                  alt="Development Service"
                  className="rounded"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isVisible["services-grid"] ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              What's Included in Our Service
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our tower crane rental services offer a complete, hassle-free
              solution to support your lifting needs with safety, efficiency,
              and reliability at the core.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isVisible["services-grid"] ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section id="company-info" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate={isVisible["company-info"] ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Why Choose{" "}
                <span className="text-yellow-500">Viren Engineers</span> And
                Contractors?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Founded in 2020 in Pune, Maharashtra, Viren Engineers and
                Contractors has earned a strong reputation in the construction
                and mining support industry. Known for our reliable Tower Crane
                Rental Services, we continue to expand our offerings to deliver
                complete, end-to-end solutions—now including Mine Development
                and Screening Services.
              </p>

              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate={isVisible["company-info"] ? "visible" : "hidden"}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.1, duration: 0.5 },
                      },
                    }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors duration-200"
                  >
                    <div className="text-yellow-500">{advantage.icon}</div>
                    <span className="text-slate-700 font-medium">
                      {advantage.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isVisible["company-info"] ? "visible" : "hidden"}
              variants={fadeInUp}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl">
                <img
                  src={AboutImage}
                  alt="Company Image"
                  className="absolute inset-0 w-full h-full object-cover rounded"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="py-16 lg:py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate={isVisible["cta"] ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold mb-6"
            >
              Let's Build Together
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Whether you're launching a new mining project or expanding an
              existing operation, Viren Engineers And Contractors is your
              trusted partner for professional, efficient, and dependable mine
              development solutions.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-slate-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2 text-lg"
                onClick={() => (window.location.href = "tel:+918888822150")}
              >
                <Phone className="w-5 h-5" />
                Contact Us Today
              </motion.button>
              <span className="text-gray-400">or</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-yellow-500 text-yellow-500 cursor-pointer hover:bg-yellow-500 hover:text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg"
                onClick={() => (window.location.href = "tel:+918888822150")}
              >
                Get Customized Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TowerCraneRentalService;
