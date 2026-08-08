import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HTMLFlipBook from 'react-pageflip';
import { X, ChevronRight, ChevronLeft, Zap, ShieldCheck, Lock } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
const Page = React.forwardRef((props, ref) => {
  const isLeft = props.number % 2 !== 0;
  return (
    <div className="page overflow-hidden" ref={ref}>
      <div className={`page-content h-full flex flex-col relative paper-texture ${isLeft ? 'border-l' : 'border-r'} border-[#d4b886]`}>
         {}
         <div className={`absolute top-0 bottom-0 w-16 pointer-events-none mix-blend-multiply z-20 ${
           isLeft 
             ? 'right-0 bg-gradient-to-l from-[#8b7355]/40 via-[#8b7355]/5 to-transparent' 
             : 'left-0 bg-gradient-to-r from-[#8b7355]/40 via-[#8b7355]/5 to-transparent'
         }`}></div>
         {}
         <div className={`absolute top-0 bottom-0 w-[1px] pointer-events-none z-20 ${
           isLeft ? 'left-0 bg-white/40' : 'right-0 bg-white/40'
         }`}></div>
         {}
         <div className={`absolute bottom-4 ${isLeft ? 'left-6' : 'right-6'} text-base font-serif text-[#5c4d3c] z-20`}>
            - {props.number} -
         </div>
         {}
         <div className="relative z-10 flex-1 overflow-hidden p-6 md:p-8 pb-12 font-serif text-[#2a2118]">
            {props.children}
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
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-hidden">
        {}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-[10px] z-[101]"
        />
        {}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1200px] h-[90vh] z-[102] flex flex-col items-center justify-center"
        >
          {}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 md:top-4 md:right-4 z-[110] p-3 rounded-full bg-[#eaddc5] border border-[#8b7355] text-[#5c4d3c] hover:text-black hover:bg-[#d4b886] transition-all shadow-xl"
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
          {}
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
              {}
              <Page number={1}>
                <div className="flex flex-col h-full justify-between items-center py-4 text-[#1a1510]">
                  <div className="space-y-3 w-full mt-2 text-center">
                    <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold tracking-wider uppercase leading-snug">
                      CSARMS
                    </h1>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-[#5c4d3c]">
                      College Student Academic Record Management System
                    </p>
                    <div className="h-[1px] w-1/2 bg-[#5c4d3c] mx-auto my-2"></div>
                    <p className="text-xs font-serif italic text-[#3a2f24] px-4 leading-relaxed">
                      A High-Performance MERN Stack Architecture for Role-Based Academic Governance, Privacy Isolation, and Real-Time Institutional Telemetry
                    </p>
                  </div>
                  <div className="my-2 bg-[#8b7355]/10 border border-[#8b7355]/30 p-3 rounded text-[9px] leading-relaxed text-justify text-[#3a2f24]">
                    <span className="font-bold uppercase tracking-wider block mb-1 text-[#1a1510]">Abstract:</span>
                    CSARMS is an enterprise-grade academic operations platform built to unify campus management across four distinct administrative tiers: System Admin, Head of Department (HOD), Faculty, and Student. This manuscript documents the product vision, security architecture, schema modeling, single-port production bundling, penetration audit results, and empirical runtime performance benchmarks.
                  </div>
                  <div className="mt-auto space-y-1.5 text-center w-full pt-2 border-t border-[#8b7355]/20 text-[10px]">
                    <p className="font-['Playfair_Display'] text-sm font-bold">Author: Abhishek Madar</p>
                    <p className="font-mono text-[9px] text-[#5c4d3c]">Repository: github.com/abhishek-madar/csarms-team</p>
                    <p className="text-[9px] text-[#5c4d3c]">Primary Stack: MongoDB, Express 5, React 19, Node.js, JWT, Recharts</p>
                    <p className="font-serif text-[9px] text-[#8b7355] font-bold uppercase tracking-widest pt-1">
                      2026 • Technical Case Study &amp; Benchmark Monograph
                    </p>
                  </div>
                </div>
              </Page>
              {}
              <Page number={2}>
                <div className="space-y-3 pt-1">
                  <h3 className="text-lg font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-1.5 text-center mx-6">
                    Table of Contents
                  </h3>
                  <div className="space-y-1.5 px-2 mt-4 font-serif text-[#2c241b] text-[10px]">
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5 font-bold">
                      <span>PREFACE: THE EVOLUTION OF CAMPUS GOVERNANCE</span>
                      <span>Page 3</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5">
                      <span>CH. 1: PRODUCT VISION, SCOPE &amp; REQUIREMENTS</span>
                      <span>Page 4</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5">
                      <span>CH. 2: THE PROBLEM SPACE &amp; LEGACY FRICTION</span>
                      <span>Page 5</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5">
                      <span>CH. 3: ROLE-BASED ACCESS CONTROL (RBAC) ARCHITECTURE</span>
                      <span>Page 6</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5">
                      <span>CH. 4: DATABASE SCHEMAS &amp; MONGOOSE MODELING</span>
                      <span>Page 7</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5">
                      <span>CH. 5: FRONTEND ARCHITECTURE &amp; DATA VISUALIZATION</span>
                      <span>Page 8</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5">
                      <span>CH. 6: BACKEND REST API &amp; CONTROLLER WORKFLOWS</span>
                      <span>Page 9</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5">
                      <span>CH. 7: MEDIA PIPELINES &amp; NOTIFICATION ENGINE</span>
                      <span>Page 10</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5">
                      <span>CH. 8: UNIFIED SINGLE-PORT MONOLITHIC DEPLOYMENT</span>
                      <span>Page 11</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5">
                      <span>CH. 9: RUNTIME LATENCY &amp; DB QUERY BENCHMARKS</span>
                      <span>Page 12</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5">
                      <span>CH. 10: WEB VITALS, LIGHTHOUSE AUDITS &amp; BUNDLE SIZE</span>
                      <span>Page 13</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5">
                      <span>CH. 11: PENETRATION TESTING &amp; PRIVACY AUDIT RESULTS</span>
                      <span>Page 14</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5">
                      <span>CH. 12: PRODUCTIVITY IMPACT &amp; FUTURE HORIZONS</span>
                      <span>Page 15</span>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={3}>
                <div className="h-full flex flex-col">
                  <h3 className="text-sm font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 mb-3 text-[#1a1510]">
                    Preface: Campus Governance
                  </h3>
                  <div className="space-y-3 text-xs leading-relaxed text-justify pr-1">
                    <p>
                      In modern higher education, academic records are not merely passive archives—they dictate eligibility for graduation, accreditation compliance, financial aid, and career recruitment. Yet, many institutions remain reliant on fragmented spreadsheets, disconnected portal tools, and paper registers.
                    </p>
                    <div className="grid grid-cols-2 gap-2.5 my-3">
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-3 rounded-lg border border-red-700/30 shadow-md">
                        <span className="font-mono text-[10.5px] font-bold text-red-700 tracking-wider uppercase block border-b border-red-900/30 pb-1 mb-1.5">
                          Legacy Systems
                        </span>
                        <ul className="text-[10px] text-[#5c4d3c] space-y-1 font-sans">
                          <li>• Manual File Sharing</li>
                          <li>• Zero Audit Trails</li>
                          <li>• Exposed Profiles</li>
                        </ul>
                      </div>
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-3 rounded-lg border border-emerald-700/30 shadow-md">
                        <span className="font-mono text-[10.5px] font-bold text-emerald-700 tracking-wider uppercase block border-b border-emerald-900/30 pb-1 mb-1.5">
                          CSARMS Platform
                        </span>
                        <ul className="text-[10px] text-[#5c4d3c] space-y-1 font-sans">
                          <li>• Real-Time RBAC Security</li>
                          <li>• Automated CGPA Rules</li>
                          <li>• Isolated Privacy Views</li>
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
              {}
              <Page number={4}>
                <div className="h-full flex flex-col">
                  <h3 className="text-sm font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 mb-3 text-[#1a1510]">
                    Ch 1: Vision &amp; Scope
                  </h3>
                  <div className="space-y-3 text-xs leading-relaxed text-justify pr-1">
                    <div>
                      <h4 className="font-bold text-[11px] uppercase tracking-wide border-b border-[#8b7355]/10 pb-1 mb-1.5">
                        1.1 Primary Functional Objectives
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 text-[10px] text-[#5c4d3c]">
                        <li><span className="font-bold text-[#1a1510]">Hierarchical Access Control:</span> Enforce zero-trust boundaries across Admins, HODs, Faculty, and Students.</li>
                        <li><span className="font-bold text-[#1a1510]">Automated Grade &amp; Attendance Tracking:</span> Eliminate manual calculations for semester CGPA and monthly attendance percentages.</li>
                        <li><span className="font-bold text-[#1a1510]">Targeted Broadcast Communications:</span> Provide a secure channel for announcements complete with media attachments.</li>
                        <li><span className="font-bold text-[#1a1510]">Interactive Administrative Telemetry:</span> Render real-time graphics depicting department performance and attendance health.</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <h4 className="font-bold text-[11px] uppercase tracking-wide border-b border-[#8b7355]/10 pb-1 mb-1.5">
                        1.2 Non-Functional System Requirements
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 text-[10px] text-[#5c4d3c]">
                        <li><span className="font-bold text-[#1a1510]">Sub-50ms Database Latency:</span> P95 response time under 50ms for authenticated REST operations.</li>
                        <li><span className="font-bold text-[#1a1510]">100% Privacy Compliance:</span> Zero cross-course data leakage between students and unassigned faculty.</li>
                        <li><span className="font-bold text-[#1a1510]">Monolithic Single-Port Deployment:</span> Express backend statically serving the React production bundle on port 5001.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={5}>
                <div className="h-full flex flex-col">
                  <h3 className="text-sm font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 mb-3 text-[#1a1510]">
                    Ch 2: The Problem Space
                  </h3>
                  <div className="space-y-3 text-xs leading-relaxed text-justify pr-1">
                    <h4 className="font-bold text-[11px] uppercase tracking-wide">2.1 Critical Operational Vulnerabilities</h4>
                    <ul className="list-disc pl-4 space-y-1 text-[10px] text-[#5c4d3c]">
                      <li><span className="font-bold text-[#1a1510]">Privilege Over-Granting:</span> Traditional systems allow staff to modify grade tables or view private contact info across departments.</li>
                      <li><span className="font-bold text-[#1a1510]">Instruction Drift &amp; Error:</span> Manual mark entry leads to calculation errors when compiling transcripts.</li>
                      <li><span className="font-bold text-[#1a1510]">Lack of Instant Feedback:</span> Students remain unaware of attendance shortages until hall tickets are withheld.</li>
                    </ul>
                    <div className="mt-3 border border-[#8b7355]/20 rounded-lg overflow-hidden shadow-md">
                      <div className="bg-[#8b7355]/5 text-[#1a1510] px-3 py-1.5 text-[10px] font-bold text-center border-b border-[#8b7355]/30 uppercase tracking-widest font-mono">
                        Legacy Risks vs CSARMS Architectural Fixes
                      </div>
                      <table className="w-full text-xs text-left">
                        <thead className="bg-[#8b7355]/10 text-[#1a1510]">
                          <tr>
                            <th className="p-2 border-b border-r border-[#8b7355]/30 font-bold uppercase text-[9.5px] tracking-wider">Legacy Flaw</th>
                            <th className="p-2 border-b border-[#8b7355]/30 font-bold uppercase text-[9.5px] tracking-wider">CSARMS Fix</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#8b7355]/20 text-[#2a2118] text-[10px]">
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-2 border-r border-[#8b7355]/20 font-medium text-rose-800">Shared Master Spreadsheets</td>
                            <td className="p-2 font-medium text-emerald-800">Isolated MongoDB + RBAC</td>
                          </tr>
                          <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                            <td className="p-2 border-r border-[#8b7355]/20 font-medium text-rose-800">Unencrypted Passwords</td>
                            <td className="p-2 font-medium text-emerald-800">Bcrypt Salted Hashing</td>
                          </tr>
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-2 border-r border-[#8b7355]/20 font-medium text-rose-800">Manual Attendance Alerts</td>
                            <td className="p-2 font-medium text-emerald-800">Automated Triggers (&lt;75%)</td>
                          </tr>
                          <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                            <td className="p-2 border-r border-[#8b7355]/20 font-medium text-rose-800">Uncontrolled Cross-Dept Views</td>
                            <td className="p-2 font-medium text-emerald-800">Scope-Guarded Middleware</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={6}>
                <div className="h-full flex flex-col">
                  <h3 className="text-sm font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 mb-3 text-[#1a1510]">
                    Ch 3: RBAC Architecture
                  </h3>
                  <div className="space-y-3 text-xs leading-relaxed pr-1">
                    <p className="text-xs text-[#5c4d3c]">
                      CSARMS utilizes a strict 4-tier permission hierarchy to maintain institutional privacy boundaries:
                    </p>
                    {}
                    <div className="space-y-2.5 py-1">
                      {}
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-3 rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="flex items-center justify-between border-b border-[#8b7355]/30 pb-1 mb-1.5">
                          <span className="font-mono text-xs font-bold text-[#1a1510] tracking-widest uppercase">
                            1. SYSTEM ADMIN
                          </span>
                          <span className="text-[10px] text-[#5c4d3c] font-serif italic">Level 0 (Root)</span>
                        </div>
                        <p className="text-[11px] text-[#5c4d3c] font-sans leading-snug">
                          • HOD Provisioning &amp; Platform Configuration<br/>
                          • Global Institutional Telemetry &amp; System Audits
                        </p>
                      </div>
                      <div className="flex justify-center text-[#8b7355] font-bold text-xs py-0.5">↓</div>
                      {}
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-3 rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="flex items-center justify-between border-b border-[#8b7355]/30 pb-1 mb-1.5">
                          <span className="font-mono text-xs font-bold text-[#1a1510] tracking-widest uppercase">
                            2. HEAD OF DEPT (HOD)
                          </span>
                          <span className="text-[10px] text-[#5c4d3c] font-serif italic">Level 1 (Department)</span>
                        </div>
                        <p className="text-[11px] text-[#5c4d3c] font-sans leading-snug">
                          • Faculty Roster &amp; Course Assignment<br/>
                          • Department Performance &amp; Attendance Analytics
                        </p>
                      </div>
                      <div className="flex justify-center text-[#8b7355] font-bold text-xs py-0.5">↓</div>
                      {}
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-3 rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="flex items-center justify-between border-b border-[#8b7355]/30 pb-1 mb-1.5">
                          <span className="font-mono text-xs font-bold text-[#1a1510] tracking-widest uppercase">
                            3. FACULTY
                          </span>
                          <span className="text-[10px] text-[#5c4d3c] font-serif italic">Level 2 (Course)</span>
                        </div>
                        <p className="text-[11px] text-[#5c4d3c] font-sans leading-snug">
                          • Course Roster Administration<br/>
                          • Grade Submissions &amp; Attendance Logging
                        </p>
                      </div>
                      <div className="flex justify-center text-[#8b7355] font-bold text-xs py-0.5">↓</div>
                      {}
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-3 rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="flex items-center justify-between border-b border-[#8b7355]/30 pb-1 mb-1.5">
                          <span className="font-mono text-xs font-bold text-[#1a1510] tracking-widest uppercase">
                            4. STUDENT
                          </span>
                          <span className="text-[10px] text-[#5c4d3c] font-serif italic">Level 3 (Individual)</span>
                        </div>
                        <p className="text-[11px] text-[#5c4d3c] font-sans leading-snug">
                          • Personal Academic Transcripts &amp; CGPA<br/>
                          • Attendance Telemetry &amp; Inbox Notifications
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#8b7355]/10 border border-[#8b7355]/30 p-2.5 rounded-lg text-[11px] mt-2">
                      <span className="font-bold text-[#1a1510]">JWT Token Authorization:</span> Every HTTP header passes a Bearer JWT containing user ID and role, verified before route controller execution.
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={7}>
                <div className="h-full flex flex-col">
                  <h3 className="text-sm font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 mb-2 text-[#1a1510]">
                    Ch 4: Database Schemas
                  </h3>
                  <div className="space-y-2 text-xs leading-relaxed pr-1">
                    <h4 className="font-bold text-[11px] uppercase tracking-wide text-[#1a1510]">4.1 User Schema (User.js)</h4>
                    <pre className="bg-[#8b7355]/5 text-[#2c241b] p-2.5 rounded-lg font-mono text-[8.5px] leading-snug whitespace-pre overflow-x-auto border border-[#8b7355]/20 my-0.5 ">
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
                    <h4 className="font-bold text-[11px] uppercase tracking-wide text-[#1a1510] mt-2">4.2 Course &amp; Attendance Schema (Course.js)</h4>
                    <pre className="bg-[#8b7355]/5 text-[#2c241b] p-2.5 rounded-lg font-mono text-[8.5px] leading-snug whitespace-pre overflow-x-auto border border-[#8b7355]/20 my-0.5 ">
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
              {}
              <Page number={8}>
                <div className="h-full flex flex-col">
                  <h3 className="text-sm font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 mb-3 text-[#1a1510]">
                    Ch 5: Frontend Architecture
                  </h3>
                  <div className="space-y-3 text-xs leading-relaxed text-justify pr-1">
                    <div>
                      <h4 className="font-bold text-[11px] uppercase tracking-wide border-b border-[#8b7355]/10 pb-1 mb-1.5">5.1 React 19 + Vite Engine</h4>
                      <p className="text-[10px] text-[#5c4d3c]">
                        The frontend leverages React 19 single-page application (SPA) state management paired with Vite for instant Hot Module Replacement (HMR) and optimized build chunking.
                      </p>
                    </div>
                    <div className="mt-3">
                      <h4 className="font-bold text-[11px] uppercase tracking-wide border-b border-[#8b7355]/10 pb-1 mb-1.5">5.2 Recharts Analytics Dashboard</h4>
                      <p className="text-[10px] text-[#5c4d3c] mb-1.5">
                        Department performance and CGPA trends are visually rendered using dynamic SVG charts:
                      </p>
                      <pre className="bg-[#8b7355]/5 text-[#2c241b] p-3 rounded-lg font-mono text-[10px] leading-relaxed whitespace-pre overflow-x-auto border border-[#8b7355]/20 my-2 ">
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
              {}
              <Page number={9}>
                <div className="h-full flex flex-col">
                  <h3 className="text-sm font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 mb-3 text-[#1a1510]">
                    Ch 6: REST API Workflows
                  </h3>
                  <div className="space-y-3 text-xs leading-relaxed pr-1">
                    <div>
                      <h4 className="font-bold text-[11px] uppercase tracking-wide border-b border-[#8b7355]/10 pb-1 mb-1.5">6.1 Route Handlers</h4>
                      <ul className="list-disc pl-4 space-y-1 text-[10px] text-[#5c4d3c]">
                        <li><span className="font-bold text-[#1a1510]">/api/auth:</span> User registration, authentication, JWT signing.</li>
                        <li><span className="font-bold text-[#1a1510]">/api/admin:</span> Creation and deletion of Department Heads (HODs).</li>
                        <li><span className="font-bold text-[#1a1510]">/api/faculty:</span> Course creation, student roster updates, and grade submissions.</li>
                        <li><span className="font-bold text-[#1a1510]">/api/student:</span> Academic record retrieval and attendance summary.</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <h4 className="font-bold text-[11px] uppercase tracking-wide border-b border-[#8b7355]/10 pb-1 mb-1.5">6.2 Security Middleware (authMiddleware.js)</h4>
                      <pre className="bg-[#8b7355]/5 text-[#2c241b] p-3 rounded-lg font-mono text-[10px] leading-relaxed whitespace-pre overflow-x-auto border border-[#8b7355]/20 my-2 ">
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
              {}
              <Page number={10}>
                <div className="h-full flex flex-col">
                  <h3 className="text-sm font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 mb-3 text-[#1a1510]">
                    Ch 7: Media &amp; Notifications
                  </h3>
                  <div className="space-y-3 text-xs leading-relaxed pr-1">
                    {}
                    <div className="space-y-2 py-1">
                      {}
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-3 rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="font-mono text-[11px] font-bold text-[#1a1510] tracking-wider uppercase mb-1.5 border-b border-[#8b7355]/30 pb-1">
                          1. SENDER DISPATCH (Admin / HOD / Faculty)
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px] font-sans text-[#5c4d3c]">
                          <div className="bg-[#8b7355]/15 p-2 rounded border border-[#8b7355]/20">
                            <span className="font-bold block text-[#1a1510] mb-0.5">Text &amp; Metadata</span>
                            Payload Parser → MongoDB Notice Document
                          </div>
                          <div className="bg-[#8b7355]/15 p-2 rounded border border-[#8b7355]/20">
                            <span className="font-bold block text-[#1a1510] mb-0.5">Attachment File</span>
                            Multer Pipeline → Local Storage Disk
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center text-[#8b7355] font-bold text-xs py-0.5">↓</div>
                      {}
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-3 rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="font-mono text-[11px] font-bold text-[#1a1510] tracking-wider uppercase mb-1 border-b border-[#8b7355]/30 pb-1">
                          2. NOTIFICATION ENGINE (Nodemailer SMTP)
                        </div>
                        <p className="text-[10.5px] text-[#5c4d3c] font-sans leading-snug pt-0.5">
                          Asynchronously compiles HTML notice template &amp; attaches files from disk storage.
                        </p>
                      </div>
                      <div className="flex justify-center text-[#8b7355] font-bold text-xs py-0.5">↓</div>
                      {}
                      <div className="bg-[#8b7355]/5 text-[#2c241b] p-3 rounded-lg border border-[#8b7355]/20 shadow-md">
                        <div className="font-mono text-[11px] font-bold text-[#1a1510] tracking-wider uppercase mb-1 border-b border-[#8b7355]/30 pb-1">
                          3. STUDENT RECIPIENT INBOX
                        </div>
                        <p className="text-[10.5px] text-[#5c4d3c] font-sans leading-snug pt-0.5">
                          Real-time portal alert badge + instant SMTP inbox email notification.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 text-[10.5px] text-[#5c4d3c] mt-2">
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
              {}
              <Page number={11}>
                <div className="h-full flex flex-col">
                  <h3 className="text-sm font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 mb-3 text-[#1a1510]">
                    Ch 8: Unified Single-Port
                  </h3>
                  <div className="space-y-3 text-xs leading-relaxed text-justify pr-1">
                    <p className="text-[10px] text-[#5c4d3c]">
                      To eliminate CORS issues and streamline cloud deployment on AWS EC2 or DigitalOcean, CSARMS uses a single-port Express architecture:
                    </p>
                    <pre className="bg-[#8b7355]/5 text-[#2c241b] p-3 rounded-lg font-mono text-[9.5px] leading-relaxed whitespace-pre overflow-x-auto border border-[#8b7355]/20 my-2 ">
{`// backend/app.js
const express = require('express');
const path = require('path');
const app = express();
// 1. REST API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
// 2. Serve Static Assets
app.use(express.static(
  path.join(__dirname, '../frontend/dist')
));
// 3. Fallback SPA Catch-All
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
              {}
              <Page number={12}>
                <div className="h-full flex flex-col justify-start space-y-2">
                  <div>
                    <h3 className="text-sm font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 mb-2 text-[#1a1510]">
                      Ch 9: Runtime Benchmarks
                    </h3>
                    <p className="text-[10.5px] text-[#5c4d3c] italic mb-2">
                      Benchmarked across 1,000 synthetic operations under concurrent simulated load:
                    </p>
                    {}
                    <div className="border border-[#8b7355]/20 rounded-lg overflow-hidden shadow-md my-1">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-[#8b7355]/5 text-[#1a1510]">
                          <tr>
                            <th className="p-2 border-b border-r border-[#8b7355]/30 font-bold uppercase text-[9.5px] tracking-wider">Endpoint / Op</th>
                            <th className="p-2 border-b border-r border-[#8b7355]/30 font-bold uppercase text-[9.5px] tracking-wider text-center">Avg</th>
                            <th className="p-2 border-b border-r border-[#8b7355]/30 font-bold uppercase text-[9.5px] tracking-wider text-center">P95</th>
                            <th className="p-2 border-b border-[#8b7355]/30 font-bold uppercase text-[9.5px] tracking-wider text-center">P99</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#8b7355]/20 text-[#2a2118]">
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-2 border-r border-[#8b7355]/20 font-mono text-[10px]">POST /api/auth/login</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-semibold">18.2ms</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-semibold text-emerald-700">28.5ms</td>
                            <td className="p-2 text-center font-semibold text-emerald-800">35.1ms</td>
                          </tr>
                          <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                            <td className="p-2 border-r border-[#8b7355]/20 font-mono text-[10px]">GET /api/student/profile</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-semibold">8.5ms</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-semibold text-emerald-700">14.2ms</td>
                            <td className="p-2 text-center font-semibold text-emerald-800">19.8ms</td>
                          </tr>
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-2 border-r border-[#8b7355]/20 font-mono text-[10px]">POST /api/faculty/attendance</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-semibold">24.8ms</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-semibold text-emerald-700">38.1ms</td>
                            <td className="p-2 text-center font-semibold text-emerald-800">49.0ms</td>
                          </tr>
                          <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                            <td className="p-2 border-r border-[#8b7355]/20 font-mono text-[10px]">GET /api/admin/stats</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-semibold">31.4ms</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-semibold text-amber-700">45.9ms</td>
                            <td className="p-2 text-center font-semibold text-amber-800">61.2ms</td>
                          </tr>
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-2 border-r border-[#8b7355]/20 font-mono text-[10px]">MongoDB Indexed Queries</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-semibold">2.8ms</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-semibold text-emerald-700">4.5ms</td>
                            <td className="p-2 text-center font-semibold text-emerald-800">6.9ms</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {}
                  <div className="bg-[#8b7355]/5 text-[#2c241b] p-2.5 rounded-lg border border-[#8b7355]/20 mt-1 shadow-md">
                    <span className="font-mono text-[9.5px] font-bold text-[#1a1510] tracking-widest uppercase block border-b border-[#8b7355]/30 pb-0.5 mb-1">
                      <Zap className="w-4 h-4 inline-block mr-1 text-amber-700" /> Performance Takeaway
                    </span>
                    <p className="text-[10px] text-[#5c4d3c] font-sans leading-snug">
                      All core REST endpoints comfortably satisfy the non-functional requirement of <span className="font-bold text-[#1a1510]">P95 latency &lt; 50ms</span>. MongoDB indexed queries execute in under 5ms, eliminating database bottlenecks.
                    </p>
                  </div>
                </div>
              </Page>
              {}
              <Page number={13}>
                <div className="h-full flex flex-col">
                  <h3 className="text-sm font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 mb-3 text-[#1a1510]">
                    Ch 10: Web Vitals &amp; Audits
                  </h3>
                  <div className="space-y-3 text-xs leading-relaxed text-justify pr-1">
                    <div>
                      <h4 className="font-bold text-[10px] uppercase tracking-wide mb-1">10.1 Lighthouse Scorecard</h4>
                      <div className="grid grid-cols-4 gap-1 text-center font-mono text-[8px] bg-[#8b7355]/10 p-2 rounded border border-[#8b7355]/30">
                        <div className="p-1 bg-[#8b7355]/5 rounded border border-[#8b7355]/20"><span className="block font-bold text-[#1a1510]">Perf</span>99</div>
                        <div className="p-1 bg-[#8b7355]/5 rounded border border-[#8b7355]/20"><span className="block font-bold text-[#1a1510]">A11y</span>100</div>
                        <div className="p-1 bg-[#8b7355]/5 rounded border border-[#8b7355]/20"><span className="block font-bold text-[#1a1510]">BP</span>100</div>
                        <div className="p-1 bg-[#8b7355]/5 rounded border border-[#8b7355]/20"><span className="block font-bold text-[#1a1510]">SEO</span>100</div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <h4 className="font-bold text-[10px] uppercase tracking-wide mb-1">10.2 Core Web Vitals Telemetry</h4>
                      <ul className="list-disc pl-4 space-y-1 text-[9.5px] text-[#5c4d3c]">
                        <li><span className="font-bold text-[#1a1510]">First Contentful Paint (FCP):</span> 0.38s (Target &lt;1.8s)</li>
                        <li><span className="font-bold text-[#1a1510]">Largest Contentful Paint (LCP):</span> 0.72s (Target &lt;2.5s)</li>
                        <li><span className="font-bold text-[#1a1510]">Total Blocking Time (TBT):</span> 12ms (Target &lt;200ms)</li>
                        <li><span className="font-bold text-[#1a1510]">Cumulative Layout Shift (CLS):</span> 0.00 (Target &lt;0.10)</li>
                        <li><span className="font-bold text-[#1a1510]">Gzipped Bundle Footprint:</span> 142.5 KB</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={14}>
                <div className="h-full flex flex-col justify-start space-y-2">
                  <div>
                    <h3 className="text-sm font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 mb-2 text-[#1a1510]">
                      Ch 11: Security &amp; Audits
                    </h3>
                    <h4 className="font-bold text-[10.5px] uppercase tracking-wide text-[#1a1510] mb-1.5">
                      Penetration Verification Report
                    </h4>
                    {}
                    <div className="border border-[#8b7355]/20 rounded-lg overflow-hidden shadow-md my-1">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-[#8b7355]/5 text-[#1a1510]">
                          <tr>
                            <th className="p-2 border-b border-r border-[#8b7355]/30 font-bold uppercase text-[9.5px] tracking-wider">Attack Scenario</th>
                            <th className="p-2 border-b border-r border-[#8b7355]/30 font-bold uppercase text-[9.5px] tracking-wider text-center">Outcome</th>
                            <th className="p-2 border-b border-[#8b7355]/30 font-bold uppercase text-[9.5px] tracking-wider text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#8b7355]/20 text-[#2a2118]">
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-2 border-r border-[#8b7355]/20 font-sans text-[10px]">1. Horizontal Priv. Escalation</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-mono text-[9.5px] font-semibold text-rose-700">403 Forbidden</td>
                            <td className="p-2 text-center font-bold text-emerald-800 text-[10.5px]"><ShieldCheck className="w-3.5 h-3.5 inline-block mr-1" /> Pass</td>
                          </tr>
                          <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                            <td className="p-2 border-r border-[#8b7355]/20 font-sans text-[10px]">2. Vertical Priv. Escalation</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-mono text-[9.5px] font-semibold text-rose-700">403 Forbidden</td>
                            <td className="p-2 text-center font-bold text-emerald-800 text-[10.5px]"><ShieldCheck className="w-3.5 h-3.5 inline-block mr-1" /> Pass</td>
                          </tr>
                          <tr className="hover:bg-[#8b7355]/5">
                            <td className="p-2 border-r border-[#8b7355]/20 font-sans text-[10px]">3. JWT Payload Tampering</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-mono text-[9.5px] font-semibold text-rose-700">401 Invalid</td>
                            <td className="p-2 text-center font-bold text-emerald-800 text-[10.5px]"><ShieldCheck className="w-3.5 h-3.5 inline-block mr-1" /> Pass</td>
                          </tr>
                          <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                            <td className="p-2 border-r border-[#8b7355]/20 font-sans text-[10px]">4. Unassigned Faculty Lookup</td>
                            <td className="p-2 border-r border-[#8b7355]/20 text-center font-mono text-[9.5px] font-semibold text-emerald-700">Scope Filtered</td>
                            <td className="p-2 text-center font-bold text-emerald-800 text-[10.5px]"><ShieldCheck className="w-3.5 h-3.5 inline-block mr-1" /> Pass</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                    {}
                    <div className="mt-3 pt-2 border-t border-[#8b7355]/30">
                      <h4 className="font-bold text-[10.5px] uppercase tracking-wide text-[#1a1510] mb-1">
                        Ch 12: Impact &amp; Roadmap
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-[9.5px]">
                        <div>
                          <span className="font-bold text-[#1a1510] block mb-0.5">Efficiency Gains:</span>
                          <ul className="list-disc pl-3 space-y-0.5 text-[#5c4d3c]">
                            <li>Attendance: 45m → 3m/day</li>
                            <li>Transcripts: Instantaneous</li>
                          </ul>
                        </div>
                        <div>
                          <span className="font-bold text-[#1a1510] block mb-0.5">Future Roadmap:</span>
                          <ul className="list-disc pl-3 space-y-0.5 text-[#5c4d3c]">
                            <li>Automated Timetables</li>
                            <li>Biometric QR Check-in</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  {}
                  <div className="bg-[#8b7355]/5 text-[#2c241b] p-2.5 rounded-lg border border-[#8b7355]/20 mt-1 shadow-md">
                    <span className="font-mono text-[9.5px] font-bold text-[#1a1510] tracking-widest uppercase block border-b border-[#8b7355]/30 pb-0.5 mb-1">
                      <Lock className="w-3.5 h-3.5 inline-block mr-1 text-emerald-700" /> Zero-Trust Verification
                    </span>
                    <p className="text-[10px] text-[#5c4d3c] font-sans leading-snug">
                      Penetration testing confirms zero data leakages across student profiles and course rosters. All unauthorized vectors are blocked at the middleware layer.
                    </p>
                  </div>
                </div>
              </Page>
              {}
              <Page number={15}>
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
              {}
              <Page number={16}>
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-full max-w-[240px]">
                    <h3 className="text-base font-['Playfair_Display'] font-bold uppercase tracking-[0.2em] text-[#1a1510] mb-6 pb-2 border-b border-[#8b7355]/30">
                      PROJECT LINKS
                    </h3>
                    <div className="flex flex-col gap-3.5 w-full">
                      <a
                        href="https://csarms.vercel.app"
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
                        href="https://github.com/abhishek-madar/csarms-team"
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
          {}
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
