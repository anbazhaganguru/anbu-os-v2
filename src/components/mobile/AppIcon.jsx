import { motion } from "framer-motion";

function AppIcon({
  icon: Icon,
  title,
  color = "text-cyan-500",
  onClick,
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="flex flex-col items-center"
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-zinc-200
          bg-white/90
          backdrop-blur-xl
          shadow-lg
          transition-all
          duration-300
          hover:shadow-cyan-300/40
        "
      >
        <Icon className={`text-3xl ${color}`} />
      </div>

      <span className="mt-2 text-[11px] font-medium text-zinc-700">
        {title}
      </span>
    </motion.button>
  );
}

export default AppIcon;