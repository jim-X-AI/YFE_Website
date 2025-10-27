import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Cpu,
  Code,
  Gamepad,
  BarChart3,
  Shield,
  Car,
  Factory,
  Heart,
  ArrowRight
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const timelineRef = useRef(null);
  const visionRef = useRef(null);
  const invitationRef = useRef(null);

  const timelineInView = useInView(timelineRef, { amount: 0.2 });
  const visionInView = useInView(visionRef, { amount: 0.3 });
  const invitationInView = useInView(invitationRef, { amount: 0.3 });

  // Cinematic motion based on scroll
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.4]);

  const timelineData = [
    {
      icon: Users,
      title: "The Beginning",
      description:
        "YFE started as a WhatsApp channel - a simple space to share passion for hardware engineering",
      year: "March-2025",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Tuesday Chats Born",
      description:
        "Weekly deep-dives into embedded systems and hardware discussions became our signature event",
      year: "April-2025",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Code,
      title: "Community Expansion",
      description:
        "We evolved into a full WhatsApp community, making interactions more engaging and inclusive",
      year: "April-2025",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Factory,
      title: "Multi-Domain Growth",
      description:
        "Expanded to include all engineering domains, creating a comprehensive tech community",
      year: "Present",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const domains = [
    { icon: Cpu, name: "Embedded Systems", color: "text-blue-400" },
    { icon: Code, name: "Web & Software Dev", color: "text-purple-400" },
    { icon: Gamepad, name: "Game Development", color: "text-green-400" },
    { icon: BarChart3, name: "Data Science", color: "text-orange-400" },
    { icon: Shield, name: "Cybersecurity", color: "text-red-400" },
    { icon: Car, name: "Automotive Tech", color: "text-cyan-400" },
    { icon: Factory, name: "Industrial Automation", color: "text-indigo-400" }
  ];

  const joinCommunity = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScuNV2sBKaday_BbaJDn2W_X1SFGub2CoPizzfCUt8QXJjnKQ/viewform",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <Navbar />

      {/* Floating Ambient Glows */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px]"
        style={{ y: useTransform(scrollY, [0, 400], [0, -80]) }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[140px]"
        style={{ y: useTransform(scrollY, [0, 400], [0, 60]) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 pt-20 md:pt-28 overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Our Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-2xl md:max-w-3xl mx-auto"
          >
            From a WhatsApp channel to a movement of engineers reshaping Africa’s
            tech landscape.
          </motion.p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-20 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Our Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col gap-12 max-w-3xl md:max-w-6xl mx-auto">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-5`}
                />
                <div className="relative flex items-start gap-4">
                  <div
                    className={`p-3 bg-gradient-to-r ${item.color} rounded-xl`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-400">{item.year}</span>
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Our Domains
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            Every field of engineering — united by curiosity, built with purpose.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-6 text-center shadow-lg border border-white/10 backdrop-blur-lg"
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${domain.color}`} />
                <h3 className="font-semibold text-white text-sm md:text-base">
                  {domain.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Vision Section */}
      <section ref={visionRef} className="py-20 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={visionInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 text-center"
        >
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 leading-tight">
            “We believe you don’t wait for magic — you make it happen.”
          </h3>
          <p className="text-lg text-gray-300 italic">
            This belief drives everything we build.
          </p>
        </motion.div>
      </section>

      {/* Invitation Section */}
      <section ref={invitationRef} className="py-20 px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={invitationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6"
        >
          Join the Movement
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={invitationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          Be part of YFE’s story. Build, connect, and shape Africa’s engineering
          revolution.
        </motion.p>

        <motion.button
          onClick={joinCommunity}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Users className="w-5 h-5" />
          Join YFE
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </section>

      <Footer />
    </div>
  );
};

export default About;
