// ─── Central data store for Jyoti's portfolio ───────────────────────────────

export const personal = {
  name: "Jyoti Kumari",
  role: "Software Developer",
  tagline: "I build things for the web.",
  location: "Ranchi, Jharkhand",
  email: "jyotika918273@gmail.com",
  phone: "+91-8797075142",
  github: "https://github.com/Jyoti",
  linkedin: "https://linkedin.com/in/jyoti-kumari-08a0b3287",
  bio: [
    "I'm a third-year Electronics and Communication Engineering student at BIT Mesra with a passion for building software that sits at the intersection of clean architecture and real-world impact.",
    "My work spans full-stack web development, machine learning pipelines, and agentic AI systems. Whether it's engineering a MERN stack platform, training ensemble models on network intrusion data, or wiring together LLM agents — I care deeply about correctness, performance, and the craft.",
    "Beyond code, I find balance in drawing and painting. There's something about analog creativity that sharpens how I approach design problems — a habit of noticing composition, weight, and negative space that shows up in my UIs too.",
  ],
};

export const education = [
  {
    school: "Birla Institute of Technology, Mesra",
    degree: "B.Tech, Electronics & Communication Engineering",
    period: "Sep 2023 – May 2027",
    gpa: "8.5 / 10",
    location: "Ranchi, Jharkhand",
  },
  {
    school: "Delhi Public School, Dhurwa",
    degree: "AISSCE (Class XII)",
    period: "May 2020 – May 2022",
    gpa: "91%",
    location: "Ranchi, Jharkhand",
  },
  {
    school: "St. Anne's Girls' School",
    degree: "Secondary Education (Class X)",
    period: "May 2010 – May 2020",
    gpa: "95%",
    location: "Ranchi, Jharkhand",
  },
];

export const projects = [
  {
    id: 1,
    title: "Musix",
    subtitle: "Full-Stack Music Streaming Platform",
    description:
      "A Spotify-inspired music streaming platform with real-time chat, dynamic playlists, live listening activity, and an admin dashboard for complete catalog management.",
    tech: ["MERN Stack", "Socket.io", "Tailwind CSS", "JWT", "Cloudinary"],
    image: "/public/screenshots/musix.png",
    liveUrl: "https://musix-7xhg.onrender.com",
    githubUrl: "https://github.com/Jyoti",
    status: "live",
    featured: true,
    highlights: [
      "Real-time messaging & live listening activity via Socket.io",
      "Admin dashboard with full CRUD for songs, albums, artists, users",
      "Responsive dark-themed UI with seamless audio playback",
    ],
  },
  {
    id: 2,
    title: "Article → Podcast Agent",
    subtitle: "End-to-End AI Audio Pipeline",
    description:
      "An agentic AI pipeline that transforms any web article into an immersive audio podcast using GPT-4o reasoning, Firecrawl for scraping, and ElevenLabs for voice synthesis.",
    tech: ["Python", "React.js", "Agno Agents", "GPT-4o", "ElevenLabs", "Streamlit"],
    image: "/public/screenshots/podcast-agent.png",
    liveUrl: "https://5mftrnudx9kaescr3zqivz.streamlit.app/",
    githubUrl: "https://github.com/Jyoti",
    status: "live",
    featured: true,
    highlights: [
      "Deterministic tool-calling logic improved pipeline reliability by 30%",
      "Resilient error-handling layer parses diverse web schemas",
      "Asynchronous audio processing with real-time Streamlit playback",
    ],
  },
  {
    id: 3,
    title: "BitConnect",
    subtitle: "Campus Community Platform",
    description:
      "A high-traffic MERN stack event portal centralising activity for 15+ student organisations — featuring WebSocket notifications, RSVP tracking, social sharing, and role-based access control.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "WebSockets"],
    image: "/public/screenshots/bitconnect.png",
    liveUrl: null,
    githubUrl: "https://github.com/Jyoti",
    status: "coming-soon",
    featured: true,
    highlights: [
      "40% reduction in API response time via efficient DB indexing",
      "RBAC system for Admins, Clubs, and Students",
      "Real-time WebSocket notifications & RSVP tracking",
    ],
  },
  {
    id: 4,
    title: "Network Intrusion Detection",
    subtitle: "Ensemble ML Security System",
    description:
      "A high-performance ensemble model combining XGBoost and Random Forest to classify network threats across DoS, Probe, R2L, and U2R categories using the NSL-KDD dataset.",
    tech: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "Pandas", "NumPy"],
    image: "/public/screenshots/nids.png",
    liveUrl: null,
    githubUrl: "https://github.com/Jyoti",
    status: "coming-soon",
    featured: false,
    highlights: [
      "99.9% peak accuracy and AUC of 0.94 with XGBoost",
      "Pearson Correlation thresholding for dimensionality reduction",
      "Precision-recall curves on imbalanced multiclass attack distributions",
    ],
  },
];

export const skills = {
  languages: ["C++", "C", "Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  web: ["React.js", "Next.js", "Node.js", "Express.js", "RESTful APIs", "Socket.io", "Tailwind CSS"],
  databases: ["MongoDB", "PostgreSQL", "MySQL"],
  tools: ["Git", "GitHub", "Docker", "Linux", "Postman", "AWS (EC2, S3)"],
  ml: ["Scikit-Learn", "PyTorch", "TensorFlow", "LangChain", "Pandas", "NumPy"],
  concepts: ["DSA", "OOPs", "DBMS", "Operating Systems", "Computer Networks", "System Design"],
};

export const experience = [
  {
    role: "Executive Body Member",
    org: "Institute of Engineering and Technology (IET)",
    location: "BIT Mesra",
    period: "Sep 2024 – Present",
    bullets: [
      "Organised and facilitated 3+ coding competitions with 200+ participants, strengthening campus programming culture.",
      "Managed an executive board of 5 members with weekly syncs to track and drive club initiatives.",
      "Mentored junior developers on best practices in coding, system design, and project execution.",
    ],
  },
];

export const achievements = [
  {
    title: "EY Hackathon",
    description:
      "Built Loanease — an AI-driven conversational assistant automating personal loan acquisition, solving a challenge proposed by TATA Capital.",
  },
  {
    title: "LeetCode Rating 1710 · Top 10%",
    description:
      "300+ problems solved spanning Dynamic Programming, Graphs, and Trees with consistent contest participation.",
  },
  {
    title: "CodeChef 2-Star",
    description:
      "Active competitive programmer on Codeforces and CodeChef global rounds, refining algorithmic efficiency under strict constraints.",
  },
];