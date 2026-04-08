import Image from "next/image";

type ProjectBoxProps = {
  name: string;
  technologies: string[];
  short_desc: string;
  borderColor?: string;
  textcolor?: string;
  startimg?: string;
  startvid?: string;
  location: string;
  bgcolor?: string;
  onClick?: () => void;
};

export default function ProjectBox({
  name,
  technologies,
  short_desc,
  borderColor = "border-orange-400",
  textcolor = "text-orange-400",
  bgcolor = "bg-gray-900",
  startimg,
  startvid,
  location,
  onClick,
}: ProjectBoxProps) {
  const maxVisibleTech = 3;
  const visibleTech = technologies.slice(0, maxVisibleTech);
  const remainingCount = technologies.length - visibleTech.length;

  return (
    <div
      onClick={onClick}
      className={`${bgcolor} border-4 rounded-3xl overflow-hidden h-140 w-full ${borderColor}`}
    >
      <div className="relative h-55">
        {startvid ? (
          <video
            src={startvid}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : startimg ? (
          <Image
            src={startimg}
            alt="slAIde"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 440px"
          />
        ) : null}
      </div>
      <div>
        <div className="flex items-center line-clamp-1">
          <div className={`mt-4 font-semibold ml-6 text-2xl ${textcolor}`}>
            {name}
          </div>
          <div className="mt-3 leading-none ml-6 text-gray-400 text-3xl">|</div>
          <div className="mt-4 ml-3 text-xl text-gray-400">{location}</div>
        </div>
        <div className={`text-xl h-40 m-3 flex items-center`}>
          <div className="line-clamp-5">{short_desc}</div>
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
