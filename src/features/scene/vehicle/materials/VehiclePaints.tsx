//import { meshPhysicalMaterial } from "@react-three/fiber";
import { useViewerStore } from "../../../view-state/viewStore";

export default function VehiclePaint() {
  const color = useViewerStore((state) => state.vehicleColor);
  const metalness = useViewerStore((state) => state.metalness);
  const roughness = useViewerStore((state) => state.roughness);

  return (
    <meshPhysicalMaterial
      color={color}
      metalness={metalness}
      roughness={roughness}
      clearcoat={1}
      clearcoatRoughness={0.08}
      reflectivity={1}
      envMapIntensity={1.5}
    />
  );
}
