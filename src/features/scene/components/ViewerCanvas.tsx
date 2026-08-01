import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Box } from "@mui/material";

import CanvasLoader from "./CanvasLoader";
import Scene from "../Scene";

export default function ViewerCanvas() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        flex:  1,
      }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
        }}
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
