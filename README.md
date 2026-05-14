# Software Engineer Portfolio

A modern, premium portfolio website built with Next.js, TypeScript, TailwindCSS, and Framer Motion. Features a sleek dark theme with smooth animations and an AI startup aesthetic.

## 🎨 Design Features

- **Modern AI Startup Aesthetic**: Minimal, technical, and elegant design
- **Dark Theme**: Custom color palette optimized for eye comfort
- **Smooth Animations**: Framer Motion animations throughout
- **Glassmorphism**: Subtle glass effect on select components
- **Fully Responsive**: Optimized for all device sizes
- **SEO Optimized**: Metadata configuration for search engines
- **Static Generation**: Fully static website for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter, Space Grotesk, JetBrains Mono

## 🎯 Color Palette

- **Background**: #0B0F19
- **Surface**: #111827
- **Primary Accent**: #3B82F6
- **Secondary Accent**: #8B5CF6
- **Cyan Glow**: #22D3EE
- **Primary Text**: #F8FAFC
- **Secondary Text**: #94A3B8

## 📁 Folder Structure

```
src/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable UI components
├── sections/         # Page section components
├── data/            # Static data files
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── styles/          # Global CSS and Tailwind
└── types/           # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

Edit the data files in `src/data/`:
- `navigation.ts` - Navigation links
- `projects.ts` - Portfolio projects
- `skills.ts` - Technical skills
- `experience.ts` - Work experience

### Modify Colors

Update the color variables in:
- `tailwind.config.ts` - Theme colors
- `src/styles/globals.css` - Color utilities

### Add New Sections

1. Create a new component in `src/sections/`
2. Import and add it to `src/app/page.tsx`

## ✨ Features

### Pages
- **Home**: Hero section with introduction
- **About**: Skills showcase with categorized expertise
- **Experience**: Professional work history timeline
- **Projects**: Portfolio of featured and recent projects
- **Contact**: Contact form and social links

### Components
- Reusable Button component with variants
- Card component with glassmorphism
- Motion animations (FadeUp, Stagger, etc.)
- Navigation bar with sticky positioning
- Footer with social links
- Project showcase cards

### Animations
- Fade-up transitions
- Stagger animations for lists
- Hover lift effects
- Smooth page transitions
- Scroll-triggered animations

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Other Platforms

This is a static Next.js site that can be deployed to:
- Netlify
- AWS Amplify
- GitHub Pages
- Any static hosting service

Build the static site:
```bash
npm run build
```

The output will be in the `out` directory.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - Feel free to use this template for your own portfolio

## 🤝 Contributing

Feel free to fork this repository and customize it for your needs.

---

**Built with ❤️ using Next.js and TailwindCSS**
