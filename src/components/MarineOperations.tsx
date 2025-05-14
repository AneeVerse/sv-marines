import React from 'react';
import Link from 'next/link';

const MarineOperations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="relative">
            {/* This div will be replaced with an image */}
            <div className="w-full h-full bg-gray-200 rounded-lg"></div>
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="text-orange-500 font-semibold uppercase text-sm mb-2">About Company</span>
            
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Guiding Your Marine Operations with Expertise & Integrity
            </h2>
            
            <p className="text-gray-600 mb-8">
              Since 2013, SV Marine Services has been the preferred partner for shipbuilders, operators, and offshore enterprises—blending technical mastery with actionable solutions.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-black mr-4 flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-black"></div>
                </div>
                <span className="font-bold">Expert Team – Master Mariners & Naval Architects</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-black mr-4 flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-black"></div>
                </div>
                <span className="font-bold">End-to-End Solutions –Design to salvage, seamless execution</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-black mr-4 flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-black"></div>
                </div>
                <span className="font-bold">Compliance-First Approach - SOLAS, IMCA & maritime regulations</span>
              </div>
            </div>
            
            <div className="inline-flex">
              <Link
                href="/about"
                className="bg-primary text-white rounded-full py-4 px-8 font-medium flex items-center"
              >
                Discover More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarineOperations; 