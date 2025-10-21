# AI Leadership Accelerator Landing Page

## Overview

This is a single-page marketing website for Chromamind Pte. Ltd., promoting their "AI Leadership Accelerator" - a premium 5-day educational program for Singaporean secondary and JC students. The landing page is designed to attract ambitious parents seeking elite AI and leadership training for their children.

The application is built as a full-stack TypeScript application with a React frontend and Express backend, though the current implementation focuses primarily on the frontend landing page experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (though currently only a single route exists)

**UI Component System:**
- Shadcn/ui component library with Radix UI primitives for accessible, headless components
- Tailwind CSS for utility-first styling with custom design tokens
- "New York" style variant of Shadcn components configured for a modern, premium aesthetic

**Design System:**
- Dark mode-first design targeting a premium, exclusive feel
- Custom color palette with HSL-based theming supporting both light and dark modes
- Custom CSS variables for elevation effects (`--elevate-1`, `--elevate-2`) and button borders
- Google Fonts "Inter" family for all typography
- Responsive mobile-first layout approach

**State Management:**
- TanStack Query (React Query) for server state management
- Local component state with React hooks for UI interactions
- Toast notifications for user feedback via Shadcn toast system

**Key Page Sections:**
The landing page follows a structured marketing funnel with distinct sections: Navigation, Hero, Credibility Bar, Problem Statement, B.U.I.L.D. Framework, Founders, Program Details, FAQ, Webinar CTA, and Footer. Each section is implemented as a separate React component for maintainability.

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API routing
- Development mode integrates Vite middleware for HMR and asset serving
- Production mode serves static build artifacts

**Development vs Production:**
- Development: Vite dev server integrated via middleware for real-time updates
- Production: Static files served from `dist/public` directory
- Conditional loading of Replit-specific plugins in development environment

**API Design:**
- RESTful API routes prefixed with `/api`
- Centralized error handling middleware
- Request/response logging with duration tracking for API endpoints

**Storage Layer:**
- In-memory storage implementation (`MemStorage`) serving as the current data persistence layer
- Storage interface (`IStorage`) defines CRUD operations for users
- Designed to be swappable with database-backed implementation (Drizzle ORM configured but not actively used)

### Data Storage

**Configured Database (Inactive):**
- Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless`
- Schema defines a `users` table with UUID primary keys
- Zod schemas for type-safe data validation
- Migration system configured but not currently utilized in the application flow

**Active Storage:**
- In-memory Map-based storage for user data
- UUID generation for user IDs via Node.js crypto module
- Current implementation supports basic user CRUD operations but is not connected to the landing page functionality

### External Dependencies

**UI Component Libraries:**
- Radix UI suite (@radix-ui/*) - Complete set of accessible, unstyled UI primitives for accordion, dialog, dropdown, select, toast, and 20+ other components
- Lucide React - Icon library for consistent iconography across the application
- Embla Carousel - Touch-friendly carousel component
- CMDK - Command menu component for search/command palette interfaces

**Styling & Design:**
- Tailwind CSS - Utility-first CSS framework
- Class Variance Authority (CVA) - For variant-based component styling
- clsx + tailwind-merge - For conditional class name composition

**Data & Forms:**
- React Hook Form - Form state management and validation
- @hookform/resolvers - Integration between React Hook Form and validation libraries
- Zod - Schema validation library
- TanStack Query - Server state management and caching

**Database (Configured):**
- @neondatabase/serverless - Serverless Postgres driver
- Drizzle ORM - TypeScript ORM for type-safe database queries
- drizzle-zod - Automatic Zod schema generation from Drizzle schemas
- connect-pg-simple - PostgreSQL session store for Express (configured but unused)

**Development Tools:**
- Replit-specific plugins (@replit/vite-plugin-*) - Development experience enhancements for the Replit environment including error overlays, dev banners, and cartographer integration
- TSX - TypeScript execution engine for running the server in development
- ESBuild - For production server bundling

**Utility Libraries:**
- date-fns - Date manipulation and formatting
- nanoid - Unique ID generation
- wouter - Minimal routing library for React

**Note on Database:**
The application has Drizzle ORM fully configured with PostgreSQL support, but currently uses in-memory storage. The database schema and migrations are ready to be activated when needed by updating the storage implementation to use Drizzle instead of MemStorage.