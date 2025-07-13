import { motion } from 'framer-motion';

export default function FuturisticButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden px-6 py-3 rounded-lg font-medium ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background layers */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-100 hover:opacity-90 transition-opacity duration-300"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>

      {/* Holographic effect */}
      <span className="absolute inset-0 overflow-hidden">
        <span className="absolute -inset-8 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-500 transform rotate-30"></span>
      </span>

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Glow effect */}
      <span className="absolute inset-0 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 shadow-blue-400/30 hover:shadow-purple-500/40"></span>
    </motion.button>
  );
}