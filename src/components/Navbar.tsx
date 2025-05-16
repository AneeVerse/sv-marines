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

        {/* Mobile Menu - Sidebar with animation */}
        <div 
          className={`fixed top-0 left-0 h-full w-[280px] bg-[#00112E] z-50 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex flex-col h-full">
            {/* Close button */}
            <div className="p-6 flex justify-start">
              <button 
                className="text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Menu items */}
            <div className="flex flex-col px-6 py-8 space-y-6 flex-grow">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="text-white text-xl font-medium hover:text-gray-200 cursor-pointer py-2 text-left border-b border-white/10 pb-3"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white text-xl font-medium hover:text-gray-200 cursor-pointer py-2 text-left border-b border-white/10 pb-3"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white text-xl font-medium hover:text-gray-200 cursor-pointer py-2 text-left border-b border-white/10 pb-3"
              >
                Service
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white text-xl font-medium hover:text-gray-200 cursor-pointer py-2 text-left border-b border-white/10 pb-3"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        
        {/* Overlay when mobile menu is open */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Right Contact Button - Hidden on mobile */}
        <div className="hidden md:block">
          <button 
            className="bg-[#FF5722] text-white rounded-md py-1.5 px-3 md:py-2 md:px-6 text-xs md:text-base font-medium uppercase cursor-pointer hover:bg-[#FF5722]/80 transition-colors duration-300"
          >
            Contact Now
          </button>
        </div>
      </div>
    </header>
  );
} 