import { motion } from "framer-motion";

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
        group
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-2xl
        p-5
        flex
        items-center
        gap-4
        hover:border-purple-500/50
        hover:shadow-[0_0_40px_rgba(168,85,247,.25)]
        transition-all
        duration-300
      "
    >
      {Icon ? (
        <Icon
          className={`
            text-4xl
            ${skill.color}
            group-hover:scale-110
            transition-transform
            duration-300
          `}
        />
      ) : (
        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-purple-500/20
            flex
            items-center
            justify-center
            text-purple-400
            font-bold
          "
        >
          •
        </div>
      )}

      <div>
        <h3 className="font-semibold text-lg">{skill.name}</h3>
      </div>
    </motion.div>
  );
}

export default SkillCard;
