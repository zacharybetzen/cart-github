# Symbols Framework-Level Feedback

## DOMQL v3 Violations
- **Syntax (Severity: Structural)**: `boxShadow` was declared using raw CSS values (`0 1px 2px rgba(0,0,0,0.05)`) in `Header.js` instead of the v3 dot notation (`black.05 0 1px 2px`).

## Atom/State Mispatterns
- **State Mutation (Severity: Critical)**: Direct property mutation was found in `onClick` handlers for quantity controls (e.g., `items[s.id].quantity = s.quantity` followed by state update). This violates DOMQL state immutability patterns. Components must generate a new array using `.map()` for proper state lifecycle triggers.

## Design System Misuse
- **Hardcoded Pixels (Severity: Systemic)**: Found raw pixel values (e.g., `24px` for fonts, `150px`/`60px` for padding) used directly in component styles (`Header.js`, `cart.js`), bypassing the required spacing and typography token system (`Z2`, `D`, `F`, etc.).
- **Hardcoded Colors (Severity: Systemic)**: Components used raw hex and rgba strings (`#ff0000`, `rgba(55,255,0,1)`) instead of using defined color tokens from the design system, breaking theme interoperability.
- **Icon Dimensions (Severity: Structural)**: The `logo` SVG in `designSystem/icons.js` used a `40x40` viewBox and width/height. All basic icons in the framework must be normalized to `24x24` to properly respond to design system scale sizing props (`boxSize: 'A'`, etc.).
