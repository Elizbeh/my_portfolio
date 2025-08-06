import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
} from "lucide-react"

import { FiGithub, FiLinkedin, FiTwitter} from "react-icons/fi";

import PROJECT_IMG1 from "../assets/images/project1.png"
import PROJECT_IMG2 from "../assets/images/project2.png"
import PROJECT_IMG3 from "../assets/images/project3.png"
import PROJECT_IMG4 from "../assets/images/project4.png"
import PROJECT_IMG5 from "../assets/images/project5.png"
import PROJECT_IMG6 from "../assets/images/project6.png"
import PROJECT_IMG7 from "../assets/images/project7.png"

export const SKILLS_CATEGORY = [
    
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            {name: "React", Level: 80, color: "bg-blue-500"},
            {name: "TypeScript", level: 70, color: "bg-blue-600"},
            {name: "Next.js", level: 50, color: "bg-grey-800"},
            {name: "Tailwind CSS", level: 80, color: "bg-cyan-500"},
            {name: "Framer Motion", level: 50, color: "bg-pink-500"},
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            {name: "Node.js", Level: 80, color: "bg-green-500"},
            {name: "Express.js", level: 70, color: "bg-grey-700"},
            {name: "Python", level: 50, color: "bg-yellow-500"},
            {name: "Dart", level: 50, color: "bg-pink-500"},
            {name: "REST APIS", level: 80, color: "bg-cyan-600"},
        ],
    },
    {
        title: "Database",
        icon: Code2,
        description: "Managaing and optimising data storage",
        skills: [
            {name: "MongoDB", Level: 80, color: "bg-green-500"},
            {name: "Mysql", level: 80, color: "bg-blue-700"},
            {name: "Redis", level: 50, color: "bg-red-500"},
            {name: "Firebase", level: 80, color: "bg-indigo-500"},
            {name: "TiDB", level: 50, color: "bg-yellow-600"},
        ],
    },
    {
        title: "Devops",
        icon: Cloud,
        description: "Deploying and scaling applications",
        skills: [
            {name: "Docker", Level: 80, color: "bg-blue-600"},
            {name: "Git", level: 90, color: "bg-Orange-700"},
            {name: "CI/CD", level: 75, color: "bg-purple-500"},
            {name: "Render", level: 80, color: "bg-indigo-500"},
            {name: "TiDB", level: 50, color: "bg-grey-900"},
        ],
    },
]

export const TECH_STACK = [
    "Javascript",
    "HTML5",
    "CSS3",
    "Sass",
    "Vite",
    "Jest",
    "Cypress",
    "Figma",
    "Notion",
    "Slack",
];

export const STATS = [
    {number: "20+", label: "Projects Completed"},
    {number: "1+", label: "Years of Experience"},
    {number: "10+", label: "Tecnologies"},
    {number: "100%", label: "Client Satisfaction"},
]

