import { lazy, Suspense } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ScrollProgress, BackToTop } from './components/ScrollUtils';

const About = lazy(() => import('./components/About'));

const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-32">
    <div className="w-6 h-6 border-2 border-white/10 border-t-accent rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <div className="relative min-h-screen bg-obsidian text-pearl overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <Cursor />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </Suspense>
      </main>

      {/* Back to top */}
      <BackToTop />
    </div>
  );
}