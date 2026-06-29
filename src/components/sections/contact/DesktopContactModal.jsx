import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineClipboard,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineXMark,
} from "react-icons/hi2";

function DesktopContactModal({
  open,
  contact,
  onClose,
}) {
  if (!contact) return null;

  const copyValue = async () => {
    await navigator.clipboard.writeText(contact.value);
  };

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md"
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
            onClick={(e) => e.stopPropagation()}
            className="
absolute
left-1/2
top-1/2
w-[92%]
max-w-md
-translate-x-1/2
-translate-y-1/2
rounded-3xl
              bg-[#0d1117]
              p-6
            "
          >

            <div className="mb-5 flex justify-between">

              <h2 className="text-xl font-black text-white">

                {contact.name}

              </h2>

              <button
                onClick={onClose}
                className="rounded-full bg-zinc-800 p-2 text-white"
              >

                <HiOutlineXMark />

              </button>

            </div>

            <div className="flex justify-center text-6xl">

              {contact.icon}

            </div>

            <p className="mt-6 break-all text-center text-zinc-300">

              {contact.value}

            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">

              <button
                onClick={copyValue}
                className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-white"
              >

                <HiOutlineClipboard />

                Copy

              </button>

              <a
                href={contact.action}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 py-3 font-semibold text-white"
              >

                Open

                <HiOutlineArrowTopRightOnSquare />

              </a>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default DesktopContactModal;