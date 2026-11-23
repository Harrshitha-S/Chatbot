import { profile } from "../data/profile";

export default function ProfilePage() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Profile</h1>
      <ul className="space-y-2">
        {Object.entries(profile).map(([key, value]) => (
          <li key={key} className="flex justify-between border-b pb-1 dark:border-gray-700">
            <span className="font-semibold">{key}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}