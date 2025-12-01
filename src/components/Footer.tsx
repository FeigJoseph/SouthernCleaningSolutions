import React from "react";
import { Link } from "./Navigation";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { theme } from "../theme";

const TikTokIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${theme.background.primary} ${theme.text.white} pt-16 pb-8`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Southern Cleaning Solutions
            </h3>
            <p className="mb-4 text-blue-100">
              Professional window, glass, and exterior cleaning services serving
              Palm Beach and Broward County for over 10 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-cyan-300 transition-colors"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-cyan-300 transition-colors"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-cyan-300 transition-colors"
                title="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-cyan-400" />
                <span className="text-blue-100">
                  Palm Beach & Broward County, Florida
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-cyan-400" />
                <a
                  href="tel:+19549950455"
                  className="text-blue-100 hover:text-cyan-300 transition-colors"
                >
                  (954) 995-0455
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-cyan-400" />
                <a
                  href="mailto:southerncleaningsolutions.fl@gmail.com"
                  className="text-blue-100 hover:text-cyan-300 transition-colors"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#hero"
                  className="text-blue-100 hover:text-cyan-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#services"
                  className="text-blue-100 hover:text-cyan-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="#packages"
                  className="text-blue-100 hover:text-cyan-300 transition-colors"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  to="#about"
                  className="text-blue-100 hover:text-cyan-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#contact"
                  className="text-blue-100 hover:text-cyan-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Estimates */}
          <div>
            <h3 className="text-xl font-bold mb-4">Free Estimates</h3>
            <p className="text-blue-100 mb-4">
              Same-day estimates available for all your cleaning needs.
            </p>
            <a
              href="https://www.google.com/maps/place/southern+cleaning+solutions+fl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md transition-colors text-sm"
            >
              Leave a Review
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-blue-200 mb-4 md:mb-0">
              &copy; {currentYear} Southern Cleaning Solutions. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-blue-200 hover:text-cyan-300 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-cyan-300 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
