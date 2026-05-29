import { personal } from "../lib/data";
import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto text-center"
    >
      <RevealOnScroll>
        <span className="font-mono text-base text-sage tracking-widest">07. What&apos;s Next?</span>
      </RevealOnScroll>

      <RevealOnScroll delay={80}>
        <h2 className="font-display font-extrabold text-4xl md:text-6xl text-fg-primary mt-4 mb-6 leading-tight">
          Get In Touch
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={140}>
        <p className="text-fg-secondary text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-10 font-light">
          I&apos;m currently open to internships, research collaborations, and
          interesting side-project opportunities. Whether you have a question, a
          proposal, or just want to say hi — my inbox is always open.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={180}>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 border border-sage/60 text-sage font-mono text-base tracking-wider rounded hover:bg-sage/10 hover:border-sage transition-all duration-300 hover:shadow-lg hover:shadow-sage/10 group"
        >
          Say Hello
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </RevealOnScroll>

      {/* Social row */}
      <RevealOnScroll delay={240}>
        <div className="flex items-center justify-center gap-8 mt-14">
          {[
            { label: "GitHub", href: personal.github },
            { label: "LinkedIn", href: personal.linkedin },
            { label: "Email", href: `mailto:${personal.email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="font-mono text-sm text-fg-muted hover:text-sage tracking-widest uppercase transition-colors duration-300 sage-underline"
            >
              {label}
            </a>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}