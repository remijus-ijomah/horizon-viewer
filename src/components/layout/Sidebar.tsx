import { Box, Divider, Typography } from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 280,
        backgroundColor: "background.paper",

        borderRight: "1px solid",

        borderColor: "divider",

        p: 2,
      }}
    >
      <Typography variant="subtitle1" fontWeight={600}>
        Controls
      </Typography>

      <Divider
        sx={{
          my: 2,
        }}
      />

      <Typography color="text.secondary">Camera</Typography>

      <Typography
        color="text.secondary"
        sx={{
          mt: 2,
        }}
      >
        Lighting
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          mt: 2,
        }}
      >
        Materials
      </Typography>
    </Box>
  );
}
