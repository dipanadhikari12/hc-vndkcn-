// Portfolio content data - structured for easy CMS integration
export const profileData = {
  name: "Dipan Adhikari",
  tagline: "Building Technology, Security, and Innovation for the Future",
  roles: [
    "Student",
    "Cybersecurity Enthusiast",
    "Learning Developer",
    "Future Computer Science Researcher",
    "MUN Delegate",
  ],
  email: "contact@dipan-adhikari.dev",
  location: "Nepal",
  bio: {
    short: "A passionate student dedicated to mastering cybersecurity, building innovative software solutions, and exploring the frontiers of technology.",
    long: `I am a high-achieving student with a deep passion for technology, cybersecurity, and software development.
    My journey began with curiosity about how systems work and evolved into a dedicated pursuit of knowledge in computer science,
    infrastructure engineering, and security research.

    I believe technology should be accessible, secure, and empowering. Whether I'm developing Discord bots, managing hosting
    infrastructure, or exploring security vulnerabilities in controlled environments, I approach every challenge with
    analytical rigor and creative problem-solving.

    Beyond technology, I actively participate in Model United Nations, developing my skills in diplomacy, public speaking,
    and international relations. These experiences have shaped my leadership abilities and broadened my perspective on
    global issues.`,
  },
  missionStatement: "To leverage technology for positive impact by building secure, innovative solutions while continuously learning, growing, and contributing to the global tech community.",
  coreValues: [
    { title: "Integrity", description: "Maintaining ethical standards in all endeavors, especially in cybersecurity research." },
    { title: "Innovation", description: "Pushing boundaries and exploring new technological frontiers." },
    { title: "Growth", description: "Commitment to continuous learning and self-improvement." },
    { title: "Collaboration", description: "Building meaningful connections and working together toward shared goals." },
  ],
  timeline: [
    { year: "2020", title: "Started Programming", description: "Began my journey with Python and web development basics." },
    { year: "2021", title: "First Major Project", description: "Developed and deployed my first Discord bot serving multiple users." },
    { year: "2022", title: "Infrastructure Focus", description: "Deep dive into Linux administration and server management." },
    { year: "2023", title: "Cybersecurity Journey", description: "Started formal cybersecurity education and CTF participation." },
    { year: "2024", title: "WaterNodes Launch", description: "Founded hosting infrastructure project WaterNodes™." },
    { year: "2024", title: "MUN Excellence", description: "Received Outstanding Delegate award at regional MUN conference." },
  ],
};

// Added explicitly to fix navigation errors across footer.tsx and navigation.tsx
export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

// Updated to satisfy footer.tsx, contact-section.tsx, and resume-section.tsx
export const socialLinks = {
  github: "https://github.com/dipanadhikari12",
  linkedin: "https://linkedin.com/in/dipanadhikari", 
  twitter: "https://twitter.com/dipanadhikari",    
  mail: "mailto:contact@dipan-adhikari.dev",           
  email: "mailto:contact@dipan-adhikari.dev", 
  discord: "https://discord.com/users/1298821740897501196", // Fixed and populated with profile link
};

// Fixed goalsData structure to completely resolve goals-section.tsx type error
export const goalsData = {
  shortTerm: [
    {
      goal: "Prepare thoroughly for advanced Computer Science programs and maintain academic excellence.",
      timeline: "Next 6-12 months"
    },
    {
      goal: "Finalize CompTIA Security+ certification and complete advanced practical labs.",
      timeline: "Next 6-12 months"
    },
    {
      goal: "Build robust automation frameworks and expand localized secure network configurations.",
      timeline: "Next 6-12 months"
    }
  ],
  longTerm: [
    {
      goal: "Conduct high-impact academic research in structural cybersecurity and secure computing systems.",
      timeline: "1-3 years"
    },
    {
      goal: "Develop next-generation hosting infrastructure scales and expand the WaterNodes™ project platform.",
      timeline: "2-4 years"
    },
    {
      goal: "Drive regional technical innovation and spearhead international tech governance initiatives.",
      timeline: "5+ years"
    }
  ]
};

export const academicData = {
  currentEducation: {
    institution: "Little Angels College",
    level: "A-Level Programme",
    focus: ["Technology", "Cybersecurity", "Leadership"],
    startDate: "2026",
    expectedGraduation: "2027",
  },
  achievements: ["Two-time Bug Bounty Award Recipient","Verbal Mention Awards in MUN Conferences","Participant in Nationwide Python Competition","Youth Communication Classes Alumnus"],
  certifications: [
    { name: "CompTIA Security+", status: "In Progress", issuer: "CompTIA", year: "2024" },
    { name: "Python for Data Science", status: "Completed", issuer: "Coursera", year: "2023" },
    { name: "Linux Foundation Certified System Administrator", status: "In Progress", issuer: "Linux Foundation", year: "2024" },
    { name: "AWS Cloud Practitioner", status: "Planned", issuer: "Amazon Web Services", year: "2025" },
  ],
  roadmap: [{ phase: "Current", items: ["A-Level Studies","Technology Learning","Leadership Development"] }],
  universityGoals: [
    "Top-tier Computer Science program",
    "Research opportunities in cybersecurity",
    "Strong industry connections",
    "Global exposure and diverse community",
  ],
};

