import csarmsPreviewImg from '../assets/images/projects/csarms-preview.webp';
import elixPreviewImg from '../assets/images/projects/elix-preview.webp';
import freshCleanImg from '../assets/images/projects/freshclean-preview.webp';
import lifeLinkPreviewImg from '../assets/images/projects/lifelink-preview.webp';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '../features/projects/components/ProjectCard';
import ProjectInfo from '../features/projects/components/ProjectInfo';
import ElixCaseStudy from '../features/projects/case-studies/ElixCaseStudy';
import FreshCleanCaseStudy from '../features/projects/case-studies/FreshCleanCaseStudy';
import LifeLinkCaseStudy from '../features/projects/case-studies/LifeLinkCaseStudy';
import CSARMSCaseStudy from '../features/projects/case-studies/CSARMSCaseStudy';
import DepthCarousel from '../features/projects/components/DepthCarousel';
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

export default function Projects() {
  const [openCaseStudy, setOpenCaseStudy] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="projects" className="relative z-10 w-full py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[clamp(1rem,4vw,3rem)]">
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
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-tight text-zinc-900 dark:text-white drop-shadow-2xl transition-colors">
            Featured Projects
          </h2>
          <p className="text-zinc-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mt-4 transition-colors">
            A curated selection of enterprise-grade applications, AI platforms, and full-stack systems engineered with performance and aesthetics in mind.
          </p>
        </motion.div>
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-8">
          <div className="w-full xl:w-5/12 flex flex-col justify-center min-h-[350px] md:min-h-[450px]">
            <AnimatePresence mode="wait">
              <ProjectInfo 
                key={activeIndex}
                project={projectData[activeIndex]} 
                onOpenCaseStudy={() => setOpenCaseStudy(projectData[activeIndex].title)} 
              />
            </AnimatePresence>
          </div>
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
