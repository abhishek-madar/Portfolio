import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
export default function ProjectInfo({ project, onOpenCaseStudy }) {
  if (!project) return null;
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full flex flex-col gap-6"
    >
      {}
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-brand-charcoal dark:text-brand-offwhite tracking-tight leading-tight transition-colors">
        {project.title}
      </h3>
      {}
      <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base md:text-lg font-light transition-colors">
        {project.description}
      </p>
      {}
      <div className="flex flex-wrap gap-2 pt-2">
        {project.tech.map((tech, i) => (
          <span 
            key={i} 
            className="px-4 py-1.5 text-xs font-mono font-medium bg-black/5 dark:bg-brand-offwhite/5 text-zinc-700 dark:text-zinc-300 rounded-full border border-brand-charcoal/10 dark:border-brand-offwhite/10"
          >
            {tech}
          </span>
        ))}
      </div>
      {}
      <div className="flex items-center gap-4 pt-8 mt-auto">
        <button 
          onClick={() => onOpenCaseStudy && onOpenCaseStudy(project)}
          className="flex flex-1 items-center justify-center gap-2 px-6 h-14 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg cursor-pointer group/btn"
        >
          Read Case Study
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
        <a 
          href={project.links.live} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/20 rounded-full hover:scale-110 hover:bg-zinc-200 dark:hover:bg-white/20 transition-all duration-300"
          title="Live Demo"
        >
          <ExternalLink size={20} />
        </a>
        <a 
          href={project.links.github} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/20 rounded-full hover:scale-110 hover:bg-zinc-200 dark:hover:bg-white/20 transition-all duration-300"
          title="GitHub Repository"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </motion.div>
  );
}
