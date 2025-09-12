import "./App.css";
import AboutSection from "./components/About/AboutSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import HeroCarousel from "./components/Hero/Hero.jsx";
import ProjectsSection from "./components/Projects/Project.jsx";
import ServicesSection from "./components/Services/ServiceSection.jsx";
import TestimonialSection from "./components/Testimonials/Testimonial.jsx";
import WhyChooseUs from "./components/WhyUs/WhyUsSection.jsx";

function App() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}

export default App;
