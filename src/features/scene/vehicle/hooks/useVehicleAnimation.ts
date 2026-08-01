import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export default function useVehicleAnimation(
  ref: React.RefObject<Group | null>,
) {
  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.y = clock.elapsedTime * 0.2;

    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.05;
  });
}
