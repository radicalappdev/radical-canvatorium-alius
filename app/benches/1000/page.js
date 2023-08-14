"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

export default function Bench() {
  return (
    <>
      <Canvas camera={{ position: [0, 3, 5] }}>
        <color attach="background" args={["#f1f5f9"]} />
        <OrbitControls />
        <gridHelper args={[10, 10, 0x1e293b, 0x94a3b8]} />
        <Box position={[0, 0.5, 0]}>
          <meshBasicMaterial color="#8854d0" />
        </Box>
      </Canvas>
    </>
  );
}
