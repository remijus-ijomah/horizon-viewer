import { FormControlLabel, Stack, Switch } from "@mui/material";

import InspectorPanel from "../../../components/ui/InspectorPanel";
import { useViewerStore } from "../../view-state/viewStore";

export default function ScenePanel() {
  const showGrid = useViewerStore((state) => state.showGrid);

  const toggleGrid = useViewerStore((state) => state.toggleGrid);

  const showShadows = useViewerStore((state) => state.showShadows);

  const toggleShadows = useViewerStore((state) => state.toggleShadows);

  return (
    <InspectorPanel title="Scene">
      <Stack spacing={2}>
        <FormControlLabel
          control={<Switch checked={showGrid} onChange={toggleGrid} />}
          label="Show Grid"
        />

        <FormControlLabel
          control={<Switch checked={showShadows} onChange={toggleShadows} />}
          label="Shadows"
        />
      </Stack>
    </InspectorPanel>
  );
}
