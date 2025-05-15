"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#001529] text-white">
      {/* Main Footer Area */}
      <div className="w-full py-8 md:py-14 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center relative">
            {/* Map Section Full Width */}
            <div className="absolute top-0 left-0 right-0 h-[300px] md:h-[400px] -mt-[300px] md:-mt-[400px] z-0">
              {/* Map is rendered before footer, this is for the positioning */}
            </div>
            
            {/* Information Bar - Takes full width */}
            <div className="w-full bg-[#001529] py-6 md:py-10 px-4 md:px-12 rounded-lg z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-6 md:mb-0 md:w-1/3">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">Your Trusted Marine Partner</h3>
                <p className="text-xs md:text-sm text-gray-300 mb-2">Office 61, Citi Tower Plot-55, Sector-15, C.B.D, Belapur, Navi Mumbai - 400 614</p>
                <p className="text-xs md:text-sm text-gray-300">shashiraaj@svmarines.com</p>
              </div>
              
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <Image 
                  src="/images/footer-logo.png"
                  alt="SV Marine Services Logo"
                  width={120}
                  height={120}
                  className="w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              
              <div className="w-full md:w-1/3">
                <div className="relative w-full max-w-md mx-auto md:ml-auto md:mr-0">
                  <input 
                    type="email" 
                    placeholder="Enter Your Email Address" 
                    className="bg-white text-gray-900 p-3 md:p-4 pr-16 md:pr-20 w-full rounded-full outline-none text-sm"
                  />
                  <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#003088] text-white py-1.5 md:py-2 px-2 md:px-4 rounded-full flex items-center h-8 md:h-10 text-xs md:text-sm">
                    <span className="hidden sm:inline">Connect Now</span>
                    <span className="sm:hidden">Connect</span>
                    <div className="ml-1 md:ml-2 bg-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                      <svg width="10" height="10" className="md:w-3 md:h-3" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1L13 7M13 7L7 13M13 7H1" stroke="#003088" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
      
      {/* Copyright */}
      <div className="border-t border-gray-800 py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm md:text-base text-center md:text-left">© {new Date().getFullYear()} SV Marine Services. All Rights Reserved</p>
            
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8 mt-4 md:mt-0">
              <li>
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
