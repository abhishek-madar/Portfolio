import { Sparkles } from '@react-three/drei';
export default function Particles() {
  return (
    <group>
      <Sparkles 
        count={300}
        scale={25}
        size={3}
        speed={0.3}
        opacity={0.4}
        color="#3b82f6"
      />
      <Sparkles 
        count={200}
        scale={20}
        size={2}
        speed={0.5}
        opacity={0.3}
        color="#8b5cf6"
      />
    </group>
  );
}
