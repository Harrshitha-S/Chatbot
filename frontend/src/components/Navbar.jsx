import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `rounded px-3 py-1 ${isActive ? "bg-blue-600 text-white" : ""}`;

export default function Navbar() {
  return (
    <nav className="flex gap-2 border-b p-3 dark:border-gray-700">
      <NavLink to="/" end className={linkClass}>Chat</NavLink>
      <NavLink to="/profile" className={linkClass}>Profile</NavLink>
      <NavLink to="/settings" className={linkClass}>Settings</NavLink>
    </nav>
  );
}