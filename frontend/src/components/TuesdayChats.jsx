import { Coffee, MessageCircle, ExternalLink, Clock, Users } from 'lucide-react'; // Added subtle icons for visual richness
import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext';

export default function TuesdayChats() {
  const { content } = useContent();

  const title = content?.tuesday?.title || 'Tuesday Chats';
  const description =
    content?.tuesday?.description ||
    'Join us every Tuesday as we unpack cutting-edge tech topics with brilliant minds shaping the future.';
  const whatsappLink = content?.tuesday?.whatsapp_link || '#';

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden transition-colors duration-500">
      {/* --- Subtle ambient visuals to add motion and depth --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,255,255,0.05),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(180,0,255,0.05),_transparent_60%)]" />
      <div className="absolute top-10 right-10 opacity-10">
        <Clock className="w-32 h-32 text-cyan-400" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <Users className="w-28 h-28 text-purple-400" />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* --- Outer glow effect for depth --- */}
          <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-40" />

          {/* --- Main content card --- */}
          <div className="relative bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col items-center text-center">

              {/* --- Hero Icon --- */}
              <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full mb-6 border border-cyan-400/30">
                <Coffee className="w-8 h-8 text-cyan-400" />
              </div>

              {/* --- Title --- */}
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                {title}
              </h2>

              {/* --- Divider --- */}
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full" />

              {/* --- Refined description (less wordy, more engaging) --- */}
              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {description}
              </p>

              {/* --- Subtle meta info for realism and credibility --- */}
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Every Tuesday</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>Live Industry Guests</span>
                </div>
              </div>

              {/* --- CTA Button --- */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Join Next Session
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
