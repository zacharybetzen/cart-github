# Design System — Amazon Style Guide

This document defines the visual design language for this project, modeled after Amazon.com's UI. It covers color tokens, typography, spacing, component patterns, and layout conventions.

---

## 1. Color Palette

### Primary Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-amazon-orange` | `#FF9900` | Primary CTA buttons, highlights, search button, cart icon accent |
| `--color-amazon-orange-hover` | `#E68A00` | Hover state for orange CTAs |
| `--color-amazon-yellow` | `#FEBD69` | Secondary accents, hover states on nav items |
| `--color-amazon-blue` | `#007185` | Link text, "See more" links, informational accents |
| `--color-amazon-blue-hover` | `#C7511F` | Visited/active link states |
| `--color-amazon-dark-navy` | `#131921` | Primary navigation bar background (top header) |
| `--color-amazon-mid-navy` | `#232F3E` | Secondary navigation bar background (category nav) |

### Background Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-bg-page` | `#EAEDED` | Main page background (light gray) |
| `--color-bg-surface` | `#FFFFFF` | Card backgrounds, product panels, sidebar |
| `--color-bg-surface-alt` | `#F3F3F3` | Subtle section dividers, form inputs |
| `--color-bg-hero` | `#6441A5` / gradient | Hero banner (vibrant purple/violet in screenshot) |

### Text Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#0F1111` | Main body text, product titles |
| `--color-text-secondary` | `#565959` | Subcopy, metadata, brand labels under product images |
| `--color-text-link` | `#007185` | All hyperlinks, "Shop" CTAs |
| `--color-text-on-dark` | `#FFFFFF` | Text on dark navy header |
| `--color-text-on-dark-muted` | `#CCCCCC` | Subtext on dark header (e.g., "Hello, Sign in") |
| `--color-text-badge` | `#FFFFFF` | Text on discount/deal badges |

### Accent & Status Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-deal-red` | `#CC0C39` | "Limited time deal" badges, percentage-off labels |
| `--color-deal-label-bg` | `#CC0C39` | Badge background for deal callouts |
| `--color-success-green` | `#067D62` | In-stock indicators, order confirmations |
| `--color-countdown-red` | `#C45500` | Countdown timer text ("Ends in 23:12:09") |

---

## 2. Typography

### Font Family

- **Primary**: `"Amazon Ember", "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Fallback**: `system-ui, -apple-system, BlinkMacSystemFont, sans-serif`

### Type Scale

| Level | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `--text-hero` | `28px` | `700` | `1.2` | Hero banner headline ("1 cent deals, today only") |
| `--text-section-title` | `21px` | `700` | `1.3` | Section headings ("Best Sellers in Computers") |
| `--text-card-title` | `15px` | `400` | `1.4` | Product/category card titles |
| `--text-label` | `13px` | `400` | `1.4` | Brand labels, nav items, subcopy |
| `--text-small` | `12px` | `400` | `1.4` | Fine print, "Limit 1 per customer", helper text |
| `--text-badge` | `11px` | `700` | `1` | Deal badges, percentage labels |
| `--text-link` | `13px` | `400` | `1.4` | Inline links ("Shop pre-loved pieces") |
| `--text-nav` | `13px` | `400` | `1` | Top navigation bar items |
| `--text-nav-bold` | `13px` | `700` | `1` | Bold nav items ("All", "Amazon Haul") |

---

## 3. Spacing System

Use a base-4 spacing scale (multiples of 4px):

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `4px` | Micro gaps, icon padding |
| `--space-2` | `8px` | Badge padding, tight inner spacing |
| `--space-3` | `12px` | Standard card inner padding (vertical) |
| `--space-4` | `16px` | Card inner padding (horizontal), section gaps |
| `--space-5` | `20px` | Section gutter, list item spacing |
| `--space-6` | `24px` | Large section padding |
| `--space-8` | `32px` | Between major page sections |
| `--space-10` | `40px` | Hero vertical padding |

---

## 4. Border & Shadow

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-btn` | `3px` | Buttons (Amazon uses very low radius) |
| `--radius-card` | `4px` | Product cards, panel containers |
| `--radius-badge` | `3px` | Deal/discount badges |
| `--radius-input` | `4px` | Search bar, form inputs |
| `--radius-input-right` | `3px` | Right edge of search button |
| `--radius-pill` | `20px` | Cart count bubble, rounded chip labels |

