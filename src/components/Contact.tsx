import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold mb-4">Contact Info!</h3>
            <p className="text-gray-700 mb-8">
              Have questions about our marine services? Contact our expert team for personalized assistance with your project needs.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-secondary mr-4 mt-1 flex-shrink-0"></div>
                <span className="text-gray-700">
                  shashiraaj@svmarines.com
                </span>
              </div>
              
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-secondary mr-4 mt-1 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Office 61, Citi Tower Plot-55, Sector-15, C.B.D, Belapur, Navi Mumbai - 400 614
                </span>
              </div>
              
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-secondary mr-4 mt-1 flex-shrink-0"></div>
                <span className="font-semibold text-xl">
                  +91 9559563139
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
                  className="border border-gray-400 rounded-md p-3 w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="border border-gray-400 rounded-md p-3 w-full"
                />
              </div>
              
              <input
                type="email"
                placeholder="Your email"
                className="border border-gray-400 rounded-md p-3 w-full"
              />
              
              <textarea
                placeholder="Message"
                rows={6}
                className="border border-gray-400 rounded-md p-3 w-full"
              ></textarea>
              
              <button 
                type="submit"
                className="bg-gray-100 text-black font-bold rounded-full py-4 px-8 flex items-center"
              >
                Submit Now
                <span className="bg-primary rounded-full w-12 h-12 flex items-center justify-center ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 