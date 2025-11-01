# 🚀 Git Flow for Memora Cards

We use a **simple and clear Git workflow** to keep development organized, especially in an open-source setting.

---

## 📌 Branching Strategy

| Branch      | Purpose                          | Base Branch |
|-------------|----------------------------------|-------------|
| `main`      | Stable, production-ready code    | —           |
| `develop`   | Active development (merged PRs)  | `main`      |
| `feature/*` | New features in progress         | `develop`   |
| `fix/*`     | Bugfixes                         | `develop`   |
| `docs/*`    | Documentation-only updates       | `develop`   |
| `chore/*`   | Minor tweaks, tooling, CI, etc.  | `develop`   |

> ⚠️ **Important**: PRs should always target **`develop`**, not directly into `main`. Only merge `develop → main` during releases.

---

## ✅ Branch Naming Convention

Use the following format: `{type}/MC-{issue}/{description}`

### Examples

- `feature/MC-15/cards-audio-support`
- `fix/MC-42/typo-in-config`
- `docs/MC-0/add-contributing-guide`
- `chore/MC-8/update-dependencies`

### Format Rules

- **Type**: One of `feature`, `fix`, `docs`, `chore`
- **MC-{issue}**: 
  - `MC` stands for "Memora Cards"
  - `{issue}` is the GitHub issue number
  - Use `MC-0` if there's no associated issue
- **Description**: Short, kebab-case description of the change
- **Allowed characters**: Lowercase/uppercase letters (a-z, A-Z), numbers, hyphens (`-`), and slashes (`/`)

> 💡 **Tip**: Keep branch names descriptive but concise. Examples: `feature/MC-15/audio-cards`, `fix/MC-23/login-bug`

---

## 🔁 Pull Request Workflow

### Creating a PR

1. **Create your branch** from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/MC-15/your-feature-name
   ```

2. **Make your changes** and commit:
   ```bash
   git add .
   git commit -m "feat(MC-15): add support for video cards"
   ```

3. **Push and open PR**:
   ```bash
   git push origin feature/MC-15/your-feature-name
   ```
   Then open a PR on GitHub targeting `develop`.

### PR Requirements

- ✅ Target branch: **`develop`** (never `main` directly)
- ✅ Keep PRs focused: One feature/fix per PR
- ✅ Use clear, descriptive titles
- ✅ Include a description explaining what and why
- ✅ Reference related issues: "Closes #15" or "Fixes #42"

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

**Format**: `{type}(MC-{issue}): {description}`

Where:
- **Type**: One of the commit types below
- **MC-{issue}**: The GitHub issue number (use `MC-0` if no associated issue)
- **Description**: Clear, concise description of the change

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `chore`: Maintenance tasks (deps, tooling, etc.)
- `refactor`: Code refactoring
- `test`: Test additions/changes

**Examples**:
- `feat(MC-15): add support for video cards`
- `fix(MC-42): fallback when config is missing`
- `docs(MC-8): improve getting started section`
- `chore(MC-0): update dependencies to latest versions`
- `fix(MC-23): resolve login authentication bug`

> 💡 **Note**: The scope uses the issue number (MC-{issue}) to maintain consistency with branch naming and make it easy to trace commits back to issues.

---

## 🧪 Pre-PR Checklist

Before opening a PR, ensure:

- [ ] Code is clean and properly formatted
- [ ] Type check passes: `pnpm typecheck`
- [ ] Linter passes: `pnpm lint` (or `pnpm lint:fix` to auto-fix)
- [ ] Tests pass (if applicable): `pnpm test` (if tests are written)
- [ ] Tested locally: `pnpm dev`
- [ ] Branch is up-to-date with `develop`: `git pull origin develop`
- [ ] No merge conflicts with `develop`
- [ ] Commit messages follow conventional commits format

---

## 🔒 Protected Branches

### `main` Branch
- ✅ Fully protected
- ✅ All changes must go through PR + review
- ✅ Direct commits are blocked
- ✅ Only merged from `develop` during releases

### `develop` Branch
- ⚠️ Semi-protected
- ✅ PRs are strongly encouraged
- ⚠️ Trusted core contributors may commit directly for minor fixes
- ✅ Regular contributors should always use PRs

---

## 📅 Release Process

### Creating a Release

1. **Ensure `develop` is stable**:
   - All PRs merged
   - Tests passing
   - Documentation updated

2. **Merge `develop → main`**:
   ```bash
   git checkout main
   git pull origin main
   git merge develop
   git push origin main
   ```

3. **Create a release tag**:
   ```bash
   git tag -a v1.0.0 -m "Release v1.0.0"
   git push origin v1.0.0
   ```

4. **Create GitHub Release**:
   - Go to GitHub → Releases → Draft a new release
   - Use the tag you just created
   - Include release notes summarizing changes

5. **Update CHANGELOG.md** (if maintained):
   - Document new features, fixes, and breaking changes

---

## 🔄 Syncing Your Branch

### Keep your branch up-to-date with `develop`

If `develop` has moved ahead while you're working:

```bash
# From your feature branch
git checkout feature/MC-15/your-feature
git fetch origin
git rebase origin/develop
# Resolve any conflicts if needed
git push --force-with-lease origin feature/MC-15/your-feature
```

> ⚠️ **Note**: Use `--force-with-lease` instead of `--force` for safety. Only force-push to your own feature branches, never to `develop` or `main`.

---

## 🐛 Handling Conflicts

If you encounter merge conflicts:

1. **During rebase/merge**:
   ```bash
   # Git will mark conflicts
   # Edit files to resolve conflicts
   git add .
   git rebase --continue  # or git commit if merging
   ```

2. **Best practices**:
   - Communicate with team if conflicts are complex
   - Test thoroughly after resolving
   - Consider asking for help in PR comments

---

## 💬 Questions?

Open a [Discussion](https://github.com/leva13007/memora-cards/discussions) or ping us in [Discord](https://discord.gg/ZpWpDQq2EP)!