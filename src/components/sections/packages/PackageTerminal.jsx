import { motion } from "framer-motion";
import { packagesData } from "../../../utils/packagesData";

function PackageTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-3xl border border-zinc-800 bg-[#0d1117] shadow-[0_20px_50px_rgba(0,0,0,.35)]"
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-zinc-800 bg-[#161b22] px-4 py-3">

        <div className="flex gap-2">

          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>

        </div>

        <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
          Package Manager
        </span>

      </div>

      {/* Terminal */}

      <div
        className="
          max-h-[330px]
          overflow-y-auto
          p-5
          font-mono
          text-[13px]
          leading-6

          scrollbar-thin
          scrollbar-thumb-cyan-500
          scrollbar-track-zinc-800
        "
      >

        <p className="text-cyan-400">

          PS C:\ANBU.OS&gt;

        </p>

        <br />

        {packagesData.map((pkg) => (

          <div
            key={pkg.id}
            className="mb-4"
          >

            <p className="text-zinc-100">

              npm install{" "}

              <span className="text-cyan-400">

                {pkg.name.toLowerCase()}

              </span>

            </p>

            <p className="text-emerald-400">

              ✔ {pkg.status}

            </p>

          </div>

        ))}

        <p className="mt-4 text-cyan-400">

          PS C:\ANBU.OS&gt;

          <span className="animate-pulse text-white">

            █

          </span>

        </p>

      </div>

    </motion.div>
  );
}

export default PackageTerminal;