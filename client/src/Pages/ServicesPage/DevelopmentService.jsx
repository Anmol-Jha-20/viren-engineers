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
} from "lucide-react";
import HeroImage from "../../assets/Hero1.png";

const ServicePage = () => {
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
      title: "Planning & Surveying",
      description:
        "Detailed project planning, geological surveying, and layout design to ensure efficient mine development.",
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Excavation & Earthwork",
      description:
        "Site clearing, overburden removal, and excavation to establish access to the ore body.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Drilling & Blasting",
      description:
        "Controlled and precise drilling and blasting operations to fragment rock and access mineral deposits.",
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      title: "Ore Extraction Preparation",
      description:
        "Setup for initial ore extraction, including haulage routes, material handling systems, and storage planning.",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Infrastructure Construction",
      description:
        "Building of necessary site infrastructure including access roads, drainage systems, and service platforms.",
    },
  ];

  const advantages = [
    {
      icon: <Star className="w-6 h-6" />,
      text: "Skilled and experienced workforce",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      text: "Reliable, modern equipment",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Strong focus on safety and environmental compliance",
    },
    { icon: <Clock className="w-6 h-6" />, text: "On-time project execution" },
    {
      icon: <DollarSign className="w-6 h-6" />,
      text: "Cost-effective and scalable service options",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Development <span className="text-yellow-400">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Complete range of development services to support your mining and
              infrastructure projects from the ground up
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center items-center gap-6 text-sm lg:text-base text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <span>Founded in 2020</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span>Pune, Maharashtra</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

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
            Development Service
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
              Development Service
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
                  Mine Development Service
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our Mine Development Service is designed to prepare mining
                  sites for full-scale production through systematic planning,
                  excavation, and construction. We bring together technical
                  expertise, reliable machinery, and a skilled workforce to
                  execute all critical stages of mine development.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2"
                >
                  Get Latest Price
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
              <div className="relative">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2025/3/494894723/PC/XM/VD/109289942/mine-development-service-500x500.jpg"
                  alt="Development Service"
                  className="rounded"
                />
                {/* <div className="w-full h-80 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center shadow-inner"> */}
                {/* <div className="text-center text-slate-500"> */}
                {/* <Building2 className="w-16 h-16 mx-auto mb-4" />
                    <p className="font-medium">
                      Mine Development Visualization
                    </p> */}

                {/* </div> */}
                {/* </div> */}
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
              Our comprehensive approach ensures that your mining site is
              production-ready while maintaining the highest safety and
              environmental standards.
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
                Founded in 2020 in Pune, Maharashtra, Viren Engineers And
                Contractors has become a trusted name in the construction and
                mining support industry. While we are widely recognized for our
                Crane Rental Services and Screen Machine Rental Services, our
                expansion into Mine Development Services reflects our commitment
                to offering end-to-end solutions for our clients.
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
                  src="https://5.imimg.com/data5/SELLER/Default/2025/3/494767682/SI/LG/SA/109289942/stone-mining-operations-500x500.jpeg"
                  alt="Company Image"
                  className="absolute inset-0 w-full h-full object-cover rounded"
                />
                {/* <div className="text-center text-white">
                  <Building2 className="w-20 h-20 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-2xl font-bold mb-2">
                    Professional Excellence
                  </h3>
                  <p className="text-gray-300">
                    Trusted mining development solutions
                  </p>
                </div> */}
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
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                Contact Us Today
              </motion.button>
              <span className="text-gray-400">or</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg"
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

export default ServicePage;
