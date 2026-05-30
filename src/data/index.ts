export const personalInfo = {
  name: 'Abdikadir Mohamed',
  title: 'Junior Software Engineer',
  tagline: 'Crafting exceptional digital experiences at the intersection of design and engineering.',
  location: 'Nairobi, KE',
  email: 'abdikadir.mo@SIRSchool.org',
  github: 'https://github.com/kadir847',
  twitter: '',
  linkedin: '',
  bio: "I'm a junior engineer with 6 months of experience building products. I like robotics and making projects.",
  bioDetail: "Passionate about building scalable systems and learning new technologies.",
};

export const skills = [
  { name: 'HTML5', level: 60, category: 'Markup' },
  { name: 'CSS3', level: 60, category: 'Styling' },
  { name: 'Responsive Web Design', level: 78, category: 'Design' },
  { name: 'JavaScript Basics', level: 20, category: 'Language' },
];

export const techCategories = [
  {
    name: 'Web Fundamentals',
    icon: '🌐',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub', 'VS Code'],
  },
  {
    name: 'Tools & Workflow',
    icon: '⚙️',
    items: ['Terminal/CLI', 'npm', 'Webpack', 'Version Control', 'Dev Tools', 'Chrome DevTools'],
  },
  {
    name: 'Interests',
    icon: '🎮',
    items: ['Video Gaming', 'Learning Web Dev', 'Building Projects', 'Problem Solving', 'Collaboration', 'Open Source'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Personal Profile',
    description: 'A modern, interactive personal portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing projects, skills, and experience.',
    longDescription: 'A modern and responsive portfolio website featuring smooth animations, section scrolling, and interactive project cards.',
    tags: ['Portfolio', 'Web Design'],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    github: 'https://github.com/kadir847/personalprofile',
    live: 'https://github.com/kadir847/personalprofile',
    featured: true,
    stats: { components: '10+', pages: '6', updated: 'May 16' },
  },
  {
    id: 2,
    title: 'Study AI Assistant',
    description: 'An intelligent study companion powered by AI. Helps students learn more effectively by summarizing notes, explaining complex topics, and generating quiz questions.',
    longDescription: 'A smart digital tool that uses artificial intelligence to help students with summarization, topic explanation, and self-assessment.',
    tags: ['AI/ML', 'Education'],
    tech: ['JavaScript', 'AI/ML', 'Web API'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    github: 'https://github.com/kadir847/kadirsalita123',
    live: 'https://github.com/kadir847/kadirsalita123',
    featured: true,
    stats: { features: '3+', updated: 'Mar 25' },
  },
];

export const experience = [
  {
    School: 'Still I Rise International School',
    role: 'Student Developer',
    period: '2026 — Present',
    description: 'Currently learning web development fundamentals and building projects to strengthen my skills in frontend and full-stack development.',
    achievements: [
      'Built multiple portfolio projects showcasing HTML, CSS, and JavaScript',
      'Developed responsive websites with modern design principles',
      'Learning React, TypeScript, and modern web technologies',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Git'],
    type: 'student',
  },
  {
    company: 'Personal Projects',
    role: 'Full Stack Developer',
    period: '2026 — Present',
    description: 'Building and deploying personal projects to learn new technologies and gain hands-on experience with real-world web development.',
    achievements: [
      'Created Personal Profile portfolio with React and Tailwind CSS',
      'Developed Study AI Assistant for intelligent learning',
      'Built multiple portfolio variations experimenting with different technologies',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
    type: 'freelance',
  },
  {
    company: 'Robotics & Making',
    role: 'Project Builder',
    period: '2023 — Present',
    description: 'Passionate about robotics and building projects. Combine engineering mindset with web development to create innovative solutions.',
    achievements: [
      'Experience with hands-on project building and problem solving',
      'Applied engineering principles to web development projects',
      'Developed interest in combining robotics with software development',
    ],
    tech: ['Problem Solving', 'Project Management', 'Learning & Development'],
    type: 'personal',
  },
  {
    company: 'Web Development Journey',
    role: 'Junior Developer',
    period: '2024 — Present',
    description: 'On a mission to become a skilled full-stack web developer. Continuously learning and improving my craft through practice and real projects.',
    achievements: [
      '6 months of dedicated web development experience',
      'Built and deployed multiple portfolio projects on GitHub',
      'Mastered responsive design and modern web technologies',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub', 'VS Code'],
    type: 'full-time',
  },
];

export const allTags = ['All', 'AI/ML', 'SaaS', 'Analytics', 'Infrastructure', 'UI/UX', 'Open Source', 'DevOps', 'Security'];