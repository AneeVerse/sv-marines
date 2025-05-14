import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-10">
      <div className="bg-black bg-opacity-10">
        <div className="container mx-auto flex justify-between items-center h-24">
          <nav className="flex">
            <ul className="flex gap-10 items-center">
              <li>
                <Link href="/" className="font-semibold text-white text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-semibold text-white text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-semibold text-white text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-semibold text-white text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Link 
                href="/contact" 
                className="bg-primary text-white rounded-full py-3 px-8 font-bold text-xl uppercase"
              >
                CONTACT NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 