import projectArray, { Project } from "./projects";
import skillsArray, { SkillCategory } from "./skills";



export interface Experience {
  company: string;
  position: string;
  duration: string;
  icon: string;
  type: string;
  description: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  resume:string;
  yearsExperience: string;
  longBio: string;
  longBio2: string;
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
}

export interface Extracurricular {
  organization: string;
  icon: string;
  position: string;
  type: string;
  duration: string;
  description: string;
  skills: string[];
  links?: {
    text: string;
    url: string;
  }[];
}

const profileData: ProfileData & { extracurriculars: Extracurricular[] } = {
  name: "Munir Siddiqui",
  title: "Full Stack Developer",
  bio: "Passionate developer with expertise in building modern web applications. I specialize in React, Next.js, and Node.js with a focus on creating performant and accessible user interfaces.",
  avatar: "/munir.jpg",
  yearsExperience: "2",
  longBio: "lorem23 sj are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a",
  longBio2: "are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a",
  resume: "https://docs.google.com/document/d/16pRE_IxGghyIkUkyNpwRGK5HNMhw8oAQcH3aw1_WaSM/edit?tab=t.0",
  skills: skillsArray,
  projects: projectArray,
  extracurriculars: [
    {
      organization: "GDG PCE",
      icon: "/Photos/Company/gdg.png",
      position: "Technical Lead",
      type: "Campus Club",
      duration: "2024 - 25",
      description:
        "Led a team of 10+ technical members, planned and executed 12+ technical events including 1 national level hackathon with over 150+ participants, launched 1 magazine. Delivered 3 workshops as a speaker and guided 5 group projects under the club initiative.",
      skills: ["Leadership", "Event Management", "Public Speaking", "Technical Mentorship"],
    },
    {
      organization: "Alegria 2025",
      icon: "/Photos/Company/alegria.png",
      position: "Technical Team Member",
      type: "College Festival",
      duration: "2024 - 25",
      description:
        "Developed Flutter mobile app for Alegria 2025 and successfully deployed it on Play Store. Contributed to the creation of the festival website. Worked as part of the organizing committee that conducted 10+ technical workshops during the event.",
      skills: ["Flutter", "Mobile App Development", "Web Development", "Event Management"],
      links: [
        {
          text: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.threads.alegria&hl=en_IN"
        },
        {
          text: "Website",
          url: "https://alegria.co.in/"
        }
      ]
    }
  ],
  experience: [
    {
      company: "ZapEat",
      icon: "/Photos/Company/zapeat.png",
      position: "React Native Developer",
      type:"Remote Internship",
      duration: "Jan 2025 - Present",
      description:
        "!placeholder:Leading the frontend development team in building modern web applications using React and Next.js.",
      skills: ["React Native", "Expo", "Tailwind CSS","Jotai"],
    },
    {
      company: "Dev N Brand",
      icon: "/Photos/Company/devnbrand.png",
      position: "Web Developer",
      type:"Remote Internship",
      duration: "Nov 2024 - Dec 2025",
      description:
        "!placeholder:Leading the frontend development team in building modern web applications using React and Next.js.",
      skills: ["ReactJs", "NodeJs", "NextJs", "TypeScript", "Bootstrap"],
    },
  ],
  contact: {
    phone:"+91 969 947 3589",
    email: "munirsiddiqui004@gmail.com",
    linkedin: "https://linkedin.com/in/munirsiddiqui54",
    github: "https://github.com/munirsiddiqui54",
    twitter: "https://x.com/M1077412",
  },
};

export default profileData;