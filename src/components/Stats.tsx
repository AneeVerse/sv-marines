import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Stats = () => {
  return (
    <section className="py-16 bg-[#001529] text-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - heading and checkboxes */}
          <div className="md:w-[30%] z-10">
            <span className="uppercase text-xs tracking-wider font-medium text-white/90 mb-4 block">OUR EXPERIENCE</span>
            
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Decades of<br />
              Marine Mastery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 mr-3 flex-shrink-0">
                  <Image 
                    src="/images/Component 5.png"
                    alt="Checkbox"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm">Certified Master Mariners</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 mr-3 flex-shrink-0">
                  <Image 
                    src="/images/Component 5.png"
                    alt="Checkbox"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm">Regulatory Compliance Guaranteed</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 mr-3 flex-shrink-0">
                  <Image 
                    src="/images/Component 5.png"
                    alt="Checkbox"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm">Naval Architects Onboard</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 mr-3 flex-shrink-0">
                  <Image 
                    src="/images/Component 5.png"
                    alt="Checkbox"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm">Vessel Optimization Experts</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 mr-3 flex-shrink-0">
                  <Image 
                    src="/images/Component 5.png"
                    alt="Checkbox"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm">End-to-End Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 mr-3 flex-shrink-0">
                  <Image 
                    src="/images/Component 5.png"
                    alt="Checkbox"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
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
          
          {/* Middle - Ship image */}
          <div className="md:w-[40%] relative flex justify-center items-center my-8 md:my-0">
            <Image 
              src="/images/our-experience-bg.png"
              alt="Cargo ship aerial view" 
              width={600}
              height={700}
              className="object-contain"
              priority
            />
          </div>
          
          {/* Right side - Stats */}
          <div className="md:w-[30%] z-10 space-y-16">
            <div className="text-right">
              <div className="flex items-center justify-end mb-2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M10 20L20 10M20 10H10M20 10V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-6xl font-bold leading-none">10+<span className="text-xl font-medium ml-1">years</span></span>
              </div>
              <p className="text-sm text-white/80 mt-1">
                Delivering trusted marine solutions<br />
                since 2013
              </p>
            </div>
            
            <div className="text-right">
              <div className="flex items-center justify-end mb-2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M10 20L20 10M20 10H10M20 10V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-6xl font-bold leading-none">500+<span className="text-xl font-medium ml-1">Projects</span></span>
              </div>
              <p className="text-sm text-white/80 mt-1">
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