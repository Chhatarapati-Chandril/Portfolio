import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Chhatarapati's dedication to learning and growth is inspiring. Their fresh perspective and enthusiasm for modern web development brings energy to every project.",
      author: "Priya Sharma",
      role: "Senior Developer, WebCraft",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      id: 2,
      quote: "Working with Chandril on study projects has been amazing. They show incredible promise and have a natural eye for clean, intuitive design.",
      author: "Rajesh Kumar",
      role: "Coding Mentor, DevAcademy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      id: 3,
      quote: "Their passion for coding and willingness to tackle challenging concepts is remarkable. Chandril consistently delivers thoughtful solutions to complex problems.",
      author: "Anita Desai",
      role: "Team Lead, TechStart",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      id: 4,
      quote: "Chhatarapati brings creativity and technical curiosity to every learning project. Their growth mindset and attention to detail make them a joy to collaborate with.",
      author: "Vikram Singh",
      role: "UI/UX Designer, PixelStudio",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-dark-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-6">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Feedback from mentors, collaborators, and fellow developers who've worked with me.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="text-center w-full"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="mb-8">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Quote className="text-4xl text-accent-purple mb-6 mx-auto" />
                  </motion.div>
                  <div className="min-h-[120px] flex items-center justify-center">
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                      "{testimonials[currentIndex].quote}"
                    </p>
                  </div>
                </div>
                <div>
                  <motion.img 
                    src={testimonials[currentIndex].image} 
                    alt={`Professional headshot of ${testimonials[currentIndex].author}`}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-accent-purple/30" 
                    whileHover={{ scale: 1.1, borderColor: "rgba(139, 92, 246, 0.8)" }}
                    transition={{ duration: 0.3 }}
                  />
                  <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].author}</h4>
                  <p className="text-accent-purple font-medium">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-12">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 bg-dark rounded-full hover:bg-accent-purple/20 transition-colors border border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-accent-purple' : 'bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              className="p-3 bg-dark rounded-full hover:bg-accent-purple/20 transition-colors border border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-8 max-w-xs mx-auto">
            <div className="w-full bg-gray-700 rounded-full h-1">
              <motion.div
                className="bg-gradient-to-r from-accent-purple to-accent-pink h-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-center text-sm text-gray-400 mt-2">
              {currentIndex + 1} of {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}