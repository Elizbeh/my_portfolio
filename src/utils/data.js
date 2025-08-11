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
            { name: "TypeScript", level: 70, color: "bg-blue-600" },
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
            { name: "Firebase", level: 80, color: "bg-indigo-500" },
            { name: "TiDB", level: 50, color: "bg-yellow-600" },
        ],
    },
    {
        title: "Devops",
        icon: Cloud,
        description: "Deploying and scaling applications",
        skills: [
            { name: "Docker", level: 80, color: "bg-blue-600" },
            { name: "Git", level: 90, color: "bg-orange-700" },
            { name: "CI/CD", level: 75, color: "bg-purple-500" },
            { name: "Render", level: 80, color: "bg-indigo-500" },
            { name: "TiDB", level: 50, color: "bg-grey-900" },
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
    { number: "20+", label: "Projects Completed" },
    { number: "1+", label: "Years of Experience" },
    { number: "10+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" },
]

export const PROJECTS = [
    {
        id: 1,
        title: "Recipe Sharing Platform",
        description: "A recipe sharing app using React, CSS, Node.js, Express, JavaScript, CI/CD integrated",
        image: PROJECT_IMG1,
        tags: ["React", "Node.js", "MySQL"],
        liveUrl: "https://elizbeh.github.io/savorly-frontend",
        githubUrl: "a",
        featured: false,
        category: "Web App",
    },
    {
        id: 2,
        title: "E-commerce platform using MERN stack",
        description: "An e-commerce app for furniture sales with payments via Stripe and image management via Cloudinary",
        image: PROJECT_IMG2,
        tags: ["MongoDB", "Express", "React", "Node.js"],
        liveUrl: "#",
        githubUrl: "a",
        featured: false,
        category: "Web App",
    },
    {
        id: 3,
        title: "HabitWise",
        description: "Mobile app for personal and collective goal tracking with real-time sync via Firebase, built with Flutter and Provider",
        image: PROJECT_IMG3,
        tags: ["Flutter", "Firebase", "Dart"],
        liveUrl: "#",
        githubUrl: "a",
        featured: false,
        category: "Mobile App",
    },
    {
        id: 4,
        title: "Holbegram",
        description: "Mobile app to upload and share images in a school project using Flutter and Firebase",
        image: PROJECT_IMG4,
        tags: ["Flutter", "Firebase", "Dart"],
        liveUrl: "#",
        githubUrl: "a",
        featured: false,
        category: "Mobile App",
    },
    {
        id: 5,
        title: "Savorly",
        description: "Full-stack recipe sharing app using React, Node.js, MySQL; deployed on GitHub Pages, Render, and TiDB Cloud",
        image: PROJECT_IMG5,
        tags: ["React", "Node.js", "MySQL"],
        liveUrl: "https://elizbeh.github.io/savorly-frontend",
        githubUrl: "a",
        featured: true,
        category: "Web App",
    },
    {
        id: 6,
        title: "Gabbeth Interiors",
        description: "E-commerce platform for furniture sales with Stripe payment integration and Cloudinary for image management",
        image: PROJECT_IMG6,
        tags: ["React", "Node.js", "Stripe", "Cloudinary"],
        liveUrl: "#",
        githubUrl: "a",
        featured: false,
        category: "Web App",
    },
    {
        id: 7,
        title: "Recipe Sharing Platform (Duplicate)",
        description: "A recipe sharing app using React, CSS, Node.js, Express, JavaScript, CI/CD integrated",
        image: PROJECT_IMG7,
        tags: ["React", "Node.js", "MySQL"],
        liveUrl: "https://elizbeh.github.io/savorly-frontend",
        githubUrl: "a",
        featured: false,
        category: "Web App",
    },
]

export const JOURNEY_STEPS = [
    {
        year: "2001 - 2007",
        title: "Secondary School Leaving Certificate",
        Company: "Army Day Secondary School, Owode, Nigeria",
        description: "Completed secondary education laying foundational skills.",
        icon: GraduationCap,
        color: "bg-blue-500"
    },
    {
        year: "2009 - 2014",
        title: "Bachelor of Arts (French)",
        Company: "Ambrose Alli University, Ekpoma, Nigeria",
        description: "Graduated with a BA in French, providing strong language and communication skills.",
        icon: GraduationCap,
        color: "bg-blue-500"
    },
    {
        year: "2015 - 2016",
        title: "French Teacher - National Youth Service Corps",
        Company: "Abraka, Delta, Nigeria",
        description: "Taught French, developing communication and leadership skills.",
        icon: Briefcase,
        color: "bg-green-500"
    },
    {
        year: "2012 (Aug - Nov)",
        title: "Internship - English Tutor",
        Company: "AIESEC Abidjan, Côte d'Ivoire",
        description: "Tutored English, enhancing teaching and interpersonal skills.",
        icon: Briefcase,
        color: "bg-green-500"
    },
    {
        year: "2022 - 2024",
        title: "Concepteur Développeur d’applications (in progress)",
        Company: "Holberton School Paris, France",
        description: "Full-stack developer training, acquiring solid software development fundamentals and practical project experience.",
        icon: Code2,
        color: "bg-blue-700"
    },
    {
        year: "2023",
        title: "Started Coding Journey",
        Company: "Holberton School",
        description: "Began learning computer fundamentals with C, Python, HTML, CSS, JavaScript.",
        icon: Code2,
        color: "bg-blue-500"
    },
    {
        year: "2024",
        title: "Fullstack Specialization",
        Company: "Holberton School",
        description: "Specialized in full-stack development.",
        icon: Code2,
        color: "bg-blue-500"
    },
    {
        year: "2025",
        title: "Certified Application Designer Developer (RNCP)",
        Company: "RNCP",
        description: "Achieved certification equivalent to a Bachelor's degree.",
        icon: Award,
        color: "bg-blue-700"
    },
]

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning complex challenges into elegant solutions",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Always exploring new technologies and best practices",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/elizbeh",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://linkedin.com/in/elizbeh",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "Twitter",
        icon: FiTwitter,
        url: "https://twitter.com/elizbeh",
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
