# 🚀 Git Flow for Memora Cards

We use a **simple and clear Git workflow** to keep development organized, especially in an open-source setting.

---

## 📌 Branching Strategy

| Branch      | Purpose                          |
|-------------|----------------------------------|
| `main`      | Stable, production-ready code    |
| `develop`   | Active development (merged PRs)  |
| `feature/*` | New features in progress         |
| `fix/*`     | Bugfixes                         |
| `docs/*`    | Documentation-only updates       |
| `chore/*`   | Minor tweaks, tooling, CI, etc.  |

> PRs should always be made **from a `feature/*` branch into `develop`**, not directly into `main`.

---

## ✅ Naming Examples

- `feature/MC-{issue}/cards-audio-support`
- `fix/MC-{issue}/typo-in-config`
- `docs/MC-{issue}/add-contributing-guide`
- `chore/MC-{issue}/update-deps`

> MC - Memora Cards
> {issue} - GitHub issue number (if applicable, otherwise use 0)
> You can use only lowercase/uppercase letters (latin -> a-zA-Z), numbers, hyphens (`-`), and slashes (`/`) in branch names.

---

## 🔁 Pull Request Rules

- Open PRs **from your branch → `develop`**
- Keep PRs focused and scoped (1 feature / 1 fix)
- Use clear titles and descriptions
- Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages

Example commit messages:
- `feat(cards): add support for video cards`
- `fix(config): fallback when config is missing`
- `docs: improve getting started section`

---

## 🧪 Local Checklist before PR

- [ ] Code is clean and formatted
- [ ] Type check passes (`pnpm run typecheck`)
- [ ] Linter passes (`pnpm run lint`)
- [ ] Tested locally (`pnpm run dev`)

---

## 🔒 Protected Branches

- `main` is protected:
  - All changes must go through PR and review
  - Direct commits are blocked
- `develop` is semi-protected:
  - PRs are encouraged, but trusted contributors can commit directly if needed

---

## 📅 Releases

- Merge `develop → main` only when a new version is ready
- Create a GitHub Release + update `CHANGELOG.md`

---

## 💬 Questions?

Open a [Discussion](https://github.com/leva13007/memora-cards/discussions) or ping us in [Discord](https://discord.gg/ZpWpDQq2EP)!