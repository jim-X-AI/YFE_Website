import { Users, Cpu, Atom, Brain, Code2, Palette, Car, Shield, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

const StatCard = ({ icon, value, label, delay, onClick }) => (
  <motion.div
    onClick={onClick}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/10 text-center max-w-sm w-full cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10"
  >
    <div className="flex justify-center mb-4">
      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md">
        {icon}
      </div>
    </div>
    <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
      {value}
    </p>
    <p className="text-gray-700 dark:text-gray-300">{label}</p>
  </motion.div>
);

export default function CommunityStats() {
  const joinCommunity = () =>
    window.open("https://forms.gle/w6Bnr1sj5ypsA5je9", "_blank");

  const domains = [
    { icon: <Cpu className="w-6 h-6 text-white" />, value: "AI/ML", label: "Machine Learning & AI" },
    { icon: <Atom className="w-6 h-6 text-white" />, value: "Robotics", label: "Embedded Systems & Robotics" },
    { icon: <Code2 className="w-6 h-6 text-white" />, value: "Dev", label: "Software Development" },
    { icon: <Shield className="w-6 h-6 text-white" />, value: "Cyber", label: "Cybersecurity" },
    { icon: <Brain className="w-6 h-6 text-white" />, value: "Data", label: "Data Science" },
    { icon: <Gamepad2 className="w-6 h-6 text-white" />, value: "Game", label: "Game Development" },
    { icon: <Palette className="w-6 h-6 text-white" />, value: "Design", label: "Product Design" },
    { icon: <Car className="w-6 h-6 text-white" />, value: "Auto", label: "Automobiles & Mechatronics" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Explore Our Domains
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Join any domain of interest and become part of the fast-growing YFE community of innovators and builders.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Member Stat */}
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
