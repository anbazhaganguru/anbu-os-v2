import DesktopAppCard from "./DesktopAppCard";
import MobileAppGrid from "./MobileAppGrid";

function AppCardOld({
  project,
  projects,
}) {
  return (
    <>
      {/* Desktop */}

      <div className="hidden md:block">
        <DesktopAppCard project={project} />
      </div>

      {/* Mobile */}

      <div className="md:hidden">
        {projects && (
          <MobileAppGrid
            projects={projects}
          />
        )}
      </div>
    </>
  );
}

export default AppCardOld;