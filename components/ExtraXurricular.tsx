import React from "react";
import Link from "next/link";
import profileData from "@/lib/data";
import {
  ArrowRight,
  ExternalLink,
  Award,
  Users,
  Handshake,
  Megaphone,
} from "lucide-react";

const ExtraXurricular = () => {
  return (
    <div>
      <h3 className="text-lg md:text-xl font-bold my-4 md:my-6 flex items-center gap-2">
        <Handshake className="text-primary" size={18} />
        Extra Curricular
      </h3>
      <div className="space-y-4 md:space-y-6">
        {profileData.extracurriculars.map((activity, index) => (
          <div
            key={index}
            className="border-l-2 border-gray-700 pl-4 md:pl-6 relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary"></div>

            {/* Experience card */}
            <div className="bg-white/5 rounded-lg p-3 md:p-5 border border-gray-500">
              <div className="flex flex-wrap items-start gap-2 md:gap-3 mb-2 md:mb-3">
                {/* Organization logo/icon */}
                {activity.icon && (
                  <img
                    src={activity.icon}
                    alt={activity.organization}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-lg mt-1 md:mt-2 bg-gray-900/50"
                  />
                )}

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base md:text-lg text-white">
                    {activity.position}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-2 md:gap-x-3 gap-y-1 mt-0.5 md:mt-1">
                    <span className="text-primary text-sm md:text-base">
                      {activity.organization}
                    </span>
                    {activity.type && (
                      <span className="text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full">
                        {activity.type}
                      </span>
                    )}
                  </div>
                </div>

                <span className="text-xs md:text-sm text-gray-400 whitespace-nowrap">
                  {activity.duration}
                </span>
              </div>

              <p className="text-gray-300 text-xs md:text-sm mb-2 md:mb-3">
                {activity.description}
              </p>

              {activity.links && activity.links.length > 0 && (
                <div className="flex flex-wrap gap-2 md:gap-3 justify-end mb-2 md:mb-3">
                  {activity.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.url}
                      target="_blank"
                      className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition"
                    >
                      {link.text}{" "}
                      <ExternalLink size={10} className="md:w-3 md:h-3" />
                    </Link>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {activity.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-1.5 md:px-2 py-0.5 md:py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
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

export default ExtraXurricular;
