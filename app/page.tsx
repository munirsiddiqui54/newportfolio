import Link from "next/link";
import Image from "next/image";
import profileData from "@/lib/data";
import { ArrowRight, ExternalLink } from "lucide-react";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="container mx-auto sm:px-6 pt-10 md:pt-24">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 relative rounded-full overflow-hidden border-4 border-white/10">
          <Image
            src={profileData.avatar || "/placeholder.svg"}
            alt={profileData.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4">
            Hi, I'm <span className="gradient-text">{profileData.name}</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 md:mb-6">
            {profileData.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto md:mx-0 mb-5 md:mb-8 text-sm sm:text-base">
            {profileData.bio}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
            <Link
              href="/contact"
              style={{ borderRadius: 10 }}
              className="px-4 sm:px-5 py-2 sm:py-2.5 border-gray-700 rounded-full border border-transparent bg-gradient-to-r from-primary to-secondary text-white text-sm sm:text-base font-medium hover:opacity-90 transition"
            >
              Contact Me
            </Link>
            <Link
              href={profileData.resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderRadius: 10 }}
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#ca49b4] to-[#5662ea] text-white text-sm sm:text-base font-medium transition hover:opacity-90 flex items-center gap-1 sm:gap-2"
            >
              Check out Resume{" "}
              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-20">
        <div className="flex justify-between items-center mb-5 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <Link
            href="/projects"
            className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
          >
            View All
            <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {profileData.projects.slice(0, 4).map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="card-bg hover:brightness-125 hover:scale-105 transition rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col"
            >
              <div className="relative h-20 md:h-32 sm:h-40 md:h-48 w-full brightness-90">
                <Image
                  src={project.photo || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-2 md:mb-4">
                  <span className="text-green-400 text-xs sm:text-sm font-medium">
                    {project.status}
                  </span>
                  <span className="hidden md:inline text-gray-400 text-xs sm:text-sm">
                    {project.date}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm line-clamp-1 md:line-clamp-2 flex-1">
                  {project.description}
                </p>

                <div className="mt-2 md:mt-4 flex justify-end">
                  <span className="text-primary text-xs sm:text-sm font-medium flex items-center gap-1 hover:underline">
                    Learn More{" "}
                    <ArrowRight size={12} className="sm:w-4 sm:h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <About />
    </div>
  );
}
