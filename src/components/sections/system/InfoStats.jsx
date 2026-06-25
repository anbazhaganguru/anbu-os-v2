import { motion } from "framer-motion";
import GlassCard from "../../common/GlassCard";

const stats = [
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "100%",
    label: "Dedication",
  },
  {
    value: "24/7",
    label: "Learning",
  },
];

function InfoStats() {
  return (
    <GlassCard className="p-6">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >

        {/* Header */}

        <div className="flex items-center justify-between">

          <h3 className="font-mono text-sm uppercase tracking-[0.35em] text-zinc-500">

            SYSTEM.METRICS

          </h3>

          <span className="text-xs font-mono text-cyan-500">

            LIVE

          </span>

        </div>

        <div className="my-5 h-px bg-gradient-to-r from-cyan-400 via-zinc-200 to-transparent"></div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-4">

          {stats.map((item) => (

            <motion.div
              key={item.label}
              whileHover={{
                scale: 1.04,
              }}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all duration-300 hover:border-cyan-300"
            >

              <h4 className="text-3xl font-black text-zinc-900">

                {item.value}

              </h4>

              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">

                {item.label}

              </p>

            </motion.div>

          ))}

        </div>

        {/* Progress */}

        <div className="mt-8">

          <div className="mb-2 flex justify-between">

            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">

              System Progress

            </span>

            <span className="font-semibold text-cyan-500">

              92%

            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-zinc-200">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "92%" }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
            />

          </div>

        </div>

      </motion.div>

    </GlassCard>
  );
}

export default InfoStats;