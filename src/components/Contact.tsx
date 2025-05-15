"use client";

import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold mb-4">Contact Info!</h3>
            <p className="text-gray-700 mb-8">
              Have questions about our marine services? Contact our expert team for personalized assistance with your project needs.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-4 mt-1 flex-shrink-0 flex items-center justify-center">
                  <Image 
                    src="/images/contact/Component 1.png"
                    alt="Email"
                    width={16}
                    height={16}
                  />
                </div>
                <span className="text-gray-700">
                  shashiraaj@svmarines.com
                </span>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-4 mt-1 flex-shrink-0 flex items-center justify-center">
                  <Image 
                    src="/images/contact/Component 1 (1).png"
                    alt="Location"
                    width={14}
                    height={14}
                  />
                </div>
                <span className="text-gray-700">
                  Office 61, Citi Tower Plot-55, Sector-15, C.B.D, Belapur, Navi Mumbai - 400 614
                </span>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-4 mt-1 flex-shrink-0 flex items-center justify-center">
                  <Image 
                    src="/images/contact/Vector (1).png"
                    alt="Phone"
                    width={14}
                    height={14}
                  />
                </div>
                <span className="font-semibold text-xl">
                  +91 9559563139
                </span>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full mr-4 mt-1 flex-shrink-0 flex items-center justify-center">
                  <Image 
                    src="/images/contact/Vector (1).png"
                    alt="Phone"
                    width={14}
                    height={14}
                  />
                </div>
                <span className="font-semibold text-xl">
                  +91 9651633557
                </span>
              </div>
              
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-3">Send a Message</h3>
            <p className="text-gray-700 mb-6">
              We're here to help with all your marine service needs. Fill out the form below and we'll respond promptly.
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
              </div>
              
              <input
                type="email"
                placeholder="Your email"
                className="border border-gray-300 rounded-md p-3 w-full"
              />
              
              <textarea
                placeholder="Message"
                rows={6}
                className="border border-gray-300 rounded-md p-3 w-full"
              ></textarea>
              
              <div className="flex justify-start">
                <button 
                  type="submit"
                  className="bg-gray-100 hover:bg-gray-200 text-black font-semibold rounded-full py-3 px-8 flex items-center transition-colors"
                >
                  Submit Now
                  <div className="ml-4 rounded-full w-10 h-10 flex items-center justify-center text-white">
                    <Image 
                      src="/images/contact/Background.png"
                      alt="Submit"
                      width={50}
                      height={50}
                    />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 