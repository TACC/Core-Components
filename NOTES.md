# TACC Core Components - Notes

## Recommended Companion Libraries

> [!TIP]
> TACC developers had good exprience using these libraries. We currently recommend them.

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
| `react-virtualized`[^1] | virtualize large data tables |
| `react-window`[^1] | transforms memory-intensive components into performant ones |

[^1]: These couple well together.

### Build Tools

| Library | Purpose |
| - | - |
| Vite | good configuration experience |

### Deployment

| Library | Purpose |
| - | - |
| Docker | containerization for simplified development experience |

## Libraries We Do Not Recommended

> [!DANGER]
> TACC developers had poor exprience using these libraries. We currently do not recommend them.

| Chakra UI | Not very intuitive to use, docs are incomplete and the links between the different versions are confusing
