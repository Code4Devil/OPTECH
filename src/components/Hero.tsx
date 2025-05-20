import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  Box,
  Sphere,
  Torus,
  Octahedron,
  Icosahedron,
  MeshWobbleMaterial,
  MeshDistortMaterial
} from '@react-three/drei';
import { Mesh } from 'three';

// Type definitions for component props
type GeometryProps = {
  position: [number, number, number];
  color: string;
  speed?: number;
  size?: number;
};

// Animated Box component
const AnimatedBox = ({ position, color, speed = 1, size = 1 }: GeometryProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed;
    }
  });

  return (
    <Box
      args={[size, size, size]}
      position={position}
      ref={meshRef}
    >
      <MeshWobbleMaterial
        color={color}
        factor={0.3}
        speed={0.5}
        wireframe={true}
        transparent={true}
        opacity={0.8}
      />
    </Box>
  );
};

// Animated Sphere component
const AnimatedSphere = ({ position, color, speed = 1, size = 1 }: GeometryProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * speed) * 0.3;
    }
  });

  return (
    <Sphere
      args={[size, 16, 16]}
      position={position}
      ref={meshRef}
    >
      <MeshDistortMaterial
        color={color}
        speed={2}
        distort={0.3}
        wireframe={true}
        transparent={true}
        opacity={0.8}
      />
    </Sphere>
  );
};

// Animated Torus component
const AnimatedTorus = ({ position, color, speed = 1, size = 1 }: GeometryProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.3 * speed;
    }
  });

  return (
    <Torus
      args={[size, size/4, 16, 32]}
      position={position}
      ref={meshRef}
    >
      <meshStandardMaterial
        color={color}
        wireframe={true}
        transparent={true}
        opacity={0.8}
      />
    </Torus>
  );
};

// Animated Octahedron component
const AnimatedOctahedron = ({ position, color, speed = 1, size = 1 }: GeometryProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2 * speed;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1 * speed;
    }
  });

  return (
    <Octahedron
      args={[size, 0]}
      position={position}
      ref={meshRef}
    >
      <meshStandardMaterial
        color={color}
        wireframe={true}
        transparent={true}
        opacity={0.8}
      />
    </Octahedron>
  );
};

// Animated Icosahedron component
const AnimatedIcosahedron = ({ position, color, speed = 1, size = 1 }: GeometryProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2 * speed;
    }
  });

  return (
    <Icosahedron
      args={[size, 0]}
      position={position}
      ref={meshRef}
    >
      <meshStandardMaterial
        color={color}
        wireframe={true}
        transparent={true}
        opacity={0.8}
      />
    </Icosahedron>
  );
};



const HeroModel = () => {
  return (
    <group>
      <AnimatedBox
        position={[2, 0, 0]}
        color="#3B82F6"
        speed={1}
        size={0.8}
      />
      <AnimatedSphere
        position={[-2, 0, 0]}
        color="#14B8A6"
        speed={0.8}
        size={0.7}
      />
      <AnimatedTorus
        position={[0, 2, 0]}
        color="#F97316"
        speed={1.2}
        size={1}
      />
      <AnimatedOctahedron
        position={[0, -2, 0]}
        color="#8B5CF6"
        speed={0.9}
        size={0.9}
      />
      <AnimatedIcosahedron
        position={[0, 0, 2]}
        color="#EC4899"
        speed={1.1}
        size={0.8}
      />
    </group>
  );
};

const Hero = () => {
  // Use React's useEffect to handle resize events
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen w-full relative">
      <Canvas
        camera={{
          position: isMobile ? [0, 0, 10] : [0, 0, 8],
          fov: isMobile ? 60 : 50
        }}
        dpr={[1, 2]} // Responsive pixel ratio
        performance={{ min: 0.5 }} // Lower performance on less capable devices
      >
        <color attach="background" args={['#050816']} />
        <fog attach="fog" args={['#050816', 5, 20]} />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8B5CF6" />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#EC4899" />
        <HeroModel />
        <Environment preset="night" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={isMobile ? 0.5 : 0.3}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
};

export default Hero;