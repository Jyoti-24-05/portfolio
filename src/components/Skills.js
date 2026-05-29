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

function SkillPill({ name }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded font-mono text-sm text-fg-secondary bg-bg-secondary border border-border/50 hover:border-sage/40 hover:text-sage hover:bg-sage/5 transition-all duration-300 cursor-default">
      <span className="w-1.5 h-1.5 rounded-full bg-sage/50 flex-shrink-0" />
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto">
      <RevealOnScroll>
        <SectionHeading number="05" title="Skills & Stack" />
      </RevealOnScroll>

      {/* Equal-width grid — each card stretches to fill its cell */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {categories.map(({ label, key, icon }, ci) => (
          <RevealOnScroll key={key} delay={ci * 70}>
            {/* flex-col + h-full makes every card the same height within its row */}
            <div className="flex flex-col h-full bg-bg-card border border-border/50 rounded-lg p-5 hover:border-border transition-colors duration-300 group">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                <span className="font-mono text-base text-sage/60 group-hover:text-sage transition-colors duration-300 w-6 text-center">
                  {icon}
                </span>
                <h3 className="font-mono text-sm text-fg-muted tracking-widest uppercase">
                  {label}
                </h3>
              </div>
              {/* Pills — fill remaining vertical space */}
              <div className="flex flex-wrap gap-2 flex-1 content-start">
                {skills[key].map((skill) => (
                  <SkillPill key={skill} name={skill} />
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