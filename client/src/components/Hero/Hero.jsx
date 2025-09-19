import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";
import HeroImage from "../../assets/Hero1.png";
import { useNavigate } from "react-router-dom";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      backgroundImage:
        "https://expert-themes.com/html/emarat/images/main-slider/image-3.jpg",
      title: "WE BUILD",
      subtitle: "YOUR DREAM",
      description:
        "Established in 2020, Viren Engineers and Contractors is a Pune-based construction company specializing in civil and mechanical engineering. We deliver large-scale infrastructure projects across Maharashtra, backed by in-house expertise and a modern fleet of equipment. Our services include construction, equipment rentals, and mining operations.",
      buttons: [
        { text: "ABOUT US", type: "primary", action: "about" },
        { text: "CONTACT", type: "secondary", action: "contact" },
      ],
    },
    {
      id: 2,
      backgroundImage: HeroImage,
      title: "WE ARE THE BEST",
      subtitle: "CONSTRUCTION EXPERTS",
      description:
        "Established in 2020, Viren Engineers and Contractors is a Pune-based construction company specializing in civil and mechanical engineering. We deliver large-scale infrastructure projects across Maharashtra, backed by in-house expertise and a modern fleet of equipment. Our services include construction, equipment rentals, and mining operations.",
      buttons: [
        { text: "ABOUT US", type: "primary", action: "about" },
        { text: "CONTACT", type: "secondary", action: "contact" },
      ],
    },
    // {
    //   id: 3,
    //   backgroundImage:
    //     "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    //   title: "BUILDING THE",
    //   subtitle: "FUTURE TODAY",
    //   description:
    //     "we're an elite squad of alpha geeks, creative storytellers and business minds. Together, we mix art and science to turn brands into favorites",
    //   buttons: [
    //     { text: "OUR WORK", type: "primary" },
    //     { text: "CONTACT", type: "secondary" },
    //   ],
    // },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleButtonClick = (action) => {
    if (action === "about") {
      navigate("/about");
    } else if (action === "contact") {
      window.location.href = "tel:+918888822150";
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Images with Animation */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          initial="enter"
          animate="center"
          exit="exit"
          variants={slideVariants}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-black"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slides[currentSlide].backgroundImage})`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Settings Icon */}
      {/* <div className="absolute top-6 left-6 z-20">
        <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center">
          <Settings className="w-6 h-6 text-white" />
        </div>
      </div> */}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8 w-full">
          <div
            className={`w-full flex 
        ${currentSlide === 0 ? "justify-end" : ""} 
        ${currentSlide === 1 ? "justify-start" : ""} 
        ${currentSlide === 2 ? "justify-center" : ""}`}
          >
            <div className="w-full lg:w-3/5 xl:w-1/2">
              <AnimatePresence mode="sync">
                <motion.div
                  key={`content-${currentSlide}`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={textVariants}
                  className={`
              text-white 
              ${currentSlide === 0 ? "text-right" : ""} 
              ${currentSlide === 1 ? "text-left" : ""} 
              ${currentSlide === 2 ? "text-center" : ""}
            `}
                >
                  {/* Title */}
                  <motion.h2
                    variants={itemVariants}
                    className="text-xl md:text-2xl lg:text-3xl font-normal mb-2 tracking-wide"
                  >
                    {slides[currentSlide].title}
                  </motion.h2>

                  {/* Subtitle */}
                  <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
                  >
                    <span className="text-yellow-500">
                      {slides[currentSlide].subtitle.split(" ")[0]}
                    </span>{" "}
                    <span className="text-white">
                      {slides[currentSlide].subtitle
                        .split(" ")
                        .slice(1)
                        .join(" ")}
                    </span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed opacity-90"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    variants={itemVariants}
                    className={`flex flex-col sm:flex-row gap-4 
                ${currentSlide === 0 ? "justify-end" : ""} 
                ${currentSlide === 1 ? "justify-start" : ""} 
                ${currentSlide === 2 ? "justify-center" : ""}`}
                  >
                    {slides[currentSlide].buttons.map((button, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-4 text-sm font-bold tracking-wider cursor-pointer transition-all duration-300 ${
                          button.type === "primary"
                            ? "bg-yellow-500 text-black hover:bg-yellow-400 hover:shadow-lg"
                            : "border-2 border-white text-white hover:bg-white hover:text-black"
                        }`}
                        onClick={() => handleButtonClick(button.action)}
                      >
                        {button.text}
                      </motion.button>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-black opacity-30 hover:opacity-50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-black opacity-30 hover:opacity-50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-yellow-500 shadow-lg"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
