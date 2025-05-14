import React from 'react';

const Services = () => {
  return (
    <section className="py-20 bg-dark-blue text-white">
      <div className="container mx-auto">
        <div className="mb-16">
          <span className="uppercase text-xs tracking-wider font-semibold">Our experience</span>
          <h2 className="text-5xl font-semibold mt-4">Essential Features of our Services.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Service Card 1 */}
          <div className="rounded-3xl border border-white/10 p-10 bg-dark-blue relative">
            <h3 className="text-2xl font-semibold mb-4">Project Management</h3>
            <div className="border-t border-white/10 pt-6 mb-40">
              <p className="text-white/70">Expert planning and execution of maritime projects with precision and efficiency.</p>
            </div>
            {/* This div will be replaced with an image */}
            <div className="absolute bottom-6 left-6 right-6 h-36 rounded-3xl bg-gray-700"></div>
          </div>
          
          {/* Service Card 2 */}
          <div className="rounded-3xl border border-white/10 p-10 bg-dark-blue relative">
            <h3 className="text-2xl font-semibold mb-4">Design and Analysis</h3>
            <div className="border-t border-white/10 pt-6 mb-40">
              <p className="text-white/70">Comprehensive vessel and maritime structure design with advanced analysis.</p>
            </div>
            {/* This div will be replaced with an image */}
            <div className="absolute bottom-6 left-6 right-6 h-36 rounded-3xl bg-gray-700"></div>
          </div>
          
          {/* Service Card 3 */}
          <div className="rounded-3xl border border-white/10 p-10 bg-dark-blue relative">
            <h3 className="text-2xl font-semibold mb-4">Marine Engineering</h3>
            <div className="border-t border-white/10 pt-6 mb-40">
              <p className="text-white/70">Expert technical solutions for vessel systems, propulsion, and maritime equipment.</p>
            </div>
            {/* This div will be replaced with an image */}
            <div className="absolute bottom-6 left-6 right-6 h-36 rounded-3xl bg-gray-700"></div>
          </div>
          
          {/* Service Card 4 */}
          <div className="rounded-3xl border border-white/10 p-10 bg-dark-blue relative">
            <h3 className="text-2xl font-semibold mb-4">Salvage Operations</h3>
            <div className="border-t border-white/10 pt-6 mb-40">
              <p className="text-white/70">Specialized recovery and salvage services for vessels in distress and marine assets.</p>
            </div>
            {/* This div will be replaced with an image */}
            <div className="absolute bottom-6 left-6 right-6 h-36 rounded-3xl bg-gray-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 