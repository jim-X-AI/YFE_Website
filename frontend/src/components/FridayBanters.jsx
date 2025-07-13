import { Calendar, MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext'; // ✅ adjust path as needed

export default function FridayBanters() {
  const { content } = useContent();

  const title = content?.friday?.title || 'Friday Banters';
  const description =
    content?.friday?.description ||
    'Wind down the week with casual conversations, networking, and idea sharing.';
  const whatsappLink = content?.friday?.whatsapp_link || '#';

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
          <div className="absolute -inset-8 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-3xl blur opacity-20" />
          <div className="relative bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/30 dark:border-white/10">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full mb-6">
                <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                {title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {description}
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Join This Friday
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
