import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-10 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Nav */}
        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/about-us" className="text-white hover:text-gray-200">
            About Us
          </Link>
          <Link href="/service" className="text-white hover:text-gray-200">
            Service
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image 
              src="/images/website-logo.png" 
              alt="SV Marine Services" 
              width={120} 
              height={120}
              className="p-1"
            />
          </Link>
        </div>

        {/* Right Contact Button */}
        <div>
          <Link 
            href="/contact" 
            className="bg-[#FF5722] text-white rounded-md py-2 px-6 font-medium uppercase"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 