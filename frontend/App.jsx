import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './src/context/ContentContext';
import Navbar from './src/components/Navbar';
import LoadingSpinner from './src/components/LoadingSpinner';
import ErrorMessage from './src/components/ErrorMessage';

// Import all components used in HomePage
import Hero from './src/components/Hero';
import Vision from './src/components/Vision';
import TuesdayChats from './src/components/TuesdayChats';
import FridayBanters from './src/components/FridayBanters';
import ResourceHub from './src/components/ResourceHub';
import CommunityStats from './src/components/CommunityStats';
import FeaturedMembers from './src/components/FeaturedMembers';
import Footer from './src/components/Footer';

// Lazy load pages
const Home = lazy(() => import('./src/pages/Home'));
const About = lazy(() => import('./src/pages/About'));

// Home page component
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
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ContentProvider>
        <div className="App">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </div>
      </ContentProvider>
    </Router>
  );
}

export default App;
