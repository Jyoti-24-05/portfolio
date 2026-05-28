"use client";

import { useEffect, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

const PROJECTS = [
  {
    name: "BitConnect",
    period: "May 2024",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "WebSocket"],
    description:
      "Community platform for BIT Mesra consolidating activity across 15+ student organizations. Features real-time WebSocket notifications, RSVP tracking, and role-based access control for Admins, Clubs, and Students. Improved API response time by 40% through database indexing.",
    github: "https://github.com/Jyoti-24-05/BitConnect_",
    live: null,
  },
  {
    name: "Musix",
    period: "May 2025",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Socket.io", "JWT"],
    description:
      "Full-stack music streaming platform with dynamic playlists, real-time chat, and live listening activity tracking. Admin dashboard for catalog management with CRUD operations for songs, albums, artists, and users.",
    github: "https://github.com/Jyoti-24-05/spotify2.0",
    live: null,
  },
  {
    name: "Article to Podcast Agent",
    period: "Nov 2024",
    tech: ["Python", "React", "GPT-4o", "ElevenLabs", "Agno", "Streamlit"],
    description:
      "End-to-end AI pipeline that converts web articles into audio. Agno agents orchestrate Firecrawl scraping and ElevenLabs voice synthesis. Improved pipeline reliability by 30% during high-concurrency testing.",
    github: "https://github.com/Jyoti-24-05/agno",
    live: null,
  },
  {
    name: "Network Intrusion Detection System",
    period: "2024",
    tech: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "NSL-KDD"],
    description:
      "Ensemble ML model combining XGBoost and Random Forest to classify network attacks across DoS, Probe, R2L, and U2R categories. Achieved 99.9% accuracy and 0.94 AUC on the NSL-KDD dataset.",
    github: "https://github.com/Jyoti-24-05",
    live: null,
  },
];

const SKILLS: Record<string, string[]> = {
  Languages: ["C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"],
  "Web & Frameworks": [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "REST APIs",
  ],
  Databases: ["MongoDB", "PostgreSQL", "MySQL"],
  "ML & Data": ["PyTorch", "TensorFlow", "Scikit-Learn", "LangChain", "Pandas"],
  Tools: ["Git", "Docker", "Linux", "Postman", "AWS (basics)"],
};

// ─── Icons ───────────────────────────────────────────────────────────────────

function IconGitHub() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

function IconArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.25, rootMargin: "0px 0px -40% 0px" }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        <div className="lg:flex lg:gap-12">
          {/* ── Sidebar ─────────────────────────────────────────────────── */}
          <header className="lg:sticky lg:top-0 lg:h-screen lg:w-[44%] lg:flex lg:flex-col lg:justify-between lg:py-24 py-16">
            {/* Top block */}
            <div>
              <a href="/" className="block">
                <h1
                  className="text-[1.75rem] font-semibold leading-tight tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Jyoti Kumari
                </h1>
              </a>

              <p
                className="mt-3 text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Full-Stack Developer
              </p>

              <p
                className="mt-2 text-xs leading-relaxed max-w-[220px]"
                style={{ color: "var(--text-muted)" }}
              >
                3rd year ECE · BIT Mesra, Ranchi
              </p>

              {/* Nav — desktop only */}
              <nav className="mt-14 hidden lg:block" aria-label="On-page">
                <ul className="space-y-0.5">
                  {NAV_ITEMS.map(({ id, label }) => {
                    const active = activeSection === id;
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="group flex items-center gap-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-150"
                          style={{
                            color: active
                              ? "var(--text-primary)"
                              : "var(--text-muted)",
                          }}
                        >
                          <span
                            className="nav-line block h-px"
                            style={{
                              width: active ? "48px" : "24px",
                              backgroundColor: active
                                ? "var(--text-primary)"
                                : "var(--text-muted)",
                            }}
                          />
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Bottom: social links */}
            <div className="flex items-center gap-4 mt-10 lg:mt-0">
              <a
                href="https://github.com/Jyoti-24-05"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="transition-colors duration-150 text-muted hover:text-primary"
              >
                <IconGitHub />
              </a>
              <a
                href="https://linkedin.com/in/jyoti-kumari-08a0b3287"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="transition-colors duration-150 text-muted hover:text-primary"
              >
                <IconLinkedIn />
              </a>
              <a
                href="mailto:jyotika918273@gmail.com"
                aria-label="Email"
                className="transition-colors duration-150"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <IconMail />
              </a>
            </div>
          </header>

          {/* ── Main content ──────────────────────────────────────────────── */}
          <main className="lg:w-[56%] lg:py-24 pb-24">
            {/* ── About ── */}
            <section id="about" className="mb-28 scroll-mt-20 lg:scroll-mt-24">
              <SectionLabel>About</SectionLabel>

              <div
                className="space-y-4 text-sm leading-[1.85]"
                style={{ color: "var(--text-secondary)" }}
              >
                <p>
                  I'm a third-year ECE student at{" "}
                  <span style={{ color: "var(--text-primary)" }}>
                    Birla Institute of Technology, Mesra
                  </span>
                  , interested in full-stack development and applied ML. Most of
                  my work lives at the backend — APIs, real-time systems, data
                  pipelines — though I build full products end-to-end.
                </p>
                <p>
                  I'm comfortable across the stack: React and Next.js on the
                  front, Node/Express or Python on the back, with databases and
                  cloud gluing it together. For ML work I mostly reach for
                  Scikit-learn, PyTorch, and LangChain.
                </p>
                <p>
                  Outside of code,{" "}
                  <span style={{ color: "var(--text-primary)" }}>
                    I draw and paint
                  </span>{" "}
                  — usually late at night when the screen light is the only lamp on.
                </p>
              </div>

              {/* Stats row */}
              <div
                className="mt-8 flex gap-8 border-t pt-6"
                style={{ borderColor: "var(--border)" }}
              >
                {[
                  { value: "8.5", label: "GPA" },
                  { value: "1710", label: "LeetCode" },
                  { value: "300+", label: "Problems" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p
                      className="text-xl font-semibold tabular-nums"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {value}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Projects ── */}
            <section id="projects" className="mb-28 scroll-mt-20 lg:scroll-mt-24">
              <SectionLabel>Projects</SectionLabel>

              <div className="space-y-3">
                {PROJECTS.map((p) => (
                  <ProjectCard key={p.name} project={p} />
                ))}
              </div>

              <div className="mt-7">
                <a
                  href="https://github.com/Jyoti-24-05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs transition-colors duration-150 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  All repositories on GitHub
                  <IconArrowUpRight />
                </a>
              </div>
            </section>

            {/* ── Skills ── */}
            <section id="skills" className="mb-28 scroll-mt-20 lg:scroll-mt-24">
              <SectionLabel>Skills</SectionLabel>

              <div className="space-y-5">
                {Object.entries(SKILLS).map(([category, items]) => (
                  <div key={category}>
                    <p
                      className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded px-2.5 py-1 text-xs"
                          style={{
                            border: "1px solid var(--border)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div
                className="mt-10 border-t pt-8"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="mb-4 text-[10px] font-semibold uppercase tracking-[0.12em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Education
                </p>

                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Birla Institute of Technology, Mesra
                  </p>
                  <p
                    className="mt-0.5 text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    B.Tech · Electronics and Communication Engineering
                  </p>
                  <p
                    className="mt-0.5 text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Sep 2023 – May 2027 · GPA 8.5
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div
                className="mt-8 border-t pt-8"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="mb-4 text-[10px] font-semibold uppercase tracking-[0.12em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Highlights
                </p>

                <ul className="space-y-2.5">
                  {[
                    "EY Hackathon — LoanEase, an AI-driven loan assistant for TATA Capital",
                    "LeetCode rating 1710 · Top 10% · 300+ problems across DP, Graphs, and Trees",
                    "Executive Body, IET BIT Mesra — organized 3+ coding contests with 200+ participants",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-xs leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="mt-[5px] block h-1 w-1 shrink-0 rounded-full"
                        style={{ background: "var(--text-muted)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Footer */}
            <footer>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Built with{" "}
                <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>{" "}
                and{" "}
                <ExternalLink href="https://tailwindcss.com">
                  Tailwind CSS
                </ExternalLink>
                , deployed on{" "}
                <ExternalLink href="https://vercel.com">Vercel</ExternalLink>.
                All text set in{" "}
                <ExternalLink href="https://rsms.me/inter/">Inter</ExternalLink>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-6 text-[10px] font-semibold uppercase tracking-[0.14em] lg:sr-only"
      style={{ color: "var(--text-muted)" }}
    >
      {children}
    </h2>
  );
}

type Project = (typeof PROJECTS)[number];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-md p-4 transition-colors duration-150 cursor-default"
      style={{
        border: "1px solid",
        borderColor: hovered ? "#30363d" : "var(--border)",
        background: hovered ? "var(--bg-card)" : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Name + period */}
          <div className="flex items-baseline gap-3 mb-1.5">
            <h3
              className="text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              {project.name}
            </h3>
            <span
              className="shrink-0 text-[11px]"
              style={{ color: "var(--text-muted)" }}
            >
              {project.period}
            </span>
          </div>

          {/* Description */}
          <p
            className="text-xs leading-relaxed mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded px-2 py-0.5 text-[11px]"
                style={{
                  background: "rgba(88, 166, 255, 0.07)",
                  color: "rgba(88, 166, 255, 0.7)",
                  border: "1px solid rgba(88, 166, 255, 0.12)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex shrink-0 gap-2 mt-0.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="transition-colors duration-150"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              <IconGitHub />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live demo`}
              className="transition-colors duration-150"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              <IconArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="transition-colors duration-150 hover:underline underline-offset-2"
      style={{ color: "var(--text-secondary)" }}
    >
      {children}
    </a>
  );
}
