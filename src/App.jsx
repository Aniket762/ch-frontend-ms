import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ChatWindow from "./components/organisms/ChatWindow";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatWindow />} />
    </Routes>
  );
}
