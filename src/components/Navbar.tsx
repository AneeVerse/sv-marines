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
  
  return (
    <header className={`w-full fixed top-0 left-0 z-50 py-6 transition-all duration-300 ${scrolled ? 'bg-black/50 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Nav */}
        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/about-us" className="text-white hover:text-gray-200">
            About Us
          </Link>
          <Link href="/service" className="text-white hover:text-gray-200">
            Service
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </nav>

        {/* Right Contact Button */}
        <div>
          <Link 
            href="/contact" 
            className="bg-[#FF5722] text-white rounded-md py-2 px-6 font-medium uppercase"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </header>
  );
} 