export const skillsData = {
  programming: [
    { name: "Python", level: 90, description: "Primary language for automation, bots, and security tools" },
    { name: "JavaScript", level: 85, description: "Web development and Node.js backend systems" },
    { name: "TypeScript", level: 80, description: "Type-safe development for modern applications" },
    { name: "Java", level: 70, description: "Object-oriented programming and Android development basics" },
    { name: "HTML/CSS", level: 88, description: "Responsive web design and modern CSS frameworks" },
  ],
  development: [
    { name: "Discord Bot Development", level: 92, description: "Advanced bot systems with Discord.js and interactions" },
    { name: "Web Development", level: 85, description: "Full-stack development with Next.js and databases" },
    { name: "API Integration", level: 82, description: "REST and GraphQL API design and consumption" },
    { name: "Database Design", level: 78, description: "PostgreSQL, MongoDB, and Redis implementations" },
    { name: "Backend Systems", level: 80, description: "Server architecture and microservices basics" },
  ],
  cybersecurity: [
    { name: "Security Fundamentals", level: 75, description: "Core security principles and CIA triad" },
    { name: "Vulnerability Assessment", level: 68, description: "Identifying and analyzing system vulnerabilities" },
    { name: "Network Security", level: 72, description: "Firewalls, protocols, and secure network architecture" },
    { name: "OSINT Research", level: 80, description: "Open-source intelligence gathering techniques" },
    { name: "Secure Coding", level: 70, description: "Writing code resistant to common attack vectors" },
  ],
  infrastructure: [
    { name: "Linux Administration", level: 85, description: "Server management, shell scripting, and automation" },
    { name: "Hosting Solutions", level: 88, description: "VPS providers, domain management, and DNS" },
    { name: "VPS Management", level: 87, description: "Server provisioning, monitoring, and optimization" },
    { name: "Server Deployment", level: 82, description: "CI/CD pipelines and deployment automation" },
    { name: "Cloud Computing", level: 75, description: "AWS, DigitalOcean, and cloud architecture" },
  ],
};

export const projectsData = {
  waterNodes: {
    name: "WaterNodes™",
    tagline: "Premium Infrastructure Hosting Platform",
    description: "A comprehensive hosting infrastructure project focused on providing reliable, high-performance hosting solutions for various applications, from Discord bots to web services.",
    technologies: ["Linux", "Docker", "Nginx", "Node.js", "PostgreSQL", "Redis", "Prometheus", "Grafana"],
    objectives: [
      "Create reliable and scalable hosting infrastructure",
      "Implement enterprise-grade monitoring and alerting",
      "Develop user-friendly management interfaces",
      "Ensure 99.9% uptime with automated failover",
    ],
    challenges: [
      "Balancing performance with resource efficiency",
      "Implementing comprehensive security measures",
      "Building intuitive administrative tools",
      "Managing distributed server architecture",
    ],
    futureImprovements: [
      "Launch public beta for wider testing",
      "Implement Kubernetes orchestration",
      "Add geographic redundancy",
      "Develop automated billing system",
    ],
    stats: { users: "500+", uptime: "99.7%", servers: "12" },
  },
  discordDevelopment: {
    name: "Discord Bot Systems",
    tagline: "Advanced Automation & Moderation",
    description: "Collection of sophisticated Discord bots including ticket systems, moderation tools, and automation frameworks serving thousands of users across multiple communities.",
    technologies: ["Discord.js", "TypeScript", "MongoDB", "Redis", "Node.js", "REST APIs"],
    objectives: [
      "Create comprehensive moderation tools",
      "Build efficient ticket support systems",
      "Implement automated role management",
      "Develop intuitive command interfaces",
    ],
    challenges: [
      "Handling high-volume interactions efficiently",
      "Maintaining consistent uptime and reliability",
      "Implementing permission hierarchies",
      "Designing intuitive slash commands",
    ],
    futureImprovements: [
      "Web dashboard for bot management",
      "Machine learning for spam detection",
      "Multi-language support",
      "Custom embed builder tool",
    ],
    stats: { servers: "150+", users: "50K+", commands: "200+" },
  },
  minecraftDevelopment: {
    name: "Minecraft Server Systems",
    tagline: "Custom Game Mechanics & Plugins",
    description: "Development of custom Minecraft server systems with unique gameplay mechanics, custom plugins, and community-focused features.",
    technologies: ["Java", "Spigot/Paper", "MySQL", "Redis", "Docker", "Linux"],
    objectives: [
      "Create unique gameplay experiences",
      "Build performance-optimized systems",
      "Implement anti-cheat mechanisms",
      "Develop community engagement features",
    ],
    challenges: [
      "Optimizing for large player counts",
      "Balancing game mechanics fairly",
      "Preventing exploitation and cheating",
      "Managing economy systems",
    ],
    futureImprovements: [
      "Custom game modes development",
      "Enhanced anti-cheat system",
      "Cross-server synchronization",
      "Mobile companion app",
    ],
    stats: { players: "5K+", uptime: "99.5%", plugins: "15+" },
  },
  cybersecResearch: {
    name: "Cybersecurity Research",
    tagline: "Security Labs & Learning Projects",
    description: "Personal cybersecurity research including CTF challenges, security labs, vulnerability research, and educational projects focused on ethical security practices.",
    technologies: ["Python", "Burp Suite", "Wireshark", "Metasploit", "Kali Linux", "Hashcat"],
    objectives: [
      "Develop practical security skills",
      "Understand real-world vulnerabilities",
      "Practice ethical penetration testing",
      "Build security consciousness",
    ],
    challenges: [
      "Maintaining legal and ethical boundaries",
      "Keeping up with evolving threats",
      "Finding legitimate practice environments",
      "Documenting findings effectively",
    ],
    futureImprovements: [
      "OSCP certification preparation",
      "Bug bounty program participation",
      "Security blog and writeups",
      "Tool development for community",
    ],
    stats: { ctfs: "25+", labs: "100+", rank: "Top 15%" },
  },
};

