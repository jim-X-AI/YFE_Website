import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Play, Pause, Award, TrendingUp, Users, Zap } from 'lucide-react';
import Navbar from '../components/Navbar'; // kept as original
import Footer from '../components/Footer'; // kept as original

// Executive leadership data (unchanged structure) — copy tightened in UI below where displayed
const executives = [
  {
    id: 1,
    name: "Princess Ayomide Bamigboye",
    role: "Founder & Co-Head, Embedded Systems & Robotics",
    avatar: "https://i.ibb.co/F4cVyfyH/img3.jpg",
    company: "YFE",
    profileLink: "https://www.linkedin.com/in/princess-bamigboye",
    bio: "Visionary leader focused on sustainable embedded systems and robotics, blending engineering rigor with product thinking.",
    achievements: [
      "Led 15+ commercial robotics systems",
      "Tech Innovator of the Year — 2023",
      "12 research publications"
    ],
    specialties: ["Robotics Architecture", "IoT Systems", "Hardware Design", "Team Leadership"],
    stats: {
      projects: 47,
      team: 32,
      years: 8
    }
  },
  {
    id: 2,
    name: "Chukwuebuka Anulunko",
    role: "Co-Head, Machine Learning & Artificial Intelligence",
    avatar: "https://i.ibb.co/nq0wbfJj/img2.jpg",
    company: "YFE",
    profileLink: "https://www.linkedin.com/in/chukwuebuka-anulunko-b-eng-gmnse-147626236",
    bio: "AI strategist building scalable models and practical ML pipelines for real-world impact.",
    achievements: [
      "Built systems processing 1M+ daily transactions",
      "Cut model training time by 65%",
      "Keynote speaker at 5 international AI events"
    ],
    specialties: ["Machine Learning", "Neural Networks", "Data Analytics", "AI Strategy"],
    stats: {
      projects: 38,
      team: 28,
      years: 6
    }
  },
  {
    id: 3,
    name: "Nnenna Kazie",
    role: "Co-Head, Embedded Systems & Robotics",
    avatar: "https://i.ibb.co/d0mFvgNF/img1.jpg",
    company: "YFE",
    profileLink: "https://www.linkedin.com/in/nnenna-kazie",
    bio: "Bridges hardware and UX — focused on intuitive human-robot interactions and firmware excellence.",
    achievements: [
      "3 patents in robotics interfaces",
      "Mentored 50+ engineers",
      "Led award-winning consumer robotics product"
    ],
    specialties: ["Embedded Systems", "Human-Robot Interface", "Firmware", "UX Design"],
    stats: {
      projects: 42,
      team: 24,
      years: 7
    }
  },
];

