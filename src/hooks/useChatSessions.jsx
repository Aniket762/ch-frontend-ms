import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useSessionStorage } from "./useSessionStorage";

const STORAGE_KEY = "chat_sessions";

export default function useChatSessions() {
  const [getStored, setStored] = useSessionStorage(STORAGE_KEY, {
    sessions: [],
    activeSessionId: null,
  });

  const [state, setState] = useState(getStored());

  const activeSession = state.sessions.find(
    s => s.sessionId === state.activeSessionId
  );

  const persist = newState => {
    setState(newState);
    setStored(newState);
  };

  const createNewSession = () => {
    const newSession = {
      sessionId: uuid(),
      title: "New conversation",
      messages: [],
    };

    persist({
      sessions: [newSession, ...state.sessions],
      activeSessionId: newSession.sessionId,
    });
  };

  const updateMessages = messages => {
    const updatedSessions = state.sessions.map(s =>
      s.sessionId === state.activeSessionId
        ? { ...s, messages }
        : s
    );

    persist({
      ...state,
      sessions: updatedSessions,
    });
  };

  const selectSession = sessionId => {
    persist({
      ...state,
      activeSessionId: sessionId,
    });
  };

  return {
    sessions: state.sessions,
    activeSession,
    createNewSession,
    updateMessages,
    selectSession,
  };
}
