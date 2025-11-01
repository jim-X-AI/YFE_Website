import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Award,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    stats: { projects: 47, team: 32, years: 8 }
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
    stats: { projects: 38, team: 28, years: 6 }
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
    stats: { projects: 42, team: 24, years: 7 }
  },
];

export default function ExecutiveLeadership() {
  const [selectedExecutive, setSelectedExecutive] = useState(executives[0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState('bio');
  const intervalRef = useRef(null);

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
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  const handleNext = () => {
    const currentIndex = executives.findIndex(exec => exec.id === selectedExecutive.id);
    const nextIndex = (currentIndex + 1) % executives.length;
    setSelectedExecutive(executives[nextIndex]);
    pauseAutoPlay();
  };

  const handlePrev = () => {
    const currentIndex = executives.findIndex(exec => exec.id === selectedExecutive.id);
    const prevIndex = (currentIndex - 1 + executives.length) % executives.length;
    setSelectedExecutive(executives[prevIndex]);
    pauseAutoPlay();
  };

  const pauseAutoPlay = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-16 pb-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Executive Leadership
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Leaders shaping products that merge technology and human value.
            </p>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Responsive grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* LEFT COLUMN */}
            <div>
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-gray-700/50 shadow-2xl">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">
                  Our Leadership
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {executives.map((executive) => (
                    <motion.div
                      key={executive.id}
                      onClick={() => {
                        setSelectedExecutive(executive);
                        pauseAutoPlay();
                      }}
                      className={`p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                        selectedExecutive.id === executive.id
                          ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20'
                          : 'bg-gray-800/20 hover:bg-gray-700/30 border border-transparent'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="relative">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-cyan-400/40">
                            <img src={executive.avatar} alt={executive.name} className="w-full h-full object-cover" />
                          </div>
                          {selectedExecutive.id === executive.id && (
                            <motion.div
                              className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-cyan-400 rounded-full border-2 border-gray-900"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white truncate text-sm sm:text-base">{executive.name}</h3>
                          <p className="text-xs sm:text-sm text-cyan-300 truncate">{executive.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedExecutive.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.45 }}
                    className="p-4 sm:p-6 md:p-8"
                  >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      {/* IMAGE + STATS */}
                      <div className="md:w-1/3 flex flex-col items-center">
                        <div className="relative mb-6">
                          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-cyan-400/20 shadow-2xl">
                            <img src={selectedExecutive.avatar} alt={selectedExecutive.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute -bottom-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
                          {[
                            { icon: TrendingUp, label: 'Projects', value: selectedExecutive.stats.projects },
                            { icon: Users, label: 'Team', value: selectedExecutive.stats.team },
                            { icon: Award, label: 'Years', value: selectedExecutive.stats.years },
                          ].map(({ icon: Icon, label, value }) => (
                            <div key={label} className="text-center bg-gray-800/50 rounded-xl p-2 sm:p-3">
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mx-auto mb-1" />
                              <div className="text-lg sm:text-xl font-semibold">{value}</div>
                              <div className="text-xs text-gray-400">{label}</div>
                            </div>
                          ))}
                        </div>

                        <a
                          href={selectedExecutive.profileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 sm:mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-sm sm:text-base font-medium hover:shadow-lg transition-all"
                        >
                          <span>View Profile</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      {/* INFO + TABS */}
                      <div className="md:w-2/3">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{selectedExecutive.name}</h2>
                        <p className="text-cyan-300 text-sm sm:text-lg mb-4">{selectedExecutive.role}</p>

                        <div className="flex space-x-1 bg-gray-800/50 rounded-xl p-1 mb-6">
                          {['bio', 'achievements', 'specialties'].map(tab => (
                            <button
                              key={tab}
                              onClick={() => setActiveTab(tab)}
                              className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-medium ${
                                activeTab === tab
                                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow'
                                  : 'text-gray-300 hover:text-white'
                              }`}
                            >
                              {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                          ))}
                        </div>

                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.28 }}
                          >
                            {activeTab === 'bio' && (
                              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{selectedExecutive.bio}</p>
                            )}
                            {activeTab === 'achievements' && (
                              <ul className="space-y-2 sm:space-y-3">
                                {selectedExecutive.achievements.map((a, i) => (
                                  <li key={i} className="flex items-start space-x-2 sm:space-x-3">
                                    <div className="w-3 h-3 sm:w-5 sm:h-5 bg-cyan-500/20 rounded-full flex items-center justify-center mt-1">
                                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full" />
                                    </div>
                                    <span className="text-gray-300 text-sm sm:text-base">{a}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {activeTab === 'specialties' && (
                              <div className="flex flex-wrap gap-2 sm:gap-3">
                                {selectedExecutive.specialties.map((s, i) => (
                                  <span
                                    key={i}
                                    className="px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/15 rounded-full text-cyan-300 text-xs sm:text-sm"
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between p-4 sm:p-6 bg-gray-900/50 border-t border-gray-700/50">
                  <button
                    onClick={handlePrev}
                    className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-xl bg-gray-800 hover:bg-gray-700 text-white"
                  >
                    {isAutoPlaying ? 'Pause Auto' : 'Play Auto'}
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
