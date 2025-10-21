# Design Guidelines: AI Leadership Accelerator Landing Page

## Design Approach
**Premium Dark Mode Experience** - This is a high-value educational program targeting ambitious Singaporean parents. The design must convey exclusivity, credibility, and technological sophistication through a modern dark theme.

## Core Design Elements

### A. Color Palette
**Dark Mode Foundation:**
- Background: `bg-gray-900` (#111827) or `bg-black`
- Main Text: `text-white` or `text-gray-100`
- Secondary Text: `text-gray-400`
- Accent/CTA: `bg-blue-600` (vibrant blue) and `text-blue-400`
- Borders: `border-gray-700`
- Card Backgrounds: `bg-gray-800`

### B. Typography
**Font Family:** Google Fonts "Inter" for all text
**Hierarchy:**
- H1 (Hero): `text-5xl sm:text-6xl font-extrabold tracking-tight`
- H2 (Sub-headlines): `text-2xl text-gray-300`
- Section Headlines: `text-4xl font-bold`
- Body Text: `text-lg text-gray-400`
- Card/Component Text: `text-xl font-bold` (titles), `text-gray-300` (descriptions)

### C. Layout System
**Spacing:** Use Tailwind spacing units of 4, 6, and 8 consistently (e.g., `p-6`, `mt-8`, `py-4`)
**Container:** Central content column with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
**Responsive:** Fully responsive with mobile-first approach

### D. Component Library

**Navigation Bar:**
- Sticky header: `sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-gray-700`
- Logo: Bold company name "Chromamind" - `text-white font-bold text-xl`
- CTA Button: `bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700`

**Buttons:**
- Primary CTA: `bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700`
- Secondary/Outline: Transparent with border, outlined style
- All buttons have rounded corners (`rounded-lg`)

**Cards (B.U.I.L.D. Framework, Program Details):**
- Glassmorphic dark cards: `bg-gray-800 rounded-lg p-6`
- Include icons, headings, and descriptive text
- Subtle borders if needed: `border border-gray-700`

**Images:**
- Founder headshots: Circular for Dr. Qiu (`rounded-full object-cover w-40 h-40 mx-auto border-4 border-gray-700`)
- Mia Liu: Rectangular (`rounded-lg object-cover w-40 h-40 mx-auto border-4 border-gray-700`)

**Grids:**
- 3-column grid for Problem section (responsive to single column on mobile)
- 5-card grid or horizontal scroll for B.U.I.L.D. Framework
- 2-column grid for Founders section
- Side-by-side cards for Webinar options (stack on mobile)

**Interactive Elements:**
- FAQ Accordion: Expandable/collapsible dropdowns
- Smooth scroll navigation for anchor links (#webinar, #program)
- Modal or form for webinar registration

## Page Structure & Content

### 1. Hero Section
Large, centered text with compelling headline and sub-headline. Dual CTA buttons (primary blue + secondary outline). Spacious layout with generous padding.

### 2. Credibility Bar
Subtle section with greyscale placeholder logos/text for institutions (Global Investment Banks, JP Morgan, etc.)

### 3. Problem Section ("The Gap")
3-column grid with icons, headings, and problem statements addressing AI commoditization, grades vs. skills, and wrong program focus.

### 4. B.U.I.L.D. Framework
5 skill cards (Build, Unite, Inquire, Learn, Drive) in a grid or scrollable layout. Each card is a dark glassmorphic design with icon, skill name, and description.

### 5. Founders/Mentors
2-column layout with professional headshots, names, and credential-rich bios emphasizing real-world experience.

### 6. Program Timeline
5-day vertical timeline or step-by-step list with daily breakdown. Includes highlighted details box with dates, target audience, location, pricing, and discount offer.

### 7. FAQ Section
Accordion-style expandable Q&A addressing common parent concerns.

### 8. Webinar Registration CTA
Final conversion section with two large, clickable date/time option cards. Each card has clear date, time, and registration button. Modal form or external link for sign-up.

### 9. Footer
Simple dark footer with copyright, company name, and contact information.

## Images
**Required Images:**
- Founder 1 (Dr. Qiu): Professional headshot, circular crop
- Founder 2 (Mia Liu): Professional headshot, rectangular format
- Optional: Placeholder icons for Problem section and B.U.I.L.D. cards (use SVG or icon library)

**No large hero background image** - This landing page leads with typography and content rather than imagery.

## Accessibility & UX
- Maintain consistent dark mode across all sections
- High contrast text for readability (white/gray-100 on dark backgrounds)
- Clear visual hierarchy through typography scaling
- Touch-friendly button sizes for mobile
- Smooth scroll behavior for anchor navigation
- Sticky navigation for easy access to CTA

## Animations
Minimal, tasteful animations only where they enhance UX (e.g., smooth scroll, hover states on buttons, FAQ accordion transitions).