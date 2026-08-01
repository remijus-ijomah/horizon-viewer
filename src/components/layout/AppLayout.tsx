import { Box } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";
import StatusBar from "./StatusBar";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
        height: "100dvh",
        overflow: "hidden",
      }}
    >
      <Header />

      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: {
            xs: "column",
            md: "row",
          },
          overflow: "hidden",
        }}
      >
        <Sidebar />

        <Box
          component="main"
          sx={{
            flex: 1,
            display: "flex",
            overflow: "hidden",
            bgcolor: "background.default",
            minHeight: {
              xs: "60vh",
              md: 0,
            },
            minWidth: 0,
          }}
        >
          {children}
        </Box>
      </Box>

      <StatusBar />
    </Box>
  );
}
