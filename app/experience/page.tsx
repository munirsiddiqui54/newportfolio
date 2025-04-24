import ExtraXurricular from "@/components/ExtraXurricular";
import ProfessionalJourney from "@/components/ProfessionalJourney";
import profileData from "@/lib/data";
import { Briefcase, Users } from "lucide-react";

export default function Experience() {
  return (
    <div className="container mx-auto pt-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-2">
        Work <span className="gradient-text">Experience</span>
      </h1>
      <p className="text-gray-400 mb-10">My professional journey and roles</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProfessionalJourney />
        <ExtraXurricular />
      </div>
    </div>
  );
}
