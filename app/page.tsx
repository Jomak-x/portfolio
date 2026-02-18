import Hero from "@/components/Hero";
import Imagecarousel from "@/components/Imagecarousel";
import Textbox1 from "@/components/Textbox1";
import { profile } from "@/data/profile";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex">
        <div>
          <Textbox1 />
        </div>
        <Imagecarousel boxWidth={560} boxHeight={360}>
          {profile.hackathonimg.map((s, idx) => (
            <Image
              key={s}
              src={s}
              alt={`Hackathon photo ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              priority={idx === 0}
            />
          ))}
        </Imagecarousel>
      </div>
    </div>
  );
}
