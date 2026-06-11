// ─────────────────────────────────────────────
// Portfolio data — edit here to update content
// ─────────────────────────────────────────────


import proj01 from '../assets/project-01.png'
import proj02 from '../assets/project-02.png'

export const PROJECTS = [
  {
    number: '01',
    image: proj01,   // ← ADD THIS
    // ... rest unchanged
  },
  {
    number: '02',
    image: proj02,   // ← ADD THIS
    // ...
  },
]

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
  tagline: 'Aspiring Software Developer / Problem Solver / Web Enthusiast',
  cta: [
    { label: 'View Projects', href: '#projects', variant: 'primary' },
    { label: 'Download Resume', href: '/KaranShakarwal_ResumeFinal.pdf', variant: 'outline', download: true },
  ],
}

export const ABOUT = {
  badge: 'B.Tech IT · 2027',
  heading: 'Building things\nfor the web.',
  paragraphs: [
    "I'm a Final-Year B.Tech Information Technology student at Jaipur Engineering College and Research Centre, currently maintaining a CGPA of 8.25. I enjoy crafting responsive, accessible web experiences and solving algorithmic challenges.",
    "Beyond coding, I've represented my college at the Smart India Hackathon and coordinated large-scale academic events — experiences that shaped my ability to collaborate under pressure and think end-to-end about a product.",
    "I'm actively seeking opportunities where I can contribute meaningful work, grow fast, and be around people who care deeply about what they build.",
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
    title: 'Virtual Password Authentication System',
    description:
      'A dynamic virtual keyboard-based login system designed to mitigate phishing and keylogging attacks. Implements client-side secure authentication logic with a clean, intuitive UI.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/karan-21-web/Dynamic-Virtual-Password-System',
    live: 'https://news-hub-ai-neon.vercel.app/', 
  },
  {
    number: '02',
    title: 'NewsHub AI – Real-Time News Web App',
    description:
      'Developed a responsive real-time news application consuming the GNews API with dynamic category-wise and city-wise filtering.',
    stack: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'API'],
    github: 'https://github.com/karan-21-web/NewsHub-AI',
     live: 'https://news-hub-ai-neon.vercel.app/', 
  },
  {
    number: '03',
    title: 'SIH Hackathon Prototype',
    description:
      'Collaborated in a 6-member team at Smart India Hackathon to design and prototype a real-world problem solution under strict time constraints — from ideation to a working demo.',
    stack: ['React.js', 'Python', 'MongoDB'],
    github: 'https://github.com/karanshakarwal',
    live: 'https://news-hub-ai-neon.vercel.app/', 
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
