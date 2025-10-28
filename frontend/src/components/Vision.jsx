import { Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import FuturisticButton from './FuturisticButton';
import { useNavigate } from 'react-router-dom';

export default function Vision() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-black dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Community First */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-3xl blur opacity-20" />
            <div className="relative bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 dark:border-white/10 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Community First</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Fostering a dynamic environment where young professionals can connect, collaborate, and cultivate
                essential skills, gaining the expertise and confidence to thrive in their careers and capitalize on global opportunities.
              </p>
              <div className="mt-6">
                <FuturisticButton
                  className="text-sm"
                  onClick={() => navigate('/executives')}
                >
                  Meet Our Executives
                </FuturisticButton>
              </div>
            </div>
          </motion.div>

          {/* Future-Focused */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-3xl blur opacity-20" />
            <div className="relative bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 dark:border-white/10 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Future-Focused</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower young professionals for global success, bridging the gap between talent and opportunity, and unlocking their potential in the ever-evolving labor market.
              </p>
              <div className="mt-6">
                <FuturisticButton className="text-sm">
                  Explore Technologies
                </FuturisticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
