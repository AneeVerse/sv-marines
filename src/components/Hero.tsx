import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/video/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-28">
        {/* Badge */}
        <div className="inline-block bg-[#FF5722] text-white px-4 py-1.5 rounded-full mb-6 text-sm">
          SV MARINE SERVICES
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl">
          Your End-to-End Marine Solutions Partner Since 2013
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-lg mb-10 max-w-2xl">
          Navi Mumbai's trusted marine consultancy offering project management, surveying, 
          towing, and salvage services—combining innovation with 10+ years of hands-on expertise.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-5">
          <Link 
            href="/about-us"
            className="bg-white text-[#FF5722] rounded-full px-8 py-3.5 font-medium hover:bg-opacity-90 transition-all flex items-center"
          >
            Who We Are
          </Link>
          <Link 
            href="/contact"
            className="border-2 border-white text-white rounded-full px-8 py-3.5 font-medium hover:bg-white hover:text-black transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
