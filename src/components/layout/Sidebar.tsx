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
        height: {
          xs: "auto",
          md: "100%",
        },
        maxHeight: {
          xs: "40vh",
          md: "100%",
        },
        flexShrink: 0,
        borderRight: {
          xs: 0,
          md: 1,
        },
        borderBottom: {
          xs: 1,
          md: 0,
        },
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
