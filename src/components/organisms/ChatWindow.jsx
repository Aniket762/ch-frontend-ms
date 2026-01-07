import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Tooltip,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { sendChat } from "../../api/chatApi";

const STORAGE_KEY = "combine-health-chats";

const getUserAvatar = (seed) =>
  `https://api.dicebear.com/7.x/personas/svg?seed=${seed}`;

const getAiAvatar = () =>
  `https://api.dicebear.com/9.x/bottts/svg?seed=combine-health`;

export default function ChatWindow() {
  const navigate = useNavigate();

  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  /* ---------- Load from sessionStorage ---------- */
  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      setChats(parsed);
      if (parsed.length > 0) {
        setActiveChatId(parsed[0].id);
      }
    }
  }, []);

  /* ---------- Persist ---------- */
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
  }, [chats]);

  const activeChat = chats.find((c) => c.id === activeChatId);

  /* ---------- Actions ---------- */
  const createNewChat = () => {
    const newChat = {
      id: crypto.randomUUID(), // 🔥 perfect for sessionId
      title: "New Discussion",
      messages: [],
    };
    setChats((prev) => [newChat, ...prev]);
    setActiveChatId(newChat.id);
  };

  const sendMessage = async () => {
    if (!input.trim() || !activeChat || loading) return;

    const question = input;

    const userMessage = {
      role: "user",
      content: question,
    };

    // Optimistic update
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              title:
                chat.messages.length === 0
                  ? question.slice(0, 30)
                  : chat.title,
              messages: [...chat.messages, userMessage],
            }
          : chat
      )
    );

    setInput("");
    setLoading(true);

    try {
      const botResponse = await sendChat(
        question,
        activeChatId // sessionId
      );

      const assistantMessage = {
        role: "assistant",
        content: botResponse,
      };

      setChats((prev) =>
        prev.map((chat) =>
          chat.id === activeChatId
            ? {
                ...chat,
                messages: [...chat.messages, assistantMessage],
              }
            : chat
        )
      );
    } catch (err) {
      
        console.error("Chat API error:", err);
      
        const errorMessage = {
          role: "assistant",
          content:
            "⏳ We are sending your query, it's taking an unexpected amount of time to deliver.",
        };
      
        setChats((prev) =>
          prev.map((chat) =>
            chat.id === activeChatId
              ? {
                  ...chat,
                  messages: [...chat.messages, errorMessage],
                }
              : chat
          )
        );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        background:
          "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
      }}
    >
      {/* ---------- Sidebar ---------- */}
      <Box
        sx={{
          width: 280,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          background: "#fff",
          boxShadow: "4px 0 20px rgba(0,0,0,0.08)",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box
            onClick={createNewChat}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              p: 1,
              borderRadius: 2,
              "&:hover": { background: "#f5f5f5" },
            }}
          >
            <AddIcon fontSize="small" />
            <Typography fontSize="0.9rem">
              New Discussion
            </Typography>
          </Box>
        </Box>

        <List sx={{ px: 1, overflowY: "auto" }}>
          {chats.map((chat) => (
            <ListItem
              key={chat.id}
              button
              onClick={() => setActiveChatId(chat.id)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                background:
                  chat.id === activeChatId
                    ? "#f3f4f6"
                    : "transparent",
              }}
            >
              <ChatBubbleOutlineIcon
                fontSize="small"
                style={{ marginRight: 8 }}
              />
              <ListItemText
                primary={chat.title}
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  noWrap: true,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* ---------- Main Chat ---------- */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Box
          sx={{
            px: 3,
            py: 2,
            background: "#fff",
            borderBottom: "1px solid #eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={600}>
            Combine Health Assistant
          </Typography>

          <Tooltip title="Go to Home">
            <IconButton onClick={() => navigate("/")}>
              <HomeIcon />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Empty State */}
        {!activeChat && (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              Combine Health
            </Typography>
            <Typography color="text.secondary">
              Start a new discussion to begin ✨
            </Typography>
          </Box>
        )}

        {/* Messages */}
        {activeChat && (
          <Box
            sx={{
              flex: 1,
              px: { xs: 2, md: 6 },
              py: 4,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {activeChat.messages.map((msg, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent:
                    msg.role === "user"
                      ? "flex-end"
                      : "flex-start",
                }}
              >
                {msg.role === "assistant" && (
                  <Avatar src={getAiAvatar()} />
                )}

                <Box
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    maxWidth: "70%",
                    background:
                      msg.role === "user"
                        ? "#696969"
                        : "#fff",
                    color:
                      msg.role === "user" ? "#fff" : "inherit",
                    boxShadow:
                      msg.role === "assistant"
                        ? "0 6px 16px rgba(0,0,0,0.08)"
                        : "none",
                  }}
                >
                  <Typography>{msg.content}</Typography>
                </Box>

                {msg.role === "user" && (
                  <Avatar
                    src={getUserAvatar(activeChat.id)}
                  />
                )}
              </Box>
            ))}
          </Box>
        )}

        {/* Input */}
        {activeChat && (
          <Box
            sx={{
              px: { xs: 2, md: 6 },
              py: 2,
              background: "#fff",
              borderTop: "1px solid #eee",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: 1,
                borderRadius: 4,
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.12)",
              }}
            >
              <TextField
                fullWidth
                placeholder="Ask Combine Health anything..."
                variant="standard"
                InputProps={{ disableUnderline: true }}
                value={input}
                disabled={loading}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && sendMessage()
                }
              />
              <IconButton
                onClick={sendMessage}
                disabled={loading}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
