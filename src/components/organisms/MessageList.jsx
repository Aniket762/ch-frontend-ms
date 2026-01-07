import { Box } from "@mui/material";
import ChatBubble from "../molecules/ChatBubble";
import AnimatedTyping from "../atoms/AnimatedTyping";
import EmptyState from "../molecules/EmptyState";

export default function MessageList({ messages, loading }) {
  if (messages.length === 0 && !loading) {
    return <EmptyState />;
  }

  return (
    <Box sx={{ flex: 1, overflowY: "auto", pb: 10 }}>
      {messages.map((m, i) => (
        <ChatBubble key={i} role={m.role} text={m.text} />
      ))}
      {loading && <AnimatedTyping />}
    </Box>
  );
}
