import profilePhoto from './assets/profile-photo.jpg';
import backPhoto from './assets/back-photo.jpg';
import { motion } from 'framer-motion';
import Lanyard from './components/Lanyard';
import ScrambledText from '../../shared/animations/ScrambledText';
export default function About() {
  return (
    <section id="about" className="py-12 lg:py-16 relative w-full overflow-visible flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex-grow">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-charcoal dark:text-brand-offwhite mb-4 transition-colors">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6 transition-colors relative z-10">
            <ScrambledText 
              className="text-lg md:text-xl font-sans font-semibold text-zinc-900 dark:text-zinc-50 tracking-normal leading-relaxed max-w-5xl"
              radius={40}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              I'm Abhishek Madar, a Computer Science and Engineering student at Dayananda Sagar College of Engineering, Bangalore, passionate about full-stack development, AI integration, and scalable software architecture. I enjoy transforming ideas into practical digital products and solving real-world problems through technology. My interests include Data Structures & Algorithms, backend engineering, AI-powered applications, and modern web development. I work with technologies such as React, Next.js, Node.js, TypeScript, Python, MongoDB, PostgreSQL, and Tailwind CSS, and I continuously learn and experiment with new technologies to build software that is efficient, reliable, scalable, and user-focused.
            </ScrambledText>
          </div>
          <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
            <div className="absolute inset-0 z-50 pointer-events-auto overflow-visible flex items-center justify-center">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} frontImage={profilePhoto} backImage={backPhoto} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
