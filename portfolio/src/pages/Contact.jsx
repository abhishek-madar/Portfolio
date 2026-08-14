import { motion } from 'framer-motion';
import ScrambledText from '../components/animations/ScrambledText';
export default function Contact() {
  return (
    <section id="contact" className="py-12 lg:py-16 relative w-full overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-[clamp(1rem,4vw,3rem)] relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-brand-charcoal dark:text-zinc-50 mb-6 transition-colors">Let's build<br />together.</h2>
          <ScrambledText radius={40} className="text-xl md:text-2xl font-medium text-zinc-900 dark:text-zinc-50 mb-10 leading-relaxed transition-colors tracking-tight">
            I'm currently looking for new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open!
          </ScrambledText>
          <a href="mailto:abhishekbmadar@gmail.com" className="inline-block px-10 py-5 rounded-full bg-blue-600 dark:bg-brand-offwhite text-brand-offwhite dark:text-zinc-950 font-bold hover:bg-blue-700 dark:hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] text-lg">
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
