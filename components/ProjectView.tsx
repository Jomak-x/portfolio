"use client";
import { useState } from "react";
import ProjectBox from "./ProjectBox";
import Projectexpand from "./Projectexpand";
import { projects } from "@/data/projects";

type ProjectKey = keyof typeof projects;

export default function ProjectView() {

  const [selectedProjectKey, setSelectedProjectKey] = useState<ProjectKey | null>(
    null
  );

  const selectedProject = selectedProjectKey
    ? projects[selectedProjectKey]
    : null;

  const handleClose = () => {
    setSelectedProjectKey(null);
  };

  return (
    <div>
      <div>
        {selectedProject && (
          <Projectexpand
            project={selectedProject}
            onClick={handleClose}
          ></Projectexpand>
        )}
      </div>
      <div className="flex grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-10">
        {Object.entries(projects).map(([projectkey, projects]) => (
          <ProjectBox
            key={projectkey}
            onClick={() => setSelectedProjectKey(projectkey as ProjectKey)}
            name={projects.name}
            technologies={projects.technologies}
            short_desc={projects.short_desc}
            bgcolor={projects.bgcolor}
            borderColor={projects.bordercolor}
            textcolor={projects.textcolor}
            startvid={projects.startvid}
            startimg={projects.startimg}
            location={projects.location}
          />
        ))}
      </div>
    </div>
  );
}
type ProjectBoxProps = {
  name: string;
  technologies: string[];
  short_desc: string;
  borderColor?: string;
  nameColor?: string;
  startimg?: string;
  startvid?: string;
  location: string;
  bgcolor?: string;
  onClick?: () => void;
};

