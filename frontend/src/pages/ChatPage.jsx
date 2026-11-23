import { useState } from "react";
import ChatWindow from "../components/ChatWindow";
import { initialMessages } from "../data/initialMessages";

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);

  function handleSend(text) {
    const newMessage = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
  }

  return <ChatWindow messages={messages} onSend={handleSend} />;
}