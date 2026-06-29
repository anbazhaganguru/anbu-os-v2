import { useEffect, useState } from "react";
import {
  HiOutlineSignal,
  HiOutlineWifi,
  HiOutlineBattery100,
} from "react-icons/hi2";

function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-between px-6 pt-4">

      <span className="text-sm font-semibold text-zinc-800 dark:text-white">

        {time}

      </span>

      <div className="flex items-center gap-2">

        <HiOutlineSignal className="text-lg text-zinc-700 dark:text-zinc-200" />

        <HiOutlineWifi className="text-lg text-zinc-700 dark:text-zinc-200" />

        <HiOutlineBattery100 className="text-xl text-zinc-700 dark:text-zinc-200" />

      </div>

    </div>
  );
}

export default StatusBar;