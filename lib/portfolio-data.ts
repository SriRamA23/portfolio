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
      description: `Full-Stack Developer & AI Enthusiast - Building dynamic web apps, training AI models, and automating workflows with n8n to turn ideas into smart solutions.`,
      icon: "👨‍💻",
      details: [
        "Skilled in building scalable web apps and AI-driven solutions",
        "Modern frameworks expertise: React, Next.js, Node.js",
        "Phone: +91 8946062492",
        "Email: dharanisri5677@gmail.com",
        "LinkedIn: https://www.linkedin.com/in/sriram2010/",
        "GitHub: https://github.com/SriRamA23",
        "Open to remote opportunities",
      ],
      color: "from-blue-500 to-cyan-500",
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "n8n Video Automation",
      description: "Automated video creation & posting for social media platforms for the handmade product",
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
      title: "Gmail Summarizer Chrome Extension",
      description: "Summarizes emails in a single click using a fine-tuned AI model",
      icon: "📧",
      details: [
        "To save time and improve email productivity by quickly getting the essence of any email",
        "A Chrome extension that summarizes Gmail content in one click using a Hugging Face AI model",
        "Integrated a fine-tuned NLP model to process email content and generate concise summaries instantly"
        ],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "project-3",
      title: "AI Ambulance Route Optimization",
      description: "Optimizing ambulance routes for fastest response using AI and Dijkstra's algorithm",
      icon: "🌐",
      details: [
        "To reduce response time and save lives by finding the quickest route between hospital and patient",
        "A system that calculates the most efficient route from hospital to patient and back using Dijkstra's algorithm",
        "Implemented in Python, evaluating multiple paths and traffic data to select the optimal route for emergency scenarios"
        ],
      color: "from-orange-500 to-red-500",
    },
    {
      id: "project-4",
      title: "Kynora - Handmade Crafts E-Commerce",
      description: "A platform connecting artisans to customers to sell unique handmade crafts",
      icon: "🛒",
      details: [
        "To empower artisans and give them a digital space to reach a wider audience",
        "An e-commerce platform for handmade crafts, connecting creators directly with buyers",
        "Built with Next.js, TypeScript, and Firebase for a modern, scalable, and responsive experience"
      ]   ,
      color: "from-purple-500 to-pink-500",
},
  ],
  experience: [
    {
      id: "exp-1",
      title: "Junior Software Trainee (Intern)",
      description: "Contributed to the development and debugging of internal web applications (frontend + backend)",
      icon: "💼",
      details: [
        "Worked on both frontend and backend features for internal tools",
        "Assisted in debugging, testing, and optimizing web applications",
        "Collaborated with senior developers to implement new features and fixes",
      ],
      color: "from-green-500 to-teal-500",
    }
,
    {
  id: "exp-2",
  title: "Intern",
  description: "Gained hands-on exposure to server operations, RFID systems, networking and port monitoring technologies",
  icon: "🌐",
  details: [
    "Explored server rooms and learned about server management and networking",
    "Observed and understood RFID systems used for cargo and asset tracking",
    "Studied climate and radar monitoring systems deployed at Chennai Port"
  ],
  color: "from-yellow-500 to-orange-500",
},
  ],
  achievements: [
    {
      id: "ach-1",
      title: "1st Prize - UI/UX Hackathon",
      description: "Won 1st prize in a UI/UX design competition at Amrita College Hackathon",
      icon: "🏆",
      details: [
        "Designed an eco-friendly website to monitor and gamify eco points earned by citizens",
        "Points could later be redeemed for discounts on government products",
        "Collaborated as a team of 3 to conceptualize, design, and present the solution"
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      id: "ach-2",
      title: "3rd Prize - Paper Presentation",
      description: "Presented a paper on 'Number Theory in Engineering' at the Maths Club event",
      icon: "📄",
      details: [
        "Explored applications of number theory in engineering problems",
        "Collaborated as a team of 3 to research, prepare, and present the paper",
        "Secured 3rd prize for clarity, depth, and presentation quality"
      ],
      color: "from-blue-500 to-indigo-500",
      },
  ],
    education: [
      {
        id: "edu-1",
        title: "Velammal Engineering College",
        description: "Currently pursuing 3rd year BE in Computer Science & Engineering",
        icon: "🎓",
        details: [
          "CGPA: 8.22",
          "Core subjects: Data Structures, Algorithms, OOP, Networks, DBMS",
          "Actively learning modern web and AI technologies",
        ],
        color: "from-blue-500 to-indigo-500",
      },
      {
        id: "edu-2",
        title: "Thiru Vi Ka Higher Secondary School",
        description: "Higher Secondary Education (Bio-Maths)",
        icon: "📚",
        details: [
          "Focused on mathematics and biology",
          "Strong foundation in analytical and problem-solving skills",
        ],
        color: "from-green-500 to-teal-500",
      },
      {
        id: "edu-3",
        title: "Jaivel Matriculation Higher Secondary School",
        description: "Completed 1st to 10th Standard",
        icon: "🏫",
        details: [
          "Strong foundation in core subjects and basics of science and mathematics",
          "Participated in school-level competitions and activities",
        ],
        color: "from-yellow-500 to-orange-500",
      },
    ],
  certifications: [
  {
    id: "cert-1",
    title: "NSDC A+ Certified UI/UX Design",
    description: "Certification in UI/UX design in collaboration with Figma",
    icon: "🎨",
    details: [
      "User interface and user experience design principles",
      "Wireframing and prototyping with Figma",
      "Design thinking and usability practices",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "cert-2",
    title: "Introduction to Internet of Things",
    description: "NPTEL certification on IoT fundamentals",
    icon: "🌐",
    details: [
      "IoT architecture and applications",
      "Sensors, actuators, and connectivity",
      "Real-world IoT implementations",
    ],
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "cert-3",
    title: "Database Management System",
    description: "NPTEL certification on database concepts",
    icon: "💾",
    details: [
      "Relational database design",
      "SQL queries and transactions",
      "Normalization and database optimization",
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    id: "cert-4",
    title: "Programming in Modern C++",
    description: "NPTEL certification on modern C++ programming",
    icon: "💻",
    details: [
      "Core C++ syntax and features",
      "Object-oriented programming",
      "STL and modern C++ practices",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "cert-5",
    title: "Programming in Java",
    description: "NPTEL certification on Java programming",
    icon: "☕",
    details: [
      "Core Java concepts and OOP",
      "Java APIs and libraries",
      "Application development in Java",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "cert-6",
    title: "Joy of Computing Using Python",
    description: "NPTEL certification on Python programming fundamentals",
    icon: "🐍",
    details: [
      "Python basics",
      "Data structures and problem-solving",
      "Building simple Python applications",
    ],
    color: "from-yellow-500 to-orange-500",
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
  2 or 'projects'      → Display all projects
  3 or 'experience'    → Show professional experiences
  4 or 'achievements'  → Display awards and achievements
  5 or 'education'     → List educational background
  6 or 'certifications'→ Show certification courses
  7 or 'all'           → Show everything

Navigation:
  ↑ ↓                  → Navigate command history
  Enter                → Execute command

Type any command and press Enter to explore!
`
