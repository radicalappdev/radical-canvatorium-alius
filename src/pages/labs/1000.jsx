"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { VRButton, XR, Controllers, Hands } from "@react-three/xr";
import { labColors } from "@/utils/labTheme";

export default function Lab1000() {
  return (
    <>
      <VRButton />
      {/* Camera position is set in flat mode, but when I enter XR the player appears at 0, 0, 0 */}
      <Canvas camera={{ position: [0, 3, 5] }}>
        <XR>
          <color attach="background" args={[labColors.slate1]} />
          <Controllers />
          <Hands />
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1} />
          <primitive object={new THREE.GridHelper(20, 20)} />

          {/* create a plane with a transparent material */}

          <mesh position={[0, 1.4, 0]}>
            <planeGeometry attach="geometry" args={[4, 2]} />
            <meshBasicMaterial attach="material" color={labColors.slate1} transparent opacity={0.8} />
            <Text font="/fonts/NotoSans-Bold.ttf" color={labColors.slate8} anchorX="center" anchorY="middle" scale={[0.3, 0.3, 0.3]} position={[0, 0.2, 0.01]}>
              Canvatorium Alius
            </Text>
            <Text font="/fonts/NotoSans-Bold.ttf" color={labColors.slate8} anchorX="center" anchorY="middle" scale={[0.15, 0.15, 0.15]} position={[0, -0.2, 0.01]}>
              React + Three.js Edition
            </Text>
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}
