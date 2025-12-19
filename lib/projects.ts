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
  youtube?: string;
  visit: string;
  playstore?: string;
}

const projectArray: Project[] = [
  //Live Polling System
  {
    id: "live-polling-system",
    name: "Live Polling & Chat System",
    description:
      "An event-driven real-time polling and chat application featuring teacher and student dashboards with instant vote updates and messaging using WebSockets.",
    photo: "/Photos/livePolling.png", // replace with actual image if available
    date: "Dec 2024",
    status: "Completed",
    stack: [
      {
        skill: "React.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        skill: "Vite",
        img: "https://vitejs.dev/logo.svg",
      },
      {
        skill: "Node.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        skill: "Express.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        skill: "Socket.io",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      },
      {
        skill: "Docker",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        skill: "AWS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        skill: "Nginx",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
    ],
    keyPoints: [
      "Implemented real-time polling and chat using Socket.io with an event-driven architecture.",
      "Built separate teacher and student dashboards with live vote synchronization.",
      "Organized backend into socket handlers, service layers, and utility modules for maintainability.",
      "Containerized frontend and backend using Docker and Docker Compose.",
      "Deployed on AWS EC2 with Nginx serving the frontend on port 80 and backend on port 3001.",
    ],
    github: "https://github.com/munirsiddiqui54/live-polling-system", // update if different
    visit: "http://54.91.83.214/",
    youtube: "",
  },
  //IOT agriculture
  {
    id: "iot-agriculture",
    name: "IOT Agriculture",
    description:
      "An Android app fetches data from a real-time database where information is posted using an ESP32 with sensors reading soil properties. It includes an ML model to recommend suitable crops for the field. Additionally, a Gemini chatbot is integrated to assist farmers with their queries.",
    photo: "/Photos/IotAgriculture.png", // Replace with iotAgricultureImage variable when available
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
        skill: "C++",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
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
    keyPoints: [
      "Used DHT11 (Temperature & Humidity), Soil Moisture Sensor, and LDR (Light Sensor) for real-time field monitoring.",
      "Relay module controls motor (water pump) automatically based on soil moisture levels.",
      "Sensor data is sent from ESP8266 (using C++) to Firebase Realtime Database for cloud storage and retrieval.",
      "Android app (built in Kotlin) allows farmers to view live data from anywhere, anytime.",
      "An ML model analyzes sensor data and recommends the most suitable crop for the current soil and weather conditions.",
      "Integrated Gemini-powered chatbot helps farmers with crop selection, irrigation advice, and weather-based suggestions.",
    ],
    github: "https://github.com/munirsiddiqui54/AgricultureIOT",
    visit: "",
    youtube: "",
  },
  // Aromas Haven
  {
    id: "aromas-haven",
    name: "Aromas Haven",
    description:
      "A Full-Stack e-commerce web application using the MERN stack. Users can browse, purchase perfumes, and place orders. The platform includes an integrated admin dashboard for shop owners to manage products, orders, and user interactions.",
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
        skill: "Express JS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
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
    keyPoints: [
      "Responsive user interface built with React and Bootstrap for seamless browsing across devices.",

      "Secure user authentication system for account creation and login.",
      "Admin login dashboard for shop owners to manage the store.",
      "CRUD operations on products: add, update, or delete product listings.",
      "Order management system: view incoming orders and track order history.",
      "User management: view and manage registered users.",
      "MongoDB used as database to persist products, orders, and user data.",
      "Node.js and Express.js for backend RESTful APIs and server-side logic.",
    ],
    github: "https://github.com/munirsiddiqui54/AromasHaven",
    visit: "https://aromas-haven.vercel.app/",
    youtube: "",
  },
  //Pet Compass
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
    keyPoints: [
      "Built as an Android Application using Kotlin",
      "Used Material UI components for a clean and modern interface",
      "Implemented real-time Chat System between users",
      "Community support feature to post pets and chat based on interests",
      "Users can send adoption requests directly to pet owners",
    ],
    github: "https://github.com/munirsiddiqui54/PetCompass",
    visit: "https://youtu.be/MQbftC2EqmU?si=we_TeKxHJet_N--o",
    youtube: "https://youtu.be/MQbftC2EqmU?si=we_TeKxHJet_N--o",
  },
  //Aura- AI powered Mat
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
    youtube: "https://youtu.be/-8zDv2EXZKo?feature=shared", // Added YouTube link to visit field
  },
  //Serverless Todo app
  {
    id: "serverless-todo-app",
    name: "Serverless To-Do App",
    description:
      "This project demonstrates a fully serverless architecture using Flutter for the frontend and AWS services for the backend. The app allows users to manage tasks in real-time with data stored in DynamoDB, business logic handled by AWS Lambda, and secure RESTful APIs managed through API Gateway. The serverless design ensures scalability, low maintenance, and cost-efficiency.",
    photo: "/Photos/todo.png", // Replace with actual image variable when available
    date: "Feb 2025",
    status: "Completed",
    stack: [
      {
        skill: "Flutter",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        skill: "AWS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
    ],
    keyPoints: [
      "Task CRUD Operations",
      "Serverless Architecture",
      "Realtime Sync",
    ],
    github: "https://github.com/munirsiddiqui54/serverless-todo",
    visit: "",
    youtube: "",
  },

  //Alegria Mobile App
  {
    id: "alegria-app",
    name: "Alegria Mobile App",
    description:
      "I developed and deployed the official Alegria College Fest app using Flutter, available on the Play Store for Android and as a PWA for iOS and web. The app featured pass booking, social posts, event participation tracking, and an admin panel for real-time updates—showcasing my full-stack mobile development and cross-platform deployment skills.",
    photo: "/Photos/alegriaapp.png", // Replace with actual image path or variable when available
    date: "Jan 2025",
    status: "Completed",
    stack: [
      {
        skill: "Flutter",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        skill: "Firebase",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      },
    ],
    keyPoints: [
      "Cross-Platform Development",
      "Mood Tracking",
      "Mindfulness Exercises",
    ],
    github: "https://github.com/munirsiddiqui54/Alegria-app", // Replace with actual GitHub repository link
    visit: "https://app.alegria.co.in/", // Replace with actual Play Store link
    youtube: "", // Replace with actual YouTube demo link
    playstore:
      "https://play.google.com/store/apps/details?id=com.threads.alegria&hl=en_IN",
  },

  //Marks Prediction
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
    keyPoints: [
      "Data Ingestion: Loading and preprocessing raw data.",
      "Data Transformation: Feature engineering and data transformation.",
      "Model Training: Training machine learning models to predict student scores.",
      "Logging: Custom logging to track the pipeline execution.",
      "Exception Handling: Custom exceptions to handle errors gracefully.",
    ],
    github: "https://github.com/munirsiddiqui54/MLProject",
    visit: "https://mlproject-cevz.onrender.com/",
    youtube: "",
  },

  //Flipkart price dashboard
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
    youtube: "",
  },
  //Laksh AI
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
    youtube: "",
  },
  //Plate palette
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
    youtube: "",
  },
];

export default projectArray;
