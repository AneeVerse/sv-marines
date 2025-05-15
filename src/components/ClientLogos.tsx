"use client";

import React from 'react';
import Image from 'next/image';

// Preload images
const logoPaths = [
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.20 PM.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.19 PM.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.16 PM.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.18 PM.png",
  "/images/logo/WhatsApp Image 2025-04-18 at 2.33.10 PM.png",
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Logo container with stable dimensions */}
        <div className="logo-slider-container relative h-20 overflow-hidden">
          {/* First row of logos */}
          <div className="logo-slider flex absolute whitespace-nowrap">
            {logoPaths.map((src, index) => (
              <div key={`logo-${index}`} className="logo-item inline-flex justify-center items-center mx-8">
                <img 
                  src={src}
                  alt={`Client Logo ${index + 1}`}
                  className="h-16 w-auto max-w-[160px] object-contain"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {logoPaths.map((src, index) => (
              <div key={`logo-dup-${index}`} className="logo-item inline-flex justify-center items-center mx-8">
                <img 
                  src={src}
                  alt={`Client Logo ${index + 1}`}
                  className="h-16 w-auto max-w-[160px] object-contain"
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