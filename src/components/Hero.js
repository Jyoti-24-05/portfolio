"use client";

import { useEffect, useState } from "react";
import { personal } from "../lib/data";

const roles = [
  "Full-Stack Developer",
  "ML Engineer",
  "Problem Solver",
  "ECE Student @ BIT",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 xl:px-48 pt-16"
    >
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(143,168,154,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className={`max-w-3xl transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Greeting */}
        <p className="font-mono text-base md:text-lg text-sage mb-5 tracking-wider">
          Hi there, I&apos;m —
        </p>

        {/* Name */}
        <h1
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-fg-primary leading-none mb-4"
          style={{ letterSpacing: "-0.02em" }}
        >
          Jyoti Kumari
          <span className="text-sage">.</span>
        </h1>

        {/* Dynamic role */}
        <h2 className="font-display font-semibold text-3xl md:text-5xl lg:text-6xl text-fg-muted leading-tight mb-8">
          <span>{displayed}</span>
          <span className="cursor" />
        </h2>

        {/* Bio snippet */}
        <p className="text-fg-secondary text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light">
          I build performant, accessible web applications and ML systems.
          Currently studying ECE at{" "}
          <span className="text-sage font-medium">BIT Mesra</span>, Ranchi —
          and always looking for the next interesting problem to solve.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center">
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3.5 bg-sage/10 border border-sage/50 text-sage font-mono text-base tracking-wider rounded hover:bg-sage/20 hover:border-sage transition-all duration-300 hover:shadow-lg hover:shadow-sage/10"
          >
            View My Work
          </button>
          <a
            href={`mailto:${personal.email}`}
            className="px-7 py-3.5 text-fg-secondary font-mono text-base tracking-wider rounded border border-border hover:border-fg-muted hover:text-fg-primary transition-all duration-300 hover:bg-bg-card"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fg-muted hover:text-sage transition-colors duration-300 group"
        aria-label="Scroll down"
      >
        <span className="font-mono text-sm tracking-widest opacity-60"></span>
        <span className="w-px h-10 bg-border/60 group-hover:bg-sage/40 transition-colors duration-300 animate-pulse" />
      </button>
    </section>
  );
}
