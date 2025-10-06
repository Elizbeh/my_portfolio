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

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

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
            { name: "React", level: 80, color: "bg-purple-500" },
            { name: "TypeScript", level: 60, color: "bg-blue-600" },
            { name: "HTML", level: 85, color: "bg-green-800" },
            { name: "Tailwind CSS", level: 80, color: "bg-cyan-500" },
            { name: "Framer Motion", level: 50, color: "bg-pink-500" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            { name: "Node.js", level: 80, color: "bg-green-500" },
            { name: "Express.js", level: 70, color: "bg-amber-700" },
            { name: "Python", level: 50, color: "bg-yellow-500" },
            { name: "Dart", level: 50, color: "bg-pink-500" },
            { name: "REST APIS", level: 80, color: "bg-cyan-600" },
        ],
    },
    {
        title: "Database",
        icon: Code2,
        description: "Managing and optimising data storage",
        skills: [
            { name: "MongoDB", level: 80, color: "bg-green-500" },
            { name: "Mysql", level: 80, color: "bg-blue-700" },
            { name: "Redis", level: 50, color: "bg-red-500" },
            { name: "Firebase", level: 60, color: "bg-indigo-500" },
            { name: "TiDB", level: 60, color: "bg-yellow-600" },
        ],
    },
    {
        title: "Devops",
        icon: Cloud,
        description: "Deploying and scaling applications",
        skills: [
            { name: "Docker", level: 70, color: "bg-blue-600" },
            { name: "Git", level: 80, color: "bg-orange-700" },
            { name: "CI/CD", level: 70, color: "bg-purple-500" },
            { name: "Render", level: 80, color: "bg-indigo-500" },
            { name: "TiDB", level: 50, color: "bg-yellow-900" },
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
    "canva",
    "Slack",
    "Trello",
    "Lucidchart",

];

export const STATS = [
    { number: "15+", label: "Projects Completed (Training)" },
    { number: "2", label: "Year of Training" },
    { number: "10+", label: "Technologies Learned" },
    { number: "100%", label: "Training Completion Rate" },
]

export const PROJECTS = [
    {
        id: 1,
        title: "Savorly",
        description: "Full-stack recipe sharing app using React, Node.js, MySQL; deployed on GitHub Pages, Render, and TiDB Cloud.",
        image: PROJECT_IMG1,
        tags: ["React", "Node.js", "MySQL"],
        liveUrl: "https://elizbeh.github.io/savorly-frontend",
        githubUrl: "a",
        featured: true,
        category: "Web App",
    },
    {
        id: 2,
        title: "HabitWise",
        description: "Mobile app for personal and collective goal tracking with real-time sync via Firebase, built with Flutter and Provider.",
        image: PROJECT_IMG2,
        tags: ["Flutter", "Firebase", "Dart"],
        liveUrl: "#",
        githubUrl: "https://github.com/Elizbeh/habitwise",
        featured: false,
        category: "Mobile App",
    },
    {
        id: 3,
        title: "Gabbeth Interiors",
        description: "E-commerce platform for furniture sales with Stripe payment integration and Cloudinary for image management.",
        image: PROJECT_IMG3,
        tags: ["React", "Node.js", "Stripe", "Cloudinary"],
        liveUrl: "#",
        githubUrl: "a",
        featured: false,
        category: "Web App",
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "Personal portfolio showcasing projects, skills, and development journey.",
        image: PROJECT_IMG4,
        tags: ["React", "CSS", "JavaScript"],
        liveUrl: "#",
        githubUrl: "https://github.com/Elizbeh/my_portfolio",
        featured: false,
        category: "Web App",
    },
   {
    id: 5,
    title: "Color Scheme Generator",
    description: "A web app that generates color palettes based on a selected color and mode. Users can copy hex codes to use in their designs.",
    image: PROJECT_IMG5,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    liveUrl: "https://color-scheme-master.netlify.app/",
    githubUrl: "https://github.com/Elizbeh/color-scheme-master",
    featured: false,
    category: "Web App",
},
{
    id: 6,
    title: "Game of War",
    description: "A web-based card game where players compete against the computer by drawing cards. Scores are tracked and the game announces round and overall winners.",
    image: PROJECT_IMG6,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    liveUrl: "https://your-netlify-link.netlify.app/",
    githubUrl: "https://github.com/Elizbeh/game-of-war",
    featured: false,
    category: "Web App",
},

    {
    id: 7,
    title: "Meme Picker",
    description: "A web app that lets users select their current emotion and fetch a meme or GIF that matches it. Includes options to filter for animated GIFs only.",
    image: PROJECT_IMG7,
    tags: ["HTML", "CSS", "JavaScript",],
    liveUrl: "https://meme-picker0.netlify.app/",
    githubUrl: "https://github.com/Elizbeh/meme_picker",
    featured: false,
    category: "Web App",
},



];


export const JOURNEY_STEPS = [
    {
        year: "2009 - 2014",
        title: "Bachelor of Arts (French)",
        Company: "Ambrose Alli University, Ekpoma, Nigeria",
        description: "Earned a BA in French, developing strong communication, research, and analytical skills.",
        icon: GraduationCap,
        color: "bg-blue-500"
    },
    {
    year: "2015 - 2016",
    title: "French Teacher – National Youth Service Corps",
    Company: "Abraka, Delta, Nigeria",
    description: "Taught French language classes, developing strong communication, leadership, and adaptability skills in a dynamic environment.",
    icon: Briefcase,
    color: "bg-green-500"
    },

    {
        year: "2022 - 2024",
        title: "Full-Stack Developer Training",
        Company: "Holberton School Paris, France",
        description: "Completed two-year program: Year 1 in Computer Science Fundamentals, Year 2 in Full-Stack Development",
        icon: Code2,
        color: "bg-blue-700"
    },
    {
    year: "2025",
    title: "RNCP Niveau 6 – Concepteur Développeur d’Applications",
    Company: "France Compétences",
    description: "Completed Holberton full-stack specialization and prepared for the official RNCP state certification exam.",
    icon: Award,
    color: "bg-blue-500"
}

];




export const PASSIONS = [
    {
    icon: Heart,
    title: "User Experience",
    description: "Creating intuitive and user-friendly interfaces",
    },

    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Eager to tackle challenges with thoughtful and practical solutions",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Committed to growing skills by exploring new technologies and best practices",
    },
];


export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/Elizbeh",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/elizabeth-behaghel/",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "Twitter",
        icon: FiTwitter,
        url: "#",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:elizabethbehaghel@gmail.com",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Ile-de-France, France",
    },
    {
        icon: Mail,
        label: "Email",
        value: "elizabethbehaghel@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+33 6 98 92 68 13",
    }
]
