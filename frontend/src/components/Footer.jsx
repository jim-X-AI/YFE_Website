import { Sparkles, Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white dark:bg-black dark:text-white transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-blue-400 dark:text-purple-300" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Favorite Engineer Community
            </span>
          </div>

          <p className="text-gray-300 dark:text-gray-400 max-w-2xl mb-8">
            Bridging the gap between innovative minds and transformative companies to build the future together.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20 transition"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20 transition"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20 transition"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </motion.div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm dark:text-gray-500">
          <p>© {new Date().getFullYear()} YFE Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
