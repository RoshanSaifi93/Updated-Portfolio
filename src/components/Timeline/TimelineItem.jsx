import { motion } from "framer-motion";

function TimelineItem({ item, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative pl-16 pb-12"
    >

      {!isLast && (
        <div className="absolute left-6 top-8 w-[2px] h-full bg-purple-500/30"></div>
      )}

      <div
        className="
          absolute
          left-3
          top-2
          w-6
          h-6
          rounded-full
          bg-purple-500
          border-4
          border-[#050505]
          shadow-[0_0_20px_rgba(168,85,247,.6)]
        "
      >
      </div>

      <p className="text-purple-400 font-semibold tracking-wider">
        {item.year}
      </p>

      <div
        className="
          mt-4
          max-w-4xl
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-2xl
          p-6
          hover:-translate-y-2
          hover:border-purple-500/40
          hover:shadow-[0_0_40px_rgba(168,85,247,.2)]
          transition-all
          duration-300
        "
      >
        <h3 className="text-2xl font-bold">{item.title}</h3>

        <p className="text-purple-400 mt-2">{item.subtitle}</p>

        <p className="text-gray-400 leading-7 mt-5">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default TimelineItem;
