import { Canvas } from '@react-three/fiber';
import { Environment, Float, Preload } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingObject from '../../../shared/three/FloatingObject';
import Particles from '../../../shared/three/Particles';
export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full opacity-60">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]} 
        gl={{ antialias: false, alpha: true }} 
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <FloatingObject />
          <Particles />
          <Environment preset="city" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
