export interface Project {
    id: string;
    name: string;
    description: string;
    photo: string;
    date: string;
    status: "Completed" | "In Progress" | "Planned";
    stack: {
      skill: string;
      img: string;
    }[];
    keyPoints: string[];
    github: string;
    youtube:string,
    visit: string;
  }
  
  const projectArray: Project[] = [
    {
      id: "marks-prediction",
      name: "Marks Prediction",
      description:
        "This project is an end-to-end data science application aimed at predicting students' scores based on various demographic and educational features. The project leverages machine learning techniques and follows industry best practices, including structured folder organization, custom loggers, and custom exception handling.",
      photo: "/Photos/marks.jpeg", // Replace with marksPhoto variable when available
      date: "May 2024",
      status: "Completed",
      stack: [
        {
          skill: "Python",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          skill: "scikit-learn",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
        },
        {
          skill: "Pandas",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        },
        {
          skill: "NumPy",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        },
        {
          skill: "Jupyter Notebook",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
        },
        {
          skill: "Flask",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        },
      ],
      keyPoints: ["Model Training", "Data Processing"],
      github: "https://github.com/munirsiddiqui54/MLProject",
      visit: "https://mlproject-cevz.onrender.com/",
      youtube:""
    },
    {
      id: "aromas-haven",
      name: "Aromas Haven",
      description:
        "A Full-Stack e-commerce web application using MERN stack, users can place orders for their favourite perfumes. Website includes an integrated admin dashboard to manage orders and products",
      photo: "/Photos/aromasHaven.png", // Replace with aromasHavenImage variable when available
      date: "Nov 2023-Dec 2023",
      status: "Completed",
      stack: [
        {
          skill: "React JS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          skill: "Node JS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          skill: "MongoDB",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          skill: "Bootstrap",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
      keyPoints: ["Admin Dashboard", "Payment Gateway"],
      github: "https://github.com/munirsiddiqui54/AromasHaven",
      visit: "https://aromas-haven.vercel.app/",
      youtube:""
    },
    {
      id: "pet-compass",
      name: "Pet Compass",
      description:
        "A community-driven android app tailored for pet adoption, enabling pet owners seeking to rehome their pets to post listings while prospective adopters can browse and connect with them directly, fostering meaningful pet-owner matches.",
      photo: "/Photos/petCompass.png", // Replace with petComassImage variable when available
      date: "Jan 2024-Feb 2024",
      status: "Completed",
      stack: [
        {
          skill: "Kotlin",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        },
        {
          skill: "Android Studio",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
        },
        {
          skill: "Firebase",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
        },
      ],
      keyPoints: ["Admin Dashboard", "Payment Gateway"],
      github: "https://github.com/munirsiddiqui54/PetCompass",
      visit: "https://youtu.be/MQbftC2EqmU?si=we_TeKxHJet_N--o", 
      youtube:"https://youtu.be/MQbftC2EqmU?si=we_TeKxHJet_N--o"// Added YouTube link to visit field
    },
    {
      id: "aura-ai-powered-mat",
      name: "Aura- AI powered Mat",
      description:
        "The project significantly enhances traditional yoga practices by providing personalized, real-time feedback and guidance through the integration of AI and smartwatches. This innovative approach enriches the user experience and improves health monitoring during yoga sessions, making yoga more interactive, effective, and tailored to individual needs.",
      photo: "/Photos/aura.png", // Replace with aura variable when available
      date: "Aug 2024-Sept 2024",
      status: "Completed",
      stack: [
        {
          skill: "React Native",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          skill: "Gemini",
          img: "/placeholder.svg?height=32&width=32", // Replace with gemicon variable when available
        },
        {
          skill: "Firebase",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
        },
      ],
      keyPoints: ["Admin Dashboard", "Payment Gateway"],
      github: "https://github.com/munirsiddiqui54/Ai-YogaMat",
      visit: "https://youtu.be/-8zDv2EXZKo?feature=shared", 
      youtube:"https://youtu.be/-8zDv2EXZKo?feature=shared"// Added YouTube link to visit field
    },
    {
      id: "iot-agriculture",
      name: "IOT Agriculture",
      description:
        "An Android app fetches data from a real-time database where information is posted using an ESP32 with sensors reading soil properties. It includes an ML model to recommend suitable crops for the field. Additionally, a Gemini chatbot is integrated to assist farmers with their queries.",
      photo: "/Photos/iotAgriculture.png", // Replace with iotAgricultureImage variable when available
      date: "Mar 2024",
      status: "Completed",
      stack: [
        {
          skill: "Kotlin",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        },
        {
          skill: "Android Studio",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
        },
        {
          skill: "Firebase",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
        },
        {
          skill: "Python",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          skill: "Jupyter",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
        },
        {
          skill: "Flask",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        },
        {
          skill: "Gemini",
          img: "/placeholder.svg?height=32&width=32", // Replace with gemicon variable when available
        },
      ],
      keyPoints: ["Admin Dashboard", "Payment Gateway"],
      github: "https://github.com/munirsiddiqui54/AgricultureIOT",
      visit: "",
      youtube:""
    },
    {
      id: "plate-palette",
      name: "Plate Palette",
      description:
        "A user-friendly website for discovering recipes, crafted with HTML, CSS, and JavaScript, enriched with a pre-prepared API for seamless integration",
      photo: "/Photos/platePalette.png", // Replace with platePaletteImage variable when available
      date: "Dec 2022",
      status: "Completed",
      stack: [
        {
          skill: "HTML",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          skill: "CSS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          skill: "JavaScript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
      keyPoints: ["Admin Dashboard", "Payment Gateway"],
      github: "https://github.com/munirsiddiqui54/recipe-S",
      visit: "https://munirsiddiqui54.github.io/recipe-S/",
      youtube:""
    },
    {
      id: "flipkart-mobile-price-dashboard",
      name: "Flipkart Mobile Price Dashboard",
      description:
        "Developed an interactive dashboard to analyze phone data from Flipkart, featuring price comparison, brand popularity, and price distribution insights. Integrated visualizations like scatter plots, pie charts, and density plots, along with correlation and clustering analyses, to explore relationships and group similar products. This tool provides a clear view of price trends, market share, and brand influence, helping users make data-driven decisions.",
      photo: "/Photos/dashboard.png", // Replace with dashboardImage variable when available
      date: "Oct 2024",
      status: "Completed",
      stack: [
        {
          skill: "R programming",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-plain.svg",
        },
      ],
      keyPoints: ["Admin Dashboard", "Payment Gateway"],
      github: "https://github.com/munirsiddiqui54/dashboard",
      visit: "https://munirsiddiqui.shinyapps.io/mobile/",
      youtube:''
    },
    {
      id: "laksh-ai",
      name: "Laksh-AI",
      description:
        "A career guidance app designed to help users make informed career decisions and achieve their professional goals. 🚀 It offers personalized career recommendations, tailored learning roadmaps, and virtual internships to build relevant skills. Through mentorship, progress tracking, and an AI chatbot 🤖, LakshAI supports users at every step of their career journey.",
      photo: "/Photos/laksh.png", // Replace with laksh variable when available
      date: "Nov 2024",
      status: "In Progress", // Changed from "Near Completion" to match the allowed status values
      stack: [
        {
          skill: "NextJS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-plain.svg",
        },
        {
          skill: "AntDesign",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-plain.svg",
        },
        {
          skill: "Firebase",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
        },
        {
          skill: "Gemini",
          img: "/placeholder.svg?height=32&width=32", // Replace with gemicon variable when available
        },
      ],
      keyPoints: ["Admin Dashboard", "Payment Gateway"],
      github: "https://github.com/munirsiddiqui54/laksh-ai",
      visit: "https://laksh-ai.vercel.app/",
      youtube:''
    },
  ];
  
  export default projectArray;