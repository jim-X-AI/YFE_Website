import { motion, useInView } from "framer-motion";
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
  ArrowRight,
  Atom,
  Brain,
  Palette,
  Gamepad2,
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

  // --- Concise timeline copy (kept structure & years identical) ---
  const timelineData = [
    {
      icon: Users,
      title: "The Beginning",
      description:
        "A humble WhatsApp channel where hardware minds met and shared ideas.",
      year: "March 2025",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cpu,
      title: "Tuesday Chats",
      description:
        "Weekly deep-dives into embedded systems became our signature space.",
      year: "April 2025",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Code,
      title: "Community Expansion",
      description:
        "We grew into a full community—more voices, more collaboration.",
      year: "April 2025",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Factory,
      title: "Multi-Domain Growth",
      description:
        "Now covering many engineering domains — a full-stack maker community.",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* Subtle photographic & vector accents — positioned but non-intrusive */}
      {/* Top-left tech photo (blurred, very low opacity) — adds premium texture */}
      <img
        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2f8ad5e5f5f5a1a7c291b2a9b2c2c6a9"
        alt="tech texture"
        className="pointer-events-none select-none absolute top-[-80px] left-[-80px] w-[520px] h-[520px] object-cover rounded-full opacity-10 blur-3xl"
        loading="lazy"
        aria-hidden
      />
      {/* Bottom-right lifestyle photo (blurred) */}
      <img
        src="https://images.unsplash.com/photo-1526378729897-8f4f0b5b2e25?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b24b90e9c3c3a8e1e6d6b9a8e3b5b6f"
        alt="collaboration texture"
        className="pointer-events-none select-none absolute bottom-[-60px] right-[-60px] w-[460px] h-[460px] object-cover rounded-full opacity-10 blur-3xl"
        loading="lazy"
        aria-hidden
      />

      {/* Background Glows (kept as-is, but slightly reduced animation intensity for premium feel) */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-600/18 rounded-full blur-[140px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/18 rounded-full blur-[140px] animate-[pulse_10s_ease-in-out_infinite] delay-1000" />

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-20 md:pt-28">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
          >
            Our Story
          </motion.h1>

          {/* Shorter, punchier hero subtext */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            From a WhatsApp spark to a thriving, multi-domain engineering community.
            We build, learn, and ship—together.
          </motion.p>

          {/* Decorative illustrative vector on hero right — adds premium visual balance.
              It's positioned absolutely so it doesn't change layout hierarchy. */}
{/*           <img */}
{/*             src="https://undraw.co/api/illustrations/illustration?color=6C5CE7&background=0&name=tech_team" */}
{/*             // NOTE: replace with a valid unDraw/illustration endpoint or static file in production */}
{/*             alt="illustration of team collaborating" */}
{/*             className="hidden md:block absolute right-[-120px] top-12 w-[260px] h-[260px] opacity-95 pointer-events-none" */}
{/*             loading="lazy" */}
{/*             aria-hidden */}
{/*           /> */}
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section ref={timelineRef} className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded" />
            {/* short subtitle for context */}
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Small steps. Big tools. Constant learning.
            </p>
          </motion.div>

          <div className="relative">
            {/* timeline spine — unchanged but visually refined with soft shadow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block shadow-md" />

            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center mb-16 ${isEven ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Card (kept structure) — tightened paddings, clearer copy */}
                  <div className={`md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"} mb-6 md:mb-0`}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
                      <div className="flex items-center gap-4 mb-4">
                        {/* Icon bubble — same gradient, slightly larger for emphasis */}
                        <div className={`p-3 md:p-4 bg-gradient-to-r ${item.color} rounded-xl`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {item.title}
                          </h3>
                          <span className="text-sm text-gray-400">
                            {item.year}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Add a tiny illustrative thumbnail on larger screens to enrich the card */}
                      <img
                        src={
                          // choose small illustrative image related to timeline item
                          index === 0
                            ? "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4ab2d3b2b7f1a4f8b4a6e8e6f3a2f2c0"
                            : index === 1
                              ? "https://images.unsplash.com/photo-1551033406-611cf9a2b1b5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8a9a6e3b4f5c7f7c6d8e8b9a4c2b1a0"
                              : index === 2
                                ? "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=aa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d"
                                : "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=dd8ad9e2f8f8b7c6d5c4b3a2f1e0d9c8"
                        }
                        alt={`${item.title} visual`}
                        className="hidden md:block mt-4 rounded-lg w-[180px] h-[100px] object-cover shadow-inner border border-white/5"
                        loading="lazy"
                        aria-hidden
                      />
                    </div>
                  </div>

                  {/* timeline node */}
                  <div className="hidden md:flex relative z-10">
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-gray-900 shadow-lg`}
                      aria-hidden
                    ></div>
                  </div>

                  {/* Keep the placeholder column to preserve layout symmetry */}
                  <div className="md:w-1/2 md:opacity-0" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOMAINS SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Our Domains
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From ML to mechatronics — spaces to learn, build, and ship products.
            </p>
          </motion.div>

          {/* Add a subtle hero strip above the grid with a curated collage */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1508385082359-fc44d1e97bf0?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f0e6b4a2d1e5f6b7c8d9a0b1c2d3e4f"
              alt="engineers collage"
              className="w-full h-40 object-cover opacity-30"
              loading="lazy"
              aria-hidden
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  onClick={() => window.open(googleFormLink, "_blank")}
                  className="cursor-pointer bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg border border-white/10 hover:bg-white/8 transition-all duration-300"
                >
                  {/* Icon with subtle gradient ring */}
                  <div className="mx-auto mb-3 inline-flex items-center justify-center rounded-lg p-3 bg-gradient-to-r from-blue-800/30 to-purple-800/20 border border-white/5">
                    <Icon className="w-8 h-8 text-blue-300" />
                  </div>

                  <h3 className="font-semibold text-white text-sm">
                    {domain.name}
                  </h3>

                  {/* Short tagline to make cards scannable (new, concise) */}
                  <p className="text-gray-400 text-xs mt-2">
                    {domain.name.split(" & ")[0]} • {domain.value}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section ref={visionRef} className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10 overflow-hidden">
            {/* Decorative: subtle grid pattern overlay hinting at tech */}
            <svg
              className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 400"
              aria-hidden
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <div className="relative text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 leading-tight">
                "We don't wait for magic — we make it."
              </h3>
              <p className="text-lg text-gray-300 italic">
                Built to solve what didn't exist, together.
              </p>

              {/* Add a supporting lifestyle image under the quote on larger screens */}
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f0e7b6a4d1c5e6b8a9d7c6b5a4e3d2c"
                alt="team building"
                className="hidden md:block mt-6 mx-auto rounded-lg w-[520px] h-[220px] object-cover shadow-md border border-white/5"
                loading="lazy"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      {/* INVITATION / CTA SECTION */}
      <section ref={invitationRef} className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={invitationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4"
          >
            Join the Movement
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={invitationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Join YFE — collaborate with makers, learn with experts, and ship projects.
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

          {/* Small trust badge strip — adds authority and visual weight */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="0.8"/></svg>
              <span>Active community</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 12h18" stroke="currentColor" strokeWidth="0.8"/></svg>
              <span>Weekly sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2v20" stroke="currentColor" strokeWidth="0.8"/></svg>
              <span>Multi-domain</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default About;
