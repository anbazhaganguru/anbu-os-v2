import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    const nextTheme = !dark;

    setDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <motion.button
      whileHover={{
        scale: 1.08,
        rotate: 8,
      }}
      whileTap={{
        scale: 0.92,
      }}
      onClick={toggleTheme}
      className="
        fixed
        right-5
        top-24
        z-[100]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        border
        border-zinc-200
        bg-white/80
        shadow-[0_10px_40px_rgba(0,0,0,.12)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400
      "
    >
      {dark ? (
        <HiOutlineSun
          className="text-2xl text-yellow-500"
        />
      ) : (
        <HiOutlineMoon
          className="text-2xl text-zinc-700"
        />
      )}

      <span className="absolute inset-0 rounded-2xl animate-pulse bg-cyan-400/10"></span>

    </motion.button>
  );
}

export default ThemeToggle;