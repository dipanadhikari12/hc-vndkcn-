// Portfolio content data

export const profileData = {
  name: "Dipan Adhikari",
  tagline: "A-Level Student • Cybersecurity Enthusiast • MUN Delegate",
  roles: [
    "A-Level Student",
    "Cybersecurity Enthusiast",
    "Technology Learner",
    "MUN Delegate",
  ],
  email: "dipan180035@lac.edu.np",
  location: "Kathmandu, Nepal",
  bio: {
    short:
      "A-Level student interested in technology, cybersecurity, leadership, and public speaking.",
    long: `
I am an A-Level student at Little Angels College with interests in technology,
cybersecurity, software development, leadership, and Model United Nations.

I enjoy building projects, learning new technologies, exploring security concepts,
and developing communication and leadership skills through academic and extracurricular activities.
`,
  },
  missionStatement:
    "To continuously learn, build, and contribute through technology, leadership, and ethical innovation.",
  coreValues: [
    {
      title: "Integrity",
      description:
        "Maintaining ethical standards in academic and technical work.",
    },
    {
      title: "Growth",
      description:
        "Commitment to continuous learning and improvement.",
    },
    {
      title: "Leadership",
      description:
        "Taking initiative and contributing positively to communities.",
    },
    {
      title: "Innovation",
      description:
        "Exploring creative solutions to meaningful problems.",
    },
  ],
  timeline: [
    {
      year: "2025",
      title: "Technology Learning",
      description:
        "Focused on programming, cybersecurity, and technology projects.",
    },
    {
      year: "2026",
      title: "Little Angels College",
      description:
        "Joined the A-Level Programme and continued technology development.",
    },
    {
      year: "2027",
      title: "Academic Progress",
      description:
        "Preparing for future Computer Science opportunities.",
    },
  ],
};

export const academicData = {
  currentEducation: {
    institution: "Little Angels College",
    level: "A-Level Programme",
    focus: ["Technology", "Cybersecurity", "Leadership"],
    startDate: "2026",
    expectedGraduation: "2027",
  },

  achievements: [
    "Bug Bounty Award Recipient",
    "Verbal Mention Awards in MUN Conferences",
    "Python Competition Participant",
  ],

  certifications: [],

  roadmap: [
    {
      phase: "Current",
      items: [
        "A-Level Studies",
        "Technology Learning",
        "Leadership Development",
      ],
    },
  ],

  universityGoals: [
    "Computer Science",
    "Technology Research",
    "Leadership Development",
  ],
};

export const skillsData = {
  programming: [
    {
      name: "Python",
      level: 80,
      description: "Programming and automation",
    },
    {
      name: "JavaScript",
      level: 75,
      description: "Web development",
    },
    {
      name: "TypeScript",
      level: 70,
      description: "Modern application development",
    },
  ],

  development: [
    {
      name: "Web Development",
      level: 75,
      description: "Frontend and backend development",
    },
    {
      name: "Git",
      level: 75,
      description: "Version control",
    },
  ],

  cybersecurity: [
    {
      name: "Security Fundamentals",
      level: 70,
      description: "Core cybersecurity concepts",
    },
    {
      name: "OSINT",
      level: 70,
      description: "Open-source intelligence research",
    },
  ],

  infrastructure: [
    {
      name: "Linux",
      level: 75,
      description: "Linux administration",
    },
    {
      name: "Hosting",
      level: 70,
      description: "Server and hosting management",
    },
  ],
};

export const projectsData = {
  personalWebsite: {
    name: "Personal Portfolio Website",
    tagline: "Portfolio and Resume Website",
    description:
      "Personal website showcasing projects, achievements, education, and interests.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    objectives: ["Showcase portfolio"],
    challenges: ["Design and deployment"],
    futureImprovements: ["Additional projects"],
    stats: {
      visitors: "N/A",
    },
  },
};

export const cybersecurityJourney = {
  roadmap: [
    {
      phase: "Networking Fundamentals",
      progress: 100,
      topics: ["TCP/IP", "DNS", "HTTP"],
    },
    {
      phase: "Linux",
      progress: 80,
      topics: ["Administration", "Shell"],
    },
    {
      phase: "Security Fundamentals",
      progress: 70,
      topics: ["CIA Triad", "Risk Assessment"],
    },
  ],

  certifications: [],

  resources: [
    "TryHackMe",
    "Hack The Box",
    "PortSwigger Web Security Academy",
  ],
};

export const munData = {
  description:
    "Model United Nations participation focused on diplomacy, communication, and international relations.",

  experience: [
    {
      event: "MUN Conference",
      committee: "Security Council",
      country: "Delegate",
      award: "Verbal Mention",
    },
  ],

  skills: [
    {
      name: "Public Speaking",
      description: "Speech delivery and debate",
    },
    {
      name: "Research",
      description: "Policy and issue research",
    },
  ],

  interests: [
    "International Relations",
    "Technology Policy",
    "Cybersecurity Policy",
  ],
};

export const resumeData = {
  education: academicData.currentEducation,

  skills: {
    technical: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Linux",
    ],

    soft: [
      "Leadership",
      "Communication",
      "Problem Solving",
    ],

    languages: [
      "English",
      "Nepali",
    ],
  },

  projects: Object.values(projectsData),

  certifications: academicData.certifications,
};

export const achievementsData = [
  {
    category: "Technology",
    title: "Bug Bounty Recognition",
    year: "2025",
    description:
      "Recognized through responsible vulnerability disclosure.",
  },
  {
    category: "MUN",
    title: "Verbal Mention",
    year: "2025",
    description:
      "Recognition in Model United Nations participation.",
  },
];

export const socialLinks = {
  github: "https://github.com/dipanadhikari12",
  linkedin: "#",
  twitter: "#",
  discord: "#",
  email: "mailto:dipan180035@lac.edu.np",
};

export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Cybersecurity", href: "#cybersecurity" },
  { label: "MUN", href: "#mun" },
  { label: "Projects", href: "#projects" },
  { label: "Goals", href: "#goals" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const goalsData = [
  {
    title: "Academic Excellence",
    description:
      "Excel in the A-Level Programme and prepare for Computer Science studies.",
  },
  {
    title: "Cybersecurity",
    description:
      "Continue learning ethical security research and responsible disclosure.",
  },
  {
    title: "Technology",
    description:
      "Build projects and strengthen programming skills.",
  },
  {
    title: "Leadership",
    description:
      "Develop leadership and communication skills through MUN and student activities.",
  },
];

export const contactData = {
  email: "dipan180035@lac.edu.np",
  phone: "9841350034",
  location: "Kathmandu, Nepal",
};
