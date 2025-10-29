# Architecture

## 🎯 Why Vite?

We chose Vite as the bundler for Memora Cards for the following reasons:

✅ Lightning-fast development server and build  
✅ Built-in TypeScript and JSX support  
✅ Native ESModules and modern browser-first approach  
✅ Simple configuration, easy onboarding for contributors  
✅ Supports progressive enhancement (PWA, code splitting, etc.)  
✅ No need for SSR, so Next.js is overkill  
✅ Better long-term maintainability than CRA or Webpack

📌 This decision may be revisited in future if server-side rendering or static generation becomes a requirement.

```bash
pnpm create vite . --template react-ts
```

## 📦 Why pnpm?

We use **pnpm** as our package manager because it is:

✅ Faster than npm or Yarn  
✅ Workspace-ready and monorepo-friendly  
✅ Widely adopted in the modern frontend ecosystem  
✅ Reduces `node_modules` size via hardlinks  
✅ Fully compatible with Vite, React, and TypeScript

To get started:

```bash
npm install -g pnpm
pnpm install
```

## 🔒 Dependency Versioning Strategy

To ensure long-term stability and reproducibility of builds and tutorials:

- All packages are added with **exact version locking**
- No `^` or `latest` is used
- For `devDependencies` use patch versioning `~`
- `.npmrc` includes `save-exact=true`
- The `pnpm-lock.yaml` file is committed and must not be modified manually

> This guarantees that contributors and viewers using this project months or years later will get the exact same dependency tree.

Forcing this strategy may lead to occasional dependency conflicts. In such cases, we use the `overrides` field in `package.json` to resolve them. For example:
```json
{
  "overrides": {
    "some-lib": "1.2.3"
  }
}
```