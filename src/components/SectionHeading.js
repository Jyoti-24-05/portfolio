export default function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-4 mb-14">
      <span className="font-mono text-sage text-sm">{number}.</span>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-fg-primary tracking-tight">
        {title}
      </h2>
      <span
        className="flex-1 h-px max-w-xs"
        style={{ background: "linear-gradient(to right, #4A5A52, transparent)" }}
      />
    </div>
  );
}
