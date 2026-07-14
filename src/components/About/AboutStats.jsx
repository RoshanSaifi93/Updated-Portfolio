import { FaLaptopCode, FaCodeBranch, FaGithub } from "react-icons/fa";
import GlassCard from "../UI/GlassCard";

const stats = [
  {
    icon: <FaLaptopCode />,
    value: "5+",
    title: "Projects",
  },
  {
    icon: <FaCodeBranch />,
    value: "8+",
    title: "Technologies",
  },
  {
    icon: <FaGithub />,
    value: "Active",
    title: "GitHub",
  },
];

function AboutStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {stats.map((item, index) => (
        <GlassCard
          key={index}
          className="p-6 text-center hover:scale-105 transition duration-300"
        >
          <div className="text-4xl text-purple-500 flex justify-center">
            {item.icon}
          </div>

          <h3 className="text-3xl font-bold mt-4">{item.value}</h3>

          <p className="text-gray-400 mt-2">{item.title}</p>
        </GlassCard>
      ))}
    </div>
  );
}

export default AboutStats;
