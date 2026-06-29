import { motion } from "framer-motion";
import {
  HiMiniCpuChip,
  HiOutlinePower,
} from "react-icons/hi2";

function Footer() {
  return (
    <footer className="relative py-24">

      <div className="mx-auto max-w-6xl px-5">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .6,
          }}
          className="
            overflow-hidden
            rounded-[34px]
            border
            border-zinc-800
            bg-[#0d1117]
            shadow-[0_25px_80px_rgba(0,0,0,.35)]
          "
        >

          {/* Header */}

          <div className="flex items-center justify-between border-b border-zinc-800 bg-[#161b22] px-6 py-4">

            <div className="flex items-center gap-2">

              <span className="h-3 w-3 rounded-full bg-red-500"></span>

              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>

              <span className="h-3 w-3 rounded-full bg-green-500"></span>

            </div>

            <div className="flex items-center gap-3">

              <HiMiniCpuChip className="text-cyan-400" />

              <span className="font-mono text-sm text-zinc-400">

                system.shutdown

              </span>

            </div>

          </div>

          {/* Terminal */}

          <div className="space-y-5 p-8 font-mono">

            <p className="text-cyan-400">

              PS C:\Users\Visitor&gt;

              <span className="ml-2 text-white">

                exit

              </span>

            </p>

            <p className="text-zinc-400">

              Saving session...

            </p>

            <p className="text-zinc-400">

              Closing ANBU.OS services...

            </p>

            <p className="text-emerald-400">

              ✓ Session Closed Successfully

            </p>

            <div className="my-6 h-px bg-gradient-to-r from-cyan-500 via-zinc-700 to-transparent"></div>

            <div className="grid gap-6 md:grid-cols-4">

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">

                  Version

                </p>

                <h3 className="mt-2 text-white">

                  2.0.0

                </h3>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">

                  Status

                </p>

                <h3 className="mt-2 text-emerald-400">

                  ONLINE

                </h3>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">

                  Framework

                </p>

                <h3 className="mt-2 text-white">

                  React

                </h3>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">

                  Build

                </p>

                <h3 className="mt-2 text-white">

                  STABLE

                </h3>

              </div>

            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-zinc-800 pt-8 md:flex-row">

              <div>

                <h2
                  className="text-3xl font-black tracking-[0.25em] text-white"
                  style={{
                    fontFamily: "Space Grotesk",
                  }}
                >
                  ANBU.OS
                </h2>

                <p className="mt-2 text-sm text-zinc-500">

                  Designed & Developed by Anbazhagan G

                </p>

              </div>

              <motion.div
                animate={{
                  opacity: [.4,1,.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-emerald-500/30
                  bg-emerald-500/10
                  px-5
                  py-3
                "
              >

                <HiOutlinePower className="text-emerald-400" />

                <span className="font-semibold text-emerald-400">

                  SYSTEM ONLINE

                </span>

              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>

    </footer>
  );
}

export default Footer;