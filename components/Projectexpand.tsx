import ReactMarkdown from "react-markdown";
import { projects as baseProjects } from "@/data/projects";
import Imagecarousel from "./Imagecarousel";
import Image from "next/image";

type BaseProject = (typeof baseProjects)[keyof typeof baseProjects];
type Project = BaseProject & { markdown: string };

type ProjectexpandProps = {
  bgcolor?: string;
  borderColor?: string;
  project: Project;
  onClick: () => void;
};

export default function Projectexpand({
  onClick,
  borderColor = "border-orange-400",
  bgcolor = "bg-gray-900",
  project,
}: ProjectexpandProps) {
  return (
    <div
      className="fixed overflow-y-auto inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClick}
    >
      <div
        className={`border-4 overflow-y-auto max-h-screen ${project.bordercolor} w-250 flex-col rounded-xl ${bgcolor}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="m-4">
          <div className={`${project.textcolor} text-2xl font-bold`}>
            {project.name}
          </div>
          <div className="">{project.location}</div>
        
        <Imagecarousel boxWidth={560} boxHeight={360} bordercolor={project.bordercolor}>
          {project.pictures.map((s, idx) => (
            <Image
              key={s}
              src={s}
              alt={`Hackathon photo ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className={`object-cover`}
              priority={idx === 0}
            />
          ))}
        </Imagecarousel>
        <div className=" max-h-[80vh] overflow-y-auto text-white">
          <ReactMarkdown>{project.markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
