export default function Button({ children, loading, ...props }) {
  return (
    <button
      {...props}
      disabled={loading}
      className="w-full rounded-lg bg-indigo-600 py-2 text-sm font-semibold text-white
      hover:bg-indigo-700 transition disabled:opacity-60"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
