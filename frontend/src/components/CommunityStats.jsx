import { Users, Briefcase, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/10 text-center"
  >
    <div className="flex justify-center mb-4">
      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
        {icon}
      </div>
    </div>
    <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
      {value}
    </p>
    <p className="text-gray-700 dark:text-gray-300">{label}</p>
  </motion.div>
);

export default function CommunityStats() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Community Growth
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<Users className="w-6 h-6 text-white" />}
            value="150+"
            label="Members"
            delay={0.2}
          />
          <StatCard
            icon={<Briefcase className="w-6 h-6 text-white" />}
            value="12+"
            label="Partner Companies"
            delay={0.3}
          />
          <StatCard
            icon={<Code className="w-6 h-6 text-white" />}
            value="30+"
            label="Open Source Projects"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
