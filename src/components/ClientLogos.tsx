import React from 'react';
import Image from 'next/image';

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white  overflow-hidden">
      <div className="container mx-auto">
        {/* Infinite logo slider */}
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="mx-8 flex items-center justify-center">
              <Image 
                src="/images/logo/WhatsApp Image 2025-04-18 at 2.33.20 PM.png" 
                alt="Client Logo 1" 
                width={150} 
                height={70}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="mx-8 flex items-center justify-center">
              <Image 
                src="/images/logo/WhatsApp Image 2025-04-18 at 2.33.19 PM.png" 
                alt="Client Logo 2" 
                width={150}
                height={70}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="mx-8 flex items-center justify-center">
              <Image 
                src="/images/logo/WhatsApp Image 2025-04-18 at 2.33.16 PM.png" 
                alt="Client Logo 3" 
                width={150}
                height={70}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="mx-8 flex items-center justify-center">
              <Image 
                src="/images/logo/WhatsApp Image 2025-04-18 at 2.33.18 PM.png" 
                alt="Client Logo 4" 
                width={150}
                height={70}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="mx-8 flex items-center justify-center">
              <Image 
                src="/images/logo/WhatsApp Image 2025-04-18 at 2.33.10 PM.png" 
                alt="Client Logo 5" 
                width={150}
                height={70}
                style={{ objectFit: 'contain' }}
              />
            </div>
            
            {/* Duplicate logos for seamless animation */}
            <div className="mx-8 flex items-center justify-center">
              <Image 
                src="/images/logo/WhatsApp Image 2025-04-18 at 2.33.20 PM.png" 
                alt="Client Logo 1" 
                width={150}
                height={70}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="mx-8 flex items-center justify-center">
              <Image 
                src="/images/logo/WhatsApp Image 2025-04-18 at 2.33.19 PM.png" 
                alt="Client Logo 2" 
                width={150}
                height={70}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="mx-8 flex items-center justify-center">
              <Image 
                src="/images/logo/WhatsApp Image 2025-04-18 at 2.33.16 PM.png" 
                alt="Client Logo 3"
                width={150}
                height={70}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 