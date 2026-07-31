import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Box } from "@mui/material";

import Scene from "./Scene";
import CanvasLoader from "./CanvasLoader";

export default function ViewerCanvas() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas
        shadows
        camera={{
          position: [5, 3, 7],
          fov: 45,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Scene />
        </Suspense>
      </Canvas>
    </Box>
  );
}
