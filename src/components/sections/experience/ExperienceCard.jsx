import { motion } from "framer-motion";

function ExperienceCard({ item }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className="relative pl-14"
    >
      {/* Timeline Dot */}

      <div
        className="
          absolute
          left-[11px]
          top-6
          h-5
          w-5
          rounded-full
          border-4
          border-white
          bg-cyan-500
          shadow-[0_0_18px_rgba(6,182,212,.6)]
        "
      />

      {/* Card */}

      <div
        className="
          rounded-3xl
          border
          border-zinc-200
          bg-white/80
          p-6
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-cyan-300
          hover:shadow-[0_15px_40px_rgba(6,182,212,.12)]
        "
      >
        {/* Year */}

        <span
          className="
            inline-flex
            rounded-full
            bg-cyan-100
            px-3
            py-1
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-cyan-700
          "
        >
          {item.year}
        </span>

        {/* Title */}

        <h3 className="mt-4 text-xl font-bold text-zinc-900">
          {item.title}
        </h3>

        {/* Description */}

        <p className="mt-3 leading-7 text-zinc-600">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;