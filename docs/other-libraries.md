# TACC Core Components - Other Libraries

## Table of Contents

- [Recommended or Familiar](#recommended-or-familiar)
  - [Styling](#styling)
  - [Core Application Features](#core-application-features)
  - [Data Handling & Visualization](#data-handling--visualization)
  - [Build Tools](#build-tools)
  - [Deployment](#deployment)
- [Not Recommended](#not-recommended)

## Recommended or Familiar

> [!TIP]
> TACC developers had good exprience using some of these libraries.

> [!NOTE]
> Some libraries are here **only** because they are common enough that we must support them.

### Styling

| Library | Evaluation |
| - | - |
| [Ant Design](https://ant.design/) | newer UI framework with comprehensive React components |
| [Bootstrap](https://getbootstrap.com/) | popular CSS framework, but dissatisfying long-term[^0] |
| [TACC/Core-Styles](https://github.com/TACC/Core-Styles) | TACC's internal design system and UI components[^1]  |

<sup>We are considering [ShadCN](https://ui.shadcn.com/) as a way of offloading the work of designing the props interface for the widgets we nee.</sup>

[^0]: Not recommended, but already pervasive enough that we must support it.
[^1]: Used directly in some TACC web UI, but will become an internal system for skinning third-party libraries like Bootstrap and Ant.

### Core Application Features

| Library | Purpose |
| - | - |
| tanstack React router | frontend routing |
| tanstack React query | communicating with backend APIs |

### Data Handling & Visualization

| Library | Purpose |
| - | - |
| `papaparse` | easy CSV file upload and parsing |
| `xyflow/react` | create visual representations of data structures |
| `react-virtualized`[^2] | virtualize large data tables |
| `react-window`[^2] | transforms memory-intensive components into performant ones |

[^2]: These work well together.

### Build Tools

| Library | Purpose |
| - | - |
| Vite | good configuration experience |

### Deployment

| Library | Purpose |
| - | - |
| Docker | containerization for simplified development experience |

## Not Recommended

> [!CAUTION]
> TACC developers had poor exprience using these libraries. We currently do not recommend them.

| Library | Purpose |
| - | - |
| Chakra UI | Not very intuitive to use, docs are incomplete and the links between the different versions are confusing
