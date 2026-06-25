import StatusIndicator from "../common/StatusIndicator";



import { useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCode,
  HiOutlineChip,
  HiOutlineMail,
} from "react-icons/hi";

import { IoClose } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <HiOutlineHome size={18} /> },
    { name: "About", icon: <HiOutlineUser size={18} /> },
    { name: "Projects", icon: <HiOutlineCode size={18} /> },
    { name: "Skills", icon: <HiOutlineChip size={18} /> },
    { name: "Contact", icon: <HiOutlineMail size={18} /> },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="fixed inset-x-0 top-4 z-50">

        <div className="mx-auto mt-2 max-w-[1280px] px-4 sm:px-6 lg:px-8">

    <div className="mx-auto flex h-14 w-full items-center justify-between rounded-2xl border border-zinc-200/70 bg-white/90 px-4 shadow-[0_15px_45px_rgba(0,0,0,0.08)] backdrop-blur-2xl lg:h-16 lg:px-6">       

          {/* LOGO */}

          <h1
            className="text-2xl font-black tracking-tight"
            style={{ fontFamily: "Space Grotesk" }}
          >
            &lt;ANBU
            <span className="bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
              .OS
            </span>
            /&gt;
          </h1>

          {/* DESKTOP MENU */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href="#"
                className="text-[13px] font-semibold uppercase tracking-wider text-zinc-500 transition duration-300 hover:text-cyan-500"
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* RIGHT */}

          <div className="flex items-center gap-3">

            <div className="hidden lg:flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2">

              <StatusIndicator />

              <span className="text-xs font-medium">
                available()
              </span>

            </div>

            {/* MOBILE BUTTON */}

            <button
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 transition hover:bg-zinc-200 lg:hidden"
            >
              {open ? (
                <IoClose size={24} />
              ) : (
                <HiOutlineMenuAlt3 size={24} />
              )}
            </button>

          </div>

        </div>

    </div>

      </header>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >

        <div className="mx-auto flex h-full max-w-md flex-col px-6 pt-24">

          {/* MENU */}

          <div className="space-y-3">

            {navLinks.map((item) => (

              <button
                key={item.name}
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm transition duration-300 hover:border-cyan-300 hover:shadow-xl"
              >

                <div className="flex items-center gap-4">

                  <div className="text-cyan-500">

                    {item.icon}

                  </div>

                  <span className="text-base font-semibold text-zinc-700">

                    {item.name}

                  </span>

                </div>

                <FiArrowUpRight className="text-zinc-400" />

              </button>

            ))}

          </div>

          {/* FOOTER */}

          <div className="mt-auto mb-10 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">

            <div className="flex items-center gap-2">

              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>

              <span className="text-sm font-semibold">

                Available for Work

              </span>

            </div>

            <p className="mt-3 text-sm text-zinc-500">

              Chennai, India

            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default Navbar;