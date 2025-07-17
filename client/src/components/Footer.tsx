import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 bg-dark-light border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-2xl font-bold gradient-text mb-2">CC</div>
            <p className="text-gray-400">© 2024 Chhatarapati Chandril. All rights reserved.</p>
          </motion.div>
          
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-2">Crafted with passion and precision</p>
            <p className="font-mono text-sm text-accent-purple">Made with ❤️ using modern web technologies</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
