import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { labColors } from "@/utils/labTheme";

export function LabCamera() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.4, 4]}></PerspectiveCamera>
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
