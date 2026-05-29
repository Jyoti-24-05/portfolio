"use client";

import { personal } from "../lib/data";
import SectionHeading from "./SectionHeading";
import RevealOnScroll from "./RevealOnScroll";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="py-32 px-6 md:px-16 lg:px-28 xl:px-40 max-w-7xl mx-auto"
    >
      <RevealOnScroll>
        <SectionHeading number="01" title="About Me" />
      </RevealOnScroll>

      <div className="grid lg:grid-cols-3 gap-16 lg:gap-24 items-start">
        {/* Bio text — takes 2 cols */}
        <div className="lg:col-span-2 space-y-6">
          {personal.bio.map((para, i) => (
            <RevealOnScroll key={i} delay={i * 80}>
              <p className="text-fg-secondary leading-relaxed text-lg md:text-xl font-light">
                {para}
              </p>
            </RevealOnScroll>
          ))}

          {/* Hobbies tag */}
          <RevealOnScroll delay={260}>
            <div className="flex items-start gap-3 mt-8 pt-8 border-t border-border/40">
              <span className="text-2xl mt-0.5"></span>
              <p className="text-fg-muted text-base leading-relaxed italic">
                When I&apos;m not coding, you&apos;ll find me with a sketchbook or
                painting — drawing has a way of sharpening how I see
                composition and space, which shows up in every UI I design.
              </p>
            </div>
          </RevealOnScroll>

          {/* Quick stats
          <RevealOnScroll delay={300}>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
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
          </RevealOnScroll> */}
        </div>

        {/* Photo — 1 col, Brittany-style offset border */}
        <div className="flex justify-center lg:justify-end">
          <RevealOnScroll delay={160} direction="right">
            <div className="relative group w-72 h-72 md:w-80 md:h-80">
              {/* Offset border — sits behind and to bottom-right */}
              <span className="absolute inset-0 rounded border-2 border-sage/50 translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 pointer-events-none" />
              <div className="relative w-full h-full rounded overflow-hidden border border-border/60 bg-bg-card">
                {!imgError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Jyoti Kumari"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 288px, 320px"
                    onError={() => setImgError(true)}
                  />
                ) : null}
                {/* Sage tint overlay on hover*/}
                <div className="absolute inset-0 bg-sage/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                {/* Fallback */}
                {imgError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-fg-muted/40 select-none">
                    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                    <span className="font-mono text-xs mt-2 tracking-widest text-center px-4">
                      Add profile.jpg to /public
                    </span>
                  </div>
                )}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}