import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <span className="text-gray-500 font-medium mb-5">Why Us?</span>
              
              <h2 className="text-4xl font-semibold mb-8 leading-tight">
                Decades of Trust, Delivered Across Every Wave
              </h2>
              
              <p className="text-gray-700 mb-10">
                Since 2013, SV Marine Services has been the backbone of India's maritime industry, delivering end-to-end solutions with uncompromising standards. Our team of Master Mariners and Naval Architects combines hands-on experience with cutting-edge technology to ensure project success—from initial design to final execution. We don't just meet SOLAS and IMCA regulations; we exceed them, implementing rigorous quality controls at every phase to guarantee safety, efficiency, and cost-effectiveness for every client, every voyage.
              </p>
              
              <div className="inline-flex">
                <Link
                  href="/contact"
                  className="contact-btn relative overflow-hidden border-2 border-black rounded-full py-3 px-8 font-medium flex items-center group"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">CONTACT NOW</span>
                  <span className="absolute inset-0 bg-[#F55B1F] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 -z-10"></span>
                  <span className="bg-black rounded-full w-12 h-12 flex items-center justify-center ml-4 relative z-10 transition-all duration-300 group-hover:bg-[#F55B1F]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" 
                      className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="relative h-[400px] w-full">
              <Image 
                src="/images/about/ship-port.jpg" 
                alt="Marine vessel at port" 
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="relative h-[400px] w-full order-2 md:order-1">
              <Image 
                src="/images/about/cargo-shipping.jpg" 
                alt="Cargo shipping containers" 
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-center order-1 md:order-2">
              <span className="text-gray-500 font-medium mb-5">What We Do</span>
              
              <h2 className="text-4xl font-semibold mb-8 leading-tight">
                Your Marine Challenges, Our Solutions
              </h2>
              
              <p className="text-gray-700 mb-10">
                At SV Marine Services, we've built robust solutions to address your complex marine challenges. Our 24/7 operational support, emergency response teams, and customized solutions are tailored to your unique needs—whether navigating complex regulatory frameworks, optimizing vessel performance, or keeping detailed records of specialized projects. We bring together technical expertise, innovative problem-solving and deep regulatory knowledge to keep your operations smooth, safe, and profitable in an ever-changing maritime landscape.
              </p>
              
              <div className="inline-flex">
                <Link
                  href="/contact"
                  className="contact-btn relative overflow-hidden border-2 border-black rounded-full py-3 px-8 font-medium flex items-center group"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">CONTACT NOW</span>
                  <span className="absolute inset-0 bg-[#F55B1F] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 -z-10"></span>
                  <span className="bg-black rounded-full w-12 h-12 flex items-center justify-center ml-4 relative z-10 transition-all duration-300 group-hover:bg-[#F55B1F]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" 
                      className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 