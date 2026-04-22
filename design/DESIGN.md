---
name: Vibrant Modernist Design System
colors:
  surface: '#fff8f1'
  surface-dim: '#e2d9c8'
  surface-bright: '#fff8f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf3e1'
  surface-container: '#f6eddc'
  surface-container-high: '#f1e7d6'
  surface-container-highest: '#ebe1d1'
  on-surface: '#1f1b11'
  on-surface-variant: '#4e4633'
  inverse-surface: '#353025'
  inverse-on-surface: '#f9f0df'
  outline: '#807660'
  outline-variant: '#d1c5ac'
  surface-tint: '#745b00'
  primary: '#745b00'
  on-primary: '#ffffff'
  primary-container: '#e6b800'
  on-primary-container: '#5e4a00'
  inverse-primary: '#f0c115'
  secondary: '#3456c1'
  on-secondary: '#ffffff'
  secondary-container: '#718ffd'
  on-secondary-container: '#00257b'
  tertiary: '#006492'
  on-tertiary: '#ffffff'
  tertiary-container: '#74c6ff'
  on-tertiary-container: '#005278'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe08a'
  primary-fixed-dim: '#f0c115'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574400'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#001550'
  on-secondary-fixed-variant: '#133ca8'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#8bceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004b6f'
  background: '#fff8f1'
  on-background: '#1f1b11'
  surface-variant: '#ebe1d1'
  pearl-bg: '#F9F9F7'
  pitch-surface: '#111111'
  ink-text: '#050505'
  ash-muted: '#8C8C8C'
typography:
  display-xl:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  button-text:
    fontFamily: Epilogue
    fontSize: 16px
    fontWeight: '700'
    lineHeight: '1.0'
spacing:
  stack-xs: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
  edge-margin: 0px
  content-padding: 20px
---

# Vibrant Modernist

## Product Overview

**The Pitch:** A high-fashion, high-energy mobile storefront for a contemporary saree brand. It breaks traditional ethnic-wear conventions by using bold color-blocking, oversized typography, and asymmetrical layouts to frame the saree as modern, wearable art.

**For:** Gen Z and Millennial women seeking traditional wear with an unapologetically modern, editorial edge. 

**Device:** mobile

**Design Direction:** A bold and energetic saree showcase with high-contrast color blocks, dynamic asymmetrical layouts, and contemporary sans-serif fonts for a fresh, high-fashion feel.

**Inspired by:** Acne Studios, SSENSE

---

## Screens

- **Home:** High-impact editorial introduction to the brand's current season.
- **Collection Gallery:** Staggered, asymmetrical browsing experience of the sarees.
- **Product View:** Immersive, full-bleed detail page prioritizing texture and drape.
- **Cart Drawer:** High-contrast, frictionless slide-out checkout.

---

## Key Flows

**Browse and Buy:** Find a statement piece and check out.

1. User is on **Home** -> sees staggered hero imagery and scrolling marquee text.
2. User clicks **"SHOP THE FESTIVAL EDIT"** -> transitions to Collection Gallery.
3. User taps a specific saree -> opens Product View.
4. User taps **"ADD TO BAG"** -> Cart Drawer slides in from the right.

---

<details>
<summary>Design System</summary>

## Color Palette

- **Primary:** `#E6B800` - Marigold (Buttons, primary CTAs)
- **Background:** `#F9F9F7` - Pearl (Page background)
- **Surface:** `#111111` - Pitch (Cards, high-contrast blocks, Cart drawer)
- **Text:** `#050505` - Ink (Body text, headings on light background)
- **Muted:** `#8C8C8C` - Ash (Secondary text, subtle borders)
- **Accent:** `#0033A0` - Klein Blue (Sale tags, highlight text, special links)

## Typography

- **Headings:** Syne, 800, 32-48px (Tight tracking, aggressive sizing)
- **Body:** Space Grotesk, 400, 16px (Geometric, highly legible)
- **Small text:** Space Grotesk, 500, 12px (Uppercase, wide tracking)
- **Buttons:** Syne, 700, 16px (Uppercase)

**Style notes:** 0px border radius everywhere. Sharp, brutalist edges. Solid, un-blurred offset shadows (`4px 4px 0px #111111`). Asymmetrical padding. Oversized, overlapping typography.

## Design Tokens

```css
:root {
  --color-primary: #E6B800;
  --color-background: #F9F9F7;
  --color-surface: #111111;
  --color-text: #050505;
  --color-muted: #8C8C8C;
  --color-accent: #0033A0;
  --font-display: 'Syne', sans-serif;
  --font-body: 'Space Grotesk', sans-serif;
  --radius-none: 0px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --spacing-xl: 64px;
  --shadow-solid: 4px 4px 0px #111111;
}
```

</details>

---

<details>
<summary>Screen Specifications</summary>

### Home

**Purpose:** Editorial brand introduction and entry to the shop.

