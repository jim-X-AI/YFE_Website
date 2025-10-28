import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Your Favourite Engineer
          </h3>

          <p className="text-gray-300 max-w-2xl mb-8 leading-relaxed">
            Empowering the next generation of African engineers through collaboration, innovation, and community.
          </p>

          {/* Social Links */}
          <div className="flex gap-5">
            <a
              href="https://github.com/YourFavouriteEngineer"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 transition duration-300"
            >
              <Github className="w-5 h-5 text-white" />
            </a>

            <a
              href="https://www.linkedin.com/company/your-favourite-engineer/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 transition duration-300"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400"
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Your Favourite Engineer</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
