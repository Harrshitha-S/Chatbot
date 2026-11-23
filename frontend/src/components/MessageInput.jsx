import { useState } from "react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  function submit() {
    if (text.trim() === "") return; // block empty messages
    onSend(text.trim());
    setText(""); // clear the input
  }

  return (
    <div className="flex gap-2 border-t p-3">
      <input
        className="flex-1 rounded-lg border px-3 py-2"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit();
        }}
      />
      <button
        onClick={submit}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        Send
      </button>
    </div>
  );
}