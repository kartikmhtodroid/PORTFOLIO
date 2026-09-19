import type {
  PersonalDetails,
  SkillCategory,
  Project,
  Experience,
  Service,
} from '../types'

export const personalDetails: PersonalDetails = {
  name: 'Kartik Mahato',

  role: 'B.Tech CSE Student & Creative Developer',

  tagline:
    'Computer Science student building web experiences and exploring creative technology.',

  bio:
    'I am a B.Tech Computer Science Engineering student at SVIET, Chandigarh. I enjoy learning through practical projects, building websites, exploring JavaScript and React, and combining technology with graphic design and creative work.',

  subBio:
    'Currently focused on strengthening my web development skills, learning JavaScript and React, improving my design skills, and building projects that turn ideas into something people can actually use.',

  location: 'Chandigarh, India',

  email: 'kartikmahatosviet@gmail.com',

  phone: '',

  status: 'Open to Internship Opportunities',

  availableForHire: true,

  socials: {
    github: 'https://github.com/kartikmhtodroid',
    linkedin: 'https://www.linkedin.com/in/kartik-mahato-bokaro99/',
    twitter: '',
    email: 'mailto:kartikmahatosviet@gmail.com',
  },

  stats: [
    {
      label: 'Degree',
      value: 'B.Tech CSE',
      description: 'Computer Science Engineering student',
    },
    {
      label: 'Graduation',
      value: '2029',
      description: 'Expected graduation year',
    },
    {
      label: 'Projects',
      value: '2',
      description: 'Personal projects currently being developed',
    },
    {
      label: 'Focus',
      value: 'Learning',
      description: 'Building skills through practical projects',
    },
  ],
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Web Development',
    description:
      'Building responsive websites while strengthening my frontend development skills.',
    skills: [
      { name: 'HTML5', level: 75, popular: true },
      { name: 'CSS3', level: 70, popular: true },
      { name: 'JavaScript', level: 60, popular: true },
      { name: 'React', level: 50, popular: true },
      { name: 'TypeScript', level: 40 },
      { name: 'Tailwind CSS', level: 50 },
      { name: 'Vite', level: 45 },
    ],
  },

  {
    category: 'Programming',
    description:
      'Programming fundamentals, problem solving, and computer science concepts.',
    skills: [
      { name: 'C++', level: 65, popular: true },
      { name: 'JavaScript', level: 60, popular: true },
      { name: 'Data Structures & Algorithms', level: 50 },
    ],
  },

  {
    category: 'UI & Graphic Design',
    description:
      'Creating visual designs, interfaces, and creative digital content.',
    skills: [
      { name: 'Graphic Design', level: 70, popular: true },
      { name: 'UI Design', level: 65, popular: true },
      { name: 'Visual Design', level: 65 },
      { name: '2D Illustration', level: 50 },
    ],
  },

  {
    category: 'Design Tools',
    description:
      'Tools used for design, visual content, audio, and creative projects.',
    skills: [
      { name: 'Figma', level: 60, popular: true },
      { name: 'Canva', level: 70, popular: true },
      { name: 'Adobe Photoshop', level: 60 },
      { name: 'Adobe Illustrator', level: 55 },
      { name: 'Adobe Audition', level: 50 },
    ],
  },

  {
    category: 'Development Tools',
    description:
      'Tools and platforms used while learning and building personal projects.',
    skills: [
      { name: 'Git', level: 55, popular: true },
      { name: 'GitHub', level: 55, popular: true },
      { name: 'VS Code', level: 75 },
      { name: 'GitHub Pages', level: 50 },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'personal-portfolio',

    title: 'Personal Portfolio',

    tagline:
      'A personal portfolio website showcasing my development and creative work.',

    description:
      'A responsive portfolio website built to showcase my skills, projects, learning journey, and creative work.',

    fullDescription:
      'This portfolio is a personal project built while learning modern web development. It uses React, TypeScript, Tailwind CSS, and Vite, and is deployed using GitHub Pages.',

    category: 'Web Development',

    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'GitHub Pages',
    ],

    liveUrl: 'https://kartikmhtodroid.github.io/PORTFOLIO/',

    githubUrl: 'https://github.com/kartikmhtodroid/PORTFOLIO',

    featured: true,

    metrics: 'Personal learning project',

    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  },

  {
    id: 'project-radio',

    title: 'Project Radio',

    tagline:
      'A music-focused web project designed for discovering and listening to music.',

    description:
      'A personal web project exploring how to build a free music experience with a clean interface and background playback in mind.',

    fullDescription:
      'Project Radio is an ongoing personal project where I am learning web development by building a music-focused website. The project is helping me practice HTML, CSS, JavaScript, React, responsive design, APIs, and user interface development.',

    category: 'Web Development',

    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'API',
      'Responsive Design',
    ],

    liveUrl: '',

    githubUrl: '',

    featured: true,

    metrics: 'Currently in development',

    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80',
  },

  {
    id: 'coming-soon-1',

    title: 'Coming Soon',

    tagline: 'Another project is on the way.',

    description:
      'A new project will be added here as I continue learning and building.',

    fullDescription:
      'This project slot is reserved for a future personal project.',

    category: 'Coming Soon',

    tags: ['Coming Soon'],

    liveUrl: '',

    githubUrl: '',

    featured: false,

    metrics: 'Coming soon',

    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },

  {
    id: 'coming-soon-2',

    title: 'Coming Soon',

    tagline: 'More work will be added here.',

    description:
      'A future project currently in the planning or learning stage.',

    fullDescription:
      'This project slot is reserved for a future personal project.',

    category: 'Coming Soon',

    tags: ['Coming Soon'],

    liveUrl: '',

    githubUrl: '',

    featured: false,

    metrics: 'Coming soon',

    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  },
]

