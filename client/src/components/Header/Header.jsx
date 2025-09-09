import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Search,
  Facebook,
  Twitter,
  Instagram,
  Dribbble,
  Clock,
} from "lucide-react";
import Logo from "../../assets/Logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const menuItems = [
    { name: "HOME", href: "/", isActive: true },
    {
      name: "ABOUT US",
      href: "/about",
    },
    {
      name: "SERVICES",
      href: "/services",
      dropdown: [
        { name: "Rental Service", href: "/services/construction" },
        { name: "Tower Crane Rental Services", href: "/services/architecture" },
        { name: "Screening Machinery", href: "/services/interior" },
        { name: "Development Service", href: "/services/management" },
        { name: "Waste Management Services", href: "/services/consulting" },
        { name: "Self Loading Concrete Mixer", href: "/services/renovation" },
        { name: "Work Service", href: "/services/renovation" },
      ],
    },
    // {
    //   name: "PROJECTS",
    //   href: "/projects",
    //   dropdown: [
    //     { name: "Residential", href: "/projects/residential" },
    //     { name: "Commercial", href: "/projects/commercial" },
    //     { name: "Industrial", href: "/projects/industrial" },
    //     { name: "Infrastructure", href: "/projects/infrastructure" },
    //     { name: "Portfolio", href: "/projects/portfolio" },
    //   ],
    // },
    // {
    //   name: "PAGES",
    //   href: "/pages",
    //   dropdown: [
    //     { name: "FAQ", href: "/pages/faq" },
    //     { name: "Testimonials", href: "/pages/testimonials" },
    //     { name: "Gallery", href: "/pages/gallery" },
    //     { name: "Careers", href: "/pages/careers" },
    //     { name: "Privacy Policy", href: "/pages/privacy" },
    //     { name: "Terms & Conditions", href: "/pages/terms" },
    //   ],
    // },
    {
      name: "BLOG",
      href: "/blog",
    },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (index) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="relative z-50 w-full">
      {/* Top Bar */}
      <div className="bg-gray-700 text-white text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-6">
              <span className="text-gray-300">
                Welcome to Viren Engineers And Contractors
              </span>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 font-medium">
                  Open Hours :
                </span>
                <span>09:00 am - 06:00 pm</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
              >
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="relative bg-white shadow-sm">
        {/* Yellow Angular Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-1/2 h-full bg-yellow-500 transform origin-top-left"
            style={{
              clipPath: "polygon(0 0, 80% 0, 60% 100%, 0 100%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gray-800 p-1 rounded-sm flex items-center justify-center">
                {/* <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-yellow-500 mb-1"></div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-4 bg-white"></div>
                    <div className="w-2 h-4 bg-white"></div>
                    <div className="w-2 h-4 bg-white"></div>
                  </div>
                </div> */}
                <img src={Logo} className="w-16 h-16" alt="Logo" />
              </div>
              <div className="ml-3">
                <h1 className="text-2xl lg:text-3xl font-bold uppercase text-gray-800 leading-tight">
                  Viren
                </h1>
                <p className="text-xs lg:text-sm text-gray-600 -mt-1">
                  Engineers And Contractors
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              {menuItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href}
                    className={`text-sm font-semibold flex items-center space-x-1 py-2 transition-all duration-200 ${
                      item.isActive
                        ? "text-yellow-600 hover:text-yellow-700"
                        : "text-gray-700 hover:text-yellow-600"
                    }`}
                  >
                    <span className="tracking-wide">{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-all duration-200 ${
                          activeDropdown === index
                            ? "rotate-180 text-yellow-600"
                            : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === index && (
                    <div
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-2xl border border-gray-100 py-3 z-50 transform opacity-100 scale-100 transition-all duration-200"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <div className="absolute -top-1 left-6 w-3 h-3 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200 border-l-3 border-transparent hover:border-yellow-500"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Search Icon */}
              {/* <button className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 p-2 hover:bg-gray-50 rounded-full">
                <Search className="w-5 h-5" />
              </button> */}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-yellow-600 transition-colors duration-200 p-2 hover:bg-gray-50 rounded-md"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className="border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`flex-1 text-base font-medium py-3 transition-colors duration-200 ${
                      item.isActive
                        ? "text-yellow-600"
                        : "text-gray-700 hover:text-yellow-600"
                    }`}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="p-2 text-gray-500 hover:text-yellow-600 transition-colors duration-200"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeMobileDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    item.dropdown && activeMobileDropdown === index
                      ? "max-h-96 opacity-100 pb-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.dropdown && (
                    <div className="pl-4 space-y-1 bg-gray-50 rounded-lg mt-2 py-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={closeMobileMenu}
                          className="block py-2 px-3 text-sm text-gray-600 hover:text-yellow-600 hover:bg-white rounded transition-all duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Mobile Search */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <button className="flex items-center space-x-3 text-gray-700 hover:text-yellow-600 transition-colors duration-200 py-3 w-full">
                <Search className="w-5 h-5" />
                <span className="font-medium">Search</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
