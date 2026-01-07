import { Box, Paper } from "@mui/material";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "../molecules/ChatInput";

export default function ChatWindow({
  messages,
  input,
  loading,
  onInputChange,
  onSend,
  onNewChat,
}) {
  return (
    <Paper sx={{ p: 3, height: "90vh", display: "flex", flexDirection: "column" }}>
      <ChatHeader onNewChat={onNewChat} />
      <MessageList messages={messages} loading={loading} />
      <ChatInput
        value={input}
        onChange={onInputChange}
        onSend={onSend}
        disabled={loading}
      />
    </Paper>
  );
}