### Box Shadows

```css
/* Card hover / product panel */
--shadow-card: 0 2px 5px rgba(15, 17, 17, 0.15);
--shadow-card-hover: 0 2px 10px rgba(15, 17, 17, 0.25);

/* Dropdown / nav flyout */
--shadow-dropdown: 0 4px 14px rgba(0, 0, 0, 0.2);

/* Search bar focus */
--shadow-search-focus: 0 0 0 3px rgba(255, 153, 0, 0.5);
```

### Borders

```css
--border-default: 1px solid #D5D9D9;
--border-card: 1px solid #DDD;
--border-input: 1px solid #888;
--border-input-focus: 1px solid #E77600;
--border-section: 1px solid #EAEDED;
--border-header-divider: 1px solid rgba(255,255,255,0.12);
```

---

## 5. Layout & Grid

### Page Container

- Max content width: **1500px** (Amazon stretches wide)
- Side padding on content: **16–24px**
- Page background: `#EAEDED`

### Header Layout

```
[ Logo ] [ Delivery Location ] [ Search Bar (flex-grow) ] [ Language/Flag ] [ Account ] [ Returns ] [ Cart ]
```

- Header height: **~60px**
- Background: `#131921` (dark navy)
- All header items vertically centered
- Search bar takes all remaining space between location and account items

### Secondary Navigation Bar

- Height: **~38px**
- Background: `#232F3E`
- Items: `font-size: 13px`, `color: #fff`, `padding: 0 10px`
- Hover: `outline: 1px solid #fff` (white border box on hover)
- "All" hamburger item has a slightly heavier font weight

### Main Content Area

- Width: ~**85%** of viewport when centered
- Sections are stacked vertically with `16–24px` gap
- White card panels use `padding: 16px` with subtle `border` and `box-shadow`

### Product Grid (Category Sections)

- **4-column grid** for featured category panels (desktop)
- Each panel: `width: ~25%`, aspect ratio varies by content
- Responsive: collapse to 2-col on tablet, 1-col on mobile

### Hero Banner (Carousel)

- Full-width within content area
- Height: `~230px`
- Background: bold gradient or solid promotional color (purple/violet in screenshot)
- Large text on left, product imagery on right
- Arrow chevrons (`‹` `›`) on left and right edges for carousel navigation

---

## 6. Component Patterns

### Buttons

#### Primary CTA Button (Orange)
```css
background: linear-gradient(to bottom, #F7DFA5, #F0C14B);
border: 1px solid #A88734;
border-radius: 3px;
padding: 6px 16px;
font-size: 13px;
color: #111;
cursor: pointer;
```
Hover: background shifts to `#F0C14B` solid.

#### Search Button (Orange icon button)
```css
background-color: #FF9900;
border-radius: 0 4px 4px 0;
padding: 8px 12px;
```
Hover: `background-color: #E68A00`

#### Secondary / Ghost Link Button
- No background, no border
- Color: `#007185`
- Underline on hover
- Example: "Shop pre-loved pieces", "See more", "Shop all tech deals"

### Search Bar

```css
display: flex;
height: 40px;
background: #fff;
border: 2px solid #FF9900;  /* orange border on focus */
border-radius: 4px;
```
- Left select dropdown for category (background: `#F3F3F3`, border-right: `1px solid #CCC`)
- Center input: `flex-grow: 1`, `font-size: 14px`, `padding: 0 10px`
- Right search icon button: orange background

### Deal / Discount Badge

