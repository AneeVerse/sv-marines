"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Offset for header height
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };
  
  return (
    <header className={`w-full fixed top-0 left-0 z-50 py-4 md:py-6 transition-all duration-300 ${scrolled ? 'bg-black/50 shadow-lg' : 'bg-black/50 shadow-lg'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Desktop Nav - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white hover:text-gray-200 cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-gray-200 cursor-pointer"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white hover:text-gray-200 cursor-pointer"
          >
            Service
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-gray-200 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Hamburger Button - Visible on mobile */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {!mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>

        {/* Mobile Menu - Visible when mobileMenuOpen is true */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/90 py-4 md:hidden">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white hover:text-gray-200 cursor-pointer py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-gray-200 cursor-pointer py-2"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-gray-200 cursor-pointer py-2"
              >
                Service
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-gray-200 cursor-pointer py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}

        {/* Right Contact Button */}
        <div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#FF5722] text-white rounded-md py-2 px-4 md:px-6 text-sm md:text-base font-medium uppercase cursor-pointer"
          >
            Contact Now
          </button>
        </div>
      </div>
    </header>
  );
} 