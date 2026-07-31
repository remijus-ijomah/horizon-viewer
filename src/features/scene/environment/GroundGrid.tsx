import { Grid } from "@react-three/drei";
import { useViewerStore } from "../../view-inspector/store/viewStore";

export default function GroundGrid() {
  const showGrid = useViewerStore((state) => state.showGrid);

  if (!showGrid) return null;
  return (
    <Grid
      args={[20, 20]}
      cellSize={1}
      cellThickness={0.5}
      sectionSize={5}
      sectionThickness={1}
      fadeDistance={30}
    />
  );
}
