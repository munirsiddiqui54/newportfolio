import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import profileData from "@/lib/data";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = profileData.projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto pt-8">
      <Link
        href="/projects"
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <div className="card-bg rounded-xl overflow-hidden">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={project.photo || "/placeholder.svg"}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {project.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-green-400 text-sm font-medium">
                  {project.status}
                </span>
                <span className="text-gray-400 text-sm">{project.date}</span>
              </div>
            </div>

            <div className="flex gap-3 mt-4 md:mt-0">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </Link>
              )}

              {project.visit && (
                <Link
                  href={project.visit}
                  target="_blank"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <ExternalLink size={16} />
                  Visit
                </Link>
              )}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-300">{project.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg"
                >
                  <Image
                    src={tech.img || "/placeholder.svg"}
                    alt={tech.skill}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span>{tech.skill}</span>
                </div>
              ))}
            </div>
          </div>

          {project.keyPoints.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {project.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
