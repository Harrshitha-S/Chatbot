import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import useAutoScroll from "../hooks/useAutoScroll";

export default function MessageList({ messages, isTyping }) {
  const bottomRef = useAutoScroll(messages, isTyping);

  return (
    <div className="flex-1 space-y-2 overflow-y-auto p-4">
      {messages.map((m) => (
        <MessageBubble key={m.id} text={m.text} sender={m.sender} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  );
}
