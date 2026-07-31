import { useGLTF } from "@react-three/drei";

const MODEL_PATH = "/models/vehicle.glb";

export default function VehicleModel() {
  const { scene } = useGLTF(MODEL_PATH);

  return <primitive object={scene} scale={1} />;
}

useGLTF.preload(MODEL_PATH);
