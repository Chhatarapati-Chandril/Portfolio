import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
// import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-dark text-white">
      {!loadingComplete && <LoadingScreen onComplete={() => setLoadingComplete(true)} />}
      {/* <CustomCursor /> */}
      <Navigation />
      <Hero />
      <About />
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Testimonials /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
