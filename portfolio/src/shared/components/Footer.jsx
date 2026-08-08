export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-brand-charcoal/10/50 dark:border-brand-offwhite/10/50 bg-brand-offwhite dark:bg-brand-charcoal relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-brand-charcoal/70 dark:text-brand-offwhite/70 text-sm transition-colors">
          © {new Date().getFullYear()} Abhishek Madar. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-brand-charcoal/70 dark:text-brand-offwhite/70">
          <a href="https://github.com/abhishek-madar" className="hover:text-brand-charcoal dark:hover:text-brand-offwhite transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/abhishek-madar-/" className="hover:text-brand-charcoal dark:hover:text-brand-offwhite transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
