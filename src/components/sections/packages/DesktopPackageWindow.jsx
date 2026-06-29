import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineXMark,
} from "react-icons/hi2";

function DesktopPackageWindow({
  open,
  onClose,
  packageData,
  icon,
}) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >

          <motion.div
            initial={{
              scale: .88,
              opacity: 0,
              y: 60,
            }}

            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}

            exit={{
              scale: .92,
              opacity: 0,
            }}

            transition={{
              duration: .3,
            }}

            onClick={(e) => e.stopPropagation()}

            className="
              absolute
              left-1/2
              top-1/2
              w-[94%]
              max-w-[760px]
              -translate-x-1/2
              -translate-y-1/2
              overflow-hidden
              rounded-3xl
              border
              border-zinc-700
              bg-[#0d1117]
              shadow-[0_30px_80px_rgba(0,0,0,.45)]
            "
          >

            {/* Window Header */}

            <div className="flex items-center justify-between border-b border-zinc-800 bg-[#161b22] px-5 py-4">

              <div className="flex items-center gap-3">

                <div className="flex gap-2">

                  <div className="h-3 w-3 rounded-full bg-red-500"></div>

                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>

                  <div className="h-3 w-3 rounded-full bg-green-500"></div>

                </div>

                <span className="font-mono text-sm text-zinc-400">

                  {packageData?.name}.app

                </span>

              </div>

              <button
                onClick={onClose}
                className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
              >

                <HiOutlineXMark className="text-xl" />

              </button>

            </div>

            {/* Body */}

            <div className="p-8">

              <div className="flex flex-col items-center text-center">

                <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-zinc-900 text-6xl shadow-[0_0_35px_rgba(6,182,212,.35)]">

                  {icon}

                </div>

                <h2 className="text-4xl font-black text-white">

                  {packageData?.name}

                </h2>

                <p className="mt-2 text-zinc-400">

                  Version {packageData?.version}

                </p>

                <span className="mt-4 rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-semibold text-emerald-400">

                  {packageData?.status}

                </span>

              </div>

              <div className="mt-8 rounded-2xl border border-zinc-800 bg-[#161b22] p-6">

                <h3 className="mb-3 font-mono uppercase tracking-[0.3em] text-cyan-400">

                  Description

                </h3>

                <p className="leading-8 text-zinc-300">

                  {packageData?.description}

                </p>

              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">

                <div className="rounded-2xl border border-zinc-800 bg-[#161b22] p-5">

                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">

                    Maintainer

                  </p>

                  <h4 className="mt-2 text-lg font-bold text-white">

                    {packageData?.maintainer}

                  </h4>

                </div>

                <div className="rounded-2xl border border-zinc-800 bg-[#161b22] p-5">

                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">

                    License

                  </p>

                  <h4 className="mt-2 text-lg font-bold text-white">

                    {packageData?.license}

                  </h4>

                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href={packageData?.docs}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
                >
                  Documentation
                </a>

                <a
                  href={packageData?.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400"
                >
                  GitHub

                  <HiOutlineArrowTopRightOnSquare />
                </a>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default DesktopPackageWindow;