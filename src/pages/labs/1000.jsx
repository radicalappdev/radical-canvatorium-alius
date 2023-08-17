"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { VRButton, XR, Controllers, Hands } from "@react-three/xr";

export default function Lab1000() {
  return (
    <>
      <VRButton />
      <Canvas camera={{ position: [0, 3, 5] }}>
        <XR>
          <color attach="background" args={["#eeeeee"]} />
          <Controllers />
          <Hands />
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1} />
          <primitive object={new THREE.GridHelper(10, 10)} />
          <Box>
            <meshStandardMaterial color="purple" />
          </Box>
        </XR>
      </Canvas>
    </>
  );
}
