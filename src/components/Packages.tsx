import React from "react";
import { Check } from "lucide-react";
import { theme } from "../theme";

interface PackageCardProps {
  name: string;
  frequency: string;
  discount: string;
  savings: string;
  color: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  name,
  frequency,
  discount,
  savings,
  color,
}) => {
  return (
    <div
      className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 ${color}`}
    >
      <h3 className={`text-2xl font-bold ${theme.text.primary} mb-2`}>
        {name}
      </h3>
      <p className={`${theme.text.secondary} text-sm mb-4`}>{frequency}</p>
      <div className="mb-6">
        <p className={`text-4xl font-bold ${theme.text.primary} mb-1`}>
          {discount}
        </p>
        <p className={theme.text.secondary}>{savings}</p>
      </div>
      <ul className={`space-y-3 ${theme.text.primary}`}>
        <li className="flex items-center">
          <Check className={`h-5 w-5 ${theme.icon.primary} mr-2`} />
          <span>After initial service fee</span>
        </li>
        <li className="flex items-center">
          <Check className={`h-5 w-5 ${theme.icon.primary} mr-2`} />
          <span>Contract agreement required</span>
        </li>
        <li className="flex items-center">
          <Check className={`h-5 w-5 ${theme.icon.primary} mr-2`} />
          <span>Rates subject to vary</span>
        </li>
      </ul>
    </div>
  );
};

const Packages = () => {
  const packages = [
    {
      name: "Annual",
      frequency: "Once per year",
      discount: "2.5% OFF",
      savings: "Great starting point",
      color: "border-amber-500",
    },
    {
      name: "Bi-Annual",
      frequency: "Twice per year",
      discount: "5% OFF",
      savings: "Recommended plan",
      color: "border-orange-500",
    },
    {
      name: "Quarterly",
      frequency: "4 times per year",
      discount: "10% OFF",
      savings: "Popular choice",
      color: "border-cyan-500",
    },
    {
      name: "Bi-Monthly",
      frequency: "6 times per year",
      discount: "15% OFF",
      savings: "Better value",
      color: "border-blue-500",
    },
    {
      name: "Monthly",
      frequency: "Every month",
      discount: "20% OFF",
      savings: "Best savings",
      color: "border-purple-500",
    },
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold ${theme.text.primary} mb-4`}
          >
            Service Packages
          </h2>
          <p className={`${theme.text.secondary} max-w-3xl mx-auto mb-6`}>
            Save big with our flexible service packages. Discounts apply after
            the initial service fee.
          </p>
          <p className={`${theme.text.muted} text-sm max-w-3xl mx-auto`}>
            <strong>Disclaimer:</strong> Discounts apply after initial service
            fee. Rates subject to vary. All plans require contractual agreement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              name={pkg.name}
              frequency={pkg.frequency}
              discount={pkg.discount}
              savings={pkg.savings}
              color={pkg.color}
            />
          ))}
        </div>

        <div
          className={`mt-12 ${theme.background.light} p-8 rounded-lg border-l-4 ${theme.border.primary}`}
        >
          <h3 className={`text-xl font-semibold ${theme.text.primary} mb-2`}>
            Ready to start saving?
          </h3>
          <p className={`${theme.text.secondary} mb-4`}>
            Call us today for a free quote and to learn more about which package
            is right for your needs.
          </p>
          <a
            href="tel:+19549950455"
            className={`inline-block ${theme.button.primary} font-semibold py-2 px-6 rounded-md transition-colors`}
          >
            Call (954) 995-0455
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;
