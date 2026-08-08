import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const roles = [
  'Creative Full-Stack Developer',
  'Software Developer',
  'Problem Solver',
  'Building Digital Experiences',
  'Interactive Web Developer',
  'Modern Web Engineer',
  'Frontend Craftsman',
  'Digital Experience Developer',
  'Creative Software Developer',
  'Full-Stack Product Builder',
  'Engineering Digital Products',
];
export default function AnimatedRole() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);
  return (
    <motion.div layout className="relative w-full flex flex-col justify-start">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="whitespace-nowrap text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-zinc-200 dark:to-zinc-500 leading-tight"
        >
          {roles[index]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
