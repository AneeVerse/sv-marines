import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MarineOperations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content Column */}
          <div className="flex flex-col justify-center">
            <span className="text-[#FF5722] font-semibold uppercase text-sm mb-2">ABOUT COMPANY</span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Guiding Your Marine Operations with Expertise & Integrity
            </h2>
            
            <p className="text-gray-700 mb-8">
              Since 2013, SV Marine Services has been the preferred partner for shipbuilders, operators, 
              and offshore enterprises—blending technical mastery with actionable solutions.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-black mr-4 flex-shrink-0"></div>
                <span className="font-medium">Expert Team – Master Mariners & Naval Architects</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-black mr-4 flex-shrink-0"></div>
                <span className="font-medium">End-to-End Solutions –Design to salvage, seamless execution</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-black mr-4 flex-shrink-0"></div>
                <span className="font-medium">Compliance-First Approach - SOLAS, IMCA & maritime regulations</span>
              </div>
            </div>
            
            <div>
              <Link
                href="/about"
                className="bg-[#FF5722] text-white rounded-full py-3 px-6 font-medium inline-flex items-center hover:bg-opacity-90 transition-all"
              >
                Discover More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Right Images Column */}
          <div className="relative">
            {/* Main image with larger logo */}
            <div className="mb-4">
              <Image 
                src="/images/logo/marineoperation-right-img.png" 
                alt="Marine operations image"
                width={600}
                height={350}
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarineOperations; 