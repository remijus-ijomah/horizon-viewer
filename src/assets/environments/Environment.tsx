import { Environment } from "@react-three/drei";

export default function SceneEnvironment() {
  return (
    <Environment
      preset="studio"
      background={false}
      environmentIntensity={1.2}
    />
  );
}
