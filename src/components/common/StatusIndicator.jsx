function StatusIndicator({
  size = "md",
  text = "",
  showText = false,
}) {
  const sizes = {
    sm: "h-2.5 w-2.5",
    md: "h-3 w-3",
    lg: "h-4 w-4",
  };

  return (
    <div className="flex items-center gap-2">

      <div
        className={`
          status-led
          ${sizes[size]}
          rounded-full
          flex-shrink-0
        `}
      />

      {showText && (
        <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-zinc-700">
          {text}
        </span>
      )}

    </div>
  );
}

export default StatusIndicator;