export const experiences: Experience[] = [
  {
    id: 'education',

    role: 'B.Tech Computer Science Engineering Student',

    company: 'SVIET',

    location: 'Chandigarh, India',

    period: '2025 — 2029',

    current: true,

    description: [
      'Currently pursuing a Bachelor of Technology in Computer Science Engineering.',
      'Learning programming, data structures, web development, and computer science fundamentals.',
      'Building personal projects to apply what I learn through practical development.',
      'Exploring web development, graphic design, and creative technology.',
    ],

    technologies: [
      'C++',
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'Git',
      'GitHub',
    ],
  },

  {
    id: 'personal-projects',

    role: 'Independent Project Development',

    company: 'Personal Projects',

    location: 'Remote',

    period: '2026 — Present',

    current: true,

    description: [
      'Building personal projects to develop practical programming and design skills.',
      'Currently working on a personal portfolio and Project Radio.',
      'Learning by designing, coding, testing, debugging, and improving projects.',
      'Exploring the combination of web development and creative design.',
    ],

    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Git',
      'GitHub',
    ],
  },
]

export const services: Service[] = [
  {
    title: 'Frontend Development',

    description:
      'Building responsive and interactive websites while continuously improving my frontend development skills.',

    icon: 'Code2',

    highlights: [
      'HTML & CSS',
      'JavaScript',
      'React',
      'Responsive Design',
    ],
  },

  {
    title: 'UI & Graphic Design',

    description:
      'Creating clean interfaces and visual designs while combining design principles with technology.',

    icon: 'Palette',

    highlights: [
      'UI Design',
      'Graphic Design',
      'Figma',
      'Photoshop & Illustrator',
    ],
  },

  {
    title: 'Creative Projects',

    description:
      'Exploring creative ideas through web projects, visual content, audio, and digital storytelling.',

    icon: 'Sparkles',

    highlights: [
      'Creative Web Projects',
      '2D Visual Content',
      'Audio Editing',
      'Digital Storytelling',
    ],
  },

  {
    title: 'Continuous Learning',

    description:
      'Learning new technologies by building practical projects and improving through experimentation.',

    icon: 'BookOpen',

    highlights: [
      'Learning by Building',
      'Problem Solving',
      'Project-Based Learning',
      'Continuous Improvement',
    ],
  },
]