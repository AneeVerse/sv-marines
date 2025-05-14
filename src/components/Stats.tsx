import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Stats = () => {
  return (
    <section className="py-16 bg-[#001529] text-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="uppercase text-xs tracking-wider font-medium text-white/90 mb-4 block">OUR EXPERIENCE</span>
            
            <h2 className="text-5xl font-bold mb-16 leading-tight">
              Decades of<br />
              Marine Mastery
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 mb-16">
              <div className="flex items-center">
                <div className="w-5 h-5 mr-3 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="19" height="19" stroke="white"/>
                    <rect x="4" y="4" width="12" height="12" fill="white"/>
                  </svg>
                </div>
                <span className="text-sm">Certified Master Mariners</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 mr-3 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="19" height="19" stroke="white"/>
                    <rect x="4" y="4" width="12" height="12" fill="white"/>
                  </svg>
                </div>
                <span className="text-sm">Regulatory Compliance Guaranteed</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 mr-3 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="19" height="19" stroke="white"/>
                    <rect x="4" y="4" width="12" height="12" fill="white"/>
                  </svg>
                </div>
                <span className="text-sm">Naval Architects Onboard</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 mr-3 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="19" height="19" stroke="white"/>
                    <rect x="4" y="4" width="12" height="12" fill="white"/>
                  </svg>
                </div>
                <span className="text-sm">Vessel Optimization Experts</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 mr-3 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="19" height="19" stroke="white"/>
                    <rect x="4" y="4" width="12" height="12" fill="white"/>
                  </svg>
                </div>
                <span className="text-sm">End-to-End Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 mr-3 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="19" height="19" stroke="white"/>
                    <rect x="4" y="4" width="12" height="12" fill="white"/>
                  </svg>
                </div>
                <span className="text-sm">Salvage & Recovery</span>
              </div>
            </div>
            
            <div className="inline-block">
              <Link 
                href="/services" 
                className="border border-white rounded-full py-3 px-8 text-sm font-medium inline-flex items-center hover:bg-white hover:text-[#001529] transition-colors duration-300"
              >
                More Details
                <div className="ml-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-[#001529]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1L13 7M13 7L7 13M13 7H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="relative h-[600px] w-[600px] mr-22 flex justify-center items-center">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/our-experience-bg.png"
                alt="Cargo ship aerial view" 
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="absolute top-[20%] right-0 text-right">
              <div className="flex items-center justify-end mb-2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M10 20L20 10M20 10H10M20 10V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-6xl font-bold leading-none">10+<span className="text-xl font-medium ml-1">years</span></span>
              </div>
              <p className="text-sm text-white/80 mt-1 pr-10">
                Delivering trusted marine solutions<br />
                since 2013
              </p>
            </div>
            
            <div className="absolute bottom-[20%] right-0 text-right">
              <div className="flex items-center justify-end mb-2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M10 20L20 10M20 10H10M20 10V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-6xl font-bold leading-none">500+<span className="text-xl font-medium ml-1">Projects</span></span>
              </div>
              <p className="text-sm text-white/80 mt-1 pr-10">
                Successful executions from design<br />
                to salvage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 