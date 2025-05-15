"use client";

import React from 'react';
import Image from 'next/image';

// Preload images
const logoPaths = [
  "/images/logo/2.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.19 PM.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.16 PM.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.18 PM.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.10 PM.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.13 PM.png",
  "/images/logo/1 (1).png",
  "/images/logo/1 (2).png",
  "/images/logo/1 (3).png",
  "/images/logo/2.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.19 PM.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.16 PM.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.18 PM.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.10 PM.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.13 PM.png",
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Heading for client logos */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Trusted Clients</h2>
          <p className="text-gray-600 mt-2">Proudly serving industry leaders across the marine sector</p>
        </div>
        
        {/* Logo container with stable dimensions */}
        <div className="logo-slider-container relative h-20 overflow-hidden">
          {/* First row of logos */}
          <div className="logo-slider flex absolute whitespace-nowrap">
            {logoPaths.map((src, index) => (
              <div key={`logo-${index}`} className="logo-item inline-flex justify-center items-center mx-8">
                <img 
                  src={src}
                  alt={`Client Logo ${index + 1}`}
                  className="h-24 w-auto max-w-[180px] object-contain"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {logoPaths.map((src, index) => (
              <div key={`logo-dup-${index}`} className="logo-item inline-flex justify-center items-center mx-8">
                <img 
                  src={src}
                  alt={`Client Logo ${index + 1}`}
                  className="h-24 w-auto max-w-[180px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS for the animation */}
      <style jsx>{`
        .logo-slider-container {
          width: 100%;
        }
        
        .logo-slider {
          animation: slide 35s linear infinite;
        }
        
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogos; 