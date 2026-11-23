import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

export default function MessageList({ messages, isTyping }) {
  return (
    <div className="flex-1 space-y-2 overflow-y-auto p-4">
      {messages.map((m) => (
        <MessageBubble key={m.id} text={m.text} sender={m.sender} />
      ))}
      {isTyping && <TypingIndicator />}
    </div>
  );
}