import { motion } from "framer-motion";

function HeroCode() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <div className="overflow-hidden rounded-[24px] border border-zinc-800 bg-[#0d1117] shadow-[0_25px_80px_rgba(0,0,0,.35)]">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-zinc-800 bg-[#161b22] px-5 py-3">

          <div className="flex items-center gap-2">

            <div className="h-3 w-3 rounded-full bg-red-500"></div>

            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>

            <div className="h-3 w-3 rounded-full bg-green-500"></div>

          </div>

          <span className="font-mono text-[11px] tracking-widest text-zinc-500">
            Windows PowerShell
          </span>

        </div>

        {/* Terminal */}

        <div className="terminal-scroll h-[300px] sm:h-[330px] lg:h-[390px] overflow-y-auto px-5 py-5 font-mono text-[11px] leading-6 text-zinc-300">

          <p className="text-zinc-500">
            Microsoft Windows [Version 11.0.26100]
          </p>

          <p className="mb-5 text-zinc-500">
            (c) Microsoft Corporation. All rights reserved.
          </p>

          <p>
            <span className="text-cyan-400">
              PS C:\Users\Anbu&gt;
            </span>
          </p>

          <p className="mt-2 text-green-400">
            &gt; whoami
          </p>

          <p className="mb-4">
            Anbazhagan G
          </p>

          <p className="text-green-400">
            &gt; role
          </p>

          <p className="mb-4">
            Full Stack Developer
          </p>

          <p className="text-green-400">
            &gt; stack
          </p>

          <div className="mb-4 ml-4 space-y-1">

            <p>⚛ React</p>
            <p>🟢 Node.js</p>
            <p>🚀 Express.js</p>
            <p>🍃 MongoDB</p>
            <p>🎨 Tailwind CSS</p>
            <p>🟣 .NET</p>
            <p>💙 C#</p>
            <p>🗄 SQL</p>
            <p>⚡ Git</p>
            <p>🐙 GitHub</p>

          </div>

          <p className="text-green-400">
            &gt; location
          </p>

          <p className="mb-4">
            Chennai, India
          </p>

          <p className="text-green-400">
            &gt; status
          </p>

          <p className="mb-6 text-emerald-400">
            Available For Work
          </p>

          <p className="text-cyan-400">

            PS C:\Users\Anbu&gt;

            <span className="ml-1 animate-pulse text-white">
              █
            </span>

          </p>

        </div>

      </div>
    </motion.div>
  );
}

export default HeroCode;