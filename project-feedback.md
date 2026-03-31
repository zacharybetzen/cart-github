# Project Feedback

> **Scope:** Project-specific issues only — design direction, UX, visual balance, layout, component misuse, interaction flaws, missing states, SEO, and bugs. Framework-level issues are in `symbols-feedback.md`.

---

## Executive Summary

**Project:** The Shape Store — Multi-step checkout flow (Cart → Shipping → Payment)
**Pages audited:** `cart`, `shipping`, `payment`
**Components audited:** `CartItem`, `Header`, `OrderSummary`, `PaymentMethod`, `PaymentOption`

The core data flow is solid and the state architecture is well-structured. The primary issues are around missing interactive states, UX feedback gaps, layout inconsistencies on mobile, and absent SEO metadata.

---

## 🔴 Critical — Bugs

### Empty Cart State Missing
- **File:** `pages/cart.js` — `ItemsList`
- **Issue:** When `s.root.cartItems` is empty (all items removed), `ItemsList` renders nothing with no user feedback. The cart appears broken rather than intentionally empty.
- **Fix:** Add an `EmptyState` child with `if: (el, s) => !s.root.cartItems || s.root.cartItems.length === 0` showing an empty cart illustration and "Your cart is empty" message with a "Continue Shopping" link.

### Coupon Code State Isolation Bug
- **File:** `pages/cart.js` — `CouponCode`
- **Issue:** The `inputValue` state is written to `s.update({ inputValue })` — the `CouponCode` block's local state — but the `Button` onClick reads from the same `s.inputValue`. This is correct structurally, but if the user applies a coupon and then clears the input, the displayed discount is never reset. There is no way to remove an applied coupon once set.
- **Fix:** Add a "Remove Coupon" action that calls `s.root.update({ discount: 0 })` when a coupon is active, and display current discount code when active.

### Payment Options Not Resetting on Page Re-entry
- **File:** `pages/payment.js` — `PaymentSelector`
- **Issue:** `taxRate` in state persists across navigation. If a user goes back to cart and returns to payment, their previously selected payment method is still highlighted, but the border function is correct for `taxRate` — this is actually correct behavior. However, the initial `taxRate: 0` in state doesn't correspond to any real payment method, meaning on first load no option is highlighted (no active state shown).
- **Fix:** Either default `taxRate` to match the first payment method (`0.06` for card), or add empty-selection visual state to `PaymentOption`.

---

## 🟠 Structural — UX / Layout

### No Checkout Progress Indicator
- **Files:** `pages/cart.js`, `pages/shipping.js`, `pages/payment.js`
- **Issue:** Users have no visual indication of where they are in the cart → shipping → payment → review flow. Step context is only implied by page title.
- **Fix:** Add a `ProgressBar` or `Breadcrumb` component below the `Header` showing steps: Cart → Shipping → Payment → Review, with the current step highlighted. This was intended in the original architecture (a `CheckoutProgress` component was discussed in earlier sessions) but never implemented.

### `Cancel Order` Button Has No Confirmation Dialog
- **File:** `pages/cart.js` — `Button_Cancel`
- **Issue:** Clicking "Cancel Order" currently does nothing (no `onClick` handler). A destructive action with no feedback is confusing.
- **Fix:** Add an `onClick` that either clears `cartItems` from state after a confirmation, or navigates home. At minimum the button should do something.

### Back Link in Cart Goes to `/` but Shipping Back Goes to `/`
- **Files:** `pages/cart.js` (`href: '/'`), `pages/shipping.js` (`href: '/'`)
- **Issue:** Both the Cart back-link and the Shipping back-link point to `/`. The Shipping page back link should go to `/` (the cart), which is technically correct — but both appear identical and could indicate a copy-paste error. The Payment page correctly links back to `/shipping`.
- **Clarification:** If `/` is the cart, confirm this is intentional. If there is a separate home/landing page at `/home`, this should be updated.

### Sidebar Width `G2` Is Not Responsive Below Tablet
- **Files:** `pages/cart.js`, `pages/shipping.js`, `pages/payment.js`
- **Issue:** `width: 'G2'` is only overridden at `@tabletS: { width: '100%' }`. There is no intermediate breakpoint for large-phone / small-tablet. On narrow viewports the sidebar and main section can collide before the single-column layout kicks in.
- **Fix:** Add a `@tablet: { width: 'H' }` or similar intermediate token to gracefully narrow the sidebar before going full-width.

### `ColLabels` in Cart Has No Mobile Equivalent
- **File:** `pages/cart.js` — `SectionHeader.ColLabels`
- **Issue:** The column headers (Product, Quantity, Price) are shown on desktop but never hidden on mobile. On mobile, where items stack vertically, the headers become meaningless labels floating above compressed content.
- **Fix:** Add `'@tabletS': { display: 'none' }` to `ColLabels`, and consider adding inline labels per field in `CartItem` for mobile (e.g. a `mobileLabel` shown only at small breakpoints).

---

## 🟡 Systemic — Visual / Interaction

