<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="shared/assets/logos/logo-full-no-bg-white.png">
    <source media="(prefers-color-scheme: light)" srcset="shared/assets/logos/logo-full-no-bg-grey.png">
    <img alt="Nexus Labz" src="shared/assets/logos/logo-full-no-bg-grey.png" width="400">
  </picture>
</p>

<h1 align="center">Showcase</h1>

<p align="center">
  Centralized repository for all Nexus Labz presentations.<br/>
  Each presentation is an independent Vue 3 + Vite SPA within a monorepo, featuring horizontal-scroll navigation and published as static HTML via GitHub Pages.
</p>

## Presentations

| Presentation      | Description                          | Dev                        | Build                        |
| ----------------- | ------------------------------------ | -------------------------- | ---------------------------- |
| `about`           | About Nexus Labz (mission, services) | `yarn dev:about`           | `yarn build:about`           |
| `visual-identity` | Visual Identity Manual               | `yarn dev:visual-identity` | `yarn build:visual-identity` |
| `team`            | Our Team                             | `yarn dev:team`            | `yarn build:team`            |
| `projects`        | Projects                             | `yarn dev:projects`        | `yarn build:projects`        |
| `results`         | Results                              | `yarn dev:results`         | `yarn build:results`         |

## Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- [Yarn](https://classic.yarnpkg.com/) 1.22+

## Installation

```bash
git clone git@github.com:nexuslabz/nexuslabz-showcase.git
cd nexuslabz-showcase
yarn install
```

## Development

Open a presentation in the browser with hot-reload:

```bash
yarn dev:visual-identity
```

Each presentation lives in `presentations/<name>/src/` as a standard Vue 3 app with horizontal-scroll sections acting as slides.

## Build

Generate the static HTML for a single presentation:

```bash
yarn build:visual-identity
```

Generate all presentations at once:

```bash
yarn build:all
```

Output files are located at `presentations/<name>/dist/`.

## Project Structure

```
nexuslabz-showcase/
├── .github/
│   ├── workflows/          # GitHub Actions (CI + deploy)
│   └── dependabot.yml      # Automated dependency updates
├── .husky/                 # Git hooks (pre-commit with lint-staged)
├── config/
│   ├── eslint.config.mjs   # ESLint (flat config)
│   └── prettier.config.mjs # Prettier
├── packages/
│   └── theme-nexuslabz/    # Shared theme (components, styles, utilities)
│       ├── components/     # Reusable Vue components (NexusLogo, TeamCard)
│       └── styles/         # CSS: base, utilities, animations
├── presentations/
│   ├── visual-identity/    # Presentation: Visual Identity Manual
│   │   ├── index.html      # Vite entry point
│   │   ├── vite.config.js  # Vite config with @theme alias
│   │   └── src/
│   │       ├── App.vue     # Shell with horizontal scroll-snap navigation
│   │       └── sections/   # Each "slide" is a Vue section component
│   ├── team/               # Presentation: Our Team
│   ├── projects/           # Presentation: Projects
│   └── results/            # Presentation: Results
├── scripts/                # Automation scripts (build-all)
├── shared/
│   └── assets/             # Shared assets
│       ├── logos/           # Nexus Labz logos
│       └── images/         # Global images
├── public/
│   └── index.html          # Landing page (links to all presentations)
└── package.json            # Root (Yarn workspaces)
```

## Creating a New Presentation

1. Create the presentation folder:

```bash
mkdir -p presentations/new-presentation/src/sections
mkdir -p presentations/new-presentation/src/styles
```

2. Create the workspace `package.json`:

```json
{
  "name": "@nexuslabz/new-presentation",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.5.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.0",
    "vite": "^6.3.0"
  }
}
```

3. Create `vite.config.js` with the `@theme` alias:

```js
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/nexuslabz-showcase/new-presentation/',
  resolve: {
    alias: {
      '@theme': resolve(__dirname, '../../packages/theme-nexuslabz'),
    },
  },
});
```

4. Create `index.html`, `src/main.js`, `src/App.vue`, and section components following the existing presentations as reference.

5. Add scripts to the root `package.json` and run `yarn install`.

## Available Scripts

| Command             | Description                                     |
| ------------------- | ----------------------------------------------- |
| `yarn dev:<name>`   | Start the development server for a presentation |
| `yarn build:<name>` | Generate static HTML for a presentation         |
| `yarn build:all`    | Generate HTML for all presentations             |
| `yarn lint`         | Run ESLint across the project                   |
| `yarn lint:fix`     | Auto-fix issues with ESLint                     |
| `yarn format`       | Format all files with Prettier                  |
| `yarn format:check` | Check if files are properly formatted           |

## Code Quality

- **ESLint** with flat config (Vue 3 + Prettier)
- **Prettier** for consistent formatting
- **Husky** + **lint-staged** on pre-commit
- **Dependabot** for weekly dependency updates

## Tech Stack

- [Vue 3](https://vuejs.org/) — UI framework (Composition API + `<script setup>`)
- [Vite 6](https://vite.dev/) — Build tool & dev server
- CSS Custom Properties — Full control, no CSS framework dependency
- CSS Scroll Snap — Native horizontal navigation
- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) — Monorepo

## License

Internal use only — Nexus Labz. All rights reserved.
