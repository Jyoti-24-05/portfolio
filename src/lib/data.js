// ─── Central data store for Jyoti's portfolio ───────────────────────────────

export const personal = {
  name: "Jyoti Kumari",
  role: "Software Developer",
  tagline: "I build things for the web.",
  location: "Ranchi, Jharkhand",
  email: "jyotika918273@gmail.com",
  phone: "+91-8797075142",
  github: "https://github.com/Jyoti-24-05",
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
    image: "/screenshots/musix.png",
    liveUrl: "https://musix-7xhg.onrender.com",
    githubUrl: "https://github.com/Jyoti-24-05/spotify2.0",
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
    tech: ["Python", "Streamlit", "Groq", "ElevenLabs", "Firecrawl"],
    image: "/screenshots/podcast-agent.png",
    liveUrl: "https://5mftrnudx9kaescr3zqivz.streamlit.app/",
    githubUrl: "https://github.com/Jyoti-24-05/agno",
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
    tech: [ "MERN", "Socket.IO", "Redis", "OAuth", "Cloudinary" ],
    image: "/screenshots/bitconnect.png",
    liveUrl: "https://bit-connect-jyoti-24-05.vercel.app/",
    githubUrl: "https://github.com/Jyoti-24-05/BitConnect_",
    status: "live",
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
      "A high-performance ensemble model combining XGBoost and Random Forest to classify network threats across DoS, Probe, R2L, and U2R categories using the structured NSL-KDD dataset and unstructured HDFS logs.",
    tech: ["Python", "TensorFlow", "Scikit-Learn", "XGBoost"],
    image: "/screenshots/nids.png",
    liveUrl: null,
    githubUrl: "https://github.com/Jyoti-24-05/ELBIDS",
    status: "Research Project",
    featured: false,
    highlights: [
      " Achieved 99.98% accuracy and AUC-ROC 1.00 on 12,598 test records",
      " Trained a symmetric deep autoencoder (43→8→43) in TensorFlow/Keras",
      "ML pipeline fusing structured NSL-KDD network telemetry with unstructured HDFS logs",
    ],
  },
  {
    id: 5,
    title: "gst-invoice-generator",
    subtitle: "Automated GST Invoice Generator",
    description:
      "A free, professional GST Invoice Generator built for Indian businesses and freelancers. Fill in seller and buyer details, add line items with GST rates, and get a live invoice preview that auto-calculates CGST/SGST for intra-state and IGST for inter-state transactions. Download the final invoice as a PDF in one click — no login, no ads, no cost.",
    tech: ["MERN", "jsPDF", "html2canvas", "Axios", "Vercel (frontend)", "Render (backend)"],
    image: "/screenshots/gst-invoice-generator.png",
    liveUrl: "https://gst-invoice-generator-jyoti-24-05.vercel.app/",
    githubUrl: "https://github.com/Jyoti-24-05/gst-invoice-generator",
    status: "live",
    featured: true,
    highlights: [
      
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
  // {
  //   role: "CyberSecurity Intern",
  //   org: "CCL Ranchi",
  //   location: "Ranchi Jharkhand",
  //   period: "June 2026 – July 2026",
  //   bullets: [
  //     "Performed DFIR operations on a simulated industrial power-generation environment, investigating cyber intrusions targeting converged IT/OT infrastructure, SCADA networks, and PLC-based control systems.",
  //     "Correlated firewall telemetry, VPN activity, Modbus register states, and firmware hash validations to identify attack vectors, compromised controllers, and manipulation of critical operational parameters.",
  //     "Remediated control-system compromise by isolating malicious network access, restoring trusted PLC firmware and register configurations, and recovering stable plant operations through coordinated IT and OT incident response actions.",
  //   ],
  // },
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
    title: "Purplle Techathon Finalist",
    description:
      "built a store-intelligence-system using CCTV analytics, real-time event streaming, anomaly detection, and production-grade APIs.",
  },
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