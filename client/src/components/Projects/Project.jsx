import React, { useState, useEffect } from "react";
import { ChevronRight, X } from "lucide-react";
import StoneImage from "../../assets/stoneimage.webp";
import BiominingImage from "../../assets/projects/Bioming.webp";
import BridgeImage from "../../assets/projects/BridgeImage.webp";
import irrigationProject from "../../assets/projects/irrigationproject.webp";
import MjpProject from "../../assets/projects/MjpProject.webp";
import privateProject from "../../assets/projects/privateProject.webp";
import pwdImage from "../../assets/projects/pwdimage.webp";
import ScreeningOperations from "../../assets/projects/ScreeningOperations.webp";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Stone Crusher & Mining",
      category: "ARCHITECTURE",
      image: StoneImage,
      description:
        "Beyond our expertise in construction, Viren Engineer and Contractors also operates a stone crusher which has been in operation since 2016. Each season, we develop the crusher to meet evolving project requirements. With a focus on fast expansion and development, we manage complete mine-to-crusher operations, delivering properly sized boulders and high-quality black stone.",
    },
    {
      id: 2,
      title: "Screening Operations & Environmental",
      category: "CONSTRUCTION",
      image: ScreeningOperations,
      description:
        "Our advanced fleet includes two Kleemann EVO 952, two Extec S5, one Sandvik S6 QA440, and the latest Kleemann EVO 952 Hybrid with dual diesel-electric power. These machines ensure efficient, flexible, and environmentally friendly material processing.",
    },
    {
      id: 3,
      title: "Biomining Project",
      category: "RENOVATION",
      image: BiominingImage,
      description:
        "Since 2021, we’ve grown from one Poclain and screen machine at Jalgaon dump yard to operating six screen machines and four Poclains. With nearly four years of biomining experience, we deliver efficient waste management solutions for urban local bodies and municipalities.",
    },
    {
      id: 4,
      title: "Rental model projects",
      category: "ARCHITECTURE",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494768529/EZ/SO/KF/109289942/tata-zaxis-120-500x500.jpeg",
      description:
        'Established in the year 2020 in Pune,Maharashtra, India, We “Viren Engineers And Contractors" engaged as the foremost Service Provider of Crane and Screen Machine Rental Services.',
    },
    {
      id: 5,
      title: "Irrigation Projects",
      category: "CONSTRUCTION",
      image: irrigationProject,
      description:
        "We have delivered comprehensive irrigation projects, including Kolhapur Type weirs, canals, and wells,   vital for agricultural development and water management. One of our standout projects is the construction of Kolhapur Type weir on the Gunjavani river at Tambad – Kolavdi.",
    },
    {
      id: 6,
      title: "PWD Projects",
      category: "RENOVATION",
      image: pwdImage,
      description:
        "The construction of arch bridges and small bridge construction demonstrates our ability to work in challenging environments, ensuring safe and durable infrastructures.",
    },
    {
      id: 7,
      title: "Bridge Construction",
      category: "RENOVATION",
      image: BridgeImage,
      description:
        "Bridge construction involves the planning, design, and building of structures that provide safe and reliable passage over obstacles such as rivers, roads, or valleys. It requires specialized engineering to ensure durability, stability, and compliance with safety standards while accommodating traffic loads and environmental conditions.",
    },
    {
      id: 8,
      title: "MJP Projects",
      category: "RENOVATION",
      image: MjpProject,
      description:
        "We specialize in the construction of Elevated Surface Reservoirs (ESRs) under Maharashtra Jeevan Pradhikaran (MJP) projects. These reservoirs are essential for efficient water storage and distribution in urban and rural areas. Built with precision and adherence to MJP standards, our ESR structures ensure durability, optimal capacity, and long-term performance for sustainable water supply systems.",
    },
    {
      id: 9,
      title: "Private Completed Projects",
      category: "RENOVATION",
      image: privateProject,
      description:
        "We have successfully executed multiple private projects involving the construction of factory sheds tailored to client-specific industrial needs. These structures are designed for durability, functionality, and efficient workflow, using high-quality materials and modern construction techniques to ensure long-lasting performance and structural integrity.",
    },
  ];

  const categories = [
    "ALL",
    "RENOVATION",
    "ISOLATION",
    "CONSTRUCTION",
    "ARCHITECTURE",
  ];

  const handleProjectClick = (project) => {
    if (isMobile) {
      setSelectedProject(selectedProject?.id === project.id ? null : project);
    }
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          {/* <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center mr-6">
            <div className="text-white text-xl">⚡</div>
          </div> */}
          <div>
            <p className="text-yellow-500 text-sm font-medium mb-6">
              Our Projects
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Our Projects
            </h1>
          </div>
        </div>

        {/* Category Navigation */}
        {/* <div className="flex flex-wrap gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-sm font-medium transition-colors duration-200 ${
                category === "ALL"
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  isMobile && selectedProject?.id === project.id
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-all duration-300"></div>

                {/* Hover Content for Desktop */}
                {!isMobile && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => navigate("/projects")}
                      className="flex items-center text-yellow-500 text-sm font-medium hover:text-yellow-400 transition-colors"
                    >
                      See Project <ChevronRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Mobile Title Overlay */}
                {
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-white text-lg font-bold">
                      {project.title}
                    </h3>
                  </div>
                }
              </div>

              {/* Project Details (Mobile) */}
              {isMobile && selectedProject?.id === project.id && (
                <div className="absolute inset-0 bg-gray-800 p-6 flex flex-col justify-between animate-in fade-in duration-300">
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeDetails();
                      }}
                      className="absolute top-4 right-4 text-white hover:text-yellow-500 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    <h3 className="text-white text-xl font-bold mb-4 pr-8">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate("/projects")}
                    className="flex items-center text-yellow-500 text-sm font-medium hover:text-yellow-400 transition-colors self-start"
                  >
                    See Project <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Desktop Hover Details */}
              {!isMobile && (
                <div className="absolute inset-0 bg-gray-800 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate("/projects")}
                    className="flex items-center text-yellow-500 text-sm cursor-pointer font-medium hover:text-yellow-400 transition-colors self-start"
                  >
                    See Project <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-in {
          animation: fade-in 0.3s ease-out;
        }
        }
      `}</style>
    </div>
  );
};

export default ProjectsSection;
