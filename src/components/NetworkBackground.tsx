// @ts-nocheck
"use client";
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';
function Stars(props: React.ComponentProps<typeof Points>) {
  const ref = useRef<THREE.Points>(null);
  
  // Create sphere distribution of points
  const sphere = useMemo(() => {
    // 5000 points * 3 coordinates (x,y,z) = 15000
    const positions = new Float32Array(15000);
    random.inSphere(positions, { radius: 1.5 });
    
    // Ensure no NaN values are present to avoid computeBoundingSphere warnings
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        positions[i] = 0;
      }
    }
    return positions;
  }, []);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00E5FF"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
export default function NetworkBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-corporate-blue">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}
