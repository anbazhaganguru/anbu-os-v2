import { motion } from "framer-motion";

function Button({
  children,
  icon,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) {
  const variants = {
    primary:
      "bg-black text-white border-black hover:shadow-[0_0_30px_rgba(6,182,212,.35)]",

    secondary:
      "bg-white text-zinc-900 border-zinc-300 hover:border-cyan-400 hover:shadow-lg",

    ghost:
      "bg-transparent text-zinc-700 border-transparent hover:bg-zinc-100",

    terminal:
      "bg-[#0d1117] text-emerald-400 border-zinc-800 hover:border-emerald-500 hover:shadow-[0_0_25px_rgba(34,197,94,.25)] font-mono",
  };

  return (
    <motion.button
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      type={type}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-2xl
        border
        px-6
        py-3
        text-sm
        font-semibold
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}

      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </motion.button>
  );
}

export default Button;