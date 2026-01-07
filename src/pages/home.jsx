import ChatWindow from "../components/organisms/ChatWindow";
import useChat from "../hooks/useChat";

export default function home({ chat }) {
  return (
    <ChatWindow
      messages={chat.messages}
      input={chat.input}
      loading={chat.loading}
      onInputChange={e => chat.setInput(e.target.value)}
      onSend={chat.send}
    />
  );
}

