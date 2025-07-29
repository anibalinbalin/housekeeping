# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- **Install dependencies**: `pnpm i`
- **Run development server**: `pnpm run dev` (runs on http://localhost:3000)
- **Build for production**: `pnpm run build`
- **Start production server**: `pnpm run start`
- **Run linter**: `pnpm run lint`

## Architecture

This is a **pitch deck presentation application** built as a single-page carousel using Next.js 14 with the App Router.

### Core Structure
- **Main Component**: `/src/components/pitch/pitch-carousel.tsx` - The entire application is essentially this carousel component
- **Sections**: Each slide is a separate component in `/src/components/pitch/section-*.tsx`
- **Entry Point**: `/src/app/page.tsx` simply renders the PitchCarousel

### Key Technologies
- **Framework**: Next.js 14.2.4 with React 18.3.1 and TypeScript
- **Styling**: Tailwind CSS with custom animations defined in `tailwind.config.ts`
- **UI Components**: shadcn/ui components in `/src/components/ui/`
- **Icons**: lucide-react and react-icons
- **Video**: react-hls-player for demo video playback
- **Calendar**: @calcom/embed-react for booking integration

### Important Patterns
- **Server Actions**: Located in `/src/actions/` for fetching stats and managing view counts
- **Custom Hooks**: Reusable hooks in `/src/hooks/`
- **Path Aliases**: Use `@/*` for imports from the src directory
- **Carousel Navigation**: Uses embla-carousel-react with custom toolbar and keyboard navigation

### Pitch Sections Order
1. Start
2. Problem  
3. Solution
4. Demo (includes video)
5. Traction
6. Team
7. Subscription
8. Vision
9. Next
10. Book (calendar integration)

### Notes
- No testing framework is currently set up
- ESLint configuration extends Next.js Core Web Vitals
- The view count is currently hardcoded to 18,000 in the fetch-stats action