import { Html, useProgress } from "@react-three/drei";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function LaodingOverlay() {
  const { progress } = useProgress();

  return (
    <Html center>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          color: "white",
        }}
      >
        <CircularProgress variant="determinate" value={progress} />

        <Typography variant="body2">
          Loading vehicle {Math.round(progress)}%
        </Typography>
      </Box>
    </Html>
  );
}
