export default function MessageBubble({ text, sender }) {
  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-xs rounded-2xl px-4 py-2 ${
        isUser ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"
      }`}>
        {text}
      </div>
    </div>
  );
}