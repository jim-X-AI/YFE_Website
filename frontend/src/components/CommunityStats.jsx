import {
  Users,
  Cpu,
  Atom,
  Brain,
  Code2,
  Palette,
  Car,
  Shield,
  Gamepad2,
  Factory,
} from "lucide-react";
import { motion } from "framer-motion";

const StatCard = ({ icon, value, label, delay, onClick }) => (
  <motion.div
    onClick={onClick}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 text-center w-full max-w-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/10"
  >
    {/* Subtle Glow Border */}
    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 opacity-20 blur-lg pointer-events-none" />

    <div className="relative flex flex-col items-center z-10">
      <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg mb-4">
        {icon}
      </div>
      <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
        {value}
      </p>
      <p className="text-gray-300 text-sm sm:text-base">{label}</p>
    </div>
  </motion.div>
);

export default function CommunityStats() {
  const joinCommunity = () =>
    window.open("https://forms.gle/w6Bnr1sj5ypsA5je9", "_blank");

  const domains = [
    { icon: <Cpu className="w-6 h-6 text-white" />, value: "AI/ML", label: "Machine Learning & AI" },
    { icon: <Atom className="w-6 h-6 text-white" />, value: "Robotics", label: "Embedded Systems & Robotics" },
    { icon: <Factory className="w-6 h-6 text-white" />, value: "IndAuto", label: "Industrial Automation" },
    { icon: <Code2 className="w-6 h-6 text-white" />, value: "Dev", label: "Software Development" },
    { icon: <Shield className="w-6 h-6 text-white" />, value: "Cyber", label: "Cybersecurity" },
    { icon: <Brain className="w-6 h-6 text-white" />, value: "Data", label: "Data Science" },
    { icon: <Gamepad2 className="w-6 h-6 text-white" />, value: "Game", label: "Game Development" },
    { icon: <Palette className="w-6 h-6 text-white" />, value: "Design", label: "Product Design" },
    { icon: <Car className="w-6 h-6 text-white" />, value: "Auto", label: "Automobiles & Mechatronics" },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* === Gradient Orbs === */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-[120px] opacity-20"
        animate={{ y: [0, 30, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-[120px] opacity-15"
        animate={{ y: [0, -30, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 12, delay: 1 }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Explore Our Domains
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Join any domain of interest and become part of the fast-growing YFE community of innovators and builders.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Members Card */}
          <StatCard
            icon={<Users className="w-6 h-6 text-white" />}
            value="350+"
            label="Active Members"
            delay={0.1}
            onClick={joinCommunity}
          />

          {/* Domain Cards */}
          {domains.map((domain, index) => (
            <StatCard
              key={domain.value}
              icon={domain.icon}
              value={domain.value}
              label={domain.label}
              delay={0.2 + index * 0.1}
              onClick={joinCommunity}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
