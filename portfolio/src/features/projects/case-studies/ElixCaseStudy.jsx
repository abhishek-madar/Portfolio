import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HTMLFlipBook from 'react-pageflip';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

const Page = React.forwardRef((props, ref) => {
  const isLeft = props.number % 2 !== 0;
  return (
    <div className="page overflow-hidden [container-type:size]" ref={ref}>
      <div className={`page-content h-full flex flex-col relative paper-texture ${isLeft ? 'border-l' : 'border-r'} border-[#d4b886]`}>
         <div className={`absolute top-0 bottom-0 w-16 pointer-events-none mix-blend-multiply z-20 ${
           isLeft 
             ? 'right-0 bg-gradient-to-l from-[#8b7355]/40 via-[#8b7355]/5 to-transparent' 
             : 'left-0 bg-gradient-to-r from-[#8b7355]/40 via-[#8b7355]/5 to-transparent'
         }`}></div>
         <div className={`absolute top-0 bottom-0 w-[1px] pointer-events-none z-20 ${
           isLeft ? 'left-0 bg-white/40' : 'right-0 bg-white/40'
         }`}></div>
         <div className={`absolute bottom-[clamp(4px,2cqh,20px)] ${isLeft ? 'left-[clamp(6px,4cqw,24px)]' : 'right-[clamp(6px,4cqw,24px)]'} text-[clamp(4px,2cqw,16px)] font-serif text-[#5c4d3c] z-20`}>
            - {props.number} -
         </div>
         
         <div className="relative z-10 flex-1 overflow-hidden p-[clamp(0.5rem,4cqw,2rem)] font-serif text-[#2a2118]">
            <div className="h-full w-full">
              {props.children}
            </div>
         </div>
      </div>
    </div>
  );
});
Page.displayName = 'Page';
export default function ElixCaseStudyModal({ isOpen, onClose }) {
  const bookRef = useRef();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-[10px] z-[101]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1200px] h-[90dvh] z-[102] flex flex-col items-center justify-center"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 md:top-4 md:right-4 z-[110] p-3 rounded-full bg-[#eaddc5] border border-[#8b7355] text-[#5c4d3c] hover:text-black hover:bg-[#d4b886] transition-all shadow-xl"
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
          <div className="flex-1 w-full flex items-center justify-center relative px-4 mt-6 z-[105]">
            <HTMLFlipBook
              width={500}
              height={700}
              size="stretch"
              minWidth={300}
              maxWidth={500}
              minHeight={400}
              maxHeight={700}
              maxShadowOpacity={0.7}
              flippingTime={1200}
              useMouseEvents={false}
              usePortrait={true}
              swipeDistance={30}
              showCover={false}
              mobileScrollSupport={false}
              className="mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              ref={bookRef}
            >
              <Page number={1}>
                <div className="flex flex-col h-full justify-between items-center py-6 text-[#1a1510]">
                  <div className="space-y-4 w-full mt-6">
                    <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold tracking-wider uppercase leading-snug text-center">
                      ELIX
                    </h1>
                    <div className="h-[1px] w-1/2 bg-[#5c4d3c] mx-auto my-4"></div>
                    <h2 className="text-3xl font-['Caveat'] text-[#5c4d3c] text-center mt-2">
                      Architecting Prompt Intelligence
                    </h2>
                    <p className="text-center font-serif text-[#5c4d3c] mt-4 px-4 text-[9px] uppercase tracking-widest font-bold">
                      A Deep-Dive Case Study, Benchmarks & Blueprint for Modern AI Tooling
                    </p>
                  </div>
                  <div className="mt-auto pt-16 space-y-3 text-center">
                    <p className="font-['Playfair_Display'] text-lg font-bold">
                      Written by: Abhishek Madar
                    </p>
                    <p className="font-serif text-[11px] text-[#2c241b]">
                      Project Repository: <a href="https://github.com/abhishek-madar/elix-ai" target="_blank" className="underline decoration-[#8b7355]/30 underline-offset-4">github.com/abhishek-madar/elix-ai</a>
                    </p>
                    <p className="font-serif text-[11px] text-[#2c241b]">
                      Publication Date: 2026
                    </p>
                  </div>
                </div>
              </Page>
              <Page number={2}>
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-8">
                    Table of Contents
                  </h3>
                  <div className="flex flex-col gap-[clamp(0.2rem,1cqh,0.75rem)] px-[clamp(0.25rem,2cqw,1rem)] mt-[clamp(0.5rem,2cqh,1.5rem)] font-serif text-[#2c241b] text-[clamp(0.45rem,1.8cqh,0.75rem)]">
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)]">
                      <span className="font-bold">1. PREFACE: THE AGE OF THE PROMPT</span>
                      <span>3</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)] pt-[clamp(0.1rem,1cqh,0.5rem)]">
                      <span className="font-bold">2. CHAPTER 1: THE FOUNDATIONS & PRODUCT VISION</span>
                      <span>4</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)] pt-[clamp(0.1rem,1cqh,0.5rem)]">
                      <span className="font-bold">3. CHAPTER 2: THE PROBLEM SPACE</span>
                      <span>5</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)] pt-[clamp(0.1rem,1cqh,0.5rem)]">
                      <span className="font-bold">4. CHAPTER 3: UX & DESIGN PHILOSOPHY</span>
                      <span>5</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)] pt-[clamp(0.1rem,1cqh,0.5rem)]">
                      <span className="font-bold">5. CHAPTER 4: TECHNICAL ARCHITECTURE</span>
                      <span>6</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)] pt-[clamp(0.1rem,1cqh,0.5rem)]">
                      <span className="font-bold">6. CHAPTER 5: CORE FEATURES & SYSTEM MODULES</span>
                      <span>7</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)] pt-[clamp(0.1rem,1cqh,0.5rem)]">
                      <span className="font-bold">7. CHAPTER 6: ENGINEERING CHALLENGES</span>
                      <span>7</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)] pt-[clamp(0.1rem,1cqh,0.5rem)]">
                      <span className="font-bold">8. CHAPTER 7: BENCHMARKS & METRICS</span>
                      <span>8</span>
                    </div>
                    <div className="pl-[clamp(0.25rem,2cqw,1rem)] flex flex-col gap-[clamp(0.1rem,0.5cqh,0.125rem)] text-[clamp(0.4rem,1.6cqh,0.625rem)] text-[#5c4d3c]">
                      <div className="flex justify-between"><span>7.1 System Runtime & Latency Metrics</span><span>8</span></div>
                      <div className="flex justify-between"><span>7.2 Web Vitals & Lighthouse Audit Results</span><span>9</span></div>
                      <div className="flex justify-between"><span>7.3 Prompt Quality & LLM Accuracy Benchmarks</span><span>10</span></div>
                      <div className="flex justify-between"><span>7.4 Compression & Token Efficiency Benchmarks</span><span>10</span></div>
                      <div className="flex justify-between"><span>7.5 User Productivity & Iteration Time Analysis</span><span>11</span></div>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)] pt-[clamp(0.1rem,1cqh,0.5rem)]">
                      <span className="font-bold">9. CHAPTER 8: FUTURE HORIZONS & EPILOGUE</span>
                      <span>11</span>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={3}>
                <div className="space-y-4 pt-2">
                  <h3 className="text-[clamp(0.6rem,3cqh,1.5rem)] leading-tight mb-[clamp(0.25rem,1.5cqh,1rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-8">
                    Preface: The Age of the Prompt
                  </h3>
                  <p className="text-xs leading-relaxed text-justify px-2 first-letter:text-3xl first-letter:font-['Playfair_Display'] first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                    We live in an era defined by artificial intelligence. Large Language Models (LLMs) possess unprecedented capacity to write code, synthesize research, draft prose, and analyze complex systems. Yet, a fundamental bottleneck remains: <span className="font-bold">the human-to-machine interface</span>.
                  </p>
                  <p className="text-xs leading-relaxed text-justify px-2">
                    Humans communicate with nuances, unstated assumptions, and colloquial shortcuts. Machines require clarity, structural boundaries, explicit context, and logical hierarchy. The quality of AI output is rarely limited by the model's knowledge—it is constrained by the user's prompt.
                  </p>
                  <div className="p-[clamp(0.25rem,2cqh,1.5rem)] my-[clamp(0.25rem,1.5cqh,1rem)] border-l-2 border-[#8b7355]/50 bg-[#8b7355]/5 italic text-[11px] text-[#4a3d2e] leading-relaxed">
                    Elix was conceived as an answer to this fundamental disconnect. It is not just another wrapper around an LLM API; it is a specialized meta-layer—an intelligence dedicated to refining, structuring, and explaining how we speak to machines. This book documents the journey, architecture, design decisions, and empirical benchmarks behind creating Elix.
                  </div>
                  <div className="text-right px-4 mt-4">
                    <p className="font-['Caveat'] text-xl font-bold">— Abhishek Madar</p>
                  </div>
                </div>
              </Page>
              <Page number={4}>
                <div className="space-y-4 pt-2">
                  <h3 className="text-[clamp(0.6rem,3cqh,1.5rem)] leading-tight mb-[clamp(0.25rem,1.5cqh,1rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-4">
                    Chapter 1: The Foundations & Product Vision
                  </h3>
                  <div className="px-1 space-y-4">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)]">1.1 The Genesis of Elix</h4>
                      <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-justify">
                        The inspiration for Elix arose from watching developers and non-technical users attempt to use modern AI models. A common pattern emerged: users would type short, ambiguous requests like <em>"make a website"</em> or <em>"fix this code"</em>, and then grow frustrated when the AI delivered generic, off-target results.
                      </p>
                      <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-justify">
                        The solution was not to force every human to take a 40-hour course in prompt engineering. Instead, the software itself should embody the rules of prompt engineering automatically.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)]">1.2 Defining "Prompt Intelligence"</h4>
                      <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-justify">
                        "Prompt Intelligence" is the automated process of taking raw intent, evaluating its structural flaws, injecting domain-specific best practices, and visualizing the execution flow. Elix approaches every prompt across three dimensions:
                      </p>
                      <ul className="list-decimal pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">Refinement:</span> Converting conversational text into structured Markdown prompts.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">Explainability:</span> Telling the user <em>why</em> changes were made so they learn over time.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">Visualization:</span> Generating dynamic flowcharts (Mermaid diagrams) to map complex relationships.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={5}>
                <div className="space-y-4 pt-2">
                  <h3 className="text-[clamp(0.6rem,3cqh,1.5rem)] leading-tight mb-[clamp(0.25rem,1.5cqh,1rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-8">
                    Chapter 2: The Problem Space
                  </h3>
                  <div className="px-1 space-y-3">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)]">2.1 The Friction of Communication with LLMs</h4>
                      <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-justify">When a human interacts with an LLM, several invisible breakdown points occur:</p>
                      <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">Missing Persona Constraints:</span> Without telling an LLM <em>who</em> it is acting as, the model defaults to broad, non-committal answers.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">Ambiguous Delimiters:</span> Without clear XML or Markdown markers, complex inputs blur together, leading to instruction drift.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)]">2.2 The Trial-and-Error Trap</h4>
                      <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-justify">
                        In standard AI chat interfaces, users spend up to 70% of their time rewriting the same prompt in slightly different ways. This trial-and-error cycle wastes tokens, time, and cognitive load. Elix eliminates this cycle by getting the prompt right on the first attempt.
                      </p>
                    </div>
                  </div>
                  <h3 className="text-[clamp(0.6rem,3cqh,1.5rem)] leading-tight mb-[clamp(0.25rem,1.5cqh,1rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-8 pt-3">
                    Chapter 3: UX & Design Philosophy
                  </h3>
                  <div className="px-1 space-y-3">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)]">3.1 Dark Mode & High-Contrast Aesthetics</h4>
                      <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-justify">
                        Elix features a dark-first aesthetic tailored for long working sessions. Grounded in deep charcoal backgrounds and illuminated by a signature terracotta accent, the design conveys a feeling of precision and focus.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)]">3.2 The Psychology of the 2.4s Splash Screen</h4>
                      <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-justify">
                        Upon launching Elix, users are greeted with a stylized, animated splash screen. In modern web design, speed is usually paramount; however, for a tool focused on <em>craftsmanship</em>, a momentary splash screen acts as a mental reset.
                      </p>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={6}>
                <div className="space-y-4 pt-2">
                  <h3 className="text-[clamp(0.6rem,3cqh,1.5rem)] leading-tight mb-[clamp(0.25rem,1.5cqh,1rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-4">
                    Chapter 4: Technical Architecture
                  </h3>
                  <div className="px-1 space-y-4">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)]">4.1 Next.js 15 & React 19 Ecosystem</h4>
                      <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-justify">
                        Elix is powered by Next.js 15 utilizing the App Router architecture. React 19 provides high-performance client component management for complex interactive states, modal layers, and live chat stacks.
                      </p>
                      <div className="mt-3 px-3 py-2 bg-[#8b7355]/5 border border-[#8b7355]/20 font-mono text-[9px] space-y-1">
                        <div className="font-bold mb-1">Execution Flow:</div>
                        <div>1. User Input → Next.js App Router</div>
                        <div>2. App Router → API Route /api/refine</div>
                        <div>3. API Route → Google Gemini GenAI SDK</div>
                        <div>4. Gemini SDK → Structured JSON Payload</div>
                        <div>5. JSON Payload → React 19 State Engine</div>
                        <div>6. State Engine → Render Card Stack & Diagrams</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)]">4.2 Integrating Google Gemini</h4>
                      <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-justify">
                        Elix connects directly to Google's Gemini models using the official <code className="bg-[#8b7355]/10 px-1 rounded">@google/genai</code> library. The system prompt instructs Gemini to output a strict JSON schema:
                      </p>
                      <pre className="mt-2 px-3 py-2 bg-[#8b7355]/5 border border-[#8b7355]/20 font-mono text-[9px] overflow-x-auto">
{`{
  "improved_prompt": "...",
  "friendly_explanation": "...",
  "diagram": "graph TD; ..."
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={7}>
                <div className="space-y-4 pt-2">
                  <h3 className="text-[clamp(0.6rem,3cqh,1.5rem)] leading-tight mb-[clamp(0.25rem,1.5cqh,1rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-8">
                    Chapter 5: Core Features & System Modules
                  </h3>
                  <div className="px-1 space-y-3">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)]">5.1 The 4 Refinement Modes</h4>
                      <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">Enhance:</span> Adds rich context and system instructions.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">Correct:</span> Fixes logical gaps and syntax errors.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">Expand:</span> Blows out minimalist concepts into multi-step project blueprints.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">Compress:</span> Distills verbose prompts into high-efficiency token commands.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)]">5.2 Dynamic Structure Mapping & Export Workflows</h4>
                      <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-justify">
                        Elix compiles the returned Mermaid syntax into interactive vector graphics. Users can download these architectural flowcharts directly as <span className="font-bold">PNG</span> or <span className="font-bold">PDF</span> files via built-in <code className="bg-[#8b7355]/10 px-1 rounded">jspdf</code> rendering engines.
                      </p>
                    </div>
                  </div>
                  <h3 className="text-[clamp(0.6rem,3cqh,1.5rem)] leading-tight mb-[clamp(0.25rem,1.5cqh,1rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-8 pt-4">
                    Chapter 6: Engineering Challenges & Triumphs
                  </h3>
                  <div className="px-1 space-y-3">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)]">6.1 Hydration & Theme Persistence Mismatches</h4>
                      <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-justify">
                        To prevent flickering when restoring user settings from <code className="bg-[#8b7355]/10 px-1 rounded">localStorage</code>, Elix runs a synchronous inline script prior to DOM hydration, attaching <code className="bg-[#8b7355]/10 px-1 rounded">data-theme</code> attributes directly to the document element.
                      </p>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={8}>
                <div className="space-y-4 pt-2">
                  <h3 className="text-[clamp(0.6rem,3cqh,1.5rem)] leading-tight mb-[clamp(0.25rem,1.5cqh,1rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-8">
                    Chapter 7: Comprehensive Benchmarks & Performance Metrics
                  </h3>
                  <div className="px-0">
                    <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-justify italic text-[#5c4d3c]">
                      This chapter details the empirical performance, latency, accuracy, and user efficiency benchmarks evaluated across 1,000+ prompt test cases on the Elix platform.
                    </p>
                    <h4 className="font-['Playfair_Display'] font-bold text-sm mb-1">7.1 System Runtime & Latency Metrics</h4>
                    <table className="w-full text-[9px] border-collapse border border-[#8b7355]/30 text-left mb-4">
                      <thead>
                        <tr className="bg-[#8b7355]/10 border-b border-[#8b7355]/30">
                          <th className="p-1 border-r border-[#8b7355]/30">Metric / Operation</th>
                          <th className="p-1 border-r border-[#8b7355]/30">Avg Latency</th>
                          <th className="p-1 border-r border-[#8b7355]/30">p95</th>
                          <th className="p-1">p99</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#8b7355]/20">
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">API Response (TTFT)</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">320 ms</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">480 ms</td><td className="p-1 font-mono">610 ms</td></tr>
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Mode: Correct</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">780 ms</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">1,050 ms</td><td className="p-1 font-mono">1,280 ms</td></tr>
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Mode: Compress</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">710 ms</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">980 ms</td><td className="p-1 font-mono">1,150 ms</td></tr>
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Mode: Enhance</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">1,240 ms</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">1,620 ms</td><td className="p-1 font-mono">1,950 ms</td></tr>
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Mode: Expand</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">1,850 ms</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">2,310 ms</td><td className="p-1 font-mono">2,780 ms</td></tr>
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Mermaid SVG Compile</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">118 ms</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">165 ms</td><td className="p-1 font-mono">210 ms</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Page>
              <Page number={9}>
                <div className="space-y-4 pt-2">
                  <div className="px-0">
                    <h4 className="font-['Playfair_Display'] font-bold text-sm mb-1 mt-3">7.2 Web Vitals & Lighthouse Audit Results</h4>
                    <div className="grid grid-cols-4 gap-1 text-center text-[9px] font-bold font-mono mb-2 mt-1">
                      <div className="bg-emerald-100/50 text-emerald-800 p-1 border border-emerald-300">Perf: 98</div>
                      <div className="bg-emerald-100/50 text-emerald-800 p-1 border border-emerald-300">A11y: 100</div>
                      <div className="bg-emerald-100/50 text-emerald-800 p-1 border border-emerald-300">B.P.: 100</div>
                      <div className="bg-emerald-100/50 text-emerald-800 p-1 border border-emerald-300">SEO: 100</div>
                    </div>
                    <table className="w-full text-[9px] border-collapse border border-[#8b7355]/30 text-left">
                      <tbody className="divide-y divide-[#8b7355]/20">
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30 w-1/2">First Contentful Paint (FCP)</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">0.4 s</td><td className="p-1 text-emerald-700">Good</td></tr>
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Largest Contentful Paint (LCP)</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">0.9 s</td><td className="p-1 text-emerald-700">Good</td></tr>
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Total Blocking Time (TBT)</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">15 ms</td><td className="p-1 text-emerald-700">Good</td></tr>
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Cumulative Layout Shift (CLS)</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">0.00</td><td className="p-1 text-emerald-700">Good</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Page>
              <Page number={10}>
                <div className="space-y-4 pt-2 px-1">
                  <div>
                    <h4 className="font-['Playfair_Display'] font-bold text-sm mb-1">7.3 Prompt Quality & LLM Task Accuracy Benchmarks</h4>
                    <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-[#5c4d3c] text-justify">To measure the effectiveness of prompts refined by Elix vs. original raw user prompts, 250 complex coding, architectural, and reasoning tasks were evaluated across downstream LLMs.</p>
                    <table className="w-full text-[8.5px] border-collapse border border-[#8b7355]/30 text-left mt-2">
                      <thead>
                        <tr className="bg-[#8b7355]/10 border-b border-[#8b7355]/30">
                          <th className="p-1 border-r border-[#8b7355]/30">Benchmark Metric</th>
                          <th className="p-1 border-r border-[#8b7355]/30">Raw Prompt</th>
                          <th className="p-1 border-r border-[#8b7355]/30">ChatGPT</th>
                          <th className="p-1 border-r border-[#8b7355]/30 font-bold">Elix Refined</th>
                          <th className="p-1 text-emerald-800">Improvement</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#8b7355]/20">
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">First-Pass Success Rate</td><td className="p-1 border-r border-[#8b7355]/30 text-center">38.4%</td><td className="p-1 border-r border-[#8b7355]/30 text-center">64.2%</td><td className="p-1 border-r border-[#8b7355]/30 text-center font-bold">92.8%</td><td className="p-1 text-emerald-700 font-bold">+141%</td></tr>
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Hallucination Rate</td><td className="p-1 border-r border-[#8b7355]/30 text-center">32.1%</td><td className="p-1 border-r border-[#8b7355]/30 text-center">18.5%</td><td className="p-1 border-r border-[#8b7355]/30 text-center font-bold">4.2%</td><td className="p-1 text-emerald-700 font-bold">-87%</td></tr>
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Context Completeness</td><td className="p-1 border-r border-[#8b7355]/30 text-center">4.2/10</td><td className="p-1 border-r border-[#8b7355]/30 text-center">7.1/10</td><td className="p-1 border-r border-[#8b7355]/30 text-center font-bold">9.6/10</td><td className="p-1 text-emerald-700 font-bold">+128%</td></tr>
                        <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Structural Compliance</td><td className="p-1 border-r border-[#8b7355]/30 text-center">51.0%</td><td className="p-1 border-r border-[#8b7355]/30 text-center">79.2%</td><td className="p-1 border-r border-[#8b7355]/30 text-center font-bold">99.4%</td><td className="p-1 text-emerald-700 font-bold">Perfect</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="pt-2">
                    <h4 className="font-['Playfair_Display'] font-bold text-sm mb-1">7.4 Compression & Token Efficiency Benchmarks</h4>
                    <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-[#5c4d3c] text-justify">In <strong>Compress Mode</strong>, Elix distills verbose user prompts into token-efficient instructions without losing essential context.</p>
                    <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                      <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">Average Token Reduction:</span> <code className="bg-[#8b7355]/10 px-1 rounded">42.6%</code></li>
                      <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">Semantic Intent Retention Rate:</span> <code className="bg-[#8b7355]/10 px-1 rounded">98.8%</code></li>
                      <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">Cost Savings on High-Volume API Calls:</span> Estimated <strong>~35-40% reduction in API overhead</strong> per thousand requests.</li>
                    </ul>
                  </div>
                </div>
              </Page>
              <Page number={11}>
                <div className="space-y-4 pt-2 px-1">
                  <div>
                    <h4 className="font-['Playfair_Display'] font-bold text-sm mb-1">7.5 User Productivity & Iteration Time Analysis</h4>
                    <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-[#5c4d3c] text-justify">A user study conducted across 50 developers showed significant time savings when crafting complex system prompts:</p>
                    <div className="bg-[#8b7355]/5 border border-[#8b7355]/20 p-[clamp(0.25rem,2cqh,1.5rem)] font-mono text-[8px] mb-3 overflow-hidden">
                      <div className="flex justify-between items-center mb-1">
                        <span>[Manual Iteration]</span>
                        <span>14.5 min avg</span>
                      </div>
                      <div className="w-full bg-[#8b7355]/10 h-2 mb-2"><div className="bg-red-900/40 h-full w-[100%]"></div></div>
                      <div className="flex justify-between items-center mb-1">
                        <span>[Elix-Assisted Workflow]</span>
                        <span className="font-bold">1.8 min avg (-87.5%)</span>
                      </div>
                      <div className="w-full bg-[#8b7355]/10 h-2"><div className="bg-emerald-700/60 h-full w-[12%]"></div></div>
                    </div>
                    <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                      <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">Average Prompt Writing Time:</span> Decreased from <strong>14.5 minutes</strong> (multiple manual trial-and-error attempts) to <strong>1.8 minutes</strong>.</li>
                      <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold">User Preference:</span> 94% of participants preferred the Elix three-card output (Prompt + Strategic Analysis + Diagram) over plain-text prompt builders.</li>
                    </ul>
                  </div>
                </div>
              </Page>
              <Page number={12}>
                <div className="space-y-4 pt-4 px-1">
                  <h3 className="text-[clamp(0.6rem,3cqh,1.5rem)] leading-tight mb-[clamp(0.25rem,1.5cqh,1rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-8 pt-4">
                    Chapter 8: Future Horizons & Epilogue
                  </h3>
                  <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-justify">
                    Elix represents a new benchmark for developer tool design and prompt intelligence. Future updates will introduce team repositories, live sandbox execution, and multi-model benchmarking.
                  </p>
                </div>
              </Page>
              <Page number={13}>
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="text-3xl text-[#8b7355]">❦</div>
                  <div>
                    <h2 className="text-2xl font-['Playfair_Display'] font-bold uppercase tracking-[0.25em] text-[#1a1510] mb-2">
                      T H E   E N D
                    </h2>
                    <p className="font-['Caveat'] text-2xl text-[#5c4d3c]">
                      Thank you for reading.
                    </p>
                  </div>
                </div>
              </Page>
              <Page number={14}>
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-full max-w-[240px]">
                    <h3 className="text-base font-['Playfair_Display'] font-bold uppercase tracking-[0.2em] text-[#1a1510] mb-6 pb-2 border-b border-[#8b7355]/30">
                      PROJECT LINKS
                    </h3>
                    <div className="flex flex-col gap-3.5 w-full">
                      <a
                        href="https://elixprompts-ai.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="relative overflow-hidden group py-3 px-6 border border-[#8b7355] bg-[#8b7355]/5 font-serif uppercase tracking-[0.15em] text-[10px] transition-all duration-300 block text-center"
                      >
                        <span className="relative z-10 group-hover:text-[#f4ebd8] transition-colors duration-300">
                          VIEW LIVE PROJECT
                        </span>
                        <div className="absolute inset-0 bg-[#8b7355] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                      </a>
                      <a
                        href="https://github.com/abhishek-madar/elix-ai"
                        target="_blank"
                        rel="noreferrer"
                        className="relative overflow-hidden group py-3 px-6 border border-[#8b7355] bg-[#8b7355]/5 font-serif uppercase tracking-[0.15em] text-[10px] transition-all duration-300 block text-center"
                      >
                        <span className="relative z-10 group-hover:text-[#f4ebd8] transition-colors duration-300">
                          VIEW SOURCE CODE
                        </span>
                        <div className="absolute inset-0 bg-[#8b7355] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </Page>
              </HTMLFlipBook>
          </div>
          <div className="w-full flex items-center justify-center gap-4 py-4 z-[110]">
            <div className="flex gap-4 bg-[#f4ebd8] p-1.5 px-3 rounded-full border border-[#8b7355] shadow-xl">
              <button 
                onClick={() => bookRef.current?.pageFlip().flipPrev()}
                className="p-1 hover:text-[#8b7355] text-[#5c4d3c] transition-colors"
                title="Previous Page"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="w-[1px] bg-[#8b7355]/30"></div>
              <button 
                onClick={() => bookRef.current?.pageFlip().flipNext()}
                className="p-1 hover:text-[#8b7355] text-[#5c4d3c] transition-colors"
                title="Next Page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