export default function ExecutiveLeadership() {
  const [selectedExecutive, setSelectedExecutive] = useState(executives[0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState('bio');
  const intervalRef = useRef(null);

  // --- Auto-rotate executives (preserve original behavior) ---
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setSelectedExecutive(current => {
          const currentIndex = executives.findIndex(exec => exec.id === current.id);
          const nextIndex = (currentIndex + 1) % executives.length;
          return executives[nextIndex];
        });
      }, 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  const handleNext = () => {
    const currentIndex = executives.findIndex(exec => exec.id === selectedExecutive.id);
    const nextIndex = (currentIndex + 1) % executives.length;
    setSelectedExecutive(executives[nextIndex]);
    // gentle UX: pause autoplay briefly if user interacts
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  const handlePrev = () => {
    const currentIndex = executives.findIndex(exec => exec.id === selectedExecutive.id);
    const prevIndex = (currentIndex - 1 + executives.length) % executives.length;
    setSelectedExecutive(executives[prevIndex]);
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      {/* Main hero section kept intact — color palette preserved (dark gradient background) */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden pt-16">
        {/* Background accents: soft, low-contrast glows for premium depth (kept subtle for corporate elegance) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-[pulse_9s_ease-in-out_infinite] delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-[pulse_11s_ease-in-out_infinite] delay-4000" />
          {/* Decorative faint grid SVG to hint tech without overpowering */}
          <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" aria-hidden>
            <defs>
              <pattern id="dot" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.6" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
          {/* Header — tightened copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Executive Leadership
              </span>
            </h1>

            {/* Concise, scannable subtitle */}
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leaders shaping products that merge technology and human value.
            </p>

            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN: Executive list (structure preserved) */}
            <div className="lg:col-span-1">
              {/* Card visually refined: tighter padding, subtle border and blur */}
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-2xl">
                <h2 className="text-2xl font-semibold mb-6 text-center">Our Leadership</h2>

                <div className="space-y-4">
                  {executives.map((executive) => (
                    <motion.div
                      key={executive.id}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${selectedExecutive.id === executive.id ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20' : 'bg-gray-800/20 hover:bg-gray-700/30 border border-transparent'}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedExecutive(executive);
                        // pause autoplay briefly when user manually selects
                        if (isAutoPlaying) {
                          setIsAutoPlaying(false);
                          setTimeout(() => setIsAutoPlaying(true), 10000);
                        }
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          {/* Avatar preserved — lazy loading for performance */}
                          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400/40">
                            <img src={executive.avatar} alt={executive.name} loading="lazy" className="w-full h-full object-cover" />
                          </div>

                          {/* Active indicator — subtle and animated */}
                          {selectedExecutive.id === executive.id && (
                            <motion.div
                              className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full border-2 border-gray-900"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 450, damping: 20 }}
                              aria-hidden
                            />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Name & role: tightened role display for brevity */}
                          <h3 className="font-semibold text-white truncate">{executive.name}</h3>
                          <p className="text-sm text-cyan-300 truncate">{executive.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Executive detail (structure preserved) */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedExecutive.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.45 }}
                    className="p-8"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Executive Image + quick stats (kept layout but tightened UI) */}
                      <div className="md:w-1/3 flex flex-col items-center">
                        <div className="relative mb-6">
                          <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-cyan-400/20 shadow-2xl">
                            <img src={selectedExecutive.avatar} alt={selectedExecutive.name} loading="lazy" className="w-full h-full object-cover" />
                          </div>

                          {/* Accent badge — adds personality without heavy visuals */}
                          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-md" aria-hidden>
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Stats grid — condensed copy and preserved icons */}
                        <div className="grid grid-cols-3 gap-3 w-full">
                          <div className="text-center bg-gray-800/50 rounded-xl p-3">
                            <div className="flex items-center justify-center mb-1">
                              <TrendingUp className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div className="text-xl font-semibold text-white">{selectedExecutive.stats.projects}+</div>
                            <div className="text-xs text-gray-400">Projects</div>
                          </div>
                          <div className="text-center bg-gray-800/50 rounded-xl p-3">
                            <div className="flex items-center justify-center mb-1">
                              <Users className="w-5 h-5 text-purple-400" />
                            </div>
                            <div className="text-xl font-semibold text-white">{selectedExecutive.stats.team}</div>
                            <div className="text-xs text-gray-400">Team</div>
                          </div>
                          <div className="text-center bg-gray-800/50 rounded-xl p-3">
                            <div className="flex items-center justify-center mb-1">
                              <Award className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div className="text-xl font-semibold text-white">{selectedExecutive.stats.years}</div>
                            <div className="text-xs text-gray-400">Years</div>
                          </div>
                        </div>

                        {/* Profile CTA — kept function and style, tightened label */}
                        <a
                          href={selectedExecutive.profileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                        >
                          <span>View Profile</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Executive Info + Tabs */}
                      <div className="md:w-2/3">
                        <div className="mb-6">
                          <h2 className="text-3xl font-semibold text-white mb-2">{selectedExecutive.name}</h2>
                          <p className="text-lg text-cyan-300 mb-4">{selectedExecutive.role}</p>

                          {/* Tabs — functionality preserved; styling tightened for clarity */}
                          <div className="flex space-x-1 bg-gray-800/50 rounded-xl p-1 mb-6">
                            {['bio', 'achievements', 'specialties'].map((tab) => (
                              <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === tab ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow' : 'text-gray-300 hover:text-white'}`}
                              >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                              </button>
                            ))}
                          </div>

                          {/* Tab Content — animate and keep original content structure, but make text concise and scannable */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeTab}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.28 }}
                              className="min-h-[200px]"
                            >
                              {activeTab === 'bio' && (
                                // tightened bio text for easy skimming
                                <p className="text-gray-300 text-lg leading-relaxed">
                                  {selectedExecutive.bio}
                                </p>
                              )}

                              {activeTab === 'achievements' && (
                                <ul className="space-y-3">
                                  {selectedExecutive.achievements.map((achievement, index) => (
                                    <motion.li
                                      key={index}
                                      className="flex items-start space-x-3"
                                      initial={{ opacity: 0, x: -8 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.06 }}
                                    >
                                      <div className="w-5 h-5 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                                      </div>
                                      <span className="text-gray-300">{achievement}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              )}

                              {activeTab === 'specialties' && (
                                <div className="flex flex-wrap gap-3">
                                  {selectedExecutive.specialties.map((specialty, index) => (
                                    <motion.span
                                      key={specialty}
                                      className="px-3 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/15 rounded-full text-cyan-300 text-sm"
                                      initial={{ opacity: 0, scale: 0.96 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: index * 0.04 }}
                                    >
                                      {specialty}
                                    </motion.span>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls — preserved but visually refined */}
                <div className="flex items-center justify-between p-6 bg-gray-900/50 border-t border-gray-700/50">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={toggleAutoPlay}
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                      aria-pressed={isAutoPlaying}
                      aria-label="Toggle auto rotate executives"
                    >
                      {isAutoPlaying ? (
                        <Pause className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <Play className="w-5 h-5 text-cyan-400" />
                      )}
                    </button>
                    <span className="text-sm text-gray-400">Auto-rotate {isAutoPlaying ? 'on' : 'off'}</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handlePrev}
                      className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                      aria-label="Previous executive"
                    >
                      <ChevronLeft className="w-5 h-5 text-cyan-400" />
                    </button>

                    {/* Dots navigation preserved — clearer focus state */}
                    <div className="flex space-x-2">
                      {executives.map((exec) => (
                        <button
                          key={exec.id}
                          onClick={() => {
                            setSelectedExecutive(exec);
                            if (isAutoPlaying) {
                              setIsAutoPlaying(false);
                              setTimeout(() => setIsAutoPlaying(true), 10000);
                            }
                          }}
                          className={`w-3 h-3 rounded-full transition-all ${selectedExecutive.id === exec.id ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'}`}
                          aria-label={`Go to ${exec.name}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleNext}
                      className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                      aria-label="Next executive"
                    >
                      <ChevronRight className="w-5 h-5 text-cyan-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement (preserved layout, tightened copy, subtle background) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/8 to-purple-500/8 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/12">
              <h2 className="text-2xl font-semibold mb-4">Our Vision for the Future</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We push boundaries to build useful, responsible tech — nurturing talent and building products that improve lives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
