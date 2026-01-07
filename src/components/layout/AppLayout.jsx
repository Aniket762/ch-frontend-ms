import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden", // 🔑 prevents X/Y overflow
        backgroundColor: "#f9fafb"
      }}
    >
      <Sidebar />

      {/* MAIN CONTENT */}
      <Box
        sx={{
          flex: 1,
          height: "100%",
          overflowY: "auto",   // 🔑 only this scrolls
          overflowX: "hidden",
          px: 4,
          py: 3
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
