import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Skills() {
  const [animateSkills, setAnimateSkills] = useState(false);

  const skills = [
    { name: 'Frontend Development', level: 65, gradient: 'linear-gradient(to right, hsl(256, 87%, 66%), hsl(326, 78%, 60%))' },
    { name: '3D & Animation', level: 45, gradient: 'linear-gradient(to right, hsl(326, 78%, 60%), hsl(244, 78%, 63%))' },
    { name: 'Backend Development', level: 40, gradient: 'linear-gradient(to right, hsl(244, 78%, 63%), hsl(256, 87%, 66%))' },
    { name: 'UI/UX Design', level: 55, gradient: 'linear-gradient(to right, hsl(256, 87%, 66%), hsl(326, 78%, 60%))' },
  ];

  // const timeline = [
  //   {
  //     title: 'Senior Creative Developer',
  //     company: 'Digital Nexus',
  //     period: '2022 - Present',
  //     color: 'accent-purple',
  //     description: 'Leading innovative web experiences at Digital Nexus, specializing in immersive 3D interfaces and interactive installations.',
  //   },
  //   {
  //     title: 'Frontend Architect',
  //     company: 'TechForward',
  //     period: '2020 - 2022',
  //     color: 'accent-pink',
  //     description: 'Architected scalable frontend solutions at TechForward, focusing on performance optimization and user experience.',
  //   },
  //   {
  //     title: 'Full Stack Developer',
  //     company: 'StartupHub',
  //     period: '2018 - 2020',
  //     color: 'accent-blue',
  //     description: 'Developed end-to-end solutions at StartupHub, working with cutting-edge technologies and agile methodologies.',
  //   },
  // ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateSkills(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A diverse toolkit for bringing creative visions to life through code and design.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-accent-purple font-mono">{skill.level}%</span>
                  </div>
                  <div className="bg-gray-800 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: skill.gradient }}
                      initial={{ width: 0 }}
                      animate={{ width: animateSkills ? `${skill.level}%` : 0 }}
                      transition={{ duration: 2, delay: index * 0.2, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* <h3 className="text-2xl font-bold mb-8">Experience Timeline</h3> */}
            {/* <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-4 h-4 bg-${item.color} rounded-full mt-2 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className={`text-${item.color} font-mono text-sm`}>{item.period}</p>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
