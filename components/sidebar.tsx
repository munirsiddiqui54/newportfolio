"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Code, Briefcase, Mail, FolderKanban } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "Skills", icon: Code, path: "/skills" },
  { name: "Projects", icon: FolderKanban, path: "/projects" },
  { name: "Experience", icon: Briefcase, path: "/experience" },
  { name: "Contact", icon: Mail, path: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed z-10 bg-[#262626] md:bg-white/5 backdrop-blur-sm md:top-0 md:left-0 md:h-full md:w-16 bottom-0 w-full h-16 flex md:flex-col items-center justify-around md:justify-start py-2 md:py-8">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link href={item.path} key={item.name}>
            <div
              style={{ borderRadius: 5 }}
              className={`nav-item ${
                isActive ? "active" : ""
              } flex flex-col md:flex-col items-center text-xs`}
            >
              <item.icon className="icon w-5 h-5" />
              <span className="text hidden md:block">{item.name}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
