# Portfolio - Founding-level Full Stack / Product Engineer

A minimal, black and white portfolio website built with Next.js, showcasing product mindset, full stack engineering skills, and case studies.

## Features

- **Minimal Design**: Clean, professional black and white theme
- **Mobile Friendly**: Fully responsive design that works on all devices
- **3D Grid Background**: Subtle grid pattern with 3D perspective effect
- **Middle Grid Layout**: Content centered with space on both sides (blog-like reading experience)
- **Case Studies**: Two detailed case studies showcasing technical work
- **About Page**: Personal introduction and work philosophy

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (for animations)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── about/              # About page
│   ├── case-study/         # Case study pages
│   │   ├── techmonk/
│   │   └── personalization-engine/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/
│   ├── ContentContainer.tsx # Content wrapper with max-width
│   ├── GridBackground.tsx  # 3D grid background component
│   └── Navigation.tsx      # Navigation component
└── public/                 # Static assets
```

## Customization

### Update Personal Information

- Edit `app/page.tsx` for landing page content
- Edit `app/about/page.tsx` for about page content
- Update email links throughout the site

### Styling

- Global styles: `app/globals.css`
- Grid background: `components/GridBackground.tsx`
- Color scheme: All colors are black/white/gray - modify in Tailwind classes

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
