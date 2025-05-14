import React from 'react';

const Stats = () => {
  return (
    <section className="py-20 bg-dark-blue text-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="uppercase text-xs tracking-wider font-semibold">Our experience</span>
            <h2 className="text-5xl font-semibold mt-4 mb-8">Decades of<br />Marine Mastery</h2>
            
            <div className="grid grid-cols-2 gap-y-4 mb-16">
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-white/25 mr-4 flex-shrink-0"></div>
                <span>Certified Master Mariners</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-white/25 mr-4 flex-shrink-0"></div>
                <span>Regulatory Compliance Guaranteed</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-white/25 mr-4 flex-shrink-0"></div>
                <span>Naval Architects Onboard</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-white/25 mr-4 flex-shrink-0"></div>
                <span>Vessel Optimization Experts</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-white/25 mr-4 flex-shrink-0"></div>
                <span>End-to-End Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-white/25 mr-4 flex-shrink-0"></div>
                <span>Salvage & Recovery</span>
              </div>
            </div>
            
            <button className="border border-white rounded-full py-3 px-8 font-medium flex items-center">
              Learn More
              <span className="bg-white text-dark-blue rounded-full w-12 h-12 flex items-center justify-center ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
          
          <div className="relative">
            {/* This div will be replaced with a ship image */}
            <div className="w-full h-full bg-gray-700 opacity-50"></div>
            
            <div className="absolute top-1/4 right-0 text-right">
              <div className="flex items-center justify-end mb-2">
                <div className="w-12 h-12 mr-4 bg-white flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-dark-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-6xl font-semibold">10+<span className="text-xl">years</span></h3>
              </div>
              <p className="text-white/80 max-w-xs ml-auto">Delivering trusted marine solutions since 2013</p>
            </div>
            
            <div className="absolute top-2/3 right-0 text-right">
              <div className="flex items-center justify-end mb-2">
                <div className="w-12 h-12 mr-4 bg-white flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-dark-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-6xl font-semibold">500+<span className="text-xl">Projects</span></h3>
              </div>
              <p className="text-white/80 max-w-xs ml-auto">Successful executions from design to salvage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 