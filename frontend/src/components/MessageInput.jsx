export default function MessageInput() {
  return (
    <div className="flex gap-2 border-t p-3">
      <input className="flex-1 rounded-lg border px-3 py-2" placeholder="Type a message..." />
      <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">Send</button>
    </div>
  );
}