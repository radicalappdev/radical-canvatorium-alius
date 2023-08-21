// React Three Fiber camera controls

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export function LabCamera() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.4, 4]}></PerspectiveCamera>
      <OrbitControls target={[0, 1, 0]} />
    </>
  );
}
