import AppGrid from "./AppGrid";
import MobileDock from "./MobileDock";

import AnimatedBackground from "../common/AnimatedBackground";

import StatusBar from "./StatusBar";

function MobileHome() {
  return (
       <section className="relative min-h-screen overflow-hidden md:hidden">
        <AnimatedBackground />

      {/* Status Bar */}

        <StatusBar />

      {/* Logo */}

      <div className="mt-10 text-center">

        <h1 className="text-4xl font-black tracking-widest text-zinc-900">

          ANBU.OS

        </h1>

        <p className="mt-2 text-sm text-zinc-500">

          Mobile Operating System

        </p>

      </div>

      {/* Apps */}

      <div className="mt-16 px-8">

        <AppGrid />

      </div>

      {/* Dock */}

      <MobileDock />

    </section>
  );
}

export default MobileHome;