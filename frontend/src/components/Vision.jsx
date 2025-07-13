import { Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import FuturisticButton from './FuturisticButton';

export default function Vision() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur opacity-20" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Community First</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Fostering a dynamic environment where young professionals can connect, collaborate, and cultivate
                essential skills, gaining the expertise and confidence to thrive in their careers and capitalize on global opportunities.
              </p>
              <div className="mt-6">
                <FuturisticButton className="text-sm">
                  Meet Our Members
                </FuturisticButton>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl blur opacity-20" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Future-Focused</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
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