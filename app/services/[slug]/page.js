import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle, Monitor, TrendingUp, Search, PenTool } from 'lucide-react';
import { servicesData } from '@/data/services';
import CTASection from '@/components/home/CTASection';

// Generate static params for SSG
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | Pure Tech Zone`,
    description: service.shortDesc,
  };
}

const IconComponent = ({ iconName, className }) => {
  const icons = {
    Monitor: <Monitor className={className} />,
    TrendingUp: <TrendingUp className={className} />,
    Search: <Search className={className} />,
    PenTool: <PenTool className={className} />,
  };
  return icons[iconName] || <Monitor className={className} />;
};

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gray-50 dark:bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container relative z-10 mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary mb-8 transition-colors">
            &larr; Back to all Services
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start max-w-5xl mx-auto">
            <div className="w-24 h-24 bg-white dark:bg-[#1a1a1a] rounded-3xl flex items-center justify-center shrink-0 shadow-lg border border-gray-100 dark:border-gray-800">
              <IconComponent iconName={service.icon} className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 font-heading">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-5xl text-lg">
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 font-heading">Service Overview</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 font-heading">Key Features</h3>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start p-4 bg-gray-50 dark:bg-[#111111] rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-colors">
                    <CheckCircle className="w-6 h-6 text-primary mr-4 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 font-heading">Business Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/10 dark:border-primary/20">
                    <span className="flex items-center justify-center w-8 h-8 bg-white dark:bg-[#1a1a1a] text-primary font-bold rounded-full mr-4 shrink-0 shadow-sm">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium py-1">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link href="/contact" className="inline-flex items-center px-10 py-5 bg-foreground text-background font-bold text-lg rounded-full hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-lg group">
              {service.ctaText}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
