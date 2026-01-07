import { useState, useEffect } from "react";
import { sendChat } from "../api/chatApi";
import useChatSessions from "./useChatSessions";

export default function useChat() {
  const {
    sessions,
    activeSession,
    createNewSession,
    updateMessages,
    selectSession,
  } = useChatSessions();

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // create first session on load
  useEffect(() => {
    if (!activeSession) {
      createNewSession();
    }
  }, []);

  const send = async () => {
    if (!input.trim() || !activeSession) return;

    const updatedMessages = [
      ...activeSession.messages,
      { role: "user", text: input },
    ];

    updateMessages(updatedMessages);
    setInput("");
    setLoading(true);

    const res = await sendChat(input, activeSession.sessionId);

    updateMessages([
      ...updatedMessages,
      { role: "bot", text: res.answer },
    ]);

    setLoading(false);
  };

  return {
    sessions,
    messages: activeSession?.messages || [],
    input,
    loading,
    setInput,
    send,
    newChat: createNewSession,
    selectSession,
  };
}
