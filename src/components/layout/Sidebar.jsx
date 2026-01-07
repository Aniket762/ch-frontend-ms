import { Box, Button, List, ListItemButton, ListItemText } from "@mui/material";
import { useChatSessions } from "../../hooks/useChatSessions";

export default function ChatSidebar() {
  const { sessions, newSession, setActive } = useChatSessions();

  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "#0f172a",
        color: "#fff",
        p: 2,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Button variant="contained" onClick={newSession} sx={{ mb: 2 }}>
        + New Chat
      </Button>

      <List sx={{ p: 0, flex: 1 }}>
        {sessions.map(s => (
          <ListItemButton
            key={s.id}
            onClick={() => setActive(s.id)}
            sx={{ borderRadius: 1 }}
          >
            <ListItemText primary={s.title} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
