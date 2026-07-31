import { OrbitControls } from "@react-three/drei";

export default function CameraControls() {
  return <OrbitControls makeDefault enableDamping dampingFactor={0.08} />;
}
