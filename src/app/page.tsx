import Image from 'next/image'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We provide a comprehensive range of marine engineering services to meet your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Marine Engineering</h3>
              <p className="text-gray-600 mb-4">
                Expert engineering solutions for all types of marine vessels and structures.
              </p>
              <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Ship Repair</h3>
              <p className="text-gray-600 mb-4">
                Professional repair and maintenance services to keep your vessels in optimal condition.
              </p>
              <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Naval Architecture</h3>
              <p className="text-gray-600 mb-4">
                Innovative design and architectural services for marine vessels of all sizes.
              </p>
              <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic consulting to help you make informed decisions for your marine projects.
              </p>
              <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </a>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Experience & Expertise</h3>
                <p className="text-gray-600">
                  Over 20 years of experience in the marine industry with a team of certified experts.
                </p>
              </div>
              
              <div>
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Using the latest technology and innovative approaches to deliver superior results.
                </p>
              </div>
              
              <div>
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
                <p className="text-gray-600">
                  Dedicated to providing exceptional customer service and satisfaction at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 