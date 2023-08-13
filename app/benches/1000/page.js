"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

export default function Bench() {
  return (
    <>
      <Canvas camera={{ position: [0, 3, 5] }}>
        <color attach="background" args={["#eeeeee"]} />
        <OrbitControls />
        <primitive object={new THREE.GridHelper(10, 10)} />
        <Box>
          <meshBasicMaterial color="purple" />
        </Box>
      </Canvas>
    </>
  );
}
