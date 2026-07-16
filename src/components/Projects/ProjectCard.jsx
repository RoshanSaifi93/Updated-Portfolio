import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        group
        rounded-3xl
        overflow-hidden
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        hover:border-purple-500/50
        hover:shadow-[0_0_60px_rgba(168,85,247,.25)]
        hover:-translate-y-2
        transition-all
        duration-500
        h-full
        flex
        flex-col
      "
    >

      <div className="overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="
            w-full
            h-48
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {project.featured && (
          <span
            className="
              absolute
              top-4
              left-4
              px-3
              py-1
              rounded-full
              bg-purple-600
              text-xs
              font-semibold
            "
          >
            Featured
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold">{project.title}</h3>

        <p className="text-gray-400 mt-3 text-sm leading-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="
                px-2.5
                py-1
                rounded-full
                bg-purple-500/20
                text-purple-300
                text-xs
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto pt-8">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              flex-1
              justify-center
              items-center
              gap-2
              px-4
              py-2.5
              rounded-xl
              bg-white/10
              hover:bg-purple-600
              transition
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              flex-1
              justify-center
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              border
              border-purple-500
              hover:bg-purple-600
              transition
            "
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
