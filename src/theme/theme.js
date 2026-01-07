import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";

const theme = createTheme({
  palette,
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "0.95rem",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
