import { Calendar, MessageCircle, ExternalLink, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext';

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

  const title = content?.friday?.title || 'Friday Banters';
  const description =
    content?.friday?.description ||
    'Wind down the week with casual conversations, networking, and idea sharing.';
  const whatsappLink = content?.friday?.whatsapp_link || '#';

  // Generate ICS file dynamically
  const addToCalendar = () => {
    const eventTitle = 'Friday Banters by YFE';
    const startDate = getNextFriday();
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // +1hr
    const formattedStart = startDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const formattedEnd = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const icsData = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventTitle}
DESCRIPTION:${description}
DTSTART:${formattedStart}
DTEND:${formattedEnd}
LOCATION:Online (WhatsApp)
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'friday-banters.ics';
    link.click();
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
          {/* cinematic gradient aura */}
          <div className="absolute -inset-8 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-3xl blur opacity-20" />

          <div className="relative bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/30 dark:border-white/10">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full mb-6"
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
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl"
              >
                {description}
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Join Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Join This Friday
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Add to Calendar Button */}
                <motion.button
                  onClick={addToCalendar}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-white/10 dark:bg-white/5 text-purple-600 dark:text-purple-300 border border-purple-400/30 rounded-full font-medium hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Clock className="w-5 h-5" />
                  Add to Calendar
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
