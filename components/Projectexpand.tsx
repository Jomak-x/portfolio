import Imagecarousel from "./Imagecarousel";
import { slAIde } from "@/data/projects";
import Image from "next/image";



type ProjectexpandProps = {
  bgcolor?: string;
  borderColor?: string;
  onClick: () => void;
};

export default function Projectexpand({
  onClick,
  borderColor = "border-orange-400",
  bgcolor = "bg-gray-900",
}: ProjectexpandProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClick}
    >
      <div
        className={`border-4 ${borderColor} w-250 flex rounded-xl ${bgcolor}`}
      >
        <div>

        </div>
        <div className="m-4">How are you doing

        </div>

      </div>
    </div>
  );
}