**Layout:** Edge-to-edge asymmetrical grid. Top nav is minimal. Hero is a split-screen color block.

**Key Elements:**
- **Navigation:** Top fixed, `48px` height, `#F9F9F7` background, centered logo in `Syne 800`, hamburger menu left, bag right.
- **Hero Image:** `80vh` height. Saree model cropped asymmetrically (left 60% image, right 40% `#E6B800` solid block with vertical text).
- **Marquee:** Scrolling text bar at bottom of hero, `#111111` background, `#F9F9F7` text, `Space Grotesk 14px uppercase`, reading "NEW ARRIVALS • NEW ARRIVALS • NEW ARRIVALS".
- **Primary CTA:** Bottom right floating square button, `80x80px`, `#0033A0` background, white text "SHOP".

**States:**
- **Loading:** Solid `#E6B800` screen with black logo outline drawing in.

**Components:**
- **Hero Image Block:** `100vw`, `#E6B800` accent, `Syne 48px` overlay text.

**Interactions:**
- **Click CTA:** Sharp cut to Collection Gallery.

### Collection Gallery

**Purpose:** Staggered visual browsing of sarees.

**Layout:** 2-column masonry/staggered grid, no gutters.

**Key Elements:**
- **Filters:** Horizontal scrollable pill list, `0px` radius, `#111111` 1px border. "SILK", "COTTON", "GEORGETTE".
- **Product Cards:** Alternating aspect ratios (`3:4` and `4:5`). Images touch edge-to-edge.
- **Card Info:** Positioned overlapping the bottom of the image, solid `#F9F9F7` background block (`padding: 12px`), 1px `#111111` border.
- **Price Tag:** Solid `#E6B800` square overlapping image top-right.

**States:**
- **Empty:** "NO MATCHES" in `Syne 48px`, centered, spanning full width.
- **Loading:** Flashing solid `#E6B800` and `#0033A0` blocks in the grid.

**Components:**
- **Product Card:** `48vw` (approx), `#111111` solid shadows on hover/tap.

**Interactions:**
- **Tap Card:** Image expands to fill screen, transitioning seamlessly into Product View.

### Product View

**Purpose:** Detailed material and drape inspection, conversion.

**Layout:** Vertically scrollable. Top half image carousel, bottom half overlapping details block.

**Key Elements:**
- **Image Carousel:** `70vh` high. Snapping horizontal scroll. Edge-to-edge. Pagination dots are crisp black squares.
- **Product Info Block:** Slides up over the image. `#F9F9F7` background, top border `4px solid #111111`.
- **Title:** `Syne 800, 32px`, `#050505`.
- **Description:** `Space Grotesk 400, 16px`, `#8C8C8C`.
- **Sticky CTA:** Fixed at bottom. `100vw`, `64px` height, `#E6B800` background, `#111111` text, `Syne 700 20px`, "ADD TO BAG - $240".

**States:**
- **Out of Stock:** Sticky CTA turns `#8C8C8C`, reads "SOLD OUT".

**Components:**
- **Color Swatches:** `32x32px` square blocks, `2px` black border when selected.

**Interactions:**
- **Scroll:** Info block parallax scrolls over the fixed background images.
- **Click Add to Bag:** Haptic feedback, Cart Drawer slides in from right (`duration: 300ms, ease-out`).

### Cart Drawer

**Purpose:** Review selection and initiate checkout.

**Layout:** Full height, right-aligned slide-out (`85vw`).

**Key Elements:**
- **Container:** `#111111` background, left border `4px solid #E6B800`.
- **Header:** "YOUR BAG" `Syne 800 24px`, `#F9F9F7`. Close button (X) top right.
- **Line Items:** Image square `80x80px`, white text details, solid `#E6B800` remove button (trash icon).
- **Checkout Button:** Fixed at bottom, `#E6B800` background, `#111111` text, `64px` height. "CHECKOUT ->".

**States:**
- **Empty:** "BAG IS EMPTY" text in `#8C8C8C`, `Space Grotesk 16px`.

**Components:**
- **Line Item:** `100%` width, border-bottom `1px solid #333333`, `16px` padding.

**Interactions:**
- **Click Close / Tap Outside:** Drawer slides out to right.

</details>

---

<details>
<summary>Build Guide</summary>

**Stack:** HTML + Tailwind CSS v3

**Build Order:**
1. **Design System Configuration:** Setup Tailwind `tailwind.config.js` with specific fonts (`Syne`, `Space Grotesk`), custom colors, and `boxShadow` (`4px 4px 0px #111111`).
2. **Home:** Establishes the core layout framework, grid rules, and marquee component.
3. **Product View:** Builds out the complex full-bleed image handling and sticky bottom CTA.
4. **Collection Gallery:** Reuses image components but implements the staggered masonry layout.
5. **Cart Drawer:** Implements z-index overlays and slide-in animations.

</details>