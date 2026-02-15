"use client";
import Link from "next/link";
import { useState, useRef, useMemo } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

interface NavItem {
  name: string;
  link: string;
  picture?: string;
}

const navItems = [
  { name: "Home", link: "/" },
  { name: "Experience", link: "/experience" },
  { name: "Projects", link: "/projects" },
  { name: "Skills", link: "/skills" },
  { name: "GitHub", link: "https://github.com/Jomak-x", picture: "Github" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/jakob-l123/", picture: "LinkedIn" },
  { name: "Resume", link: "/resume", picture: "Resume" },
];

const navicons: { [key: string]: React.ReactNode } = {
  Github: <FaGithub size={28} />,
  LinkedIn: <FaLinkedin size={28} />,
  Resume: <CgFileDocument size={28} />,
};

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const sliderStyle = useMemo(() => {
    if (hoveredIndex === null) return { left: 0, width: 0 };

    const hoveredLink = linkRefs.current[hoveredIndex];
    if (!hoveredLink) return { left: 0, width: 0 };

    return {
      left: hoveredLink.offsetLeft,
      width: hoveredLink.offsetWidth,
    };
  }, [hoveredIndex]);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav className="bg-orange-500 flex rounded-full p-6 shadow-xl relative">
        {hoveredIndex !== null && (
          <div
            className="absolute bg-orange-300 rounded-full transition-all duration-300"
            style={{
              left: sliderStyle.left,
              width: sliderStyle.width,
              height: "50px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        )}

        {navItems.map((item, index) => (
          <Link
            key={item.name}
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : undefined}
            rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
            ref={(el) => { linkRefs.current[index] = el; }}
            className={item.picture ? "relative z-10 text-black px-5" : "relative z-10 text-black px-9 py-1"}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.picture ? navicons[item.picture] : item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

