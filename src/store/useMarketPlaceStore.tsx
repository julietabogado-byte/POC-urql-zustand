import { create } from "zustand";
{
  /*
    Stores filter/sort preferences
    Provides actions to update state
    Triggers component re-renders
    No Provider needed (simpler than Redux)
*/
}

interface MarketplaceState {
  // Filters
  selectedHostingSite: string | null;
  minHashRate: number | null;
  maxHashRate: number | null;
  sortOrder: "ASC" | "DESC";
  sortField: string;

  // Actions
  setHostingSite: (siteId: string | null) => void;
  setHashRateRange: (min: number | null, max: number | null) => void;
  setSorting: (field: string, order: "ASC" | "DESC") => void;
  resetFilters: () => void;
}

export const useMarketplaceStore = create<MarketplaceState>((set) => ({
  // Initial state
  selectedHostingSite: null,
  minHashRate: null,
  maxHashRate: null,
  sortOrder: "DESC",
  sortField: "DEAL_SCORE",

  // Actions
  setHostingSite: (siteId) => set({ selectedHostingSite: siteId }),

  setHashRateRange: (min, max) =>
    set({
      minHashRate: min,
      maxHashRate: max,
    }),

  setSorting: (field, order) =>
    set({
      sortField: field,
      sortOrder: order,
    }),

  resetFilters: () =>
    set({
      selectedHostingSite: null,
      minHashRate: null,
      maxHashRate: null,
      sortOrder: "DESC",
      sortField: "DEAL_SCORE",
    }),
}));
