# TACC Core-Components

The shared components for TACC WMA Workspace Portals & Websites

## Known Clients

- [TUP UI], the client code for TACC User Portal
- [Hazmapper], a TACC application for geospatial data

[tup ui]: https://github.com/TACC/tup-ui
[hazmapper]: https://github.com/TACC-Cloud/hazmapper

## Table of Contents

- [Related Repositories](#related-repositories)
- [Project Architecture](#project-architecture)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Developing](#developing)
- [Contributing](#contributing)
- [Testing](#testing)
- [Other Libraries](#other-libraries)

## Related Repositories

- [Core Styles], the shared UI pattern code for TACC WMA CMS Websites

## Project Architecture

| directory | contents                     |
| --------- | ---------------------------- |
| `src/lib` | components, tests, [stories] |

## Prerequisites

- [Node.js]

## Getting Started

1. Install with any package manager e.g.

   - `npm install @tacc/core-styles`
   - `yarn add @tacc/core-styles`

2. Import component(s) e.g.

   ```ts
   import { Button } from '@tacc/core-components';
   ```

   ```ts
   import {
     FormikInput,
     FormikTextarea,
     FormikCheck,
   } from '@tacc/core-components';
   ```

3. Use component(s)…

   > **Sorry.** Examples are limited and incomplete:
   >
   > - [TACC-Cloud/hazmapper#239](https://github.com/TACC-Cloud/hazmapper/pull/239/files)
   > - [TACC/tup-ui#465](https://github.com/TACC/tup-ui/pull/465/files)
   > - [TACC/tup-ui@ee5e73b:`/.../Button.stories.tsx`](https://github.com/TACC/tup-ui/blob/ee5e73b/libs/core-components/src/lib/Button/Button.stories.tsx#L26-L37)

## Developing

The components are [React components](https://react.dev/learn) that should be [written in TypeScript](https://react.dev/learn/typescript#typescript-with-react-components).

### Setup

0. [Clone this Repository.](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
1. Enter the Repository Clone:

   ```sh
   cd Core-Components
   ```

2. Install Dependencies:

   ```sh
   npm install --include=optional
   ```

3. Start demo:

   ```sh
   npm start
   ```

For more commands, see [Commands](#commands).

## Contributing

### Fix a Component

0. Fix it.
1. Update story (as relevant).
2. Update tests (as relevant).

### Add a Component

#### Minimum Viable Product

0. Create or Improve a common component from a TACC repository e.g.

   - https://github.com/TACC/tup-ui
   - https://github.com/TACC/Core-Portal
   - https://github.com/TACC-Cloud/hazmapper

1. Put your work in a branch in this repository.
2. Open a [Pull Request](https://github.com/TACC/tup-ui/pulls).
3. [Test your work in a client repository.](#end-to-end-tests)

#### Complete Contribution

4. [Create a story](https://storybook.js.org/docs/writing-stories) to demo the component.
5. Create [unit tests](#unit-tests).

### in the Demo

| task               | reference                                         |
| ------------------ | ------------------------------------------------- |
| add/edit component | https://storybook.js.org/docs/writing-stories     |
| change interaction | https://storybook.js.org/docs/essentials/controls |

## Testing

### Unit Tests

Run `npm test` to execute the unit tests via [Vitest](https://vitest.dev/).

### End-to-End Tests

Perform manually by installing and testing the components in a separate respository. See [different approaches to testing your own packages](https://dev.to/one-beyond/different-approaches-to-testing-your-own-packages-1kdg).

## Resources

### Commands

| command                                  | task               | service                                |
| ---------------------------------------- | ------------------ | -------------------------------------- |
| `npm run start`           | start demo         | [Storybook](https://storybook.js.org/) |
| `npm run build`           | build components   | [Vite](https://vitejs.dev/)            |
| `npm run test`            | execute unit tests | [Vitest](https://vitest.dev/)          |

## Other Libraries

See [Other Libraries](docs/other-libraries.md) that TACC developers use with Core-Components.

<!-- Link Aliases -->

[core styles]: https://github.com/TACC/Core-Styles
[node.js]: https://nodejs.org/
[stories]: https://storybook.js.org/docs/get-started/whats-a-story
