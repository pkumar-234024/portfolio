import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Premium wireframe globe with glowing edges, orbiting particles,
 * and neon accent rings — replaces the old ugly grey sphere.
 */

function GlowingGlobe() {
  const wireRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.12;
      wireRef.current.rotation.x = Math.sin(t * 0.08) * 0.15;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.08;
      innerRef.current.rotation.z = Math.cos(t * 0.06) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <group>
        {/* Outer wireframe sphere - glowing edges */}
        <mesh ref={wireRef} scale={2}>
          <icosahedronGeometry args={[1, 2]} />
          <meshBasicMaterial
            color="#818cf8"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Inner solid sphere with gradient-like glow */}
        <mesh ref={innerRef} scale={1.85}>
          <icosahedronGeometry args={[1, 3]} />
          <meshBasicMaterial
            color="#4f46e5"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>

        {/* Core glow - small bright center */}
        <mesh scale={0.3}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.6} />
        </mesh>

        {/* Secondary glow halo */}
        <mesh scale={0.8}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.08} />
        </mesh>
      </group>
    </Float>
  );
}

function OrbitingParticles() {
  const groupRef = useRef<THREE.Group>(null!);
  const count = 60;

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.5 + Math.random() * 1.5;
      const y = (Math.random() - 0.5) * 3;
      const speed = 0.1 + Math.random() * 0.15;
      const size = 0.015 + Math.random() * 0.025;
      arr.push({ angle, radius, y, speed, size });
    }
    return arr;
  }, []);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      pos[i * 3] = Math.cos(p.angle) * p.radius;
      pos[i * 3 + 1] = p.y;
      pos[i * 3 + 2] = Math.sin(p.angle) * p.radius;
    });
    return pos;
  }, [particles]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#c4b5fd"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

function NeonRing({
  radius,
  speed,
  color,
  tilt,
}: {
  radius: number;
  speed: number;
  color: string;
  tilt: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = tilt + Math.sin(t * speed) * 0.2;
      meshRef.current.rotation.z = t * speed * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[radius, 0.008, 16, 128]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </mesh>
  );
}

function AmbientStars() {
  const count = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const starsRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#a5b4fc"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        {/* Minimal lighting - we use MeshBasicMaterial for self-lit look */}
        <ambientLight intensity={0.2} />

        <GlowingGlobe />
        <OrbitingParticles />
        <AmbientStars />

        {/* Neon accent rings */}
        <NeonRing radius={3} speed={0.2} color="#818cf8" tilt={Math.PI / 3} />
        <NeonRing
          radius={3.5}
          speed={-0.15}
          color="#a78bfa"
          tilt={Math.PI / 2.5}
        />
        <NeonRing
          radius={4}
          speed={0.1}
          color="#c084fc"
          tilt={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
