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
  return (
    <div>
      {/* About */}
      <div className="mt-20">
        <h1 className="text-2xl font-bold mb-6">
          About <span className="gradient-text">Me</span>
        </h1>

        {/* Skills and Experience section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column: Skills and Contact */}
          <div className="space-y-8">
            {/* Skills card */}
            <div className="card-bg rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left column: Bold statement */}
                <div>
                  <h2 className="text-4xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6">
                    <span className="text-white/90">
                      {profileData.experience?.length || 2} years of
                    </span>
                    <br />
                    <span className="gradient-text">crafting</span> digital
                    <br />
                    solutions since
                    <br />
                    <span className="text-white/90">2022.</span>
                  </h2>

                  <p className="text-gray-300 mt-6">
                    {profileData.longBio ||
                      `!placeholder:${profileData.name}, a dynamic second-year software engineering student with a passion for crafting innovative solutions that transcend conventional boundaries. Armed with a solid foundation in web and app development, 
                      `}
                  </p>
                </div>

                {/* Right column: Stats and description */}
                <div className="flex flex-col justify-center">
                  <div className="flex flex-wrap gap-x-12 gap-y-6 mb-8">
                    <div>
                      <h3 className="text-5xl font-bold flex items-baseline">
                        {profileData.yearsExperience || "2"}
                        <span className="text-primary text-3xl">+</span>
                      </h3>
                      <p className="text-gray-400">
                        Years of
                        <br />
                        Experience
                      </p>
                    </div>

                    <div>
                      <h3 className="text-5xl font-bold flex items-baseline">
                        {profileData.projects?.length || "7"}
                        <span className="text-primary text-3xl">+</span>
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
              <h3 className="text-xl font-bold my-6">My Skills</h3>

              {/* Creative skills display with fixed z-index issues */}
              <div className="mb-8">
                <div className="flex flex-wrap justify-start gap-4">
                  {profileData.skills.flatMap((category) =>
                    category.skills.map((skill, index) => (
                      <div
                        key={`${category.category}-${index}`}
                        className="group relative"
                      >
                        {/* Skill icon container */}
                        <div className="bg-gray-800/70 rounded-xl hover:bg-gray-700/90 p-3 transition-all duration-300 transform hover:scale-110 z-10 hover:shadow-lg hover:shadow-primary/20">
                          <img
                            src={skill.img}
                            alt={skill.skill}
                            className="w-6 h-6 object-contain"
                          />
                        </div>

                        {/* Tooltip - moved outside and positioned absolutely relative to the group */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1.5 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
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
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition flex items-center gap-2"
                >
                  Explore all skills <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Social Media and Contact Card */}
            <div className="card-bg rounded-2xl p-10 relative overflow-hidden shadow-xl bg-gray-900/70 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <MessageSquare className="text-primary" size={24} />
                Let's Connect
              </h3>
              <Socials />

              {/* Contact me button - unchanged */}
              <div className="flex justify-end">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition flex items-center gap-2"
                >
                  Send me a message <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right column: Experience Timeline */}
          <div className="flex flex-col">
            <div className="card-bg rounded-xl p-8 flex-1">
              <ProfessionalJourney />
              <ExtraXurricular />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
