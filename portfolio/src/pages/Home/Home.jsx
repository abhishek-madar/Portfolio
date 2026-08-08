import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import AnimatedRole from '../../shared/animations/AnimatedRole';
import HeroScene from './components/HeroScene';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 transition-colors">
      {}
      <div 
        className="absolute inset-0 bg-white dark:bg-black -z-10 pointer-events-none" 
        style={{ 
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)', 
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)' 
        }} 
      />
      {}
      <HeroScene />
      {}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          {}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-brand-charcoal dark:text-brand-offwhite transition-colors">
              Hi, I'm Abhishek<span className="text-primary inline-block -translate-y-[0.05em]">.</span>
            </h1>
            <AnimatedRole />
          </motion.div>
          <motion.p variants={itemVariants} className="max-w-md text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium transition-colors">
            Every challenge is another opportunity to create something extraordinary.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg">
              View Projects
            </a>
            <a href="/resume.pdf" target="_blank" className="px-6 py-3 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white font-semibold border border-zinc-200 dark:border-white/20 hover:bg-zinc-200 dark:hover:bg-white/20 transition-colors">
              Download Resume
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 sm:gap-8 pt-4 w-full">
            <div>
              <div className="text-3xl font-bold text-brand-charcoal dark:text-brand-offwhite transition-colors">4+</div>
              <div className="text-sm text-brand-charcoal/70 dark:text-brand-offwhite/70 transition-colors">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-charcoal dark:text-brand-offwhite transition-colors">20+</div>
              <div className="text-sm text-brand-charcoal/70 dark:text-brand-offwhite/70 transition-colors">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-charcoal dark:text-brand-offwhite transition-colors">100%</div>
              <div className="text-sm text-brand-charcoal/70 dark:text-brand-offwhite/70 transition-colors">Responsive</div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex lg:flex-col items-center justify-center gap-6 lg:absolute lg:right-6 lg:bottom-1/2 lg:translate-y-1/2 mt-12 lg:mt-0 w-full lg:w-auto"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/abhishek-madar' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/abhishek-madar-/' },
            { icon: Mail, href: 'mailto:abhishekbmadar@gmail.com' },
          ].map((social, i) => (
            <a 
              key={i}
              href={social.href}
              className="p-3 rounded-full bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/20 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
      {}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-brand-charcoal/70 dark:text-brand-offwhite/70 uppercase tracking-widest transition-colors">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-brand-charcoal/70 dark:text-brand-offwhite/70 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
