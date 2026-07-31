import { Slider, Stack, Typography } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useViewerStore } from "../store/viewStore";
import InspectorPanel from "../../../components/ui/InspectorPanel";

export default function LightingPanel() {
  const intensity = useViewerStore((state) => state.lightingIntensity);

  const setIntensity = useViewerStore((state) => state.setLightingIntensity);

  return (
    <InspectorPanel title="Lighting" icon={<LightModeIcon fontSize="small" />}>
      <Stack spacing={2}>
        <Typography variant="body2">Intensity</Typography>

        <Slider
          min={0}
          max={5}
          step={0.1}
          value={intensity}
          onChange={(_, value) => setIntensity(value as number)}
        />
      </Stack>
    </InspectorPanel>
  );
}
