import { motion } from "framer-motion";
import GlassCard from "../../common/GlassCard";
import { techIcons } from "../../../utils/techIcons";

function DesktopPackageGrid({ packages, onOpen }) {
  return (
    <div className="hidden gap-4 md:grid md:grid-cols-2">

      {packages.map((pkg, index) => {

        const tech = techIcons[pkg.key];
        const Icon = tech?.icon;

        return (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: index * 0.05,
            }}
          >
            <GlassCard
              onClick={() => onOpen(pkg)}
              className="
                group
                cursor-pointer
                p-4
                transition-all
                duration-300
                hover:border-cyan-300
                hover:shadow-[0_15px_35px_rgba(6,182,212,.12)]
              "
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-zinc-200
                      bg-zinc-50
                      transition
                      duration-300
                      group-hover:scale-110
                    "
                  >

                    {Icon && (
                      <Icon
                        className={`text-2xl ${tech.color}`}
                      />
                    )}

                  </div>

                  <div>

                    <h3 className="text-[15px] font-bold text-zinc-900">
                      {pkg.name}
                    </h3>

                    <p className="text-xs text-zinc-500">
                      v{pkg.version}
                    </p>

                  </div>

                </div>

                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                  {pkg.status}
                </span>

              </div>

              <div className="mt-4">

                <div className="mb-2 flex items-center justify-between">

                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                    Installed
                  </span>

                  <span className="text-xs font-semibold text-cyan-500">
                    100%
                  </span>

                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-zinc-200">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                  />

                </div>

              </div>

            </GlassCard>

          </motion.div>
        );
      })}

    </div>
  );
}

export default DesktopPackageGrid;