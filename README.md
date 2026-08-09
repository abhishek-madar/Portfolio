# Personal Portfolio

A professional, interactive portfolio website for Abhishek Madar, designed to showcase projects, skills, and experience through a modern, 3D-integrated web experience.

## Key Features

- **Immersive 3D Graphics**: Utilizes `Three.js` and `@react-three/fiber` for engaging 3D visual elements.
- **Smooth Animations**: Powered by `GSAP`, `@studio-freight/lenis` (smooth scrolling), and `Framer Motion` for fluid page transitions.
- **Modern UI Design**: Fully styled with `Tailwind CSS v4` for a responsive and premium aesthetic.
- **Dynamic Routing**: Built with `React Router` for seamless navigation across Home, About, Projects, and Case Studies.
- **Interactive Contact Form**: Integrated with `@emailjs/browser` for direct communication.

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **3D Rendering**: Three.js, React Three Fiber, Drei, Rapier
- **Animations**: GSAP, Framer Motion, Lottie React
- **Icons**: Lucide React, React Icons, Iconify

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhishek-madar/Portfolio.git
   ```

2. Navigate to the frontend app directory:
   ```bash
   cd Portfolio/portfolio
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Development

Start the Vite development server:
```bash
npm run dev
```

The website will be accessible locally at `http://localhost:5173` (or the nearest available port as specified in your terminal).

## Production Build

To build the website for production deployment:
```bash
npm run build
```
The optimized production files will be output to the `dist` directory.

To preview the production build locally:
```bash
npm run preview
```

## Deployment

This project is configured for seamless deployment on Vercel.

### Deploying to Vercel via GitHub

1. Push your code to your GitHub repository.
2. Go to [Vercel](https://vercel.com/) and log in with GitHub.
3. Click **Add New** -> **Project** and import your GitHub repository.
4. **Important**: In the configuration step, click **Edit** next to **Root Directory** and select the `portfolio` folder.
5. Ensure the Framework Preset is detected as **Vite**.
6. Click **Deploy**.

*Note: The project includes a `vercel.json` file to ensure client-side routing (React Router) works seamlessly when refreshed on Vercel.*

## License

This project is licensed under the MIT License.
