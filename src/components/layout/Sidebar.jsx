import {
    Box,
    Typography,
    Button,
    List,
    ListItemButton,
  } from "@mui/material";
  import AddIcon from "@mui/icons-material/Add";
  
  export default function Sidebar({
    sessions,
    activeSessionId,
    onNewChat,
    onSelectSession,
  }) {
    return (
      <Box
        sx={{
          width: 260,
          bgcolor: "#202123",
          color: "#ECECF1",
          p: 2,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
        }}
      >
        <Button
          startIcon={<AddIcon />}
          onClick={onNewChat}
          sx={{
            color: "#ECECF1",
            border: "1px solid #4D4D4F",
            mb: 2,
            textTransform: "none",
          }}
        >
          New chat
        </Button>
  
        <List dense sx={{ overflowY: "auto" }}>
          {sessions.map(session => (
            <ListItemButton
              key={session.sessionId}
              selected={session.sessionId === activeSessionId}
              onClick={() => onSelectSession(session.sessionId)}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                color: "#ECECF1",
                "&.Mui-selected": {
                  bgcolor: "#343541",
                },
              }}
            >
              <Typography variant="body2" noWrap>
                {session.title}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      </Box>
    );
  }
  