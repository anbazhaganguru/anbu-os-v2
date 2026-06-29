import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineXMark,
} from "react-icons/hi2";

function MobilePackageWindow({
  open,
  onClose,
  packageData,
  icon,
}) {
  return (
    <AnimatePresence>

      {open && packageData && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md md:hidden"
        >

          <motion.div
            initial={{
              y: 80,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 80,
              opacity: 0,
            }}
            transition={{
              duration: .25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              absolute
              bottom-0
              left-0
              right-0
              rounded-t-[34px]
              bg-[#0d1117]
              border-t
              border-zinc-800
              p-6
            "
          >

            <div className="mb-5 flex justify-end">

              <button
                onClick={onClose}
                className="rounded-full bg-zinc-800 p-2 text-white"
              >

                <HiOutlineXMark />

              </button>

            </div>

            <div className="flex flex-col items-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-zinc-900 text-5xl shadow-[0_0_30px_rgba(6,182,212,.25)]">

                {icon}

              </div>

              <h2 className="mt-5 text-3xl font-black text-white">

                {packageData.name}

              </h2>

              <p className="mt-1 text-zinc-400">

                v{packageData.version}

              </p>

              <span className="mt-3 rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-semibold text-emerald-400">

                {packageData.status}

              </span>

            </div>

            <div className="mt-6 rounded-2xl bg-[#161b22] p-5">

              <p className="text-sm leading-7 text-zinc-300">

                {packageData.description}

              </p>

            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">

              <a
                href={packageData.docs}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-cyan-500 py-3 text-center font-semibold text-white"
              >
                Docs
              </a>

              <a
                href={packageData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 py-3 font-semibold text-white"
              >
                GitHub

                <HiOutlineArrowTopRightOnSquare />
              </a>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default MobilePackageWindow;