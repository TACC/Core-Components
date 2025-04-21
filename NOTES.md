# TACC Core Components - Other Libraries

## Table of Contents

- [Recommended](#recommended)
  - [Styling](#styling)
  - [Core Application Features](#core-application-features)
  - [Data Handling & Visualization](#data-handling--visualization)
  - [Build Tools](#build-tools)
  - [Deployment](#deployment)
- [Not Recommended](#not-recommended)

## Recommended

> [!TIP]
> TACC developers had good exprience using these libraries, or are common enough that we support them.

### Styling

| Library | Purpose |
| - | - |
| Ant Design | enterprise-level UI framework with comprehensive React components |
| Bootstrap | industry-standard CSS framework with extensive component library |
| TACC/Core-Styles[^1] | TACC-specific design system and UI components |

[^1]: TACC/Core-Styles is a library of components and styles that are used in TACC applications. It will become an internal system for skinning third-party libraries like Bootstrap and Ant.

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

[^2]: These couple well together.

### Build Tools

| Library | Purpose |
| - | - |
| Vite | good configuration experience |

### Deployment

| Library | Purpose |
| - | - |
| Docker | containerization for simplified development experience |

## Not Recommended

> [!DANGER]
> TACC developers had poor exprience using these libraries. We currently do not recommend them.

| Chakra UI | Not very intuitive to use, docs are incomplete and the links between the different versions are confusing
