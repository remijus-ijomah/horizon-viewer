import { Canvas } from "@react-three/fiber";
import { Box } from "@mui/material";

import Scene from "./Scene";

export default function ViewerCanvas() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas shadows>
        <Scene />
      </Canvas>
    </Box>
  );
}
