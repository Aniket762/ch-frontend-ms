import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import AppLayout from "./components/layout/AppLayout";
import Home from './pages/home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout>
        <Home />
      </AppLayout>
    </ThemeProvider>
  );
}
