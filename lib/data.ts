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
  resume: string;
  yearsExperience: string;
  deployedProjects: string;
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
  title: "SDE | Full Stack | Mobile App | Cloud Native ",
  bio: "Passionate developer with expertise in building modern web applications and mobile apps. Skilled across the full stack with a diverse tech toolkit including frontend, backend, mobile, and cloud technologies.",
  avatar: "/munir.jpg",
  yearsExperience: "3",
  deployedProjects: "20",
  longBio:
    "I'm a passionate Full-Stack Developer with " +
    3 +
    " years of experience in designing, developing, and deploying end-to-end web applications. My expertise spans both front-end and back-end technologies, including: ReactJs, NextJs, NodeJs, React Native, Flutter, AWS. ",
  longBio2:
    "Experienced developer with a strong background in building web and mobile applications using React, Next.js, Node.js, React Native, and Flutter. I've worked on 20+ diverse projects — from solo builds to collaborative team efforts — with a focus on creating performant UIs and scalable cloud solutions using AWS.",
  resume:
    "https://drive.google.com/file/d/1BXoSHxqRPCT4Og3PbU9vFD3Hb1gB_R3O/view?usp=sharing",
  skills: skillsArray,
  projects: projectArray,
  extracurriculars: [
    {
      organization: "GDG PCE",
      icon: "/Photos/Company/gdg.png",
      position: "Technical Lead",
      type: "Campus Club",
      duration: "2024 - 25",
      // description:"Led a team of 10+ technical members, planned and executed 12+ technical events including 1 national level hackathon with over 150+ participants, launched 1 magazine. Delivered 3 workshops as a speaker and guided 5 group projects under the club initiative.",
      description:
        "Led a team of 10+ technical members, planned and executed 12+ technical events including 1 national level hackathon with over 150+ participants. Delivered 3 workshops as a speaker and guided 5 group projects under the club initiative.",
      skills: [
        "Leadership",
        "Event Management",
        "Public Speaking",
        "Technical Mentorship",
      ],
    },
    {
      organization: "Alegria 2025",
      icon: "/Photos/Company/alegria.png",
      position: "Technical Team Member",
      type: "College Festival",
      duration: "Jan 2025 ",
      description:
        "Developed Flutter mobile app for Alegria 2025 and successfully deployed it on Play Store. Contributed to the creation of the festival website. Worked as part of the organizing committee that conducted 10+ technical workshops during the event.",
      skills: [
        "Flutter",
        "Mobile App Development",
        "Web Development",
        "Event Management",
      ],
      links: [
        {
          text: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.threads.alegria&hl=en_IN",
        },
        {
          text: "Website",
          url: "https://alegria.co.in/",
        },
      ],
    },
  ],
  experience: [
    {
      company: "Heizen (Gamma Opengig Work Pvt. Ltd.)",
      icon: "/Photos/Company/heizen.png", // add logo if available
      position: "SDE Intern",
      type: "Remote Internship",
      duration: "Jul 2025 - Oct 2025",
      description:
        "Developed and maintained full-stack web and mobile applications using Next.js, Express.js, and Expo React Native, ensuring seamless cross-platform performance across Android and iOS. Deployed applications to the Google Play Store and Apple App Store with OTA updates via Expo, containerized services using Docker, and configured GCP VM instances and Cloud Storage buckets following cloud-native best practices.",
      skills: [
        "Next.js",
        "Express.js",
        "React Native",
        "Expo",
        "Docker",
        "GCP",
        "Cloud Storage",
        "CI/CD",
      ],
    },
    {
      company: "TCiA Global",
      icon: "/Photos/Company/tciaglobal.png",
      position: "Cloud Computing Intern",
      type: "Remote Internship",
      duration: "Apr 2025 - Present",
      description:
        "Gained hands-on experience with major cloud platforms (AWS, GCP, Azure), implementing over 15 core services including compute, storage, and networking components to build scalable and resilient cloud-native applications.",
      skills: ["AWS", "Cloud Computing", "DevOps"],
    },
    {
      company: "ZapEat",
      icon: "/Photos/Company/zapeat.png",
      position: "React Native Developer",
      type: "Remote Internship",
      duration: "Jan 2025 - Mar 2025",
      description:
        "Contributing to the development of a seamless cross-platform mobile app by developing and optimizing UI/UX and integrating state management with React Native.",
      skills: ["React Native", "Expo", "Tailwind CSS", "Jotai"],
    },
    {
      company: "Dev N Brand",
      icon: "/Photos/Company/devnbrand.png",
      position: "Web Developer",
      type: "Remote Internship",
      duration: "Nov 2024 - Dec 2024",
      description:
        "Collaborated in building a dynamic, responsive Next.js-based portfolio platform, optimizing UI and user experience for professionals across various industries.",
      skills: ["ReactJs", "NodeJs", "NextJs", "TypeScript", "Bootstrap"],
    },
  ],
  contact: {
    phone: "+91 969 947 3589",
    email: "munirsiddiqui004@gmail.com",
    linkedin: "https://linkedin.com/in/munirsiddiqui54",
    github: "https://github.com/munirsiddiqui54",
    twitter: "https://x.com/M1077412",
  },
};

export default profileData;
