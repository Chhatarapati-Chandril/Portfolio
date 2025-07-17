import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Learning Dashboard',
      category: 'web',
      description: 'Personal project tracking my coding journey with interactive progress charts and skill development.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['accent-purple', 'accent-pink', 'accent-blue'],
    },
    {
      id: 2,
      title: 'Study Companion',
      category: 'mobile',
      description: 'Simple mobile-first app design for organizing study materials and tracking learning goals.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['accent-pink', 'accent-blue'],
    },
    {
      id: 3,
      title: 'CSS Art Gallery',
      category: '3d',
      description: 'Creative experiments with CSS animations and 3D transforms to explore visual design possibilities.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['accent-blue', 'accent-purple'],
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'web',
      description: 'This very website! Built with React and modern web technologies as a learning project.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['accent-purple', 'accent-pink'],
    },
    {
      id: 5,
      title: 'Recipe Finder',
      category: 'web',
      description: 'Practice project using APIs to search and display recipes with responsive design principles.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['accent-pink', 'accent-blue'],
    },
    {
      id: 6,
      title: 'Code Challenges',
      category: '3d',
      description: 'Collection of creative coding exercises and algorithm practice visualizations.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['accent-blue', 'accent-purple'],
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [projects.length]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 bg-dark-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my learning projects and creative experiments as I develop my skills in web development.
          </p>
        </motion.div>
        
        {/* Project Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              {projects.length > 0 && (
                <motion.div
                  key={currentIndex}
                  className="bg-dark rounded-3xl overflow-hidden glow-effect"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="md:flex">
                    {/* Project Image */}
                    <div className="md:w-1/2 relative overflow-hidden">
                      <motion.img 
                        src={projects[currentIndex].image} 
                        alt={projects[currentIndex].description}
                        className="w-full h-80 md:h-96 object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-transparent to-transparent" />
                    </div>
                    
                    {/* Project Details */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-xs bg-accent-purple/20 text-accent-purple px-3 py-1 rounded-full uppercase tracking-wider">
                            {projects[currentIndex].category}
                          </span>
                          <span className="text-sm text-gray-400">
                            {currentIndex + 1} / {projects.length}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-black mb-4 gradient-text">
                          {projects[currentIndex].title}
                        </h3>
                        
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                          {projects[currentIndex].description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-3">
                            {projects[currentIndex].colors.map((color, i) => (
                              <span 
                                key={i}
                                className="w-4 h-4 rounded-full"
                                style={{ 
                                  background: color === 'accent-purple' ? 'hsl(256, 87%, 66%)' : 
                                             color === 'accent-pink' ? 'hsl(326, 78%, 60%)' : 
                                             'hsl(244, 78%, 63%)'
                                }}
                              />
                            ))}
                          </div>
                          
                          <div className="flex space-x-4">
                            <motion.a
                              href="#"
                              className="flex items-center space-x-2 px-4 py-2 bg-accent-purple/20 rounded-full hover:bg-accent-purple transition-colors text-sm"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github size={16} />
                              <span>Code</span>
                            </motion.a>
                            <motion.a
                              href="#"
                              className="flex items-center space-x-2 px-4 py-2 bg-accent-blue/20 rounded-full hover:bg-accent-blue transition-colors text-sm"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink size={16} />
                              <span>Live</span>
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              onClick={prevProject}
              className="p-3 bg-dark rounded-full hover:bg-accent-purple/20 transition-colors border border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-accent-purple' : 'bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextProject}
              className="p-3 bg-dark rounded-full hover:bg-accent-purple/20 transition-colors border border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}