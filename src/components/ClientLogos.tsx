import React from 'react';

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* These are placeholder divs for client logos */}
          <div className="w-32 h-16 bg-gray-100 flex items-center justify-center rounded">
            <span className="text-gray-400">Logo 1</span>
          </div>
          <div className="w-32 h-16 bg-gray-100 flex items-center justify-center rounded">
            <span className="text-gray-400">Logo 2</span>
          </div>
          <div className="w-32 h-16 bg-gray-100 flex items-center justify-center rounded">
            <span className="text-gray-400">Logo 3</span>
          </div>
          <div className="w-32 h-16 bg-gray-100 flex items-center justify-center rounded">
            <span className="text-gray-400">Logo 4</span>
          </div>
          <div className="w-32 h-16 bg-gray-100 flex items-center justify-center rounded">
            <span className="text-gray-400">Logo 5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 