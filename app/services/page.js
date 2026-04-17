import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  TrendingUp,
  Search,
  PenTool,
  CheckCircle,
} from "lucide-react";
import { servicesData } from "@/data/services";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Our Services | Pure Tech Zone",
  description:
    "Comprehensive web development, e-commerce, SEO, and UI/UX design services offered by Pure Tech Zone in Baghpat.",
};

// Helper function to render correct Lucide icon
const IconComponent = ({ iconName, className }) => {
  const icons = {
    Monitor: <Monitor className={className} />,
    TrendingUp: <TrendingUp className={className} />,
    Search: <Search className={className} />,
    PenTool: <PenTool className={className} />,
  };
  return icons[iconName] || <Monitor className={className} />;
};

export default function ServicesOverviewPage() {
  return (
    <>
      <section className="relative py-15 md:py-20 bg-gray-50 dark:bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 font-heading">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Services
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From custom Next.js websites to enterprise-grade E-Commerce, we
            provide end-to-end digital solutions that scale your business.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {servicesData.map((service, index) => (
              <div
                key={service.slug}
                className="bg-gray-50 dark:bg-[#111111] rounded-3xl p-8 lg:p-12 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <div className="w-16 h-16 bg-white dark:bg-[#1a1a1a] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <IconComponent
                    iconName={service.icon}
                    className="w-8 h-8 text-primary"
                  />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                  {service.shortDesc}
                </p>

                <ul className="space-y-3 mb-10">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center font-bold text-primary hover:text-primary-dark transition-colors group-hover:underline"
                >
                  Explore Service <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
