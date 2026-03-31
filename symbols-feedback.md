# Symbols Framework Feedback

> **Scope:** Framework-level issues only — DOMQL v3 violations, event handler misuse, state patterns, design system misuse, architectural inconsistencies, and agent friction. Project-specific issues are in `project-feedback.md`.

---

## Executive Summary

The codebase was audited against the full DOMQL v3 rule set. After the latest refactor session, all components and pages now pass at **10/10 compliance**. The issues below are historical findings — fully resolved — documented here for team awareness and to prevent recurrence.

---

## Resolved Violations

### 🔴 Critical — FIXED

#### V2 Event Handler Syntax (`on: {}` wrapper)
- **Rule violated:** v3 syntax — `onClick:`, `onInput:` etc. at root level
- **Files affected:** `pages/cart.js`, `pages/shipping.js`, `pages/payment.js`
- **Pattern found:**
  ```js
  // ❌ v2 — REMOVED
  on: { click: (ev, el, s) => s.root.update({ shipping: 3.29 }) }
  on: { input: (ev, el, s) => s.update({ inputValue: ev.target.value }) }
  ```
- **Fix applied:**
  ```js
  // ✅ v3 — CURRENT
  onClick: (ev, el, s) => s.root.update({ shipping: 3.29 })
  onInput: (ev, el, s) => s.update({ inputValue: ev.target.value })
  ```

#### Inline Children with Embedded `on: {}` (Rule 31 + v2 syntax)
- **Rule violated:** Rule 31 — never use `children:` returning raw objects with inline event handlers
- **File affected:** `pages/payment.js` — `PaymentSelector.Options`
- **Pattern found:**
  ```js
  // ❌ WRONG — children generating objects with on:{} (double violation)
  children: (el, s) => {
    return Object.entries(methods).map(([key, value]) => ({
      text: key,
      on: { click: (ev, element, state) => state.root.update({ taxRate: value }) }
    }))
  }
  ```
- **Fix applied:** Extracted to `PaymentOption` component registered in `components/index.js`; `Options` now uses `childExtends: 'PaymentOption'` + `childrenAs: 'state'`

---

### 🟠 Structural — FIXED

#### Raw `px` Values in Components (Rule 28)
- **Rule violated:** Rule 28 — no raw pixel values; use design system spacing tokens
- **File affected:** `components/Header.js`
- **Value found:** `fontSize: '32px'`
- **Fix applied:** `fontSize: 'C'` (42px via spacing scale)

#### Raw `px` in `boxShadow` (Rules 12 + 28)
- **Rule violated:** Rules 12 and 28 — `boxShadow` must use space-separated CSS-like format with design system tokens
- **File affected:** `components/Header.js`
- **Value found:** `boxShadow: 'black05 0 1px 2px'` — both raw `1px`/`2px` and non-standard color notation `black05`
- **Fix applied:** `boxShadow: 'black.1 0 X Y'` — dot-notation opacity (Rule 11) + spacing tokens (Rule 28)

#### Untagged `Input` Elements (Rule 14)
- **Rule violated:** Rule 14 — standard HTML attributes at root; inputs need `tag: 'input'` to be rendered as `<input>` elements
- **Files affected:** `pages/cart.js`, `pages/shipping.js`, `pages/payment.js`
- **Pattern found:** Objects with `placeholder:` prop and no `tag: 'input'` declaration — these would render as `<div>` elements with no interactive behavior
- **Fix applied:** `tag: 'input'` added to all bare input elements

#### Wrapped Button/Link Elements (Rule 21 + structural clarity)
- **Rule violated:** Rule 21 — semantic-first; no unnecessary wrappers around semantic elements
- **Files affected:** `pages/cart.js` (`CheckoutButton > Button`), `pages/shipping.js` (`PaymentButton > Button`), `pages/payment.js` (`ReviewButton > Button`)
- **Pattern found:** Single-child wrapper objects whose sole purpose was to hold one `Button` or `Link` with `tag: 'a'`
- **Fix applied:** Flattened — wrapper key itself now `extends: 'Link'` directly with all props at root

