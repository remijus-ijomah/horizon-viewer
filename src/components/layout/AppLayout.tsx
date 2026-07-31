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
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Header />

      <Box
        sx={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Sidebar />

        <Box
          component="main"
          sx={{
            flex: 1,
            overflow: "hidden",
          }}
        >
          {children}
        </Box>
      </Box>

      <StatusBar />
    </Box>
  );
}
