import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext';

// Utility: get next Friday 8–9 PM
function getNextFriday() {
  const now = new Date();
  const day = now.getDay();
  const diff = (5 - day + 7) % 7; // 5 = Friday
  const friday = new Date(now);
  friday.setDate(now.getDate() + diff);
  friday.setHours(20, 0, 0, 0); // 8:00 PM
  return friday;
}

export default function FridayBanters() {
  const { content } = useContent();

  const title = content?.friday?.title || 'Friday Banters';
  const description =
    content?.friday?.description ||
    'Wind down the week with casual conversations, networking, and idea sharing.';
  const meetLink = content?.friday?.meet_link || 'https://meet.google.com/spw-udtm-oiq'; // fallback

  // Open Google Calendar directly
  const addToGoogleCalendar = () => {
    const start = getNextFriday();
    const end = new Date(start.getTime() + 60 * 60 * 1000); // +1hr

    const format = (date) =>
      date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const startStr = format(start);
    const endStr = format(end);

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      'YFE Friday Banters — Join Now!'
    )}&dates=${startStr}/${endStr}&details=${encodeURIComponent(
      `${description}\nJoin here: ${meetLink}`
    )}&location=${encodeURIComponent(meetLink)}&sf=true&output=xml`;

    window.open(calendarUrl, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* cinematic glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-3xl blur opacity-20" />

          <div className="relative bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/30 dark:border-white/10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-6 w-fit"
            >
              <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-300" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              {description}
            </motion.p>

            {/* Single button */}
            <motion.button
              onClick={addToGoogleCalendar}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Join This Friday
            </motion.button>

            {/* Optional Meet link preview */}
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Google Meet:{" "}
              <a
                href={meetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-300 underline hover:text-purple-800"
              >
                {meetLink}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
