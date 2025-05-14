import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-primary">
            SV Marines
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-primary">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-primary">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-primary">Services</Link>
          <Link href="/projects" className="text-gray-700 hover:text-primary">Projects</Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
        </div>
        
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 