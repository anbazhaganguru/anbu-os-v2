import { motion } from "framer-motion";
import {
  HiOutlineHome,
  HiOutlineCodeBracket,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

function MobileDock() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
      }}
      className="
        fixed
        bottom-5
        left-1/2
        z-50
        flex
        -translate-x-1/2
        items-center
        gap-6
        rounded-3xl
        border
        border-white/30
        bg-white/75
        px-6
        py-3
        shadow-[0_20px_40px_rgba(0,0,0,.15)]
        backdrop-blur-2xl
        md:hidden
      "
    >
      <button className="transition hover:scale-110">
        <HiOutlineHome className="text-2xl text-zinc-800" />
      </button>

      <button className="transition hover:scale-110">
        <HiOutlineCodeBracket className="text-2xl text-cyan-500" />
      </button>

      <button className="transition hover:scale-110">
        <HiOutlineCog6Tooth className="text-2xl text-zinc-800" />
      </button>
    </motion.div>
  );
}

export default MobileDock;