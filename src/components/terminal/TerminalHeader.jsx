function TerminalHeader({ onClear }) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 bg-[#161b22] px-5 py-3">

      {/* macOS Buttons */}

      <div className="flex items-center gap-2">

        <div className="h-3 w-3 rounded-full bg-red-500"></div>

        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>

        <div className="h-3 w-3 rounded-full bg-green-500"></div>

      </div>

      <span className="font-mono text-sm text-zinc-400">
        ANBU.OS Terminal
      </span>

      {/* Clear Button */}

      <button
        onClick={onClear}
        className="rounded-lg border border-zinc-700 px-3 py-1 text-xs font-semibold text-zinc-300 transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
      >
        Clear
      </button>

    </div>
  );
}

export default TerminalHeader;