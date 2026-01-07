import axios from "axios";

export const sendChat = async (query, sessionId) => {
  const res = await axios.post("/chat", {
    query,
    sessionId,
  });
  return res.data;
};
