import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { useTheme } from "../context/ThemeContext";


export default function ChatWindow({ messages, isTyping, onSend }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="mx-auto flex h-screen max-w-md flex-col">
      <header className="flex items-center justify-between border-b p-4 font-bold dark:border-gray-700">
        Chat
        <button
          onClick={toggleTheme}
          className="rounded border px-2 py-1 text-sm font-normal"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </header>
      <MessageList messages={messages} isTyping={isTyping} />
      <MessageInput onSend={onSend} />
    </div>
  );
}
