import { skills } from "../lib/data";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";

const categories = [
  { label: "Languages", key: "languages", icon: "{ }" },
  { label: "Web & Frameworks", key: "web", icon: "</>" },
  { label: "Databases", key: "databases", icon: "⬡" },
  { label: "Tools & Cloud", key: "tools", icon: "⚙" },
  { label: "ML & Data", key: "ml", icon: "◈" },
  { label: "Core Concepts", key: "concepts", icon: "⬡" },
];

function SkillPill({ name, delay }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-2 rounded font-mono text-sm text-fg-secondary bg-bg-secondary border border-border/50 hover:border-sage/40 hover:text-sage hover:bg-sage/5 transition-all duration-300 cursor-default"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-sage/50 flex-shrink-0" />
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-16 lg:px-32 xl:px-48 max-w-6xl mx-auto">
      <RevealOnScroll>
        <SectionHeading number="04" title="Skills & Stack" />
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {categories.map(({ label, key, icon }, ci) => (
          <RevealOnScroll key={key} delay={ci * 70}>
            <div className="bg-bg-card border border-border/50 rounded-lg p-5 hover:border-border transition-colors duration-400 group">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-base text-sage/60 group-hover:text-sage transition-colors duration-300">
                  {icon}
                </span>
                <h3 className="font-mono text-sm text-fg-muted tracking-widest uppercase">
                  {label}
                </h3>
              </div>
              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill, si) => (
                  <SkillPill key={skill} name={skill} delay={si * 30} />
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Currently learning strip */}
      <RevealOnScroll delay={200}>
        <div className="mt-8 flex flex-wrap items-center gap-3 px-5 py-4 rounded-lg border border-sage/20 bg-sage/5">
          <span className="font-mono text-sm text-sage tracking-wider">Currently exploring →</span>
          {["Kubernetes", "Rust", "RAG systems", "WebAssembly"].map((t) => (
            <span key={t} className="font-mono text-sm text-fg-muted/70 px-2 py-1 rounded border border-border/50">
              {t}
            </span>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
