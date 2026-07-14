import GlassCard from "../UI/GlassCard";
import aboutData from "../../data/aboutData";
import { motion } from "framer-motion";

function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <GlassCard
        className="
          p-8
          max-w-md
          mx-auto
          text-center
          hover:shadow-[0_0_70px_rgba(168,85,247,.35)]
          transition-all
          duration-500
        "
      >
        {/* Photo */}

        <div className="relative w-full max-w-[280px] mx-auto">
          {/* Animated Purple Glow */}

          <div
            className="
              absolute
              -inset-5
              bg-purple-600/30
              blur-3xl
              rounded-full
              animate-pulse
            "
          ></div>

          {/* Image */}

          <div
            className="
              relative
              rounded-3xl
              overflow-hidden
              border
              border-purple-500/40
            "
          >
            <img
              src="/images/PortfolioProfile.jpg"
              alt="Roshan Saifi"
              className="
                w-full
                h-[340px]
                object-cover
                object-top
                transition-transform
                duration-500
                ease-out
                hover:scale-[1.03]
              "
            />
          </div>
        </div>

        {/* Name */}

        <h3 className="text-3xl font-bold mt-8">
          {aboutData.name}
        </h3>

        {/* Role */}

        <p className="text-purple-400 text-lg mt-3">
          {aboutData.role}
        </p>

        {/* Location */}

        <p className="text-gray-400 mt-4">
          📍 {aboutData.location}
        </p>

        {/* Open To Work */}

        <div
          className="
            mt-6
            inline-flex
            items-center
            px-5
            py-2
            rounded-full
            bg-green-500/20
            border
            border-green-500/30
            text-green-400
            font-medium
            animate-pulse
          "
        >
          🟢 Open to Work
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default AboutCard;