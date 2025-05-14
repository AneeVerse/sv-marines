import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MarineChallenges = () => {
  return (
    <section className="py-20 bg-[#00112E] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1 h-[400px]">
            <div className="w-full h-full rounded-[30px] overflow-hidden shadow-lg">
              <Image 
                src="/images/about/74ec57850ebc8adf248d7cb7e3e31b8ebcbf10c3.jpg"
                alt="Marine Equipment and Operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center order-1 md:order-2 md:pl-8">
            <span className="text-white/70 font-medium mb-2 uppercase text-sm tracking-wider">Why Us?</span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Your Marine Challenges, Our Solutions
            </h2>
            
            <p className="text-white/70 mb-8">
              At SV Marine Services, we go beyond service providers to become true partners. 
              Our 24/7 operational support, emergency response teams, and customized 
              solutions are tailored to your unique needs—whether managing complex 
              offshore projects or ensuring vessel compliance. With a decade-long track 
              record of successful projects, we bring together technical expertise, innovative 
              problem-solving, and deep regulatory knowledge to keep your operations 
              smooth, safe, and profitable in an ever-changing maritime landscape.
            </p>
            
            <div className="inline-flex">
              <Link
                href="/contact"
                className="bg-[#FF5722] text-white rounded-full py-3 px-8 font-medium flex items-center group transition-all duration-300 hover:bg-opacity-90"
              >
                CONTACT NOW
                <span className="bg-white text-[#FF5722] rounded-full w-8 h-8 flex items-center justify-center ml-4 group-hover:bg-[#FF5722] group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarineChallenges; 