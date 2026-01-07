import { Box } from "@mui/material";
import ChatBubble from "../molecules/ChatBubble";
import AnimatedTyping from "../atoms/AnimatedTyping";

export default function MessageList({ messages, loading }) {
  return (
    <Box sx={{ flex: 1, overflowY: "auto", pr: 1 }}>
      {messages.map((m, i) => (
        <ChatBubble key={i} role={m.role} text={m.text} />
      ))}
      {loading && <AnimatedTyping />}
    </Box>
  );
}
