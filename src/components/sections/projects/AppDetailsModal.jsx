import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineXMark,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";

import AppIcon from "./AppIcon";

function AppDetailsModal({
  project,
  open,
  onClose,
}) {
  return (
    <AnimatePresence>

      {open && project && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xl"
        >

          <motion.div
            initial={{
              y: 80,
              opacity: 0,
              scale: .95,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              y: 80,
              opacity: 0,
            }}
            transition={{
              duration: .3,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              absolute
              bottom-0
              left-0
              right-0
              rounded-t-[34px]
              bg-white
              p-6
              shadow-2xl
            "
          >

            {/* Close */}

            <div className="mb-5 flex justify-end">

              <button
                onClick={onClose}
                className="rounded-full bg-zinc-100 p-2"
              >

                <HiOutlineXMark className="text-xl" />

              </button>

            </div>

            {/* Icon */}

            <div className="flex justify-center">

              <AppIcon
                project={project}
              />

            </div>

            {/* Title */}

            <div className="mt-5 text-center">

              <h2 className="text-2xl font-black">

                {project.name}

              </h2>

              <p className="mt-2 text-sm text-zinc-500">

                Version {project.version}

              </p>

            </div>

            {/* Status */}

            <div className="mt-6 flex justify-center">

              <span
                className="
                  rounded-full
                  bg-emerald-100
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-emerald-700
                "
              >

                {project.status}

              </span>

            </div>

            {/* Description */}

            <div className="mt-6 rounded-2xl bg-zinc-100 p-5">

              <p className="leading-7 text-zinc-600">

                {project.description}

              </p>

            </div>

            {/* Buttons */}

            <div className="mt-8 grid grid-cols-2 gap-4">

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-2xl
                  bg-cyan-500
                  py-4
                  text-center
                  font-bold
                  text-white
                "
              >

                Launch

              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-zinc-200
                  py-4
                  font-bold
                "
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

export default AppDetailsModal;