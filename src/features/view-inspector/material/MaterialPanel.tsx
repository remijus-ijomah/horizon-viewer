import { FormControlLabel, Stack, Switch } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import InspectorPanel from "../../../components/ui/InspectorPanel";
import { useViewerStore } from "../store/viewStore";

export default function MaterialPanel() {
  const wireframe = useViewerStore((state) => state.wireframe);

  const toggleWireframe = useViewerStore((state) => state.toggleWireframe);

  return (
    <InspectorPanel title="Material" icon={<PaletteIcon fontSize="small" />}>
      <Stack spacing={2}>
        <FormControlLabel
          control={<Switch checked={wireframe} onChange={toggleWireframe} />}
          label="Wireframe"
        />
      </Stack>
    </InspectorPanel>
  );
}
