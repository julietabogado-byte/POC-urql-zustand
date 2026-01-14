export interface OfferBundleVariables {
  pagination: {
    first: number;
    after: string;
  };
  sorting: {
    order: 'ASC' | 'DESC';
    field: string;
  };
  filter: {
    id?: { eq: string | null };
    createdBy?: { eq: string | null };
    totalHashRate24HHr?: { gte: number | null; lte: number | null };
    totalPowerManufacturer?: { gte: number | null; lte: number | null };
    itemModelManufacturer?: string | null;
    itemModelId?: string | null;
    hostingSiteId?: string | null;
    itemModelModel?: string | null;
    itemModelName?: string | null;
    priceUsd?: Record<string, any>;
    dollarPerTh?: Record<string, any>;
  };
}

