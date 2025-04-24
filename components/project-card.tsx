import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Github,
  ExternalLink,
  Youtube,
  ArrowRight,
  YoutubeIcon,
} from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  isFeature,
}: {
  project: Project;
  isFeature?: boolean;
}) {
  return (
    <div className="card-bg rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={project.photo || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover filter brightness-75"
        />
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          {/* Status and Date */}
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <span className="text-green-400 text-xs sm:text-sm font-medium">
              {project.status}
            </span>
            <span className="text-gray-400 text-xs sm:text-sm">
              {project.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
            {project.name}
          </h3>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
            {project.stack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full text-xs sm:text-sm"
              >
                <Image
                  src={tech.img || "/placeholder.svg"}
                  alt={tech.skill}
                  width={16}
                  height={16}
                  className="rounded-full"
                />
                <span>{tech.skill}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Buttons + Learn More */}
        <div className="flex flex-col gap-3 sm:gap-4 mt-auto">
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-[10px] text-xs sm:text-sm text-white border-gray-200 border hover:opacity-90 transition-all"
              >
                <Github size={16} />
                GitHub
              </Link>
            )}

            {project.visit && (
              <Link
                href={project.visit}
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-[10px] text-xs sm:text-sm text-white border-gray-200 border hover:opacity-90 transition-all"
              >
                <ExternalLink size={16} />
                Visit
              </Link>
            )}

            {project.youtube && (
              <Link
                href={project.youtube}
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-[10px] text-xs sm:text-sm text-white border-gray-200 border transition-all"
              >
                <YoutubeIcon size={20} style={{ color: "#c4302b" }} />
                YouTube
              </Link>
            )}

            {project.playstore && (
              <Link
                href={project.playstore}
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-[10px] text-xs sm:text-sm text-white border-gray-200 border transition-all"
              >
                <Play size={16} style={{ color: "#ffffff" }} />
                Play Store
              </Link>
            )}
          </div>

          {/* Learn More Button */}
          {isFeature && (
            <div className="flex justify-end">
              <Link
                href={`/projects/${project.id}`}
                style={{ textDecoration: "none" }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary font-medium transition-all"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
