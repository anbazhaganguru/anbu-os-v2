import { motion } from "framer-motion";
import { techIcons } from "../../../utils/techIcons";

function MobilePackageGrid({
  packages,
  onOpen,
}) {
  return (
    <div className="grid grid-cols-4 gap-4 md:hidden">

      {packages.map((pkg, index) => {

        const tech = techIcons[pkg.key];
        const Icon = tech?.icon;

        return (

          <motion.button
            key={pkg.id}
            initial={{
              opacity: 0,
              scale: .8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: .35,
              delay: index * .05,
            }}
            whileTap={{
              scale: .9,
            }}
            onClick={() => onOpen(pkg)}
            className="group flex flex-col items-center"
          >

            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-zinc-200
                bg-white
                shadow-md
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:shadow-xl
              "
            >

              {Icon && (

                <Icon
                  className={`text-4xl ${tech.color}`}
                />

              )}

            </div>

            <span className="mt-2 max-w-[70px] truncate text-[11px] font-semibold text-zinc-700">

              {pkg.name}

            </span>

          </motion.button>

        );

      })}

    </div>
  );
}

export default MobilePackageGrid;