import { motion } from "framer-motion";
import skillsData from "../../data/skillsData";
import SkillCard from "./SkillCard";

function SkillsGrid() {
  return (
    <div className="space-y-16 mt-16">
      {skillsData.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >

          <h3 className="text-2xl font-bold text-purple-400 mb-8">
            {category.title}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.skills.map((skill, skillIndex) => (
              <SkillCard key={skillIndex} skill={skill} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default SkillsGrid;
