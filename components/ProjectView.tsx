"use client";
import { useState } from "react";
import ProjectBox from "./ProjectBox";
import Projectexpand from "./Projectexpand";
import { projects } from "@/data/projects";

export default function ProjectView() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        {isOpen && <Projectexpand onClick={handleClose}></Projectexpand>}
      </div>
      <div className="flex grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-10">
      {Object.values(projects).map((projects) => (
        <ProjectBox
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

/*
      <ProjectBox
        location="Knight Hacks IX"
        startimg="/home/slAIde/slAIde_demo1.jpg"
        name="slAide"
        technologies={[
          "python",
          "TypeScript",
          "Google ADK/A2A",
          "More and more",
          "Supabase",
          "asdasdasdasdasdasda",
        ]}
        short_desc="There is a certain kind of text that exists purely to exist, a quiet stream of words that neither rush toward a conclusion nor linger on any single idea for too long. It unfolds slowly, almost absentmindedly, like a thought that drifts in and out of focus without ever demanding attention. You read it, not because it tells you something important, but because it is there, filling the space between beginnings and endings with a soft, steady presence. Imagine a sentence that begins without urgency, continues without tension, and concludes without resolution. Then imagine another one just like it, and another, each placed carefully after the last, forming a structure that feels intentional even if it does not point anywhere specific. This is not confusion, and it is not randomness. It is simply language moving forward for its own sake, exploring the rhythm of expression without the burden of meaning. Words follow one another as they always do, guided by patterns that feel familiar yet carry no particular weight. They form images that almost appear but never quite settle, like shapes in the clouds that vanish as soon as you try to define them. There is a quiet comfort in that, in letting language exist without asking it to perform or prove anything. Paragraphs emerge the same way. They expand gently, adding layers of description that do not deepen the story so much as widen it. There is no central idea to return to, no key point to remember, only the continuous motion of text building upon itself. Each line supports the next, not because it must, but because that is simply how writing works when it is allowed to move freely. Time passes while reading, though it is difficult to measure how or why. Nothing urgent happens, and yet something is always happening in the smallest possible way. A sentence ends. Another begins. A thought transitions into something that resembles another thought, even if it is only loosely connected. This is progression without destination, structure without purpose."
        long_desc="It is an agent app to generate this and that"
        pictures={["./slaidetest.jpg"]}
        onClick={handleOpen}
      />
*/
