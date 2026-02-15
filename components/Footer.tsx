"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

export default function Footer() {
    return (
        <footer className="mx-auto w-fit m-10">
            <nav className="mx-auto w-fit flex gap-3 mb-3">
                <Link href="https://github.com/Jomak-x" target="_blank" className="text-orange-500 hover:text-orange-400 transition-colors">
                <FaGithub size={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/jakob-l123/" target="_blank" className="text-orange-500 hover:text-orange-400 transition-colors">
                <FaLinkedin size={24} />
                </Link>
                <Link href="/resume" className="text-orange-500 hover:text-orange-400 transition-colors">
                <CgFileDocument size={24} />
                </Link>
            </nav>
            <nav className="mx-auto w-fit flex gap-3 mb-3">
                <a className="text-orange-500" href="/">Home</a>
                <a className="text-orange-500" href="/experience">Experience</a>
                <a className="text-orange-500" href="/projects">Projects</a>
                <a className="text-orange-500" href="/skills">Skills</a>
            </nav>
            <nav>
                <div className="">

                </div>
            </nav>
            <aside>
                <p className="mx-auto w-fit">@{new Date().getFullYear()} Jakob Laise - All right reserved</p>
            </aside>
        </footer>
    );
}
