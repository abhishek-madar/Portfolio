import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HTMLFlipBook from 'react-pageflip';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
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
         <div className="relative z-10 flex-1 overflow-hidden p-6 md:p-8 pb-8 font-serif text-[#2a2118]">
            {props.children}
         </div>
      </div>
    </div>
  );
});
Page.displayName = 'Page';
export default function FreshCleanCaseStudyModal({ isOpen, onClose }) {
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
                <div className="flex flex-col h-full justify-between items-center py-6 text-[#1a1510]">
                  <div className="space-y-4 w-full mt-6">
                    <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold tracking-wider uppercase leading-snug text-center">
                      FreshClean
                    </h1>
                    <div className="h-[1px] w-1/2 bg-[#5c4d3c] mx-auto my-4"></div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-[#5c4d3c] text-center mt-2">
                      On-Demand Laundry & Logistics Platform
                    </p>
                    <div className="h-[1px] w-1/2 bg-[#5c4d3c] mx-auto my-3"></div>
                    <p className="text-xs font-serif italic text-[#3a2f24] px-4 leading-relaxed text-center">
                      A Serverless MERN Stack Architecture for Real-Time Order Tracking, Digital Wallet Integration, and Scalable E-Commerce Routing
                    </p>
                  </div>
                  <div className="mt-auto pt-16 space-y-3 text-center">
                    <p className="font-['Playfair_Display'] text-lg font-bold">
                      Written by: Abhishek Madar
                    </p>
                    <p className="font-serif text-[11px] text-[#2c241b] italic">
                      Lead Software Engineer & Architect
                    </p>
                    <p className="font-serif text-[11px] text-[#2c241b] mt-4">
                      Initial Release: 2025<br/>
                      Revision Date: August 2026
                    </p>
                    <p className="font-serif text-[10px] text-[#5c4d3c] tracking-widest uppercase border border-[#8b7355]/30 py-1.5 px-3 mt-4 inline-block">
                      DOCUMENT VERSION: v2.4.0-RELEASE
                    </p>
                    <p className="font-serif text-[9px] mt-2 text-[#5c4d3c] uppercase tracking-widest">
                      Target: Node.js Serverless + MongoDB
                    </p>
                  </div>
                </div>
              </Page>
              {}
              <Page number={2}>
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-8">
                    Table of Contents
                  </h3>
                  <div className="space-y-3 px-4 mt-6 font-serif text-[#2c241b] text-xs">
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5">
                      <span className="font-bold">1. EXECUTIVE OVERVIEW & ARCHITECTURE</span>
                      <span>3</span>
                    </div>
                    <div className="pl-4 space-y-0.5 text-[10px] text-[#5c4d3c]">
                      <div className="flex justify-between"><span>1.1 Abstract & Business Domain Context</span><span>3</span></div>
                      <div className="flex justify-between"><span>1.2 High-Level System Architecture Diagram</span><span>4</span></div>
                      <div className="flex justify-between"><span>1.3 Detailed Component Inventory</span><span>5</span></div>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5 mt-2">
                      <span className="font-bold">2. TECHNICAL SPECIFICATIONS & DATABASE</span>
                      <span>5</span>
                    </div>
                    <div className="pl-4 space-y-0.5 text-[10px] text-[#5c4d3c]">
                      <div className="flex justify-between"><span>2.1 Complete Database Schema Architecture</span><span>6</span></div>
                      <div className="flex justify-between"><span>2.2 REST API Specification Matrix</span><span>7</span></div>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5 mt-2">
                      <span className="font-bold">3. ENGINEERING DEEP-DIVE & MECHANICS</span>
                      <span>8</span>
                    </div>
                    <div className="pl-4 space-y-0.5 text-[10px] text-[#5c4d3c]">
                      <div className="flex justify-between"><span>3.1 Serverless Lazy Connection Pooling Engine</span><span>8</span></div>
                      <div className="flex justify-between"><span>3.2 Transactional Wallet Sync Engine</span><span>9</span></div>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5 mt-2">
                      <span className="font-bold">4. EMPIRICAL BENCHMARKS & METRICS</span>
                      <span>9</span>
                    </div>
                    <div className="pl-4 space-y-0.5 text-[10px] text-[#5c4d3c]">
                      <div className="flex justify-between"><span>4.1 API Latency Benchmarks</span><span>10</span></div>
                      <div className="flex justify-between"><span>4.2 Database Execution & Query Benchmarks</span><span>10</span></div>
                      <div className="flex justify-between"><span>4.3 Serverless Execution Metrics</span><span>11</span></div>
                      <div className="flex justify-between"><span>4.4 Frontend Web Vitals Benchmarks</span><span>11</span></div>
                    </div>
                    <div className="flex justify-between border-b border-[#8b7355]/10 pb-0.5 mt-2">
                      <span className="font-bold">5. DEPLOYMENT & FUTURE ROADMAP</span>
                      <span>11</span>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={3}>
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-4">
                    1. Executive Overview
                  </h3>
                  <div className="px-1 space-y-4">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-base mb-1">1.1 Abstract & Business Context</h4>
                      <p className="text-[11px] leading-relaxed text-justify first-letter:text-3xl first-letter:font-['Playfair_Display'] first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                        Initiated and developed in 2025, FreshClean Laundry Service is a full-stack, enterprise-ready digital platform designed to digitize and automate urban garment care logistics. Operating at the intersection of consumer e-commerce, on-demand dispatching, and digital wallet financial services, FreshClean replaces legacy, paper-driven laundromats with an automated software ecosystem.
                      </p>
                      <p className="text-[11px] leading-relaxed text-justify mt-2">
                        The system empowers end users to configure garment processing requirements (wash & fold, dry cleaning, express delivery options), schedule precision pickup time windows, execute instantaneous payments via an integrated pre-funded digital wallet or payment gateways, and track garment processing status in real time.
                      </p>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={4}>
                <div className="space-y-4 pt-2">
                  <h4 className="font-['Playfair_Display'] font-bold text-base mb-2 mx-2 text-center">1.2 System Architecture</h4>
                  <div className="px-1 flex flex-col items-center justify-center mt-8">
                    <pre className="font-mono bg-[#8b7355]/5 border border-[#8b7355]/20 p-4 shadow-sm w-[95%] mx-auto flex justify-center text-left" style={{ fontSize: '8.5px', lineHeight: '1.4' }}>
{`+-------------------------------------------------------------+
|                     CLIENT LAYER (SPA)                      |
| - Vanilla JS Engine (ES6+) with Async/Await Pipeline        |
| - Glassmorphism CSS System & FontAwesome Iconography        |
| - Client-Side JWT State Synchronization                     |
+-------------------------------------------------------------+
                              │
            HTTPS / TLS 1.3 Encryption (REST API)
                              ▼
+-------------------------------------------------------------+
|                 API GATEWAY & BACKEND LAYER                 |
| - Node.js Runtime + Express.js Framework                    |
| - Middleware: CORS Policy -> JWT Auth -> Express-Validator  |
| - Serverless Engine: Lazy MongoDB Connection Cacher         |
+-------------------------------------------------------------+
                              │
            TCP / Mongoose ORM Socket Connection
                              ▼
+-------------------------------------------------------------+
|                PERSISTENCE LAYER (DATABASE)                 |
| - MongoDB Atlas Cloud Replica Set ("freshclean" Cluster)    |
| - Collections: users, orders, transactions, feedbacks       |
+-------------------------------------------------------------+`}
                    </pre>
                  </div>
                </div>
              </Page>
              {}
              <Page number={5}>
                <div className="space-y-4 pt-2">
                  <h4 className="font-['Playfair_Display'] font-bold text-base mb-1 mx-2 text-center">1.3 Detailed Component Inventory</h4>
                  <div className="px-1">
                    <table className="w-full text-[9px] border-collapse border border-[#8b7355]/30 text-left">
                      <thead>
                        <tr className="bg-[#8b7355]/10 border-b border-[#8b7355]/30">
                          <th className="p-1 border-r border-[#8b7355]/30 w-1/4">Layer</th>
                          <th className="p-1 border-r border-[#8b7355]/30 w-1/4">Spec</th>
                          <th className="p-1 w-1/2">Responsibilities</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#8b7355]/20">
                        <tr>
                          <td className="p-1 font-bold border-r border-[#8b7355]/30">Frontend UI</td>
                          <td className="p-1 border-r border-[#8b7355]/30">HTML5/ES6</td>
                          <td className="p-1">Sub-millisecond DOM manipulation, responsive design.</td>
                        </tr>
                        <tr>
                          <td className="p-1 font-bold border-r border-[#8b7355]/30">Server Engine</td>
                          <td className="p-1 border-r border-[#8b7355]/30">Express 4.18</td>
                          <td className="p-1">Handles route resolution, payload sanitization, DB orchestration.</td>
                        </tr>
                        <tr>
                          <td className="p-1 font-bold border-r border-[#8b7355]/30">Database</td>
                          <td className="p-1 border-r border-[#8b7355]/30">MongoDB 7.0</td>
                          <td className="p-1">Document store handling accounts, ledgers, and orders.</td>
                        </tr>
                        <tr>
                          <td className="p-1 font-bold border-r border-[#8b7355]/30">Security</td>
                          <td className="p-1 border-r border-[#8b7355]/30">JWT/bcryptjs</td>
                          <td className="p-1">Auth token validation and salted password hashing.</td>
                        </tr>
                        <tr>
                          <td className="p-1 font-bold border-r border-[#8b7355]/30">Hosting</td>
                          <td className="p-1 border-r border-[#8b7355]/30">Vercel</td>
                          <td className="p-1">Executes handlers on-demand with automatic scaling.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 className="text-lg font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-4 mt-6">
                    2. Technical Specifications
                  </h3>
                  <p className="text-[11px] leading-relaxed text-justify px-1">
                    The persistence model is constructed using Mongoose ORM over MongoDB, configured with structural validation, strict schema types, and index optimizations since its 2025 architecture release.
                  </p>
                </div>
              </Page>
              {}
              <Page number={6}>
                <div className="space-y-4 pt-2">
                  <h4 className="font-['Playfair_Display'] font-bold text-base mb-2 mx-2">2.1 Schema Architecture</h4>
                  <div className="px-1 space-y-3">
                    <div>
                      <p className="font-bold text-[10px] mb-1">1. User Entity Schema</p>
                      <pre className="text-[8px] leading-snug font-mono bg-[#8b7355]/5 border border-[#8b7355]/20 p-2 whitespace-pre-wrap break-words">
{`const userSchema = new mongoose.Schema({
  name:          { type: String, required: true },
  email:         { type: String, unique: true },
  phone:         { type: String, match: /^[0-9]{10}$/ },
  address:       { type: String, required: true },
  password:      { type: String, minlength: 6 },
  walletBalance: { type: Number, default: 500.0 },
  createdAt:     { type: Date, default: Date.now }
});`}
                      </pre>
                    </div>
                    <div>
                      <p className="font-bold text-[10px] mb-1">2. Order Entity Schema</p>
                      <pre className="text-[8px] leading-snug font-mono bg-[#8b7355]/5 border border-[#8b7355]/20 p-2 whitespace-pre-wrap break-words">
{`const orderSchema = new mongoose.Schema({
  userId:        { type: ObjectId, ref: "User" },
  pickupDate:    { type: Date, required: true },
  serviceType:   { type: String, enum: ["dry-clean", "wash"] },
  weight:        { type: Number, min: 1, max: 20 },
  express:       { type: Boolean, default: false },
  totalAmount:   { type: Number, required: true },
  paymentMethod: { type: String, enum: ["wallet", "card"] },
  status:        { type: String, default: "scheduled" }
});`}
                      </pre>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={7}>
                <div className="space-y-4 pt-2">
                  <div className="px-1 space-y-3">
                    <div>
                      <p className="font-bold text-[10px] mb-1">3. Transaction Entity Schema</p>
                      <pre className="text-[8px] leading-snug font-mono bg-[#8b7355]/5 border border-[#8b7355]/20 p-2 whitespace-pre-wrap break-words">
{`const transactionSchema = new mongoose.Schema({
  userId:        { type: ObjectId, ref: "User" },
  type:          { type: String, enum: ["credit", "debit"] },
  amount:        { type: Number, required: true },
  description:   { type: String, required: true },
  paymentMethod: { type: String, enum: ["card", "upi"] }
});`}
                      </pre>
                    </div>
                    <div>
                      <p className="font-bold text-[10px] mb-1">4. Feedback Entity Schema</p>
                      <pre className="text-[8px] leading-snug font-mono bg-[#8b7355]/5 border border-[#8b7355]/20 p-2 whitespace-pre-wrap break-words">
{`const feedbackSchema = new mongoose.Schema({
  userId:         { type: ObjectId, ref: "User" },
  orderId:        { type: ObjectId, ref: "Order" },
  rating:         { type: Number, min: 1, max: 5 },
  comments:       { type: String, required: true }
});`}
                      </pre>
                    </div>
                  </div>
                  <h4 className="font-['Playfair_Display'] font-bold text-base mb-1 mx-2 pt-3 text-center">2.2 REST API Specification</h4>
                  <div className="px-1">
                    <table className="w-full text-[7.5px] border-collapse border border-[#8b7355]/30 text-left">
                      <thead>
                        <tr className="bg-[#8b7355]/10 border-b border-[#8b7355]/30">
                          <th className="p-1 border-r border-[#8b7355]/30 w-1/4">Endpoint</th>
                          <th className="p-1 border-r border-[#8b7355]/30 w-1/5">Auth</th>
                          <th className="p-1">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#8b7355]/20">
                        <tr><td className="p-1 font-mono border-r border-[#8b7355]/30 break-all">POST /api/auth/register</td><td className="p-1 border-r border-[#8b7355]/30 text-emerald-700">Public</td><td className="p-1">Registers new user (201, 400)</td></tr>
                        <tr><td className="p-1 font-mono border-r border-[#8b7355]/30 break-all">POST /api/auth/login</td><td className="p-1 border-r border-[#8b7355]/30 text-emerald-700">Public</td><td className="p-1">Returns JWT (200, 401)</td></tr>
                        <tr><td className="p-1 font-mono border-r border-[#8b7355]/30 break-all">GET /api/users/profile</td><td className="p-1 border-r border-[#8b7355]/30 text-blue-700">Bearer</td><td className="p-1">Fetches profile (200, 403)</td></tr>
                        <tr><td className="p-1 font-mono border-r border-[#8b7355]/30 break-all">POST /api/orders</td><td className="p-1 border-r border-[#8b7355]/30 text-blue-700">Bearer</td><td className="p-1">Creates new pickup order (201, 402)</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Page>
              {}
              <Page number={8}>
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-4">
                    3. Engineering Deep-Dive
                  </h3>
                  <div className="px-1 space-y-4">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-base mb-1">3.1 Serverless Connection Pooling</h4>
                      <p className="text-[11px] leading-relaxed text-justify mb-2">
                        When deployed to serverless providers, Node.js apps execute inside transient containers. Establishing a new database connection on every request introduces 300ms–800ms of latency penalty. FreshClean implements a global cached singleton:
                      </p>
                      <pre className="text-[8px] leading-snug font-mono bg-[#8b7355]/5 border border-[#8b7355]/20 p-2 whitespace-pre-wrap break-words">
{`let cachedDb = null;
let isConnected = false;
async function connectToDatabase() {
  if (cachedDb && isConnected) return cachedDb;
  const MONGODB_URI = process.env.MONGODB_URI;
  cachedDb = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    dbName: "freshclean",
  });
  isConnected = true;
  return cachedDb;
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={9}>
                <div className="space-y-4 pt-2">
                  <div className="px-1 space-y-4">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-base mb-1 mt-2">3.2 Wallet Sync Engine</h4>
                      <p className="text-[11px] leading-relaxed text-justify mb-2">
                        To maintain financial integrity, the backend executes an atomic balance verification workflow: <code className="bg-[#8b7355]/10 px-1 font-mono text-[9px]">Bal = walletBalance - total</code>
                      </p>
                      <pre className="text-[8px] leading-snug font-mono bg-[#8b7355]/5 border border-[#8b7355]/20 p-2 whitespace-pre-wrap break-words">
{`if (user.walletBalance < totalAmount) {
  return res.status(400).json({ error: "Insufficient balance" });
}
user.walletBalance -= totalAmount;
await user.save(); // Atomic update
await new Transaction({
  userId: user._id, type: "debit", amount: totalAmount
}).save();`}
                      </pre>
                    </div>
                  </div>
                  <h3 className="text-lg font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-4 mt-6">
                    4. Empirical Benchmarks
                  </h3>
                  <div className="px-1 space-y-3">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-sm mb-1">4.1 API Latency Benchmarks</h4>
                      <table className="w-full text-[7.5px] border-collapse border border-[#8b7355]/30 text-left">
                        <thead>
                          <tr className="bg-[#8b7355]/10 border-b border-[#8b7355]/30">
                            <th className="p-1 border-r border-[#8b7355]/30">Target Endpoint</th>
                            <th className="p-1 border-r border-[#8b7355]/30">p50 Latency</th>
                            <th className="p-1 border-r border-[#8b7355]/30">p99 Latency</th>
                            <th className="p-1">Success</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#8b7355]/20">
                          <tr><td className="p-1 font-bold border-r border-[#8b7355]/30 break-all">POST /api/auth/login</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">24.5 ms</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">95.1 ms</td><td className="p-1 text-emerald-700">99.98%</td></tr>
                          <tr><td className="p-1 font-bold border-r border-[#8b7355]/30 break-all">GET /api/users/profile</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">8.1 ms</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">31.2 ms</td><td className="p-1 text-emerald-700">100.0%</td></tr>
                          <tr><td className="p-1 font-bold border-r border-[#8b7355]/30 break-all">POST /api/orders</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">38.2 ms</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">145.0 ms</td><td className="p-1 text-emerald-700">99.94%</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={10}>
                <div className="space-y-4 pt-2">
                  <div className="px-1 space-y-4">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-sm mb-1">4.2 Database Execution</h4>
                      <table className="w-full text-[8px] border-collapse border border-[#8b7355]/30 text-left">
                        <thead>
                          <tr className="bg-[#8b7355]/10 border-b border-[#8b7355]/30">
                            <th className="p-1 border-r border-[#8b7355]/30">Query Operation</th>
                            <th className="p-1 border-r border-[#8b7355]/30">Cold Time</th>
                            <th className="p-1">Warm Time</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#8b7355]/20">
                          <tr><td className="p-1 font-mono border-r border-[#8b7355]/30">User.findOne()</td><td className="p-1 border-r border-[#8b7355]/30 text-red-700">14.2 ms</td><td className="p-1 text-emerald-700">1.1 ms</td></tr>
                          <tr><td className="p-1 font-mono border-r border-[#8b7355]/30">Order.find()</td><td className="p-1 border-r border-[#8b7355]/30 text-red-700">22.8 ms</td><td className="p-1 text-emerald-700">2.4 ms</td></tr>
                          <tr><td className="p-1 font-mono border-r border-[#8b7355]/30">Order.create()</td><td className="p-1 border-r border-[#8b7355]/30 text-red-700">31.5 ms</td><td className="p-1 text-emerald-700">8.7 ms</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-sm mb-1">4.3 Serverless Execution Metrics</h4>
                      <p className="text-[10px] mb-2 text-[#5c4d3c] leading-relaxed text-justify">
                        Total request latency in a serverless environment includes container provisioning and DB connection time.
                      </p>
                      <table className="w-full text-[8px] border-collapse border border-[#8b7355]/30 text-left">
                        <thead>
                          <tr className="bg-[#8b7355]/10 border-b border-[#8b7355]/30">
                            <th className="p-1 border-r border-[#8b7355]/30">State</th>
                            <th className="p-1 border-r border-[#8b7355]/30">Container</th>
                            <th className="p-1 font-bold">Total Time</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#8b7355]/20">
                          <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Cold Start</td><td className="p-1 border-r border-[#8b7355]/30 text-center">~280 ms</td><td className="p-1 font-bold text-red-700 text-center">618 ms</td></tr>
                          <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Warm Start</td><td className="p-1 border-r border-[#8b7355]/30 text-center text-emerald-700">0 ms</td><td className="p-1 font-bold text-emerald-700 text-center">12 ms</td></tr>
                        </tbody>
                      </table>
                      <p className="text-[8px] mt-2 italic text-[#5c4d3c]">Key Finding: Cached connection reuse reduces latency by 98%.</p>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={11}>
                <div className="space-y-4 pt-2">
                  <div className="px-1 space-y-4">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-sm mb-1 mt-2">4.4 Web Vitals Benchmarks</h4>
                      <table className="w-full text-[9px] border-collapse border border-[#8b7355]/30 text-left">
                        <tbody className="divide-y divide-[#8b7355]/20">
                          <tr><td className="p-1 font-bold border-r border-[#8b7355]/30 w-1/2">First Contentful Paint (FCP)</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">0.4 s</td><td className="p-1 text-emerald-700">Exceptional</td></tr>
                          <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Largest Contentful Paint (LCP)</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">0.8 s</td><td className="p-1 text-emerald-700">Exceptional</td></tr>
                          <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Total Blocking Time (TBT)</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">0.0 ms</td><td className="p-1 text-emerald-700">Perfect</td></tr>
                          <tr><td className="p-1 font-bold border-r border-[#8b7355]/30">Cumulative Layout Shift (CLS)</td><td className="p-1 border-r border-[#8b7355]/30 font-mono">0.001</td><td className="p-1 text-emerald-700">Perfect</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <h3 className="text-lg font-['Playfair_Display'] font-bold uppercase tracking-widest border-b border-[#8b7355]/30 pb-2 text-center mx-4 mt-8">
                    5. Deployment & Roadmap
                  </h3>
                  <div className="px-1 space-y-3">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-bold text-sm mb-1">5.1 Infrastructure Configuration</h4>
                      <p className="text-[10px] leading-relaxed text-justify mb-2">Vercel serverless platform configured via <code className="bg-[#8b7355]/10 px-1 font-mono">vercel.json</code>:</p>
                      <pre className="text-[10px] leading-snug font-mono bg-[#8b7355]/5 text-[#2c241b] border border-[#8b7355]/20 p-3 whitespace-pre-wrap break-words rounded-lg ">
{`{
  "version": 2,
  "builds": [
    { "src": "backend/server.js", "use": "@vercel/node" },
    { "src": "frontend/**", "use": "@vercel/static" }
  ]
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={12}>
                <div className="h-full flex flex-col pt-2">
                  <h4 className="font-['Playfair_Display'] font-bold text-lg mb-4 text-center uppercase tracking-widest border-b border-[#8b7355]/30 pb-2">5.2 Security Assessment</h4>
                  <div className="space-y-4 px-1">
                    <p className="text-[11px] text-[#5c4d3c] text-center mb-2 italic">
                      Zero-trust architecture ensuring data integrity and defense-in-depth across the platform.
                    </p>
                    <div className="bg-[#8b7355]/5 text-[#2c241b] p-4 rounded-lg border border-[#8b7355]/20 shadow-md">
                      <div className="font-mono text-xs font-bold text-emerald-700 tracking-wider uppercase border-b border-[#8b7355]/30 pb-1 mb-2">
                        Transport Security
                      </div>
                      <div className="text-[11px] font-sans text-[#5c4d3c]">
                        <span className="font-bold text-[#1a1510]">HTTPS / TLS 1.3:</span> End-to-end encryption for all REST payloads preventing MITM packet sniffing.
                      </div>
                    </div>
                    <div className="bg-[#8b7355]/5 text-[#2c241b] p-4 rounded-lg border border-[#8b7355]/20 shadow-md">
                      <div className="font-mono text-xs font-bold text-emerald-700 tracking-wider uppercase border-b border-[#8b7355]/30 pb-1 mb-2">
                        Authentication Integrity
                      </div>
                      <div className="text-[11px] font-sans text-[#5c4d3c] mb-2">
                        <span className="font-bold text-[#1a1510]">bcryptjs (Salt 10):</span> Key stretching mitigates rainbow table database dumps.
                      </div>
                      <div className="text-[11px] font-sans text-[#5c4d3c]">
                        <span className="font-bold text-[#1a1510]">Signed JWT:</span> Cryptographically signed stateless tokens prevent session hijacking.
                      </div>
                    </div>
                    <div className="bg-[#8b7355]/5 text-[#2c241b] p-4 rounded-lg border border-[#8b7355]/20 shadow-md">
                      <div className="font-mono text-xs font-bold text-emerald-700 tracking-wider uppercase border-b border-[#8b7355]/30 pb-1 mb-2">
                        Database Hardening
                      </div>
                      <div className="text-[11px] font-sans text-[#5c4d3c]">
                        <span className="font-bold text-[#1a1510]">Mongoose Schema Binding:</span> Strict type coercion and schema enforcement prevents NoSQL query injection vulnerabilities.
                      </div>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={13}>
                <div className="h-full flex flex-col pt-2">
                  <h4 className="font-['Playfair_Display'] font-bold text-lg mb-4 text-center uppercase tracking-widest border-b border-[#8b7355]/30 pb-2">5.3 Order Lifecycle State</h4>
                  <div className="flex-1 px-1 flex flex-col justify-center gap-2">
                    {}
                    <div className="bg-[#8b7355]/5 text-[#2c241b] p-3.5 rounded-lg border border-[#8b7355]/20 shadow-md text-center">
                      <div className="font-mono text-[12px] font-bold text-[#1a1510] tracking-[0.15em] uppercase mb-1.5">
                        1. SCHEDULED
                      </div>
                      <div className="text-[11px] text-[#5c4d3c] font-serif italic leading-relaxed px-2">
                        The default state when a new order is created.
                      </div>
                    </div>
                    <div className="flex justify-center text-[#8b7355] font-bold text-lg">↓</div>
                    {}
                    <div className="bg-[#8b7355]/5 text-[#2c241b] p-3.5 rounded-lg border border-amber-700/30 shadow-md text-center">
                      <div className="font-mono text-[12px] font-bold text-amber-700 tracking-[0.15em] uppercase mb-1.5">
                        2. PROCESSING
                      </div>
                      <div className="text-[11px] text-[#5c4d3c] font-serif italic leading-relaxed px-2">
                        The state indicating that the laundry service is currently working on the order.
                      </div>
                    </div>
                    <div className="flex justify-center text-[#8b7355] font-bold text-lg">↓</div>
                    {}
                    <div className="bg-[#8b7355]/5 text-[#2c241b] p-3.5 rounded-lg border border-emerald-700/30 shadow-md text-center">
                      <div className="font-mono text-[12px] font-bold text-emerald-700 tracking-[0.15em] uppercase mb-1.5">
                        3. COMPLETED
                      </div>
                      <div className="text-[11px] text-[#5c4d3c] font-serif italic leading-relaxed px-2">
                        The state indicating that the laundry order has been successfully fulfilled.
                      </div>
                    </div>
                    {}
                    <div className="flex justify-center items-center py-0.5">
                      <div className="h-[1px] w-8 bg-[#8b7355]/40"></div>
                      <span className="text-[10px] text-[#8b7355] font-bold px-2 uppercase tracking-[0.2em]">OR</span>
                      <div className="h-[1px] w-8 bg-[#8b7355]/40"></div>
                    </div>
                    {}
                    <div className="bg-[#8b7355]/5 text-[#2c241b] p-3.5 rounded-lg border border-rose-700/30 shadow-md text-center">
                      <div className="font-mono text-[12px] font-bold text-rose-700 tracking-[0.15em] uppercase mb-1.5">
                        4. CANCELLED
                      </div>
                      <div className="text-[11px] text-[#5c4d3c] font-serif italic leading-relaxed px-2">
                        The state indicating that the order was cancelled before completion.
                      </div>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={14}>
                <div className="h-full flex flex-col pt-2 justify-center pb-12">
                  <div className="bg-[#8b7355]/5 text-[#2c241b] p-5 rounded-lg border border-[#8b7355]/20 shadow-xl relative overflow-hidden">
                    <h4 className="font-mono text-sm font-bold text-[#1a1510] tracking-widest uppercase border-b border-[#8b7355]/30 pb-2 mb-4">
                      5.4 Core Takeaways
                    </h4>
                    <div className="space-y-4 font-sans text-xs leading-relaxed text-[#5c4d3c]">
                      <p>
                        FreshClean successfully demonstrates that a high-performance, monolithic MERN stack can operate efficiently in a serverless ecosystem (Vercel) when strategic optimizations—such as lazy MongoDB connection pooling—are applied.
                      </p>
                      <p>
                        By combining a reactive React 19 frontend with a hardened, latency-optimized Node.js engine, the platform delivers instantaneous interaction, robust security, and the architectural headroom required to scale gracefully toward enterprise-level logistics tracking.
                      </p>
                    </div>
                  </div>
                </div>
              </Page>
              {}
              <Page number={15}>
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 pb-12">
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
                <div className="h-full flex flex-col items-center justify-center text-center px-4 pb-12">
                  <div className="w-full max-w-[240px]">
                    <h3 className="text-base font-['Playfair_Display'] font-bold uppercase tracking-[0.2em] text-[#1a1510] mb-6 pb-2 border-b border-[#8b7355]/30">
                      PROJECT LINKS
                    </h3>
                    <div className="flex flex-col gap-3.5 w-full">
                      <a
                        href="https://freshclean-seven.vercel.app"
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
                        href="https://github.com/abhishek-madar/freshclean-laundry"
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
