import React from "react";
import HeroCarousel from "../components/Hero/Hero.jsx";
import AboutSection from "../components/About/AboutSection.jsx";
import ServicesSection from "../components/Services/ServiceSection.jsx";
import WhyChooseUs from "../components/WhyUs/WhyUsSection.jsx";
import ProjectsSection from "../components/Projects/Project.jsx";
import TestimonialSection from "../components/Testimonials/Testimonial";

function HomePage() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsSection />
      <TestimonialSection />
    </>
  );
}

export default HomePage;
