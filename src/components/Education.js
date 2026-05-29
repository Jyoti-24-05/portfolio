import { education } from "../lib/data";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 px-6 md:px-16 lg:px-32 xl:px-48 max-w-6xl mx-auto"
    >
      <RevealOnScroll>
        <SectionHeading number="02" title="Education" />
      </RevealOnScroll>

      <div className="max-w-2xl">
        {education.map((edu, i) => (
          <RevealOnScroll key={i} delay={i * 100}>
            <div className="relative pl-6 border-l border-border/50 hover:border-sage/40 transition-colors duration-500 pb-10">
              {/* Timeline dot */}
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-sage bg-bg" />

              <div className="mb-1">
                <span className="font-mono text-sm text-sage tracking-wider uppercase">
                  {edu.period}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-fg-primary">
                {edu.school}
              </h3>
              <p className="text-sage text-base font-medium mt-0.5">
                {edu.degree}
                <span className="text-fg-muted font-normal"> · {edu.location}</span>
              </p>

              <span className="inline-block mt-3 font-mono text-sm text-sage bg-sage/10 px-2 py-0.5 rounded">
                {edu.gpa}
              </span>
            </div>
          </RevealOnScroll>
        ))}

        {/* Trailing dashed line */}
        <RevealOnScroll delay={300}>
          <div className="relative pl-6 border-l border-border/30 border-dashed">
            <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-border/50 bg-bg" />
            <p className="font-mono text-sm text-fg-muted/50 tracking-wide italic">
              B.Tech ongoing — expected May 2027.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}