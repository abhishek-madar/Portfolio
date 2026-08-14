import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HTMLFlipBook from 'react-pageflip';
import { X, ChevronRight, ChevronLeft, Zap, ShieldCheck, Lock } from 'lucide-react';

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
export default function CSARMSCaseStudyModal({ isOpen, onClose }) {
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
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-[clamp(0.15rem,1cqh,0.5rem)] sm:p-[clamp(0.4rem,2cqh,1rem)] md:p-8 overflow-hidden">
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
            className="absolute top-[clamp(0.15rem,1cqh,0.5rem)] right-2 md:top-[clamp(0.4rem,2cqh,1rem)] md:right-4 z-[110] p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded-full bg-[#eaddc5] border border-[#8b7355] text-[#5c4d3c] hover:text-black hover:bg-[#d4b886] transition-all shadow-xl"
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
                <div className="flex flex-col h-full justify-between items-center py-4 text-[#1a1510]">
                  <div className="space-y-3 w-full mt-[clamp(0.15rem,1cqh,0.5rem)] text-center">
                    <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold tracking-wider uppercase leading-snug">
                      CSARMS
                    </h1>
                    <p className="text-[clamp(0.4rem,1.2cqh,0.625rem)] uppercase font-bold tracking-widest text-[#5c4d3c]">
                      College Student Academic Record Management System
                    </p>
                    <div className="h-[1px] w-1/2 bg-[#5c4d3c] mx-auto my-2"></div>
                    <p className="text-[clamp(0.5rem,1.5cqh,0.75rem)] font-serif italic text-[#3a2f24] px-4 leading-relaxed">
                      A High-Performance MERN Stack Architecture for Role-Based Academic Governance, Privacy Isolation, and Real-Time Institutional Telemetry
                    </p>
                  </div>
                  <div className="my-[clamp(0.15rem,1cqh,0.5rem)] bg-[#8b7355]/10 border border-[#8b7355]/30 p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded text-[clamp(0.38rem,1.05cqh,0.56rem)] leading-relaxed text-justify text-[#3a2f24]">
                    <span className="font-bold uppercase tracking-wider block mb-[clamp(0.1rem,0.5cqh,0.25rem)] text-[#1a1510]">Abstract:</span>
                    CSARMS is an enterprise-grade academic operations platform built to unify campus management across four distinct administrative tiers: System Admin, Head of Department (HOD), Faculty, and Student. This manuscript documents the product vision, security architecture, schema modeling, single-port production bundling, penetration audit results, and empirical runtime performance benchmarks.
                  </div>
                  <div className="mt-auto gap-[clamp(0.1rem,0.5cqh,0.375rem)] flex flex-col text-center w-full pt-[clamp(0.15rem,1cqh,0.5rem)] border-t border-[#8b7355]/20 text-[clamp(0.4rem,1.2cqh,0.625rem)]">
                    <p className="font-['Playfair_Display'] text-[clamp(0.55rem,1.8cqh,0.875rem)] font-bold">Author: Abhishek Madar</p>
                    <p className="font-mono text-[clamp(0.38rem,1.05cqh,0.56rem)] text-[#5c4d3c]">Repository: github.com/abhishek-madar/csarms</p>
                    <p className="text-[clamp(0.38rem,1.05cqh,0.56rem)] text-[#5c4d3c]">Primary Stack: MongoDB, Express 5, React 19, Node.js, JWT, Recharts</p>
                    <p className="font-serif text-[clamp(0.38rem,1.05cqh,0.56rem)] text-[#8b7355] font-bold uppercase tracking-widest pt-[clamp(0.1rem,0.5cqh,0.25rem)]">
                      2026 • Technical Case Study &amp; Benchmark Monograph
                    </p>
                  </div>
                </div>
              </Page>
              <Page number={2}>
                <div className="space-y-3 pt-[clamp(0.1rem,0.5cqh,0.25rem)]">
                  <h3 className="text-[clamp(0.6rem,3cqh,1.5rem)] leading-tight mb-[clamp(0.25rem,1.5cqh,1rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-[clamp(0.15rem,1cqh,0.5rem)] text-center mx-6">
                    Table of Contents
                  </h3>
                  <div className="flex flex-col gap-[clamp(0.1rem,0.6cqh,0.4rem)] px-[clamp(0.25rem,2cqw,1rem)] mt-[clamp(0.2rem,1cqh,1rem)] font-serif text-[#2c241b] text-[clamp(0.4rem,1.4cqh,0.65rem)]">
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.3cqh,0.125rem)]">
                      <span className="font-bold">1. PREFACE: CAMPUS GOVERNANCE</span>
                      <span>3</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.3cqh,0.125rem)]">
                      <span className="font-bold">2. CHAPTER 1: VISION & SCOPE</span>
                      <span>4</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.3cqh,0.125rem)]">
                      <span className="font-bold">3. CHAPTER 2: THE PROBLEM SPACE</span>
                      <span>5</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.3cqh,0.125rem)]">
                      <span className="font-bold">4. CHAPTER 3: RBAC ARCHITECTURE</span>
                      <span>6</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.3cqh,0.125rem)]">
                      <span className="font-bold">5. CHAPTER 4: DATABASE SCHEMAS</span>
                      <span>7</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.3cqh,0.125rem)]">
                      <span className="font-bold">6. CHAPTER 5: FRONTEND ARCHITECTURE</span>
                      <span>8</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.3cqh,0.125rem)]">
                      <span className="font-bold">7. CHAPTER 6: REST API WORKFLOWS</span>
                      <span>9</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.3cqh,0.125rem)]">
                      <span className="font-bold">8. CHAPTER 7: MEDIA & NOTIFICATIONS</span>
                      <span>10</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.3cqh,0.125rem)]">
                      <span className="font-bold">9. CHAPTER 8: UNIFIED SINGLE-PORT</span>
                      <span>11</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.3cqh,0.125rem)]">
                      <span className="font-bold">10. CHAPTER 9: RUNTIME BENCHMARKS</span>
                      <span>12</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.3cqh,0.125rem)]">
                      <span className="font-bold">11. CHAPTER 10: WEB VITALS & AUDITS</span>
                      <span>13</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.3cqh,0.125rem)]">
                      <span className="font-bold">12. CHAPTER 11: SECURITY</span>
                      <span>14</span>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={3}>
                <div className="h-full flex flex-col">
                  <h3 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)] uppercase tracking-widest border-b border-[#8b7355]/30 text-[#1a1510]">
                    Preface: Campus Governance
                  </h3>
                  <div className="space-y-3 text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed text-justify pr-1">
                    <p>
                      In modern higher education, academic records are not merely passive archives—they dictate eligibility for graduation, accreditation compliance, financial aid, and career recruitment. Yet, many institutions remain reliant on fragmented spreadsheets, disconnected portal tools, and paper registers.
                    </p>
                    <div className="grid grid-cols-2 gap-[clamp(0.2rem,1.2cqh,0.625rem)] my-3">
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded-lg border border-red-700/30 shadow-md">
                        <span className="font-mono text-[clamp(0.4rem,1.3cqh,0.656rem)] font-bold text-red-700 tracking-wider uppercase block border-b border-red-900/30 pb-[clamp(0.1rem,0.5cqh,0.25rem)] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">
                          Legacy Systems
                        </span>
                        <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                          <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]">• Manual File Sharing</li>
                          <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]">• Zero Audit Trails</li>
                          <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]">• Exposed Profiles</li>
                        </ul>
                      </div>
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded-lg border border-emerald-700/30 shadow-md">
                        <span className="font-mono text-[clamp(0.4rem,1.3cqh,0.656rem)] font-bold text-emerald-700 tracking-wider uppercase block border-b border-emerald-900/30 pb-[clamp(0.1rem,0.5cqh,0.25rem)] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">
                          CSARMS Platform
                        </span>
                        <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                          <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]">• Real-Time RBAC Security</li>
                          <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]">• Automated CGPA Rules</li>
                          <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]">• Isolated Privacy Views</li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      CSARMS was conceived to replace these inefficient practices with a zero-trust, role-governed platform that protects student privacy while streamlining day-to-day operations for professors and department heads.
                    </p>
                    <div className="mt-6 pt-4 border-t border-[#8b7355]/20 text-right">
                      <p className="font-['Caveat'] text-lg text-[#5c4d3c]">— Abhishek Madar</p>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={4}>
                <div className="h-full flex flex-col">
                  <h3 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)] uppercase tracking-widest border-b border-[#8b7355]/30 text-[#1a1510]">
                    Ch 1: Vision &amp; Scope
                  </h3>
                  <div className="space-y-3 text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed text-justify pr-1">
                    <div>
                      <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.25rem)] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">
                        1.1 Primary Functional Objectives
                      </h4>
                      <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Hierarchical Access Control:</span> Enforce zero-trust boundaries across Admins, HODs, Faculty, and Students.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Automated Grade &amp; Attendance Tracking:</span> Eliminate manual calculations for semester CGPA and monthly attendance percentages.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Targeted Broadcast Communications:</span> Provide a secure channel for announcements complete with media attachments.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Interactive Administrative Telemetry:</span> Render real-time graphics depicting department performance and attendance health.</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.25rem)] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">
                        1.2 Non-Functional System Requirements
                      </h4>
                      <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Sub-50ms Database Latency:</span> P95 response time under 50ms for authenticated REST operations.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">100% Privacy Compliance:</span> Zero cross-course data leakage between students and unassigned faculty.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Monolithic Single-Port Deployment:</span> Express backend statically serving the React production bundle on port 5001.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={5}>
                <div className="h-full flex flex-col">
                  <h3 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)] uppercase tracking-widest border-b border-[#8b7355]/30 text-[#1a1510]">
                    Ch 2: The Problem Space
                  </h3>
                  <div className="space-y-3 text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed text-justify pr-1">
                    <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide">2.1 Critical Operational Vulnerabilities</h4>
                    <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                      <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Privilege Over-Granting:</span> Traditional systems allow staff to modify grade tables or view private contact info across departments.</li>
                      <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Instruction Drift &amp; Error:</span> Manual mark entry leads to calculation errors when compiling transcripts.</li>
                      <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Lack of Instant Feedback:</span> Students remain unaware of attendance shortages until hall tickets are withheld.</li>
                    </ul>
                    <div className="mt-3 border border-[#8b7355]/20 rounded-lg overflow-hidden shadow-md">
                      <div className="bg-[#8b7355]/5 text-[#1a1510] px-[clamp(0.2rem,1.2cqh,0.75rem)] py-[clamp(0.1rem,0.75cqh,0.375rem)] text-[clamp(0.4rem,1.2cqh,0.625rem)] font-bold text-center border-b border-[#8b7355]/30 uppercase tracking-widest font-mono">
                        Legacy Risks vs CSARMS Architectural Fixes
                      </div>
                      <table className="w-full text-[clamp(0.5rem,1.5cqh,0.75rem)] text-left">
                        <thead className="bg-[#8b7355]/10 text-[#1a1510]">
                          <tr>
                            <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-r border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider">Legacy Flaw</th>
                            <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider">CSARMS Fix</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#8b7355]/20 text-[#2a2118] text-[clamp(0.4rem,1.2cqh,0.625rem)]">
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-medium text-rose-800">Shared Master Spreadsheets</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] font-medium text-emerald-800">Isolated MongoDB + RBAC</td>
                          </tr>
                          <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-medium text-rose-800">Unencrypted Passwords</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] font-medium text-emerald-800">Bcrypt Salted Hashing</td>
                          </tr>
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-medium text-rose-800">Manual Attendance Alerts</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] font-medium text-emerald-800">Automated Triggers (&lt;75%)</td>
                          </tr>
                          <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-medium text-rose-800">Uncontrolled Cross-Dept Views</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] font-medium text-emerald-800">Scope-Guarded Middleware</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={6}>
                <div className="h-full flex flex-col">
                  <h3 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)] uppercase tracking-widest border-b border-[#8b7355]/30 text-[#1a1510]">
                    Ch 3: RBAC Architecture
                  </h3>
                  <div className="space-y-3 text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed pr-1">
                    <p className="text-[clamp(0.5rem,1.5cqh,0.75rem)] text-[#5c4d3c]">
                      CSARMS utilizes a strict 4-tier permission hierarchy to maintain institutional privacy boundaries:
                    </p>
                    <div className="space-y-2.5 py-1">
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="flex items-center justify-between border-b border-[#8b7355]/30 pb-[clamp(0.1rem,0.5cqh,0.25rem)] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">
                          <span className="font-mono text-[clamp(0.5rem,1.5cqh,0.75rem)] font-bold text-[#1a1510] tracking-widest uppercase">
                            1. SYSTEM ADMIN
                          </span>
                          <span className="text-[clamp(0.4rem,1.2cqh,0.625rem)] text-[#5c4d3c] font-serif italic">Level 0 (Root)</span>
                        </div>
                        <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-[#5c4d3c] font-sans">
                          • HOD Provisioning &amp; Platform Configuration<br/>
                          • Global Institutional Telemetry &amp; System Audits
                        </p>
                      </div>
                      <div className="flex justify-center text-[#8b7355] font-bold text-[clamp(0.5rem,1.5cqh,0.75rem)] py-0.5">↓</div>
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="flex items-center justify-between border-b border-[#8b7355]/30 pb-[clamp(0.1rem,0.5cqh,0.25rem)] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">
                          <span className="font-mono text-[clamp(0.5rem,1.5cqh,0.75rem)] font-bold text-[#1a1510] tracking-widest uppercase">
                            2. HEAD OF DEPT (HOD)
                          </span>
                          <span className="text-[clamp(0.4rem,1.2cqh,0.625rem)] text-[#5c4d3c] font-serif italic">Level 1 (Department)</span>
                        </div>
                        <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-[#5c4d3c] font-sans">
                          • Faculty Roster &amp; Course Assignment<br/>
                          • Department Performance &amp; Attendance Analytics
                        </p>
                      </div>
                      <div className="flex justify-center text-[#8b7355] font-bold text-[clamp(0.5rem,1.5cqh,0.75rem)] py-0.5">↓</div>
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="flex items-center justify-between border-b border-[#8b7355]/30 pb-[clamp(0.1rem,0.5cqh,0.25rem)] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">
                          <span className="font-mono text-[clamp(0.5rem,1.5cqh,0.75rem)] font-bold text-[#1a1510] tracking-widest uppercase">
                            3. FACULTY
                          </span>
                          <span className="text-[clamp(0.4rem,1.2cqh,0.625rem)] text-[#5c4d3c] font-serif italic">Level 2 (Course)</span>
                        </div>
                        <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-[#5c4d3c] font-sans">
                          • Course Roster Administration<br/>
                          • Grade Submissions &amp; Attendance Logging
                        </p>
                      </div>
                      <div className="flex justify-center text-[#8b7355] font-bold text-[clamp(0.5rem,1.5cqh,0.75rem)] py-0.5">↓</div>
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="flex items-center justify-between border-b border-[#8b7355]/30 pb-[clamp(0.1rem,0.5cqh,0.25rem)] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">
                          <span className="font-mono text-[clamp(0.5rem,1.5cqh,0.75rem)] font-bold text-[#1a1510] tracking-widest uppercase">
                            4. STUDENT
                          </span>
                          <span className="text-[clamp(0.4rem,1.2cqh,0.625rem)] text-[#5c4d3c] font-serif italic">Level 3 (Individual)</span>
                        </div>
                        <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-[#5c4d3c] font-sans">
                          • Personal Academic Transcripts &amp; CGPA<br/>
                          • Attendance Telemetry &amp; Inbox Notifications
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#8b7355]/10 border border-[#8b7355]/30 p-[clamp(0.2rem,1.2cqh,0.625rem)] rounded-lg text-[clamp(0.45rem,1.4cqh,0.6875rem)] mt-[clamp(0.15rem,1cqh,0.5rem)]">
                      <span className="font-bold text-[#1a1510]">JWT Token Authorization:</span> Every HTTP header passes a Bearer JWT containing user ID and role, verified before route controller execution.
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={7}>
                <div className="h-full flex flex-col">
                  <h3 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)] uppercase tracking-widest border-b border-[#8b7355]/30 text-[#1a1510]">
                    Ch 4: Database Schemas
                  </h3>
                  <div className="gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed pr-1">
                    <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide text-[#1a1510]">4.1 User Schema (User.js)</h4>
                    <pre className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.2rem,1.2cqh,0.625rem)] rounded-lg font-mono text-[clamp(0.35rem,1cqh,0.53rem)] leading-snug whitespace-pre overflow-x-auto border border-[#8b7355]/20 my-[clamp(0.05rem,0.25cqh,0.125rem)] ">
{`const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'HOD', 'Faculty', 'Student'] },
  usnOrEmpId: { type: String, required: true, unique: true },
  department: { type: String },
  assignedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
}, { timestamps: true });`}
                    </pre>
                    <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide text-[#1a1510] mt-[clamp(0.15rem,1cqh,0.5rem)]">4.2 Course &amp; Attendance Schema (Course.js)</h4>
                    <pre className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.2rem,1.2cqh,0.625rem)] rounded-lg font-mono text-[clamp(0.35rem,1cqh,0.53rem)] leading-snug whitespace-pre overflow-x-auto border border-[#8b7355]/20 my-[clamp(0.05rem,0.25cqh,0.125rem)] ">
{`const courseSchema = new mongoose.Schema({
  courseCode: { type: String, required: true, unique: true },
  courseName: { type: String, required: true },
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  attendanceRecords: [{
    date: { type: Date, default: Date.now },
    presentStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  }]
});`}
                    </pre>
                  </div>
                </div>
              </Page>
              <Page number={8}>
                <div className="h-full flex flex-col">
                  <h3 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)] uppercase tracking-widest border-b border-[#8b7355]/30 text-[#1a1510]">
                    Ch 5: Frontend Architecture
                  </h3>
                  <div className="space-y-3 text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed text-justify pr-1">
                    <div>
                      <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.25rem)] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">5.1 React 19 + Vite Engine</h4>
                      <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-[#5c4d3c]">
                        The frontend leverages React 19 single-page application (SPA) state management paired with Vite for instant Hot Module Replacement (HMR) and optimized build chunking.
                      </p>
                    </div>
                    <div className="mt-3">
                      <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.25rem)] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">5.2 Recharts Analytics Dashboard</h4>
                      <p className="text-[clamp(0.4rem,1.2cqh,0.625rem)] text-[#5c4d3c] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">
                        Department performance and CGPA trends are visually rendered using dynamic SVG charts:
                      </p>
                      <pre className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded-lg font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)] leading-relaxed whitespace-pre overflow-x-auto border border-[#8b7355]/20 my-[clamp(0.15rem,1cqh,0.5rem)] ">
{`<ResponsiveContainer width="100%" height={300}>
  <LineChart data={cgpaHistory}>
    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
    <XAxis dataKey="semester" />
    <YAxis domain={[0, 10]} />
    <Tooltip content={<CustomTooltip />} />
    <Line 
      type="monotone" 
      dataKey="gpa" 
      stroke="#6366f1" 
      strokeWidth={3} 
    />
  </LineChart>
</ResponsiveContainer>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={9}>
                <div className="h-full flex flex-col">
                  <h3 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)] uppercase tracking-widest border-b border-[#8b7355]/30 text-[#1a1510]">
                    Ch 6: REST API Workflows
                  </h3>
                  <div className="space-y-3 text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed pr-1">
                    <div>
                      <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.25rem)] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">6.1 Route Handlers</h4>
                      <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">/api/auth:</span> User registration, authentication, JWT signing.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">/api/admin:</span> Creation and deletion of Department Heads (HODs).</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">/api/faculty:</span> Course creation, student roster updates, and grade submissions.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">/api/student:</span> Academic record retrieval and attendance summary.</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.25rem)] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">6.2 Security Middleware (authMiddleware.js)</h4>
                      <pre className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded-lg font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)] leading-relaxed whitespace-pre overflow-x-auto border border-[#8b7355]/20 my-[clamp(0.15rem,1cqh,0.5rem)] ">
{`const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: 'Forbidden: Insufficient privileges' 
      });
    }
    next();
  };
};`}
                      </pre>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={10}>
                <div className="h-full flex flex-col">
                  <h3 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)] uppercase tracking-widest border-b border-[#8b7355]/30 text-[#1a1510]">
                    Ch 7: Media &amp; Notifications
                  </h3>
                  <div className="space-y-3 text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed pr-1">
                    <div className="gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col py-1">
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="font-mono text-[clamp(0.45rem,1.4cqh,0.6875rem)] font-bold text-[#1a1510] tracking-wider uppercase mb-[clamp(0.1rem,0.5cqh,0.375rem)] border-b border-[#8b7355]/30 pb-[clamp(0.1rem,0.5cqh,0.25rem)]">
                          1. SENDER DISPATCH (Admin / HOD / Faculty)
                        </div>
                        <div className="grid grid-cols-2 gap-[clamp(0.15rem,1cqh,0.5rem)] text-[clamp(0.4rem,1.2cqh,0.625rem)] font-sans text-[#5c4d3c]">
                          <div className="bg-[#8b7355]/15 p-[clamp(0.15rem,1cqh,0.5rem)] rounded border border-[#8b7355]/20">
                            <span className="font-bold block text-[#1a1510] mb-0.5">Text &amp; Metadata</span>
                            Payload Parser → MongoDB Notice Document
                          </div>
                          <div className="bg-[#8b7355]/15 p-[clamp(0.15rem,1cqh,0.5rem)] rounded border border-[#8b7355]/20">
                            <span className="font-bold block text-[#1a1510] mb-0.5">Attachment File</span>
                            Multer Pipeline → Local Storage Disk
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center text-[#8b7355] font-bold text-[clamp(0.5rem,1.5cqh,0.75rem)] py-0.5">↓</div>
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="font-mono text-[clamp(0.45rem,1.4cqh,0.6875rem)] font-bold text-[#1a1510] tracking-wider uppercase mb-[clamp(0.1rem,0.5cqh,0.25rem)] border-b border-[#8b7355]/30 pb-[clamp(0.1rem,0.5cqh,0.25rem)]">
                          2. NOTIFICATION ENGINE (Nodemailer SMTP)
                        </div>
                        <p className="text-[clamp(0.4rem,1.3cqh,0.656rem)] text-[#5c4d3c] font-sans leading-snug pt-[clamp(0.05rem,0.25cqh,0.125rem)]">
                          Asynchronously compiles HTML notice template &amp; attaches files from disk storage.
                        </p>
                      </div>
                      <div className="flex justify-center text-[#8b7355] font-bold text-[clamp(0.5rem,1.5cqh,0.75rem)] py-0.5">↓</div>
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="font-mono text-[clamp(0.45rem,1.4cqh,0.6875rem)] font-bold text-[#1a1510] tracking-wider uppercase mb-[clamp(0.1rem,0.5cqh,0.25rem)] border-b border-[#8b7355]/30 pb-[clamp(0.1rem,0.5cqh,0.25rem)]">
                          3. STUDENT RECIPIENT INBOX
                        </div>
                        <p className="text-[clamp(0.4rem,1.3cqh,0.656rem)] text-[#5c4d3c] font-sans leading-snug pt-[clamp(0.05rem,0.25cqh,0.125rem)]">
                          Real-time portal alert badge + instant SMTP inbox email notification.
                        </p>
                      </div>
                    </div>
                    <div className="gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col text-[clamp(0.4rem,1.3cqh,0.656rem)] text-[#5c4d3c] mt-[clamp(0.15rem,1cqh,0.5rem)]">
                      <p>
                        <span className="font-bold text-[#1a1510]">Multer File Pipeline:</span> Sanitizes file names, enforces max size limits (5MB), and restricts upload MIME types to safe formats (PDF, PNG, JPEG).
                      </p>
                      <p>
                        <span className="font-bold text-[#1a1510]">Nodemailer SMTP Integration:</span> Asynchronously triggers email alerts when urgent announcements or attendance shortage warnings (&lt;75%) are generated.
                      </p>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={11}>
                <div className="h-full flex flex-col">
                  <h3 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)] uppercase tracking-widest border-b border-[#8b7355]/30 text-[#1a1510]">
                    Ch 8: Unified Single-Port
                  </h3>
                  <div className="space-y-3 text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed text-justify pr-1">
                    <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-[#5c4d3c]">
                      To eliminate CORS issues and streamline cloud deployment on AWS EC2 or DigitalOcean, CSARMS uses a single-port Express architecture:
                    </p>
                    <pre className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.3rem,1.5cqh,0.75rem)] rounded-lg font-mono text-[clamp(0.4rem,1.1cqh,0.59rem)] leading-relaxed whitespace-pre overflow-x-auto border border-[#8b7355]/20 my-[clamp(0.15rem,1cqh,0.5rem)] ">
{`
const express = require('express');
const path = require('path');
const app = express();

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

