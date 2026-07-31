import { Box, Typography } from "@mui/material";

export default function StatusBar() {
  return (
    <Box
      sx={{
        height: 36,

        display: "flex",
        alignItems: "center",

        px: 2,

        backgroundColor: "background.paper",

        borderTop: "1px solid",

        borderColor: "divider",
      }}
    >
      <Typography variant="caption" color="text.secondary">
        FPS: -- | Objects: -- | Camera: --
      </Typography>
    </Box>
  );
}
