import axios from "axios";

const API_BASE = "http://localhost:8080/api/agent";

export const sendChat = async (question, sessionId) => {
  const res = await axios.post(
    `${API_BASE}/chat`,
    question, 
    {
      params: { sessionId },
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );

  return res.data;
};
