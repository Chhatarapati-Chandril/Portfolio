import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import ScrollVelocity from './ScrollVelocity';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'chandril6a@gmail.com',
      href: 'mailto:chandril6a@gmail.com',
      color: 'accent-purple',
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'fa-instagram', href: 'https://www.instagram.com/__chandril__/', target: '_blank' },
    { name: 'LinkedIn', icon: 'fa-linkedin', href: 'https://www.linkedin.com/in/chandril/', target: '_blank' },
    { name: 'GitHub', icon: 'fa-github', href: 'https://github.com/Chhatarapati-Chandril', target: '_blank' },
    { name: 'Whatsapp', icon: 'fa-whatsapp', href: 'https://wa.me/919466135606', target: '_blank' },
    { name: 'Telegram', icon: 'fa-telegram', href: 'https://telegram.me/CChandril', target: '_blank' }
  ];

  return (
    <section id="contact" className=" relative overflow-hidden">
      <ScrollVelocity
        texts={["Let's Connect - ", "Text Me ! "]}
        velocity={70}
        className="custom-scroll-text"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-10">
            Ready to bring your next project to life? Let's discuss how we can create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Connect with me</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 bg-${item.color}/20 rounded-full flex items-center justify-center`}>
                    <item.icon className={`text-${item.color}`} size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-300">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.target}
                  className="w-12 h-12 bg-dark-light rounded-full flex items-center justify-center hover:bg-accent-purple transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`fab ${social.icon}`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Static Form Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  placeholder="Your Name"
                  className="bg-dark-light border border-gray-700 focus:border-accent-purple text-white px-4 py-3 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-dark-light border border-gray-700 focus:border-accent-purple text-white px-4 py-3 rounded-md"
                />
              </div>
              <input
                placeholder="Subject"
                className="bg-dark-light border border-gray-700 focus:border-accent-purple text-white px-4 py-3 w-full rounded-md"
              />
              <textarea
                rows={6}
                placeholder="Your Message"
                className="bg-dark-light border border-gray-700 focus:border-accent-purple text-white px-4 py-3 w-full rounded-md resize-none"
              />
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-accent-purple to-accent-pink text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-accent-purple/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
