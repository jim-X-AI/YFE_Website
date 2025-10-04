import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MessageCircle,
  Users,
  Cpu,
  Code,
  Gamepad,
  BarChart3,
  Shield,
  Car,
  Factory,
  Sparkles,
  ArrowRight,
  Heart
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const visionRef = useRef(null);
  const invitationRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });
  const visionInView = useInView(visionRef, { once: true, amount: 0.3 });
  const invitationInView = useInView(invitationRef, { once: true, amount: 0.3 });

  const timelineData = [
    {
      icon: MessageCircle,
      title: "The Beginning",
      description: "YFE started as a WhatsApp channel - a simple space to share passion for hardware engineering",
      year: "2023",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "The Search",
      description: "We searched everywhere for like-minded engineers, reaching out across platforms to build connections",
      year: "2023",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Tuesday Chats Born",
      description: "Weekly deep-dives into embedded systems and hardware discussions became our signature event",
      year: "2024",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Code,
      title: "Community Expansion",
      description: "We evolved into a full WhatsApp community, making interactions more engaging and inclusive",
      year: "2024",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Sparkles,
      title: "Multi-Domain Growth",
      description: "Expanded to include all engineering domains, creating a comprehensive tech community",
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
    window.open('https://chat.whatsapp.com/yfe-community', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* Floating Glow Backgrounds */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px] animate-pulse delay-1000" />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-full text-purple-300 font-medium mb-8 border border-white/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>The Origin Story</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8"
          >
            Our Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            From a simple WhatsApp channel to a thriving community of passionate engineers.
            This is the story of Your Favourite Engineer.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center mb-16 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'} mb-6 md:mb-0`}>
                    <div className="bg-white/5 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 bg-gradient-to-r ${item.color} rounded-xl`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <span className="text-sm text-gray-400">{item.year}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex relative z-10">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-gray-900 shadow-lg`}></div>
                  </div>

                  <div className="md:w-1/2 md:opacity-0"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
              Our Domains
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From embedded systems to data science, we've created a home for every type of engineer
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                  className="bg-white/5 dark:bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg border border-white/10"
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${domain.color}`} />
                  <h3 className="font-semibold text-white text-sm">{domain.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={visionRef} className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10">
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 leading-tight">
                "We believe you don't wait for magic. You make it happen."
              </h3>
              <p className="text-lg text-gray-300 italic">
                This philosophy drove us to build what couldn't be found
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section ref={invitationRef} className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={invitationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6"
          >
            Join the Movement
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={invitationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Be part of YFE's growing story. Connect with passionate engineers, share knowledge, and build the future together.
          </motion.p>

          <motion.button
            onClick={joinCommunity}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="w-5 h-5" />
            Join YFE Community
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default About;
