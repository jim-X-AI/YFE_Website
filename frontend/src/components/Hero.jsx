import { useContent } from '../context/ContentContext';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Particles from './Particles';

export default function Hero() {
  const { content } = useContent();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-visible px-4 sm:px-6">
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-full text-purple-700 text-sm font-medium mb-6 sm:mb-8 border border-white/30"
        >
          <Sparkles className="w-4 h-4" />
          <span>Your Favorite Engineer Community</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 sm:mb-8 leading-[1.2]"
        >
          {content?.vision?.title || "Shaping Tomorrow's Digital Frontier"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-100 sm:text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-xl mx-auto"
        >
          {content?.vision?.text || "We are a visionary community of innovators..."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://forms.gle/w6Bnr1sj5ypsA5je9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 group"
          >
            Join Our Community
            <ArrowRight className="w-4 h-4 ml-2 inline opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
          </a>

          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/80 text-purple-700 rounded-full font-semibold text-base sm:text-lg hover:bg-white/90 transition duration-300 shadow-lg border border-white/30">
            Learn More
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 10] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
