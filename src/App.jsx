import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import Home from "./pages/home";
import AppLayout from "./components/layout/AppLayout";
import useChat from "./hooks/useChat";

export default function App() {
  const chat = useChat();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout
        sessions={chat.sessions}
        activeSessionId={chat.sessions.find(s => s.messages === chat.messages)?.sessionId}
        onNewChat={chat.newChat}
        onSelectSession={chat.selectSession}
      >
        <Home chat={chat} />
      </AppLayout>
    </ThemeProvider>
  );
}
