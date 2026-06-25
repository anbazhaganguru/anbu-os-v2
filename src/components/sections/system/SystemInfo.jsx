import SectionHeader from "../../common/SectionHeader";
import ProfileCard from "./ProfileCard";
import AboutCard from "./AboutCard";
import InfoStats from "./InfoStats";
import SystemCard from "./SystemCard";

function SystemInfo() {
  return (
    <section
      id="system"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">

        <SectionHeader
          command="system.info"
          title="Operating System Information"
          subtitle="Overview of developer profile, current status, education and technical capabilities."
        />

        <div className="grid gap-6 lg:grid-cols-[420px_1fr]">

          {/* LEFT */}

          <div className="space-y-6">

            <ProfileCard />

            <InfoStats />

          </div>

          {/* RIGHT */}

          <div className="space-y-6">

            <SystemCard />

            <AboutCard />

          </div>

        </div>

      </div>
    </section>
  );
}

export default SystemInfo;