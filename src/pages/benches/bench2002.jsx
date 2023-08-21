"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { PresentationControls, Text3D, Center, Bounds } from "@react-three/drei";

export default function CountdownClock() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <color attach="background" args={["#0e0e0e"]} />
        <PresentationControls makeDefault={true} snap global zoom={0.8} rotation={[0, 0, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
          <Scene />
        </PresentationControls>
      </Canvas>
    </>
  );
}

function Scene({ margin = 0.5 }) {
  const targetDate = useMemo(() => new Date("2023-09-27T00:00:00"), []);
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
      <Bounds fit clip observe damping={6} margin={1.2}>
        <Center top left position={[width / 4 - margin, -height / 4 - margin, 0]}>
          <Text3D
            position={[0, 4.2, 0]}
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.16}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={0.6}
            font="/Inter_Bold.json"
          >
            {`Meta Connect 2023`}
            <meshNormalMaterial />
          </Text3D>
          <Text3D
            position={[0, 2.4, 0]}
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
