import { motion } from 'framer-motion';
import { Database, LayoutTemplate, Box, Server, Sparkles, Cpu } from 'lucide-react';
import { Icon } from '@iconify/react';
import MagicBento, { ParticleCard } from '../features/skills/components/MagicBento';
const Marquee = ({ items, direction = "left", speed = 25 }) => {
  return (
    <div className="relative w-full overflow-hidden flex items-center mt-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex whitespace-nowrap items-center gap-2 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className={`
              px-3.5 py-1.5 text-sm font-medium rounded-xl transition-all duration-300
              bg-zinc-100 dark:bg-zinc-900 
              text-zinc-700 dark:text-zinc-300
              border border-zinc-200/50 dark:border-zinc-800/50
              hover:bg-white dark:hover:bg-zinc-800 
            `}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Icon icon="mingcute:vibe-coding-fill" width={32} height={32} />,
      gridSpan: "md:col-span-2 lg:col-span-2 row-span-1",
      accent: "text-blue-500",
      glowColor: "59, 130, 246", 
      skills: ["Java", "C++", "Python", "JavaScript (ES6+)", "TypeScript", "SQL"],
      isMarquee: true,
      marqueeDirection: "left",
      marqueeSpeed: 30
    },
    {
      title: "AI / ML",
      icon: <Sparkles size={32} />,
      gridSpan: "md:col-span-1 lg:col-span-1 row-span-1",
      accent: "text-amber-500",
      glowColor: "245, 158, 11", 
      skills: ["Gemini API", "Scikit-Learn", "Prompt Eng.", "IoT"],
      isMarquee: false
    },
    {
      title: "Frontend",
      icon: <LayoutTemplate size={32} />,
      gridSpan: "md:col-span-1 lg:col-span-1 row-span-1 md:row-span-2 lg:row-span-2",
      accent: "text-pink-500",
      glowColor: "236, 72, 153", 
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "AJAX", "Zustand", "HTML/CSS"],
      isMarquee: false
    },
    {
      title: "Backend",
      icon: <Server size={32} />,
      gridSpan: "md:col-span-1 lg:col-span-1 row-span-1",
      accent: "text-purple-500",
      glowColor: "168, 85, 247", 
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT", "Bcrypt"],
      isMarquee: false
    },
    {
      title: "Databases",
      icon: <Database size={32} />,
      gridSpan: "md:col-span-2 lg:col-span-2 row-span-1",
      accent: "text-emerald-500",
      glowColor: "16, 185, 129", 
      skills: ["MongoDB", "PostgreSQL", "SQL", "Mongoose"],
      isMarquee: false
    },
    {
      title: "Tools & Libs",
      icon: <Box size={32} />,
      gridSpan: "md:col-span-2 lg:col-span-3 row-span-1",
      accent: "text-rose-500",
      glowColor: "244, 63, 94", 
      skills: ["Mermaid.js", "PDFKit", "NumPy", "Pandas", "Git", "Postman", "Linux"],
      isMarquee: true,
      marqueeDirection: "right",
      marqueeSpeed: 35
    },
    {
      title: "Core CS",
      icon: <Cpu size={32} />,
      gridSpan: "md:col-span-1 lg:col-span-1 row-span-1",
      accent: "text-cyan-500",
      glowColor: "6, 182, 212", 
      skills: ["DSA", "OOP", "DBMS", "OS", "System Design"],
      isMarquee: false
    },
  ];
  return (
    <section id="skills" className="w-full py-16 lg:py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-4 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 transition-colors">
            Tech Stack
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl transition-colors max-w-2xl">
            The programming languages, frameworks, and tools I use to build robust and scalable applications.
          </p>
        </motion.div>
        <MagicBento 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[minmax(240px,auto)]"
          enableSpotlight={true}
          spotlightRadius={300}
          glowColor="132, 0, 255"
        >
          {skillCategories.map((category, i) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={category.gridSpan}
            >
              <ParticleCard
                enableStars={true}
                enableTilt={false}
                enableMagnetism={false}
                clickEffect={true}
                glowColor={category.glowColor}
                className={`
                  h-full w-full flex flex-col justify-between
                  p-6 md:p-8 rounded-[2rem] 
                  bg-zinc-50 dark:bg-black backdrop-blur-xl
                  border border-zinc-200 dark:border-zinc-800
                `}
              >
                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="transition-colors text-zinc-900 dark:text-zinc-50">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="relative z-10 flex-1 flex flex-col justify-end">
                  {category.isMarquee ? (
                    <Marquee items={category.skills} direction={category.marqueeDirection} speed={category.marqueeSpeed} />
                  ) : (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className={`
                            px-3.5 py-1.5 text-sm font-medium rounded-xl transition-all duration-300
                            bg-zinc-100 dark:bg-zinc-900 
                            text-zinc-700 dark:text-zinc-300
                            border border-zinc-200/50 dark:border-zinc-800/50
                            group-hover:bg-white dark:group-hover:bg-zinc-800 
                          `}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ParticleCard>
            </motion.div>
          ))}
        </MagicBento>
      </div>
    </section>
  );
}
