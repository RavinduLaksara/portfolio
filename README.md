# Ravindu Laksara - Developer Portfolio

A modern, premium, and minimalist developer portfolio for **Ravindu Laksara**, a Product-Minded Software Engineer. Built with a focus on clean aesthetics, responsive design, and smooth animations.

## 🚀 Live Demo

*(Add your deployment link here, e.g., Vercel or Netlify link)*

## 🛠️ Tech Stack

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) (with custom SVG fallbacks for brand icons)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Typography**: [Geist Font](https://vercel.com/font) (Sans & Mono)

## ✨ Features

- **Dark Mode First**: Premium monochromatic palette with striking neon blue accents (`#3B82F6`).
- **Bento Grid Layout**: Digestible, visually appealing grids for Skills, Projects, and Experience sections.
- **Smooth Animations**: Scroll-triggered staggered fade-ins and hover lift effects using Framer Motion.
- **Mobile-First Responsive Design**: Flawless experience across mobile, tablet, and desktop devices.
- **Centralized Data Management**: All portfolio content (projects, experience, skills) is managed in a single, strongly-typed `src/lib/data.ts` file for easy updates.

## 📂 Project Structure

```
src/
├── app/                  # Next.js App Router files (layout, page, globals.css)
├── components/           # Reusable UI components (Hero, About, Projects, etc.)
│   ├── AnimatedCard.tsx  # Framer Motion wrapper for Bento Grid cards
│   ├── SectionHeading.tsx# Standardized headings for each section
│   └── icons.tsx         # Custom SVGs for brand icons (GitHub, LinkedIn)
└── lib/
    └── data.ts           # 📝 EDIT THIS FILE to update portfolio content!
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RavinduLaksara/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install / pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or yarn dev / pnpm dev
   ```

4. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 How to Update Content

All textual content, projects, skills, and experience history is stored in **`src/lib/data.ts`**. To update your portfolio in the future, you do not need to modify the UI components. Simply open `src/lib/data.ts` and edit the relevant constants.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
