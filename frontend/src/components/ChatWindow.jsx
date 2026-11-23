import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const messages = [
  { id: 1, text: "Hi! Welcome to the chat.", sender: "bot" },
  { id: 2, text: "Hello, this is my message.", sender: "user" },
  { id: 3, text: "Nice to meet you!", sender: "bot" },
];

export default function ChatWindow() {
  return (
    <div className="mx-auto flex h-screen max-w-md flex-col">
      <header className="border-b p-4 font-bold">Chat</header>
      <MessageList messages={messages} />
      <MessageInput />
    </div>
  );
}