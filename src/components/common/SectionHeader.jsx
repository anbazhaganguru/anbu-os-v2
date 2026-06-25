import { motion } from "framer-motion";

function SectionHeader({
  command,
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      {/* Command */}

      <div className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">

        <div className="status-led"></div>

        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-600">
          {command}
        </span>

      </div>

      {/* Title */}

      <h2
        className="mt-6 text-4xl font-black tracking-[-0.05em] text-zinc-900 sm:text-5xl lg:text-6xl"
        style={{
          fontFamily: "Space Grotesk",
        }}
      >
        {title}
      </h2>

      {/* Subtitle */}

      <p className="mt-5 max-w-2xl font-mono text-sm leading-7 text-zinc-500">

        {subtitle}

      </p>

      {/* Line */}

      <div className="mt-8 h-px w-full bg-gradient-to-r from-cyan-500 via-zinc-200 to-transparent"></div>

    </motion.div>
  );
}

export default SectionHeader;