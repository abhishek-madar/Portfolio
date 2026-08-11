<div align="center">
  <br />
    <h1 align="center">Abhishek Madar — Personal Portfolio</h1>
  <br />
  <p align="center">
    A premium, immersive, and highly interactive portfolio engineered to showcase technical projects, skills, and professional experience.
  </p>
  
  <p align="center">
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React 19" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite" alt="Vite" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS v4" /></a>
    <a href="https://threejs.org/"><img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" /></a>
  </p>
</div>

<hr />

## ✨ Architecture & Features

Designed with a focus on performance, fluid animations, and modern UI/UX principles.

- **Immersive 3D Experiences:** Integrates `Three.js` and `@react-three/fiber` for real-time, interactive 3D visual elements and physics simulations (`Rapier`).
- **Fluid Micro-Interactions:** Powered by `GSAP` and `Framer Motion` for cinematic page transitions and scroll-triggered animations.
- **Buttery Smooth Scrolling:** Utilizes `@studio-freight/lenis` to deliver a native-feeling, momentum-based scrolling experience.
- **Premium Aesthetic:** Built with `Tailwind CSS v4` featuring responsive layouts, custom glassmorphism, dynamic glowing gradients, and native dark mode support.
- **Enterprise-Grade Routing:** Dynamic, seamless navigation powered by `React Router DOM`.
- **Integrated Communications:** Live contact forms backed by `@emailjs/browser` for direct inquiries.

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Core Framework** | React 19, Vite, JavaScript / TypeScript |
| **Styling & Layout** | Tailwind CSS v4, Custom PostCSS |
| **3D & Graphics** | Three.js, React Three Fiber, Drei, Rapier 3D Physics |
| **Animations** | GSAP, Framer Motion, Lenis, Lottie React |
| **Routing & Logic** | React Router DOM v6 |
| **Icons & Assets** | Lucide React, React Icons, Iconify |

---

## 🚀 Getting Started

Follow these instructions to set up the project locally for development and testing.

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhishek-madar/Portfolio.git
   ```

2. **Navigate to the core application directory:**
   ```bash
   cd Portfolio/portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Launch the development server:**
   ```bash
   npm run dev
   ```
   > 💡 The application will be available locally at `http://localhost:5173`.

---

## 📦 Production Build

To optimize and bundle the application for production deployment:

```bash
npm run build
```
This will compile the application into the `dist` directory. You can preview the production build locally using:
```bash
npm run preview
```

---

## ☁️ Deployment Guide

This repository is optimized for zero-config deployments on **Vercel**.

1. Push your latest code to your GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and navigate to **Add New > Project**.
3. Import this GitHub repository.
4. ⚠️ **Critical Configuration**: In the Project Settings, set the **Root Directory** to `portfolio`.
5. Ensure the Framework Preset is auto-detected as **Vite**.
6. Deploy.

> **Note**: A `vercel.json` file is included in the project root to properly handle single-page application (SPA) routing rules in production.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
