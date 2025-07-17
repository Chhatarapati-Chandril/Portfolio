import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';
import PixelTransition from './PixelTransition';

export default function About() {
  const scrollY = useParallax();

  const skills = [
    { name: 'React.js', color: 'accent-purple' },
    { name: 'TypeScript', color: 'accent-pink' },
    { name: 'Node.js', color: 'accent-purple' },
    { name: 'Express.js', color: 'accent-blue' },
  ];

  return (
    <section id="about" className="py-36 relative my-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-8">
              About <span className="gradient-text">Me</span>
            </h2> 
            

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm Chhatarapati Chandril, an enthusiastic aspiring developer passionate about creating digital experiences that combine technology with creative design. I'm dedicated to learning and building my skills in modern web development.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Currently focused on mastering web technologies and exploring creative coding possibilities, I'm excited to start my journey in bringing innovative ideas to life through clean code and thoughtful design.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  className={`bg-${skill.color}/20 text-${skill.color} px-4 py-2 rounded-full text-sm font-medium`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
            
            <motion.button
              // className="bg-gradient-to-r from-accent-purple to-accent-pink text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300"
              // whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)" }}
              // whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-purple to-accent-pink px-8 py-4 rounded-full font-semibold glow-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Create a temporary link to download resume
                const link = document.createElement('a');
                link.href = 'Chhatarapati_Chandril_Resume.pdf'; 
                link.download = 'Chhatarapati_Chandril_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </motion.button>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-accent-purple text-sm tracking-wider justify-evenly px-32">Hover over my image</span>

            <PixelTransition
              firstContent={
                <img
                  src="https://images.unsplash.com/photo-1752743713532-dffb19471fc9?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional headshot of Chhatarapati Chandril" 
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111"
                  }}
                >
                  <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>It's me!</p>
                  
                </div>
                
              }
              gridSize={12}
              pixelColor='#ffffff'
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            {/* <img 
              src="https://images.unsplash.com/photo-1752743713532-dffb19471fc9?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Professional headshot of Chhatarapati Chandril" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
            /> */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent-purple to-accent-pink rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-blue/30 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
