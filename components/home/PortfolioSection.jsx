"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { projects } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 }
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0c121e]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl text-left mb-6 md:mb-0">
            <h2 className="text-secondary dark:text-primary tracking-wider font-bold text-sm uppercase mb-3">Our Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
              Latest Work We've Done
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore some of our recently completed projects. Each website is built with passion, precision, and performance in mind.
            </p>
          </div>
          <Link href="/portfolio" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors shrink-0">
            View All Projects <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="-mx-4 pb-12"
          itemClass="px-4"
          arrows={true}
        >
          {projects.slice(0, 6).map((project) => (
            <div key={project.id} className="relative group rounded-2xl overflow-hidden shadow-lg h-[400px]">
              
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 mix-blend-multiply group-hover:opacity-80 transition-opacity duration-300`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider mb-3 w-fit">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-2 font-heading">{project.title}</h4>
                <p className="text-gray-200 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-xs text-white/80 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
};

export default PortfolioSection;
