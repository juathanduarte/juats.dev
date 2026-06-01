# Design

Visual system and style guide for the minimalist refactoring of `juats.dev`.

## Theme

The application supports system-synced light and dark modes, toggled manually or automatically.

- **Light Mode**: High-contrast, editorial layout with solid off-white background and deep charcoal ink.
- **Dark Mode**: High-contrast, premium tech-minimal layout with solid near-black background and light-gray ink.

## Color Palette

All colors are designed for WCAG AA compliance (contrast ratio ≥ 4.5:1).

### Neutrals

| Role | Light (Hex) | Dark (Hex) | Description |
|---|---|---|---|
| Background | `#fcfcfc` | `#0a0a0a` | Primary body background |
| Surface | `#ffffff` | `#121212` | Card and dropdown surfaces |
| Ink (Primary) | `#171717` | `#f5f5f5` | Headings and primary body text |
| Ink (Muted) | `#525252` | `#a3a3a3` | Labels, subtitles, and secondary text |
| Border | `#e5e5e5` | `#262626` | Subtle dividers and containers |

### Accents & States

| Role | Light (Hex) | Dark (Hex) | Description |
|---|---|---|---|
| Accent (Primary) | `#aa353d` | `#f43f5e` | Crimson red for primary CTAs and active states |
| Accent (Hover) | `#8a292f` | `#e11d48` | Darker/vibrant crimson for hovers |
| Focus Outline | `#aa353d` | `#f43f5e` | 2px solid ring with offset |

## Typography

### Font Families

- **Display & Sans-Serif**: `Manrope` (Google Fonts)
  - Used for all UI copy, paragraphs, and headings.
  - Characteristics: Modern, geometric, balanced.
- **Mono**: `JetBrains Mono`
  - Used for code snippets, technology tags, and timeline dates.

### Typographic Scale

- **H1 (Hero Heading)**: `clamp(2.5rem, 6vw, 5rem)` (Semibold, tracking `-0.03em`)
- **H2 (Section Headings)**: `clamp(2rem, 4vw, 3rem)` (Bold, tracking `-0.02em`)
- **H3 (Subheadings)**: `1.5rem` (Semibold, tracking `-0.01em`)
- **Body Text**: `1rem` (Regular, line-height `1.6`, tracking `normal`)
- **Mono / Tag Copy**: `0.8125rem` (Medium, tracking `0.05em`, uppercase when appropriate)

## UI Components

### Buttons
- **Primary**: Solid accent fill, white text. Flat, no drop shadow. Scale transitions removed.
- **Outline**: Thin border, ink text, subtle neutral bg hover.
- **Ghost**: Plain text, subtle background fill on hover.

### Cards
- Solid surface color, thin solid border, sharp or slightly rounded corners (`rounded-lg` / `8px`).
- No shadows or background gradients. Flat structure.

### Inputs & Text Areas
- Simple solid borders. Background color matching the surface.
- Focus state: fine border shift to accent color, ring outline without translation.

## Layout & Grid

- Max layout width: `80rem` (`1280px`).
- Page padding: `px-4 sm:px-6 lg:px-8`.
- Spacing rhythm: Generous vertical spacing (`py-20 lg:py-28`) for sections, tight spacing for text groups (`space-y-4`).

## Motion

- **TIMING_FAST**: `150ms` (hover, theme toggle, simple transitions).
- **TIMING_SLOW**: `400ms` (page load reveals, mobile menu slider).
- **Easing**: Smooth exponential curve (`cubic-bezier(0.16, 1, 0.3, 1)` / `ease-out-expo`).
- **Reduced Motion**: All movement elements are disabled when `@media (prefers-reduced-motion: reduce)` matches. Animates with simple opacity fades instead.