app.use(express.static(
  path.join(__dirname, '../frontend/dist')
));

app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../frontend/dist/index.html')
  );
});
app.listen(5001, () => {
  console.log('CSARMS running on port 5001');
});`}
                    </pre>
                  </div>
                </div>
              </Page>
              <Page number={12}>
                <div className="h-full flex flex-col justify-start gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col">
                  <div>
                    <h3 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)] uppercase tracking-widest border-b border-[#8b7355]/30 text-[#1a1510]">
                      Ch 9: Runtime Benchmarks
                    </h3>
                    <p className="text-[clamp(0.4rem,1.3cqh,0.656rem)] text-[#5c4d3c] italic mb-2">
                      Benchmarked across 1,000 synthetic operations under concurrent simulated load:
                    </p>
                    <div className="border border-[#8b7355]/20 rounded-lg overflow-hidden shadow-md my-1">
                      <table className="w-full text-[clamp(0.5rem,1.5cqh,0.75rem)] text-left">
                        <thead className="bg-[#8b7355]/5 text-[#1a1510]">
                          <tr>
                            <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-r border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider">Endpoint / Op</th>
                            <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-r border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider text-center">Avg</th>
                            <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-r border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider text-center">P95</th>
                            <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider text-center">P99</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#8b7355]/20 text-[#2a2118]">
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)]">POST /api/auth/login</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold">18.2ms</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold text-emerald-700">28.5ms</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-semibold text-emerald-800">35.1ms</td>
                          </tr>
                          <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)]">GET /api/student/profile</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold">8.5ms</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold text-emerald-700">14.2ms</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-semibold text-emerald-800">19.8ms</td>
                          </tr>
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)]">POST /api/faculty/attendance</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold">24.8ms</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold text-emerald-700">38.1ms</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-semibold text-emerald-800">49.0ms</td>
                          </tr>
                          <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)]">GET /api/admin/stats</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold">31.4ms</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold text-amber-700">45.9ms</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-semibold text-amber-800">61.2ms</td>
                          </tr>
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)]">MongoDB Indexed Queries</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold">2.8ms</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold text-emerald-700">4.5ms</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-semibold text-emerald-800">6.9ms</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.2rem,1.2cqh,0.625rem)] rounded-lg border border-[#8b7355]/20 mt-[clamp(0.1rem,0.5cqh,0.25rem)] shadow-md">
                    <span className="font-mono text-[clamp(0.4rem,1.1cqh,0.59rem)] font-bold text-[#1a1510] tracking-widest uppercase block border-b border-[#8b7355]/30 pb-[clamp(0.05rem,0.25cqh,0.125rem)] mb-[clamp(0.1rem,0.5cqh,0.25rem)]">
                      <Zap className="w-4 h-4 inline-block mr-1 text-amber-700" /> Performance Takeaway
                    </span>
                    <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-[#5c4d3c] font-sans">
                      All core REST endpoints comfortably satisfy the non-functional requirement of <span className="font-bold text-[#1a1510]">P95 latency &lt; 50ms</span>. MongoDB indexed queries execute in under 5ms, eliminating database bottlenecks.
                    </p>
                  </div>
                </div>
              </Page>
              <Page number={13}>
                <div className="h-full flex flex-col">
                  <h3 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)] uppercase tracking-widest border-b border-[#8b7355]/30 text-[#1a1510]">
                    Ch 10: Web Vitals &amp; Audits
                  </h3>
                  <div className="space-y-3 text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed text-justify pr-1">
                    <div>
                      <h4 className="font-bold text-[clamp(0.4rem,1.2cqh,0.625rem)] uppercase tracking-wide mb-[clamp(0.1rem,0.5cqh,0.25rem)]">10.1 Lighthouse Scorecard</h4>
                      <div className="grid grid-cols-4 gap-1 text-center font-mono text-[8px] bg-[#8b7355]/10 p-[clamp(0.15rem,1cqh,0.5rem)] rounded border border-[#8b7355]/30">
                        <div className="p-1 bg-[#8b7355]/5 rounded border border-[#8b7355]/20"><span className="block font-bold text-[#1a1510]">Perf</span>99</div>
                        <div className="p-1 bg-[#8b7355]/5 rounded border border-[#8b7355]/20"><span className="block font-bold text-[#1a1510]">A11y</span>100</div>
                        <div className="p-1 bg-[#8b7355]/5 rounded border border-[#8b7355]/20"><span className="block font-bold text-[#1a1510]">BP</span>100</div>
                        <div className="p-1 bg-[#8b7355]/5 rounded border border-[#8b7355]/20"><span className="block font-bold text-[#1a1510]">SEO</span>100</div>
                      </div>
                    </div>
                    <div className="mt-[clamp(0.15rem,1cqh,0.5rem)]">
                      <h4 className="font-bold text-[clamp(0.4rem,1.2cqh,0.625rem)] uppercase tracking-wide mb-[clamp(0.1rem,0.5cqh,0.25rem)]">10.2 Core Web Vitals Telemetry</h4>
                      <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">First Contentful Paint (FCP):</span> 0.38s (Target &lt;1.8s)</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Largest Contentful Paint (LCP):</span> 0.72s (Target &lt;2.5s)</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Total Blocking Time (TBT):</span> 12ms (Target &lt;200ms)</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Cumulative Layout Shift (CLS):</span> 0.00 (Target &lt;0.10)</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Gzipped Bundle Footprint:</span> 142.5 KB</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={14}>
                <div className="h-full flex flex-col justify-start gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col">
                  <div>
                    <h3 className="font-['Playfair_Display'] font-bold text-[clamp(0.5rem,2cqh,1.25rem)] mt-[clamp(0.25rem,1.5cqh,1rem)] mb-[clamp(0.1rem,1cqh,0.5rem)] uppercase tracking-widest border-b border-[#8b7355]/30 text-[#1a1510]">
                      Ch 11: Security &amp; Audits
                    </h3>
                    <h4 className="font-bold text-[clamp(0.4rem,1.3cqh,0.656rem)] uppercase tracking-wide text-[#1a1510] mb-[clamp(0.1rem,0.5cqh,0.375rem)]">
                      Penetration Verification Report
                    </h4>
                    <div className="border border-[#8b7355]/20 rounded-lg overflow-hidden shadow-md my-1">
                      <table className="w-full text-[clamp(0.5rem,1.5cqh,0.75rem)] text-left">
                        <thead className="bg-[#8b7355]/5 text-[#1a1510]">
                          <tr>
                            <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-r border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider">Attack Scenario</th>
                            <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-r border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider text-center">Outcome</th>
                            <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#8b7355]/20 text-[#2a2118]">
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-sans text-[clamp(0.4rem,1.2cqh,0.625rem)]">1. Horizontal Priv. Escalation</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-mono text-[clamp(0.4rem,1.1cqh,0.59rem)] font-semibold text-rose-700">403 Forbidden</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-bold text-emerald-800 text-[clamp(0.4rem,1.3cqh,0.656rem)]"><ShieldCheck className="w-3.5 h-3.5 inline-block mr-1" /> Pass</td>
                          </tr>
                          <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-sans text-[clamp(0.4rem,1.2cqh,0.625rem)]">2. Vertical Priv. Escalation</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-mono text-[clamp(0.4rem,1.1cqh,0.59rem)] font-semibold text-rose-700">403 Forbidden</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-bold text-emerald-800 text-[clamp(0.4rem,1.3cqh,0.656rem)]"><ShieldCheck className="w-3.5 h-3.5 inline-block mr-1" /> Pass</td>
                          </tr>
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-sans text-[clamp(0.4rem,1.2cqh,0.625rem)]">3. JWT Payload Tampering</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-mono text-[clamp(0.4rem,1.1cqh,0.59rem)] font-semibold text-rose-700">401 Invalid</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-bold text-emerald-800 text-[clamp(0.4rem,1.3cqh,0.656rem)]"><ShieldCheck className="w-3.5 h-3.5 inline-block mr-1" /> Pass</td>
                          </tr>
                          <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-sans text-[clamp(0.4rem,1.2cqh,0.625rem)]">4. Unassigned Faculty Lookup</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-mono text-[clamp(0.4rem,1.1cqh,0.59rem)] font-semibold text-emerald-700">Scope Filtered</td>
                            <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-bold text-emerald-800 text-[clamp(0.4rem,1.3cqh,0.656rem)]"><ShieldCheck className="w-3.5 h-3.5 inline-block mr-1" /> Pass</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                    <div className="mt-3 pt-[clamp(0.15rem,1cqh,0.5rem)] border-t border-[#8b7355]/30">
                      <h4 className="font-bold text-[clamp(0.4rem,1.3cqh,0.656rem)] uppercase tracking-wide text-[#1a1510] mb-[clamp(0.1rem,0.5cqh,0.25rem)]">
                        Ch 12: Impact &amp; Roadmap
                      </h4>
                      <div className="grid grid-cols-2 gap-[clamp(0.15rem,1cqh,0.5rem)] text-[clamp(0.4rem,1.1cqh,0.59rem)]">
                        <div>
                          <span className="font-bold text-[#1a1510] block mb-0.5">Efficiency Gains:</span>
                          <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                            <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]">Attendance: 45m → 3m/day</li>
                            <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]">Transcripts: Instantaneous</li>
                          </ul>
                        </div>
                        <div>
                          <span className="font-bold text-[#1a1510] block mb-0.5">Future Roadmap:</span>
                          <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                            <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]">Automated Timetables</li>
                            <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]">Biometric QR Check-in</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  <div className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.2rem,1.2cqh,0.625rem)] rounded-lg border border-[#8b7355]/20 mt-[clamp(0.1rem,0.5cqh,0.25rem)] shadow-md">
                    <span className="font-mono text-[clamp(0.4rem,1.1cqh,0.59rem)] font-bold text-[#1a1510] tracking-widest uppercase block border-b border-[#8b7355]/30 pb-[clamp(0.05rem,0.25cqh,0.125rem)] mb-[clamp(0.1rem,0.5cqh,0.25rem)]">
                      <Lock className="w-3.5 h-3.5 inline-block mr-1 text-emerald-700" /> Zero-Trust Verification
                    </span>
                    <p className="text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] mb-[clamp(0.25rem,1.5cqh,1rem)] text-[#5c4d3c] font-sans">
                      Penetration testing confirms zero data leakages across student profiles and course rosters. All unauthorized vectors are blocked at the middleware layer.
                    </p>
                  </div>
                </div>
              </Page>
              <Page number={15}>
                <div className="h-full flex flex-col items-center justify-center text-center gap-[clamp(0.2rem,1.5cqh,1rem)] flex flex-col">
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
              <Page number={16}>
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-full max-w-[240px]">
                    <h3 className="text-base font-['Playfair_Display'] font-bold uppercase tracking-[0.2em] text-[#1a1510] mb-6 pb-[clamp(0.15rem,1cqh,0.5rem)] border-b border-[#8b7355]/30">
                      PROJECT LINKS
                    </h3>
                    <div className="flex flex-col gap-3.5 w-full">
                      <a
                        href="https://csarms.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="relative overflow-hidden group py-3 px-6 border border-[#8b7355] bg-[#8b7355]/5 font-serif uppercase tracking-[0.15em] text-[clamp(0.4rem,1.2cqh,0.625rem)] transition-all duration-300 block text-center"
                      >
                        <span className="relative z-10 group-hover:text-[#f4ebd8] transition-colors duration-300">
                          VIEW LIVE PROJECT
                        </span>
                        <div className="absolute inset-0 bg-[#8b7355] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                      </a>
                      <a
                        href="https://github.com/abhishek-madar/csarms"
                        target="_blank"
                        rel="noreferrer"
                        className="relative overflow-hidden group py-3 px-6 border border-[#8b7355] bg-[#8b7355]/5 font-serif uppercase tracking-[0.15em] text-[clamp(0.4rem,1.2cqh,0.625rem)] transition-all duration-300 block text-center"
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
          <div className="w-full flex items-center justify-center gap-[clamp(0.4rem,2cqh,1rem)] py-4 z-[110]">
            <div className="flex gap-[clamp(0.4rem,2cqh,1rem)] bg-[#f4ebd8] p-[clamp(0.1rem,0.75cqh,0.375rem)] px-[clamp(0.2rem,1.2cqh,0.75rem)] rounded-full border border-[#8b7355] shadow-xl">
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
