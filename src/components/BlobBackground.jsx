// BlobOrbitBackground.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function OrbitingParticles() {
  const group = useRef();
  const angles = useRef([]);

  if (angles.current.length === 0) {
    angles.current = Array.from({ length: 30 }).map(() => Math.random() * Math.PI * 2);
  }

  useFrame(() => {
    group.current.children.forEach((child, i) => {
      const radius = 1.5 + (i % 8) * 0.6;    // spread rings wider
      const speed = 0.1 + (i % 6) * 0.03;    // slower orbit speed
      angles.current[i] += speed * 0.01;

      const angle = angles.current[i];
      child.position.x = Math.cos(angle) * radius;
      child.position.z = Math.sin(angle) * radius;
      child.position.y = Math.sin(angle * 2) * 0.05; // subtle bobbing
    });
  });

  return (
    <group ref={group} rotation={[Math.PI / 4, 0, 0]} position={[0, -0.5, 0]}>
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.02, 12, 12]} /> {/* much smaller */}
          <meshStandardMaterial
            emissive="#88aaff"
            emissiveIntensity={1.5}
            color="#ffffff"
          />
        </mesh>
      ))}
    </group>
  );
}



function Blob() {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scale = 0.35 + Math.sin(t * 1.5) * 0.05; // pulsing scale
    ref.current.scale.set(scale, scale, scale);

    // pulse glow
    ref.current.material.emissiveIntensity = 1.2 + Math.sin(t * 2) * 0.4;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.35, 64, 64]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={1.5}
        roughness={0.4}
        metalness={0.2}
      />
    </mesh>
  );
}

function RippleRings() {
  return (
    <group rotation={[-Math.PI / 2.5, 0, 0]}>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i}>
          <ringGeometry args={[i + 1.2, i + 1.25, 128]} />
          <meshBasicMaterial
            color="#8888ff"
            transparent
            opacity={0.12 - i * 0.012}
            side={2}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function BlobOrbitBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        background: "black",
      }}
    >
      <Canvas camera={{ position: [0, 3, 6], fov: 55 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} />
        <Blob />
        <OrbitingParticles />
        <RippleRings />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
