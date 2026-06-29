import { motion } from "framer-motion";
import {
  HiOutlineCommandLine,
  HiOutlineChevronRight,
} from "react-icons/hi2";

function TerminalLog({
  logs,
  onOpen,
}) {
  return (
    <div className="divide-y divide-zinc-800">

      {logs.map((log, index) => (

        <motion.button
          key={log.id}
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.05,
            duration: 0.35,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onClick={() => onOpen(log)}
          className="
            group
            flex
            w-full
            items-center
            justify-between
            px-5
            py-4
            text-left
            transition
            hover:bg-white/5
          "
        >

          <div className="flex items-center gap-3">

            <HiOutlineCommandLine className="text-lg text-cyan-400" />

            <div>

              <p className="font-mono text-sm text-white">

                {log.command}

              </p>

              <p className="mt-1 text-xs text-zinc-500">

                {log.year}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-2">

            <span
              className="
                rounded-full
                bg-emerald-500/20
                px-2
                py-1
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-emerald-400
              "
            >

              DONE

            </span>

            <HiOutlineChevronRight
              className="
                text-zinc-500
                transition
                group-hover:translate-x-1
              "
            />

          </div>

        </motion.button>

      ))}

    </div>
  );
}

export default TerminalLog;