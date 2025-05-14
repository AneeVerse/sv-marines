import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <section className="py-20 bg-[#00112E] text-white">
      <div className="container mx-auto">
        <div className="mb-16">
          <span className="uppercase text-xs tracking-wider font-semibold">Our experience</span>
          <h2 className="text-5xl font-semibold mt-4">Essential Features of our Services.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Service Card 1 */}
          <div className="rounded-3xl border border-white/10 p-10 bg-[#00112E] relative group h-[504px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold mb-4">Project Management</h3>
              <div className="w-10 h-10 flex items-center justify-center">
                <Image 
                  src="/images/service/service-icon/_x30_6_x2C__Delivery_x2C__domestic_ems_x2C__express_x2C__global_x2C__logistics (1).png"
                  alt="Project Management Icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-y-4 group-hover:translate-y-0">
              <p className="text-white/70">Expert planning and execution of maritime projects with precision and efficiency.</p>
            </div>
            {/* Image with hover animation */}
            <div className="absolute bottom-0 left-0 right-0 h-[360px] group-hover:h-[210px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
              <Image 
                src="/images/service/1.png"
                alt="Project Management"
                fill
                className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Service Card 2 */}
          <div className="rounded-3xl border border-white/10 p-10 bg-[#00112E] relative group h-[504px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold mb-4">Design and Analysis</h3>
              <div className="w-10 h-10 flex items-center justify-center">
                <Image 
                  src="/images/service/service-icon/XMLID_175_.png"
                  alt="Design and Analysis Icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-y-4 group-hover:translate-y-0">
              <p className="text-white/70">Comprehensive vessel and maritime structure design with advanced analysis.</p>
            </div>
            {/* Image with hover animation */}
            <div className="absolute bottom-0 left-0 right-0 h-[360px] group-hover:h-[210px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
              <Image 
                src="/images/service/2.png"
                alt="Design and Analysis"
                fill
                className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Service Card 3 */}
          <div className="rounded-3xl border border-white/10 p-10 bg-[#00112E] relative group h-[504px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold mb-4">Marine Engineering</h3>
              <div className="w-10 h-10 flex items-center justify-center">
                <Image 
                  src="/images/service/service-icon/XMLID_180_.png"
                  alt="Marine Engineering Icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-y-4 group-hover:translate-y-0">
              <p className="text-white/70">Expert technical solutions for vessel systems, propulsion, and maritime equipment.</p>
            </div>
            {/* Image with hover animation */}
            <div className="absolute bottom-0 left-0 right-0 h-[360px] group-hover:h-[210px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
              <Image 
                src="/images/service/3.png"
                alt="Marine Engineering"
                fill
                className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Service Card 4 */}
          <div className="rounded-3xl border border-white/10 p-10 bg-[#00112E] relative group h-[504px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold mb-4">Salvage Operations</h3>
              <div className="w-10 h-10 flex items-center justify-center">
                <Image 
                  src="/images/service/service-icon/XMLID_186_.png"
                  alt="Salvage Operations Icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-y-4 group-hover:translate-y-0">
              <p className="text-white/70">Specialized recovery and salvage services for vessels in distress and marine assets.</p>
            </div>
            {/* Image with hover animation */}
            <div className="absolute bottom-0 left-0 right-0 h-[360px] group-hover:h-[210px] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl mx-3">
              <Image 
                src="/images/service/4.png"
                alt="Salvage Operations"
                fill
                className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 