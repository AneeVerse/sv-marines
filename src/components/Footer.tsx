import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2">
            <h3 className="text-4xl font-semibold mb-10 leading-tight">
              Your Trusted Marine Partner
              <span className="block mt-2 text-lg">
                Office 61, Citi Tower Plot-55, Sector-15, C.B.D, Belapur, Navi Mumbai - 400 614
              </span>
              <span className="block mt-2 text-lg">
                shashiraaj@svmarines.com
              </span>
            </h3>
            
            <div className="relative mt-8">
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
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white">Marine Engineering</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Ship Repair</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Naval Architecture</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Consulting</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} SV Marine Services. All Rights Reserved</p>
            
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
