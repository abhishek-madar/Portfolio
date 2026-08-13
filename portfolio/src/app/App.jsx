import { lazy, Suspense } from 'react';
import Navbar from '../shared/components/Navbar';
import Home from '../pages/Home/Home';
import Footer from '../shared/components/Footer';
import SmoothScroll from '../shared/components/SmoothScroll';
import Section3DWrapper from '../shared/animations/Section3DWrapper';

const Projects = lazy(() => import('../pages/Projects/Projects'));
const Skills = lazy(() => import('../pages/Skills/Skills'));
const Education = lazy(() => import('../pages/Education/Education'));
const Achievements = lazy(() => import('../pages/Achievements/Achievements'));
const About = lazy(() => import('../pages/About/About'));
const Contact = lazy(() => import('../pages/Contact/Contact'));

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative text-zinc-950 dark:text-zinc-50 font-sans selection:bg-primary/30 bg-white dark:bg-black transition-colors duration-300 overflow-x-hidden w-full" style={{ 
        minHeight: '100dvh',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)'
      }}>
        {/* Removed heavy Silk 3D background */}
        <div className="fixed inset-0 z-[1] bg-noise pointer-events-none"></div>
        <Navbar />
        <main className="relative z-10 flex flex-col items-center w-full perspective-[1200px] overflow-visible">
          <Home />
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center opacity-50">Loading sections...</div>}>
            <Section3DWrapper><Projects /></Section3DWrapper>
            <Section3DWrapper><Skills /></Section3DWrapper>
            <Section3DWrapper><Education /></Section3DWrapper>
            <Section3DWrapper><Achievements /></Section3DWrapper>
            <div className="relative z-50 w-full flex flex-col items-center"><About /></div>
            <Section3DWrapper><Contact /></Section3DWrapper>
          </Suspense>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
