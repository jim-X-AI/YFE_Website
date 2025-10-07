import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './src/context/ContentContext';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import LoadingSpinner from './src/components/LoadingSpinner';
import ErrorMessage from './src/components/ErrorMessage';

// Home page sections
import Hero from './src/components/Hero';
import Vision from './src/components/Vision';
import TuesdayChats from './src/components/TuesdayChats';
import FridayBanters from './src/components/FridayBanters';
import ResourceHub from './src/components/ResourceHub';
import CommunityStats from './src/components/CommunityStats';
import FeaturedMembers from './src/components/FeaturedMembers';

// Lazy-loaded pages
const About = lazy(() => import('./src/pages/About'));
const Resources = lazy(() => import('./src/pages/Resources'));

// Home Page Component
function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
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
        <CommunityStats />
        <FeaturedMembers />
      </main>
      <Footer />
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <ContentProvider>
        <div className="App">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route
                path="*"
                element={
                  <ErrorMessage
                    message="Oops! Page not found."
                    description="The page you’re looking for doesn’t exist."
                  />
                }
              />
            </Routes>
          </Suspense>
        </div>
      </ContentProvider>
    </Router>
  );
}

export default App;
