import { Divider } from "@mui/material";
import { CameraPanel } from "./camera";
import { LightingPanel } from "./lighting";
import { MaterialPanel } from "./material";
import { ScenePanel } from "./scene";

export default function ViewerInspector() {
  return (
    <>
      <CameraPanel />

      <Divider sx={{ my: 2 }} />

      <LightingPanel />

      <Divider sx={{ my: 2 }} />

      <MaterialPanel />

      <Divider sx={{ my: 2 }} />

      <ScenePanel />
    </>
  );
}
