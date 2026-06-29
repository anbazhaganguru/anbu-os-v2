import { motion } from "framer-motion";

function TerminalHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
      }}
      className="
        overflow-hidden
        rounded-t-3xl
        border-b
        border-zinc-800
        bg-[#161b22]
      "
    >
      <div className="flex items-center justify-between px-5 py-4">

        {/* Left */}

        <div className="flex items-center gap-2">

          <div className="h-3 w-3 rounded-full bg-red-500"></div>

          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>

          <div className="h-3 w-3 rounded-full bg-green-500"></div>

        </div>

        {/* Title */}

        <span className="font-mono text-xs tracking-widest text-zinc-400">

          EXPERIENCE.LOG

        </span>

      </div>

      <div className="border-t border-zinc-800 bg-[#0d1117] px-5 py-4">

        <p className="font-mono text-sm">

          <span className="text-cyan-400">
            PS C:\ANBU.OS&gt;
          </span>

          <span className="ml-2 text-white">
            history
          </span>

        </p>

      </div>

    </motion.div>
  );
}

export default TerminalHeader;