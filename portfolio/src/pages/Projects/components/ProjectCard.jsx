import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
export default function ProjectCard({ project, onOpenCaseStudy, style, className, isFullWidth = false }) {
  const [imageError, setImageError] = useState(false);
  return (
    <motion.div
      style={style}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative w-full h-full bg-[#09090b] rounded-[2rem] overflow-hidden shadow-2xl ${className || ''}`}
    >
      {}
      <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-brand-charcoal">
        {}
        {project.image && !imageError ? (
          <img 
            src={project.image} 
            alt={project.title} 
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-black flex items-center justify-center">
            <span className="font-mono text-sm tracking-widest text-zinc-600">[ MEDIA_UNAVAILABLE ]</span>
          </div>
        )}
      </div>
      {}
      <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none z-30 transition-colors duration-500 group-hover:border-brand-offwhite/10"></div>
    </motion.div>
  );
}
