import { FolderOpen, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useContent } from "../context/ContentContext";

export default function ResourceHub() {
  const { content } = useContent();
  const navigate = useNavigate();

  // ✅ Condensed, clearer copy — same meaning, less wordy
  const description =
    content?.resources?.description ||
    "Explore our curated library of templates, guides, and tools to help you build faster and smarter.";

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden transition-colors duration-300">
      {/* === Floating Gradient Orbs (kept but softened for elegance) === */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-[120px] opacity-15"
        animate={{ y: [0, 30, 0], opacity: [0.12, 0.22, 0.12] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-[120px] opacity-10"
        animate={{ y: [0, -30, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 12, delay: 1 }}
      />

      {/* === Subtle Wave Glow for depth === */}
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
          {/* === Glow Outline === */}
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-3xl blur opacity-15" />

          {/* === Frosted Card === */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl text-center">
            <div className="flex flex-col items-center">
              {/* === Icon Enhancement: subtle sparkle for motion energy === */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-md opacity-40" />
                <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-lg relative z-10">
                  <FolderOpen className="w-8 h-8 text-white" />
                </div>
                {/* Decorative accent icon (adds sophistication) */}
{/*                 <Sparkles className="absolute -top-3 -right-3 w-5 h-5 text-pink-400 animate-pulse opacity-80" /> */}
              </div>

              {/* === Title === */}
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                Resource Hub
              </h2>

              {/* === Divider (visual rhythm improvement) === */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mb-6 opacity-60" />

              {/* === Description (condensed, elegant) === */}
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {description}
              </p>

              {/* === CTA Button === */}
              <motion.button
                onClick={() => navigate("/resources")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                Explore Resources
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
