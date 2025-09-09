import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "John Christopher",
      image:
        "https://expert-themes.com/html/emarat/images/resource/author-1.jpg",
      rating: 5,
      text: "Makin their way the only way they know how that's just a little bit more than the law will allow these happy days are you. leads a rag tag fugitive fleet on a lonely",
    },
    {
      id: 2,
      name: "Stuakrt Mackey",
      image:
        "https://expert-themes.com/html/emarat/images/resource/author-2.jpg",
      rating: 5,
      text: "Makin their way the only way they know how that's just a little bit more than the law will allow these happy days are you. leads a rag tag fugitive fleet on a lonely",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Outstanding service and professionalism. They exceeded all expectations and delivered results beyond what we imagined possible for our business.",
    },
    {
      id: 4,
      name: "Michael Davis",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Incredible attention to detail and customer service. Working with this team has been one of the best decisions we've made for our company.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 2)) %
        Math.ceil(testimonials.length / 2)
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23654321" width="1200" height="800"/><g fill="%23543a1a" opacity="0.3"><path d="M0 0h50v800H0z"/><path d="M100 0h50v800h-50z"/><path d="M200 0h50v800h-50z"/><path d="M300 0h50v800h-50z"/><path d="M400 0h50v800h-50z"/><path d="M500 0h50v800h-50z"/><path d="M600 0h50v800h-50z"/><path d="M700 0h50v800h-50z"/><path d="M800 0h50v800h-50z"/><path d="M900 0h50v800h-50z"/><path d="M1000 0h50v800h-50z"/><path d="M1100 0h50v800h-50z"/></g></svg>')`,
      }}
      role="region"
      aria-label="Customer Testimonials"
    >
      {/* Yellow accent element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-bl-full opacity-80"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            {/* <div className="w-6 h-6 bg-yellow-500 mr-4"></div> */}
            <span className="text-yellow-500 font-medium text-lg tracking-wide">
              Testimonial
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            What Clients Says
          </h1>
        </div>

        {/* Testimonials Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-8 shadow-2xl transform transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Profile Section */}
                <div className="flex items-center mb-6">
                  <div className="relative mr-4">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name}'s profile picture`}
                      className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect fill="%23e5e7eb" width="80" height="80"/><circle fill="%239ca3af" cx="40" cy="32" r="12"/><path fill="%239ca3af" d="M40 48c-12 0-22 8-22 18v14h44V66c0-10-10-18-22-18z"/></svg>`;
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg mb-1">
                      {testimonial.name}
                    </h3>
                    <div
                      className="flex items-center"
                      aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
                    >
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-600 leading-relaxed text-base italic">
                  "{testimonial.text}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              onClick={prevSlide}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-black p-3 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20"
              aria-label="Previous testimonials"
              disabled={testimonials.length <= 2}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-black p-3 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20"
              aria-label="Next testimonials"
              disabled={testimonials.length <= 2}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from(
              { length: Math.ceil(testimonials.length / 2) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-yellow-500"
                      : "bg-white bg-opacity-40 hover:bg-opacity-60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500 rounded-tr-full opacity-60"></div>
    </section>
  );
};

export default TestimonialSection;
