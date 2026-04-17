"use client";

import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Verma",
      role: "CEO, Alpha Tech",
      content: "Pure Tech Zone completely transformed our online presence. The Next.js website they built is incredibly fast and our bounce rate dropped by 40%. Highly recommended in Baghpat!",
      rating: 5,
      avatarColor: "bg-blue-500"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Founder, Seven Florist",
      content: "Our E-commerce sales doubled within two months of launching the new website. The team at Pure Tech Zone understood our requirements perfectly and delivered an outstanding design.",
      rating: 5,
      avatarColor: "bg-pink-500"
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Managing Director, One Solutions",
      content: "Deepak and his team are phenomenal. They don't just write code; they provide business solutions. The SEO optimization placed us on the first page of Google locally.",
      rating: 5,
      avatarColor: "bg-purple-500"
    },
    {
      id: 4,
      name: "Simran Kaur",
      role: "Owner, Holiday Paradise",
      content: "Professional, responsive, and incredibly talented. They redesigned our outdated travel website into a modern platform that our customers love using to book packages.",
      rating: 4,
      avatarColor: "bg-emerald-500"
    }
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-secondary dark:text-primary tracking-wider font-bold text-sm uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
            What Our Clients Say
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Don't just take our word for it. Read how we've helped businesses in Baghpat and beyond achieve their digital goals.
          </p>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="-mx-4 pb-12"
          itemClass="px-4"
          arrows={false}
          showDots={true}
          dotListClass="custom-dot-list-style"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 dark:bg-[#111111] p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-lg h-full mx-2 flex flex-col relative">
              
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 dark:text-white/5" />
              
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill={i < testimonial.rating ? "currentColor" : "none"} className={`w-5 h-5 ${i >= testimonial.rating ? 'text-gray-300 dark:text-gray-700' : ''}`} />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 italic flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className={`w-14 h-14 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground font-heading">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>

            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
};

export default TestimonialsSection;
