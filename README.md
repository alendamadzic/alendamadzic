# Personal Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing professional experience, projects, and skills with a clean, minimalist design, dark/light theme support, and smooth animations.

![Next.js](https://img.shields.io/badge/Next.js-15.1.4-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)

## 🚀 Project Overview

This portfolio is built using modern web technologies to create a fast, responsive, and user-friendly experience. The site showcases professional experience, projects, and technical skills in an engaging format.

### Key Features

- **Modern Tech Stack**: Built with Next.js 15 and React 19 for optimal performance
- **Type-Safe**: Fully typed with TypeScript for robust development
- **Responsive Design**: Tailwind CSS for beautiful, adaptive layouts
- **Theme Support**: Light/dark mode using next-themes
- **Smooth Animations**: Powered by Motion library
- **Analytics**: Integrated Vercel Analytics and Speed Insights
- **Accessible UI**: Clean, accessible components using Radix UI
- **Professional Sections**: 
  - Profile and bio
  - Work experience with company showcases
  - Projects portfolio
  - Tech stack highlights
  - Reading recommendations
  - Contact information

## 🛠️ Technologies

### Core
- **Framework**: [Next.js](https://nextjs.org/) 15.1.4
- **UI Library**: [React](https://react.dev/) 19.0.0
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.4.1

### UI Components & Design
- [Radix UI](https://www.radix-ui.com/) - Accessible UI primitives
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Class Variance Authority](https://cva.style/docs) - Component variants
- [Tailwind Merge](https://github.com/dcastil/tailwind-merge) - Smart class merging
- [Motion](https://motion.dev/) - Animation library

### Development Tools
- [ESLint](https://eslint.org/) - Code quality
- [PostCSS](https://postcss.org/) - CSS processing
- [Next Themes](https://github.com/pacocoursey/next-themes) - Theme management

### Analytics
- [Vercel Analytics](https://vercel.com/analytics) - Usage insights
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights) - Performance monitoring

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- Package manager (npm, yarn, pnpm, or bun)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Create a `.env.local` file in the root directory (if needed):
   ```env
   # Add your environment variables here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── public/             # Static assets
│   ├── companies/      # Company logos
│   ├── projects/       # Project images
│   └── stack/          # Tech stack icons
├── src/
│   ├── app/            # Next.js app router pages
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # UI components
│   │   ├── profile/    # Profile components
│   │   ├── projects/   # Project showcases
│   │   ├── reading-list/ # Reading recommendations
│   │   ├── recommendations/ # Personal recommendations
│   │   ├── stack/      # Tech stack components
│   │   └── ui/         # Reusable UI components
│   └── lib/            # Utility functions
└── ... config files    # Configuration files
```

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Development Workflow

1. Create a new branch for your feature or fix
2. Make changes following the project's code style
3. Test changes locally
4. Submit a pull request

### Customization

- Update personal information in relevant components
- Add new projects in `src/components/projects/projects.ts`
- Modify tech stack in `src/components/stack/stack.ts`
- Update reading list in `src/components/reading-list/articles.ts`

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com), the platform created by the makers of Next.js.

### Deployment Steps

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

For more details on deployment, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
