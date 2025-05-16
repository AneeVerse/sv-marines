"use client";

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center hero-wrapper">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/video/hero-bg2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>
      
      {/* Fixed opacity overlay */}
      <div 
        className="absolute inset-0 bg-black/40 z-0 hero-overlay" 
        style={{ 
          pointerEvents: 'none',
          transform: 'translateZ(0)'
        }} 
      />

      {/* Content - Adjusted positioning for mobile */}
      <div className="container mx-auto px-4 relative z-10 pt-10 md:pt-28 hero-content">
        {/* Badge */}
        <div className="inline-block bg-[#FF5722] text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-4 md:mb-6 text-xs md:text-sm">
          SV MARINE SERVICES
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 max-w-2xl">
          Your End-to-End Marine Solutions Partner Since 2013
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-base md:text-lg mb-6 md:mb-10 max-w-2xl">
          Navi Mumbai's trusted marine consultancy offering project management, surveying, 
          towing, and salvage services—combining innovation with 10+ years of hands-on expertise.
        </p>

        {/* CTA Button */}
        <div className="flex flex-wrap">
          <button 
            onClick={() => scrollToSection('stats')}
            className="relative overflow-hidden border-2 border-white rounded-full py-2 md:py-3 px-5 md:px-6 font-medium flex items-center group cursor-pointer"
          >
            <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-black">Who We Are</span>
            <span className="absolute inset-0 bg-transparent transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 -z-10 group-hover:bg-white hover:text-black"></span>
            <span className="bg-[#F55B1F] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center ml-3 md:ml-4 relative z-10 transition-all duration-300 group-hover:bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" 
                className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
