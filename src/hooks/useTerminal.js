import { useState } from "react";
import { terminalCommands } from "../data/terminalCommands";

function useTerminal() {
  const [history, setHistory] = useState([
    {
      command: "",
      title: "ANBU.OS Terminal",
      output: [
        "Type 'help' to view available commands.",
      ],
    },
  ]);

  const executeCommand = (value) => {
    const command = value.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      return;
    }

    const result = terminalCommands[command];

    if (result) {
      setHistory((prev) => [
        ...prev,
        {
          command,
          title: result.title,
          output: result.output,
        },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command,
          title: "Command Not Found",
          output: [
            `'${command}' is not recognized.`,
            "Type 'help' to view available commands.",
          ],
        },
      ]);
    }
  };

  return {
    history,
    executeCommand,
  };
}

export default useTerminal;