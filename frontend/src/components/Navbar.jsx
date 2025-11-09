import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Resource Hub", href: "/resources" },
    { name: "Executives", href: "/executives" },
    { name: "About", href: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith("/")) {
      navigate(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  const joinCommunity = () =>
    window.open("https://forms.gle/w6Bnr1sj5ypsA5je9", "_blank");

  const DesktopNavItem = ({ item }) => (
    <motion.button
      onClick={() => scrollToSection(item.href)}
      className="relative px-4 py-2 text-sm font-medium text-white transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span
        className={`relative z-10 ${
          activeSection === item.href
            ? "font-semibold text-white"
            : "hover:text-blue-300"
        }`}
      >
        {item.name}
      </span>
    </motion.button>
  );

  const MobileNavItem = ({ item, index }) => (
    <motion.button
      onClick={() => scrollToSection(item.href)}
      className="relative py-4 text-xl font-medium text-center w-full text-white"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {item.name}
    </motion.button>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-black/25 backdrop-blur-md"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => navigate("/")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/apple-touch-icon.png"
                alt="YFE Logo"
                className="w-10 h-10 object-contain rounded-lg drop-shadow-md bg-white/20 p-1"
              />
              <span className="font-semibold text-white tracking-tight">
                Your Favourite Engineer
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <DesktopNavItem key={item.href} item={item} />
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Join Community */}
              <motion.button
                onClick={joinCommunity}
                className="hidden md:flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Join Community</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </motion.button>

              {/* Mobile Menu */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-lg md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-50 w-80 h-full bg-black/90 backdrop-blur-xl md:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 p-2 text-white/70 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
                <div className="flex-1 space-y-2">
                  {navItems.map((item, index) => (
                    <MobileNavItem key={item.href} item={item} index={index} />
                  ))}
                </div>
                <motion.button
                  onClick={joinCommunity}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white rounded-xl font-semibold shadow-2xl flex items-center justify-center space-x-2 mt-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Join YFE</span>
                  <ExternalLink className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
