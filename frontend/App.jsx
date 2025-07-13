import { lazy, Suspense } from 'react';
import { ContentProvider, useContent } from './src/context/ContentContext';
import LoadingSpinner from './src/components/LoadingSpinner';
import ErrorMessage from './src/components/ErrorMessage';

// Lazy load components for better performance
const Hero = lazy(() => import('./src/components/Hero'));
const Vision = lazy(() => import('./src/components/Vision'));
const TuesdayChats = lazy(() => import('./src/components/TuesdayChats'));
const FridayBanters = lazy(() => import('./src/components/FridayBanters'));
const ResourceHub = lazy(() => import('./src/components/ResourceHub'));
const CommunityStats = lazy(() => import('./src/components/CommunityStats'));
const FeaturedMembers = lazy(() => import('./src/components/FeaturedMembers'));
const Footer = lazy(() => import('./src/components/Footer'));

function AppContent() {
  const { content, loading, error, refetch } = useContent();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Hero />
      <Vision />
      <CommunityStats stats={content?.community?.stats} />
      <TuesdayChats />
      <FridayBanters />
      <ResourceHub />
      <FeaturedMembers members={content?.community?.featured_members} />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <AppContent />
      </Suspense>
    </ContentProvider>
  );
}
