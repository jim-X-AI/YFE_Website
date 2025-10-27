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
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Gradient glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-purple-900 dark:via-pink-900 dark:to-purple-950 rounded-3xl blur opacity-20" />

          <div className="relative bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/30 dark:border-white/10">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
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
