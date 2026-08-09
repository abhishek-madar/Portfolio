import csarmsPreviewImg from './assets/csarms-preview.png';
import elixPreviewImg from './assets/elix-preview.png';
import freshCleanImg from './assets/freshclean-preview.png';
import lifeLinkPreviewImg from './assets/lifelink-preview.png';
import { useState, useRef, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import ProjectInfo from './components/ProjectInfo';
import ElixCaseStudy from './CaseStudies/ElixCaseStudy';
import FreshCleanCaseStudy from './CaseStudies/FreshCleanCaseStudy';
import LifeLinkCaseStudy from './CaseStudies/LifeLinkCaseStudy';
import CSARMSCaseStudy from './CaseStudies/CSARMSCaseStudy';
import DepthCarousel from './components/DepthCarousel';
const projectData = [
  {
    title: "Elix — AI Prompt Intelligence",
    category: "AI / Full Stack Systems",
    domain: "elixprompts-ai.vercel.app",
    description: "An enterprise-grade AI prompt engineering workspace that transforms raw prompts into structured system instructions, strategic analysis, and interactive Mermaid.js flowcharts with zero-downtime 3-tier fallback.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Gemini 2.5", "Groq API", "OpenAI API", "Mermaid.js"],
    links: {
      live: "https://elixprompts-ai.vercel.app",
      github: "https://github.com/abhishek-madar/elix-ai",
      caseStudy: "#"
    },
    featured: true, 
    image: elixPreviewImg
  },
  {
    title: "FreshClean Laundry",
    category: "Full Stack Service",
    domain: "freshclean-seven.vercel.app",
    description: "A full-stack management system with secure JWT authentication. Includes an Integrated Digital Wallet, a Multi-Step Booking Wizard, and an automated scheduling system.",
    tech: ["Node.js", "Express", "MongoDB", "JavaScript"],
    image: freshCleanImg,
    links: {
      live: "https://freshclean-seven.vercel.app",
      github: "https://github.com/abhishek-madar/freshclean-laundry",
      caseStudy: "#"
    },
    featured: false 
  },
  {
    title: "LifeLink Blood Bank",
    category: "Healthcare Management",
    domain: "lifelink-blood.vercel.app",
    description: "A MERN-stack Blood Bank Management System. Features a Donation Eligibility Engine, dynamic PDFKit certificate generation, and real-time inventory reports.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    image: lifeLinkPreviewImg,
    links: {
      live: "https://lifelink-blood.vercel.app",
      github: "https://github.com/abhishek-madar/lifelink",
      caseStudy: "#"
    },
    featured: false 
  },
  {
    title: "CSARMS — Academic Platform",
    category: "Academic / Full Stack Platform",
    domain: "csarms.local",
    description: "A MERN-stack academic management platform featuring Role-Based Access Control (RBAC), fine-grained API security, real-time announcements, and dynamic analytics dashboards.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Recharts"],
    image: csarmsPreviewImg,
    links: {
      live: "https://csarms.vercel.app",
      github: "https://github.com/abhishek-madar/csarms",
      caseStudy: "#"
    },
    featured: true
  }
];
const GlassSurface = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 11,
  displace = 0,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = 'R',
  yChannel = 'G',
  mixBlendMode = 'difference',
  className = '',
  style = {}
}) => {
  const uniqueId = useId().replace(/:/g, '-');
  const filterId = `glass-filter-${uniqueId}`;
  const redGradId = `red-grad-${uniqueId}`;
  const blueGradId = `blue-grad-${uniqueId}`;
  const [svgSupported, setSvgSupported] = useState(false);
  const containerRef = useRef(null);
  const feImageRef = useRef(null);
  const redChannelRef = useRef(null);
  const greenChannelRef = useRef(null);
  const blueChannelRef = useRef(null);
  const gaussianBlurRef = useRef(null);
  const generateDisplacementMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);
    const svgContent = `
      <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${mixBlendMode}" />
        <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${borderRadius}" fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)" />
      </svg>
    `;
    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  };
  const updateDisplacementMap = () => {
    feImageRef.current?.setAttribute('href', generateDisplacementMap());
  };
  useEffect(() => {
    updateDisplacementMap();
    [
      { ref: redChannelRef, offset: redOffset },
      { ref: greenChannelRef, offset: greenOffset },
      { ref: blueChannelRef, offset: blueOffset }
    ].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute('scale', (distortionScale + offset).toString());
        ref.current.setAttribute('xChannelSelector', xChannel);
        ref.current.setAttribute('yChannelSelector', yChannel);
      }
    });
    gaussianBlurRef.current?.setAttribute('stdDeviation', displace.toString());
  }, [
    width, height, borderRadius, borderWidth, brightness, opacity, blur, displace, distortionScale, redOffset, greenOffset, blueOffset, xChannel, yChannel, mixBlendMode
  ]);
  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });
    resizeObserver.observe(containerRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  useEffect(() => {
    setTimeout(updateDisplacementMap, 0);
  }, [width, height]);
  useEffect(() => {
    setSvgSupported(supportsSVGFilters());
  }, []);
  const supportsSVGFilters = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return false;
    }
    const isWebkit = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);
    if (isWebkit || isFirefox) {
      return false;
    }
    const div = document.createElement('div');
    div.style.backdropFilter = `url(#${filterId})`;
    return div.style.backdropFilter !== '';
  };
  const containerStyle = {
    ...style,
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: `${borderRadius}px`,
    '--glass-frost': backgroundOpacity,
    '--glass-saturation': saturation,
    '--filter-id': `url(#${filterId})`
  };
  return (
    <div
      ref={containerRef}
      className={`glass-surface ${svgSupported ? 'glass-surface--svg' : 'glass-surface--fallback'} ${className}`}
      style={containerStyle}
    >
      <svg className="glass-surface__filter" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
            <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />
            <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" id="redchannel" result="dispRed" />
            <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
            <feDisplacementMap ref={greenChannelRef} in="SourceGraphic" in2="map" id="greenchannel" result="dispGreen" />
            <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />
            <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" id="bluechannel" result="dispBlue" />
            <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.7" />
          </filter>
        </defs>
      </svg>
      <div className="glass-surface__content">{children}</div>
    </div>
  );
};
export default function Projects() {
  const [openCaseStudy, setOpenCaseStudy] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="projects" className="relative z-10 w-full py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        {}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4 max-w-3xl mb-24"
        >
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-blue-600 dark:bg-blue-400 transition-colors"></span>
            <span className="text-blue-600 dark:text-blue-400 font-mono text-sm tracking-widest uppercase font-bold transition-colors">Selected Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white drop-shadow-2xl transition-colors">
            Featured Projects
          </h2>
          <p className="text-zinc-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mt-4 transition-colors">
            A curated selection of enterprise-grade applications, AI platforms, and full-stack systems engineered with performance and aesthetics in mind.
          </p>
        </motion.div>
        {}
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-8">
          {}
          <div className="w-full xl:w-5/12 flex flex-col justify-center min-h-[350px] md:min-h-[450px]">
            <AnimatePresence mode="wait">
              <ProjectInfo 
                key={activeIndex}
                project={projectData[activeIndex]} 
                onOpenCaseStudy={() => setOpenCaseStudy(projectData[activeIndex].title)} 
              />
            </AnimatePresence>
          </div>
          {}
          <div className="w-full xl:w-7/12 h-[400px] md:h-[500px] lg:h-[650px] relative">
            <DepthCarousel
              items={projectData}
              cardWidth={380}
              cardHeight={500}
              onChange={(index) => setActiveIndex(index)}
              renderItem={(project) => (
                <ProjectCard 
                  project={project} 
                  className="w-full h-full pointer-events-auto"
                />
              )}
              depth={220}
              spread={90}
              tilt={22}
              tiltDirection="right"
              perspective={1400}
              visibleCards={4}
              falloff={0.2}
              blur={6}
              autoplay
              autoplayDelay={7000}
              loop
              disableWheel
            />
          </div>
        </div>
        {}
        <div className="mt-40 pt-20 flex justify-center transition-colors">
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="https://github.com/abhishek-madar" 
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
              Explore the full archive on GitHub
            </span>
            <span className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/20 flex items-center justify-center text-zinc-600 dark:text-cyan-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-white dark:group-hover:border-cyan-400 dark:group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] group-hover:translate-x-2 transition-all duration-300">
              <ArrowRight size={24} />
            </span>
          </motion.a>
        </div>
      </div>
      {}
      <ElixCaseStudy 
        isOpen={openCaseStudy === "Elix — AI Prompt Intelligence"} 
        onClose={() => setOpenCaseStudy(null)} 
      />
      <FreshCleanCaseStudy 
        isOpen={openCaseStudy === "FreshClean Laundry"} 
        onClose={() => setOpenCaseStudy(null)} 
      />
      <LifeLinkCaseStudy 
        isOpen={openCaseStudy === "LifeLink Blood Bank"} 
        onClose={() => setOpenCaseStudy(null)} 
      />
      <CSARMSCaseStudy 
        isOpen={openCaseStudy === "CSARMS — Academic Platform"} 
        onClose={() => setOpenCaseStudy(null)} 
      />
    </section>
  );
}
