// ─────────────────────────────────────────────
// Portfolio data — edit here to update content
// ─────────────────────────────────────────────

import { image } from 'framer-motion/client'
import proj01 from '../assets/project-01.png'
import proj02 from '../assets/project-02.png'
import proj03 from '../assets/project-03.png'

export const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume',   href: '#resume'   },
  { label: 'Contact',  href: '#contact'  },
]

export const HERO = {
  eyebrow: "Hello, I'm",
  firstName: 'Karan',
  lastName: 'Shakarwal',
  tagline: 'MERN Stack Developer / Problem Solver / Tech Enthusiast',
  cta: [
    { label: 'View Projects', href: '#projects', variant: 'primary' },
    { label: 'Download Resume', href: '/KaranShakarwal_ResumeFinal.pdf', variant: 'outline', download: true },
  ],
}

export const ABOUT = {
  badge: 'B.Tech IT · 2027',
  heading: 'Turning ideas\ninto products.',
  paragraphs: [
    "I'm Karan Shakarwal, a developer who enjoys taking an idea from concept to a working application. I work with modern web technologies and love solving problems that challenge me to think differently.",
    "I'm always looking for the next problem to solve, the next technology to learn, and the next product to build.",
  ],
  meta: [
    { label: 'Location',  value: 'Jaipur, India',    type: 'text'      },
    { label: 'Education', value: 'JECRC · IT',        type: 'text'      },
    { label: 'Available', value: 'Open to roles',     type: 'available' },
  ],
}

export const SKILLS = [
  {
    category: 'Web Development',
    chips: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    category: 'Languages',
    chips: ['C', 'C++', 'Python'],
  },
  {
    category: 'Databases',
    chips: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    chips: ['Git', 'GitHub', 'VS Code', 'REST APIs'],
  },
]

export const PROJECTS = [
  {
    number: '01',
    image: proj03,
    title: 'PrepPilot - Placement Preparation Platform',
    description:
      'A dynamicPrepPilot is a placement preparation tracker that helps engineering students organize their job applications, DSA practice, resumes, and interview preparation in one place. It includes AI-powered interview question generation using Google Gemini API.',
    stack: ['React', 'Vite', 'Tailwind Css', 'Nodejs', 'MongoDB'],
    github: 'https://github.com/karan-21-web/PLACEMENT-PREPRATION-PROJECT',
    live: 'https://placement-prepration-project.vercel.app/', 
    
  },
   {
    number: '02',
     image: proj01,
    title: 'NewsHub AI – Real-Time News Web App',
    description:
      'Developed a responsive real-time news application consuming the GNews API with dynamic category-wise and city-wise filtering.',
    stack: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'API'],
    github: 'https://github.com/karan-21-web/NewsHub-AI',
     live: 'https://news-hub-ai-neon.vercel.app/', 
  },
 
   {
    number: '03',
   image: proj02,
    title: 'Virtual Password Authentication System',
    description:
      'A dynamic virtual keyboard-based login system designed to mitigate phishing and keylogging attacks. Implements client-side secure authentication logic with a clean, intuitive UI.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/karan-21-web/Dynamic-Virtual-Password-System',
    live: '#',
    
  },
]

export const CONTACT = {
  heading: "Let's talk.",
  sub: 'Have a role, project, or question? My inbox is open.',
  items: [
    {
      icon: '✉',
      label: 'Email',
      display: 'karanshakarwal.it27@gmail.com',
      href: 'mailto:karanshakarwal.it27@gmail.com',
    },
    {
      icon: 'in',
      label: 'LinkedIn',
      display: 'linkedin.com/in/karanshakarwal',
      href: 'https://www.linkedin.com/in/karan-shakarwal-872282295',
    },
    {
      icon: '</>', 
      label: 'GitHub',
      display: 'github.com/karanshakarwal',
      href: 'https://github.com/karan-21-web',
    },
  ],
}
