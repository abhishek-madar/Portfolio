import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HTMLFlipBook from 'react-pageflip';
import { X, ChevronRight, ChevronLeft, ArrowDown, Zap, BarChart3 } from 'lucide-react';

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
         <div className={`absolute bottom-[clamp(2px,2cqh,20px)] ${isLeft ? 'left-[clamp(3px,4cqw,24px)]' : 'right-[clamp(3px,4cqw,24px)]'} text-[clamp(2px,2cqw,16px)] font-serif text-[#5c4d3c] z-20`}>
            - {props.number} -
         </div>
         <div className="relative z-10 flex-1 overflow-hidden p-[clamp(0.25rem,1.5cqh,1rem)] font-serif text-[#2a2118]">
            <div className="h-full w-full">
              {props.children}
            </div>
         </div>
      </div>
    </div>
  );
});
Page.displayName = 'Page';
export default function LifeLinkCaseStudyModal({ isOpen, onClose }) {
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
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-[clamp(0.15rem,1cqh,0.5rem)] sm:p-4 md:p-8 overflow-hidden">
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
            className="absolute top-[clamp(0.15rem,1cqh,0.5rem)] right-2 md:top-4 md:right-4 z-[110] p-3 rounded-full bg-[#eaddc5] border border-[#8b7355] text-[#5c4d3c] hover:text-black hover:bg-[#d4b886] transition-all shadow-xl"
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
                      LifeLink
                    </h1>
                    <div className="h-[1px] w-1/2 bg-[#5c4d3c] mx-auto my-4"></div>
                    <h2 className="text-2xl font-['Caveat'] text-[#5c4d3c] text-center mt-2 px-2 leading-relaxed">
                      Extended System Manual & Empirical Performance Benchmarks
                    </h2>
                    <p className="text-center font-serif text-[#5c4d3c] mt-4 px-4 text-[9px] uppercase tracking-widest font-bold">
                      Blood Bank Management System (BBMS)
                    </p>
                  </div>
                  <div className="mt-auto pt-16 space-y-3 text-center">
                    <p className="font-['Playfair_Display'] text-lg font-bold">
                      Written by: Abhishek Madar
                    </p>
                    <p className="font-serif text-[clamp(0.45rem,1.4cqh,0.6875rem)] text-[#2c241b] mt-4">
                      First Edition (2026)
                    </p>
                    <p className="font-serif text-[clamp(0.4rem,1.2cqh,0.625rem)] text-[#5c4d3c] tracking-widest uppercase border border-[#8b7355]/30 py-1.5 px-3 mt-4 inline-block">
                      DOCUMENT VERSION: 1.0.0
                    </p>
                  </div>
                </div>
              </Page>
              <Page number={2}>
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-[clamp(0.15rem,1cqh,0.5rem)] text-center mx-8">
                    Table of Contents
                  </h3>
                  <div className="flex flex-col gap-[clamp(0.2rem,1cqh,0.75rem)] px-[clamp(0.25rem,2cqw,1rem)] mt-[clamp(0.5rem,2cqh,1.5rem)] font-serif text-[#2c241b] text-[clamp(0.45rem,1.8cqh,0.75rem)]">
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)]">
                      <span className="font-bold">SECTION I: ARCHITECTURE & BLUEPRINT</span>
                      <span>3</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)] pt-[clamp(0.1rem,1cqh,0.5rem)]">
                      <span className="font-bold">SECTION II: DATA MODEL & SCHEMA</span>
                      <span>4</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)] pt-[clamp(0.1rem,1cqh,0.5rem)]">
                      <span className="font-bold">SECTION III: ENGINE & BUSINESS LOGIC</span>
                      <span>5</span>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)] pt-[clamp(0.1rem,1cqh,0.5rem)]">
                      <span className="font-bold">SECTION IV: SYSTEM BENCHMARKS</span>
                      <span>6</span>
                    </div>
                    <div className="pl-[clamp(0.25rem,2cqw,1rem)] flex flex-col gap-[clamp(0.1rem,0.5cqh,0.125rem)] text-[clamp(0.4rem,1.6cqh,0.625rem)] text-[#5c4d3c]">
                      <div className="flex justify-between"><span>4.1 Methodology & Test Setup</span><span>6</span></div>
                      <div className="flex justify-between"><span>4.2 API Latency Profiles</span><span>6</span></div>
                      <div className="flex justify-between"><span>4.3 Throughput & Load Capacity</span><span>7</span></div>
                      <div className="flex justify-between"><span>4.4 Memory & Resource Utilization</span><span>8</span></div>
                      <div className="flex justify-between"><span>4.5 Database Query Performance</span><span>8</span></div>
                      <div className="flex justify-between"><span>4.6 PDF Stream Generation Metrics</span><span>8</span></div>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-[clamp(0.1rem,0.5cqh,0.125rem)] pt-[clamp(0.1rem,1cqh,0.5rem)]">
                      <span className="font-bold">SECTION V: SECURITY & ROADMAP</span>
                      <span>9</span>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={3}>
                <div className="h-full flex flex-col justify-start space-y-3">
                  <div>
                    <h3 className="text-[clamp(0.55rem,1.8cqh,0.875rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-[clamp(0.15rem,1cqh,0.5rem)] mb-3 text-[#1a1510]">
                      I. Core Architecture
                    </h3>
                    <p className="text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed text-justify mb-3 text-[#2a2118]">
                      LifeLink is engineered as a decoupled, multi-tiered enterprise web application for healthcare logistics. It coordinates donors, hospitals, and blood banks via a Node.js REST backend.
                    </p>
                    <div className="bg-[#8b7355]/5 text-[#2c241b] p-3 rounded-lg border border-[#8b7355]/20 shadow-md my-2 gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col">
                      <div className="bg-[#8b7355]/20 p-[clamp(0.1rem,0.75cqh,0.375rem)] rounded text-center font-mono text-[clamp(0.4rem,1.1cqh,0.59rem)] font-bold text-[#1a1510] border border-[#8b7355]/30">
                        CLIENT LAYER: Vanilla HTML5 / Custom CSS3 / ES6 JavaScript
                      </div>
                      <div className="text-center font-mono text-[9px] text-[#5c4d3c]">
                        <ArrowDown className="w-3.5 h-3.5 inline-block mr-1 text-emerald-700" /> HTTP / HTTPS REST APIs
                      </div>
                      <div className="bg-[#8b7355]/20 p-[clamp(0.1rem,0.75cqh,0.375rem)] rounded text-center font-mono text-[clamp(0.4rem,1.1cqh,0.59rem)] font-bold text-[#1a1510] border border-[#8b7355]/30">
                        SERVER LAYER: Node.js / Express Gateway (server.js)
                      </div>
                      <div className="grid grid-cols-2 gap-[clamp(0.15rem,1cqh,0.5rem)] pt-1 text-center font-mono text-[clamp(0.35rem,1cqh,0.53rem)]">
                        <div className="bg-[#8b7355]/15 p-1 rounded border border-[#8b7355]/20 text-[#2c241b]">
                          JWT + Bcrypt Auth
                        </div>
                        <div className="bg-[#8b7355]/15 p-1 rounded border border-[#8b7355]/20 text-[#2c241b]">
                          Mongoose / MongoDB
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5 mt-3">
                      <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide text-[#1a1510]">Key Components:</h4>
                      <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Server Gateway:</span> Express.js REST service layer (`server.js`).</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Auth Engine:</span> JWT Bearer tokens + 10-round salted Bcrypt hashing.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Dynamic PDF Pipeline:</span> Stream-based PDF generator via `pdfkit`.</li>
                        <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-[#1a1510]">Database ODM:</span> MongoDB managed via Mongoose schemas.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={4}>
                <div className="h-full flex flex-col">
                  <h3 className="text-[clamp(0.55rem,1.8cqh,0.875rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-[clamp(0.15rem,1cqh,0.5rem)] mb-4 text-[#1a1510]">
                    II. Data Model & Schema
                  </h3>
                  <div className="space-y-4 text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed text-justify overflow-y-auto pr-2 custom-scrollbar">
                    <p>
                      The system maintains 5 core collections in MongoDB, ensuring strict structural integrity and relationship validation via Mongoose schemas.
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide border-b border-[#8b7355]/10 pb-1">2.1 Schema Definitions</h4>
                      <div className="gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col text-[clamp(0.4rem,1.2cqh,0.625rem)] text-[#5c4d3c]">
                        <p><span className="font-bold text-[#1a1510]">User Schema (User.js):</span> Stores authenticated user records including donors and recipients (fullName, email, phone, address, password, bloodGroup, createdAt).</p>
                        <p><span className="font-bold text-[#1a1510]">Donation Schema (Donation.js):</span> Tracks donation appointments and eligibility statuses (userId, bloodGroup, donationDate, donationCenter, eligibilityStatus, createdAt).</p>
                        <p><span className="font-bold text-[#1a1510]">Request Schema (Request.js):</span> Logs patient blood requests and status workflows (userId, patientName, bloodGroup, unitsRequired, hospitalName, urgencyLevel, contactNumber, status, createdAt).</p>
                        <p><span className="font-bold text-[#1a1510]">Emergency Alert Schema (Emergency.js):</span> Broadcasts emergency alerts for critical blood deficiencies (title, message, bloodGroup, location, expiryDate, createdAt).</p>
                        <p><span className="font-bold text-[#1a1510]">Blood Bank Inventory Schema (BloodBank.js):</span> Tracks available units per blood group across partner centers (name, address, contactNumber, availableBloodGroups, lastUpdated).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={5}>
                <div className="h-full flex flex-col justify-start space-y-3">
                  <div>
                    <h3 className="text-[clamp(0.55rem,1.8cqh,0.875rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-[clamp(0.15rem,1cqh,0.5rem)] mb-3 text-[#1a1510]">
                      III. Engine &amp; Logic
                    </h3>
                    <div className="space-y-3 text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed text-justify pr-[clamp(0.1rem,0.5cqh,0.25rem)]">
                      <div>
                        <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide text-[#1a1510] mb-[clamp(0.1rem,0.5cqh,0.25rem)]">3.1 Medical Pre-Screening Algorithm</h4>
                        <p className="text-[clamp(0.4rem,1.3cqh,0.656rem)] text-[#5c4d3c] mb-2">
                          The eligibility module in <code className="bg-[#8b7355]/10 px-1 font-mono">donationController.js</code> evaluates clinical constraints before allowing donation scheduling:
                        </p>
                        <div className="bg-[#8b7355]/5 text-[#1a1510] p-3 rounded-lg font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)] my-2 shadow-md border border-[#8b7355]/20 leading-relaxed">
                          <span className="text-[#5c4d3c] font-bold">Eligible</span> = (Age &ge; 18 &amp;&amp; Age &le; 60)<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;&amp; (Weight &ge; 50kg)<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;&amp; (!hasSurgery)<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;&amp; (!hasIllness)
                        </div>
                      </div>
                      <div className="mt-3">
                        <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide text-[#1a1510] mb-[clamp(0.1rem,0.5cqh,0.25rem)]">3.2 In-Memory PDF Vector Streaming</h4>
                        <p className="text-[clamp(0.4rem,1.3cqh,0.656rem)] text-[#5c4d3c]">
                          Dynamic PDF certificates are constructed in memory using <code className="bg-[#8b7355]/10 px-1 font-mono text-[#1a1510]">PDFDocument</code> streams, writing directly to HTTP responses with header <code className="bg-[#8b7355]/10 px-1 font-mono text-[#1a1510]">Content-Type: application/pdf</code>. This architectural decision guarantees zero disk writing overhead, significantly improving throughput.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={6}>
                <div className="h-full flex flex-col justify-start gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col">
                  <div>
                    <h3 className="text-[clamp(0.55rem,1.8cqh,0.875rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-[clamp(0.15rem,1cqh,0.5rem)] mb-[clamp(0.15rem,1cqh,0.5rem)] text-[#1a1510]">
                      IV. Benchmarks (Part 1)
                    </h3>
                    <div className="gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed text-justify pr-[clamp(0.1rem,0.5cqh,0.25rem)]">
                      <div>
                        <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide text-[#1a1510] mb-[clamp(0.1rem,0.5cqh,0.25rem)]">4.1 Benchmark Methodology</h4>
                        <div className="bg-[#8b7355]/5 border border-[#8b7355]/20 p-[clamp(0.25rem,2cqh,1.5rem)] rounded text-[clamp(0.4rem,1.2cqh,0.625rem)] text-[#5c4d3c] gap-[clamp(0.05rem,0.25cqh,0.125rem)] flex flex-col">
                          <p><span className="font-bold text-[#1a1510]">Hardware:</span> Apple M-Series 8-Core CPU, 16GB RAM</p>
                          <p><span className="font-bold text-[#1a1510]">Runtime:</span> Node.js v20.x LTS (V8) | MongoDB v7.0</p>
                          <p><span className="font-bold text-[#1a1510]">Testing Load:</span> 10,000 requests per endpoint via autocannon</p>
                        </div>
                      </div>
                      <div className="mt-[clamp(0.15rem,1cqh,0.5rem)]">
                        <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide text-[#1a1510] mb-1.5">4.2 REST API Latency Profiles</h4>
                        <div className="border border-[#8b7355]/20 rounded-lg overflow-hidden shadow-md my-1">
                          <table className="w-full text-[clamp(0.5rem,1.5cqh,0.75rem)] text-left">
                            <thead className="bg-[#8b7355]/5 text-[#1a1510]">
                              <tr>
                                <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-r border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider">Endpoint</th>
                                <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-r border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider text-center">P50</th>
                                <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider text-center">P99</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#8b7355]/20 text-[#2a2118]">
                              <tr className="hover:bg-[#8b7355]/5">
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)]">/api/donations/eligibility</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold text-emerald-700">3.8ms</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-semibold text-emerald-800">18.5ms</td>
                              </tr>
                              <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)]">/api/emergency/active</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold text-emerald-700">8.4ms</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-semibold text-emerald-800">31.0ms</td>
                              </tr>
                              <tr className="hover:bg-[#8b7355]/5">
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)]">/api/requests/user</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold text-emerald-700">12.1ms</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-semibold text-emerald-800">44.2ms</td>
                              </tr>
                              <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)]">/api/donations/create</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold text-amber-700">18.4ms</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-semibold text-amber-800">78.2ms</td>
                              </tr>
                              <tr className="hover:bg-[#8b7355]/5">
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)]">/api/auth/register</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-semibold text-rose-700">48.2ms</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-semibold text-rose-800">135.1ms</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.2rem,1.2cqh,0.625rem)] rounded-lg border border-[#8b7355]/20 mt-[clamp(0.1rem,0.5cqh,0.25rem)] shadow-md">
                    <span className="font-mono text-[clamp(0.4rem,1.1cqh,0.59rem)] font-bold text-[#1a1510] tracking-widest uppercase block border-b border-[#8b7355]/30 pb-[clamp(0.05rem,0.25cqh,0.125rem)] mb-[clamp(0.1rem,0.5cqh,0.25rem)]">
                      <Zap className="w-4 h-4 inline-block mr-1 text-amber-700" /> Latency Takeaway
                    </span>
                    <p className="text-[clamp(0.4rem,1.2cqh,0.625rem)] text-[#5c4d3c] font-sans leading-snug">
                      Sub-20ms median latency across core read/write endpoints. High authentication latency (135ms) is intentionally caused by bcrypt cost factor 10 password hashing.
                    </p>
                  </div>
                </div>
              </Page>
              <Page number={7}>
                <div className="h-full flex flex-col justify-start gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col">
                  <div>
                    <h3 className="text-[clamp(0.55rem,1.8cqh,0.875rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-[clamp(0.15rem,1cqh,0.5rem)] mb-[clamp(0.15rem,1cqh,0.5rem)] text-[#1a1510]">
                      IV. Benchmarks (Part 2)
                    </h3>
                    <div className="gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed text-justify pr-[clamp(0.1rem,0.5cqh,0.25rem)]">
                      <div>
                        <h4 className="font-bold text-[clamp(0.4rem,1.3cqh,0.656rem)] uppercase tracking-wide text-[#1a1510] mb-[clamp(0.1rem,0.5cqh,0.25rem)]">4.3 Throughput Capacity</h4>
                        <div className="grid grid-cols-3 gap-[clamp(0.1rem,0.75cqh,0.375rem)] text-center text-[clamp(0.4rem,1.1cqh,0.59rem)]">
                          <div className="bg-[#8b7355]/10 p-[clamp(0.1rem,0.75cqh,0.375rem)] rounded border border-[#8b7355]/30">
                            <span className="font-bold block text-[#1a1510]">8,240 req/s</span>
                            <span className="text-[clamp(0.35rem,1cqh,0.53rem)] text-[#5c4d3c]">Pre-Screening</span>
                          </div>
                          <div className="bg-[#8b7355]/10 p-[clamp(0.1rem,0.75cqh,0.375rem)] rounded border border-[#8b7355]/30">
                            <span className="font-bold block text-[#1a1510]">5,610 req/s</span>
                            <span className="text-[clamp(0.35rem,1cqh,0.53rem)] text-[#5c4d3c]">User Profile</span>
                          </div>
                          <div className="bg-[#8b7355]/10 p-[clamp(0.1rem,0.75cqh,0.375rem)] rounded border border-[#8b7355]/30">
                            <span className="font-bold block text-[#1a1510]">1,420 req/s</span>
                            <span className="text-[clamp(0.35rem,1cqh,0.53rem)] text-[#5c4d3c]">PDF Stream</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={8}>
                <div className="h-full flex flex-col justify-start gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col">
                  <div>
                    <h3 className="text-[clamp(0.55rem,1.8cqh,0.875rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-[clamp(0.15rem,1cqh,0.5rem)] mb-[clamp(0.15rem,1cqh,0.5rem)] text-[#1a1510]">
                      IV. Benchmarks (Part 3)
                    </h3>
                    <div className="gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed text-justify pr-[clamp(0.1rem,0.5cqh,0.25rem)]">
                      <div className="mt-[clamp(0.15rem,1cqh,0.5rem)]">
                        <h4 className="font-bold text-[clamp(0.4rem,1.3cqh,0.656rem)] uppercase tracking-wide text-[#1a1510] mb-[clamp(0.1rem,0.5cqh,0.25rem)]">4.4 Memory Footprint</h4>
                        <div className="border border-[#8b7355]/20 rounded-lg overflow-hidden shadow-md my-1">
                          <table className="w-full text-[clamp(0.5rem,1.5cqh,0.75rem)] text-left">
                            <thead className="bg-[#8b7355]/5 text-[#1a1510]">
                              <tr>
                                <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-r border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider">System State</th>
                                <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-r border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider text-center">RSS Memory</th>
                                <th className="p-[clamp(0.15rem,1cqh,0.5rem)] border-b border-[#8b7355]/30 font-bold uppercase text-[clamp(0.4rem,1.1cqh,0.59rem)] tracking-wider text-center">Heap Used</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#8b7355]/20 text-[#2a2118]">
                              <tr className="hover:bg-[#8b7355]/5">
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-sans text-[clamp(0.4rem,1.2cqh,0.625rem)]">Idle State</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)] font-semibold text-emerald-700">38.4 MB</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)] font-semibold text-emerald-800">14.8 MB</td>
                              </tr>
                              <tr className="bg-[#8b7355]/5 hover:bg-[#8b7355]/10">
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 font-sans text-[clamp(0.4rem,1.2cqh,0.625rem)]">1,000 Concurrent Users</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] border-r border-[#8b7355]/20 text-center font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)] font-semibold text-amber-700">142.5 MB</td>
                                <td className="p-[clamp(0.15rem,1cqh,0.5rem)] text-center font-mono text-[clamp(0.4rem,1.2cqh,0.625rem)] font-semibold text-amber-800">78.4 MB</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="mt-[clamp(0.15rem,1cqh,0.5rem)]">
                        <h4 className="font-bold text-[clamp(0.4rem,1.3cqh,0.656rem)] uppercase tracking-wide text-[#1a1510] mb-0.5">4.5 DB Query &amp; PDF Streaming</h4>
                        <div className="bg-[#8b7355]/5 border border-[#8b7355]/20 p-[clamp(0.25rem,2cqh,1.5rem)] rounded text-[clamp(0.4rem,1.1cqh,0.59rem)] text-[#5c4d3c] space-y-1">
                          <p><span className="font-bold text-rose-800">Unindexed Query (COLLSCAN):</span> 45.80 ms</p>
                          <p><span className="font-bold text-emerald-800">Indexed Query (IXSCAN):</span> 0.82 ms (55x faster)</p>
                          <p><span className="font-bold text-[#1a1510]">PDF Metrics:</span> Avg 18.4 KB | TTFB: 14.2 ms | Disk I/O: 0.0 MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#8b7355]/5 text-[#2c241b] p-[clamp(0.2rem,1.2cqh,0.625rem)] rounded-lg border border-[#8b7355]/20 mt-[clamp(0.1rem,0.5cqh,0.25rem)] shadow-md">
                    <span className="font-mono text-[clamp(0.4rem,1.1cqh,0.59rem)] font-bold text-[#1a1510] tracking-widest uppercase block border-b border-[#8b7355]/30 pb-[clamp(0.05rem,0.25cqh,0.125rem)] mb-[clamp(0.1rem,0.5cqh,0.25rem)]">
                      <BarChart3 className="w-4 h-4 inline-block mr-1.5 text-blue-700" /> Resource Efficiency
                    </span>
                    <p className="text-[clamp(0.4rem,1.2cqh,0.625rem)] text-[#5c4d3c] font-sans leading-snug">
                      Database indexing improves query speeds by 55x, maintaining a lightweight 142MB memory footprint under heavy concurrent load.
                    </p>
                  </div>
                </div>
              </Page>
              <Page number={9}>
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-[clamp(0.55rem,1.8cqh,0.875rem)] font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-[clamp(0.15rem,1cqh,0.5rem)] mb-4 text-[#1a1510]">
                      V. Security & Roadmap
                    </h3>
                    <div className="space-y-4 text-[clamp(0.5rem,1.5cqh,0.75rem)] leading-relaxed text-justify pr-2">
                      <div className="gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col">
                        <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide border-b border-[#8b7355]/10 pb-1">5.1 Security Audit</h4>
                        <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                          <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-black">Stateless Authorization:</span> JWT Bearer tokens prevent session hijacking.</li>
                          <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-black">Salting & Hashing:</span> Bcrypt (10 rounds) secures storage against rainbow tables.</li>
                          <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-black">Input Guards:</span> Regex sanitization prevents standard injection attacks.</li>
                        </ul>
                      </div>
                      <div className="gap-[clamp(0.15rem,1cqh,0.5rem)] flex flex-col mt-4">
                        <h4 className="font-bold text-[clamp(0.45rem,1.4cqh,0.6875rem)] uppercase tracking-wide border-b border-[#8b7355]/10 pb-1">5.2 Scalability Roadmap</h4>
                        <ul className="list-disc pl-4 mb-[clamp(0.25rem,1.5cqh,1rem)] text-[clamp(0.4rem,1.6cqh,1rem)] leading-[clamp(0.6rem,2cqh,1.6rem)] text-[#5c4d3c]">
                          <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-black">Node.js Cluster:</span> Scaling to 8 cores will boost throughput to ~32,000 req/sec.</li>
                          <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-black">Redis Caching:</span> Targets <code className="bg-[#8b7355]/10 px-1">&lt; 1ms</code> latency for alerts.</li>
                          <li className="mb-[clamp(0.1rem,1cqh,0.5rem)]"><span className="font-bold text-black">DB Sharding:</span> Horizontal expansion by region.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Page>
              <Page number={10}>
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
              <Page number={11}>
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-full max-w-[240px]">
                    <h3 className="text-base font-['Playfair_Display'] font-bold uppercase tracking-[0.2em] text-[#1a1510] mb-6 pb-[clamp(0.15rem,1cqh,0.5rem)] border-b border-[#8b7355]/30">
                      PROJECT LINKS
                    </h3>
                    <div className="flex flex-col gap-3.5 w-full">
                      <a
                        href="https://lifelink-blood.vercel.app"
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
                        href="https://github.com/abhishek-madar/lifelink"
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
          <div className="w-full flex items-center justify-center gap-4 py-4 z-[110]">
            <div className="flex gap-4 bg-[#f4ebd8] p-[clamp(0.1rem,0.75cqh,0.375rem)] px-3 rounded-full border border-[#8b7355] shadow-xl">
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
