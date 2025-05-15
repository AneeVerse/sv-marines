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
            className="flex items-center relative h-[45px] md:h-[55px] pl-6 md:pl-8 pr-[50px] md:pr-[60px] bg-[#F9F9F9] rounded-[30px] transition-all cursor-pointer"
          >
            <span className="font-dm-sans font-medium text-[14px] md:text-[15px] leading-[30px] text-black capitalize">Who We Are</span>
            <div className="absolute w-[35px] h-[35px] md:w-[45px] md:h-[45px] right-[5px] top-[5px] bg-[#F55B1F] rounded-full flex items-center justify-center">
              <svg width="12" height="12" className="md:w-[14px] md:h-[14px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L13 7M13 7L7 13M13 7H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
