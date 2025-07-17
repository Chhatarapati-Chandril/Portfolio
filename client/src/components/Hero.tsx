import DotGrid from './DotGrid';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={6}
          gap={35}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-transparent to-accent-pink/20 z-10"></div>
      
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl z-10"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="text-center z-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          {/* <span className="font-mono text-accent-purple text-sm tracking-wider">CREATIVE DEVELOPER</span> */}
        </motion.div>
        
        <motion.h1
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block">Chhatarapati</span>
          <span className="block gradient-text">Chandril</span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="font-mono text-accent-purple text-sm tracking-wider justify-center">
            CRAFTING DIGITAL EXPERIENCES THAT PUSH BOUNDARIES AND CHALLENGE CONVENTIONS. <br></br>
            WHERE INNOVATION MEETS ARTISTRY.
          </span>
        </motion.p>
        
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-accent-purple to-accent-pink px-8 py-4 rounded-full font-semibold glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
          <motion.button
            className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-accent-purple transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.querySelector('#contact') as HTMLElement;
              if (contactSection) {
                const scrollPosition = document.documentElement.scrollHeight - window.innerHeight;
                window.scrollTo({
                  top: scrollPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
        
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={scrollToProjects}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-2xl text-accent-purple" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Floating 3D Elements */}
      {/* <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent-blue rounded-full z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent-pink rounded-full z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent-purple rounded-full z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 4 }}
      /> */}
    </section>
  );
}
