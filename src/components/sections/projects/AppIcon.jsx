import { motion } from "framer-motion";

function AppIcon({ project, onClick }) {
  return (
    <motion.button
      whileHover={{
        y: -4,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.94,
      }}
      onClick={onClick}
      className="group flex flex-col items-center"
    >
      <div
        className="
          flex
          h-20
          w-20
          flex-col
          items-center
          justify-center
          rounded-[24px]
          border
          border-zinc-200
          bg-white/90
          backdrop-blur-xl
          shadow-[0_10px_30px_rgba(0,0,0,.08)]
          transition-all
          duration-300
          group-hover:border-cyan-300
          group-hover:shadow-[0_15px_35px_rgba(6,182,212,.18)]
        "
      >
        <span
          className="
            text-[11px]
            font-black
            uppercase
            tracking-[0.22em]
            text-zinc-900
          "
          style={{
            fontFamily: "Space Grotesk",
          }}
        >
          {project.iconTop}
        </span>

        <span
          className="
            mt-1
            text-[10px]
            font-bold
            uppercase
            tracking-[0.35em]
            text-cyan-500
          "
        >
          {project.iconBottom}
        </span>
      </div>

      <span
        className="
          mt-3
          max-w-[80px]
          truncate
          text-center
          text-[11px]
          font-semibold
          text-zinc-700
        "
      >
        {project.name}
      </span>
    </motion.button>
  );
}

export default AppIcon;