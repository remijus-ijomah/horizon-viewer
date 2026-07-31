import {
  Box,
  Typography,
  Divider,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useViewerStore } from "../store/viewStore";

export default function ViewerControls() {
  const autoRotate = useViewerStore((state) => state.autoRotate);

  const toggleAutoRotate = useViewerStore((state) => state.toggleAutoRotate);

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        Viewer Controls
      </Typography>

      <Divider sx={{ my: 2 }} />

      <FormControlLabel
        control={<Switch checked={autoRotate} onChange={toggleAutoRotate} />}
        label="Auto Rotate"
      />
    </Box>
  );
}
