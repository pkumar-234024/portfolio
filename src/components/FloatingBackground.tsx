import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Global floating 3D background - visible behind ALL sections.
 * Pro-level: glowing wireframe shapes, gradient particles,
 * animated connection lines, and subtle geometric forms.
 */

function CosmicParticles() {
  const particlesRef = useRef<THREE.Points>(null!);
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      particlesRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.008) * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#a5b4fc"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

function GlowingShape({
  position,
  speed,
  color,
  size,
  geometry,
}: {
  position: [number, number, number];
  speed: number;
  color: string;
  size: number;
  geometry: "octahedron" | "tetrahedron" | "dodecahedron" | "icosahedron";
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime;
      meshRef.current.rotation.x = t * speed * 0.4;
      meshRef.current.rotation.y = t * speed * 0.6;
      meshRef.current.rotation.z = t * speed * 0.2;
      // Floating motion
      meshRef.current.position.y =
        initialPos.current[1] + Math.sin(t * speed * 0.8) * 0.4;
      meshRef.current.position.x =
        initialPos.current[0] + Math.cos(t * speed * 0.5) * 0.15;
    }
  });

  const GeometryComponent = {
    octahedron: <octahedronGeometry args={[size, 0]} />,
    tetrahedron: <tetrahedronGeometry args={[size, 0]} />,
    dodecahedron: <dodecahedronGeometry args={[size, 0]} />,
    icosahedron: <icosahedronGeometry args={[size, 1]} />,
  };

  return (
    <mesh ref={meshRef} position={position}>
      {GeometryComponent[geometry]}
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

function FloatingRing({
  position,
  speed,
  color,
  radius,
  tilt,
}: {
  position: [number, number, number];
  speed: number;
  color: string;
  radius: number;
  tilt: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = tilt + Math.sin(t * speed) * 0.3;
      meshRef.current.rotation.z = t * speed * 0.15;
      meshRef.current.position.y =
        position[1] + Math.sin(t * speed * 0.6) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[radius, 0.006, 16, 80]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  );
}

function GlowOrb({
  position,
  speed,
  color,
  size,
}: {
  position: [number, number, number];
  speed: number;
  color: string;
  size: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(t * speed) * 0.5;
      meshRef.current.position.x =
        position[0] + Math.cos(t * speed * 0.7) * 0.3;
      // Pulsing scale
      const pulse = 1 + Math.sin(t * speed * 2) * 0.15;
      meshRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.1} />
    </mesh>
  );
}

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <CosmicParticles />

        {/* Scattered wireframe shapes - different geometries for variety */}
        <GlowingShape position={[-7, 5, -3]} speed={0.25} color="#818cf8" size={0.5} geometry="icosahedron" />
        <GlowingShape position={[8, -3, -4]} speed={0.2} color="#a78bfa" size={0.4} geometry="octahedron" />
        <GlowingShape position={[-5, -6, -2]} speed={0.3} color="#c084fc" size={0.45} geometry="dodecahedron" />
        <GlowingShape position={[6, 7, -3]} speed={0.18} color="#818cf8" size={0.35} geometry="tetrahedron" />
        <GlowingShape position={[-8, 0, -5]} speed={0.15} color="#a78bfa" size={0.4} geometry="icosahedron" />
        <GlowingShape position={[4, -8, -3]} speed={0.22} color="#c084fc" size={0.5} geometry="octahedron" />
        <GlowingShape position={[-3, 9, -4]} speed={0.17} color="#818cf8" size={0.3} geometry="dodecahedron" />
        <GlowingShape position={[9, 4, -6]} speed={0.14} color="#a78bfa" size={0.45} geometry="tetrahedron" />
        <GlowingShape position={[0, -4, -2]} speed={0.28} color="#c084fc" size={0.3} geometry="icosahedron" />
        <GlowingShape position={[-6, 3, -5]} speed={0.2} color="#818cf8" size={0.35} geometry="octahedron" />

        {/* Floating rings at various positions */}
        <FloatingRing position={[-6, 4, -4]} speed={0.12} color="#818cf8" radius={1} tilt={Math.PI / 3} />
        <FloatingRing position={[7, -5, -5]} speed={0.1} color="#a78bfa" radius={0.8} tilt={Math.PI / 4} />
        <FloatingRing position={[0, 8, -3]} speed={0.08} color="#c084fc" radius={0.9} tilt={Math.PI / 2.5} />
        <FloatingRing position={[-4, -7, -4]} speed={0.14} color="#818cf8" radius={0.7} tilt={Math.PI / 5} />
        <FloatingRing position={[5, 1, -6]} speed={0.11} color="#a78bfa" radius={1.1} tilt={Math.PI / 3.5} />

        {/* Subtle glow orbs for depth */}
        <GlowOrb position={[-5, 2, -3]} speed={0.15} color="#6366f1" size={0.8} />
        <GlowOrb position={[6, -3, -4]} speed={0.12} color="#8b5cf6" size={0.6} />
        <GlowOrb position={[0, 6, -5]} speed={0.1} color="#a855f7" size={0.7} />
        <GlowOrb position={[-3, -5, -3]} speed={0.18} color="#6366f1" size={0.5} />
      </Canvas>
    </div>
  );
}
