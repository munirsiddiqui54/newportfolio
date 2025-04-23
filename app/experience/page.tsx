import profileData from "@/lib/data";

export default function Experience() {
  return (
    <div className="container mx-auto pt-8">
      <h1 className="text-4xl font-bold mb-2">
        Work <span className="gradient-text">Experience</span>
      </h1>
      <p className="text-gray-400 mb-10">My professional journey and roles</p>

      <div className="space-y-8">
        {profileData.experience.map((exp, index) => (
          <div key={index} className="card-bg rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold">{exp.position}</h2>
                <p className="text-primary">{exp.company}</p>
              </div>
              <p className="text-gray-400 mt-2 md:mt-0">{exp.duration}</p>
            </div>

            <p className="text-gray-300 mb-6">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-white/5 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
