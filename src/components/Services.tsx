import React from "react";
import {
  Sparkles,
  Wind,
  Droplet,
  Home,
  Building2,
  PhoneCall,
  AlertCircle,
  Star,
} from "lucide-react";
import { theme } from "../theme";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-cyan-500">
      <div className={`${theme.icon.primary} mb-4`}>{icon}</div>
      <h3 className={`text-xl font-semibold mb-2 ${theme.text.primary}`}>
        {title}
      </h3>
      <p className={theme.text.secondary}>{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Window & Frame Cleaning",
      description:
        "Interior and exterior window cleaning including frames and screens for residential and commercial properties.",
      icon: <Sparkles className="h-10 w-10" />,
    },
    {
      title: "Glass Door & Railing Cleaning",
      description:
        "Professional cleaning of exterior and interior glass doors and railings with streak-free finishes.",
      icon: <Wind className="h-10 w-10" />,
    },
    {
      title: "Hard Water Stain Removal",
      description:
        "Expert removal of stubborn hard water stains and mineral deposits from glass surfaces.",
      icon: <Droplet className="h-10 w-10" />,
    },
    {
      title: "Gutter & Downspout Cleaning",
      description:
        "Complete gutter and downspout cleaning with professional re-sealing to prevent future issues.",
      icon: <Home className="h-10 w-10" />,
    },
    {
      title: "Residential Cleaning",
      description:
        "Comprehensive residential cleaning services tailored to keep your home spotless and well-maintained.",
      icon: <Home className="h-10 w-10" />,
    },
    {
      title: "Commercial Cleaning",
      description:
        "Professional commercial cleaning services for storefronts, offices, and business properties.",
      icon: <Building2 className="h-10 w-10" />,
    },
    {
      title: "Free Same-Day Estimates",
      description:
        "Call for a free quote and we'll provide same-day estimates for all your cleaning needs.",
      icon: <PhoneCall className="h-10 w-10" />,
    },
    {
      title: "Premium Products & Tools",
      description:
        "We use only the best tools and products the industry has to offer for superior results.",
      icon: <Star className="h-10 w-10" />,
    },
  ];

  return (
    <section id="services" className={`py-20 ${theme.background.light}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold ${theme.text.primary} mb-4`}
          >
            Our Services
          </h2>
          <p className={`${theme.text.secondary} max-w-3xl mx-auto`}>
            From window cleaning to exterior maintenance, we offer comprehensive
            cleaning services for both residential and commercial properties
            across Palm Beach and Broward County.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
