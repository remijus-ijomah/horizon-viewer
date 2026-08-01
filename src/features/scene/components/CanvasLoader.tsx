import { Html, useProgress } from "@react-three/drei";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          color: "white",
          whiteSpace: "nowrap",
        }}
      >
        <CircularProgress size={28} variant="determinate" value={progress} />

        <Typography variant="body2">
          Loading vehicle {Math.round(progress)}%
        </Typography>
      </Box>
    </Html>
  );
}
