import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatWindow({ messages,isTyping, onSend }) {
  return (
    <div className="mx-auto flex h-screen max-w-md flex-col">
      <header className="border-b p-4 font-bold">Chat</header>
      <MessageList messages={messages} isTyping={isTyping} />
      <MessageInput onSend={onSend} />
    </div>
  );
}