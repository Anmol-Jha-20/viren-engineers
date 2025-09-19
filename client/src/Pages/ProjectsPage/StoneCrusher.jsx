import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import HeroImage from "../../assets/Hero1.png";
import StoneImage from "../../assets/stoneimage.webp";
import BiominingImage from "../../assets/projects/Bioming.webp";
import BridgeImage from "../../assets/projects/BridgeImage.webp";
import irrigationProject from "../../assets/projects/irrigationproject.webp";
import MjpProject from "../../assets/projects/MjpProject.webp";
import privateProject from "../../assets/projects/privateProject.webp";
import pwdImage from "../../assets/projects/pwdimage.webp";
import ScreeningOperations from "../../assets/projects/ScreeningOperations.webp";
import PrivateProjects from "./PrivateProjects.jsx";

const StoneCrusherSection = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mobileDetailView, setMobileDetailView] = useState(null);

  const filters = [
    "ALL",
    "RENOVATION",
    "ISOLATION",
    "CONSTRUCTION",
    "ARCHITECTURE",
  ];

  const projects = [
    {
      id: 1,
      title: "Stone Crusher & Mining",
      category: "ARCHITECTURE",
      image: StoneImage,
      description:
        "Beyond our expertise in construction, Viren Engineer and Contractors also operates a stone crusher which has been in operation since 2016. Each season, we develop the crusher to meet evolving project requirements. With a focus on fast expansion and development, we manage complete mine-to-crusher operations, delivering properly sized boulders and high-quality black stone.",
      details:
        "Beyond our expertise in construction, Viren Engineer and Contractors also operates a stone crusher which has been in operation since 2016. Each season, we develop the crusher to meet evolving project requirements. With a focus on fast expansion and development, we manage complete mine-to-crusher operations, delivering properly sized boulders and high-quality black stone.",
    },
    {
      id: 2,
      title: "Screening Operations & Environmental",
      category: "CONSTRUCTION",
      image: ScreeningOperations,
      description:
        "A modern co-working space with glass facade and contemporary design, providing flexible work environments for creative professionals and startups.",
      details:
        "Our advanced fleet includes two Kleemann EVO 952, two Extec S5, one Sandvik S6 QA440, and the latest Kleemann EVO 952 Hybrid with dual diesel-electric power. These machines ensure efficient, flexible, and environmentally friendly material processing.",
    },
    {
      id: 3,
      title: "Biomining Project",
      category: "RENOVATION",
      image: BiominingImage,
      description:
        "A compact residential project near Wrocław featuring innovative space utilization and modern architectural elements in a traditional neighborhood.",
      details:
        "Since 2021, we’ve grown from one Poclain and screen machine at Jalgaon dump yard to operating six screen machines and four Poclains. With nearly four years of biomining experience, we deliver efficient waste management solutions for urban local bodies and municipalities.",
    },
    {
      id: 4,
      title: "Rental Model Projects",
      category: "ARCHITECTURE",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494768529/EZ/SO/KF/109289942/tata-zaxis-120-500x500.jpeg",
      description:
        "An elegant museum design in Italy dedicated to ocean conservation, featuring flowing architectural forms that mirror the movement of water.",
      details:
        'Established in the year 2020 in Pune,Maharashtra, India, We “Viren Engineers And Contractors" engaged as the foremost Service Provider of Crane and Screen Machine Rental Services.',
    },
    {
      id: 5,
      title: "Irrigation Projects",
      category: "CONSTRUCTION",
      image: irrigationProject,
      description:
        "A luxury villa complex featuring contemporary design elements, premium materials, and integrated landscape architecture.",
      details:
        "We have delivered comprehensive irrigation projects, including Kolhapur Type weirs, canals, and wells,   vital for agricultural development and water management. One of our standout projects is the construction of Kolhapur Type weir on the Gunjavani river at Tambad – Kolavdi.",
    },
    {
      id: 6,
      title: "PWD Projects",
      category: "RENOVATION",
      image: pwdImage,
      description:
        "Complete transformation of an urban loft space, combining industrial heritage with modern living requirements.",
      details:
        "The construction of arch bridges and small bridge construction demonstrates our ability to work in challenging environments, ensuring safe and durable infrastructures.",
    },
    {
      id: 7,
      title: "Bridge Construction",
      category: "RENOVATION",
      image: BridgeImage,
      description:
        "Complete transformation of an urban loft space, combining industrial heritage with modern living requirements.",
      details:
        "Bridge construction involves the planning, design, and building of structures that provide safe and reliable passage over obstacles such as rivers, roads, or valleys. It requires specialized engineering to ensure durability, stability, and compliance with safety standards while accommodating traffic loads and environmental conditions.",
    },
    {
      id: 8,
      title: "MJP Projects",
      category: "RENOVATION",
      image: MjpProject,
      description:
        "Complete transformation of an urban loft space, combining industrial heritage with modern living requirements.",
      details:
        "We specialize in the construction of Elevated Surface Reservoirs (ESRs) under Maharashtra Jeevan Pradhikaran (MJP) projects. These reservoirs are essential for efficient water storage and distribution in urban and rural areas. Built with precision and adherence to MJP standards, our ESR structures ensure durability, optimal capacity, and long-term performance for sustainable water supply systems.",
    },
    // {
    //   id: 9,
    //   title: "Private Completed Projects",
    //   category: "RENOVATION",
    //   image: privateProject,
    //   description:
    //     "Complete transformation of an urban loft space, combining industrial heritage with modern living requirements.",
    //   details:
    //     "We have successfully executed multiple private projects involving the construction of factory sheds tailored to client-specific industrial needs. These structures are designed for durability, functionality, and efficient workflow, using high-quality materials and modern construction techniques to ensure long-lasting performance and structural integrity.",
    // },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleMobileProjectClick = (project) => {
    setMobileDetailView(project);
  };

  const closeMobileDetail = () => {
    setMobileDetailView(null);
  };

  return (
    <section className="bg-gray-50 min-h-screen">
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
            Projects
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
            <span className="text-orange-400 font-medium">PROJECTS</span>
          </nav>
        </div>
      </section>
      <div className="max-w-7xl mx-auto text-center mb-12 pt-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-yellow-500 text-sm font-medium mb-2 tracking-wide">
            Our Best Work
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Latest Projects
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeFilter === filter
                  ? "text-gray-800 border-b-2 border-amber-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div> */}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white"
                style={{ height: "400px" }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => handleMobileProjectClick(project)}
              >
                {/* Project Image */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: hoveredProject === project.id ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Project Title on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <button
                      onClick={() =>
                        (window.location.href = "tel:+918888822150")
                      }
                      className="text-amber-400 text-sm cursor-pointer font-medium hover:text-amber-300 transition-colors duration-200 flex items-center gap-1"
                    >
                      Contact Us
                      <span>→</span>
                    </button>
                  </div>
                </motion.div>

                {/* Project Details (Desktop Hover) */}
                <motion.div
                  className="absolute inset-0 bg-gray-100 p-6 flex-col justify-center hidden md:flex lg:flex xl:flex"
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    pointerEvents:
                      hoveredProject === project.id ? "auto" : "none",
                  }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {project.details}
                  </p>
                  <button
                    onClick={() => (window.location.href = "tel:+918888822150")}
                    className="text-amber-500 text-sm font-medium cursor-pointer hover:text-amber-600 transition-colors duration-200 flex items-center gap-1 self-start"
                  >
                    Contact Us
                    <span>→</span>
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Mobile Detail Modal */}
      <AnimatePresence>
        {mobileDetailView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:hidden"
            onClick={closeMobileDetail}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-lg p-6 max-w-sm w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeMobileDetail}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl font-bold text-gray-800 mb-4 pr-8">
                {mobileDetailView.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {mobileDetailView.details}
              </p>
              <button className="text-amber-500 text-sm font-medium hover:text-amber-600 transition-colors duration-200 flex items-center gap-1">
                Contact Us
                <span>→</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex justify-center space-x-2 mt-12"
      >
        <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
        <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
      </motion.div> */}
      <PrivateProjects />
    </section>
  );
};

export default StoneCrusherSection;
