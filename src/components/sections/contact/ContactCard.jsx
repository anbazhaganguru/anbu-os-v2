import { motion } from "framer-motion";

function ContactCard({ item }) {
  return (
    <motion.a
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      href="#"
      className="
        group
        rounded-3xl
        border
        border-zinc-200
        bg-white/80
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-300
      "
    >
      <div
        className={`
          mb-5
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          ${item.color}
          text-3xl
        `}
      >
        {item.icon}
      </div>

      <h3 className="text-xl font-bold">
        {item.title}
      </h3>

      <p className="mt-2 text-sm text-zinc-500 break-all">
        {item.value}
      </p>
    </motion.a>
  );
}

export default ContactCard;