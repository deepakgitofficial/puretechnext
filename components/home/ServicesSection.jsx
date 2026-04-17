import React from 'react';
import Link from 'next/link';
import { Monitor, Smartphone, PenTool, Server, ArrowRight, TrendingUp, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Website Development',
      icon: <Monitor className="h-8 w-8 text-primary" />,
      desc: 'Custom websites built with modern technologies like Next.js, React, and Node.js for maximum speed.',
      path: '/services/web-development'
    },

    {
      title: 'WordPress Development',
      icon: <Search className="h-8 w-8 text-blue-500" />,
      desc: 'Custom WordPress websites built with modern technologies for maximum speed and functionality.',
      path: '/services/wordpress-development'
    },
    // {
    //   title: 'E-commerce Solutions',
    //   icon: <TrendingUp className="h-8 w-8 text-accent" />,
    //   desc: 'High-converting online stores built on Shopify, WooCommerce, or custom Next.js commerce architectures.',
    //   path: '/services/ecommerce-development'
    // },
    {
      title: 'Web Application Development',
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      desc: 'Scalable web applications built with Next.js, React, and Node.js for complex business needs.',
      path: '/services/web-application-development'
    },
    // {
    //   title: 'Small Business Websites',
    //   icon: <TrendingUp className="h-8 w-8 text-accent" />,
    //   desc: 'Affordable, professional websites designed specifically for small businesses to establish their online presence.',
    //   path: '/services/small-business-websites'
    // },

  ];

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-secondary dark:text-primary tracking-wider font-bold text-sm uppercase mb-3">Our Core Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
            Comprehensive Digital Solutions
          </h3>
          <p className="text-gray-100 dark:text-gray-400 text-lg">
            We provide an end-to-end suite of required web services to help your business grow and thrive in the modern age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 dark:bg-[#111111] rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:border-primary/50  transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-white dark:bg-[#1a1a1a] shadow-sm rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground font-heading">
                {service.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                {service.desc}
              </p>
              <Link href={service.path} className="text-primary font-semibold inline-flex items-center group-hover:text-primary-dark">
                Learn More <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
