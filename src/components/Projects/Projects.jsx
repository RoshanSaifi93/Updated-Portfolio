import { motion } from "framer-motion";

import ProjectGrid from "./ProjectGrid";

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 bg-[#050505] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-700 opacity-10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-700 opacity-10 blur-[170px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-purple-400 text-sm font-semibold">
            MY WORK
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Featured <span className="text-purple-500">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Here are some of the projects I have built using React,
            JavaScript, Tailwind CSS and modern frontend technologies.
          </p>
        </motion.div>

        {/* Projects */}

        <ProjectGrid />
      </div>
    </section>
  );
}

export default Projects;