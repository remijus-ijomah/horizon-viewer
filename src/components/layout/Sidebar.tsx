import { Box, Divider, Typography } from "@mui/material";
import { ViewerInspector } from "../../features/view-inspector";



export default function Sidebar() {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          md: 320,
        },
        height: "100%",
        borderRight: 1,
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          px: 2,
          py: 1.5,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Viewer Inspector
        </Typography>

        <Typography variant="caption" color="text.secondary">
          Scene configuration
        </Typography>
      </Box>

      <Divider />

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
        }}
      >
        <ViewerInspector />
      </Box>
    </Box>
  );
}
