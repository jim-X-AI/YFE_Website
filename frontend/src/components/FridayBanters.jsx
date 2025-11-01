import { Calendar, ExternalLink, Users, Coffee } from "lucide-react"; // Added subtle icons for atmosphere
import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";

// Utility: find next Friday date
function getNextFriday() {
  const now = new Date();
  const day = now.getDay();
  const diff = (5 - day + 7) % 7; // 5 = Friday
  const friday = new Date(now);
  friday.setDate(now.getDate() + diff);
  friday.setHours(19, 0, 0, 0); // 7:00 PM local time
  return friday;
}

export default function FridayBanters() {
  const { content } = useContent();

  const title = content?.friday?.title || "Friday Banters";
  const description =
    content?.friday?.description ||
    "Unwind with the community every Friday evening — relaxed chats, real stories, and brilliant minds.";
  const meetLink =
    content?.friday?.meet_link || "https://meet.google.com/spw-udtm-oiq";

  // Add to Google Calendar directly
  const handleJoinClick = () => {
    const eventTitle = encodeURIComponent("YFE Friday Banters – Join Now");
    const eventDetails = encodeURIComponent(
      `${description}\n\nJoin Meeting: ${meetLink}`
    );

    const startDate = getNextFriday();
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // +1 hour
    const startUTC =
      startDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const endUTC =
      endDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&location=${encodeURIComponent(
      meetLink
    )}&dates=${startUTC}/${endUTC}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden transition-colors duration-300">
      {/* --- Ambient visuals for subtle liveliness --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,255,255,0.05),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(180,0,255,0.05),_transparent_60%)]" />
      <div className="absolute top-10 right-10 opacity-10">
        <Calendar className="w-32 h-32 text-cyan-400" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <Coffee className="w-28 h-28 text-purple-400" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* --- Gradient glow backdrop --- */}
          <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-blue-500/30 via-cyan-400/30 to-purple-500/30 rounded-3xl blur-2xl opacity-30" />

          {/* --- Frosted glass container --- */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl flex flex-col items-center text-center space-y-6">

            {/* --- Icon --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full border border-cyan-400/20"
            >
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
            </motion.div>

            {/* --- Title --- */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              {title}
            </motion.h2>

            {/* --- Divider --- */}
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full" />

            {/* --- Description (refined for clarity) --- */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              {description}
            </motion.p>

            {/* --- Meta info (adds realism and rhythm) --- */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Every Friday • 7 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>Open Community Session</span>
              </div>
            </div>

            {/* --- CTA Button --- */}
            <motion.button
              onClick={handleJoinClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white text-sm sm:text-base rounded-full font-semibold hover:shadow-[0_0_25px_rgba(0,200,255,0.3)] transition-all duration-300"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              Join This Friday
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
