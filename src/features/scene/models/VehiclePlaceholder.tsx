import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

export default function VehiclePlaceholder() {
  const ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.003;

    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.08;
  });

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[1, 1, 1]} />

      <meshStandardMaterial color="#1565C0" metalness={0.6} roughness={0.35} />
    </mesh>
  );
}
