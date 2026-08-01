import { ContactShadows } from "@react-three/drei";

export default function VehicleShadow() {
  return (
    <ContactShadows
      position={[0, -0.63, 0]}
      opacity={0.55}
      scale={10}
      blur={3}
      far={5}
      resolution={1024}
    />
  );
}
