import { motion } from "framer-motion";
import GlassCard from "../../common/GlassCard";

function AboutCard() {
  return (
    <GlassCard className="p-6">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        {/* Header */}

        <div className="flex items-center justify-between">

          <h3 className="font-mono text-sm uppercase tracking-[0.35em] text-zinc-500">
            ABOUT.PROCESS
          </h3>

          <span className="rounded-full bg-cyan-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-700">
            Running
          </span>

        </div>

        {/* Divider */}

        <div className="my-5 h-px bg-gradient-to-r from-cyan-400 via-zinc-200 to-transparent"></div>

        {/* Description */}

        <div className="space-y-5 text-[15px] leading-8 text-zinc-600">

          <p>
            I'm a Full Stack Developer passionate about building
            modern, responsive and user-friendly web applications
            with clean architecture and reusable components.
          </p>

          <p>
            My primary focus is creating premium UI experiences
            using React, Tailwind CSS, Node.js, Express,
            MongoDB and .NET while continuously learning
            industry best practices.
          </p>

          <p>
            Every project I build is designed with
            performance, responsiveness and maintainability
            in mind.
          </p>

        </div>

        {/* Footer */}

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">

            CURRENT OBJECTIVE

          </p>

          <p className="mt-2 text-sm font-semibold text-zinc-800">

            Building high-quality digital experiences &
            actively seeking Full Stack Developer opportunities.

          </p>

        </div>

      </motion.div>

    </GlassCard>
  );
}

export default AboutCard;