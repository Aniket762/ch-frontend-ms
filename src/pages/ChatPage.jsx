import { Box } from "@mui/material";
import ChatSidebar from "../components/layout/Sidebar";
import ChatWindow from "../components/organisms/ChatWindow";

export default function ChatPage() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden"
      }}
    >
      <ChatSidebar />

      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <ChatWindow />
      </Box>
    </Box>
  );
}
