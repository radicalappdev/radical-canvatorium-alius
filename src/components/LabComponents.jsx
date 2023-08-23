import React, { useRef } from "react";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { labColors } from "@/utils/labTheme";
import { Hands, Controllers, useXR, useTeleportation } from "@react-three/xr";

export function LabCamera(props) {
  const { position } = props;

  return (
    <>
      <PerspectiveCamera makeDefault position={position}></PerspectiveCamera>
      <OrbitControls target={[0, 1, 0]} />
    </>
  );
}

export function LabRoom() {
  return (
    <>
      <color attach="background" args={[labColors.slate1]} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} />

      <gridHelper args={[20, 20, labColors.slate8, labColors.slate4]} />
    </>
  );
}

export function LabXRPlayer(props) {
  const { position } = props;
  const player = useXR((state) => state.player);
  player.position.set(...position);

  const teleport = useTeleportation({ leftHanded: true });
  teleport(...position);

  return (
    <>
      <Hands />
      <Controllers />
    </>
  );
}
