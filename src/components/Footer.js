export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center border-t border-border/20">
      <p className="font-mono text-xs text-fg-muted/50 leading-relaxed">
        Designed &amp; Built by{" "}
        <span className="text-sage/70 hover:text-sage transition-colors duration-300">
          Jyoti Kumari
        </span>
        <span className="mx-2 text-border">·</span>
        Inspired by{" "}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noreferrer"
          className="text-fg-muted/70 hover:text-sage transition-colors duration-300"
        >
          Brittany Chiang
        </a>
      </p>
      <p className="font-mono text-xs text-fg-muted/30 mt-1">
        Next.js · Tailwind CSS · Beach Stillness
      </p>
    </footer>
  );
}
