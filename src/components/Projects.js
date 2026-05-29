import { projects } from "../lib/data";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";

const ExternalIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const FolderIcon = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

function StatusBadge({ status }) {
  if (status === "live") {
    return (
      <span className="flex items-center gap-1.5 font-mono text-sm text-sage/80">
        <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
        Live
      </span>
    );
  }
  return (
    <span className="font-mono text-sm text-fg-muted/60 bg-bg-accent/40 px-2 py-0.5 rounded">
      Coming Soon
    </span>
  );
}

function FeaturedProject({ project, reversed }) {
  return (
    <div className={`relative grid md:grid-cols-12 gap-4 items-center ${reversed ? "direction-rtl" : ""}`}>
      {/* Mock browser window */}
      <div className={`md:col-span-7 ${reversed ? "md:col-start-6 md:row-start-1" : "md:col-start-1"}`}>
        <div className="relative rounded-lg overflow-hidden border border-border/50 bg-bg-card group card-hover">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/30 bg-bg-secondary">
            <span className="w-2.5 h-2.5 rounded-full bg-fg-muted/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-fg-muted/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-fg-muted/20" />
            <div className="flex-1 mx-3 h-5 bg-bg-accent/50 rounded text-center">
              <span className="font-mono text-xs text-fg-muted/50 leading-5">
                {project.liveUrl
                  ? project.liveUrl.replace("https://", "")
                  : project.title.toLowerCase().replace(" ", "-") + ".vercel.app"}
              </span>
            </div>
          </div>
          {/* Content */}
          <div className="p-5 min-h-[170px] flex flex-col justify-between">
            <div className="space-y-2.5 mb-4">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-sage/60 text-sm mt-0.5 flex-shrink-0">▸</span>
                  <span className="font-mono text-sm text-fg-muted/70 leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs text-fg-muted/60 bg-bg-accent/50 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className={`md:col-span-6 ${reversed ? "md:col-start-1 md:row-start-1 text-left" : "md:col-start-7 text-left md:text-right"} z-10`}>
        <div className={`flex items-center gap-3 mb-2 justify-start ${!reversed ? "md:justify-end flex-row-reverse md:flex-row" : ""}`}>
          {reversed && <StatusBadge status={project.status} />}
          <span className="font-mono text-sm text-sage/80">{project.subtitle}</span>
          {!reversed && <StatusBadge status={project.status} />}
        </div>
        <h3 className="font-display font-bold text-2xl text-fg-primary mb-3">
          {project.title}
        </h3>
        <div className="bg-bg-card/80 border border-border/40 rounded-lg p-4 mb-4 backdrop-blur-sm">
          <p className="text-fg-secondary text-base leading-relaxed">{project.description}</p>
        </div>
        <div className={`flex items-center gap-4 justify-start ${!reversed ? "md:justify-end" : ""}`}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer"
              className="text-fg-muted hover:text-sage transition-colors duration-300" aria-label={`${project.title} GitHub`}>
              <GithubIcon />
            </a>
          )}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer"
              className="text-fg-muted hover:text-sage transition-colors duration-300" aria-label={`${project.title} Live Demo`}>
              <ExternalIcon />
            </a>
          ) : (
            <span className="text-fg-muted/30 cursor-not-allowed" title="Coming Soon"><ExternalIcon /></span>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-bg-card border border-border/50 rounded-lg p-6 flex flex-col h-full card-hover sage-glow group">
      <div className="flex items-start justify-between mb-5">
        <span className="text-sage/60 group-hover:text-sage transition-colors duration-300">
          <FolderIcon />
        </span>
        <div className="flex items-center gap-3">
          <StatusBadge status={project.status} />
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer"
              className="text-fg-muted hover:text-sage transition-colors" aria-label="GitHub">
              <GithubIcon />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer"
              className="text-fg-muted hover:text-sage transition-colors" aria-label="Live Demo">
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display font-bold text-xl text-fg-primary mb-1 group-hover:text-sage transition-colors duration-300">
        {project.title}
      </h3>
      <p className="font-mono text-sm text-fg-muted mb-3">{project.subtitle}</p>
      <p className="text-fg-secondary text-base leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-sm text-fg-muted/70">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6 md:px-16 lg:px-32 xl:px-48 max-w-6xl mx-auto">
      <RevealOnScroll>
        <SectionHeading number="03" title="Things I've Built" />
      </RevealOnScroll>

      {/* Featured projects */}
      <div className="space-y-24 mb-20">
        {featured.map((project, i) => (
          <RevealOnScroll key={project.id} delay={i * 80}>
            <FeaturedProject project={project} reversed={i % 2 !== 0} />
          </RevealOnScroll>
        ))}
      </div>

      {/* Other noteworthy */}
      {others.length > 0 && (
        <>
          <RevealOnScroll>
            <h3 className="text-center font-display text-xl text-fg-secondary mb-2">
              Other Noteworthy Projects
            </h3>
            <p className="text-center font-mono text-sm text-fg-muted mb-10">
              view the archive
            </p>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((project, i) => (
              <RevealOnScroll key={project.id} delay={i * 100}>
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
