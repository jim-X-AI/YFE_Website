import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../src/context/ContentContext';
import LoadingSpinner from '../src/components/LoadingSpinner';
import ErrorMessage from '../src/components/ErrorMessage';

// Lazy imports for all major sections
const Hero = lazy(() => import('../src/components/Hero'));
const Vision = lazy(() => import('../src/components/Vision'));
const TuesdayChats = lazy(() => import('../src/components/TuesdayChats'));
const FridayBanters = lazy(() => import('../src/components/FridayBanters'));
const ResourceHub = lazy(() => import('../src/components/ResourceHub'));
const CommunityStats = lazy(() => import('../src/components/CommunityStats'));
const FeaturedMembers = lazy(() => import('../src/components/FeaturedMembers'));
const Footer = lazy(() => import('../src/components/Footer'));

function Home() {
  const { content, loading, error, refetch } = useContent();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  // Simple reusable motion settings for smooth section reveals
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <main className="flex flex-col space-y-32 md:space-y-40">
          {/* Hero Section */}
          <motion.section
            id="hero"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="pt-10 md:pt-20"
          >
            <Hero />
          </motion.section>

          {/* Vision Section */}
          <motion.section
            id="vision"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-6xl mx-auto px-6 md:px-8"
          >
            <Vision />
          </motion.section>

          {/* Tuesday Chats */}
          <motion.section
            id="tuesday"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-6xl mx-auto px-6 md:px-8"
          >
            <TuesdayChats />
          </motion.section>

          {/* Friday Banters */}
          <motion.section
            id="friday"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-6xl mx-auto px-6 md:px-8"
          >
            <FridayBanters />
          </motion.section>

          {/* Resource Hub */}
          <motion.section
            id="resources"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <ResourceHub />
          </motion.section>

          {/* Community Stats */}
          <motion.section
            id="community"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-6xl mx-auto px-6 md:px-8"
          >
            <CommunityStats stats={content?.community?.stats} />
          </motion.section>

          {/* Featured Members */}
          <motion.section
            id="members"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-6xl mx-auto px-6 md:px-8"
          >
            <FeaturedMembers members={content?.community?.featured_members} />
          </motion.section>

          {/* Footer */}
          <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-12 border-t border-gray-200 dark:border-gray-800"
          >
            <Footer />
          </motion.section>
        </main>
      </Suspense>
    </div>
  );
}

export default Home;
