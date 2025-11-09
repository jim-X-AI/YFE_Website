import { useContent } from '../context/ContentContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Particles from './Particles';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const { content } = useContent();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950 transition-colors duration-300 pt-20 md:pt-24">
      <Particles />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-fuchsia-900/30 to-pink-900/30 mix-blend-overlay" />

      <div className="relative z-10 text-center px-6 sm:px-8 max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 md:mb-8 leading-tight drop-shadow-lg"
        >
          {content?.vision?.title || "Shaping Tomorrow's Digital Frontier"}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-gray-300 dark:text-gray-200 mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          {content?.vision?.text ||
            "We are a visionary community of innovators building technology that empowers Africa’s digital future."}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://forms.gle/w6Bnr1sj5ypsA5je9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 group w-full sm:w-auto text-center"
          >
            Join Our Community
            <ArrowRight className="w-5 h-5 ml-2 inline opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={() => navigate('/about')}
            className="px-7 sm:px-8 py-3.5 sm:py-4 bg-gray-800/80 dark:bg-gray-900/70 backdrop-blur-md text-purple-300 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-700/80 transition-all duration-300 shadow-lg border border-white/20 w-full sm:w-auto"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-7 h-11 border-2 border-white/30 rounded-full flex justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 15] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
