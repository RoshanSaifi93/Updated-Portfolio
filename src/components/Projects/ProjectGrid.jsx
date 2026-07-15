import projectsData from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-16">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;