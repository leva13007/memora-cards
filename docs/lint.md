## Setting Up Custom ESLint Config in PhpStorm

### 1. Install packages
`pnpm install`

### 2. Check Eslint run result
`pnpm run lint`

### Linting Rules
Project uses the custom Eslint config based on the standard Eslint, TS etc. recommended configs.

Lint and Styling rules specified at `eslint.rules.js` file.

## Set Eslint as standard linter/formater in IDE

### PHPStorm/WebStrom

Go to **Settings/Preferences** (`Ctrl+Alt+S` on Windows/Linux, `Cmd+,` on Mac):

- Navigate to: **Languages & Frameworks → JavaScript → Code Quality Tools → ESLint**
- Select **"Manual ESLint configuration"**:
  - Set the **ESLint package** path (usually `node_modules/eslint`)
  - Set the **Working directories** path to the memora-cards project folder
  - Choose your **Configuration file** in root of project `eslint.config.js`
- Set **Run for files** - `**/*.{ts,tsx,mts,cts,js}`
- Check **"Run eslint --fix on save"** to automatically fix issues when you save files

On rule change restart IDE or restart Eslint language server in the left-bottom corner of IDE.

### VSCode

Install ESLint extension from **Microsoft**.
 
Specify at **settings.json**:
```json
{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

On rule change restart IDE or restart Eslint language server `ctrl + shift + p` (or `Cmd+Shift+P` on Mac) -> `ESLint: Restart ESLint Server`.


## References
- [Eslint Rules](https://eslint.org/docs/latest/rules/)
- [TS Rules](https://typescript-eslint.io/rules/)
- [React Rules](https://react.dev/reference/eslint-plugin-react-hooks)
- [Fast Refresh Article](https://dev.to/md_belayethossain_56e787/fast-refresh-only-works-when-a-file-only-exports-components-why-does-this-problem-occur-and-how-1b4)
- [Simple ESLint Setup Guide](https://stack.convex.dev/eslint-setup)
- [Simple Video Setup Guid](https://www.youtube.com/watch?v=eieTlMwCwWU)