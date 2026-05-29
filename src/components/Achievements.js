import { achievements } from "../lib/data";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";

export default function Achievements() {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto">
      <RevealOnScroll>
        <SectionHeading number="06" title="Achievements" />
      </RevealOnScroll>

      <div className="grid md:grid-cols-3 gap-5">
        {achievements.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 100}>
            <div className="group relative bg-bg-card border border-border/50 rounded-lg p-6 overflow-hidden card-hover sage-glow h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-sage/0 to-sage/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="font-display font-bold text-fg-primary text-xl mb-2 group-hover:text-sage transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-fg-muted text-base leading-relaxed">{item.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* LeetCode stats bar */}
      <RevealOnScroll delay={150}>
        <div className="mt-6 bg-bg-card border border-border/50 rounded-lg p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-sage tracking-widest">LEETCODE STATS</span>
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Rating", val: "1710" },
              { label: "Percentile", val: "Top 10%" },
              { label: "Problems Solved", val: "300+" },
              { label: "Focus Areas", val: "DP · Graphs · Trees" },
            ].map(({ label, val }) => (
              <div key={label} className="text-center">
                <p className="font-display font-bold text-sage text-xl">{val}</p>
                <p className="font-mono text-sm text-fg-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}