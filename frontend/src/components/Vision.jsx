import { Users, Sparkles, Globe2, Layers } from 'lucide-react'; // Added subtle supporting icons
import { motion } from 'framer-motion';
import FuturisticButton from './FuturisticButton';
import { useNavigate } from 'react-router-dom';

export default function Vision() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* --- Ambient background enhancements for subtle depth --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,255,255,0.05),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(180,0,255,0.05),_transparent_60%)]" />
      <div className="absolute top-10 right-10 opacity-10">
        <Globe2 className="w-40 h-40 text-cyan-400" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <Layers className="w-32 h-32 text-purple-400" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Empowering Africa’s next generation of creators blending innovation, leadership, and purpose to shape the digital future.
          </p>
        </motion.div>

        {/* --- Two-column cards --- */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* --- Card 1: Community First --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glowing hover border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500" />

            <div className="relative bg-gray-800/40 backdrop-blur-lg border border-cyan-400/20 rounded-2xl p-8 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30">
                    <Users className="w-6 h-6 text-cyan-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Community First</h3>
                </div>

                {/* Shortened + more engaging copy */}
                <p className="text-gray-300 leading-relaxed">
                  We’re building an ecosystem where young innovators connect, learn, and grow turning collaboration into global opportunity.
                </p>
              </div>

              <div className="mt-6">
                <FuturisticButton
                  className="text-sm bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                  onClick={() => navigate('/executives')}
                >
                  Meet Our Executives
                </FuturisticButton>
              </div>
            </div>
          </motion.div>

          {/* --- Card 2: Future-Focused --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500" />

            <div className="relative bg-gray-800/40 backdrop-blur-lg border border-purple-400/20 rounded-2xl p-8 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
{/*                   <div className="p-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30"> */}
{/*                     <Sparkles className="w-6 h-6 text-purple-300" /> */}
{/*                   </div> */}
                  <h3 className="text-2xl font-bold text-white">Future Focused</h3>
                </div>

                {/* Shortened and elevated tone */}
                <p className="text-gray-300 leading-relaxed">
                  We equip bold minds to build next-gen solutions bridging Africa’s creativity with the world’s digital frontier.
                </p>
              </div>

              <div className="mt-6">
                <FuturisticButton className="text-sm bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                  Explore Technologies
                </FuturisticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
