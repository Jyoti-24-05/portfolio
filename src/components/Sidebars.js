"use client";

import { personal } from "../lib/data";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LeetcodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 3h14v2H5V3zm7 4c-4.97 0-9 4.03-9 9h2a7 7 0 0 1 14 0h2c0-4.97-4.03-9-9-9zm-1 3h2v6h-2V10zm0 8h2v2h-2v-2z" />
  </svg>
);

const Sidebars = () => (
  <>
    {/* Left sidebar — social icons */}
    <div className="hidden lg:flex fixed bottom-0 left-8 xl:left-12 flex-col items-center gap-5 z-30">
      <a
        href={personal.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="text-fg-muted hover:text-sage hover:-translate-y-1 transition-all duration-300"
      >
        <GithubIcon />
      </a>
      <a
        href={personal.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="text-fg-muted hover:text-sage hover:-translate-y-1 transition-all duration-300"
      >
        <LinkedInIcon />
      </a>
      <a
        href={`mailto:${personal.email}`}
        aria-label="Email"
        className="text-fg-muted hover:text-sage hover:-translate-y-1 transition-all duration-300"
      >
        <MailIcon />
      </a>
      <a
        href="https://leetcode.com"
        target="_blank"
        rel="noreferrer"
        aria-label="LeetCode"
        className="text-fg-muted hover:text-sage hover:-translate-y-1 transition-all duration-300"
      >
        <LeetcodeIcon />
      </a>
      {/* Vertical line */}
      <span className="w-px h-20 bg-border/60" />
    </div>

    {/* Right sidebar — email */}
    <div className="hidden lg:flex fixed bottom-0 right-8 xl:right-12 flex-col items-center gap-5 z-30">
      <a
        href={`mailto:${personal.email}`}
        className="font-mono text-xs text-fg-muted hover:text-sage tracking-widest transition-colors duration-300 hover:-translate-y-1 transform"
        style={{ writingMode: "vertical-rl" }}
      >
        {personal.email}
      </a>
      <span className="w-px h-20 bg-border/60" />
    </div>
  </>
);

export default Sidebars;

