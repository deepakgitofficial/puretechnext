import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    'Client-Focused Approach',
    'Agile Methodology',
    'Experienced Team',
    'Future-Proof Technology',
    '24/7 Support & Maintenance'
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0c121e]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Content Side */}
          <div>
            <h2 className="text-secondary dark:text-primary tracking-wider font-bold text-sm uppercase mb-3">Why Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
              Why Choose Pure Tech Zone?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              At <strong>Pure Tech Zone</strong>, you don't just get a developer — you get a dedicated partner focused on your digital success. Every project is meticulously handled to ensure quality, transparency, and reliable results that directly impact your bottom line.
            </p>

            <div className="space-y-4 mb-10">
              {points.map((item, i) => (
                <div key={i} className="flex items-center space-x-3 bg-white dark:bg-[#1a1a1a] p-3 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center font-bold text-primary hover:text-primary-dark transition-colors">
              More About Us
            </Link>
          </div>

          {/* Stats Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent transform skew-y-6 rounded-3xl opacity-80" />
            <div className="relative glass dark:glass-dark p-8 md:p-12 rounded-3xl">
              <div className="grid grid-cols-2 gap-6">

                <div className="bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
                  <h4 className="text-4xl font-black text-primary mb-2">50+</h4>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">Projects Completed</p>
                </div>

                <div className="bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
                  <h4 className="text-4xl font-black text-accent mb-2">98%</h4>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">Client Satisfaction</p>
                </div>

                <div className="bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
                  <h4 className="text-4xl font-black text-pink-600 mb-2">5+</h4>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">Years Experience</p>
                </div>

                <div className="bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
                  <h4 className="text-4xl font-black text-blue-500 mb-2">24/7</h4>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">Support</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
