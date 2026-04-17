"use client";

import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { ChevronUp } from 'lucide-react';

const FloatingElements = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-center gap-4">
      
      {/* Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`p-3 rounded-full bg-foreground text-background shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918171654421"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce cursor-pointer flex items-center justify-center relative group"
        aria-label="Chat on WhatsApp"
        style={{animationDuration: '3s'}}
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-70" style={{animationDuration: '2s'}}></div>
        <FaWhatsapp className="w-8 h-8 relative z-10" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-bold py-1.5 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Message Us
        </span>
      </a>

    </div>
  );
};

export default FloatingElements;
