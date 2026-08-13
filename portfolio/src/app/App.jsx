import Navbar from '../shared/components/Navbar';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import Skills from '../pages/Skills/Skills';
import Education from '../pages/Education/Education';
import Achievements from '../pages/Achievements/Achievements';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Footer from '../shared/components/Footer';
import SmoothScroll from '../shared/components/SmoothScroll';
import Section3DWrapper from '../shared/animations/Section3DWrapper';
import Silk from '../shared/ui/Silk';
export default function App() {
  return (
    <SmoothScroll>
      <div className="relative text-zinc-950 dark:text-zinc-50 font-sans selection:bg-primary/30 bg-white dark:bg-black transition-colors duration-300 overflow-x-hidden w-full" style={{ 
        minHeight: '100dvh',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)'
      }}>
        {}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-50 dark:opacity-40 transition-opacity">
          <Silk 
            speed={3} 
            scale={0.8} 
            color="#847b94" 
            noiseIntensity={1.5} 
            className="w-full h-full" 
          />
        </div>
        {}
        <div className="fixed inset-0 z-[1] bg-noise pointer-events-none"></div>
        <Navbar />
        <main className="relative z-10 flex flex-col items-center w-full perspective-[1200px] overflow-visible">
          <Home />
          <Section3DWrapper><Projects /></Section3DWrapper>
          <Section3DWrapper><Skills /></Section3DWrapper>
          <Section3DWrapper><Education /></Section3DWrapper>
          <Section3DWrapper><Achievements /></Section3DWrapper>
          <div className="relative z-50 w-full flex flex-col items-center"><About /></div>
          <Section3DWrapper><Contact /></Section3DWrapper>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
