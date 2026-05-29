import { experience } from "../lib/data";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6 md:px-16 lg:px-32 xl:px-48 max-w-6xl mx-auto"
    >
      <RevealOnScroll>
        <SectionHeading number="02" title="Experience" />
      </RevealOnScroll>

      <div className="max-w-2xl">
        {experience.map((exp, i) => (
          <RevealOnScroll key={i} delay={i * 100}>
            <div className="relative pl-6 border-l border-border/50 hover:border-sage/40 transition-colors duration-500 pb-2">
              {/* Timeline dot */}
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-sage bg-bg" />

              <div className="mb-1">
                <span className="font-mono text-sm text-sage tracking-wider uppercase">
                  {exp.period}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-fg-primary">
                {exp.role}
              </h3>
              <p className="text-sage text-base font-medium mt-0.5">
                {exp.org}
                <span className="text-fg-muted font-normal"> · {exp.location}</span>
              </p>

              <ul className="mt-4 space-y-3">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-fg-secondary text-base leading-relaxed">
                    <span className="text-sage mt-1 flex-shrink-0">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}

        {/* Future placeholder */}
        <RevealOnScroll delay={200}>
          <div className="relative pl-6 border-l border-border/30 border-dashed mt-10">
            <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-border/50 bg-bg" />
            <p className="font-mono text-sm text-fg-muted/50 tracking-wide italic">
              More to come — open to internship and research opportunities.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
