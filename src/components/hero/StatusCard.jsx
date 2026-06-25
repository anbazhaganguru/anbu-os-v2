import StatusIndicator from "../common/StatusIndicator";




import {
  HiOutlineMapPin,
  HiOutlineCpuChip,
  HiOutlineCommandLine,
} from "react-icons/hi2";

import {
  FaReact,
} from "react-icons/fa";

import {
  SiDotnet,
  SiNodedotjs,
} from "react-icons/si";

import { motion } from "framer-motion";

function StatusCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .2 }}
      whileHover={{ y: -4 }}
      className="overflow-hidden rounded-[24px] border border-zinc-200 bg-white/90 shadow-[0_20px_50px_rgba(0,0,0,.08)] backdrop-blur-xl"
    >

      {/* Header */}

      <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-5 py-4">

        <div className="flex items-center gap-3">

          <StatusIndicator/>

          <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-700">

            SYSTEM.STATUS

          </span>

        </div>

        <HiOutlineCommandLine className="text-lg text-cyan-500" />

      </div>

      {/* Body */}

      <div className="space-y-5 p-5">

        <div className="flex items-center justify-between">

          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400">
            Status
          </span>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
            ONLINE
          </span>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div>

            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              ROLE
            </p>

            <p className="mt-1 text-sm font-semibold">
              Full Stack
            </p>

          </div>

          <div>

            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              VERSION
            </p>

            <p className="mt-1 text-sm font-semibold">
              ANBU.OS v2
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <HiOutlineMapPin className="text-lg text-cyan-500" />

          <span className="text-sm text-zinc-700">
            Chennai, India
          </span>

        </div>

        <div className="flex items-center gap-3">

          <HiOutlineCpuChip className="text-lg text-cyan-500" />

          <span className="text-sm text-zinc-700">
            Core Technologies
          </span>

        </div>

        <div className="flex items-center gap-5 rounded-2xl bg-zinc-50 p-4">

          <FaReact className="text-2xl text-cyan-500 transition hover:scale-110" />

          <SiNodedotjs className="text-2xl text-green-600 transition hover:scale-110" />

          <SiDotnet className="text-2xl text-violet-600 transition hover:scale-110" />

        </div>

      </div>

      {/* Footer */}

      <div className="flex items-center justify-between border-t border-zinc-200 bg-zinc-50 px-5 py-3">

        <span className="font-mono text-[11px] tracking-widest text-zinc-500">

          READY

        </span>

        <span className="font-mono text-[11px] text-cyan-500">

          developer.exe

        </span>

      </div>

    </motion.div>
  );
}

export default StatusCard;