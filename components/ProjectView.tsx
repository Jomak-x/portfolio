"use client";
import { useState } from "react";
import ProjectBox from "./ProjectBox";
import Projectexpand from "./Projectexpand";
import { projects as baseProjects } from "@/data/projects";

type BaseProject = (typeof baseProjects)[keyof typeof baseProjects];
type ProjectWithMarkdown = BaseProject & { markdown: string };
type ProjectsMap = Record<string, ProjectWithMarkdown>;

export default function ProjectView({ projects }: { projects: ProjectsMap }) {
  const [selectedProjectKey, setSelectedProjectKey] = useState<string | null>(
    null
  );

  const selectedProject = selectedProjectKey
    ? projects[selectedProjectKey]
    : null;

  return (
    <div>
      {selectedProject && (
        <Projectexpand
          project={selectedProject}
          onClick={() => setSelectedProjectKey(null)}
        />
      )}

      <div className="flex grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-10">
        {Object.entries(projects).map(([projectKey, project]) => (
          <ProjectBox
            key={projectKey}
            onClick={() => setSelectedProjectKey(projectKey)}
            name={project.name}
            technologies={project.technologies}
            short_desc={project.short_desc}
            bgcolor={project.bgcolor}
            borderColor={project.bordercolor}
            textcolor={project.textcolor}
            startvid={project.startvid}
            startimg={project.startimg}
            location={project.location}
          />
        ))}
      </div>
    </div>
  );
}
