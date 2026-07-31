import { Button, FormControlLabel, Switch, Stack } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useViewerStore } from "../store/viewStore";
import InspectorPanel from "../../../components/ui/InspectorPanel";


export default function CameraPanel() {
  const autoRotate = useViewerStore((state) => state.autoRotate);

  const toggleAutoRotate = useViewerStore((state) => state.toggleAutoRotate);
  const requestCameraReset = useViewerStore(
    (state) => state.requestCameraReset,
  );

  return (
    <InspectorPanel title="Camera" icon={<CameraAltIcon fontSize="small" />}>
      <Stack spacing={2}>
        <FormControlLabel
          control={<Switch checked={autoRotate} onChange={toggleAutoRotate} />}
          label="Auto Rotate"
        />

        <Button variant="outlined" fullWidth onClick={requestCameraReset}>
          Reset Camera
        </Button>
      </Stack>
    </InspectorPanel>
  );
}
