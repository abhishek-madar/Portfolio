import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot, MeshTransmissionMaterial, Float } from '@react-three/drei';
export default function FloatingObject() {
  const groupRef = useRef(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
  });
  return (
    <>
      {}
      <group ref={groupRef} position={[2.5, 0, 0]}>
        {}
        <Float position={[0, 0, 0]} speed={2} rotationIntensity={1} floatIntensity={2}>
          <group scale={1.2}>
            <TorusKnot args={[1, 0.4, 256, 64]}>
              <MeshTransmissionMaterial
                backside
                backsideThickness={2}
                thickness={1.5}
                chromaticAberration={1}
                anisotropy={0.5}
                distortion={0.3}
                distortionScale={0.5}
                temporalDistortion={0.1}
                color="#e2e8f0"
                ior={1.3}
                roughness={0.15}
                clearcoat={1}
                clearcoatRoughness={0.1}
                metalness={0.2}
                transmission={1}
              />
            </TorusKnot>
          </group>
        </Float>
      </group>
    </>
  );
}
