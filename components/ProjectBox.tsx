type ProjectBoxProps = {
  name: string;
  
  technologies: string[];
  short_desc: string;
  long_desc: string;
  pictures: string[];
  borderColor?: string;
  nameColor?: string;
  startimg?: string;
  startvid?: string;
};

export default function ProjectBox({
    name,
    technologies,
    short_desc,
    long_desc,
    pictures,
    borderColor = "border-orange-400",
    nameColor = "text-orange-400",
    startimg,
    startvid,
}: ProjectBoxProps) {
  const maxVisibleTech = 3;
  const visibleTech = technologies.slice(0, maxVisibleTech);
  const remainingCount = technologies.length - visibleTech.length;

  return (
    <div
      className={`bg-gray-900 border-4 rounded-3xl overflow-hidden h-140 w-110 ${borderColor}`}
    >
      <div className="bg-amber-50 h-55">Images</div>
      <div>
        <div className={`text-center mt-4 text-2xl ${nameColor}`}>{name}</div>
        <div className={`text-xl h-40 m-3 flex items-center`}>
            <div className="line-clamp-5">
                {short_desc}
            </div>
        </div>
        <div className="h-16 flex items-center justify-center gap-2">
          {visibleTech.map((tech) => (
            <div
              className={`border-2 rounded-full px-3 py-1 ${borderColor}`}
              key={tech}
            >
              {tech}
            </div>
          ))}

          {remainingCount > 0 && (
            <div className={`border-2 rounded-full px-3 py-1 ${borderColor}`}>
              +{remainingCount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
