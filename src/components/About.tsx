import React from "react";
import { Calendar, Users, Award, MapPin } from "lucide-react";
import logo from "../assets/logo_png.png";
import { theme } from "../theme";

interface StatisticProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const Statistic: React.FC<StatisticProps> = ({ value, label, icon }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <div className={theme.icon.primary}>{icon}</div>
      <span className={`text-3xl font-bold ${theme.text.primary} mb-1`}>
        {value}
      </span>
      <span className={`${theme.text.secondary} text-center`}>{label}</span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className={`text-3xl md:text-4xl font-bold ${theme.text.primary} mb-6`}
            >
              About Southern Cleaning Solutions
            </h2>
            <p className={`${theme.text.secondary} mb-4`}>
              With over 10 years of professional cleaning experience, Southern
              Cleaning Solutions is your trusted partner for window, glass, and
              exterior cleaning across Palm Beach and Broward County, Florida.
            </p>
            <p className={`${theme.text.secondary} mb-4`}>
              We specialize in residential and commercial cleaning services,
              including window and frame cleaning, glass door and railing
              maintenance, hard water stain removal, and gutter cleaning with
              professional re-sealing. Our team is committed to delivering
              exceptional results using only the best tools and products the
              industry has to offer.
            </p>
            <p className={`${theme.text.secondary} mb-8`}>
              We pride ourselves on providing free same-day estimates and
              premium service to every customer. Whether you own a home or
              operate a storefront, we're here to keep your property looking its
              absolute best.
            </p>

            <div className="flex flex-wrap gap-4">
              <span
                className={`${theme.accent.lighter} ${theme.accent.darker} text-sm font-medium px-3 py-1 rounded-full`}
              >
                10+ Years Experience
              </span>
              <span
                className={`${theme.accent.lighter} ${theme.accent.darker} text-sm font-medium px-3 py-1 rounded-full`}
              >
                Free Same-Day Estimates
              </span>
              <span
                className={`${theme.accent.lighter} ${theme.accent.darker} text-sm font-medium px-3 py-1 rounded-full`}
              >
                Premium Tools & Products
              </span>
              <span
                className={`${theme.accent.lighter} ${theme.accent.darker} text-sm font-medium px-3 py-1 rounded-full`}
              >
                Residential & Commercial
              </span>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-full max-w-sm bg-contain bg-center bg-no-repeat shadow-xl">
              <img
                src={logo}
                alt="Professional cleaning service"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Statistic
            value="10+"
            label="Years Experience"
            icon={<Calendar className="h-10 w-10" />}
          />
          <Statistic
            value="2"
            label="Counties Served"
            icon={<MapPin className="h-10 w-10" />}
          />
          <Statistic
            value="100%"
            label="Satisfaction Rate"
            icon={<Award className="h-10 w-10" />}
          />
          <Statistic
            value="Same-Day"
            label="Free Estimates"
            icon={<Users className="h-10 w-10" />}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
