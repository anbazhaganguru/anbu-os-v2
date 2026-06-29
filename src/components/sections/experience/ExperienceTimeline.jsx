import ExperienceDesktop from "./ExperienceDesktop";
import ExperienceMobile from "./ExperienceMobile";

const timeline = [
  {
    year: "2022",
    title: "Started BCA",
    description: "Started Bachelor of Computer Applications.",
  },
  {
    year: "2023",
    title: "Frontend Development",
    description: "Learned HTML, CSS, Bootstrap and JavaScript.",
  },
  {
    year: "2024",
    title: "Sportz Localz",
    description: "Built my first responsive web application.",
  },
  {
    year: "2025",
    title: "Graduated BCA",
    description: "Completed BCA and built Sri's Care.",
  },
  {
    year: "2026",
    title: "ANBU.OS",
    description: "Learning React, .NET and building ANBU.OS.",
  },
];

function ExperienceTimeline() {
  return (
    <>
      <ExperienceDesktop timeline={timeline} />

      <ExperienceMobile timeline={timeline} />
    </>
  );
}

export default ExperienceTimeline;