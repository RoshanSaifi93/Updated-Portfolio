import { motion } from "framer-motion";
import timelineData from "../../data/timelineData";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <section
      id="journey"
      className="relative py-28 bg-[#050505] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-700 opacity-10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-700 opacity-10 blur-[170px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-purple-400 text-sm font-semibold">
            MY JOURNEY
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Education & <span className="text-purple-500">Experience</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            My journey from earning a Computer Science degree to building
            real-world frontend applications and preparing for professional
            opportunities.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="mt-20">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
