import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-10">
          <div className="max-w-2xl">
            <h3 className="text-4xl font-semibold mb-10 leading-tight">
              Your Trusted Marine Partner. 
              <span className="block mt-2">
                Office 61, Citi Tower Plot-55, Sector-15, C.B.D, Belapur, Navi Mumbai - 400 614
              </span>
              <span className="block mt-2">
                shashiraaj@svmarines.com
              </span>
            </h3>
            
            {/* Logo placeholder */}
            <div className="bg-white w-48 h-48 rounded-lg mb-10"></div>
            
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="bg-white text-black p-5 w-full rounded-3xl"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white py-4 px-8 rounded-3xl flex items-center">
                Subscribe
                <span className="ml-2 bg-white w-10 h-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-blue-900">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-400">© 2025 SV Marine Services. All Rights Reserved</p>
            
            <ul className="flex space-x-8 mt-4 md:mt-0">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 