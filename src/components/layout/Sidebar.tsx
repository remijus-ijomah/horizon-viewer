import { Box } from "@mui/material";
import ViewerControls from "../../features/view-controls/components/ViewControls";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 300,
        p: 2,
      }}
    >
      <ViewerControls />
    </Box>
  );
}
