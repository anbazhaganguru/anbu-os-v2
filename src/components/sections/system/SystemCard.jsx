import { motion } from "framer-motion";
import GlassCard from "../../common/GlassCard";
import StatusIndicator from "../../common/StatusIndicator";

import {
  HiOutlineCpuChip,
  HiOutlineCircleStack,
  HiOutlineServerStack,
  HiOutlineCommandLine,
} from "react-icons/hi2";

const diagnostics = [
  {
    icon: <HiOutlineCpuChip />,
    title: "Frontend",
    value: "React + Tailwind",
  },
  {
    icon: <HiOutlineServerStack />,
    title: "Backend",
    value: "Node.js + Express",
  },
  {
    icon: <HiOutlineCircleStack />,
    title: "Database",
    value: "MongoDB + SQL",
  },
  {
    icon: <HiOutlineCommandLine />,
    title: "Framework",
    value: ".NET / C#",
  },
];

function SystemCard() {
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

            SYSTEM.DIAGNOSTICS

          </h3>

          <StatusIndicator />
        </div>

        <div className="my-5 h-px bg-gradient-to-r from-cyan-400 via-zinc-200 to-transparent"></div>

        {/* Diagnostics */}

        <div className="space-y-4">

          {diagnostics.map((item) => (

            <motion.div
              key={item.title}
              whileHover={{
                x: 4,
              }}
              className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all duration-300 hover:border-cyan-300"
            >

              <div className="flex items-center gap-4">

                <div className="text-2xl text-cyan-500">

                  {item.icon}

                </div>

                <div>

                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">

                    {item.title}

                  </p>

                  <p className="mt-1 font-semibold text-zinc-800">

                    {item.value}

                  </p>

                </div>

              </div>

              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(34,197,94,.7)]"></div>

            </motion.div>

          ))}

        </div>

        {/* Footer */}

        <div className="mt-7 rounded-2xl bg-[#0d1117] p-5 font-mono text-[12px] text-emerald-400">

          <p>PS C:\ANBU.OS&gt; diagnostics</p>

          <p className="mt-2 text-zinc-400">

            Checking runtime...

          </p>

          <p className="mt-2">

            ✔ React ............... OK
          </p>

          <p>

            ✔ Node.js ............. OK
          </p>

          <p>

            ✔ MongoDB ............. OK
          </p>

          <p>

            ✔ .NET Runtime ........ OK
          </p>

          <p className="mt-3 text-cyan-400">

            System Ready █

          </p>

        </div>

      </motion.div>

    </GlassCard>
  );
}

export default SystemCard;