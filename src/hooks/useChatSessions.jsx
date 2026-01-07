import { useState } from "react";

export function useChatSessions() {
  const [sessions, setSessions] = useState([
    {
      id: "default",
      title: "New conversation",
      messages: []
    }
  ]);

  const [activeId, setActiveId] = useState("default");

  const newSession = () => {
    const id = Date.now().toString();
    setSessions(prev => [
      {
        id,
        title: "New conversation",
        messages: []
      },
      ...prev
    ]);
    setActiveId(id);
  };

  const setActive = id => setActiveId(id);

  const activeSession = sessions.find(s => s.id === activeId);

  return {
    sessions,
    activeSession,
    newSession,
    setActive
  };
}