```css
display: inline-flex;
align-items: center;
background-color: #CC0C39;
color: #fff;
font-size: 11px;
font-weight: 700;
padding: 2px 6px;
border-radius: 3px;
text-transform: uppercase;
```
Used overlaid on product image in the bottom-left corner. Common labels: "33% off", "29% off", "30% off", "35% off".

### "Limited time deal" Label

```css
background: #CC0C39;
color: #fff;
font-size: 10px;
padding: 2px 5px;
border-radius: 2px;
display: inline-block;
margin-top: 4px;
```

### Product Card

```css
background: #fff;
border: 1px solid #DDD;
border-radius: 4px;
padding: 0;
overflow: hidden;
```
- Image fills the top portion of the card
- Text below: brand name (small gray), product title (dark), deal badge (if applicable)
- Hover: `box-shadow: 0 2px 10px rgba(0,0,0,0.2)`

### Category Panel (Multi-item featured section)

- White card with `padding: 16px`
- Section heading: `font-size: 21px`, `font-weight: 700`, `margin-bottom: 12px`
- 2×2 grid of sub-items (image + label below)
- Footer link: "Shop pre-loved pieces" / "See more" in `#007185`

### Cart Icon

- Icon: shopping cart outline, color `#fff`
- Item count badge: orange number overlaid on cart icon
- "Cart" label beneath in white text

### Navigation Item Hover State

```css
nav a:hover {
  outline: 1px solid white;
  border-radius: 2px;
}
```

---

## 7. Imagery & Media

- **Product images**: white or transparent background, displayed at uniform size within grid cells
- **Hero banners**: bold graphic design with overlapping product images, emoji, and promotional text; high saturation colors
- **Category images**: square or 4:3 ratio thumbnails, clean product-on-white photography
- **Brand logos**: gray text label below product image (e.g., "Cartier", "Gucci", "Louis Vuitton")
- **Device images**: front-facing, slightly angled for depth when necessary (Amazon devices section)

---

## 8. Icons & UI Elements

- Use simple, 1-color line icons matching Amazon's style (cart, location pin, flag/language, search magnifier)
- Icon size in header: `20–24px`
- Navigation hamburger: `☰ All` pattern with icon preceding text
- Arrow chevrons for carousels: circular button, background `rgba(255,255,255,0.8)`, `32px` diameter, centered arrow glyph
- Star ratings (if used): filled orange stars `★`, size `12px`, color `#FF9900`

---

## 9. Interaction States

| Element | Default | Hover | Active/Focus |
|---|---|---|---|
| Nav link | white text | white outline box | white outline box |
| Product card | subtle border | elevated shadow | shadow + slight scale |
| CTA button | yellow-orange gradient | darker orange | border inset |
| Search bar | gray border | orange border | orange border + glow |
| Link text | `#007185` | underline | `#C7511F` |
| Carousel arrow | semi-transparent white | solid white | solid white, shadow |

### Transition Defaults

```css
transition: all 0.15s ease;
```
Amazon's UI is snappy and intentionally fast — keep transitions under 200ms.

---

## 10. Responsive Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| Desktop | ≥ 1280px | 4-column product grids, full nav bar visible |
| Tablet | 768px – 1279px | 2-column grids, some nav items collapse |
| Mobile | < 768px | Single column, hamburger nav, stacked header |

---

## 11. Design Principles

1. **Utility-first**: Every element serves a commercial purpose. Whitespace is used sparingly; density is high.
2. **Scannability**: Large section headings, clear price/deal callouts, and bold imagery allow users to find items quickly.
3. **Trust signals**: Location delivery text, security iconography, and "Limited time" labels drive urgency and confidence.
4. **Orange as the action color**: All primary interactive elements (search, cart, buy) use Amazon orange to guide the eye.
5. **High information density**: Cards contain image + brand + title + badge + CTA link with minimal wasted space.
6. **Neutral backgrounds, vibrant promotions**: The page background stays gray/white while hero banners use loud promotional colors (purple, blue, red) to attract attention.
