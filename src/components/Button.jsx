export default function Button({
  children,
  loading = false,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        inline-flex items-center justify-center
        ${className}
        disabled:opacity-60 disabled:cursor-not-allowed
      `}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
