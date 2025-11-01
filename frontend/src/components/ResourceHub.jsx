import { FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

export default function ResourceHub() {
  const { content } = useContent();
  const navigate = useNavigate();

  const description =
    content?.resources?.description ||
    'Access our growing library of templates, guides, and tools to accelerate your projects. Everything from pitch decks to technical white papers.';

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 overflow-hidden">
      {/* === Background Imagery === */}
      <motion.img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
        alt="Team collaboration"
        className="absolute top-0 left-0 w-1/2 h-full object-cover object-left opacity-10 dark:opacity-15 rounded-r-[40px] pointer-events-none"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      <motion.img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
        alt="Creative workspace"
        className="absolute bottom-0 right-0 w-1/2 h-full object-cover object-right opacity-10 dark:opacity-15 rounded-l-[40px] pointer-events-none"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      {/* === Animated Orb === */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-full blur-3xl opacity-25 dark:opacity-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      {/* === Subtle Gradient Wave === */}
      <motion.svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,192L80,213.3C160,235,320,277,480,256C640,235,800,149,960,144C1120,139,1280,213,1360,250.7L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </motion.svg>

      {/* === Main Content === */}
      <div className="relative max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow Outline */}
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-purple-900 dark:via-pink-900 dark:to-purple-950 rounded-3xl blur opacity-20" />

          {/* Card */}
          <div className="relative bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/30 dark:border-white/10">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-6 shadow-md">
                <FolderOpen className="w-8 h-8 text-blue-600 dark:text-blue-300" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Resource Hub
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {description}
              </p>

              <motion.button
                onClick={() => navigate('/resources')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                <FolderOpen className="w-5 h-5" />
                Explore Resources
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
