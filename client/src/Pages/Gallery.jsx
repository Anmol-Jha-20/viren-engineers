import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Eye,
  Building2,
  Truck,
  Hammer,
  Settings,
  ChevronLeft,
  ChevronRight,
  Recycle,
} from "lucide-react";
import HeroImage from "../assets/Hero1.png";
import ProjectImage1 from "../assets/stoneimage.webp";
import ProjectImage2 from "../assets/projects/ScreeningOperations.webp";
import ProjectImage3 from "../assets/projects/Bioming.webp";
import ProjectImage6 from "../assets/projects/irrigationproject.webp";
import ProjectImage7 from "../assets/projects/pwdimage.webp";
import ProjectImage8 from "../assets/projects/BridgeImage.webp";
import ProjectImage9 from "../assets/projects/MjpProject.webp";
import ProjectImage10 from "../assets/projects/privateProject.webp";

const VirenGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("services");

  const services = [
    {
      id: 1,
      title: "Rental Service",
      description:
        "Rental Service offers cost-effective access to equipment or tools for short-term use without the need for ownership.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494881521/LJ/SB/AW/109289942/earthmoving-equipment-rental-service-500x500.jpeg",
      icon: Building2,
      category: "Construction",
    },
    {
      id: 2,
      title: "Tower Crane Rental Services",
      description:
        "Tower Crane Rental Services offer efficient lifting solutions for high-rise construction projects.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535216439/YB/JH/NK/109289942/tower-crane-rental-500x500.jpeg",
      icon: Settings,
      category: "Engineering",
    },
    {
      id: 3,
      title: "Screening Machinery",
      description:
        "Screening Machinery enables efficient separation of materials by size for construction, mining, and recycling applications.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535216570/FO/KN/VZ/109289942/screening-machine-500x500.jpeg",
      icon: Truck,
      category: "Rentals",
    },
    {
      id: 4,
      title: "Development Service",
      description:
        "Development Service provides end-to-end support for planning, executing, and managing construction or infrastructure projects.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494894724/YN/UN/AV/109289942/mine-development-service-500x500.jpg",
      icon: Hammer,
      category: "Mining",
    },
    {
      id: 5,
      title: "Waste Management Services",
      description:
        "Waste Management Services ensure efficient and eco-friendly waste handling and disposal.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535216746/GO/GI/DU/109289942/solid-waste-biomining-500x500.jpeg",
      icon: Recycle,
      category: "Mining",
    },
    {
      id: 6,
      title: "Self Loading Concrete Mixer",
      description:
        "Self Loading Concrete Mixer combines loading, mixing, and transporting for on-site concrete production.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/535217040/MF/ZN/JZ/109289942/ajax-fiori-self-loading-concrete-mixer-500x500.jpeg",
      icon: Truck,
      category: "Mining",
    },
    {
      id: 7,
      title: "Work Service",
      description:
        "Work Service delivers specialized construction and infrastructure solutions tailored to project needs.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494827156/WO/HT/OZ/109289942/rcc-digester-work-500x500.jpg",
      icon: Hammer,
      category: "Mining",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Stone Crusher & Mining",
      description:
        "Major highway infrastructure development project spanning 200km",
      image: ProjectImage1,
      location: "Maharashtra",
      year: "2023-2024",
      status: "Completed",
    },
    {
      id: 2,
      title: "Screening Operations & Environmental",
      description:
        "Modern 15-story commercial building with sustainable design",
      image: ProjectImage2,
      location: "Pune",
      year: "2023",
      status: "Completed",
    },
    {
      id: 3,
      title: "Biomining Project",
      description:
        "State-of-the-art manufacturing facility with advanced mechanical systems",
      image: ProjectImage3,
      location: "Nashik",
      year: "2024",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Rental model projects",
      description:
        "Luxury residential project with modern amenities and infrastructure",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494768529/EZ/SO/KF/109289942/tata-zaxis-120-500x500.jpeg",
      location: "Pune",
      year: "2022-2023",
      status: "Completed",
    },
    {
      id: 5,
      title: "Irrigation Projects",
      description: "Major bridge infrastructure connecting two districts",
      image: ProjectImage6,
      location: "Satara",
      year: "2024",
      status: "In Progress",
    },
    {
      id: 6,
      title: "PWD Projects",
      description:
        "Comprehensive mining infrastructure and processing facilities",
      image: ProjectImage7,
      location: "Kolhapur",
      year: "2023",
      status: "Completed",
    },
    {
      id: 7,
      title: "Bridge Construction",
      description:
        "Comprehensive mining infrastructure and processing facilities",
      image: ProjectImage8,
      location: "Kolhapur",
      year: "2023",
      status: "Completed",
    },
    {
      id: 8,
      title: "MJP Projects",
      description:
        "Comprehensive mining infrastructure and processing facilities",
      image: ProjectImage9,
      location: "Kolhapur",
      year: "2023",
      status: "Completed",
    },
    {
      id: 9,
      title: "Private Completed Projects",
      description:
        "Comprehensive mining infrastructure and processing facilities",
      image: ProjectImage10,
      location: "Kolhapur",
      year: "2023",
      status: "Completed",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: { opacity: 0, scale: 0.8 },
  };

  const ServiceCard = ({ service }) => {
    const IconComponent = service.icon;

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
        onClick={() => setSelectedImage({ ...service, type: "service" })}
      >
        <div className="relative overflow-hidden h-64">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* <div className="absolute top-4 right-4 bg-yellow-400 text-slate-800 px-3 py-1 rounded-full text-sm font-semibold">
            {service.category}
          </div> */}
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Eye className="w-6 h-6" />
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3">
            <IconComponent className="w-6 h-6 text-yellow-500 mr-3" />
            <h3 className="text-xl font-bold text-slate-800">
              {service.title}
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      </motion.div>
    );
  };

  const ProjectCard = ({ project }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
      onClick={() => setSelectedImage({ ...project, type: "project" })}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
            project.status === "Completed"
              ? "bg-green-500 text-white"
              : "bg-yellow-400 text-slate-800"
          }`}
        >
          {project.status}
        </div> */}
        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Eye className="w-6 h-6" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        {/* <div className="flex justify-between text-sm">
          <span className="text-yellow-600 font-semibold">
            {project.location}
          </span>
          <span className="text-slate-500">{project.year}</span>
        </div> */}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
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
            Gallery
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
            <span className="text-orange-400 font-medium">GALLERY</span>
          </nav>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-yellow-600">Our Company</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
              <strong className="text-yellow-500">
                Viren Engineers and Contractors
              </strong>{" "}
              &nbsp; is a leading construction firm delivering high-quality
              civil and mechanical infrastructure across Maharashtra. From
              reservoirs and canals to bridges and culverts, we offer end-to-end
              solutions powered by in-house expertise and advanced equipment.
              Our modern fleet—including Hywas, Poclains, a mobile tower crane,
              and an RMC plant—ensures fast, cost-efficient execution. We also
              run high-capacity mining units with six screening machines
              producing up to 500 TPH.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white border-b border-gray-200 sticky top-0 z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab("services")}
              className={`py-4 px-6 text-lg font-semibold cursor-pointer border-b-2 transition-colors duration-200 ${
                activeTab === "services"
                  ? "border-yellow-500 text-yellow-600"
                  : "border-transparent text-slate-600 hover:text-slate-800"
              }`}
            >
              Our Services
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`py-4 px-6 text-lg font-semibold border-b-2 cursor-pointer transition-colors duration-200 ${
                activeTab === "projects"
                  ? "border-yellow-500 text-yellow-600"
                  : "border-transparent text-slate-600 hover:text-slate-800"
              }`}
            >
              Our Projects
            </button>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {activeTab === "services" && (
            <motion.section
              key="services"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Our Services
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Comprehensive engineering and construction services delivered
                  with excellence and precision
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === "projects" && (
            <motion.section
              key="projects"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Our Projects
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Showcasing our commitment to quality and innovation across
                  Maharashtra
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  {selectedImage.description}
                </p>

                {/* {selectedImage.type === "service" && (
                  <div className="flex items-center">
                    <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                      {selectedImage.category}
                    </span>
                  </div>
                )}

                {selectedImage.type === "project" && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-slate-500 text-sm">Location</p>
                      <p className="font-semibold text-slate-800">
                        {selectedImage.location}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Year</p>
                      <p className="font-semibold text-slate-800">
                        {selectedImage.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">Status</p>
                      <span
                        className={`font-semibold ${
                          selectedImage.status === "Completed"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {selectedImage.status}
                      </span>
                    </div>
                  </div>
                )} */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VirenGallery;
