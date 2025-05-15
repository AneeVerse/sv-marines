import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import MarineOperations from '@/components/MarineOperations';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

export default function Home() {
  // You would typically get this from environment variables
  // For now, we'll pass undefined and use the fallback in the Map component
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  return (
    <>
      <Navbar />
      <Logo />
      <Hero />
      <ClientLogos />
      <MarineOperations />
      <Services />
      <About />
      <Stats />
      <Contact />
      <Map apiKey={googleMapsApiKey} />
      <Footer />
    </>
  );
} 