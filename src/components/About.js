import { personal, education } from "../lib/data";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 md:px-16 lg:px-32 xl:px-48 max-w-6xl mx-auto"
    >
      <RevealOnScroll>
        <SectionHeading number="01" title="About Me" />
      </RevealOnScroll>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Bio text */}
        <div className="lg:col-span-3 space-y-5">
          {personal.bio.map((para, i) => (
            <RevealOnScroll key={i} delay={i * 80}>
              <p className="text-fg-secondary leading-relaxed text-lg md:text-xl font-light">
                {para}
              </p>
            </RevealOnScroll>
          ))}

          {/* Hobbies tag */}
          <RevealOnScroll delay={260}>
            <div className="flex items-start gap-3 mt-6 pt-6 border-t border-border/40">
              <span className="text-2xl mt-0.5"></span>
              <p className="text-fg-muted text-base leading-relaxed italic">
                When I&apos;m not coding, you&apos;ll find me with a sketchbook or
                painting — drawing has a way of sharpening how I see
                composition and space, which shows up in every UI I design.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Education timeline */}
        <div className="lg:col-span-2">
          <RevealOnScroll delay={160} direction="right">
            <div className="bg-bg-card border border-border/50 rounded-lg p-6 space-y-6">
              <h3 className="font-mono text-sm text-sage tracking-widest uppercase mb-4">
                Education
              </h3>
              {education.map((edu, i) => (
                <div
                  key={i}
                  className={`relative pl-4 ${
                    i < education.length - 1
                      ? "pb-6 border-b border-border/30"
                      : ""
                  }`}
                >
                  <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-sage/60" />
                  <p className="font-display font-semibold text-fg-primary text-base leading-snug">
                    {edu.school}
                  </p>
                  <p className="text-fg-secondary text-sm mt-0.5">{edu.degree}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-mono text-sm text-fg-muted">
                      {edu.period}
                    </span>
                    <span className="font-mono text-sm text-sage bg-sage/10 px-2 py-0.5 rounded">
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Quick stats */}
          <RevealOnScroll delay={240} direction="right">
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { val: "300+", label: "LeetCode Problems" },
                { val: "8.5", label: "Current GPA" },
                { val: "4", label: "Live Projects" },
                { val: "99.9%", label: "Best Model Accuracy" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="bg-bg-card border border-border/40 rounded-lg p-3 text-center hover:border-sage/30 transition-colors duration-300"
                >
                  <p className="font-display font-bold text-xl text-sage">{val}</p>
                  <p className="font-mono text-sm text-fg-muted mt-0.5 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
