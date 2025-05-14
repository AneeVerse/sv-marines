import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-55 z-0"></div>
      
      {/* This div will be replaced with a background image */}
      <div className="absolute inset-0 bg-gray-500 z-[-1]"></div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className="bg-primary text-white px-3 py-1 rounded-full inline-block mb-8">
            <span className="text-sm font-medium uppercase">SV Marine Services</span>
          </div>
          
          <h1 className="text-6xl font-semibold text-white leading-tight mb-6">
            Your End-to-End Marine Solutions Partner Since 2013
          </h1>
          
          <p className="text-gray-300 mb-8 text-lg">
            Navi Mumbai's trusted marine consultancy offering project management, surveying, towing, and salvage services—combining innovation with 10+ years of hands-on expertise.
          </p>
          
          <div className="flex items-center">
            <Link 
              href="/services" 
              className="bg-white text-black rounded-full py-3 px-8 font-medium flex items-center"
            >
              Discover
              <span className="bg-primary rounded-full w-10 h-10 flex items-center justify-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements - just placeholders */}
      <div className="absolute right-0 top-1/4 w-3 h-3 bg-white rounded-full"></div>
      <div className="absolute right-0 top-1/3 w-2 h-2 bg-white opacity-20 rounded-full"></div>
      <div className="absolute right-0 top-1/2 w-2 h-2 bg-white opacity-20 rounded-full"></div>
    </section>
  );
};

export default Hero; 