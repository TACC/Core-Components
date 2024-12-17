# TACC Core Components

The shared components for TACC WMA Workspace Portals & Websites

> [!IMPORTANT]
> No code. Outdated docs.
> - **Old** attempt: [`develop`](https://github.com/wesleyboar/Core-Components/tree/develop).
> - **New** attempt: https://github.com/TACC/Core-Components/issues/1


## Related Repositories

- [Core Portal], the base Portal code for TACC WMA Portals & Websites
- [Core Styles], the custom UI pattern code for TACC WMA Portals & Websites


## External Project Usage

1. Install the package with any package manager e.g.:
    - `npm install TACC/Core-Components`
    - `yarn add TACC/Core-Components`

2. Import components e.g.:
    - `…` (no example yet)
    - `…` (no example yet)


## Local Development Setup

### Prequisites for Building the Components

* Nodejs 17.x
* Typescript 4.x

### Code Configuration

Code configuration happens in repos that use these styles.

### Source Files

If you changes files in a `source/` directory, you may need to follow some of these steps.

#### Quick Start

1. _(optional)_ Make changes to `/source` files.
2. Transpile the styles: `npm run build`
3. _(to debug)_ Review respective `/dist` files' content.

## Testing

Plugin testing is done manually. Run `npm run build` from root folder in this project, then review output in `/dist/_tests.css`, to ensure plugins are working correctly.

Style testing is done manually. Run `npm start` from root folder in this project, then review output at web interface, to ensure styles are rendering correctly.

### Production Deployment

The Core Components are not deployed alone.

_For now_, the stylesheets are acquired or accessed by other repositories.

| Repo | Usage |
| - | - |
| __[Core CMS]__ | [via CLI installed on test branch](https://github.com/TACC/Core-CMS/compare/test/core-styles) |


## Contributing

### Development Workflow

We use a modifed version of [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) as our development workflow. Our [development site](https://dev.cep.tacc.utexas.edu) (accessible behind the TACC Network) is always up-to-date with `main`, while the [production site](https://prod.cep.tacc.utexas.edu) is built to a hashed commit tag.
- Feature branches contain major updates, bug fixes, and hot fixes with respective branch prefixes:
    - `task/` for features and updates
    - `bug/` for bugfixes
    - `fix/` for hotfixes

### Best Practices

Sign your commits ([see this link](https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification) for help)

### Resources

* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)


<!-- Link Aliases -->

[Core Portal Deployments]: https://github.com/TACC/Core-Portal-Deployments
[Camino]: https://github.com/TACC/Camino
[Core CMS]: https://github.com/TACC/Core-CMS
[Core Portal]: https://github.com/TACC/Core-Portal
[Core Styles]: https://github.com/TACC/Core-Styles
