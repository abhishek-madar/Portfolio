import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
const NAV_LINKS = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-center p-4 transition-all duration-300`}
      style={{ paddingTop: 'max(1rem, env(safe-area-inset-top))' }}
    >
      <div 
        className={`flex items-center justify-between w-full max-w-[1400px] rounded-full px-[clamp(1rem,4vw,3rem)] py-3 transition-all duration-500
        ${scrolled ? 'bg-white dark:bg-zinc-950 shadow-xl' : 'bg-transparent'}`}
      >
        <a href="#home" className="text-xl font-bold tracking-tighter text-brand-charcoal dark:text-brand-offwhite">
          Abhishek Madar<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-semibold text-brand-charcoal/70 dark:text-brand-offwhite/70 hover:text-brand-charcoal dark:hover:text-brand-offwhite transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-brand-charcoal/70 dark:text-brand-offwhite/70 hover:text-brand-charcoal dark:hover:text-brand-offwhite transition-colors rounded-full hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-base font-semibold text-brand-charcoal/70 dark:text-brand-offwhite/70 hover:text-brand-charcoal dark:hover:text-brand-offwhite transition-colors"
          >
            <Download size={16} />
            <span className="hidden lg:inline">Resume</span>
          </a>
          <a 
            href="#contact"
            className="hidden sm:inline-block px-6 py-2.5 text-base font-bold text-white dark:text-zinc-900 bg-zinc-900 dark:bg-white rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg"
          >
            Let's Talk
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-charcoal dark:text-brand-offwhite hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-[calc(100%+1rem)] left-4 right-4 bg-white dark:bg-zinc-950 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <nav className="flex flex-col p-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-lg font-semibold text-brand-charcoal dark:text-brand-offwhite hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-2" />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-lg font-semibold text-brand-charcoal dark:text-brand-offwhite hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-xl transition-colors"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 w-full text-center px-4 py-3 text-lg font-bold text-white dark:text-zinc-900 bg-zinc-900 dark:bg-white rounded-xl transition-colors"
              >
                Let's Talk
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
