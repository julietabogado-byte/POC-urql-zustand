# Architecture Documentation

## Table of Contents

- [Overview](#overview)
- [Design Decisions](#design-decisions)
- [State Management](#state-management)
- [Data Flow](#data-flow)
- [Folder Structure](#folder-structure)

---

## Overview

This application follows a **layered architecture** pattern with clear separation between:

- **Presentation Layer** - React Native components and screens
- **State Management Layer** - URQL (server state) + Zustand (client state)
- **Data Layer** - GraphQL API integration

### Core Principles

1. **Separation of Concerns** - Server state (URQL) vs Client state (Zustand)
2. **Single Responsibility** - Each component/hook has one clear purpose
3. **Composition** - Small, reusable components
4. **Type Safety** - TypeScript throughout
5. **Performance** - Automatic caching and optimized re-renders

---

---

## Design Decisions

### Why URQL over Apollo Client?

| Aspect | URQL | Apollo Client |
|--------|------|---------------|
| Bundle Size | ~30KB | ~100KB+ |
| Learning Curve | Gentle | Steep |
| Flexibility | High (exchanges) | Medium |
| Documentation | Excellent | Excellent |
| Community | Growing | Large |
| React Native Support | First-class | Good |

**Decision:** URQL for its lightweight footprint and simpler API while maintaining all necessary features.

### Why Zustand over Redux?

| Aspect | Zustand | Redux |
|--------|---------|-------|
| Bundle Size | ~1KB | ~10KB+ |
| Boilerplate | Minimal | Heavy |
| Learning Curve | Easy | Moderate |
| DevTools | Yes | Yes |
| TypeScript | Excellent | Good |
| Provider Required | No | Yes |

**Decision:** Zustand for simplicity and minimal boilerplate. Perfect for managing UI state without Redux complexity.

### Why Separate Server and Client State?

**Server State (URQL):**
- Data that lives on the server
- Needs caching, refetching, synchronization
- Examples: offers, products, user data

**Client State (Zustand):**
- Data that lives only in the browser/app
- UI preferences, form state, filters
- Examples: selected filters, sort order, modal state

**Benefits:**
- Clear separation of concerns
- Each tool optimized for its purpose
- Easier to reason about data flow
- Better performance

---

## State Management

### URQL - Server State

**Responsibilities:**
- Fetch data from GraphQL API
- Cache responses
- Handle loading/error states
- Refetch on variable changes
- Optimistic updates
- Pagination


---

### Data Flow

1. User clicks "Best Deals" button
   ↓
2. onClick handler calls: setSorting('DEAL_SCORE', 'DESC')
   ↓
3. Zustand updates store:
   { sortField: 'DEAL_SCORE', sortOrder: 'DESC' }
   ↓
4. Component re-renders (Zustand subscription)
   ↓
5. useQuery hook detects new variables
   ↓
6. URQL checks cache for this query + variables
   ↓
7. Cache miss → Makes GraphQL request
   ↓
8. API returns data
   ↓
9. URQL updates cache
   ↓
10. Component receives new data
    ↓
11. FlatList re-renders with sorted data

---

### Folder structure

project-root/
│
├── app/                              # Expo Router (File-based routing)
│   ├── _layout.tsx                  # Root layout, URQL Provider
│   ├── index.tsx                    # Home/Marketplace screen
│
├── src/                             # Source code
│   │
│   ├── components/                  # Reusable UI components
│   │   ├── OfferCard.tsx           # Individual offer display
│   │   ├── FilterBar.tsx           # Filter controls (future)
│   │   └── LoadingSpinner.tsx      # Loading state (future)
│   │
│   ├── graphql/                    # GraphQL layer
│   │   ├── client.ts               # URQL client config
│   │   │
│   │   ├── queries/                # GraphQL queries
│   │   │   ├── listOffersBundles.ts
│   │   │   └── getOfferDetails.ts  # (future)
│   │   │
│   │   ├── mutations/              # GraphQL mutations
│   │   │   └── createOrder.ts      # (future)
│   │   │
│   │   ├── fragments/              # Reusable fragments
│   │   │   └── offerFields.ts      # (future)
│   │   │
│   │   └── types/                  # GraphQL TypeScript types
│   │       └── offerBundles.ts
│   │
│   ├── store/                      # Zustand stores
│   │   ├── useMarketplaceStore.ts  # Marketplace filters/sorting
│   │   └── useAuthStore.ts         # Authentication (future)
│   │
│   ├── hooks/                      # Custom hooks
│   │   └── useDebounce.ts          # (future)
│   │
│   ├── utils/                      # Utility functions
│   │   └── formatters.ts           # (future)
│   │
│   └── constants/                  # Constants
│       └── config.ts               # (future)
│
├── assets/                         # Static assets
│   ├── images/
│   └── fonts/
│
├── README.md                       # Project overview
├── ARCHITECTURE.md                 # This file
└── package.json
