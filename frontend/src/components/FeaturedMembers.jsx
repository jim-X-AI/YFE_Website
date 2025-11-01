import { motion } from "framer-motion";

const founder = {
  name: "Princess Ayomide Bamigboye",
  role: "Founder & Co-Head, Embedded Systems & Robotics",
  avatar: "https://i.ibb.co/F4cVyfyH/img3.jpg",
  company: "YFE",
  profileLink: "https://www.linkedin.com/in/princess-bamigboye",
};

export default function MeetOurFounder() {
  return (
    <section className="relative py-20 px-4 sm:px-6 bg-gray-950 text-white overflow-hidden">
      {/* Animated Gradient Orb */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Subtle Gradient Wave at bottom */}
      <motion.svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full opacity-20 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <defs>
          <linearGradient id="waveGradientFounder" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#6b21a8" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradientFounder)"
          d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,165.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </motion.svg>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Meet Our Founder
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-10 max-w-xl mx-auto shadow-2xl hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500/40 shadow-lg mb-6">
              <img
                src={founder.avatar}
                alt={founder.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {founder.name}
            </h3>
            <p className="text-purple-300 text-sm sm:text-base mb-2">{founder.role}</p>
            <p className="text-gray-400 text-sm mb-6">{founder.company}</p>

            <a
              href={founder.profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full text-sm font-medium text-white shadow-md transition-all duration-300"
            >
              View LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
