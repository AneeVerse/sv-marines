"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#001529] text-white">
      {/* Main Footer Area */}
      <div className="w-full py-14 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center relative">
            {/* Map Section Full Width */}
            <div className="absolute top-0 left-0 right-0 h-[400px] -mt-[400px] z-0">
              {/* Map is rendered before footer, this is for the positioning */}
            </div>
            
            {/* Information Bar - Takes full width */}
            <div className="w-full bg-[#001529] py-10 px-4 md:px-12 rounded-lg z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-8 md:mb-0 md:w-1/3">
                <h3 className="text-3xl font-bold mb-1">Your Trusted Marine Partner</h3>
                <p className="text-sm text-gray-300 mb-2">Office 61, Citi Tower Plot-55, Sector-15, C.B.D, Belapur, Navi Mumbai - 400 614</p>
                <p className="text-sm text-gray-300">shashiraaj@svmarines.com</p>
              </div>
              
              <div className="flex-shrink-0 mb-8 md:mb-0">
                <Image 
                  src="/images/footer-logo.png"
                  alt="SV Marine Services Logo"
                  width={160}
                  height={160}
                />
              </div>
              
              <div className="md:w-1/3">
                <div className="relative w-full max-w-md mx-auto md:ml-auto md:mr-0">
                  <input 
                    type="email" 
                    placeholder="Enter Your Email Address" 
                    className="bg-white text-gray-900 p-4 pr-20 w-full rounded-full outline-none"
                  />
                  <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#003088] text-white py-2 px-4 rounded-full flex items-center h-10">
                    Connect Now
                    <div className="ml-2 bg-white rounded-full w-6 h-6 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} SV Marine Services. All Rights Reserved</p>
            
            <ul className="flex space-x-8 mt-4 md:mt-0">
              <li>
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="text-gray-400 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="text-gray-400 hover:text-white transition-colors">
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
