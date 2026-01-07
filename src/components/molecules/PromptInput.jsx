import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function PromptInput({ setMessages }) {
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;

    setMessages(prev => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: "Mock AI response" }
    ]);

    setInput("");
  };

  return (
    <Box
      sx={{
        borderTop: "1px solid #e5e7eb",
        p: 2,
        display: "flex",
        gap: 2,
        alignItems: "center"
      }}
    >
      <TextField
        fullWidth
        value={input}
        placeholder="Ask something..."
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === "Enter" && send()}
      />

      <Button
        variant="contained"
        sx={{ whiteSpace: "nowrap" }}
        onClick={send}
      >
        Send
      </Button>
    </Box>
  );
}
