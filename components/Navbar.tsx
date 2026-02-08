"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

export default function Navbar() {
  // ============================================
  // 1. STATE - Tracks which link is being hovered
  // ============================================
  // null = nothing hovered, 0 = first link, 1 = second link, etc.
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // ============================================
  // 2. REF - Stores references to the actual link elements
  // ============================================
  // This lets us measure each link's real position and width
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // ============================================
  // 3. DATA - Your navigation items
  // ============================================
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    { name: "Projects", link: "/projects" },
    { name: "Skills", link: "/skills" },
    { name: "GitHub", link: "https://github.com/Jomak-x", picture: "Github"},
    { name: "LinkedIn", link: "https://www.linkedin.com/in/jakob-l123/", picture:"LinkedIn"},
    { name: "Resume", link: "/resume", picture: "Resume"},
  ];

  const navicons: { [key: string]: React.ReactNode } = {
    "Github": <FaGithub size={24}/>,
    "LinkedIn": <FaLinkedin size={24}/>,
    "Resume": <CgFileDocument size={24}/>,
  }
  // ============================================
  // 4. HELPER - Get the hovered link's measurements
  // ============================================
  // Returns the actual left position and width of the hovered link
  const getSliderStyle = () => {
    if (hoveredIndex === null) return { left: 0, width: 0 };
    
    const hoveredLink = linkRefs.current[hoveredIndex];
    if (!hoveredLink) return { left: 0, width: 0 };
    
    return {
      left: hoveredLink.offsetLeft,   // Distance from left edge of nav
      width: hoveredLink.offsetWidth, // Actual width of the link
    };
  };

  const sliderStyle = getSliderStyle();

  // ============================================
  // 5. RENDER - The actual JSX
  // ============================================
  return (
    <nav className="bg-orange-500 flex relative rounded-full p-6 m-4 w-fit mx-auto shadow-xl">
      
      {/* SLIDING BACKGROUND - Only shows when hovering */}
      {hoveredIndex !== null && (
        <div
          className="absolute bg-orange-300 rounded-full transition-all duration-300"
          style={{
            left: sliderStyle.left,       // Dynamically measured!
            width: sliderStyle.width,     // Dynamically measured!
            height: "50px",
            top: "50%",
            transform: "translateY(-50%)", // Centers vertically
          }}
        />
      )}
      
      {/* LINKS - Generated from navItems array */}
      {navItems.map((item, index) => (
        <Link
          key={item.name}
          href={item.link}

        
          // Store a reference to this link element so we can measure it
          ref={(el) => { linkRefs.current[index] = el; }}
          className={item.picture ? "relative z-10 text-black px-5": "relative z-10 text-black px-9 py-1"}
          // When mouse enters, save this link's index
          onMouseEnter={() => setHoveredIndex(index)}
          // When mouse leaves, clear the hovered state
          onMouseLeave={() => setHoveredIndex(null)}
        >
            {item.picture ? navicons[item.picture]: item.name}
        </Link>
      ))}
      
    </nav>
  );
}