### No Loading / Processing State on Payment Submission
- **File:** `pages/payment.js`
- **Issue:** There is no submit button for payment — `ReviewButton` links to `/review` directly. In a real checkout, clicking "Review Order" would trigger validation or submission. Without a loading state, users will have no feedback on whether their form data was captured.
- **Fix:** Add a `SubmitBtn` that validates inputs and shows a loading state before navigating, rather than a direct `<a>` link.

### Shipping Method Options Have No Visual Differentiator Beyond Border
- **File:** `pages/shipping.js` — `ShippingMethod`
- **Issue:** The three shipping options (Standard, Express, Overnight) look identical except for a border change on selection. There is no icon, no visual hierarchy between them, and no emphasized pricing.
- **Fix:** Add delivery icons (e.g. `truck`, `lightning`, `clock`) from `designSystem/icons`, make the selected state more pronounced (e.g. `background: 'primary.1'`), and visually emphasize price differences.

### `PaymentMethod` Component Shows Static Text Placeholders (PayPal, Visa, Mastercard, EBT)
- **File:** `components/PaymentMethod.js`
- **Issue:** The payment method icons section (`Icons`) uses plain text strings ("PayPal", "Visa", "Mastercard", "EBT") as buttons. There are actual SVG icons in `designSystem/icons.js` for `paypal`, `stripe`, `mastercard`, and `bitcoin`. These are never used.
- **Fix:** Replace text-only children with `Icon` components referencing the icons in the design system. The `PaymentMethod` component should render visually recognizable payment brand icons.

### `OrderSummary` Border Separator Missing
- **File:** `components/OrderSummary.js`
- **Issue:** The rows (Subtotal, Discount, Shipping, Tax) blend together without visual separators. The Total row has a `marginTop: 'Z'` but no border or stronger visual break from the rows above it.
- **Fix:** Add `borderTop: '1px solid gray2'` and `paddingTop: 'Z'` to the `Total` row to create a clear visual separator before the total amount.

### `CartItem` Price Width Uses `'F'` Token (177px) — Potentially Too Wide
- **File:** `components/CartItem.js` — `Price`
- **Issue:** `width: 'F'` on the Price column is 177px. On narrow but still desktop-width viewports this may cause the price column to compress the quantity controls uncomfortably. The `ColLabels` in cart.js uses the same token (`paddingRight: 'F'`) for alignment — these should be consistent.
- **Recommendation:** Audit actual rendered widths and consider `width: 'E'` (109px) for price, or use flex-based proportional widths instead of fixed tokens.

---

## 🟢 Cosmetic

### `Header` Logo Text "The Shape Store" Has No Hover State
- **File:** `components/Header.js` — `Logo`
- **Issue:** The logo link has no visual feedback on hover.
- **Fix:** Add `':hover': { opacity: '0.85' }` to the `Logo` element.

### Button Hover States Are Inconsistent
- **Files:** `pages/cart.js` — `Button_Cancel` has `':hover': { opacity: '0.9' }`; `CheckoutButton` has none; `Header.js` — `DashboardBtn` has none.
- **Fix:** Standardize — all primary action buttons should have a consistent hover effect. Recommend `':hover': { opacity: '0.9' }` or a slightly darker shade across all.

### `Description` on `CartItem` Can Overflow on Long Text
- **File:** `components/CartItem.js` — `Details.Description`
- **Issue:** No overflow or line-clamp is set. Long product descriptions (like "A classic blue rectangle with four right angles...") will wrap across multiple lines and push the card height.
- **Fix:** Add `lineClamp: '2'` or `overflow: 'hidden'` with a `maxHeight` to keep cards uniform.

---

## SEO Gaps

### No Page Titles on Any Route
- **Files:** `pages/cart.js`, `pages/shipping.js`, `pages/payment.js`
- **Issue:** None of the pages set a document `<title>`. All pages will show the browser's default or undefined title.
- **Fix:** Add title metadata to each page using the Symbols `seo` or `title` config pattern (e.g. `title: 'Shopping Cart | The Shape Store'`).

### No Meta Description on Any Route
- **Issue:** Search engines will generate preview snippets from page content. For a commerce site, missing meta descriptions reduces click-through rates from any indexed cart/checkout links.
- **Fix:** Add `description` metadata to each page.

### No Open Graph / Social Metadata
- **Issue:** Sharing any page on social media will produce an unformatted link preview.
- **Fix:** Add `og:title`, `og:description`, and `og:image` to each page.

---

## Missing States Checklist

| State | Cart | Shipping | Payment |
|---|---|---|---|
| Empty / zero-item state | ❌ Missing | N/A | N/A |
| Loading / submitting state | N/A | N/A | ❌ Missing |
| Error / invalid input state | ❌ Missing | ❌ Missing | ❌ Missing |
| Success / confirmation state | ❌ Missing | N/A | ❌ Missing |
| Active selection highlight | ✅ (coupon) | ✅ (shipping method) | ⚠️ No default selection |
| Hover state on interactive elements | ⚠️ Inconsistent | ⚠️ Inconsistent | ⚠️ Inconsistent |
