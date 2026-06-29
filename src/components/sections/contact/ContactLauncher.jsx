import { useState } from "react";
import { motion } from "framer-motion";

import ContactModal from "./ContactModal";

function ContactLauncher({ contacts }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="
grid
grid-cols-3
gap-x-5
gap-y-8

md:grid-cols-6
md:gap-8
">

        {contacts.map((item) => (

          <motion.button
            key={item.id}
            whileHover={{
              y: -6,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setSelected(item)}
            className="group flex flex-col items-center"
          >

<div
  className="
    relative
    flex
    h-24
    w-24
    flex-col
    items-center
    justify-center
    overflow-hidden
    rounded-[28px]
    border
    border-zinc-200
    bg-gradient-to-br
    from-white
    via-slate-50
    to-cyan-50
    backdrop-blur-xl
    shadow-[0_10px_35px_rgba(0,0,0,.08)]
    transition-all
    duration-300
    group-hover:-translate-y-1
    group-hover:border-cyan-400
    group-hover:shadow-[0_0_30px_rgba(6,182,212,.25)]
"
>

              <span className="text-4xl transition-transform duration-300 group-hover:scale-110">

                {item.icon}

              </span>

              <span
                className="mt-2 text-[11px] font-black tracking-[0.35em]"
                style={{
                  fontFamily: "Space Grotesk",
                }}
              >

                {item.top}

              </span>

              {item.bottom && (

                <span className="text-[10px] tracking-[0.3em] text-cyan-500">

                  {item.bottom}

                </span>

              )}

            </div>

            {/* <span className="mt-3 text-sm font-semibold text-zinc-700">

              {item.name}

            </span> */}

          </motion.button>

        ))}

      </div>

      <ContactModal
        open={!!selected}
        contact={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}

export default ContactLauncher;