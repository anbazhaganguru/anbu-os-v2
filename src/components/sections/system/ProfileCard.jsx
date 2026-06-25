import { motion } from "framer-motion";

import GlassCard from "../../common/GlassCard";
import StatusIndicator from "../../common/StatusIndicator";

import {
  HiOutlineUser,
  HiOutlineMapPin,
  HiOutlineBriefcase,
  HiOutlineCpuChip,
} from "react-icons/hi2";

function ProfileCard() {
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

          <div>

            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-400">

              Developer

            </p>

            <h3 className="mt-2 text-2xl font-black text-zinc-900">

              Anbazhagan G

            </h3>

          </div>

          <StatusIndicator />

        </div>

        {/* Divider */}

        <div className="my-6 h-px bg-gradient-to-r from-cyan-400 via-zinc-200 to-transparent"></div>

        {/* Info */}

        <div className="space-y-5">

          <div className="flex items-center gap-4">

            <HiOutlineBriefcase className="text-2xl text-cyan-500" />

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">

                Role

              </p>

              <p className="font-semibold text-zinc-800">

                Full Stack Developer

              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <HiOutlineMapPin className="text-2xl text-cyan-500" />

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">

                Location

              </p>

              <p className="font-semibold text-zinc-800">

                Chennai, India

              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <HiOutlineCpuChip className="text-2xl text-cyan-500" />

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">

                Runtime

              </p>

              <p className="font-semibold text-zinc-800">

                React • Node • .NET

              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <HiOutlineUser className="text-2xl text-cyan-500" />

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">

                Version

              </p>

              <p className="font-semibold text-zinc-800">

                ANBU.OS v2.0

              </p>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-7 rounded-2xl bg-zinc-50 p-4">

          <div className="flex items-center justify-between">

            <span className="font-mono text-xs text-zinc-500">

              SYSTEM STATUS

            </span>

            <StatusIndicator
              showText
              text="ONLINE"
            />

          </div>

        </div>

      </motion.div>

    </GlassCard>
  );
}

export default ProfileCard;