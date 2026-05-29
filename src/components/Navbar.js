"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Projects", href: "#projects", num: "03" },
  { label: "Skills", href: "#skills", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-md border-b border-border/40 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-12 h-18 flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="font-display font-bold text-xl text-fg-primary hover:text-sage transition-colors duration-300 group"
            aria-label="Home"
          >
            <span className="text-sage font-mono text-base">{"{"}</span>
            <span className="mx-1 group-hover:text-sage transition-colors">JK</span>
            <span className="text-sage font-mono text-base">{"}"}</span>
          </a>

          {/* Desktop nav */}
          <ol className="hidden md:flex items-center gap-1 list-none">
            {navLinks.map(({ label, href, num }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className={`relative px-4 py-2 font-mono text-sm tracking-widest uppercase transition-colors duration-300 group ${
                    activeSection === href.slice(1)
                      ? "text-sage"
                      : "text-fg-muted hover:text-fg-primary"
                  }`}
                >
                  <span className="text-sage opacity-70 mr-1 text-sm">{num}.</span>
                  {label}
                  {activeSection === href.slice(1) && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-sage/50" />
                  )}
                </a>
              </li>
            ))}
            <li className="ml-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-sage/60 text-sage font-mono text-sm tracking-widest uppercase rounded hover:bg-sage/10 transition-all duration-300"
              >
                Résumé
              </a>
            </li>
          </ol>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-px w-6 bg-fg-secondary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-px w-4 bg-fg-secondary transition-all duration-300 ${menuOpen ? "opacity-0" : "group-hover:w-6"}`} />
            <span className={`block h-px w-6 bg-fg-secondary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-bg/95 backdrop-blur-lg"
          onClick={() => setMenuOpen(false)}
        />
        <nav className="absolute right-0 top-0 h-full w-72 bg-bg-card border-l border-border flex flex-col justify-center px-10 gap-6">
          <ol className="list-none flex flex-col gap-6">
            {navLinks.map(({ label, href, num }, i) => (
              <li
                key={href}
                style={{ transitionDelay: `${i * 60}ms` }}
                className={`transition-all duration-400 ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              >
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className="flex flex-col group"
                >
                  <span className="font-mono text-sm text-sage mb-1">{num}.</span>
                  <span className="font-display text-2xl font-semibold text-fg-primary group-hover:text-sage transition-colors">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-4 block text-center px-5 py-3 border border-sage/60 text-sage font-mono text-sm rounded hover:bg-sage/10 transition-all duration-300"
          >
            Résumé ↗
          </a>
        </nav>
      </div>
    </>
  );
}
