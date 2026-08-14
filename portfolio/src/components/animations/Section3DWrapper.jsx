import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export default function Section3DWrapper({ children, zIndex = 1 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [15, 0, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        scale,
        opacity,
        y,
        transformPerspective: 1200,
        transformOrigin: "center center",
        willChange: "transform, opacity",
        zIndex: zIndex
      }}
      className="w-full flex flex-col items-center"
    >
      {children}
    </motion.div>
  );
}
