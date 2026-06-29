import { motion } from "framer-motion";

import GlassCard from "../../common/GlassCard";
import Button from "../../common/Button";
import StatusIndicator from "../../common/StatusIndicator";

import { techIcons } from "../../../utils/techIcons";

import {
  HiOutlineRocketLaunch,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";

function DesktopAppCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard className="group p-6 transition-all duration-500 hover:border-cyan-300">

        {/* Header */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex flex-wrap items-center gap-3">

              <StatusIndicator />

              <h3
                className="text-2xl font-black text-zinc-900"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {project.name}.exe
              </h3>

              {project.featured && (
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-700">
                  Featured
                </span>
              )}

            </div>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">

              {project.description}

            </p>

          </div>

          <Button
            variant="primary"
            icon={<HiOutlineRocketLaunch />}
          >
            Launch
          </Button>

        </div>

        {/* Divider */}

        <div className="my-6 h-px bg-gradient-to-r from-cyan-400 via-zinc-200 to-transparent"></div>

        {/* Info */}

        <div className="grid gap-6 lg:grid-cols-[180px_1fr_140px]">

          {/* Version */}

          <div>

            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400">

              Version

            </p>

            <h4 className="mt-2 text-xl font-bold">

              {project.version}

            </h4>

          </div>

          {/* Tech */}

          <div>

            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400">

              Technologies

            </p>

            <div className="flex flex-wrap gap-3">

              {project.tech.map((item) => {

                const tech = techIcons[item];

                if (!tech) return null;

                const Icon = tech.icon;

                return (

                  <motion.div
                    key={item}
                    whileHover={{
                      scale: 1.15,
                      rotate: 6,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 transition-all duration-300 hover:border-cyan-300"
                  >

                    <Icon
                      className={`text-2xl ${tech.color}`}
                    />

                  </motion.div>

                );

              })}

            </div>

          </div>

          {/* Status */}

          <div>

            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400">

              Status

            </p>

            <div className="mt-3 flex items-center gap-2">

              <StatusIndicator />

              <span className="font-semibold text-green-600">

                {project.status}

              </span>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 flex flex-wrap gap-3">

          <Button
            variant="secondary"
            icon={<HiOutlineArrowTopRightOnSquare />}
          >
            Live Demo
          </Button>

          <Button
            variant="terminal"
          >
            GitHub
          </Button>

        </div>

      </GlassCard>

    </motion.div>
  );
}

export default DesktopAppCard;