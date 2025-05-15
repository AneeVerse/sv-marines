"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const Services = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Function to handle scroll buttons
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Mouse drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    
    // Change cursor style
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    // Reset cursor style
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Add and remove event listeners
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Add grab cursor on hover
    container.style.cursor = 'grab';

    // Clean up event listeners when component unmounts
    return () => {
      if (container) {
        container.style.cursor = '';
      }
    };
  }, []);

  return (
    <section id="services" className="py-12 md:py-20 bg-[#00112E] text-white relative overflow-hidden">
      {/* Background image */}
      <div className="absolute top-0 right-0 w-full h-full md:w-full md:h-full z-0 opacity-70">
        <Image 
          src="/images/service-bg.png"
          alt="Service background"
          fill
          className="object-contain object-right-top"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-10 md:mb-16">
          <span className="uppercase text-xs tracking-wider font-semibold">Our services</span>
          <div className="flex justify-between items-end">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 md:mt-4">Essential Features of our Services.</h2>
            
            {/* Scroll Controls - Hidden on mobile (swipe instead) */}
            <div className="hidden md:flex gap-2 mr-40">
              <button 
                onClick={() => scroll('left')} 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/50 hover:bg-white/20 transition-colors"
              >
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={() => scroll('right')} 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/50 hover:bg-white/20 transition-colors"
              >
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile swipeable container - Horizontal scroll touch enabled */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 select-none"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {/* Service Card 1 - Project Management */}
            <div className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px] mr-6 md:mr-8 rounded-3xl border border-white/10 p-6 md:p-8 bg-[#00112E] relative group h-[420px] md:h-[480px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-6">Project Management</h3>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Image 
                    src="/images/service/service-icon/_x30_6_x2C__Delivery_x2C__domestic_ems_x2C__express_x2C__global_x2C__logistics (1).png"
                    alt="Project Management Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 md:pt-6 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
                <p className="text-white/70 text-sm md:text-base">Comprehensive management of marine projects from planning to execution, ensuring timely delivery, quality control, regulatory compliance, and cost efficiency.</p>
              </div>
              {/* Image with hover animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[200px] group-hover:h-[280px] md:group-hover:h-[340px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
                <Image 
                  src="/images/service/1.png"
                  alt="Project Management"
                  fill
                  className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Service Card 2 - Design and Drafting */}
            <div className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px] mr-6 md:mr-8 rounded-3xl border border-white/10 p-6 md:p-8 bg-[#00112E] relative group h-[420px] md:h-[480px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-6">Design and Drafting</h3>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Image 
                    src="/images/service/service-icon/XMLID_175_.png"
                    alt="Design and Drafting Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 md:pt-6 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
                <p className="text-white/70 text-sm md:text-base">Cutting-edge vessel design and precision drafting services that combine functionality, safety, and innovation to meet diverse client and industry standards.</p>
              </div>
              {/* Image with hover animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[200px] group-hover:h-[280px] md:group-hover:h-[340px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
                <Image 
                  src="/images/service/2.png"
                  alt="Design and Drafting"
                  fill
                  className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Service Card 3 - Structural Engineering */}
            <div className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px] mr-6 md:mr-8 rounded-3xl border border-white/10 p-6 md:p-8 bg-[#00112E] relative group h-[420px] md:h-[480px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-6">Structural Engineering</h3>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Image 
                    src="/images/service/service-icon/XMLID_180_.png"
                    alt="Structural Engineering Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 md:pt-6 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
                <p className="text-white/70 text-sm md:text-base">Expert structural design and analysis services for marine platforms, vessels, and offshore structures—focused on strength, stability, and sustainability.</p>
              </div>
              {/* Image with hover animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[200px] group-hover:h-[280px] md:group-hover:h-[340px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
                <Image 
                  src="/images/service/3.png"
                  alt="Structural Engineering"
                  fill
                  className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Service Card 4 - Marine Engineering */}
            <div className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px] mr-6 md:mr-8 rounded-3xl border border-white/10 p-6 md:p-8 bg-[#00112E] relative group h-[420px] md:h-[480px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-6">Marine Engineering</h3>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Image 
                    src="/images/service/service-icon/XMLID_186_.png"
                    alt="Marine Engineering Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 md:pt-6 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
                <p className="text-white/70 text-sm md:text-base">End-to-end marine engineering solutions aimed at optimizing vessel performance, reliability, and efficiency in alignment with operational demands.</p>
              </div>
              {/* Image with hover animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[200px] group-hover:h-[280px] md:group-hover:h-[340px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
                <Image 
                  src="/images/service/4.png"
                  alt="Marine Engineering"
                  fill
                  className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Service Card 5 - Marine Surveying */}
            <div className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px] mr-6 md:mr-8 rounded-3xl border border-white/10 p-6 md:p-8 bg-[#00112E] relative group h-[420px] md:h-[480px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-6">Marine Surveying</h3>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Image 
                    src="/images/service/service-icon/_x30_6_x2C__Delivery_x2C__domestic_ems_x2C__express_x2C__global_x2C__logistics (1).png"
                    alt="Marine Surveying Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 md:pt-6 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
                <p className="text-white/70 text-sm md:text-base">Thorough and certified marine surveying services that ensure compliance with national and international safety, structural, and regulatory standards.</p>
              </div>
              {/* Image with hover animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[200px] group-hover:h-[280px] md:group-hover:h-[340px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
                <Image 
                  src="/images/service/5.png"
                  alt="Marine Surveying"
                  fill
                  className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Service Card 6 - Marine Transportation */}
            <div className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px] mr-6 md:mr-8 rounded-3xl border border-white/10 p-6 md:p-8 bg-[#00112E] relative group h-[420px] md:h-[480px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-6">Marine Transportation</h3>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Image 
                    src="/images/service/service-icon/XMLID_175_.png"
                    alt="Marine Transportation Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 md:pt-6 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
                <p className="text-white/70 text-sm md:text-base">Safe, reliable, and cost-effective marine transportation solutions for a variety of cargo and vessel types across coastal and inland waters.</p>
              </div>
              {/* Image with hover animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[200px] group-hover:h-[280px] md:group-hover:h-[340px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
                <Image 
                  src="/images/service/6.png"
                  alt="Marine Transportation"
                  fill
                  className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Service Card 7 - Marine Dry and Wet Towing */}
            <div className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px] mr-6 md:mr-8 rounded-3xl border border-white/10 p-6 md:p-8 bg-[#00112E] relative group h-[420px] md:h-[480px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-6">Marine Dry and Wet Towing</h3>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Image 
                    src="/images/service/service-icon/XMLID_180_.png"
                    alt="Marine Towing Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 md:pt-6 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
                <p className="text-white/70 text-sm md:text-base">Specialized towing services—both wet and dry—designed to meet client-specific project requirements, with comprehensive logistical and technical support.</p>
              </div>
              {/* Image with hover animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[200px] group-hover:h-[280px] md:group-hover:h-[340px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
                <Image 
                  src="/images/service/7.png"
                  alt="Marine Towing"
                  fill
                  className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Service Card 8 - Marine Salvage */}
            <div className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px] mr-6 md:mr-8 rounded-3xl border border-white/10 p-6 md:p-8 bg-[#00112E] relative group h-[420px] md:h-[480px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-6">Marine Salvage</h3>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Image 
                    src="/images/service/service-icon/XMLID_186_.png"
                    alt="Marine Salvage Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 md:pt-6 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
                <p className="text-white/70 text-sm md:text-base">Professional marine salvage operations executed by an experienced diving team, capable of handling a wide range of recovery and underwater tasks with precision.</p>
              </div>
              {/* Image with hover animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[200px] group-hover:h-[280px] md:group-hover:h-[340px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
                <Image 
                  src="/images/service/8.png"
                  alt="Marine Salvage"
                  fill
                  className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Service Card 9 - Vessel Chartering */}
            <div className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px] mr-6 md:mr-8 rounded-3xl border border-white/10 p-6 md:p-8 bg-[#00112E] relative group h-[420px] md:h-[480px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-6">Vessel Chartering</h3>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Image 
                    src="/images/service/service-icon/_x30_6_x2C__Delivery_x2C__domestic_ems_x2C__express_x2C__global_x2C__logistics (1).png"
                    alt="Vessel Chartering Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 md:pt-6 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
                <p className="text-white/70 text-sm md:text-base">Tailored vessel chartering solutions, including short-term and long-term agreements, to support project-specific marine operations and logistics.</p>
              </div>
              {/* Image with hover animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[200px] group-hover:h-[280px] md:group-hover:h-[340px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
                <Image 
                  src="/images/service/9.png"
                  alt="Vessel Chartering"
                  fill
                  className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Service Card 10 - Vessel Registration */}
            <div className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px] mr-6 md:mr-8 rounded-3xl border border-white/10 p-6 md:p-8 bg-[#00112E] relative group h-[420px] md:h-[480px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-6">Vessel Registration</h3>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Image 
                    src="/images/service/service-icon/XMLID_175_.png"
                    alt="Vessel Registration Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 md:pt-6 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
                <p className="text-white/70 text-sm md:text-base">Streamlined and compliant vessel registration services that ensure hassle-free processing with maritime authorities and adherence to statutory norms.</p>
              </div>
              {/* Image with hover animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[200px] group-hover:h-[280px] md:group-hover:h-[340px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
                <Image 
                  src="/images/service/10.png"
                  alt="Vessel Registration"
                  fill
                  className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Service Card 11 - Consultancy */}
            <div className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px] mr-6 md:mr-8 rounded-3xl border border-white/10 p-6 md:p-8 bg-[#00112E] relative group h-[420px] md:h-[480px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-6">Consultancy</h3>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Image 
                    src="/images/service/service-icon/XMLID_180_.png"
                    alt="Consultancy Icon"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 md:pt-6 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
                <p className="text-white/70 text-sm md:text-base">Expert marine consultancy across a broad spectrum—covering technical, operational, regulatory, and commercial aspects of marine industry practices.</p>
              </div>
              {/* Image with hover animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[200px] group-hover:h-[280px] md:group-hover:h-[340px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
                <Image 
                  src="/images/service/11.png"
                  alt="Consultancy"
                  fill
                  className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Service Card 12 - Trading */}
            <div className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[320px] mr-6 md:mr-8 rounded-3xl border border-white/10 p-6 md:p-8 bg-[#00112E] relative group h-[420px] md:h-[480px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-6">Trading</h3>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <Image 
                    src="/images/service/service-icon/XMLID_186_.png"
                    alt="Trading Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 md:pt-6 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
                <p className="text-white/70 text-sm md:text-base">Efficient procurement and distribution of industrial and commercial goods, backed by a strong supplier network and in-depth market insight, delivering value-added trading solutions worldwide.</p>
              </div>
              {/* Image with hover animation */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] md:h-[200px] group-hover:h-[280px] md:group-hover:h-[340px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
                <Image 
                  src="/images/service/12.png"
                  alt="Trading"
                  fill
                  className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Add custom CSS to hide scrollbar */}
        <style jsx global>{`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          /* Hide scrollbar for IE, Edge and Firefox */
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}</style>
      </div>
    </section>
  );
};

export default Services; 