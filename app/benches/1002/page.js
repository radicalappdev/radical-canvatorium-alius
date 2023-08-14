"use client";

import * as THREE from "three";
import React, { useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Box, OrbitControls, Text3D, Center, Resize, Environment, Bounds } from "@react-three/drei";

export default function CountdownClock() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <color attach="background" args={["#ffffff"]} />
        <OrbitControls makeDefault={true} />

        <Scene />
        <Environment background resolution={24}>
          <mesh scale={500}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshNormalMaterial side={THREE.BackSide} />
          </mesh>
        </Environment>
      </Canvas>
    </>
  );
}

function Scene({ margin = 0.5 }) {
  const targetDate = new Date("2023-09-27T00:00:00"); // Set your target date here
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining(targetDate);
      setTimeRemaining(remaining);

      if (remaining.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);
  const { width, height } = useThree((state) => state.viewport);
  return (
    <>
      {/* <Resize> */}
      <Bounds fit clip observe damping={6} margin={1.2}>
        <Center top left position={[width / 4 - margin, -height / 4 - margin, 0]}>
          <Text3D
            position={[0, 2.6, 0]}
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.16}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={0.8}
            font="/Inter_Bold.json"
          >
            {`${timeRemaining.days} days`}
            <meshNormalMaterial />
          </Text3D>

          <Text3D
            position={[0, 1.2, 0]}
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.16}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={0.8}
            font="/Inter_Bold.json"
          >
            {`${timeRemaining.hours} hours`}
            <meshNormalMaterial />
          </Text3D>

          <Text3D
            position={[0, 0, 0]}
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.16}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={0.8}
            font="/Inter_Bold.json"
          >
            {`${timeRemaining.minutes} minutes`}
            <meshNormalMaterial />
          </Text3D>

          <Text3D
            position={[0, -1.2, 0]}
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.16}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={0.8}
            font="/Inter_Bold.json"
          >
            {`${timeRemaining.seconds} seconds`}
            <meshNormalMaterial />
          </Text3D>
        </Center>
      </Bounds>
      {/* </Resize> */}
    </>
  );
}

// Helper function to calculate time remaining
function getTimeRemaining(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}
