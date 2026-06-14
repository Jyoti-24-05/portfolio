<div align= "center">

# Jyoti Kumari — Portfolio

Personal portfolio website — Software Developer & ECE student at BIT Mesra.  
Built with Next.js 14 (App Router), Tailwind CSS, and a custom dark forest green color palette.

🌐 **Live Site → [portfolio-jyoti-24-05.vercel.app](https://portfolio-jyoti-24-05.vercel.app/)**
</div>

---

<!-- ## 📸 Screenshots

<div align="center">

### Home Page
![Portfolio Screenshot](screenshot1.png)

### Projects sec
![Portfolio Screenshot](screenshot2.png)

### Contact me
![Portfolio Screenshot](screenshot3.png)

</div>

--- -->

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS 3.4 |
| Language | JavaScript (ES2022) |
| Fonts | Syne · DM Sans · Fira Code |
| Deployment | Vercel |

---

## Features

- **Typewriter hero** — animated role switcher cycling through developer titles
- **Scroll-reveal animations** — sections fade up as you scroll, no heavy dependencies
- **Active section tracking** — navbar highlights the current section via IntersectionObserver
- **Responsive design** — mobile-first, works across all screen sizes
- **v4-style sidebars** — fixed social icons (left) and vertical email (right) on desktop
- **Project cards** — featured layout + grid cards with live/coming-soon badges
- **Skills grid** — categorised tech stack with hover pill effects
- **Dark forest palette** — custom green color system with strong contrast
- **SEO ready** — metadata, OpenGraph, and semantic HTML throughout
- **Zero JS frameworks for animations** — pure CSS + React state only

---



## Project Structure

```
jyoti-portfolio/
├── public/
│   └── resume.pdf              ← drop your resume here
├── src/
│   ├── app/
│   │   ├── globals.css         ← color variables, base styles
│   │   ├── layout.js           ← fonts, metadata, SEO
│   │   └── page.js             ← root page
│   ├── components/
│   │   ├── Navbar.js           ← fixed top nav, mobile menu
│   │   ├── Sidebars.js         ← social icons + email sidebars
│   │   ├── Hero.js             ← typewriter intro, CTA buttons
│   │   ├── About.js            ← bio, education, stats
│   │   ├── Experience.js       ← timeline of roles
│   │   ├── Projects.js         ← featured + grid project cards
│   │   ├── Skills.js           ← categorised tech stack
│   │   ├── Achievements.js     ← hackathon, LeetCode, CodeChef
│   │   ├── Contact.js          ← email CTA, social links
│   │   ├── Footer.js
│   │   ├── RevealOnScroll.js   ← reusable scroll-reveal wrapper
│   │   └── SectionHeading.js   ← numbered section headings
│   └── lib/
│       └── data.js             ← all content in one place
├── tailwind.config.js
├── next.config.js
└── package.json
```

---
<!-- 
## Running Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/Jyoti/jyoti-portfolio.git
cd jyoti-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Updating Content

All portfolio content lives in **one file**: `src/lib/data.js`

| What to update | Where |
|---|---|
| Name, bio, email, links | `personal` object |
| Education entries | `education` array |
| Projects (title, links, tech) | `projects` array |
| Skills by category | `skills` object |
| Experience / roles | `experience` array |
| Achievements | `achievements` array |

To add a new project, append an object to the `projects` array in `data.js`:

```js
{
  id: 5,
  title: "Your Project",
  subtitle: "One-line description",
  description: "Longer paragraph...",
  tech: ["React", "Node.js"],
  liveUrl: "https://yourproject.vercel.app",
  githubUrl: "https://github.com/Jyoti/your-project",
  status: "live",          // "live" | "coming-soon"
  featured: false,         // true = large featured layout
  highlights: [
    "Key achievement 1",
    "Key achievement 2",
  ],
}
```

---

## Color Palette

Inspired by dark tropical foliage.

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#172621` | Page background |
| `bg-card` | `#2A4038` | Cards, panels |
| `bg-accent` | `#3B593F` | Subtle highlights |
| `fg-primary` | `#F0F7F4` | Main text |
| `fg-secondary` / `sage` | `#9DCE8D` | Accent, links, highlights |
| `fg-muted` | `#5A8060` | Secondary text |
| `border` | `#2A4038` | Borders, dividers |

---

## Deploying Updates

This repo is connected to Vercel — every push to `main` auto-deploys.

```bash
git add .
git commit -m "your message"
git push
```

Vercel builds and redeploys in ~30 seconds.

--- -->
