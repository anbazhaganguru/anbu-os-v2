import { motion } from "framer-motion";

function GlassCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
            }
          : {}
      }
      transition={{
        duration: 0.25,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[26px]
        border
        border-zinc-200/80
        bg-white/80
        backdrop-blur-xl
        shadow-[0_15px_45px_rgba(0,0,0,.08)]
        transition-all
        duration-300
        ${className}
      `}
    >
      {/* Glow */}

      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 hover:opacity-100">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-violet-500/5"></div>

      </div>

      {/* Content */}

      <div className="relative z-10">

        {children}

      </div>

    </motion.div>
  );
}

export default GlassCard;