import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-55 z-0"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/hero-bg.png"
          alt="Marine background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="container relative z-10 px-4">
        <div className="max-w-2xl">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full inline-block mb-8">
            <span className="text-sm font-medium uppercase">SV Marine Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
            Your End-to-End Marine Solutions Partner Since 2013
          </h1>
          
          <p className="text-gray-300 mb-8 text-lg">
            Navi Mumbai's trusted marine consultancy offering project management, surveying, towing, and salvage services—combining innovation with 10+ years of hands-on expertise.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center"
            >
              Our Services
              <span className="bg-white rounded-full w-10 h-10 flex items-center justify-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 border border-white rounded-full transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-3 h-3 bg-white rounded-full"></div>
      <div className="absolute right-0 top-1/3 w-2 h-2 bg-white opacity-20 rounded-full"></div>
      <div className="absolute right-0 top-1/2 w-2 h-2 bg-white opacity-20 rounded-full"></div>
    </section>
  );
};

export default Hero;
