import React from "react";
import Link from "next/link";
import profileData from "@/lib/data";
import { Briefcase } from "lucide-react";
const ProfessionalJourney = () => {
  return (
    <div>
      {" "}
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Briefcase className="text-primary" size={20} />
        Professional Journey
      </h3>
      <div className="space-y-6">
        {profileData.experience.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-700 pl-6 relative">
            {/* Timeline dot */}
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary"></div>

            {/* Experience card */}
            <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-800">
              <div className="flex flex-wrap items-start gap-3 mb-3">
                {/* Company logo/icon */}
                {exp.icon && (
                  <img
                    src={exp.icon}
                    alt={exp.company}
                    className="w-10 h-10 object-contain rounded-lg mt-2 bg-gray-900/50"
                  />
                )}

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-lg text-white">
                    {exp.position}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                    <span className="text-primary">{exp.company}</span>
                    {exp.type && (
                      <span className="text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full">
                        {exp.type}
                      </span>
                    )}
                  </div>
                </div>

                <span className="text-sm text-gray-400 whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <p className="text-gray-300 text-sm mb-3">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalJourney;
