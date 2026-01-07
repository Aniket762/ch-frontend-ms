import { Box } from "@mui/material";

export default function AppLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        {children}
      </Box>
    </Box>
  );
}
