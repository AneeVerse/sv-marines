import React from 'react';
import Header from '@/components/Header';
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
    <main>
      <Header />
      <Hero />
      <ClientLogos />
      <MarineOperations />
      <About />
      <Services />
      <Stats />
      <Contact />
      <Map />
      <Footer />
    </main>
  );
} 