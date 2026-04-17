import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹4,999",
      desc: "Perfect for small businesses and personal portfolios.",
      features: [
        "Up to 5 Pages Website",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month Free Support",
        "Delivery in 5 Days"
      ],
      isPopular: false,
      btnClass: "bg-white dark:bg-[#1a1a1a] text-foreground border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary",
    },
    {
      name: "Standard",
      price: "₹9,999",
      desc: "Ideal for growing businesses needing dynamic features.",
      features: [
        "Up to 10 Pages Website",
        "Premium UI/UX Design",
        "Advanced SEO & Speed Optimization",
        "CMS / Blog Integration",
        "Social Media Integration",
        "3 Months Free Support",
        "Delivery in 10 Days"
      ],
      isPopular: true,
      btnClass: "bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-primary/30",
    },
    {
      name: "Premium",
      price: "₹19,999",
      desc: "Comprehensive solution for E-commerce & corporate sites.",
      features: [
        "Unlimited Pages / E-commerce",
        "Payment Gateway Integration",
        "Custom Next.js & React App",
        "Advanced Security & Database",
        "Schema Markup & Local SEO",
        "6 Months Free Support",
        "Delivery in 15-20 Days"
      ],
      isPopular: false,
      btnClass: "bg-white dark:bg-[#1a1a1a] text-foreground border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary",
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0c121e]" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-secondary dark:text-primary tracking-wider font-bold text-sm uppercase mb-3">Pricing Plans</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
            Affordable Packages for Every Need
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Transparent pricing with no hidden fees. Choose the plan that best fits your business goals and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-[#111111] rounded-3xl p-8 flex flex-col h-full border ${plan.isPopular
                  ? 'border-primary ring-2 ring-primary/20 shadow-2xl transform md:-translate-y-4'
                  : 'border-gray-100 dark:border-gray-800 shadow-lg'
                }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Most Popular
                </div>
              )}

              <div className="mb-8 text-center">
                <h4 className="text-xl font-bold text-foreground mb-2 font-heading">{plan.name}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 h-10">{plan.desc}</p>
                <div className="flex justify-center items-baseline">
                  <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-gray-500 ml-1">/project</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full py-3 px-6 rounded-xl font-bold text-center transition-all duration-300 ${plan.btnClass}`}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
