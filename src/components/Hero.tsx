import React from "react";
import { Link } from "./Navigation";
import { ArrowRight } from "lucide-react";
import logo from "../assets/logo_png.png";
import { theme } from "../theme";

const Hero = () => {
  return (
    <div
      id="hero"
      className={`relative min-h-screen flex items-center bg-white`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black leading-tight mb-6">
              Crystal Clear Cleaning
            </h1>
            <p className="text-2xl text-gray mb-8 font-bold">
              Professional window, glass, and exterior cleaning services serving
              Palm Beach and Broward County. 10+ years of trusted service with
              same-day estimates available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="#contact"
                className={`${theme.button.primary} font-semibold py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center justify-center`}
              >
                Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="#services"
                className={`${theme.button.outline} font-semibold py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center justify-center`}
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right side - Logo */}
          <div className="flex items-center justify-end">
            <img
              src={logo}
              alt="Southern Cleaning Solutions Logo"
              className="w-full h-auto max-h-[800px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-black text-sm mb-2">Scroll Down</span>
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
