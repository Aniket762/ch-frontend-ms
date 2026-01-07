import { Box } from "@mui/material";
import ChatMessages from "../molecules/ChatMessages";
import PromptInput from "../molecules/PromptInput";
import { useChatSessions } from "../../hooks/useChatSessions";

export default function ChatWindow() {
  const { activeSession } = useChatSessions();

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}
    >
      <Box sx={{ flex: 1, overflowY: "auto", p: 3 }}>
        <ChatMessages messages={activeSession.messages} />
      </Box>

      <PromptInput />
    </Box>
  );
}
