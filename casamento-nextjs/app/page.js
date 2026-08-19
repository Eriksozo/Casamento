'use client';

import { useEffect } from 'react';
import Envelope from '../components/Envelope';
import Chrome from '../components/Chrome';
import Hero from '../components/Hero';
import Details from '../components/Details';
import Presentes from '../components/Presentes';
import Gallery from '../components/Gallery';
import Verse from '../components/Verse';
import Footer from '../components/Footer';
import { initWeddingExperience } from '../lib/weddingExperience';

export default function Page() {
  useEffect(() => {
    // Roda toda a lógica imperativa (GSAP, Lenis, música, contagem, lightbox, envelope)
    // depois que o markup foi montado no DOM.
    const cleanup = initWeddingExperience();
    return cleanup;
  }, []);

  return (
    <>
      <Envelope />
      <Chrome />
      <Hero />
      <Details />
      <Presentes />
      <Gallery />
      <Verse />
      <Footer />
    </>
  );
}
