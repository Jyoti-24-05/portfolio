import "./globals.css";

export const metadata = {
  title: "Jyoti Kumari | Software Developer",
  description:
    "Software Developer & ECE student at BIT Mesra. I build performant, accessible web applications and ML systems.",
  keywords: [
    "Jyoti Kumari",
    "Software Developer",
    "BIT Mesra",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Machine Learning",
  ],
  authors: [{ name: "Jyoti Kumari" }],
  openGraph: {
    title: "Jyoti Kumari | Software Developer",
    description: "Software Developer & ECE student at BIT Mesra.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Fira+Code:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-fg-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
