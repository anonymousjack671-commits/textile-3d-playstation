import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// ─── Thread (woven) ─────────────────────────────────────────────────────────
const Thread = ({ points, color, radius }) => {
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  return (
    <mesh castShadow receiveShadow>
      <tubeGeometry args={[curve, 64, radius, 12, false]} />
      <meshStandardMaterial color={color} roughness={0.65} metalness={0.15} />
    </mesh>
  );
};

// ─── Woven Fabric Model ──────────────────────────────────────────────────────
const WovenFabricModel = ({ structure }) => {
  const group = useRef();
  useFrame((state) => {
    if (group.current) group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  const { pattern, warpColor, weftColor } = structure;
  const repeats = 5;
  const rows = pattern.length;
  const cols = pattern[0].length;
  const totalRows = rows * Math.ceil(repeats / rows) * 2;
  const totalCols = cols * Math.ceil(repeats / cols) * 2;
  const spacing = 1.2;
  const radius = 0.45;
  const zOffset = 0.55;

  const threads = useMemo(() => {
    const warps = [];
    const wefts = [];
    const startX = -((totalCols - 1) * spacing) / 2;
    const startZ = -((totalRows - 1) * spacing) / 2;

    for (let c = 0; c < totalCols; c++) {
      const pts = [];
      const x = startX + c * spacing;
      for (let r = 0; r < totalRows; r++) {
        const z = startZ + r * spacing;
        const isUp = pattern[r % rows][c % cols] === 1;
        pts.push(new THREE.Vector3(x, isUp ? zOffset : -zOffset, z));
      }
      warps.push(<Thread key={`warp-${c}`} points={pts} color={warpColor} radius={radius} />);
    }
    for (let r = 0; r < totalRows; r++) {
      const pts = [];
      const z = startZ + r * spacing;
      for (let c = 0; c < totalCols; c++) {
        const x = startX + c * spacing;
        const isWarpUp = pattern[r % rows][c % cols] === 1;
        pts.push(new THREE.Vector3(x, isWarpUp ? -zOffset : zOffset, z));
      }
      wefts.push(<Thread key={`weft-${r}`} points={pts} color={weftColor} radius={radius} />);
    }
    return [...warps, ...wefts];
  }, [pattern, warpColor, weftColor, totalRows, totalCols, rows, cols]);

  return <group ref={group}>{threads}</group>;
};

// ─── Jersey Knit Model ───────────────────────────────────────────────────────
const JerseyKnitModel = ({ colors }) => {
  const group = useRef();
  useFrame((state) => {
    if (group.current) group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  const loops = useMemo(() => {
    const items = [];
    const cols = 8; const rows = 8;
    const cx = 0.9; const cz = 1.4;
    const startX = -((cols - 1) * cx) / 2;
    const startZ = -((rows - 1) * cz) / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = startX + c * cx;
        const z = startZ + r * cz;
        const offset = (r % 2) * (cx / 2);
        const pts = [
          new THREE.Vector3(x + offset - 0.35, 0, z - 0.6),
          new THREE.Vector3(x + offset - 0.4, 0.45, z - 0.2),
          new THREE.Vector3(x + offset, 0.6, z),
          new THREE.Vector3(x + offset + 0.4, 0.45, z + 0.2),
          new THREE.Vector3(x + offset + 0.35, 0, z + 0.6),
        ];
        const curve = new THREE.CatmullRomCurve3(pts);
        items.push(
          <mesh key={`knit-${r}-${c}`} castShadow>
            <tubeGeometry args={[curve, 20, 0.18, 8, false]} />
            <meshStandardMaterial color={r % 2 === 0 ? colors[0] : colors[1]} roughness={0.8} />
          </mesh>
        );
      }
    }
    return items;
  }, [colors]);

  return <group ref={group}>{loops}</group>;
};

// ─── Pile / Velvet Model ─────────────────────────────────────────────────────
const VelvetPileModel = ({ colors }) => {
  const group = useRef();
  useFrame((state) => {
    if (group.current) group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  const piles = useMemo(() => {
    const items = [];
    const cols = 10; const rows = 10;
    const sp = 1.1;
    const startX = -((cols - 1) * sp) / 2;
    const startZ = -((rows - 1) * sp) / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = startX + c * sp + (Math.random() - 0.5) * 0.2;
        const z = startZ + r * sp + (Math.random() - 0.5) * 0.2;
        const h = 0.6 + Math.random() * 0.4;
        const lean = (Math.random() - 0.5) * 0.3;
        const pts = [
          new THREE.Vector3(x, 0, z),
          new THREE.Vector3(x + lean * 0.5, h * 0.5, z),
          new THREE.Vector3(x + lean, h, z),
        ];
        const curve = new THREE.CatmullRomCurve3(pts);
        items.push(
          <mesh key={`pile-${r}-${c}`} castShadow>
            <tubeGeometry args={[curve, 8, 0.08, 5, false]} />
            <meshStandardMaterial color={colors[Math.floor(Math.random() * colors.length)]} roughness={1} />
          </mesh>
        );
      }
    }
    // Base plane
    items.push(
      <mesh key="base" position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={[(cols - 1) * sp + 1.5, 0.1, (rows - 1) * sp + 1.5]} />
        <meshStandardMaterial color={colors[0]} roughness={0.9} />
      </mesh>
    );
    return items;
  }, [colors]);

  return <group ref={group}>{piles}</group>;
};

// ─── STRUCTURED 3D CONFIGS ───────────────────────────────────────────────────
// Plain Weave
export const PLAIN_WEAVE_3D = {
  type: 'weave',
  pattern: [[1, 0], [0, 1]],
  warpColor: '#8b5cf6',
  weftColor: '#ec4899'
};

// Twill Weave (Denim)
export const TWILL_WEAVE_3D = {
  type: 'weave',
  pattern: [[1, 1, 0], [0, 1, 1], [1, 0, 1]],
  warpColor: '#3b82f6',
  weftColor: '#94a3b8'
};

// Satin / Sateen (5-end)
export const SATIN_WEAVE_3D = {
  type: 'weave',
  pattern: [
    [1, 1, 1, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 1, 1, 1, 1],
    [1, 1, 0, 1, 1]
  ],
  warpColor: '#fcd34d',
  weftColor: '#f59e0b'
};

// Basket / Oxford Weave
export const BASKET_WEAVE_3D = {
  type: 'weave',
  pattern: [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]],
  warpColor: '#10b981',
  weftColor: '#059669'
};

// Jersey Knit
export const JERSEY_KNIT_3D = {
  type: 'knit',
  subtype: 'jersey',
  colors: ['#7c6dab', '#a78fcc']
};

// Velvet / Pile
export const VELVET_PILE_3D = {
  type: 'pile',
  colors: ['#c8a96e', '#b39255', '#d4b98a']
};

// ─── MAIN VIEWER ─────────────────────────────────────────────────────────────
export const Fabric3DViewer = ({ structure }) => {
  const [isDragging, setIsDragging] = useState(false);

  if (!structure) {
    return (
      <div className="glass-panel" style={{ width: '100%', height: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
        <div style={{ background: 'var(--surface2)', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <span style={{ fontSize: '2rem' }}>🧵</span>
        </div>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>3D Model Coming Soon</h3>
        <p className="text-muted" style={{ maxWidth: '280px', fontSize: '0.9rem' }}>This fabric structure is being modelled for our 3D engine.</p>
      </div>
    );
  }

  // Determine which 3D model to render
  const renderModel = () => {
    if (structure.type === 'knit') {
      return <JerseyKnitModel colors={structure.colors || ['#7c6dab', '#a78fcc']} />;
    }
    if (structure.type === 'pile') {
      return <VelvetPileModel colors={structure.colors || ['#c8a96e', '#b39255']} />;
    }
    if (structure.type === 'weave' && structure.pattern) {
      return <WovenFabricModel structure={structure} />;
    }
    return null;
  };

  const model = renderModel();
  if (!model) return null;

  return (
    <div
      className="glass-panel"
      style={{ width: '100%', height: '420px', position: 'relative', cursor: isDragging ? 'grabbing' : 'grab', background: 'transparent', overflow: 'hidden' }}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
    >
      <Canvas
        camera={{ position: [12, 10, 12], fov: 45 }}
        shadows
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <color attach="background" args={['#0a0e1a']} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 15, 10]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <Environment preset="city" />
        {model}
        <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={30} blur={1.5} far={10} />
        <OrbitControls enablePan={false} minDistance={8} maxDistance={30} maxPolarAngle={Math.PI / 2 - 0.05} autoRotate={false} />
      </Canvas>
      <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', pointerEvents: 'none' }}>
        <div className="badge" style={{ fontSize: '0.75rem', opacity: 0.8 }}>🖱 Drag to rotate</div>
      </div>
      <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', pointerEvents: 'none' }}>
        <div className="badge">Interactive 3D Model</div>
      </div>
    </div>
  );
};
