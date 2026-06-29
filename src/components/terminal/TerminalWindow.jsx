import TerminalHeader from "./TerminalHeader";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";

function TerminalWindow({
  history,
  executeCommand,
}) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-[#0d1117]
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
      "
    >
      <TerminalHeader
        onClear={() => executeCommand("clear")}
      />

      <TerminalOutput
        history={history}
      />

      <TerminalInput
        onCommand={executeCommand}
      />
    </div>
  );
}

export default TerminalWindow;