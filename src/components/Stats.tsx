"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Stats = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="stats" className="py-8 md:py-16 bg-[#001529] text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - heading and checkboxes */}
          <div className="w-full md:w-[30%] z-10 mb-8 md:mb-0">
            <span className="uppercase text-xs tracking-wider font-medium text-white/90 mb-2 md:mb-4 block">OUR EXPERIENCE</span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-10 leading-tight">
              Decades of<br />
              Marine Mastery
            </h2>
            
            <div className="grid grid-cols-2 xs:grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-2 sm:gap-y-3 md:gap-y-5 mb-6 md:mb-10">
              <div className="flex items-center">
                <div className="w-4 h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0">
                  <Image 
                    src="/images/Component 5.png"
                    alt="Checkbox"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-xs md:text-sm">Certified Master Mariners</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0">
                  <Image 
                    src="/images/Component 5.png"
                    alt="Checkbox"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-xs md:text-sm">Regulatory Compliance</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0">
                  <Image 
                    src="/images/Component 5.png"
                    alt="Checkbox"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-xs md:text-sm">Naval Architects Onboard</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0">
                  <Image 
                    src="/images/Component 5.png"
                    alt="Checkbox"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-xs md:text-sm">Vessel Optimization</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0">
                  <Image 
                    src="/images/Component 5.png"
                    alt="Checkbox"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-xs md:text-sm">End-to-End Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0">
                  <Image 
                    src="/images/Component 5.png"
                    alt="Checkbox"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-xs md:text-sm">Salvage & Recovery</span>
              </div>
            </div>
            
            <div className="inline-block">
              <button 
                onClick={() => scrollToSection('services')}
                className="border border-white rounded-full py-1.5 sm:py-2 md:py-3 px-4 sm:px-6 md:px-8 text-xs md:text-sm font-medium inline-flex items-center hover:bg-white hover:text-[#001529] transition-colors duration-300 cursor-pointer"
              >
                More Details
                <div className="ml-2 md:ml-4 bg-white rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 flex items-center justify-center text-[#001529]">
                  <svg width="10" height="10" className="sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1L13 7M13 7L7 13M13 7H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          
          {/* Stats Content for Mobile - Will show at the top on mobile */}
          <div className="w-full md:hidden flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4 mb-8">
            <div className="flex items-center justify-center sm:justify-start sm:w-1/2  rounded-lg p-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                <path d="M12 4L12 20M12 4L6 10M12 4L18 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-4xl font-bold leading-none">10+<span className="text-lg font-normal ml-1">years</span></span>
                <p className="text-xs text-white/80 mt-1">Since 2013</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center sm:justify-start sm:w-1/2  rounded-lg p-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                <path d="M12 4L12 20M12 4L6 10M12 4L18 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-4xl font-bold leading-none">500+<span className="text-lg font-normal ml-1">Projects</span></span>
                <p className="text-xs text-white/80 mt-1">Successful executions</p>
              </div>
            </div>
          </div>
          
          {/* Middle - Ship image */}
          <div className="w-full md:w-[40%] relative flex justify-center items-center my-0 md:my-0 order-last md:order-2">
            <div className="relative md:top-[80px]">
              <Image 
                src="/images/our-experience-bg.png"
                alt="Cargo ship aerial view" 
                width={500}
                height={400}
                className="object-scale-down max-w-full md:max-w-none"
                priority
              />
            </div>
          </div>
          
          {/* Right side - Stats - Hidden on mobile */}
          <div className="hidden md:block w-full md:w-[30%] z-10 md:space-y-16 md:order-3">
            <div className="flex flex-col items-end">
              <div className="flex items-center justify-end mb-3 md:mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 w-6 h-6 md:w-7 md:h-7">
                  <path d="M12 4L12 20M12 4L6 10M12 4L18 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-5xl md:text-7xl font-bold leading-none">10+<span className="text-xl md:text-2xl font-normal ml-1">years</span></span>
              </div>
              <div className="w-full h-[1px] bg-white/20 my-3 md:my-5"></div>
              <p className="text-xs md:text-sm text-white/80 text-right">
                Delivering trusted marine solutions<br />
                since 2013
              </p>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="flex items-center justify-end mb-3 md:mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 w-6 h-6 md:w-7 md:h-7">
                  <path d="M12 4L12 20M12 4L6 10M12 4L18 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-5xl md:text-7xl font-bold leading-none">500+<span className="text-xl md:text-2xl font-normal ml-1">Projects</span></span>
              </div>
              <div className="w-full h-[1px] bg-white/20 my-3 md:my-5"></div>
              <p className="text-xs md:text-sm text-white/80 text-right">
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