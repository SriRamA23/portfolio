<<<<<<< HEAD
# portfolio
=======
# Sri Ram A - Interactive Developer Portfolio

A modern, interactive developer portfolio built with Next.js, React, and Framer Motion. Features a terminal-based interface for exploring projects, experience, and achievements.
## Features
- **Terminal Interface**: Command-based navigation system
- **3D Animations**: Smooth, engaging animations powered by Framer Motion
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark Theme**: Eye-friendly dark mode with neon accents
- **Command History**: Navigate through previous commands with arrow keys
- **Real-time Feedback**: Instant visual feedback for all interactions
## Tech Stack
- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Font**: JetBrains Mono
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Commands

| Command | Alias | Description |
|---------|-------|-------------|
| `about` | `1` | Show executive summary and contact info |
| `projects` | `2` | Display all projects as 3D cards |
| `experience` | `3` | Show professional experiences |
| `achievements` | `4` | Display awards and achievements |
| `education` | `5` | List educational background |
| `certifications` | `6` | Show certification courses |
| `help` | `0` | Display help message | 

### Navigation Tips
- Use **↑** and **↓** arrow keys to navigate command history
- Type command name or number and press **Enter**
- Commands are case-insensitive

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── terminal.tsx        # Terminal UI component
│   └── content-card.tsx    # Content card component
├── lib/
│   └── portfolio-data.ts   # Portfolio content and commands
└── public/                 # Static assets
\`\`\`

## Customization

### Update Portfolio Content

Edit `lib/portfolio-data.ts` to customize:
- Personal information in the `about` section
- Projects, experience, education, etc.
- Command mappings

### Modify Theme

Update CSS variables in `app/globals.css`:
- `--neon-cyan`: Primary accent color
- `--neon-blue`: Secondary accent color
- `--background`: Background color
- `--foreground`: Text color

### Add New Sections

1. Add new section to `PortfolioContent` interface in `lib/portfolio-data.ts`
2. Add command mapping in `commands` object
3. Add content data to `portfolioData` object

## Performance Optimizations

- Server-side rendering for fast initial load
- Optimized animations with GPU acceleration
- Responsive images and lazy loading
- Minimal JavaScript bundle size

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on push

\`\`\`bash
npm run build
npm run start
\`\`\`

### Environment Variables

No environment variables required for basic deployment.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Contact

- Email: dharanisri5677@gmail.com
- Phone: +91 8946062492

---

Built with ❤️ using Next.js and Framer Motion
>>>>>>> d7612c7 (initial commit)
