"use client";
import { useState } from "react";
import Image from "next/image";
import profileData from "@/lib/data";
import { Skill } from "@/lib/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Get all unique categories
  const categories = [
    { id: "all", label: "ALL" },
    ...profileData.skills.map((cat) => ({
      id: cat.category,
      label: cat.domain,
    })),
  ];

  // Filter skills based on active category
  const filteredSkills =
    activeCategory === "all"
      ? profileData.skills.flatMap((category) => category.skills)
      : profileData.skills.find(
          (category) => category.category === activeCategory
        )?.skills || [];

  return (
    <div className="container mx-auto pt-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-2">
        My <span className="gradient-text">Skills</span>
      </h1>
      <p className="text-gray-400 mb-5 md:mb-10">
        Technologies and tools I work with
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-4 md:mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`rounded-full py-1 md:py-2 px-3 md:px-6 text-xs md:text-sm font-medium transition-all ${
              activeCategory === category.id
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {activeCategory === "all"
          ? // When "ALL" is selected, show skills grouped by category
            profileData.skills.map((category) =>
              category.skills.map((skill, index) => (
                <SkillCard
                  key={`${category.category}-${index}`}
                  skill={skill}
                />
              ))
            )
          : // When a specific category is selected, show just those skills
            filteredSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
      </div>
    </div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div
      style={{ borderRadius: 5 }}
      className="bg-[#262626] rounded-lg p-2 md:p-6 flex items-center gap-4 transition-all duration-300 hover:bg-[#464646] hover:shadow-lg hover:shadow-purple-900/20"
    >
      <div className="w-8 h-8 md:w-10 md:h-10 relative flex-shrink-0">
        <Image
          src={skill.img || "/placeholder.svg"}
          alt={skill.skill}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="md:text-lg text-md md:font-medium font text-white">
        {skill.skill}
      </h3>
    </div>
  );
}
