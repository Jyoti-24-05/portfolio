import type { Metadata } from "next";
// Ignore TS error for side-effect CSS import in this file
// @ts-ignore
import "./globals.css";

export const metadata: Metadata = {
  title: "Jyoti Kumari",
  description:
    "Full-stack developer and 3rd year ECE student at BIT Mesra. Building web apps and ML pipelines.",
  openGraph: {
    title: "Jyoti Kumari",
    description:
      "Full-stack developer and 3rd year ECE student at BIT Mesra.",
    url: "https://jyoti-portfolio.vercel.app",
    siteName: "Jyoti Kumari",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jyoti Kumari",
    description: "Full-stack developer and 3rd year ECE student at BIT Mesra.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
