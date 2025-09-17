import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import HeroImage from "../../assets/Hero1.png";
import ServicesSectionTemp from "../../components/Services/ServiceSectionTemp.jsx";

function RentalService() {
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
      id: 1,
      title: "Sandvik S6 Screen Crusher Machine Rental Service",
      description:
        "Sandvik S6 screen machine rental service offers high performance mobile screening solutions for construction and mining projects.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          <rect
            x="2"
            y="2"
            width="20"
            height="16"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      ),
      bgImage:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494890681/OB/GC/KK/109289942/sandvik-s6-screen-crusher-machine-rental-service-500x500.jpg",
    },
    {
      id: 2,
      title: "Hitachi Zaxis 120 Rental Service",
      description:
        "Tata zaxis 120 rental service provides reliable efficient and durable excavators for construction and earth moving projects.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
          <rect x="8" y="14" width="2" height="2" fill="currentColor" />
          <rect x="14" y="14" width="2" height="2" fill="currentColor" />
        </svg>
      ),
      bgImage:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494893354/PB/CS/XN/109289942/hitachi-zaxis-120-rental-service-500x500.jpg",
    },
    {
      id: 3,
      title: "Tata Hitachi Super 210 Rental Service",
      description:
        "Tata hitachi super 210 rental service provides powerful and efficient excavators for construction and mining projects offering durability and high performance for a variety of earthmoving tasks.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
          <rect x="8" y="10" width="2" height="4" fill="white" />
          <rect x="14" y="10" width="2" height="4" fill="white" />
          <rect x="10" y="12" width="4" height="2" fill="white" />
        </svg>
      ),
      bgImage:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494767822/GR/FR/RX/109289942/tata-super-210-500x500.jpg",
    },
    {
      id: 4,
      title: "Tata Hitachi 215 Quarry Rental Service",
      description:
        "Tata hitachi 215 quarry rental service offers powerful and durable excavators designed for heavy duty tasks in quarries providing excellent performance and efficiency for mining and excavation projects.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          <rect
            x="4"
            y="4"
            width="16"
            height="12"
            rx="1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="18" cy="6" r="2" fill="currentColor" />
        </svg>
      ),
      bgImage:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494891334/IS/WD/LP/109289942/tata-hitachi-215-quarry-rental-service-500x500.jpg",
    },
    {
      id: 5,
      title: "Alpha SP 453 Mobile Tower Crane Rental Service",
      description:
        "Alpha SP 453 mobile tower crane rental service provides versatile high lifting capacity cranes for construction and infrastructure projects.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
          <circle cx="20" cy="4" r="2" fill="currentColor" />
        </svg>
      ),
      bgImage:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494767284/HL/QI/PN/109289942/extec-s5-screen-machine-500x500.jpg",
    },
    {
      id: 6,
      title: "Earthmoving Equipment Rental Service",
      description:
        "Earthmoving equipment rental service offers a wide range of heavy machinery like excavators bulldozers and loaders for construction mining and excavation projects providing reliable performance and flexibility.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 16c0-2.2 1.8-4 4-4h1v-2H7c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h3V5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2h3c.6 0 1 .4 1 1v1.5c0 .6-.4 1-1 1h-3v2h1c2.2 0 4 1.8 4 4v1c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-1zm3.5 2c.8 0 1.5-.7 1.5-1.5S8.3 15 7.5 15 6 15.7 6 16.5 6.7 18 7.5 18zm9 0c.8 0 1.5-.7 1.5-1.5S17.3 15 16.5 15s-1.5.7-1.5 1.5.7 1.5 1.5 1.5z" />
          <path d="M15.3 9.3l3-3c.4-.4.4-1 0-1.4l-.2-.2c-.4-.4-1-.4-1.4 0l-3 3 1.6 1.6z" />
        </svg>
      ),
      bgImage:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494881521/LJ/SB/AW/109289942/earthmoving-equipment-rental-service-500x500.jpeg",
    },
    {
      id: 7,
      title: "Schwing Self Loading Concrete mixer Rental Service",
      description:
        "Schwing self loading concrete mixer rental service provides efficient and reliable machines for on site concrete mixing and transportation offering flexibility and high performance for construction projects.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 10a5 5 0 1 1 8 4H8a4.98 4.98 0 0 1 0-4z" />

          <path d="M2 16c0-.6.4-1 1-1h15c.6 0 1 .4 1 1v2H2v-2z" />

          <path d="M19 10l2.5 2.5c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7L20 9l-1 1z" />

          <circle cx="6" cy="19" r="1.5" />
          <circle cx="16" cy="19" r="1.5" />
        </svg>
      ),
      bgImage:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494768675/CV/FD/RT/109289942/schwing-self-loading-concrete-mixer-500x500.jpeg",
    },
    {
      id: 8,
      title: "Kleemann MS 952 Screen Machine Rental Service",
      description:
        "Kleemann ms 952 screen machine rental service provides high quality mobile screening equipment for efficient sorting and separation of materials in construction and mining projects.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="7" width="14" height="2" rx="0.5" />
          <rect x="5" y="10" width="13" height="2" rx="0.5" />
          <rect x="6" y="13" width="12" height="2" rx="0.5" />

          <path d="M18 7l3 5-3 5h-1l3-5-3-5h1z" />

          <circle cx="6" cy="19" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
          <circle cx="18" cy="19" r="1.5" />
        </svg>
      ),
      bgImage:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494768863/CJ/JP/FS/109289942/kleemann-ms-952-screen-machine-500x500.jpg",
    },
    {
      id: 9,
      title: "Poclain Tata 210 Prime Rental Service",
      description:
        "Poclain tata 210 prime rental service offers reliable and efficient excavators for various construction and earth moving tasks providing high performance and durability.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="12" width="6" height="3" rx="0.5" />

          <path d="M10 10h4v2h-4z" />

          <path d="M14 10l3-4c.2-.2.5-.2.7 0l.8.8c.2.2.2.5 0 .7L15.5 11H14v-1z" />

          <path d="M18.2 8.8l1.3 1.3c.4.4.5 1 .2 1.4l-.3.5c-.3.4-.9.5-1.3.2L16 10.5l2.2-1.7z" />

          <rect x="3" y="16" width="18" height="2" rx="1" />
          <circle cx="6" cy="19" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="18" cy="19" r="1" />
        </svg>
      ),
      bgImage:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494767886/GA/RY/VK/109289942/poclain-tata-210-prime-500x500.jpeg",
    },
    {
      id: 10,
      title: "Parking Yard Machine Rental Service",
      description:
        "Parking yard machine rental service offers secure and spacious storage solutions for heavy equipment and machinery ensuring organized and safe parking for construction and industrial vehicles.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="10" width="8" height="4" rx="1" />

          <rect x="6" y="7" width="3" height="3" rx="0.5" />

          <circle cx="14.5" cy="12" r="2" />

          <path d="M3 18h4v1H3v-1zM9 18h4v1H9v-1zM15 18h6v1h-6v-1z" />
        </svg>
      ),
      bgImage:
        "https://5.imimg.com/data5/SELLER/Default/2025/3/494889456/FQ/AP/MS/109289942/parking-yard-machine-rental-service-500x500.jpg",
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
              Rental Service
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
                Rental Service
              </span>
            </nav>
          </div>
        </section>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mt-16">
            <motion.h3
              className="text-yellow-500 text-lg font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Rental Services
            </motion.h3>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Whats Our Offers
            </motion.h2>
            <motion.div
              className="w-16 h-1 bg-yellow-500 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </div>

        <ServicesSectionTemp
          bgImage1={
            "https://5.imimg.com/data5/SELLER/Default/2025/3/494890681/OB/GC/KK/109289942/sandvik-s6-screen-crusher-machine-rental-service-500x500.jpg"
          }
          serviceTitle1={"Sandvik S6 Screen Crusher Machine Rental Service"}
          serviceDescription1={
            "Sandvik S6 screen machine rental service offers high performance mobile screening solutions for construction and mining projects."
          }
          bgImage2={
            "https://5.imimg.com/data5/SELLER/Default/2025/3/494893354/PB/CS/XN/109289942/hitachi-zaxis-120-rental-service-500x500.jpg"
          }
          serviceTitle2={"Hitachi Zaxis 120 Rental Service"}
          serviceDescription2={
            "Tata zaxis 120 rental service provides reliable efficient and durable excavators for construction and earth moving projects."
          }
          bgImage3={
            "https://5.imimg.com/data5/SELLER/Default/2025/3/494767822/GR/FR/RX/109289942/tata-super-210-500x500.jpg"
          }
          serviceTitle3={"Tata Hitachi Super 210 Rental Service"}
          serviceDescription3={
            "Tata hitachi super 210 rental service provides powerful and efficient excavators for construction and mining projects offering durability and high performance for a variety of earthmoving tasks."
          }
          bgImage4={
            "https://5.imimg.com/data5/SELLER/Default/2025/3/494891334/IS/WD/LP/109289942/tata-hitachi-215-quarry-rental-service-500x500.jpg"
          }
          serviceTitle4={"Tata Hitachi 215 Quarry Rental Service"}
          serviceDescription4={
            "Tata hitachi 215 quarry rental service offers powerful and durable excavators designed for heavy duty tasks in quarries providing excellent performance and efficiency for mining and excavation projects."
          }
          bgImage5={
            "https://5.imimg.com/data5/SELLER/Default/2025/3/494767284/HL/QI/PN/109289942/extec-s5-screen-machine-500x500.jpg"
          }
          serviceTitle5={"Alpha SP 453 Mobile Tower Crane Rental Service"}
          serviceDescription5={
            "Alpha SP 453 mobile tower crane rental service provides versatile high lifting capacity cranes for construction and infrastructure projects."
          }
          bgImage6={
            "https://5.imimg.com/data5/SELLER/Default/2025/3/494881521/LJ/SB/AW/109289942/earthmoving-equipment-rental-service-500x500.jpeg"
          }
          serviceTitle6={"Earthmoving Equipment Rental Service"}
          serviceDescription6={
            "Earthmoving equipment rental service offers a wide range of heavy machinery like excavators bulldozers and loaders for construction mining and excavation projects providing reliable performance and flexibility."
          }
          bgImage7={
            "https://5.imimg.com/data5/SELLER/Default/2025/3/494768675/CV/FD/RT/109289942/schwing-self-loading-concrete-mixer-500x500.jpeg"
          }
          serviceTitle7={"Schwing Self Loading Concrete mixer Rental Service"}
          serviceDescription7={
            "Schwing self loading concrete mixer rental service provides efficient and reliable machines for on site concrete mixing and transportation offering flexibility and high performance for construction projects."
          }
          bgImage8={
            "https://5.imimg.com/data5/SELLER/Default/2025/3/494768863/CJ/JP/FS/109289942/kleemann-ms-952-screen-machine-500x500.jpg"
          }
          serviceTitle8={"Kleemann MS 952 Screen Machine Rental Service"}
          serviceDescription8={
            "Kleemann ms 952 screen machine rental service provides high quality mobile screening equipment for efficient sorting and separation of materials in construction and mining projects."
          }
          bgImage9={
            "https://5.imimg.com/data5/SELLER/Default/2025/3/494767886/GA/RY/VK/109289942/poclain-tata-210-prime-500x500.jpeg"
          }
          serviceTitle9={"Poclain Tata 210 Prime Rental Service"}
          serviceDescription9={
            "Poclain tata 210 prime rental service offers reliable and efficient excavators for various construction and earth moving tasks providing high performance and durability."
          }
          bgImage10={
            "https://5.imimg.com/data5/SELLER/Default/2025/3/494889456/FQ/AP/MS/109289942/parking-yard-machine-rental-service-500x500.jpg"
          }
          serviceTitle10={"Parking Yard Machine Rental Service"}
          serviceDescription10={
            "Parking yard machine rental service offers secure and spacious storage solutions for heavy equipment and machinery ensuring organized and safe parking for construction and industrial vehicles."
          }
          bgImage11={
            "https://5.imimg.com/data5/SELLER/Default/2025/8/535216232/EG/AO/IM/109289942/tractor-mounted-crane-500x500.jpeg"
          }
          serviceTitle11={"Tractor Mounted Crane"}
          serviceDescription11={
            "A Tractor Mounted Crane is a versatile piece of lifting equipment that combines the mobility and power of a tractor with the lifting capability of a hydraulic crane. It is widely used in construction, agriculture, material handling, and infrastructure development for lifting and transporting heavy loads in areas where full-sized cranes may not be practical."
          }
          bgImage12={
            "https://5.imimg.com/data5/SELLER/Default/2023/10/350080484/ML/BG/ER/109289942/new-product-500x500.jpeg"
          }
          serviceTitle12={"Mobile Tower Crane"}
          serviceDescription12={
            "A Mobile Tower Crane is a high-performance lifting machine that combines the height and reach advantages of a traditional tower crane with the mobility and fast setup of a mobile crane. Designed for urban construction, precast installation, and high-rise projects, it’s ideal when space is limited but vertical and horizontal reach is essential."
          }
        />

        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background Tools Image */}
          <div className="absolute top-0 left-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1581092795442-7d6920e14c30?w=300&h=200&fit=crop&crop=center"
              alt="Tools"
              className="w-64 h-32 object-cover"
            />
          </div>

          {/* <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
              <motion.h3
                className="text-yellow-500 text-lg font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Rental Services
              </motion.h3>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Whats Our Offers
              </motion.h2>
              <motion.div
                className="w-16 h-1 bg-yellow-500 mx-auto"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-0">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleServiceClick(service.id)}
                  onMouseEnter={() => !isMobile && setActiveService(service.id)}
                  onMouseLeave={() => !isMobile && setActiveService(null)}
                >
                  <div className="relative z-0 h-80 border border-gray-200 rounded-lg overflow-hidden">
                    
                    <AnimatePresence>
                      {(activeService === service.id ||
                        (!isMobile && activeService === service.id)) && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 z-10"
                        >
                          <img
                            src={service.bgImage}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black opacity-50" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    
                    <div
                      className={`relative z-20 h-full flex flex-col items-center justify-center p-6 text-center transition-colors duration-300 ${
                        activeService === service.id
                          ? "text-white"
                          : "bg-white text-gray-900"
                      }`}
                    >
                      <motion.div
                        className="mb-6"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        
                        {service.icon}
                      </motion.div>

                      <motion.h3
                        className="text-xl font-semibold mb-4"
                        animate={{
                          color:
                            activeService === service.id
                              ? "#ffffff"
                              : "#1f2937",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.title}
                      </motion.h3>

                      <motion.p
                        className="text-sm leading-relaxed"
                        animate={{
                          color:
                            activeService === service.id
                              ? "#ffffff"
                              : "#6b7280",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.description}
                      </motion.p>
                    </div>

                    
                    {isMobile && activeService === service.id && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCloseModal();
                        }}
                        className="absolute top-4 right-4 z-30 bg-white opacity-20 backdrop-blur-sm rounded-full p-2 text-black hover:opacity-30 transition-all duration-200"
                      >
                        <X size={20} />
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}
        </section>
      </div>
    </>
  );
}

export default RentalService;
