import { Box, Paper, Typography } from "@mui/material";

type InspectorPanelProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export default function InspectorPanel({
  title,
  icon,
  children,
}: InspectorPanelProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 2,
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 2,
        }}
      >
        {icon}

        <Typography variant="subtitle2" sx={{fontWeight:700}}>
          {title}
        </Typography>
      </Box>

      {children}
    </Paper>
  );
}
