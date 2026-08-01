import { Stack, Slider, Typography, TextField } from "@mui/material";

import InspectorPanel from "../../../components/ui/InspectorPanel";

import { useViewerStore } from "../../view-state/viewStore";

export default function MaterialPanel() {
  const color = useViewerStore((state) => state.vehicleColor);

  const metalness = useViewerStore((state) => state.metalness);

  const roughness = useViewerStore((state) => state.roughness);

  const setColor = useViewerStore((state) => state.setVehicleColor);

  const setMetalness = useViewerStore((state) => state.setMetalness);

  const setRoughness = useViewerStore((state) => state.setRoughness);

  return (
    <InspectorPanel title="Material">
      <Stack spacing={3}>
        <TextField
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          fullWidth
        />

        <div>
          <Typography variant="body2">Metalness</Typography>

          <Slider
            min={0}
            max={1}
            step={0.01}
            value={metalness}
            onChange={(_, value) => setMetalness(value as number)}
          />
        </div>

        <div>
          <Typography variant="body2">Roughness</Typography>

          <Slider
            min={0}
            max={1}
            step={0.01}
            value={roughness}
            onChange={(_, value) => setRoughness(value as number)}
          />
        </div>
      </Stack>
    </InspectorPanel>
  );
}
