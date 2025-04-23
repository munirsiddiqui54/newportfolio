export interface Skill {
    skill: string;
    img: string;
  }
  
  export interface SkillCategory {
    category: string;
    domain: string;
    skills: Skill[];
  }


  const skillsArray: SkillCategory[] = [
    {
        category: "languages",
        domain: "LANGUAGES",
        skills: [
          {
            skill: "JavaScript",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          },
          {
            skill: "TypeScript",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          },
          {
            skill: "Python",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          },
          {
            skill: "Kotlin",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
          },
          {
            skill: "Java",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          },
        ],
      },
      {
        category: "frontend",
        domain: "FRONTEND",
        skills: [
          {
            skill: "React",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            skill: "Next.js",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          },
          {
            skill: "Tailwind CSS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          },
          {
            skill: "HTML",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          },
          {
            skill: "CSS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          },
          {
            skill: "Bootstrap",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          },
        ],
      },
      {
        category: "backend",
        domain: "BACKEND",
        skills: [
          {
            skill: "Node.js",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          },
          {
            skill: "Express JS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          },
          {
            skill: "Flask",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
          },
        ],
      },
      {
        category: "mobile",
        domain: "MOBILE APP DEVELOPMENT",
        skills: [
          {
            skill: "Android (Kotlin/Java)",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
          },
          {
            skill: "React Native",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            skill: "Jetpack Compose",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-plain.svg",
          },
        ],
      },
      {
        category: "databases",
        domain: "DATABASES",
        skills: [
          {
            skill: "MongoDB",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          },
          {
            skill: "PostgreSQL",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          },
          {
            skill: "Firebase",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
          },
        ],
      },
      {
        category: "deployment",
        domain: "DEPLOYMENT & TOOLS",
        skills: [
          {
            skill: "Git",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          },
          {
            skill: "AWS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
          },
          {
            skill: "Docker",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          },
          {
            skill: "Firebase",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
          },
          {
            skill: "Postman",
            img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
          },
          {
            skill: "Figma",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          },
        ],
      },
  ]

  export default skillsArray