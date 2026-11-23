import { useState, useEffect } from "react";
import ChatWindow from "../components/ChatWindow";
import { initialMessages } from "../data/initialMessages";
import { botReplies } from "../data/botReplies";

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  function handleSend(text) {
    const newMessage = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
  }

  useEffect(() => {
    const last = messages[messages.length - 1];
    if (last.sender !== "user") return; // only reply to the user

    setIsTyping(true);
    const timer = setTimeout(() => {
      const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: reply, sender: "bot" },
      ]);
      setIsTyping(false);
    }, 1000);

    return () => clearTimeout(timer); // cleanup
  }, [messages]);

  return (
    <ChatWindow messages={messages} isTyping={isTyping} onSend={handleSend} />
  );
}