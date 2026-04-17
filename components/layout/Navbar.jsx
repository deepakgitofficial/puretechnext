"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect and mount
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      subLinks: [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'E-commerce', path: '/services/ecommerce-development' },
        { name: 'WordPress Development', path: '/services/wordpress-development' },
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent heading-font">
              {/* Pure Tech Zone */}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.path}
                  className={`flex items-center font-medium transition-colors hover:text-primary ${pathname === link.path ? 'text-primary' : isScrolled ? 'text-foreground' : 'text-foreground'
                    }`}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {link.subLinks && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-[#1a1a1a] shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left overflow-hidden border border-gray-100 dark:border-gray-800">
                    {link.subLinks.map(sub => (
                      <Link
                        key={sub.name}
                        href={sub.path}
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {mounted ? (
                isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>

            {/* CTA Button */}
            {/* <Link href="/contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5">
              Get Quote
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2" aria-label="Toggle Dark Mode">
              {mounted ? (
                isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-foreground focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] shadow-xl border-t border-gray-100 dark:border-gray-800 animate-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${pathname === link.path ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary'
                    }`}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="pl-6 space-y-1 mt-1 border-l-2 border-gray-100 dark:border-gray-800 ml-4">
                    {link.subLinks.map(sub => (
                      <Link
                        key={sub.name}
                        href={sub.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 text-sm rounded-md ${pathname === sub.path ? 'text-primary' : 'text-gray-600 dark:text-gray-400 hover:text-primary'
                          }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* <div className="pt-4 px-3">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium shadow-md">
                Get a Free Quote
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
