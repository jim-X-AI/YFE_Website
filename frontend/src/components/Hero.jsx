import { useContent } from '../context/ContentContext';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Particles from './Particles';

export default function Hero() {
  const { content } = useContent();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Particles />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-purple-700 font-medium mb-8 border border-white/30"
        >
          <Sparkles className="w-4 h-4" />
          <span>Your Favorite Engineer Community</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 leading-tight"
        >
          {content?.vision?.title || "Shaping Tomorrow's Digital Frontier"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          {content?.vision?.text || "We are a visionary community of innovators..."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://forms.gle/w6Bnr1sj5ypsA5je9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 group"
          >
            Join Our Community
            <ArrowRight className="w-5 h-5 ml-2 inline opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
          </a>

          <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-purple-700 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-lg border border-white/30">
            Learn More
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-1"
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
