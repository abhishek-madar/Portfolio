import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Icon } from '@iconify/react';

import profilePhoto from '../assets/images/hero.webp';
import ParticleText from '../components/ui/ParticleText';

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
      style={{ 
        minHeight: '100dvh',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >


      

      
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-28 md:pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[1400px] mx-auto px-[clamp(1rem,4vw,3rem)] relative"
        >
          
          <div className="relative w-full flex flex-col items-center mt-4 md:mt-8">
            
            
            <motion.div variants={itemVariants} className="w-full flex flex-col md:flex-row justify-between items-center px-2 md:px-8 leading-[0.85] md:leading-none relative z-10 overflow-visible">
              <div className="relative flex items-center justify-center text-[clamp(2rem,15.5vw,11rem)] md:text-[clamp(3rem,9vw,11rem)] font-playfair text-zinc-900 dark:text-white">
                <h1 className="font-extrabold tracking-[-0.02em] uppercase select-none whitespace-nowrap opacity-0 pointer-events-none">
                  ABHISHEK
                </h1>
                <div className="absolute -inset-y-[30%] inset-x-0 z-10">
                  <ParticleText
                    text="ABHISHEK"
                    particleSize={2}
                    density={2}
                    color="inherit"
                    highlightColor="inherit"
                    scatter={0}
                    gatherDuration={1}
                    stagger={0}
                    pointerRepel={40}
                    repelRadius={120}
                    idleDrift={0.7}
                    fontSize="inherit"
                    fontWeight={800}
                    fontFamily="inherit"
                    glow={false}
                  />
                </div>
              </div>
              <div className="relative flex items-center justify-center text-[clamp(2.5rem,19vw,11rem)] md:text-[clamp(3rem,9vw,11rem)] font-playfair mt-4 md:mt-0 text-zinc-900 dark:text-white">
                <h1 className="font-extrabold tracking-[-0.02em] uppercase select-none whitespace-nowrap opacity-0 pointer-events-none">
                  MADAR
                </h1>
                <div className="absolute -inset-y-[30%] inset-x-0 z-10">
                  <ParticleText
                    text="MADAR"
                    particleSize={2}
                    density={2}
                    color="inherit"
                    highlightColor="inherit"
                    scatter={0}
                    gatherDuration={1}
                    stagger={0}
                    pointerRepel={40}
                    repelRadius={120}
                    idleDrift={0.7}
                    fontSize="inherit"
                    fontWeight={800}
                    fontFamily="inherit"
                    glow={false}
                  />
                </div>
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-1/2 -translate-x-1/2 top-4 md:-top-12 lg:-top-20 z-20 pointer-events-none w-[135vw] sm:w-[400px] md:w-[600px] lg:w-[750px] max-w-none"
            >
              <div className="relative w-full flex justify-center">
                <img
                  src={profilePhoto}
                  alt="Abhishek Madar"
                  className="relative w-full object-cover object-top"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)',
                  }}
                />
              </div>
            </motion.div>

            
            
            <motion.div variants={itemVariants} className="absolute inset-0 w-full flex flex-col md:flex-row justify-between items-center px-2 md:px-8 leading-[0.85] md:leading-none z-30 pointer-events-none overflow-hidden">
              <h1 
                className="text-[clamp(2rem,16vw,11rem)] md:text-[clamp(3rem,9vw,11rem)] font-extrabold tracking-[-0.02em] text-zinc-900 dark:text-white font-playfair uppercase select-none whitespace-nowrap opacity-70 dark:opacity-50"
                style={{ 
                  color: 'transparent',
                  WebkitTextStroke: '2px currentColor'
                }}
              >
                ABHISHEK
              </h1>
              <h1 
                className="text-[clamp(2.5rem,18vw,11rem)] md:text-[clamp(3rem,9vw,11rem)] font-extrabold tracking-[-0.02em] text-zinc-900 dark:text-white font-playfair uppercase select-none whitespace-nowrap opacity-70 dark:opacity-50"
                style={{ 
                  color: 'transparent',
                  WebkitTextStroke: '2px currentColor'
                }}
              >
                MADAR
              </h1>
            </motion.div>
          </div>

          
          <div className="relative z-30 flex flex-row items-center justify-between w-full mt-[100vw] sm:mt-48 md:mt-64 lg:mt-[20rem]">
            
            <motion.div variants={itemVariants} className="flex shrink-0">
              <a
                href="#projects"
                className="px-5 py-3 md:px-6 md:py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-sm flex items-center gap-2"
              >
                Explore Work <span className="text-lg leading-none">→</span>
              </a>
            </motion.div>

            
            <motion.div variants={itemVariants} className="flex items-center gap-2 md:gap-3 shrink-0">
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

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-30 w-full py-4 mt-6 md:py-8 md:mt-12 bg-transparent"
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
