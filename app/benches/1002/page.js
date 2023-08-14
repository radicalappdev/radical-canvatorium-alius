"use client";

import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";

export default function CountdownClock() {
  const targetDate = new Date("2023-12-31T00:00:00"); // Set your target date here
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

  return (
    <>
      <Canvas camera={{ position: [0, 3, 5] }}>
        <color attach="background" args={["#b1b7fe"]} />
        <OrbitControls />
        <gridHelper args={[10, 10, 0x1e293b, 0x94a3b8]} />

        {/* Render countdown elements */}
        <Text3D
          position={[0, 2, 0]}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1}
          font="/Inter_Bold.json"
        >
          {`${timeRemaining.days} days`}
          <meshNormalMaterial />
        </Text3D>
        <Text3D
          position={[0, 1, 0]}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1}
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
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1}
          font="/Inter_Bold.json"
        >
          {`${timeRemaining.minutes} minutes`}
          <meshNormalMaterial />
        </Text3D>
        <Text3D
          position={[0, -1, 0]}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1}
          font="/Inter_Bold.json"
        >
          {`${timeRemaining.seconds} seconds`}
          <meshNormalMaterial />
        </Text3D>
      </Canvas>
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
