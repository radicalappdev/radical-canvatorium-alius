"use client";

import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

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
        <color attach="background" args={["#f1f5f9"]} />
        <OrbitControls />
        <gridHelper args={[10, 10, 0x1e293b, 0x94a3b8]} />

        {/* Render countdown elements */}
        <Text position={[0, 2, 0]} fontSize={0.5} color="white" textAlign="center" anchorX="center" anchorY="middle">
          {timeRemaining.days} days
        </Text>
        <Text position={[0, 1, 0]} fontSize={0.5} color="white" textAlign="center" anchorX="center" anchorY="middle">
          {timeRemaining.hours} hours
        </Text>
        <Text position={[0, 0, 0]} fontSize={0.5} color="white" textAlign="center" anchorX="center" anchorY="middle">
          {timeRemaining.minutes} minutes
        </Text>
        <Text position={[0, -1, 0]} fontSize={0.5} color="white" textAlign="center" anchorX="center" anchorY="middle">
          {timeRemaining.seconds} seconds
        </Text>
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
