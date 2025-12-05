import React from "react";
import { Link } from "./Navigation";
import { ArrowRight } from "lucide-react";
import logo from "../assets/logo_png.png";
import { theme } from "../theme";

const Hero = () => {
  return (
    <div id="hero" className={`relative min-h-screen flex items-center`}>
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${logo}')`,
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black leading-tight mb-6">
            Crystal Clear Cleaning Excellence
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg
          className="w-6 h-6 text-white"
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
