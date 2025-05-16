"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MarineOperations = () => {
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
    <section className="py-10 md:py-16 bg-white mt-6 md:mt-10 mx-4 md:ml-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Content Column */}
          <div className="flex flex-col justify-center">
            <div>
              <div className="inline-block w-auto bg-[#FF5722] text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-4 md:mb-6 text-xs md:text-sm">
                ABOUT COMPANY
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight text-black">
              Guiding Your Marine Operations with Expertise & Integrity
            </h2>
            
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
              Since 2013, SV Marine Services has been the preferred partner for shipbuilders, operators, 
              and offshore enterprises—blending technical mastery with actionable solutions.
            </p>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-center">
                <div className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 flex-shrink-0">
                  <Image 
                    src="/images/Icon (1).png"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-medium text-sm md:text-base text-black">Expert Team – Master Mariners & Naval Architects</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 flex-shrink-0">
                  <Image 
                    src="/images/Icon (1).png"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-medium text-sm md:text-base text-black">End-to-End Solutions –Design to salvage, seamless execution</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 flex-shrink-0">
                  <Image 
                    src="/images/Icon (1).png"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-medium text-sm md:text-base text-black">Compliance-First Approach - SOLAS, IMCA & maritime regulations</span>
              </div>
            </div>
            
            <div>
              <button
                onClick={() => scrollToSection('about')}
                className="relative overflow-hidden border-2 border-black rounded-full py-2 md:py-3 px-5 md:px-6 font-medium flex items-center group cursor-pointer transition-all text-sm md:text-base"
              >
                <span className="relative z-10 text-black transition-colors duration-300 group-hover:text-black">Discover More</span>
                <span className="absolute inset-0 bg-transparent transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 -z-10 group-hover:bg-[#FF5722]"></span>
                <span className="bg-black rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center ml-3 md:ml-4 relative z-10 transition-all duration-300 group-hover:bg-[#FF5722]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          
          {/* Right Images Column */}
          <div className="relative mt-6 md:mt-0">
            {/* Main image with hover zoom animation */}
            <div className="mb-4 overflow-hidden rounded-lg group">
              <Image 
                src="/images/logo/marineoperation-right-img.png" 
                alt="Marine operations image"
                width={550}
                height={300}
                className="w-full h-auto object-cover rounded-lg transition-transform duration-1000 ease-in-out group-hover:scale-110 transform-gpu"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarineOperations; 