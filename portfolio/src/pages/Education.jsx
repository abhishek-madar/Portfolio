import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Award } from 'lucide-react';
import { Icon } from '@iconify/react';
const ScrollAnimatedItem = ({ item, i }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.6 1"] 
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const xOffset = i % 2 !== 0 ? 80 : -80; 
  const x = useTransform(scrollYProgress, [0, 1], [xOffset, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(10px)", "blur(0px)"]);
  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale, x, filter: blur }}
      className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 w-full ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
    >
      <motion.div 
        whileHover={{ scale: 1.1, rotate: [-5, 5, 0] }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`shrink-0 ${item.accent} drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-colors`}
      >
        {item.icon}
      </motion.div>
      <div className={`flex-1 flex flex-col ${i % 2 !== 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-center text-center`}>
        <span className="text-sm md:text-base font-semibold text-zinc-500 tracking-wider uppercase mb-3 transition-colors">
          {item.year}
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-black dark:text-white transition-colors">
          {item.degree}
        </h3>
        <div className={`flex items-center gap-2 text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-medium transition-colors ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
          <MapPin className="text-zinc-400 dark:text-zinc-500 shrink-0 transition-colors" size={20} />
          <span>{item.institution}</span>
        </div>
        {item.highlight && (
          <div className={`mt-6 flex items-center gap-3 text-xl md:text-2xl font-bold text-black dark:text-white transition-colors ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <Award size={28} />
            {item.highlight}
          </div>
        )}
      </div>
    </motion.div>
  );
};
export default function Education() {
  const education = [
    { 
      degree: "B.E. Computer Science & Engineering", 
      institution: "Dayananda Sagar College of Engineering, Bengaluru", 
      year: "2024 – Present",
      icon: <Icon icon="maki:college" width={48} height={48} />,
      accent: "text-black dark:text-white",
    },
    { 
      degree: "Pre-University — PCMB", 
      institution: "Sainikethan PU College, Bagalkot", 
      year: "2022 – 2024", 
      highlight: "97%",
      icon: <Icon icon="ph:student-fill" width={48} height={48} />,
      accent: "text-black dark:text-white",
    },
    { 
      degree: "Secondary School Leaving Certificate", 
      institution: "Morarji Desai Residential School", 
      year: "2022", 
      highlight: "94.88%",
      icon: <Icon icon="ph:certificate-fill" width={48} height={48} />,
      accent: "text-black dark:text-white",
    }
  ];
  return (
    <section id="education" className="w-full py-16 lg:py-20 px-6 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white pb-2 transition-colors">
            Education
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto mt-4 transition-colors">
            The unconfined journey of continuous learning.
          </p>
        </motion.div>
        <div className="w-full flex flex-col gap-16 md:gap-20 overflow-visible px-4">
          {education.map((item, i) => (
            <ScrollAnimatedItem key={item.degree} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
