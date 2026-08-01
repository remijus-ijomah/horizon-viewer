import { Grid } from "@react-three/drei";
import { useViewerStore } from "../../view-state/viewStore";

export default function GroundGrid() {
  const showGrid = useViewerStore((state) => state.showGrid);

  if (!showGrid) return null;

  return (
    <Grid
      args={[20, 20]}
      cellSize={1}
      cellThickness={0.35}
      cellColor="#555"
      sectionColor="#888"
      sectionThickness={0.8}
      fadeDistance={25}
      fadeStrength={1}
    />
  );
}
