import { AppBar, Toolbar, Typography, Chip, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
          }}
        >
          Horizon Viewer
        </Typography>
        <Box sx={{ flexGrow: 1 }} />

        <Chip label="Prototype" color="primary" size="small" />
      </Toolbar>
    </AppBar>
  );
}
