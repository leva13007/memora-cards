# 🧱 Architecture Principles of Memora Cards

This document defines the adopted architecture of the **Memora Cards** project. We use a **hybrid of Feature-Sliced Design (FSD) and Atomic Design** to ensure a clean, scalable, and developer-friendly structure for collaborative open-source development.

---

## 🔧 Core Idea

* **FSD** is responsible for the overall application structure: features, pages, entities, logic, API.
* **Atomic Design** is applied to build UI components under `shared/ui`: buttons, inputs, fields, tables, and so on.
* **CSS strategy** is based on **CSS Modules + BEM-lite naming** per component.

This separation provides clear boundaries:

* Logic and data go into `features`, `entities`, `pages`
* UI-only components live in `shared/ui` (atoms → molecules → organisms)
* Styles are co-located with components and scoped

---

## 📁 Project Structure

```
/src
  /app                 # App entry point, routing, global providers
  /pages               # Route-level pages
  /widgets             # Complex UI blocks combining features/entities
  /features            # Self-contained units of user-facing functionality
  /entities            # Domain models: card, deck, user, etc.
  /shared
    /ui                # Atomic UI components (dumb/presentational)
      /atoms
      /molecules
      /organisms
    /lib               # General utilities and helpers
    /config            # Constants, default values
    /types             # Common/shared types
```

---

## 🎨 CSS Strategy

We use **CSS Modules** with **BEM-lite class naming** inside each component's stylesheet.

### ✅ Rules:

* Each UI component has its own `.module.css` file
* Class names follow a simple BEM convention:

  * `btn`, `btn--primary`, `form-field__label`, `form-field__input`
* Class usage via imported `styles` object:

  ```tsx
  import styles from './Button.module.css';
  <button className={`${styles.btn} ${styles['btn--primary']}`}>Save</button>
  ```
* Global styles are limited to `app/index.css` (e.g., resets, base theme)
* No global class names, no CSS frameworks, no utility libraries

### ❌ We do NOT use:

* Tailwind CSS
* Styled Components
* Global utility classes
* Any external CSS-in-JS libraries

### ✅ Why?

* Fully scoped styles, zero conflicts
* Easy onboarding for contributors (just CSS)
* Clean separation between logic and presentation
* Still flexible: custom themes, variables, animations

---

## 🧠 Responsibilities by Folder

### `/app`

* `App.tsx`, `routing.tsx`, `providers.tsx`
* Sets up the application root, routing, and providers

### `/pages`

* Each folder = one route/page
* Responsible for layout composition and state orchestration
* Should only contain presentation-level logic

### `/widgets`

* Complex, reusable UI sections (e.g. DeckTable, Sidebar)
* Can compose multiple features/entities
* Should receive all data via props (stateless)

### `/features`

* One feature = one user-facing capability (e.g. `edit-card`, `import-deck`, `study-mode`)
* May include:

  * `ui/` — UI components with logic
  * `model/` — state logic (e.g. Zustand store, hooks)
  * `lib/` — feature-specific helpers
  * `api/` — API layer (if applicable)

### `/entities`

* Encapsulates business-domain objects (card, deck, user)
* May include:

  * `types/` — TypeScript models and interfaces
  * `model/` — logic (e.g. progress store)
  * `lib/` — mappers, transformations, pure functions
  * `ui/` — UI components tied to the entity

### `/shared/ui`

* **Atomic Design hierarchy:**

  * `atoms/` — Button, Input, Label, Icon, etc.
  * `molecules/` — FormField, EditableCell, etc.
  * `organisms/` — Table, HeaderBar, CardForm
* Components must be stateless, presentation-only
* Each component has its own `.module.css` file

### `/shared/lib`

* Shared utility functions and helpers (e.g. `csv`, `id`, `formatters`)
* Should not import from features or entities

### `/shared/config`

* Global constants, enums, and configuration values

### `/shared/types`

* Common types used across features/entities/widgets

---

## 🧩 Placement Examples

| What                     | Where it goes                                      |
| ------------------------ | -------------------------------------------------- |
| Reusable button          | `shared/ui/atoms/Button.tsx` + `Button.module.css` |
| Input with label & error | `shared/ui/molecules/FormField.tsx` + CSS          |
| Deck table component     | `widgets/DeckTable/DeckTable.tsx`                  |
| Card/Deck types          | `entities/card/types.ts`, `entities/deck/types.ts` |
| Edit card logic          | `features/edit-card/model/useEditCard.ts`          |
| Editable card row        | `features/edit-card/ui/EditCardRow.tsx`            |
| CSV export helper        | `features/export-deck/lib/exportToCsv.ts`          |
| Progress storage         | `entities/progress/model/progressStore.ts`         |
| Debounce hook            | `shared/lib/hooks/useDebounce.ts`                  |
| Default volume constant  | `shared/config/audio.ts`                           |

---

## ✅ Summary

* Atomic Design provides clarity and reuse in the UI layer
* Feature-Sliced Design brings scalability and modularity to the app structure
* CSS Modules + BEM-lite naming gives style isolation without dependencies
* Combining these ensures maintainability, performance, and open-source friendliness

🔧 When creating a new module or component, always ask yourself:

> “Is this UI-only? Domain logic? A user-facing feature?”

Then place it accordingly 😉
