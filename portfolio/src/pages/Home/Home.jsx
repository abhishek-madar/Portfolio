import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Icon } from '@iconify/react';
// IMPORTANT: Pointing to the new .png transparent cutout provided by the user
import profilePhoto from './hero.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const techStack = [
  { name: 'React', icon: 'logos:react' },
  { name: 'Next.js', icon: 'logos:nextjs-icon' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'MongoDB', icon: 'logos:mongodb-icon' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'Git', icon: 'logos:git-icon' },
];

export default function Hero() {
  const duplicatedTech = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <section
      id="home"
      className="relative w-full overflow-x-clip overflow-y-visible flex flex-col justify-between transition-colors"
      style={{ minHeight: '100dvh' }}
    >


      {/* Ambient glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-amber-400/5 dark:bg-amber-500/8 blur-[100px] pointer-events-none" />

      {/* ─── Main Content ─── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-28 md:pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative"
        >
          {/* ─── Center Image (The Depth Layer: z-20) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-4 md:-top-12 lg:-top-20 z-20 pointer-events-none w-[320px] md:w-[600px] lg:w-[750px]"
          >
            <div className="relative w-full flex justify-center">
              <img
                src={profilePhoto}
                alt="Abhishek Madar"
                className="relative w-full object-cover object-top"
                style={{
                  // Fades the bottom of the image smoothly into the background
                  maskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)',
                }}
              />
            </div>
          </motion.div>

          {/* ─── Background Typography Layer (Solid: z-10) ─── */}
          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Top Name */}
            <motion.div variants={itemVariants} className="w-full flex justify-between items-center mb-4 md:mb-8 px-2 md:px-8">
              <h1 className="text-[clamp(3rem,9vw,11rem)] font-extrabold tracking-[-0.02em] leading-none text-zinc-900 dark:text-white font-playfair uppercase select-none whitespace-nowrap">
                ABHISHEK
              </h1>
              <h1 className="text-[clamp(3rem,9vw,11rem)] font-extrabold tracking-[-0.02em] leading-none text-zinc-900 dark:text-white font-playfair uppercase select-none whitespace-nowrap">
                MADAR
              </h1>
            </motion.div>
          </div>

          {/* ─── Foreground Typography Layer (Stroke Outline: z-30) ─── */}
          {/* This sits IN FRONT of the image, drawing just the outline of the text over the person */}
          <div className="absolute top-0 left-0 w-full z-30 flex flex-col items-center pointer-events-none">
            <motion.div variants={itemVariants} className="w-full flex justify-between items-center mb-4 md:mb-8 px-2 md:px-8">
              <h1 
                className="text-[clamp(3rem,9vw,11rem)] font-extrabold tracking-[-0.02em] leading-none text-zinc-900 dark:text-white font-playfair uppercase select-none whitespace-nowrap opacity-60 dark:opacity-40"
                style={{ 
                  color: 'transparent',
                  WebkitTextStroke: '1.5px currentColor'
                }}
              >
                ABHISHEK
              </h1>
              <h1 
                className="text-[clamp(3rem,9vw,11rem)] font-extrabold tracking-[-0.02em] leading-none text-zinc-900 dark:text-white font-playfair uppercase select-none whitespace-nowrap opacity-60 dark:opacity-40"
                style={{ 
                  color: 'transparent',
                  WebkitTextStroke: '1.5px currentColor'
                }}
              >
                MADAR
              </h1>
            </motion.div>
          </div>

          {/* ─── Info Row: CTA and Socials (Bottom) ─── */}
          <div className="relative z-30 flex flex-col md:flex-row items-end justify-between gap-8 mt-48 md:mt-64 lg:mt-[20rem]">
            {/* Left column: Status + Bio + CTA */}
            <motion.div variants={itemVariants} className="flex flex-col gap-5 max-w-sm">
              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-sm"
                >
                  Explore Work
                </a>
              </div>
            </motion.div>

            {/* Right column: Social Links (Optional, placed here to balance layout) */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {[
                { icon: FaGithub, href: 'https://github.com/abhishek-madar', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/abhishek-madar-/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:abhishekbmadar@gmail.com', label: 'Email' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-110 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ─── Tech Stack Marquee ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-30 w-full py-8 mt-12 bg-transparent"
      >
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex whitespace-nowrap items-center gap-12 md:gap-16 w-max"
            animate={{ x: ['0%', '-25%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
          >
            {duplicatedTech.map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="flex items-center gap-2.5 shrink-0 select-none opacity-100 transition-opacity"
              >
                <Icon icon={tech.icon} width={22} height={22} />
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
