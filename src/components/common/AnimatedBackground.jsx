import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Base */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-[#050816] dark:via-[#08101f] dark:to-[#02040a]" />

      {/* Blob 1 */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-32
          -top-20
          h-80
          w-80
          rounded-full
          bg-cyan-400/20
          blur-[120px]
        "
      />

      {/* Blob 2 */}

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="
          absolute
          right-0
          top-20
          h-72
          w-72
          rounded-full
          bg-violet-500/15
          blur-[120px]
        "
      />

      {/* Blob 3 */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-0
          left-1/2
          h-96
          w-96
          -translate-x-1/2
          rounded-full
          bg-sky-400/15
          blur-[150px]
        "
      />

    </div>
  );
}

export default AnimatedBackground;