export const cybersecurityJourney = {
  roadmap: [
    {
      phase: "Networking Fundamentals",
      progress: 100,
      topics: ["TCP/IP", "OSI Model", "DNS", "HTTP/S", "Routing"]
    },
    {
      phase: "Linux Mastery",
      progress: 85,
      topics: ["Command Line", "System Administration", "Scripting", "Permissions"]
    },
    {
      phase: "Security Foundations",
      progress: 75,
      topics: ["CIA Triad", "Threat Modeling", "Risk Assessment", "Security Frameworks"]
    },
    {
      phase: "Web Security",
      progress: 60,
      topics: ["OWASP Top 10", "SQL Injection", "XSS", "CSRF", "Authentication"]
    },
    {
      phase: "Cloud Security",
      progress: 40,
      topics: ["AWS Security", "IAM", "Encryption", "Container Security"]
    },
    {
      phase: "Secure Development",
      progress: 70,
      topics: ["Secure Coding", "Code Review", "Dependency Management"]
    },
    {
      phase: "Security Research",
      progress: 45,
      topics: ["Vulnerability Research", "Exploit Development", "CTF Challenges"]
    },
  ],
  certifications: [
    { name: "CompTIA Security+", status: "In Progress", completion: 35 },
    { name: "OSCP", status: "Planned", completion: 0 },
    { name: "CEH", status: "Future Goal", completion: 0 },
  ],
  resources: [
    "TryHackMe - Active Participant",
    "HackTheBox - Regular Player",
    "PortSwigger Web Security Academy",
    "TCM Security Courses",
    "Security+ Certification Prep",
  ],
};

export const munData = {
  description: "Model United Nations has been instrumental in developing my diplomatic skills, public speaking abilities, and understanding of international relations.",
  experience: [
    { event: "Regional MUN Conference 2024", committee: "Security Council", country: "United States", award: "Outstanding Delegate" },
    { event: "National High School MUN 2023", committee: "GA3 - Social Committee", country: "Japan", award: "Honorable Mention" },
    { event: "Local Youth MUN 2023", committee: "Human Rights Council", country: "Germany", award: "Best Position Paper" },
    { event: "Inter-College Debate 2024", committee: "UNESCO", country: "India", award: "Verbal Commendation" },
  ],
  skills: [
    { name: "Public Speaking", description: "Confident delivery of speeches and arguments in front of large audiences." },
    { name: "Research", description: "In-depth analysis of country positions, international issues, and policy." },
    { name: "Diplomacy", description: "Negotiating solutions and building consensus among diverse groups." },
    { name: "Resolution Drafting", description: "Creating formal documents following UN procedures and formats." },
    { name: "Crisis Management", description: "Quick thinking and adaptation during crisis simulations." },
  ],
  interests: [
    "Cybersecurity Policy",
    "Digital Rights",
    "International Technology Governance",
    "Climate Change Mitigation",
    "SDG Implementation",
  ],
};

export const resumeData = {
  education: academicData.currentEducation,
  skills: {
    technical: ["Python", "JavaScript", "TypeScript", "Linux", "Docker", "Git", "SQL", "Cloud Services"],
    soft: ["Leadership", "Public Speaking", "Problem Solving", "Team Collaboration", "Project Management"],
    languages: ["English (Fluent)", "Nepali (Native)", "Hindi (Conversational)"],
  },
  projects: Object.values(projectsData),
  certifications: academicData.certifications,
};

export const achievementsData = [
  { category: "Technology", title: "Bug Bounty Awards", year: "2024-2025", description: "Received bug bounty awards twice for responsibly disclosing security vulnerabilities." },
  { category: "MUN", title: "Verbal Mention Awards", year: "2023-2025", description: "Recognized at Model United Nations conferences." },
  { category: "Technology", title: "Python Competition Participant", year: "2025", description: "Participated in a nationwide Python competition." },
];
