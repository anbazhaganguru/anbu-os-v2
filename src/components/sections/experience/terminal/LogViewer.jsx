import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineXMark } from "react-icons/hi2";

function LogViewer({
  open,
  log,
  onClose,
}) {
  return (
    <AnimatePresence>

      {open && log && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md"
        >

          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
              y: 40,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.95,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              absolute
              left-1/2
              top-1/2
              w-[92%]
              max-w-md
              -translate-x-1/2
              -translate-y-1/2
              overflow-hidden
              rounded-3xl
              border
              border-zinc-800
              bg-[#0d1117]
              shadow-[0_30px_80px_rgba(0,0,0,.55)]
            "
          >

            {/* Header */}

            <div className="flex items-center justify-between border-b border-zinc-800 bg-[#161b22] px-5 py-4">

              <span className="font-mono text-sm text-cyan-400">
                PS C:\ANBU.OS&gt;
              </span>

              <button
                onClick={onClose}
                className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
              >
                <HiOutlineXMark className="text-xl" />
              </button>

            </div>

            {/* Terminal */}

            <div className="space-y-5 p-6 font-mono">

              <p className="text-cyan-400">
                &gt; {log.command}
              </p>

              <div className="space-y-3">

                {log.logs.map((item, index) => (

                  <div
                    key={index}
                    className="flex gap-2"
                  >

                    <span className="text-emerald-400">
                      ✔
                    </span>

                    <span className="text-zinc-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <div className="border-t border-zinc-800 pt-4">

                <span className="text-zinc-500">

                  Process finished successfully.

                </span>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default LogViewer;