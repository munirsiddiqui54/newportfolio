import React from "react";
import Link from "next/link";
import profileData from "@/lib/data";
import {
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  MessageSquare,
  Github,
} from "lucide-react";

import { Briefcase, Calendar } from "lucide-react";
import ProfessionalJourney from "./ProfessionalJourney";
import ExtraXurricular from "./ExtraXurricular";
import Socials from "./Socials";

const About = () => {
  // Shared components to avoid duplication
  const SkillsCard = () => (
    <div className="card-bg rounded-xl p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        {/* Left column: Bold statement */}
        <div>
          <h2 className="text-3xl md:text-2xl lg:text-3xl font-bold leading-tight mb-3 md:mb-6">
            <span className="text-white/90">
              {profileData.yearsExperience} years of
            </span>
            <br />
            <span className="gradient-text">crafting</span> digital
            <br />
            solutions since
            <br />
            <span className="text-white/90">2022.</span>
          </h2>

          <p className="text-gray-300 mt-3 md:mt-6">
            {profileData.longBio ||
              `!placeholder:${profileData.name}, a dynamic second-year software engineering student with a passion for crafting innovative solutions that transcend conventional boundaries. Armed with a solid foundation in web and app development, 
              `}
          </p>
        </div>

        {/* Right column: Stats and description */}
        <div className="flex flex-col justify-center mt-4 md:mt-0">
          <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 mb-4 md:mb-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold flex items-baseline">
                {profileData.yearsExperience || "2"}
                <span className="text-primary text-2xl md:text-3xl">+</span>
              </h3>
              <p className="text-gray-400">
                Years of
                <br />
                Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-bold flex items-baseline">
                {profileData.deployedProjects || "7"}
                <span className="text-primary text-2xl md:text-3xl">+</span>
              </h3>
              <p className="text-gray-400">
                Deployed
                <br />
                projects
              </p>
            </div>
          </div>

          <p className="text-gray-300">
            {profileData.longBio2 ||
              `!placeholder:I've honed my skills across various domains. My passion for
            innovation drives me to constantly seek new challenges and
            push the boundaries of what's possible in the realm of
            software engineering. `}
          </p>
        </div>
      </div>
      <h3 className="text-xl font-bold my-4 md:my-6">My Skills</h3>

      {/* Creative skills display with fixed z-index issues */}
      <div className="mb-4 md:mb-8">
        <div className="flex flex-wrap justify-start gap-3 md:gap-4">
          {profileData.skills.flatMap((category) =>
            category.skills.map((skill, index) => (
              <div
                key={`${category.category}-${index}`}
                className="group relative"
              >
                {/* Skill icon container */}
                <div className="bg-gray-800/70 rounded-xl hover:bg-gray-700/90 p-2 md:p-3 transition-all duration-300 transform hover:scale-110 z-10 hover:shadow-lg hover:shadow-primary/20">
                  <img
                    src={skill.img}
                    alt={skill.skill}
                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                  />
                </div>

                {/* Tooltip - moved outside and positioned absolutely relative to the group */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 md:px-3 md:py-1.5 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                  {skill.skill}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Link
          href="/skills"
          className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm md:text-base font-medium hover:opacity-90 transition flex items-center gap-1 md:gap-2"
        >
          Explore all skills <ArrowRight size={14} className="md:w-4 md:h-4" />
        </Link>
      </div>
    </div>
  );

  const ConnectCard = () => (
    <div className="card-bg rounded-2xl p-5 md:p-10 relative overflow-hidden shadow-xl bg-gray-900/70 backdrop-blur-md">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 flex items-center gap-2 md:gap-3 text-white">
        <MessageSquare className="text-primary" size={20} />
        Let's Connect
      </h3>
      <Socials />

      {/* Contact me button */}
      <div className="flex justify-end mt-4 md:mt-6">
        <Link
          href="/contact"
          className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm md:text-base font-medium hover:opacity-90 transition flex items-center gap-1 md:gap-2"
        >
          Send me a message <ArrowRight size={14} className="md:w-4 md:h-4" />
        </Link>
      </div>
    </div>
  );

  const ExperienceCard = () => (
    <div className="card-bg rounded-xl p-4 md:p-8 flex-1">
      <ProfessionalJourney />
      <ExtraXurricular />
    </div>
  );

  return (
    <div>
      {/* About - Reduced top margin for mobile */}
      <div className="mt-10 md:mt-20">
        <h1 className="text-2xl font-bold mb-4 md:mb-6">
          About <span className="gradient-text">Me</span>
        </h1>

        {/* Desktop Layout - Original order */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {/* Left column: Skills and Contact */}
          <div className="space-y-8">
            <SkillsCard />
            <ConnectCard />
          </div>

          {/* Right column: Experience Timeline */}
          <div className="flex flex-col">
            <ExperienceCard />
          </div>
        </div>

        {/* Mobile Layout - Reordered components */}
        <div className="grid grid-cols-1 gap-4 lg:hidden">
          {/* Skills first */}
          <SkillsCard />

          {/* Experience second */}
          <ExperienceCard />

          {/* Let's Connect last (for mobile only) */}
          <ConnectCard />
        </div>
      </div>
    </div>
  );
};

export default About;
