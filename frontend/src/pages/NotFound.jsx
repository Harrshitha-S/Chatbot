import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">404: page not found</h1>
      <Link to="/" className="text-blue-600 underline">Back to chat</Link>
    </div>
  );
}