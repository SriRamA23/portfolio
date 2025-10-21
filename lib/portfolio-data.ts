export interface ContentCard {
  id: string
  title: string
  description: string
  icon: string
  details?: string[]
  link?: string
  color?: string
}

export interface PortfolioContent {
  about: ContentCard[]
  projects: ContentCard[]
  experience: ContentCard[]
  achievements: ContentCard[]
  education: ContentCard[]
  certifications: ContentCard[]
  all: ContentCard[]
}

export const portfolioData: PortfolioContent = {
  about: [
    {
      id: "about-main",
      title: "Sri Ram A",
      description: "Aspiring full-stack developer with strong foundations in DSA, OOP, and networks.",
      icon: "👨‍💻",
      details: [
        "Skilled in building scalable web apps and AI-driven solutions",
        "Modern frameworks expertise: React, Next.js, Node.js",
        "Phone: +91 8946062492",
        "Email: dharanisri5677@gmail.com",
        "Location: India",
        "Open to remote opportunities",
      ],
      color: "from-blue-500 to-cyan-500",
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "n8n Video Automation",
      description: "Automated video creation & posting for social media platforms",
      icon: "🎬",
      details: [
        "Automated video generation and scheduling",
        "Multi-platform social media integration",
        "n8n workflow orchestration",
        "Real-time monitoring and analytics",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "project-2",
      title: "AI-Driven Solutions",
      description: "Building intelligent applications with modern AI frameworks",
      icon: "🤖",
      details: [
        "Machine learning model integration",
        "RESTful API development",
        "Real-time data processing",
        "Performance optimization and scaling",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "project-3",
      title: "Scalable Web Apps",
      description: "Full-stack applications with focus on performance and UX",
      icon: "🌐",
      details: [
        "React/Next.js frontend development",
        "Backend optimization and caching",
        "Database design and optimization",
        "Responsive and accessible UI/UX",
      ],
      color: "from-orange-500 to-red-500",
    },
  ],
  experience: [
    {
      id: "exp-1",
      title: "Full-Stack Developer",
      description: "Building and maintaining web applications at scale",
      icon: "💼",
      details: [
        "Frontend: React, Next.js, TypeScript, Tailwind CSS",
        "Backend: Node.js, Express, Python, FastAPI",
        "Databases: PostgreSQL, MongoDB, Redis",
        "DevOps: Docker, GitHub Actions, Vercel deployment",
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: "exp-2",
      title: "AI/ML Integration",
      description: "Implementing AI solutions in production environments",
      icon: "🧠",
      details: [
        "LLM integration and prompt engineering",
        "Model fine-tuning and optimization",
        "API development for ML services",
        "Performance monitoring and debugging",
      ],
      color: "from-violet-500 to-purple-500",
    },
  ],
  achievements: [
    {
      id: "ach-1",
      title: "DSA Mastery",
      description: "Strong foundation in Data Structures and Algorithms",
      icon: "🏆",
      details: [
        "Competitive programming experience",
        "Algorithm optimization expertise",
        "Problem-solving across multiple domains",
        "Code efficiency and best practices",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "ach-2",
      title: "Open Source Contributions",
      description: "Active contributor to open source projects",
      icon: "⭐",
      details: [
        "Multiple GitHub repositories and contributions",
        "Community engagement and code reviews",
        "Documentation and knowledge sharing",
        "Collaborative development experience",
      ],
      color: "from-cyan-500 to-blue-500",
    },
  ],
  education: [
    {
      id: "edu-1",
      title: "Computer Science Fundamentals",
      description: "Strong foundation in core CS concepts",
      icon: "🎓",
      details: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Computer Networks and Systems",
        "Database Management Systems",
      ],
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "edu-2",
      title: "Web Development",
      description: "Modern web development practices and frameworks",
      icon: "📚",
      details: [
        "Frontend technologies and frameworks",
        "Backend development and APIs",
        "Full-stack development patterns",
        "Cloud deployment and DevOps",
      ],
      color: "from-green-500 to-teal-500",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Full-Stack Development",
      description: "Comprehensive full-stack development certification",
      icon: "📜",
      details: [
        "Frontend development with React",
        "Backend development with Node.js",
        "Database design and management",
        "Deployment and DevOps practices",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "cert-2",
      title: "AI/ML Fundamentals",
      description: "Machine learning and AI fundamentals course",
      icon: "🔬",
      details: [
        "Machine learning algorithms",
        "Data preprocessing and analysis",
        "Model evaluation and validation",
        "Real-world ML applications",
      ],
      color: "from-purple-500 to-indigo-500",
    },
  ],
  all: [],
}

portfolioData.all = [
  // About section
  ...portfolioData.about,
  // Projects section
  ...portfolioData.projects,
  // Experience section
  ...portfolioData.experience,
  // Achievements section
  ...portfolioData.achievements,
  // Education section
  ...portfolioData.education,
  // Certifications section
  ...portfolioData.certifications,
]

export const commands = {
  "1": "about",
  "2": "projects",
  "3": "experience",
  "4": "achievements",
  "5": "education",
  "6": "certifications",
  "7": "all",
  "0": "help",
  about: "about",
  projects: "projects",
  experience: "experience",
  achievements: "achievements",
  education: "education",
  certifications: "certifications",
  all: "all",
  help: "help",
} as const

export const helpText = `
╔════════════════════════════════════════════════════════════╗
║           Welcome to Sri Ram A's Portfolio                 ║
╚════════════════════════════════════════════════════════════╝

Available Commands:
  1 or 'about'         → Show executive summary and contact info
  2 or 'projects'      → Display all projects as 3D cards
  3 or 'experience'    → Show professional experiences
  4 or 'achievements'  → Display awards and achievements
  5 or 'education'     → List educational background
  6 or 'certifications'→ Show certification courses
  7 or 'all'           → Show everything
  0 or 'help'          → Display this help message

Navigation:
  ↑ ↓                  → Navigate command history
  Enter                → Execute command

Type any command and press Enter to explore!
`
