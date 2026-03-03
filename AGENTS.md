# AGENTS.md

## Cursor Cloud specific instructions

This is `@tacc/core-components`, a React component library (TypeScript/JSX) built with Vite and demoed via Storybook. No backend, database, or Docker required.

### Commands

See `README.md` "Resources > Commands" for the full list. Key commands:

- `npm start` — Storybook dev server on port 9000
- `npm test` — Vitest unit tests (use `npm test -- --run` for single run)
- `npm run build` — Vite library build to `dist/`
- `npm run lint` — ESLint (see caveat below)

### Caveats

- **ESLint is not a project dependency.** The `npm run lint` script calls `eslint .` but `eslint` is not listed in `package.json`. The `.eslintrc.json` config is a stub with no parser or plugins, so linting does not currently function. Install eslint@8 globally (`npm install -g eslint@8`) if needed.
- **Storybook deps are optional.** Always use `npm install --include=optional` to get Storybook packages; plain `npm install` omits them.
- **Peer dependencies** (React, Formik, Reactstrap, etc.) are resolved from Storybook's transitive deps during development. They are not installed as direct devDependencies.
