import { useState } from "react";
import { v4 as uuid } from "uuid";
import { INFO_SESSION_ID } from "../utils/constants";

export default function useChat() {
  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(INFO_SESSION_ID);

  const startNewChat = () => {
    const id = uuid();
    setSessions(prev => [
      {
        id,
        title: "New conversation",
        messages: []
      },
      ...prev
    ]);
    setActiveSessionId(id);
  };

  return {
    sessions,
    activeSessionId,
    startNewChat,
    setActiveSession: setActiveSessionId
  };
}
