import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="absolute top-4 md:top-0 left-1/2 transform -translate-x-1/2 z-50">
      <Link href="/">
        <Image 
          src="/images/website-logo.png" 
          alt="SV Marine Services" 
          width={160} 
          height={160}
          className="w-[110px] h-[110px] md:w-[160px] md:h-[160px] p-1"
        />
      </Link>
    </div>
  );
};

export default Logo; 