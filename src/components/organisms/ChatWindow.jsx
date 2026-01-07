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
    <Paper
      sx={{
        p: 3,
        height: "100%",
        width: "100%",
        maxWidth: 820,
        display: "flex",
        flexDirection: "column",
        borderRadius: 0,
        boxShadow: "none",
        bgcolor: "transparent",
      }}
    >
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