export const PROJECTS = [
    {
        id: 1,
        title: "Recipe Sahring Platfrom",
        description: "A recipe sharing app using React, CSS, Node.js, Express, Javasccript, CI/CD integrated",
        image: PROJECT_IMG1,
        tags: ["React, Node.js", "MySQL"],
        liveUrl: "https://elizbeh.github.io/savorly-frontend",
        githubUrl: "a",
        featured: false,
        category: "Web App",
    },
     {
        id: 2,
        title: "E-commerce plateform using MERN stack",
        description: "A recipe sharing app using React, CSS, Node.js, Express, Javasccript, CI/CD integrated",
        image: PROJECT_IMG2,
        tags: ["MongoDB","Express", "React", "Node.js"],
        liveUrl: "#",
        githubUrl: "a",
        featured: false,
        category: "Web App",
    },
     {
        id: 3,
        title: "Recipe Sahring Platfrom",
        description: "A recipe sharing app using React, CSS, Node.js, Express, Javasccript, CI/CD integrated",
        image: PROJECT_IMG3,
        tags: ["React, Node.js", "MySQL"],
        liveUrl: "https://elizbeh.github.io/savorly-frontend",
        githubUrl: "a",
        featured: false,
        category: "Web App",
    },
     {
        id: 4,
        title: "Recipe Sahring Platfrom",
        description: "A recipe sharing app using React, CSS, Node.js, Express, Javasccript, CI/CD integrated",
        image: PROJECT_IMG4,
        tags: ["React, Node.js", "MySQL"],
        liveUrl: "https://elizbeh.github.io/savorly-frontend",
        githubUrl: "a",
        featured: false,
        category: "Web App",
    },
     {
        id: 5,
        title: "Recipe Sahring Platfrom",
        description: "A recipe sharing app using React, CSS, Node.js, Express, Javasccript, CI/CD integrated",
        image: PROJECT_IMG5,
        tags: ["React, Node.js", "MySQL"],
        liveUrl: "https://elizbeh.github.io/savorly-frontend",
        githubUrl: "a",
        featured: false,
        category: "Web App",
    },
     {
        id: 6,
        title: "Recipe Sahring Platfrom",
        description: "A recipe sharing app using React, CSS, Node.js, Express, Javasccript, CI/CD integrated",
        image: PROJECT_IMG6,
        tags: ["React, Node.js", "MySQL"],
        liveUrl: "https://elizbeh.github.io/savorly-frontend",
        githubUrl: "a",
        featured: false,
        category: "Web App",
    },
     {
        id: 7,
        title: "Recipe Sahring Platfrom",
        description: "A recipe sharing app using React, CSS, Node.js, Express, Javasccript, CI/CD integrated",
        image: PROJECT_IMG7,
        tags: ["React, Node.js", "MySQL"],
        liveUrl: "https://elizbeh.github.io/savorly-frontend",
        githubUrl: "a",
        featured: false,
        category: "Web App",
    },
]


export const JOURNEY_STEPS = [
    {
        year: "2023",
        title: "Strted Coding Journey",
        Company: "Holberton School",
        description: "Began learning computer foundamentals with C, Python, Html, CSS, Javascript",
        icon: Code2,
        color: "bg-blue-500"
    },
    {
        year: "2024",
        title: "Fullstack Specialization",
        Company: "Holberton School",
        description: "Went in for full stack specialization",
        icon: Code2,
        color: "bg-blue-500"
    },
    {
        year: "2025",
        title: "Got certified as an application designer developper equivalent to a bachelor's degree",
        Company: "RNCP",
        description: "Began learning computer foundamentals with C, Python, Html, CSS, Javascript",
        icon: Code2,
        color: "bg-blue-500"
    },
    {
        year: "2014",
        title: "BA in french",
        Company: "Ambrose Ali University",
        description: "Began learning computer foundamentals with C, Python, Html, CSS, Javascript",
        icon: Code2,
        color: "bg-blue-500"
    },
]

export const PASSIONS =  [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love",
    },

    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning complex chanllenges into elelgant solutions",
    },
    {
        icon: BookOpen,
        title: "Continious Learning",
        description: "Always exploring new technologies and best practices",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "GithHub",
        icon: FiGithub,
        url: "https://github.com",
        color: "hover:text-gray-400",
        bgColor: "hover:big-gray-800",
    },
     {
        name: "LinkedIn",
        icon: FiLinkedin,
        url : "https://linkedin.com",
        color: "hover:text-gray-400",
        bgColor: "hover:big-gray-800",
    },
     {
        name: "Twitter",
        icon: FiTwitter,
        url : "https://twitter.com",
        color: "hover:text-gray-400",
        bgColor: "hover:big-gray-800",
    },
         {
        name: "Email",
        icon: FiTwitter,
        url : "mailto:eliz01_01@example.com",
        color: "hover:text-gray-400",
        bgColor: "hover:big-gray-800",
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Ile-de-france, France",
    },
    {
        icon: Mail,
        label: "Email",
        value: "mailto:eliz01_01@example.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+33698926814",
    }
] 

