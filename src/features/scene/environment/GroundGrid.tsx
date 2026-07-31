import { Grid } from "@react-three/drei";

export default function GroundGrid() {
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
