import SectionHeader from "../../common/SectionHeader";

import DesktopAppCard from "./DesktopAppCard";
import MobileAppGrid from "./MobileAppGrid";

import { projects } from "../../../utils/data";

function InstalledApps() {
  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5">

        <SectionHeader
          command="installed.apps"
          title="Installed Applications"
          subtitle="Projects currently installed in the ANBU.OS environment."
        />

        {/* Desktop */}

        <div className="mt-10 hidden space-y-6 md:block">

          {projects.map((project) => (

            <DesktopAppCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

        {/* Mobile */}

        <div className="mt-8 md:hidden">

          <MobileAppGrid
            projects={projects}
          />

        </div>

      </div>
    </section>
  );
}

export default InstalledApps;