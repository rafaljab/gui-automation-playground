# GUI Automation Playground

A React + TypeScript application used as a portfolio piece and a playground for UI test automation practice.

## Tech Stack

- **React 19** with TypeScript
- **Vite** — build tool and dev server
- **React Router v7** — client-side routing with `BrowserRouter`, deployed to GitHub Pages with `basename="/gui-automation-playground"`
- **Material UI (MUI) v7** — component library
- **ESLint v9** with `typescript-eslint` — linting
- **Prettier v3** — code formatting

## Project Structure

```
src/
├── components/
│   ├── features/
│   │   ├── shop/       # Shop feature components (Cart, CartLineItem, Product, ...)
│   │   └── todos/      # Todos feature components (TodoItem, TodoList)
│   ├── footer/         # Copyright
│   └── nav/            # TopMenu, LeftMenu
├── context/
│   ├── CartProvider.tsx      # Cart state (useReducer), types: CartItemType, ReducerAction, ReducerActionType
│   └── ProductsProvider.tsx  # Products state (fetch from API), types: ProductType
├── hooks/
│   ├── useCart.tsx      # Convenience wrapper around CartContext
│   └── useProducts.tsx  # Convenience wrapper around ProductsContext
├── layouts/
│   ├── AuthLayout.tsx   # Centered layout for login page
│   └── MainLayout.tsx   # App layout with top bar + left drawer
├── pages/
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── ShopPage.tsx
│   └── TodosPage.tsx
└── types/
    └── todos.ts         # Todo, ToggleTodo, AddTodo types
```

## Path Aliases

Configured in both `tsconfig.json` and `vite.config.ts`. Avoid deep relative imports — use these instead:

| Alias | Resolves to |
|---|---|
| `@context/*` | `src/context/*` |
| `@hooks/*` | `src/hooks/*` |
| `@components/*` | `src/components/*` |
| `@app-types/*` | `src/types/*` |
| `@pages/*` | `src/pages/*` |
| `@layouts/*` | `src/layouts/*` |

> **Note:** `@app-types` is used instead of `@types` because `@types` is reserved by TypeScript's declaration file ecosystem.

## Code Conventions

- **Component style:** Arrow functions (`const Foo = () => ...`), never `function` declarations
- **Prop types:** Always extracted to a named `type Props = { ... }` above the component, never inline
- **Types co-located with their feature:** Shop types live in `CartProvider.tsx` / `ProductsProvider.tsx`; Todos types live in `src/types/todos.ts`
- **React imports:** Do **not** `import React from "react"` — use named imports only (e.g. `import { useState } from "react"`)
- **Async data fetching:** Use `AbortController` in `useEffect` cleanup for cancellable fetch requests
- **localStorage reads:** Read the value once into a local variable before checking and parsing it

## Formatting

**Config file:** `.prettierrc`  
**Ignored paths:** `.prettierignore` (`dist/`, `build/`, `public/`, `node_modules/`)

```bash
# Check formatting
npx prettier . --check

# Auto-fix formatting
npx prettier . --write
```

Rules: double quotes, 2-space indentation, semicolons, LF line endings.

## Linting

**Config file:** `eslint.config.mjs` (ESLint v9 flat config format)  
**Ignored paths:** `dist/`, `build/`, `public/`, `node_modules/`

```bash
# Run linter
npx eslint src/
```

Rules: `typescript-eslint` recommended + warn on `no-explicit-any` + warn on unused variables (args prefixed with `_` are exempt).

## Development Commands

```bash
npm run dev       # Start dev server (opens browser automatically)
npm run build     # Type-check (tsc) then build for production
npm run preview   # Preview the production build locally
npm run deploy    # Build and deploy to GitHub Pages
```
