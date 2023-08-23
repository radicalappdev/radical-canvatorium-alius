import React, { useRef } from "react";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { labColors } from "@/utils/labTheme";
import { Hands, Controllers, TeleportationPlane, useXR, useTeleportation } from "@react-three/xr";

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

  // THIS IS THE ONLY THING THAT HAS LET ME POSITION THE PLAYER
  // const player = useXR((state) => state.player);
  // player.position.set(...position);

  // THIS DOESN'T SEEM TO DO ANYTHING
  const teleport = useTeleportation();
  teleport(...position);

  return (
    <>
      <Hands />
      <Controllers />
      <TeleportationPlane leftHand rightHand />
    </>
  );
}