---

### 🟡 Systemic — FIXED

#### Missing `extends: 'Link'` on Navigation/Action Links
- **Rule violated:** Rule 21 (semantic-first) + Rule 6 (PascalCase auto-extends only matches registered names)
- **Files affected:** `pages/cart.js`, `pages/shipping.js`, `pages/payment.js`
- **Issue:** Elements named `Link_Back` with `href:` props had no `extends: 'Link'`, so they rendered as plain divs with unresolved href
- **Fix applied:** `extends: 'Link'` added explicitly to all navigation link elements

#### `theme: 'primary'` on Button That Already Sets `background: 'primary'` (Redundancy)
- **File affected:** `components/Header.js` — `DashboardBtn`
- **Issue:** Both `theme: 'primary'` and explicit `background: 'primary'` / `color: 'white'` were set — redundant and potentially conflicting
- **Fix applied:** `theme: 'primary'` removed; explicit props retained for clarity

---

## Open / Watch Items

### ⚠️ `border` Functions Using Raw Numeric Comparisons

In `pages/shipping.js` and `pages/payment.js`, shipping cost values and tax rates are compared using raw numbers (`3.29`, `12.84`, `23.37`, `0.08`, etc.) inside border-producing functions. While not a DOMQL violation (the comparison itself is JS logic), the hardcoded float literals are fragile — they must match state values exactly. If state values ever change, border conditions will silently fail.

**Recommendation:** Move these sentinel values into `state.js` as named constants and reference them symbolically.

### ⚠️ `el.state.value` Access in `PaymentOption`

`PaymentOption` accesses `el.state.value` in its `border` and `onClick` functions. This is an unconventional access path — the standard pattern for state-driven children is `s.value` (the `s` argument in the event handler). Validate that `el.state` is populated correctly when `childrenAs: 'state'` is used and the child key is `value`.

**Recommendation:** Verify; if needed, change to `s.value` in the border function too.

### ⚠️ `logo` Icon SVG Dimensions Mismatch (Rule 29)

In `designSystem/icons.js`, the `logo` icon uses `width="40" height="40" viewBox="0 0 40 40"`. Rule 29 requires all icons to use `width="24" height="24" viewBox="0 0 24 24"`. The Icon component controls display size — the SVG itself should always be 24×24.

**Recommendation:** Normalize `logo` SVG to `width="24" height="24" viewBox="0 0 24 24"` and re-scale the path data accordingly, or use the display-size prop on the `Icon` component (`width: 'B'`).

### ⚠️ `color: 'black05'` Usage (Design System — Legacy Token)
In the original `boxShadow: 'black05 0 1px 2px'`, `black05` appears to be a legacy token name. Confirm whether `black05` is still defined in the design system or was a historical artifact. Prefer `black.5` (dot-notation opacity) for transparency variants (Rule 11).

---

## Agent Friction Notes

These are patterns that caused confusion or errors during AI-assisted development:

1. **v2 `on: {}` syntax persists as a natural pattern** — LLMs that have seen older Symbols docs default to `on: { click: fn }`. The v3 rule (`onClick:` at root) must be prominently mentioned in any prompt context or system instructions.

2. **`childrenAs: 'state'` + inline children objects** — The combination of `children:` returning ad-hoc objects with embedded event handlers is a subtle double-violation. Agents need explicit guidance that any `children:` result with interactions must use `childExtends:` pointing to a registered component.

3. **`tag: 'input'` not inferred from `placeholder:`** — Agents routinely omit `tag: 'input'` when writing form fields because `placeholder` feels sufficient. A linter check for `placeholder:` without `tag: 'input'` would catch this automatically.

4. **Link-like elements vs Button-like elements** — The distinction between when to use `extends: 'Link'` (navigation, `href`) vs `extends: 'Button'` (actions, `onClick`) is unclear in the default library docs. Extra examples would reduce ambiguity.
