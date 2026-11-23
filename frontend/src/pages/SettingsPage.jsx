import { useTheme } from "../context/ThemeContext";

const settings = { Notifications: "On", Language: "English" };

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Settings</h1>
      <ul className="space-y-2">
        {Object.entries(settings).map(([key, value]) => (
          <li key={key} className="flex justify-between border-b pb-1 dark:border-gray-700">
            <span className="font-semibold">{key}</span>
            <span>{value}</span>
          </li>
        ))}
        <li className="flex items-center justify-between">
          <span className="font-semibold">Theme</span>
          <button onClick={toggleTheme} className="rounded border px-3 py-1">
            {theme === "light" ? "Switch to dark" : "Switch to light"}
          </button>
        </li>
      </ul>
    </div>
  );
}