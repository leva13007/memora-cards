# 🔍 Linting Setup Guide

This guide explains how to set up and use ESLint in the Memora Cards project.

## Overview

Memora Cards uses a **custom ESLint configuration** to enforce code quality and consistency. Our setup includes:

- **ESLint**: Core linting rules for JavaScript/TypeScript
- **TypeScript ESLint**: TypeScript-specific rules
- **React Hooks**: Rules for React hooks usage
- **Stylistic**: Code formatting and style rules (replaces Prettier)
- **React Refresh**: Vite-specific React rules

## Quick Start

### Install Dependencies

```bash
pnpm install
```

### Run Linter

```bash
# Check for linting errors
pnpm lint

# Automatically fix auto-fixable issues
pnpm lint:fix
```

### Configuration Files

- **`eslint.config.js`**: Main ESLint configuration file (flat config format)
- **`eslint.rules.js`**: Custom rules grouped by category (JS, TS, React, Stylistic)

## Linting Rules

Our ESLint setup is based on:
- Standard ESLint recommended rules
- TypeScript ESLint recommended rules
- React Hooks best practices
- Custom stylistic rules for consistent formatting

### Rule Categories

1. **JavaScript Rules** (`rules.js`):
   - Error prevention (no-undef, no-unused-vars, etc.)
   - Code quality (prefer-const, no-var, etc.)
   - Best practices (no-debugger, no-empty, etc.)

2. **TypeScript Rules** (`rules.ts`):
   - Type safety (`no-explicit-any`, `no-non-null-asserted-optional-chain`, etc.)
   - TypeScript best practices
   - Prevents common TypeScript pitfalls

3. **React Hooks Rules** (`rules.reactHooks`):
   - Enforces Rules of Hooks
   - Warns about missing dependencies (`exhaustive-deps`)

4. **Stylistic Rules** (`rules.stylistic`):
   - Code formatting (indentation, spacing, quotes)
   - Consistent style across the codebase
   - JSX-specific formatting rules

See `eslint.rules.js` for the complete list of enabled rules.

## IDE Setup

### PHPStorm/WebStorm

1. Open **Settings/Preferences**:
   - Windows/Linux: `Ctrl+Alt+S`
   - Mac: `Cmd+,`

2. Navigate to: **Languages & Frameworks → JavaScript → Code Quality Tools → ESLint**

3. Configure ESLint:
   - Select **"Manual ESLint configuration"**
   - **ESLint package**: `node_modules/eslint` (or browse to project `node_modules/eslint` folder)
   - **Working directories**: Set to your Memora Cards project root folder
   - **Configuration file**: `eslint.config.js` (in project root)

4. File patterns:
   - **Run for files**: `**/*.{ts,tsx,mts,cts,js,jsx}`

5. Auto-fix on save (optional):
   - Check **"Run eslint --fix on save"** to automatically fix issues when saving files

6. Restart ESLint:
   - After changing rules, restart the IDE or restart ESLint language server
   - Language server restart: Click the ESLint icon in bottom-right corner

### VSCode

1. **Install Extension**:
   - Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) from Microsoft

2. **Configure Settings**:
   
   Add to your workspace `.vscode/settings.json` or user settings:

   ```json
   {
     "editor.tabSize": 2,
     "editor.formatOnSave": false,
     "eslint.enable": true,
     "eslint.useFlatConfig": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": "explicit"
     },
     "eslint.options": {
       "overrideConfigFile": "./eslint.config.js"
     },
     "eslint.validate": [
       "javascript",
       "javascriptreact",
       "typescript",
       "typescriptreact"
     ]
   }
   ```

3. **Restart ESLint Server**:
   - Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Run: **"ESLint: Restart ESLint Server"**
   - Do this after changing ESLint configuration

### Other IDEs

For other editors, ensure:
- ESLint flat config format is supported (ESLint 9+)
- The configuration file path points to `eslint.config.js`
- TypeScript and React files are included in file patterns


## Common Issues & Solutions

### Issue: ESLint not working in IDE

**Solutions**:
- Verify ESLint is installed: `pnpm list eslint`
- Check that `eslint.config.js` exists in project root
- Restart ESLint server in your IDE
- Ensure you're using ESLint 9+ (flat config format)

### Issue: Auto-fix not working on save

**Solutions**:
- Verify "Run eslint --fix on save" is enabled (PhpStorm)
- Check `editor.codeActionsOnSave` setting (VSCode)
- Ensure ESLint extension is enabled and updated

### Issue: Conflicts between ESLint and formatter

**Note**: We use ESLint for both linting AND formatting (via `@stylistic` plugin). Don't use Prettier alongside ESLint stylistic rules as they may conflict.

### Issue: Rule not taking effect after change

**Solutions**:
- Restart ESLint language server
- Restart your IDE
- Clear ESLint cache (if applicable)

## Best Practices

1. **Run lint before commits**: Use `pnpm lint` to check for issues
2. **Auto-fix when possible**: Use `pnpm lint:fix` to automatically resolve many issues
3. **Fix remaining issues manually**: Some rules require manual intervention
4. **Check git-flow**: Ensure your code passes linting before opening a PR (see `docs/git-flow.md`)

## Disabling Rules (When Necessary)

Sometimes you may need to disable a rule for a specific case:

```typescript
// Disable for next line
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = getData();

// Disable for entire file (use sparingly!)
/* eslint-disable @typescript-eslint/no-explicit-any */
```

> ⚠️ **Warning**: Only disable rules when absolutely necessary. Prefer fixing the code over disabling rules.

## References

### Official Documentation
- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [TypeScript ESLint Rules](https://typescript-eslint.io/rules/)
- [React Hooks Rules](https://react.dev/reference/eslint-plugin-react-hooks)
- [Stylistic Plugin](https://eslint.style/)

### Helpful Articles
- [Fast Refresh Best Practices](https://dev.to/md_belayethossain_56e787/fast-refresh-only-works-when-a-file-only-exports-components-why-does-this-problem-occur-and-how-1b4)
- [ESLint Flat Config Guide](https://stack.convex.dev/eslint-setup)

## Need Help?

- Check existing issues in the repository
- Open a discussion on GitHub
- Review the `eslint.config.js` and `eslint.rules.js` files for configuration details