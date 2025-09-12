import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, Building, ThumbsUp } from "lucide-react";
import WhyUsImage from "../../assets/WhyUs.jpeg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Briefcase className="w-6 h-6 text-yellow-500" />,
      title: "Reliable & Well-Maintained Equipment",
      delay: 0.1,
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "Experienced & Skilled Operators",
      delay: 0.2,
    },
    {
      icon: <Building className="w-6 h-6 text-yellow-500" />,
      title: "Timely Deployment and Support",
      delay: 0.3,
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-yellow-500" />,
      title: "Strong Industry Knowledge and Professional Service",
      delay: 0.4,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Image and Gear Icon */}
          <motion.div variants={itemVariants} className="relative">
            {/* Worker Image */}
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={WhyUsImage}
                alt="Professional construction worker with ladder and tools"
                className="w-full h-full object-contain"
              />
              {/* Overlay to match the blue uniform look */}
              {/* <div className="absolute inset-0 bg-blue-600 opacity-10"></div> */}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-yellow-500 font-semibold text-lg tracking-wide"
              >
                What's Reasons
              </motion.p>
              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
              >
                Why Choose Us
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 text-lg leading-relaxed"
              >
                Viren Engineers and Contractors is a dynamic construction
                company with a proven track record of delivering high-quality
                civil and mechanical infrastructure projects across Maharashtra.
                With in-house expertise in building reservoirs, jack wells,
                canals, bridges, and culverts, we provide end-to-end solutions
                tailored for efficiency. Our advanced equipment fleet—including
                Hywa trucks, Poclains, a mobile tower crane, and an RMC batching
                plant—ensures timely, cost-effective execution. We also operate
                high-capacity mining units with six screening machines
                delivering up to 500 tons per hour.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
