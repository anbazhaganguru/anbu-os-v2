import { useState } from "react";

import TerminalHeader from "./TerminalHeader";
import TerminalLog from "./TerminalLog";
import LogViewer from "./LogViewer";

const logs = [
  {
    id: 1,
    year: "2026",
    command: "boot_anbu_os.exe",
    logs: [
      "Started building ANBU.OS",
      "Learning React",
      "Learning .NET",
      "Creating modern portfolio",
    ],
  },
  {
    id: 2,
    year: "2025",
    command: "deploy_sris_care.exe",
    logs: [
      "Graduated BCA",
      "Built Sri's Care",
      "Improved UI/UX skills",
    ],
  },
  {
    id: 3,
    year: "2024",
    command: "create_sportz_localz.exe",
    logs: [
      "Built Sportz Localz",
      "Responsive Design",
      "Bootstrap + JavaScript",
    ],
  },
  {
    id: 4,
    year: "2023",
    command: "install_frontend.pkg",
    logs: [
      "Started HTML",
      "Learned CSS",
      "Learned Bootstrap",
      "Started JavaScript",
    ],
  },
  {
    id: 5,
    year: "2022",
    command: "boot_bca.exe",
    logs: [
      "Started Bachelor of Computer Applications",
      "Explored programming fundamentals",
    ],
  },
];

function ExperienceTerminal() {
  const [selectedLog, setSelectedLog] = useState(null);

  const [open, setOpen] = useState(false);

  const handleOpen = (log) => {
    setSelectedLog(log);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
        <TerminalHeader />

        <TerminalLog
          logs={logs}
          onOpen={handleOpen}
        />
      </div>

      <LogViewer
        open={open}
        log={selectedLog}
        onClose={handleClose}
      />
    </>
  );
}

export default ExperienceTerminal;