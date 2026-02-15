import Image from "next/image";
import { LightRays } from "@/components/ui/light-rays"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { profile } from "@/data/profile"
import { AuroraText } from "@/components/ui/aurora-text"
import { FaArrowDownLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
        <div className="relative h-screen z-0">
          <LightRays color="rgba(255, 165, 0, 0.2)"  length="250vh" count={15} speed={9} className=""/>
          
          {/* Content container - flexbox for side-by-side layout */}
          <div className="absolute flex justify-center z-10 inset-0  flex-col items-center">
            
            {/* Left: Image */}
            <img 
              src={profile.image} 
              className="object-cover rounded-full w-65 h-65 mb-10 border-4 border-orange-400"
            />
            
            {/* Right: Text */}
            <div className="text-center items-center">
              <h1 className="text-5xl font-bold  text-white">{profile.nameintro} <AuroraText colors={["#f88b38", "#f8c538"]}>{profile.name}</AuroraText></h1>
              <h3 className="text-xl text-yellow-400">{profile.university}</h3>
              <TypingAnimation className="text-xl m-3" words={profile.titles} loop blinkCursor>Hello World! 👋</TypingAnimation>
            </div>
            <FaArrowDownLong className="absolute bottom-8 text-orange-500 animate-bounce text-xl items-end" />
          </div>
        </div>
        <div className="flex">
          <p className= "m-10 h-120 w-130 rounded-3xl border-4 border-orange-500  ">
            
          </p>




        </div>
    </div>
  );
}
