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
  return (
    <>
      <Navbar />
      <Logo />
      <Hero />
      <main className="py-16">
        <ClientLogos />
        <MarineOperations />
        <Services />
        <About />
        <Stats />
        <Contact />
        <Map />
      </main>
      <Footer />
    </>
  );
} 