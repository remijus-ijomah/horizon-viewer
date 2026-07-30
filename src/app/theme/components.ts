import type { Components } from "@mui/material/styles";

export const components: Components = {
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        backgroundImage: "none",
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
};
