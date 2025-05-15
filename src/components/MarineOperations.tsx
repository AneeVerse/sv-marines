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
            <span className="text-[#FF5722] font-semibold uppercase text-xs md:text-sm mb-2">ABOUT COMPANY</span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
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
                <span className="font-medium text-sm md:text-base">Expert Team – Master Mariners & Naval Architects</span>
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
                <span className="font-medium text-sm md:text-base">End-to-End Solutions –Design to salvage, seamless execution</span>
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
                <span className="font-medium text-sm md:text-base">Compliance-First Approach - SOLAS, IMCA & maritime regulations</span>
              </div>
            </div>
            
            <div>
              <button
                onClick={() => scrollToSection('about')}
                className="bg-[#FF5722] text-white rounded-full py-2 md:py-3 px-4 md:px-6 text-sm md:text-base font-medium inline-flex items-center hover:bg-opacity-90 transition-all cursor-pointer"
              >
                Discover More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
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