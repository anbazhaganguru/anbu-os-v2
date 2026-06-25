import HeroContent from "./HeroContent";
import HeroCode from "./HeroCode";
import StatusCard from "./StatusCard";






function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 lg:pt-28">

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-[180px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 -z-20 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#ececec 1px, transparent 1px),linear-gradient(to right,#ececec 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="mx-auto w-full max-w-[1500px] px-5 lg:px-10">

        <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr]">

          {/* LEFT */}

          <HeroContent />

          {/* RIGHT */}

          <div className="flex items-center justify-end">

            <div className="flex w-full max-w-[540px] flex-col gap-5">

              <HeroCode />

              <StatusCard />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;