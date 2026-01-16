export default function Input({ label, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-lg border px-3 py-2 text-sm
        bg-white dark:bg-gray-900
        border-gray-300 dark:border-gray-700
        text-gray-900 dark:text-gray-100
        focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}
