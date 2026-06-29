import useTerminal from "../../hooks/useTerminal";
import TerminalWindow from "./TerminalWindow";

import SectionHeader from "../common/SectionHeader";

function Terminal() {
  const {
    history,
    executeCommand,
  } = useTerminal();

  return (
    <section className="relative py-24">

      <div className="mx-auto max-w-6xl px-5">

<SectionHeader
    command="terminal.exe"
    title="Interactive Terminal"
    subtitle="Explore ANBU.OS using interactive shell commands."
/>

        <TerminalWindow
          history={history}
          executeCommand={executeCommand}
        />

      </div>

    </section>
  );
}

export default Terminal;