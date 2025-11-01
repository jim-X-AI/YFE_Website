import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Cpu,
  Code,
  Gamepad2,
  BarChart3,
  Shield,
  Car,
  Factory,
  Heart,
  ArrowRight,
  Atom,
  Brain,
  Palette,
  Code2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const timelineRef = useRef(null);
  const visionRef = useRef(null);
  const invitationRef = useRef(null);

  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });
  const visionInView = useInView(visionRef, { once: true, amount: 0.3 });
  const invitationInView = useInView(invitationRef, { once: true, amount: 0.3 });

  const timelineData = [
    {
      icon: Users,
      title: "The Beginning",
      description: "YFE started as a WhatsApp channel a simple space to share passion for hardware engineering.",
      year: "March 2025",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cpu,
      title: "Tuesday Chats",
      description: "Weekly deep-dives into embedded systems and hardware discussions became our signature space.",
      year: "April 2025",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Code,
      title: "Community Expansion",
      description: "We evolved into a full whatsApp community making interactions more engaging and inclusive.",
      year: "April 2025",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Factory,
      title: "Multi-Domain Growth",
      description: "Expanded to include all engineering domains creating a comprehensive tech community.",
      year: "Present",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const domains = [
    { icon: Cpu, name: "Machine Learning & AI", value: "AI/ML" },
    { icon: Atom, name: "Embedded Systems & Robotics", value: "Robotics" },
    { icon: Factory, name: "Industrial Automation", value: "IndAuto" },
    { icon: Code2, name: "Software Development", value: "Dev" },
    { icon: Shield, name: "Cybersecurity", value: "Cyber" },
    { icon: Brain, name: "Data Science", value: "Data" },
    { icon: Gamepad2, name: "Game Development", value: "Game" },
    { icon: Palette, name: "Product Design", value: "Design" },
    { icon: Car, name: "Automobiles & Mechatronics", value: "Auto" },
  ];

  const googleFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScuNV2sBKaday_BbaJDn2W_X1SFGub2CoPizzfCUt8QXJjnKQ/viewform";

  const joinCommunity = () => {
    window.open(googleFormLink, "_blank");
  };

  const headingMotion = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 } };
  const fadeInUp = (delay = 0) => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative background photos */}
      <img
        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2f8ad5e5f5f5a1a7c291b2a9b2c2c6a9"
        alt="tech texture"
        className="pointer-events-none select-none absolute -left-16 -top-16 sm:-left-20 sm:-top-16 md:left-[-80px] md:top-[-80px] w-32 h-32 sm:w-40 sm:h-40 md:w-[520px] md:h-[520px] object-cover rounded-full opacity-8 md:opacity-10 blur-3xl"
        loading="lazy"
        aria-hidden
      />
      <img
        src="https://images.unsplash.com/photo-1526378729897-8f4f0b5b2e25?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b24b90e9c3c3a8e1e6d6b9a8e3b5b6f"
        alt="collaboration texture"
        className="pointer-events-none select-none absolute right-[-12px] bottom-[-12px] sm:right-[-16px] sm:bottom-[-12px] md:bottom-[-60px] md:right-[-60px] w-28 h-28 sm:w-36 sm:h-36 md:w-[460px] md:h-[460px] object-cover rounded-full opacity-8 md:opacity-10 blur-3xl"
        loading="lazy"
        aria-hidden
      />

      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[320px] sm:w-[420px] md:w-[520px] h-[320px] sm:h-[420px] md:h-[520px] bg-purple-600/16 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite] -z-10" aria-hidden />
      <div className="absolute bottom-0 right-0 w-[280px] sm:w-[360px] md:w-[440px] h-[280px] sm:h-[360px] md:h-[440px] bg-blue-600/16 rounded-full blur-[120px] animate-[pulse_12s_ease-in-out_infinite] -z-10" aria-hidden />

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 {...headingMotion} className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight mb-4">
            Our Story
          </motion.h1>
          <motion.p {...fadeInUp(0.15)} className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            From a simple WhatsApp channel to a thriving community of passionate engineers. This is the story of Your Favorite Engineer.
          </motion.p>
          <img
            src="https://undraw.co/api/illustrations/illustration?color=6C5CE7&background=0&name=tech_team"
            alt="illustration of team collaborating"
            className="hidden md:block absolute right-4 top-10 w-40 h-40 sm:w-52 sm:h-52 pointer-events-none opacity-95"
            loading="lazy"
            aria-hidden
          />
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section ref={timelineRef} className="py-12 px-4 md:py-20 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp()} className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-3">
              Our Journey
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded" />
            <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Small steps. Big tools. Constant learning.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 shadow-md" aria-hidden />

            <div className="space-y-8 sm:space-y-10 md:space-y-16">
              {timelineData.map((item, idx) => {
                const Icon = item.icon;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isEven ? -16 : 16 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: idx * 0.12 }}
                    className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${isEven ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className={`w-full md:w-1/2 ${isEven ? "md:pr-6" : "md:pl-6"}`}>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-7 shadow-lg border border-white/8">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-r ${item.color}`}>
                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-base md:text-xl font-semibold text-white">{item.title}</h3>
                            <span className="text-xs md:text-sm text-gray-400">{item.year}</span>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base md:text-base text-gray-300 leading-relaxed">{item.description}</p>

                        <img
                          src={
                            idx === 0
                              ? "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
                              : idx === 1
                              ? "https://images.unsplash.com/photo-1551033406-611cf9a2b1b5?q=80&w=800&auto=format&fit=crop"
                              : idx === 2
                              ? "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
                              : "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop"
                          }
                          alt={`${item.title} visual`}
                          className="hidden md:block mt-4 rounded-lg w-[180px] sm:w-[220px] h-[100px] sm:h-[120px] object-cover shadow-inner border border-white/6"
                          loading="lazy"
                          aria-hidden
                        />
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-24">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r ${item.color} border-3 sm:border-4 border-gray-900 shadow-lg`} aria-hidden />
                    </div>
                    <div className="hidden md:block md:w-1/2 md:opacity-0" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINS SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp(0.05)} className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-3">Our Domains</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">From embedded systems to datascience, we've created a home for every type of engineer, spaces to learn, build, and ship products.</p>
          </motion.div>

          <div className="mb-6 md:mb-10 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1508385082359-fc44d1e97bf0?q=80&w=1600&auto=format&fit=crop"
              alt="engineers collage"
              className="w-full h-28 sm:h-36 md:h-44 object-cover opacity-30"
              loading="lazy"
              aria-hidden
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {domains.map((domain, idx) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  viewport={{ once: true }}
                  onClick={() => window.open(googleFormLink, "_blank")}
                  className="cursor-pointer bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center shadow-md border border-white/8 hover:bg-white/7 transition"
                >
                  <div className="mx-auto mb-3 inline-flex items-center justify-center rounded-lg p-3 bg-gradient-to-r from-blue-800/20 to-purple-800/15 border border-white/6">
                    <Icon className="w-6 h-6 text-blue-300" />
                  </div>

                  <h3 className="font-semibold text-white text-sm md:text-base">{domain.name}</h3>
                  <p className="text-gray-400 text-xs mt-2">{domain.name.split(" & ")[0]} • {domain.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section ref={visionRef} className="py-12 md:py-20 px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-2xl border border-white/8 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" aria-hidden>
              <defs>
                <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid2)" />
            </svg>

            <div className="relative text-center">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 mx-auto mb-4" />
              <motion.h3 {...fadeInUp(0.05)} className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-3 leading-tight">
                "We believe you don't wait for magic. You make it happen."
              </motion.h3>
              <motion.p {...fadeInUp(0.1)} className="text-sm sm:text-base md:text-lg text-gray-300 italic max-w-3xl mx-auto">
                This philosophy drove us to build what couldn't be found.
              </motion.p>

              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
                alt="team building"
                className="hidden md:block mt-6 mx-auto rounded-lg w-full max-w-[520px] h-[200px] object-cover shadow-md border border-white/6"
                loading="lazy"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      {/* INVITATION / CTA SECTION */}
      <section ref={invitationRef} className="py-12 md:py-20 px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 {...fadeInUp(0.05)} className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Join the Movement
          </motion.h2>
          <motion.p {...fadeInUp(0.12)} className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Be part of YFE's growing story. Connect with passionate engineers share knowledge and build the future together.
          </motion.p>

          <motion.button
            onClick={joinCommunity}
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition text-white text-sm sm:text-base md:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
