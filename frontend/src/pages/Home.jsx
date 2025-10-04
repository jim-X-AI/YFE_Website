import { lazy, Suspense } from 'react';
import { useContent } from '../src/context/ContentContext';
import LoadingSpinner from '../src/components/LoadingSpinner';
import ErrorMessage from '../src/components/ErrorMessage';

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="vision">
          <Vision />
        </section>
        <section id="tuesday">
          <TuesdayChats />
        </section>
        <section id="friday">
          <FridayBanters />
        </section>
        <section id="resources">
          <ResourceHub />
        </section>
        <CommunityStats stats={content?.community?.stats} />
        <FeaturedMembers members={content?.community?.featured_members} />
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default Home;