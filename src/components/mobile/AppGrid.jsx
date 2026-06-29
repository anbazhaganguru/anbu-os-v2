import {
  HiOutlineUser,
  HiOutlineCube,
  HiOutlineFolder,
  HiOutlineRectangleStack,
  HiOutlineCpuChip,
  HiOutlineEnvelope,
} from "react-icons/hi2";

import AppIcon from "./AppIcon";

const apps = [
  {
    id: 1,
    title: "About",
    icon: HiOutlineUser,
    color: "text-cyan-500",
  },
  {
    id: 2,
    title: "Packages",
    icon: HiOutlineCube,
    color: "text-violet-500",
  },
  {
    id: 3,
    title: "Experience",
    icon: HiOutlineFolder,
    color: "text-amber-500",
  },
  {
    id: 4,
    title: "Projects",
    icon: HiOutlineRectangleStack,
    color: "text-pink-500",
  },
  {
    id: 5,
    title: "Skills",
    icon: HiOutlineCpuChip,
    color: "text-green-500",
  },
  {
    id: 6,
    title: "Contact",
    icon: HiOutlineEnvelope,
    color: "text-blue-500",
  },
];

function AppGrid() {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-8">

      {apps.map((app) => (

        <AppIcon
          key={app.id}
          title={app.title}
          icon={app.icon}
          color={app.color}
        />

      ))}

    </div>
  );
}

export default AppGrid;