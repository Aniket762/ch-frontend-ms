import { Box, Paper, Typography } from "@mui/material";
import AvatarIcon from "../atoms/AvatarIcon";

export default function ChatBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 2,
        gap: 1,
      }}
    >
      {!isUser && <AvatarIcon label="C" bg="primary.main" />}

      <Paper
        sx={{
          p: 1.5,
          maxWidth: "70%",
          bgcolor: isUser ? "primary.main" : "background.paper",
          color: isUser ? "#fff" : "text.primary",
          animation: "fadeIn 0.3s ease-in",
          "@keyframes fadeIn": {
            from: { opacity: 0, transform: "translateY(5px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <Typography variant="body1">{text}</Typography>
      </Paper>

      {isUser && <AvatarIcon label="U" bg="#9CA3AF" />}
    </Box>
  );
}
