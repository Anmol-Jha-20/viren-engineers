import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Diagonal pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.1) 2px,
            rgba(255,255,255,0.1) 4px
          )`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-500 p-2 rounded-sm mr-3">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-800 rounded-sm relative">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-yellow-500 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-yellow-500 uppercase">
                  Viren
                </h2>
                <p className="text-xs text-gray-400">
                  Engineers And Contractors
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Established in the year 2020 in Pune,Maharashtra, India, We “Viren
              Engineers And Contractors" engaged as the foremost Service
              Provider of Crane and Screen Machine Rental Services.
            </p>
          </div>

          {/* Working Hours Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">
              Working Hours
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    185, Pickton Near Street,
                  </p>
                  <p className="text-gray-300 text-sm">Los Angeles, USA</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@sentiment.com</p>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">support@sentiment.com</p>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">1-800-985-357</p>
              </div>
            </div>
          </div>

          {/* Latest News Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">
              Latest News
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-700 rounded mr-3 flex-shrink-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop"
                    alt="Planning Process"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium mb-1 leading-tight">
                    Planning Process Needs to improve your Business.
                  </h4>
                  <p className="text-gray-400 text-xs">28 Dec, 2023</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-700 rounded mr-3 flex-shrink-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=100&h=100&fit=crop"
                    alt="Project Management"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium mb-1 leading-tight">
                    7 Tips To Move Your Project Move Forward.
                  </h4>
                  <p className="text-gray-400 text-xs">13 Oct, 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Branches Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">
              Our Branches
            </h3>

            <div className="relative">
              {/* World Map Background */}
              <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 300 150" className="w-full h-full">
                    <defs>
                      <pattern
                        id="dots"
                        patternUnits="userSpaceOnUse"
                        width="20"
                        height="20"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="1"
                          fill="currentColor"
                          opacity="0.3"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                  </svg>
                </div>

                {/* Location Markers */}
                <div className="absolute top-8 left-12">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute top-16 left-24">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute top-12 right-20">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-16 left-16">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-12 right-12">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute top-20 left-32">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-20 right-24">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <p className="text-gray-400 text-sm">
                Copyrights 2024. All Rights are Reserved by{" "}
                <span className="text-yellow-500 hover:text-yellow-400 cursor-pointer">
                  expert-themes
                </span>
              </p>
            </div>

            <nav className="flex flex-wrap justify-center lg:justify-end">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 text-sm mx-3 transition-colors"
              >
                Home
              </a>
              <span className="text-gray-600 mx-1">|</span>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 text-sm mx-3 transition-colors"
              >
                About
              </a>
              <span className="text-gray-600 mx-1">|</span>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 text-sm mx-3 transition-colors"
              >
                Services
              </a>
              <span className="text-gray-600 mx-1">|</span>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 text-sm mx-3 transition-colors"
              >
                Gallery
              </a>
              <span className="text-gray-600 mx-1">|</span>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 text-sm mx-3 transition-colors"
              >
                Blogs
              </a>
              <span className="text-gray-600 mx-1">|</span>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 text-sm mx-3 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
