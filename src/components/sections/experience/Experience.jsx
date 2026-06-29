import SectionHeader from "../../common/SectionHeader";
import ExperienceTimeline from "./ExperienceTimeline";

function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5">

        <SectionHeader
          command="experience.log"
          title="Developer Journey"
          subtitle="A timeline of my learning, projects and professional growth."
        />

        <div className="mt-12">

          <ExperienceTimeline />

        </div>

      </div>
    </section>
  );
}

export default Experience;