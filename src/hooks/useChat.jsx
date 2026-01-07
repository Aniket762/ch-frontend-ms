import { useState } from "react";
import { sendChat } from "../api/chatApi";
import { v4 as uuid } from "uuid";
import { useSessionStorage } from "./useSessionStorage";

export default function useChat() {
  const [getMessages, setMessages] = useSessionStorage("chat", []);
  const [messages, setLocalMessages] = useState(getMessages());
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(uuid());

  const send = async () => {
    if (!input.trim()) return;

    const updated = [...messages, { role: "user", text: input }];
    setLocalMessages(updated);
    setMessages(updated);
    setInput("");
    setLoading(true);

    const res = await sendChat(input, sessionId);

    const final = [...updated, { role: "bot", text: res.answer }];
    setLocalMessages(final);
    setMessages(final);
    setLoading(false);
  };

  const reset = () => {
    setLocalMessages([]);
    setMessages([]);
    setSessionId(uuid());
  };

  return {
    messages,
    input,
    loading,
    setInput,
    send,
    reset,
  };
}
