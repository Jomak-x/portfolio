import Imagecarousel from "./Imagecarousel";
import Image from "next/image";
import { projects } from "@/data/projects";

type Project = (typeof projects)[keyof typeof projects];

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClick}
    >
      <div
        className={`border-4  ${borderColor} w-250 flex rounded-xl ${bgcolor}`}
      >
        <div className="m-4">
          {project.mdfile}
        </div>
      </div>
    </div>
  );
}
