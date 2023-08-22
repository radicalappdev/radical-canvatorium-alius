"use client";

import { Canvas } from "@react-three/fiber";
import { VRButton, XR } from "@react-three/xr";
import { Text } from "@react-three/drei";
import { labColors } from "@/utils/labTheme";
import { LabCamera, LabRoom, LabXRPlayer } from "@/components/LabComponents";

export default function Lab1000() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <LabCamera position={[0, 1.4, 4]} />
          <LabXRPlayer position={[0, 0, 4]} />
          <LabRoom />

          <mesh position={[0, 1.4, 0]} scale={[0.5, 0.5, 0.5]}>
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
