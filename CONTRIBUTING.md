# How to Contribute

## Linting and Formatting

Not standardized.

## Best Practices

- [Sign your commits.](https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification)
- [Learn Markdown.](https://github.github.com/gfm/)

## Development Workflow

We use a modified version of [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html).

- "feature branches" have a specific prefix:
  - `feat/` for features and updates
  - `fix/` for bugfixes and hotfixes
  - `refactor/` for large internal changes
  - `chore/` for no-op changes
  - `docs/` for documentation
  - `perf/` for performance improvements
  - `test/` for test case updates
  - or other "types" from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- "develop" branch is usually `main`,\
    <sup>but can exist as a long-lived multi-feature branch prefixed with `dev/`</sup>
- "release branches" (as needed) are prefixed with `release/`
- "hotfix branches" are prefixed `fix/`
- "master branch" is always `main`

## Release Workflow

Follow [PUBLISHING.md](PUBLISHING.md) instructions.
