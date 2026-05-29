// "use client";

// import { projects } from "../lib/data";
// import SectionHeading from "./SectionHeading";
// import RevealOnScroll from "./RevealOnScroll";

// const ExternalIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//     <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//     <polyline points="15 3 21 3 21 9" />
//     <line x1="10" y1="14" x2="21" y2="3" />
//   </svg>
// );

// const GithubIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//     <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
//   </svg>
// );

// function StatusBadge({ status }) {
//   if (status === "live") {
//     return (
//       <span className="flex items-center gap-1.5 font-mono text-xs text-sage/80">
//         <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
//         Live
//       </span>
//     );
//   }
//   return (
//     <span className="font-mono text-xs text-fg-muted/60 bg-bg-accent/40 px-2 py-0.5 rounded">
//       Coming Soon
//     </span>
//   );
// }

// function ProjectCard({ project }) {
//   return (
//     <div className="group bg-bg-card border border-border/50 rounded-lg p-7 hover:border-sage/30 transition-colors duration-300 card-hover">
//       {/* Subtitle */}
//       <p className="font-mono text-sm text-sage mb-1 tracking-wider">
//         {project.subtitle}
//       </p>

//       {/* Title */}
//       <h3 className="font-display font-bold text-2xl text-fg-primary mb-4 group-hover:text-sage transition-colors duration-300">
//         {project.title}
//       </h3>

//       {/* Description */}
//       <p className="text-fg-secondary text-base leading-relaxed mb-6">
//         {project.description}
//       </p>

//       {/* Tech stack */}
//       <div className="flex flex-wrap gap-2 mb-6">
//         {project.tech.map((t) => (
//           <span
//             key={t}
//             className="font-mono text-xs text-sage/80 bg-sage/5 border border-sage/20 px-2.5 py-1 rounded"
//           >
//             {t}
//           </span>
//         ))}
//       </div>

//       {/* Status + links */}
//       <div className="flex items-center gap-5">
//         <StatusBadge status={project.status} />
//         {project.githubUrl && (
//           <a
//             href={project.githubUrl}
//             target="_blank"
//             rel="noreferrer"
//             className="text-fg-muted hover:text-sage transition-colors duration-300"
//             aria-label={`${project.title} GitHub`}
//           >
//             <GithubIcon />
//           </a>
//         )}
//         {project.liveUrl ? (
//           <a
//             href={project.liveUrl}
//             target="_blank"
//             rel="noreferrer"
//             className="text-fg-muted hover:text-sage transition-colors duration-300"
//             aria-label={`${project.title} live demo`}
//           >
//             <ExternalIcon />
//           </a>
//         ) : (
//           <span className="text-fg-muted/20 cursor-not-allowed"><ExternalIcon /></span>
//         )}
//       </div>
//     </div>
//   );
// }

// export default function Projects() {
//   return (
//     <section id="projects" className="py-28 px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto">
//       <RevealOnScroll>
//         <SectionHeading number="04" title="Things I've Built" />
//       </RevealOnScroll>

//       <div className="flex flex-col gap-6">
//         {projects.map((project, i) => (
//           <RevealOnScroll key={project.id} delay={i * 80}>
//             <ProjectCard project={project} />
//           </RevealOnScroll>
//         ))}
//       </div>
//     </section>
//   );
// }







"use client";

import { projects } from "../lib/data";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import Image from "next/image";

const ExternalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

function StatusBadge({ status }) {
  if (status === "live") {
    return (
      <span className="flex items-center gap-1.5 font-mono text-xs text-sage/80">
        <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
        Live
      </span>
    );
  }
  return (
    <span className="font-mono text-xs text-fg-muted/60 bg-bg-accent/40 px-2 py-0.5 rounded">
      Coming Soon
    </span>
  );
}

function ProjectRow({ project }) {
  return (
    <div className="group relative flex flex-col md:flex-row gap-8 items-center">

      {/* Text — left side */}
      <div className="w-full md:w-5/12 z-10 text-left flex-shrink-0">
        <p className="font-mono text-sm text-sage mb-1 tracking-wider">
          {project.subtitle}
        </p>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-fg-primary mb-4 group-hover:text-sage transition-colors duration-300">
          {project.title}
        </h3>
        <div className="bg-bg-secondary border border-border/50 rounded-lg p-5 mb-5 shadow-lg">
          <p className="text-fg-primary text-base leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-xs text-sage/80 bg-sage/5 border border-sage/20 px-2.5 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <StatusBadge status={project.status} />
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer"
              className="text-fg-muted hover:text-sage transition-colors duration-300"
              aria-label={`${project.title} GitHub`}>
              <GithubIcon />
            </a>
          )}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer"
              className="text-fg-muted hover:text-sage transition-colors duration-300"
              aria-label={`${project.title} live demo`}>
              <ExternalIcon />
            </a>
          ) : (
            <span className="text-fg-muted/20 cursor-not-allowed"><ExternalIcon /></span>
          )}
        </div>
      </div>

      {/* Preview — right side */}
      <div className="w-full md:w-7/12 flex-shrink-0">
        <div className="relative rounded-lg overflow-hidden border border-border/50 bg-bg-card group-hover:border-sage/30 transition-colors duration-500 shadow-xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/30 bg-bg-secondary">
            <span className="w-3 h-3 rounded-full bg-red-400/50" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/50" />
            <span className="w-3 h-3 rounded-full bg-green-400/50" />
            <div className="flex-1 mx-4 h-5 bg-bg-accent/60 rounded flex items-center justify-center">
              <span className="font-mono text-xs text-fg-muted/50 truncate px-2">
                {project.liveUrl
                  ? project.liveUrl.replace("https://", "")
                  : `${project.title.toLowerCase().replace(/\s+/g, "-")}.vercel.app`}
              </span>
            </div>
          </div>
          {/* Screenshot */}
          <div className="relative w-full bg-bg-secondary overflow-hidden">
  <Image
    src={project.image}
    alt={`${project.title} screenshot`}
    width={1200}
    height={750}
    className="w-full h-auto grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
    sizes="(max-width: 768px) 100vw, 58vw"
    onError={(e) => { e.currentTarget.style.display = "none"; }}
  />
  <div className="absolute inset-0 bg-sage/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-fg-muted/25 pointer-events-none">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              <span className="font-mono text-xs tracking-widest"></span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto">
      <RevealOnScroll>
        <SectionHeading number="04" title="Things I've Built" />
      </RevealOnScroll>
      <div className="space-y-28">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.id} delay={i * 80}>
            <ProjectRow project={project} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
