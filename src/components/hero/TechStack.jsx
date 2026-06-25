import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiDotnet,
  SiMysql,
} from "react-icons/si";

const techs = [
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-500",
  },
  {
    name: "Node",
    icon: <FaNodeJs />,
    color: "text-green-600",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "text-zinc-700",
  },
  {
    name: "Mongo",
    icon: <SiMongodb />,
    color: "text-green-500",
  },
  {
    name: ".NET",
    icon: <SiDotnet />,
    color: "text-violet-500",
  },
  {
    name: "SQL",
    icon: <SiMysql />,
    color: "text-blue-500",
  },
];

function TechStack() {
  return (
    <section className="mt-4">

      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-400">
        Core Stack
      </p>

      <div className="flex flex-wrap gap-2">

        {techs.map((tech) => (
          <div
            key={tech.name}
            className="group flex h-9 items-center gap-2 rounded-lg border border-zinc-200 bg-white/80 px-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
          >

            <span className={`${tech.color} text-sm`}>
              {tech.icon}
            </span>

            <span className="text-[11px] font-semibold text-zinc-700">
              {tech.name}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default TechStack;