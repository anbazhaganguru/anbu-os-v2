import ExperienceCard from "./ExperienceCard";

function ExperienceDesktop({ timeline }) {
  return (
    <div className="relative hidden md:block">

      <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent" />

      <div className="space-y-8">

        {timeline.map((item, index) => (
          <ExperienceCard
            key={index}
            item={item}
          />
        ))}

      </div>

    </div>
  );
}

export default ExperienceDesktop;