import { useState } from "react";

function TerminalInput({ onCommand }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) return;

    onCommand(value);

    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 border-t border-zinc-800 bg-[#161b22] px-5 py-4"
    >
      <span className="font-mono text-cyan-400">
        PS C:\Users\Visitor&gt;
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type a command..."
        autoComplete="off"
        spellCheck={false}
        className="
          flex-1
          bg-transparent
          font-mono
          text-white
          outline-none
          placeholder:text-zinc-500
        "
      />
    </form>
  );
}

export default TerminalInput;