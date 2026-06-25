import { FiArrowRight, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import TechStack from "./TechStack";

import StatusIndicator from "../common/StatusIndicator";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-[620px]"
    >
      {/* Portfolio Tag */}

      <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400 sm:text-[11px]">
        // Developer Portfolio
      </p>

      {/* Status */}

      <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 shadow-md backdrop-blur-xl">

        <StatusIndicator />

        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-700">
          Available For Work
        </span>

      </div>

      {/* Heading */}

      <h1
        className="mt-6 text-[42px] font-black leading-[0.88] tracking-[-0.05em] text-zinc-900 sm:text-[54px] lg:text-[68px] xl:text-[76px]"
        style={{ fontFamily: "Space Grotesk" }}
      >
        Building{" "}

        <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
          Digital
        </span>

        <br />

        Experiences

        <br />

        That Feel Alive.
      </h1>

      {/* Description */}

      <div className="mt-6 max-w-[560px] rounded-3xl border border-zinc-200 bg-white/80 p-5 shadow-lg backdrop-blur-xl">

        <p className="font-mono text-[13px] leading-7 text-zinc-600 sm:text-[14px] lg:text-[15px]">

          Full Stack Developer focused on React,
          UI Engineering and building products
          users genuinely enjoy.

          <br />
          <br />

          Creating premium digital experiences using
          React, Tailwind CSS, Node.js,
          Express.js, MongoDB,
          .NET and SQL.

        </p>

      </div>

      {/* Buttons */}

      <div className="mt-7 flex flex-wrap gap-4">

        <button className="group flex h-12 items-center gap-3 rounded-2xl bg-black px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(6,182,212,.35)]">

          View Projects

          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

        </button>

        <button className="flex h-12 items-center gap-3 rounded-2xl border border-zinc-300 bg-white px-7 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

          Resume

          <FiDownload />

        </button>

      </div>

      {/* Tech Stack */}

      <div className="mt-7">

        <TechStack />

      </div>

    </motion.div>
  );
}

export default HeroContent;