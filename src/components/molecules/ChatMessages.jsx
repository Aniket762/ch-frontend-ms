import { Typography, Box } from "@mui/material";

export default function ChatMessages({ messages }) {
  if (!messages.length) {
    return (
      <Typography color="text.secondary">
        Start a conversation…
      </Typography>
    );
  }

  return (
    <Box>
      {messages.map((m, i) => (
        <Box key={i} sx={{ mb: 3 }}>
          <Typography fontWeight={600}>
            {m.role === "user" ? "You" : "AI"}
          </Typography>
          <Typography>{m.content}</Typography>
        </Box>
      ))}
    </Box>
  );
}
