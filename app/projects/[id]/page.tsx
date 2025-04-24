import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Youtube,
  Smartphone,
} from "lucide-react";
import profileData from "@/lib/data";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = profileData.projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const getYouTubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(
      /(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return videoIdMatch
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
      : null;
  };

  const youtubeEmbedUrl = project.youtube
    ? getYouTubeEmbedUrl(project.youtube)
    : null;
  return (
    <div className="container mx-auto pt-8 px-4 md:px-8">
      <Link
        href="/projects"
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Project Info Left (on large) */}
          <div className="flex-1 p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-1 text-white">
                  {project.name}
                </h1>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-green-400 font-semibold">
                    {project.status}
                  </span>
                  <span className="text-gray-400">{project.date}</span>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-sm text-white transition"
                  >
                    <Github size={16} />
                    GitHub
                  </Link>
                )}
                {project.youtube && (
                  <Link
                    href={project.youtube}
                    target="_blank"
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-sm text-white transition"
                  >
                    <Youtube size={16} />
                    YouTube
                  </Link>
                )}
                {project.playstore && (
                  <Link
                    href={project.playstore}
                    target="_blank"
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-sm text-white transition"
                  >
                    <Smartphone size={16} />
                    Play Store
                  </Link>
                )}
                {project.visit && (
                  <Link
                    href={project.visit}
                    target="_blank"
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-sm text-white transition"
                  >
                    <ExternalLink size={16} />
                    Visit
                  </Link>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-white">
                Description
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-white">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg text-white"
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
                <h2 className="text-xl font-semibold mb-3 text-white">
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Media Right */}
          <div className="flex-1 relative min-h-[300px]">
            {youtubeEmbedUrl ? (
              <div className="relative group w-full h-full">
                <iframe
                  src={youtubeEmbedUrl}
                  title="YouTube video player"
                  className="w-full h-full aspect-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* <Link
                  href={project.youtube || ""}
                  target="_blank"
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="p-4 bg-black/70 rounded-full">
                    <ExternalLink size={36} className="text-white" />
                  </div>
                </Link> */}
              </div>
            ) : project.visit ? (
              <div className="relative group w-full h-full min-h-[300px]">
                <iframe
                  src={project.visit}
                  title="Project Website"
                  className="w-full h-full rounded-lg border border-gray-700"
                />
                <Link
                  href={project.visit}
                  target="_blank"
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="p-4 bg-black/70 rounded-full">
                    <ExternalLink size={36} className="text-white" />
                  </div>
                </Link>
              </div>
            ) : (
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src={project.photo || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
