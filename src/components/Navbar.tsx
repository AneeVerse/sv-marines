"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
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
  };
  
  return (
    <header className={`w-full fixed top-0 left-0 z-50 py-6 transition-all duration-300 ${scrolled ? 'bg-black/50 shadow-lg' : 'bg-black/50 shodow-lg'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Nav */}
        <nav className="flex items-center space-x-8">
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

        {/* Right Contact Button */}
        <div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#FF5722] text-white rounded-md py-2 px-6 font-medium uppercase cursor-pointer"
          >
            Contact Now
          </button>
        </div>
      </div>
    </header>
  );
} 