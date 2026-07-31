import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "../theme";

type Props = {
  children: React.ReactNode;
};

export default function AppProviders({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
}
