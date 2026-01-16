export default function TextArea({
  value,
  onChange,
  placeholder,
  className = "",
}) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        w-full p-4 rounded-lg resize-none
        bg-gray-900 dark:bg-black
        text-green-400 dark:text-green-300
        border border-gray-700
        focus:outline-none focus:ring-1 focus:ring-green-500
        ${className}
      `}
    />
  );
}
