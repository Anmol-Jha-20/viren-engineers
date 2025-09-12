import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Logo from "../../assets/Logo.jpeg";

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
              <div className="bg-yellow-500 p-1 rounded-sm mr-3">
                {/* <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-800 rounded-sm relative">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-yellow-500 rounded-sm"></div>
                  </div>
                </div> */}
                <img src={Logo} className="w-16 h-16" alt="Logo" />
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
                    Jitendra Image Building 2nd Floor Off. No. 4,
                  </p>
                  <p className="text-gray-300 text-sm">
                    Karve Rd. Erandwane - 04.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">chavanviren14@gmail.com</p>
              </div>

              {/* <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">support@sentiment.com</p>
              </div> */}

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 888 882 2150</p>
              </div>
            </div>
          </div>

          {/* Latest News Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">
              Our Services
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div>
                  <h4 className="text-white text-sm font-medium mb-1 leading-tight">
                    Rental Service
                  </h4>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <h4 className="text-white text-sm font-medium mb-1 leading-tight">
                    Tower Crane Rental Services
                  </h4>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <h4 className="text-white text-sm font-medium mb-1 leading-tight">
                    Screening Machinery
                  </h4>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <h4 className="text-white text-sm font-medium mb-1 leading-tight">
                    Development Service
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Our Branches Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">
              Other Services
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div>
                  <h4 className="text-white text-sm font-medium mb-1 leading-tight">
                    Waste Management Services
                  </h4>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <h4 className="text-white text-sm font-medium mb-1 leading-tight">
                    Self Loading Concrete Mixer
                  </h4>
                </div>
              </div>
              <div className="flex items-start">
                <div>
                  <h4 className="text-white text-sm font-medium mb-1 leading-tight">
                    Work Service
                  </h4>
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
                Copyrights 2025. All Rights are Reserved. &nbsp;
                <span className="text-yellow-500 hover:text-yellow-400 cursor-pointer">
                  Designed by{" "}
                  <a href="https://webvortexsolutions.com/" target="_main">
                    webvortexsolutions
                  </a>
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
