import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

export default function AppLayout({
  children,
  sessions,
  activeSessionId,
  onNewChat,
  onSelectSession,
}) {
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Sidebar
        sessions={sessions}
        activeSessionId={activeSessionId}
        onNewChat={onNewChat}
        onSelectSession={onSelectSession}
      />

      <Box sx={{ flex: 1, bgcolor: "#F7F7F8", display: "flex", justifyContent: "center" }}>
        {children}
      </Box>
    </Box>
  );
}
