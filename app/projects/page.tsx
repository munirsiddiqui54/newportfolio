import ProjectCard from "@/components/project-card";
import profileData from "@/lib/data";

export default function Projects() {
  return (
    <div className="container mx-auto pt-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-2">
        My <span className="gradient-text">Projects</span>
      </h1>
      <p className="text-gray-400 mb-5 md:mb-10">
        A collection of my recent work and personal projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profileData.projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            // isFeature={i < 4 ? true : false}
            isFeature={true}
          />
        ))}
      </div>
    </div>
  );
}
