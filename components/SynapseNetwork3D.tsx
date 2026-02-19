"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { useIsMobile } from "@/lib/useIsMobile";

// ── Node Component ──
function Node({ position, color, connectedRef, isMobile }: { position: [number, number, number]; color: string; connectedRef: React.MutableRefObject<THREE.Vector3[]>, isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  
  // Random small movement
  const initialPos = useMemo(() => new THREE.Vector3(...position), [position]);
  const offset = useMemo(() => Math.random() * 100, []);
  
  useFrame((state) => {
    if (!meshRef.current || isMobile) return;
    const t = state.clock.getElapsedTime();
    
    // Float animation
    meshRef.current.position.x = initialPos.x + Math.sin(t * 0.5 + offset) * 0.2;
    meshRef.current.position.y = initialPos.y + Math.cos(t * 0.3 + offset) * 0.2;
    meshRef.current.position.z = initialPos.z + Math.sin(t * 0.4 + offset) * 0.2;
    
    // Update connected ref for lines
    // This is a bit expensive to do in a real app for many nodes, but fine for a small hero
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.5 : 1}
    >
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial
        color={hovered ? "#ffffff" : color}
        emissive={color}
        emissiveIntensity={hovered ? 2 : 0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

// ── Connections Component ──
function Connections({ nodes, isMobile }: { nodes: { pos: [number, number, number]; color: string }[], isMobile: boolean }) {
  const linesRef = useRef<THREE.LineSegments>(null);
  const { mouse, viewport } = useThree();
  const drawnRef = useRef(false);
  
  // Create geometry once
  const [geometry, material] = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const mat = new THREE.LineBasicMaterial({
      color: "#00c2ff",
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    return [geo, mat];
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    if (isMobile && drawnRef.current) return;
    
    // We need to update line positions based on mouse interaction or just static connections
    // For performance, let's just draw lines between close nodes
    
    const positions: number[] = [];
    const maxDist = 3.5;
    
    // Convert mouse to 3D roughly
    const mouseVec = new THREE.Vector3(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0
    );

    nodes.forEach((nodeA, i) => {
      nodes.forEach((nodeB, j) => {
        if (i >= j) return; // Avoid duplicates
        
        const dist = Math.sqrt(
          Math.pow(nodeA.pos[0] - nodeB.pos[0], 2) +
          Math.pow(nodeA.pos[1] - nodeB.pos[1], 2) +
          Math.pow(nodeA.pos[2] - nodeB.pos[2], 2)
        );

        if (dist < maxDist) {
          positions.push(...nodeA.pos);
          positions.push(...nodeB.pos);
        }
      });
      
      // Connection to mouse
      const nodeVec = new THREE.Vector3(...nodeA.pos);
      // Simple projection for demo - real 3D would need unproject
      // But let's just make it react to "center" if mouse is close
      
      // Rotate entire group based on mouse
      if (!isMobile && linesRef.current?.parent) {
         linesRef.current.parent.rotation.y = THREE.MathUtils.lerp(linesRef.current.parent.rotation.y, state.mouse.x * 0.2, 0.05);
         linesRef.current.parent.rotation.x = THREE.MathUtils.lerp(linesRef.current.parent.rotation.x, -state.mouse.y * 0.2, 0.05);
      }
    });

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    
    if (isMobile) drawnRef.current = true;
  });

  return <lineSegments ref={linesRef} geometry={geometry} material={material} />;
}


function SynapseScene({ isMobile }: { isMobile: boolean }) {
    // Generate random nodes
    const nodeCount = isMobile ? 15 : 40;
    const nodes = useMemo(() => {
      const temp = [];
      for (let i = 0; i < nodeCount; i++) {
        temp.push({
          pos: [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4,
          ] as [number, number, number],
          color: Math.random() > 0.5 ? "#00c2ff" : "#A855F7",
        });
      }
      return temp;
    }, [nodeCount]);
  
    const connectedRef = useRef<THREE.Vector3[]>([]);
  
    return (
      <group>
        {nodes.map((n, i) => (
          <Node key={i} position={n.pos} color={n.color} connectedRef={connectedRef} isMobile={isMobile} />
        ))}
        {/* We pass static nodes prop, but in a real sim we'd track their animated positions */}
        <Connections nodes={nodes} isMobile={isMobile} />
      </group>
    );
  }

export default function SynapseNetwork3D({ className }: { className?: string }) {
  // Only render on client to avoid hydration mismatch with canvas
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className={className} />;

  return (
    <div className={className}>
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00c2ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#A855F7" />
        <SynapseScene isMobile={isMobile} />
        <fog attach="fog" args={['#050505', 8, 20]} />
      </Canvas>
    </div>
  );
}
