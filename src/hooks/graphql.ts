import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  NaiveDate: { input: any; output: any; }
  NaiveDateTime: { input: any; output: any; }
};

export type Agreement = {
  __typename?: 'Agreement';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  url: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type Bid = {
  __typename?: 'Bid';
  createdAt: Scalars['NaiveDateTime']['output'];
  createdBy: UserAccount;
  createdById: Scalars['Int']['output'];
  expireAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  hashrateInRange: Scalars['Boolean']['output'];
  hostingSites: Array<HostingSite>;
  id: Scalars['Int']['output'];
  itemModel?: Maybe<ItemMaster>;
  onlineOnly: Scalars['Boolean']['output'];
  price: BidPrice;
  quantity: Scalars['Int']['output'];
  status: BidStatus;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
};

export type BidFilter = {
  createdAt?: InputMaybe<FilterParamNaiveDateTime>;
  createdBy?: InputMaybe<FilterParamInt>;
  expireAt?: InputMaybe<FilterParamNaiveDateTime>;
  hashrateInRange?: InputMaybe<FilterParamBool>;
  id?: InputMaybe<FilterParamInt>;
  itemModelDescription?: InputMaybe<FilterParamString>;
  itemModelId?: InputMaybe<FilterParamInt>;
  itemModelManufacturer?: InputMaybe<FilterParamString>;
  itemModelModel?: InputMaybe<FilterParamString>;
  itemModelName?: InputMaybe<FilterParamString>;
  onlineOnly?: InputMaybe<FilterParamBool>;
  priceSat?: InputMaybe<FilterParamInt>;
  priceUsd?: InputMaybe<FilterParamDecimal>;
  quantity?: InputMaybe<FilterParamInt>;
  status?: InputMaybe<FilterParamBidStatus>;
  updatedAt?: InputMaybe<FilterParamNaiveDateTime>;
};

export type BidOutput = {
  __typename?: 'BidOutput';
  results: Array<Bid>;
  total: Scalars['Int']['output'];
};

export type BidPrice = {
  __typename?: 'BidPrice';
  nativeCurrency: Scalars['String']['output'];
  priceBtc: Scalars['Decimal']['output'];
  priceUsd: Scalars['Decimal']['output'];
  timestamp: Scalars['String']['output'];
};


export type BidPricePriceBtcArgs = {
  unit?: Btcdenomination;
};

export enum BidSortField {
  CreatedAt = 'CREATED_AT',
  CreatedBy = 'CREATED_BY',
  ExpireAt = 'EXPIRE_AT',
  HasHashrateInRange = 'HAS_HASHRATE_IN_RANGE',
  Id = 'ID',
  ItemModelDescription = 'ITEM_MODEL_DESCRIPTION',
  ItemModelId = 'ITEM_MODEL_ID',
  ItemModelManufacturer = 'ITEM_MODEL_MANUFACTURER',
  ItemModelModel = 'ITEM_MODEL_MODEL',
  ItemModelName = 'ITEM_MODEL_NAME',
  OnlineOnly = 'ONLINE_ONLY',
  PriceSat = 'PRICE_SAT',
  PriceUsd = 'PRICE_USD',
  Quantity = 'QUANTITY',
  Status = 'STATUS',
  UpdatedAt = 'UPDATED_AT'
}

export type BidSorting = {
  field: BidSortField;
  order: Order;
};

export enum BidStatus {
  Active = 'Active',
  Cancelled = 'Cancelled',
  Expired = 'Expired',
  Filled = 'Filled'
}

/**
 * Bitcoin stats
 * Holds bitcoin statistics data
 */
export type BitcoinStats = {
  __typename?: 'BitcoinStats';
  /** The average block fee monthly */
  avgBlockFeeMonthly: Scalars['Int']['output'];
  /** The current block subsidy */
  blockSubsidy: Scalars['Float']['output'];
  /** The current network difficulty, the same applied to all the estimations */
  difficulty: Scalars['Int']['output'];
  /** The current exchange rate with 2 directions BTC->USD and USD->BTC */
  exchangeRate: ExchangeRate;
  /** The hashprice in usd/ph/s/day or sat/ph/s/day */
  hashprice: HashPrice;
};

export type BtcFund = {
  __typename?: 'BtcFund';
  amountSat: Scalars['Int']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  id: Scalars['Int']['output'];
  provider: Scalars['String']['output'];
  salesOrderId: Scalars['Int']['output'];
  state: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  withdrawalAddress?: Maybe<Scalars['String']['output']>;
  withdrawalTxid?: Maybe<Scalars['String']['output']>;
};

export enum Btcdenomination {
  Btc = 'BTC',
  Satoshi = 'SATOSHI'
}

export type Btcprice = {
  unit?: Btcdenomination;
  value: Scalars['Decimal']['input'];
};

export type BwsSettings = {
  __typename?: 'BwsSettings';
  avgSellingPricePeriod?: Maybe<Scalars['Int']['output']>;
  btcProvider?: Maybe<Scalars['String']['output']>;
  /**
   * How much bitcoin mining difficulty is adjusted yearly, in percent
   * E.g. 10 means 10% increase per year
   */
  difficultyAdjustmentYearlyPct?: Maybe<Scalars['Decimal']['output']>;
  disableLndApi?: Maybe<Scalars['Boolean']['output']>;
  enableRefundDeposit?: Maybe<Scalars['Boolean']['output']>;
  enableSalesCommissionAutoPay?: Maybe<Scalars['Boolean']['output']>;
  numHostingFee?: Maybe<Scalars['Int']['output']>;
  offerBundleMaxSize?: Maybe<Scalars['Int']['output']>;
  /**
   * How much bitcoin exchange rate to USD is adjusted yearly, in percent
   * E.g. 10 means 10% increase per year
   */
  priceAdjustmentYearlyPct?: Maybe<Scalars['Decimal']['output']>;
  purchaseExpirationSecs?: Maybe<Scalars['Int']['output']>;
  /** Deprecated: use hosting site tax instead */
  taxPct?: Maybe<Scalars['Decimal']['output']>;
  withdrawWallet?: Maybe<Scalars['String']['output']>;
};

export type ChargebeeCreditCardStatus = {
  __typename?: 'ChargebeeCreditCardStatus';
  /**
   * Credit Card Availability for the user
   * If false, the user can't use credit card
   * If true, the user can use credit card
   */
  available: Scalars['Boolean']['output'];
  /**
   * Maximum USD payment
   * This is the maximum amount of USD the user can spend in a single payment
   */
  maxUsdPayment: Scalars['Float']['output'];
  /**
   * Reason why the fiat is unavailable
   * One of the following:
   * - KYC not completed
   * - Payment limit exceeded (only available when fetched via offer api)
   * - Unknown user
   */
  unavailableReason?: Maybe<Scalars['String']['output']>;
  /**
   * Reason why the cc is unavailable
   * One of the following:
   * - KYC not completed
   * - Payment limit exceeded (only available when fetched via offer api)
   */
  unavailableReasonCode?: Maybe<UnavailableReasonCode>;
};

export enum CoinType {
  Btc = 'BTC',
  Eth = 'ETH',
  Hnt = 'HNT',
  Xla = 'XLA',
  Zec = 'ZEC'
}

export type Contract = {
  __typename?: 'Contract';
  /** @deprecated Deprecated, no longer available */
  active: Scalars['Boolean']['output'];
  contractStatus: ContractStatusType;
  createdAt: Scalars['NaiveDateTime']['output'];
  /** @deprecated Deprecated, no longer available */
  createdOn: Scalars['DateTime']['output'];
  deactivatedDate?: Maybe<Scalars['NaiveDateTime']['output']>;
  deactivatedReason?: Maybe<Scalars['String']['output']>;
  /** @deprecated Deprecated, no longer available */
  deposit: Scalars['Decimal']['output'];
  /** @deprecated Deprecated, available via master_contract */
  duration: Scalars['Int']['output'];
  /** @deprecated Deprecated, available via master_contract */
  energyPrice: Scalars['Decimal']['output'];
  estimatedHostingFee: OfferPrice;
  expiresOn: Scalars['NaiveDate']['output'];
  id: Scalars['Int']['output'];
  masterContract: MasterContract;
  monthlyAmountUsd: Scalars['Decimal']['output'];
  /** @deprecated Deprecated, no longer available */
  ownerId: Scalars['Int']['output'];
  /** @deprecated Deprecated, available via master_contract */
  poolFeePct: Scalars['Decimal']['output'];
  realtimeSla: Array<RealtimeSla>;
  rig?: Maybe<Rig>;
  rigId?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Deprecated, available via master_contract */
  salesCommissionPct: Scalars['Decimal']['output'];
  salesforceId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Deprecated, available via master_contract */
  slaPct: Scalars['Decimal']['output'];
  updatedAt: Scalars['NaiveDateTime']['output'];
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ContractFilter = {
  duration?: InputMaybe<FilterParamInt32>;
  energyPrice?: InputMaybe<FilterParamDecimal>;
  expiresOn?: InputMaybe<FilterParamDate>;
  id?: InputMaybe<FilterParamInt>;
  masterContractId?: InputMaybe<FilterParamInt>;
  poolFeePct?: InputMaybe<FilterParamDecimal>;
  salesCommissionPct?: InputMaybe<FilterParamDecimal>;
  slaPct?: InputMaybe<FilterParamDecimal>;
};

export type ContractOutput = {
  __typename?: 'ContractOutput';
  /** Results of the query. */
  results: Array<Contract>;
  /** Total count of results len. It follows the filter parmeter. */
  total: Scalars['Int']['output'];
};

export enum ContractSortField {
  ContractStatus = 'CONTRACT_STATUS',
  CreatedAt = 'CREATED_AT',
  DeactivatedDate = 'DEACTIVATED_DATE',
  DeactivatedReason = 'DEACTIVATED_REASON',
  ExpireDate = 'EXPIRE_DATE',
  Id = 'ID',
  MonthlyAmount = 'MONTHLY_AMOUNT',
  RigId = 'RIG_ID',
  UpdateAt = 'UPDATE_AT'
}

export enum ContractStatusType {
  Activated = 'ACTIVATED',
  Deactivated = 'DEACTIVATED',
  Draft = 'DRAFT',
  Expired = 'EXPIRED',
  MonthToMonth = 'MONTH_TO_MONTH',
  Paused = 'PAUSED',
  PendingFundsManagement = 'PENDING_FUNDS_MANAGEMENT'
}

export type ContractsFilter = {
  contractStatus?: InputMaybe<FilterParamContractStatusType>;
  createdAt?: InputMaybe<FilterParamNaiveDateTime>;
  deactivatedDate?: InputMaybe<FilterParamNaiveDateTime>;
  deactivatedReason?: InputMaybe<FilterParamString>;
  expireDate?: InputMaybe<FilterParamDate>;
  id?: InputMaybe<FilterParamInt>;
  monthlyAmount?: InputMaybe<FilterParamDecimal>;
  rigId?: InputMaybe<FilterParamInt>;
  updatedAt?: InputMaybe<FilterParamNaiveDateTime>;
};

export type ContractsSorting = {
  field: ContractSortField;
  order: Order;
};

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  btcToUsd: Scalars['Float']['output'];
  timestamp: Scalars['String']['output'];
  usdToBtc: Scalars['Float']['output'];
};

export type FiatPaynoteStatus = {
  __typename?: 'FiatPaynoteStatus';
  /**
   * Fiat Availability for the user
   * If false, the user can't use fiat paynote
   * If true, the user can use fiat paynote
   */
  fiatAvailable: Scalars['Boolean']['output'];
  /**
   * Reason why the fiat is unavailable
   * One of the following:
   * - KYC not completed
   * - Daily limit exceeded
   * - Monthly limit exceeded
   * - Payment limit exceeded (only available when fetched via offer api)
   */
  fiatUnavailableReason?: Maybe<Scalars['String']['output']>;
  /**
   * Reason why the fiat is unavailable
   * One of the following:
   * - KYC not completed
   * - Daily limit exceeded
   * - Monthly limit exceeded
   * - Payment limit exceeded (only available when fetched via offer api)
   */
  fiatUnavailableReasonCode?: Maybe<UnavailableReasonCode>;
  /**
   * Maximum USD payment
   * This is the maximum amount of USD the user can spend in a single payment
   * It is only evaluated when the this object is fetched via offer api
   */
  maxUsdPayment: Scalars['Float']['output'];
  /**
   * Maximum USD per day
   * This is the maximum amount of USD the user can spend in a day
   * from midnight to now
   */
  maxUsdPerDay: Scalars['Float']['output'];
  /**
   * Maximum USD per month
   * This is the maximum amount of USD the user can spend in a month
   * from current month 1st to now
   */
  maxUsdPerMonth: Scalars['Float']['output'];
  /**
   * Used USD per day
   * This is the amount of USD the system has spent in a day
   */
  usedUsdPerDay: Scalars['Float']['output'];
  /**
   * Used USD per month
   * This is the amount of USD the system has spent in a month
   */
  usedUsdPerMonth: Scalars['Float']['output'];
};

export type FilterParamBidStatus = {
  eq?: InputMaybe<BidStatus>;
  gt?: InputMaybe<BidStatus>;
  gte?: InputMaybe<BidStatus>;
  has?: InputMaybe<BidStatus>;
  inside?: InputMaybe<Array<BidStatus>>;
  lt?: InputMaybe<BidStatus>;
  lte?: InputMaybe<BidStatus>;
  neq?: InputMaybe<BidStatus>;
};

export type FilterParamBool = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  has?: InputMaybe<Scalars['Boolean']['input']>;
  inside?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterParamContractStatusType = {
  eq?: InputMaybe<ContractStatusType>;
  gt?: InputMaybe<ContractStatusType>;
  gte?: InputMaybe<ContractStatusType>;
  has?: InputMaybe<ContractStatusType>;
  inside?: InputMaybe<Array<ContractStatusType>>;
  lt?: InputMaybe<ContractStatusType>;
  lte?: InputMaybe<ContractStatusType>;
  neq?: InputMaybe<ContractStatusType>;
};

export type FilterParamDate = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  has?: InputMaybe<Scalars['Date']['input']>;
  inside?: InputMaybe<Array<Scalars['Date']['input']>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

export type FilterParamDateTime = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  has?: InputMaybe<Scalars['DateTime']['input']>;
  inside?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FilterParamDecimal = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  has?: InputMaybe<Scalars['Decimal']['input']>;
  inside?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
};

export type FilterParamDouble = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  has?: InputMaybe<Scalars['Float']['input']>;
  inside?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterParamFloat = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  has?: InputMaybe<Scalars['Float']['input']>;
  inside?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterParamInt = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  has?: InputMaybe<Scalars['Int']['input']>;
  inside?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export type FilterParamInt32 = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  has?: InputMaybe<Scalars['Int']['input']>;
  inside?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export type FilterParamNaiveDateTime = {
  eq?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  gt?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  gte?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  has?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  inside?: InputMaybe<Array<Scalars['NaiveDateTime']['input']>>;
  lt?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  lte?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  neq?: InputMaybe<Scalars['NaiveDateTime']['input']>;
};

export type FilterParamRigStatus = {
  eq?: InputMaybe<RigStatus>;
  gt?: InputMaybe<RigStatus>;
  gte?: InputMaybe<RigStatus>;
  has?: InputMaybe<RigStatus>;
  inside?: InputMaybe<Array<RigStatus>>;
  lt?: InputMaybe<RigStatus>;
  lte?: InputMaybe<RigStatus>;
  neq?: InputMaybe<RigStatus>;
};

export type FilterParamSalesOrderOrderType = {
  eq?: InputMaybe<SalesOrderOrderType>;
  gt?: InputMaybe<SalesOrderOrderType>;
  gte?: InputMaybe<SalesOrderOrderType>;
  has?: InputMaybe<SalesOrderOrderType>;
  inside?: InputMaybe<Array<SalesOrderOrderType>>;
  lt?: InputMaybe<SalesOrderOrderType>;
  lte?: InputMaybe<SalesOrderOrderType>;
  neq?: InputMaybe<SalesOrderOrderType>;
};

export type FilterParamSalesOrderPaymentType = {
  eq?: InputMaybe<SalesOrderPaymentType>;
  gt?: InputMaybe<SalesOrderPaymentType>;
  gte?: InputMaybe<SalesOrderPaymentType>;
  has?: InputMaybe<SalesOrderPaymentType>;
  inside?: InputMaybe<Array<SalesOrderPaymentType>>;
  lt?: InputMaybe<SalesOrderPaymentType>;
  lte?: InputMaybe<SalesOrderPaymentType>;
  neq?: InputMaybe<SalesOrderPaymentType>;
};

export type FilterParamSalesOrderStatus = {
  eq?: InputMaybe<SalesOrderStatus>;
  gt?: InputMaybe<SalesOrderStatus>;
  gte?: InputMaybe<SalesOrderStatus>;
  has?: InputMaybe<SalesOrderStatus>;
  inside?: InputMaybe<Array<SalesOrderStatus>>;
  lt?: InputMaybe<SalesOrderStatus>;
  lte?: InputMaybe<SalesOrderStatus>;
  neq?: InputMaybe<SalesOrderStatus>;
};

export type FilterParamString = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  has?: InputMaybe<Scalars['String']['input']>;
  inside?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
};

export type FilterParamUserLessonStatus = {
  eq?: InputMaybe<UserLessonStatus>;
  gt?: InputMaybe<UserLessonStatus>;
  gte?: InputMaybe<UserLessonStatus>;
  has?: InputMaybe<UserLessonStatus>;
  inside?: InputMaybe<Array<UserLessonStatus>>;
  lt?: InputMaybe<UserLessonStatus>;
  lte?: InputMaybe<UserLessonStatus>;
  neq?: InputMaybe<UserLessonStatus>;
};

export type GqlHashrateEfficiency = {
  __typename?: 'GqlHashrateEfficiency';
  dateTime: Scalars['String']['output'];
  efficiency: Scalars['Float']['output'];
  hashrate: Scalars['Float']['output'];
};

export type GqlHashrateEfficiencyRevenue = {
  __typename?: 'GqlHashrateEfficiencyRevenue';
  dateTime: Scalars['String']['output'];
  efficiency: Scalars['Float']['output'];
  estRevenue: Scalars['Float']['output'];
  hashrate: Scalars['Float']['output'];
};

export type HashPrice = {
  __typename?: 'HashPrice';
  /** The hashprice in btc/ph/s/day */
  btc: Scalars['Decimal']['output'];
  /**
   * The hashprice in sat/ph/s/day
   * Calculated as usd / exchange_rate.btc_to_usd
   */
  sat: Scalars['Int']['output'];
  /** The hashprice in usd/ph/s/day */
  usd: Scalars['Decimal']['output'];
};

export enum HashRateUnit {
  GhPs = 'GH_PS',
  HPs = 'H_PS',
  KhPs = 'KH_PS',
  MhPs = 'MH_PS',
  PhPs = 'PH_PS',
  ThPs = 'TH_PS'
}

export type Heartbeat = {
  __typename?: 'Heartbeat';
  utc: Scalars['DateTime']['output'];
};

export type HistoricalMetric = {
  __typename?: 'HistoricalMetric';
  hashRate?: Maybe<Scalars['Float']['output']>;
  online: Scalars['Boolean']['output'];
  powerUsage?: Maybe<Scalars['Float']['output']>;
  rigId: Scalars['Int']['output'];
  timestamp: Scalars['String']['output'];
};


export type HistoricalMetricHashRateArgs = {
  unit?: HashRateUnit;
};


export type HistoricalMetricPowerUsageArgs = {
  unit?: PowerUnit;
};

export type HistoricalMetricPool = {
  __typename?: 'HistoricalMetricPool';
  hashRate?: Maybe<Scalars['Float']['output']>;
  profit: Scalars['Decimal']['output'];
  revenue: Scalars['Decimal']['output'];
  rigId: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  timestamp: Scalars['String']['output'];
};


export type HistoricalMetricPoolHashRateArgs = {
  unit?: HashRateUnit;
};


export type HistoricalMetricPoolProfitArgs = {
  unit?: Btcdenomination;
};


export type HistoricalMetricPoolRevenueArgs = {
  unit?: Btcdenomination;
};

export type HostingSite = {
  __typename?: 'HostingSite';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdOn: Scalars['NaiveDateTime']['output'];
  id: Scalars['Int']['output'];
  latitude: Scalars['Decimal']['output'];
  location?: Maybe<Scalars['String']['output']>;
  longitude: Scalars['Decimal']['output'];
  masterContracts: Array<MasterContract>;
  name: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  pickaxes: Array<Pickaxe>;
  salesforceId?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stateCode?: Maybe<Scalars['String']['output']>;
  taxPct: Scalars['Decimal']['output'];
  updatedOn?: Maybe<Scalars['NaiveDateTime']['output']>;
  url: Scalars['String']['output'];
  zip?: Maybe<Scalars['String']['output']>;
};

export enum InputTickSize {
  Daily = 'DAILY',
  Hourly = 'HOURLY'
}

export enum IntervalTime {
  Interval_1Day = 'INTERVAL_1DAY',
  Interval_1Hour = 'INTERVAL_1_HOUR',
  Interval_5Min = 'INTERVAL_5_MIN',
  Interval_6Hour = 'INTERVAL_6_HOUR',
  Interval_15Min = 'INTERVAL_15_MIN'
}

export type ItemMaster = {
  __typename?: 'ItemMaster';
  /** The description of the item, defined in salesforce. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The salesforce defines a default efficiency for the model.
   * The efficiency is a percentage value.
   * It is calculated as the hashrate divided by the power consumption.
   */
  efficiency?: Maybe<Scalars['Float']['output']>;
  groupName?: Maybe<Scalars['String']['output']>;
  /**
   * The salesforce defines a default hashrate for the model.
   * Use the unit to convert the hashrate to the desired unit.
   */
  hashRate?: Maybe<Scalars['Float']['output']>;
  /** The unique identifier of the item. */
  id: Scalars['Int']['output'];
  /** The manufacturer of the item, defined in salesforce. */
  manufacturer?: Maybe<Scalars['String']['output']>;
  /** The model of the item, defined in salesforce. */
  model?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the item, defined in salesforce.
   * It is also used to match the custom_model in the foreman_miner table.
   */
  name: Scalars['String']['output'];
  /** The URL of the photo of the item, defined by the salesforce. */
  photoUrl?: Maybe<Scalars['String']['output']>;
  /**
   * The salesforce defines a default power consumption for the model.
   * Use the unit to convert the power consumption to the desired unit.
   */
  power?: Maybe<Scalars['Float']['output']>;
  /** The unique identifier of the item in the salesforce. */
  salesforceId: Scalars['String']['output'];
};


export type ItemMasterHashRateArgs = {
  unit?: HashRateUnit;
};


export type ItemMasterPowerArgs = {
  unit?: PowerUnit;
};

export type LedgerDeposit = {
  __typename?: 'LedgerDeposit';
  amount: Scalars['Decimal']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  createdBy?: Maybe<Scalars['Int']['output']>;
  currency: LedgerTransactionCurrency;
  direction: LedgerTransactionType;
  exchangeRateUsd: Scalars['Decimal']['output'];
  id: Scalars['Int']['output'];
  rigId?: Maybe<Scalars['Int']['output']>;
  salesOrderId?: Maybe<Scalars['Int']['output']>;
  salesOrderItemId?: Maybe<Scalars['Int']['output']>;
  salesforceId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['NaiveDateTime']['output'];
  userId: Scalars['Int']['output'];
};

export enum LedgerTransactionCurrency {
  Btc = 'BTC',
  Sat = 'SAT',
  Usd = 'USD'
}

export enum LedgerTransactionType {
  Credit = 'CREDIT',
  Debit = 'DEBIT'
}

export type LinkedCustomer = {
  __typename?: 'LinkedCustomer';
  customerId: Scalars['String']['output'];
  hasActiveSubscription: Scalars['Boolean']['output'];
  hasBillingAddress: Scalars['Boolean']['output'];
  hasPaymentMethod: Scalars['Boolean']['output'];
  object: Scalars['String']['output'];
};

export type LuxorSubaccount = {
  __typename?: 'LuxorSubaccount';
  id: Scalars['Int']['output'];
  luxorKeyId?: Maybe<Scalars['Int']['output']>;
  luxorKeyName: Scalars['String']['output'];
  luxorSubaccountUsername: Scalars['String']['output'];
  paymentConfigs: Array<LuxorSubaccountPaymentConfig>;
  paymentStatus?: Maybe<LuxorSubaccountPaymentStatus>;
  poolFeePct?: Maybe<Scalars['Float']['output']>;
  subaccountType: LuxorSubaccountType;
  userId?: Maybe<Scalars['Int']['output']>;
  walletHistory: Array<LuxorSubaccountWalletHistory>;
  wallets: Array<LuxorSubaccountWallet>;
};

export type LuxorSubaccountPaymentConfig = {
  __typename?: 'LuxorSubaccountPaymentConfig';
  coin: CoinType;
  createdAt: Scalars['NaiveDateTime']['output'];
  id: Scalars['Int']['output'];
  intervalHours: Scalars['Int']['output'];
  luxorSubaccountId: Scalars['Int']['output'];
  paymentMode: PaymentMode;
  thresholdSat: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  weeklyPaymentInterval?: Maybe<WeeklyIntervalPaymentFrequency>;
};

export type LuxorSubaccountPaymentStatus = {
  __typename?: 'LuxorSubaccountPaymentStatus';
  balance: Scalars['Decimal']['output'];
  frozenUntil?: Maybe<Scalars['NaiveDateTime']['output']>;
  nextPayoutEstimatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  status: Scalars['String']['output'];
};


export type LuxorSubaccountPaymentStatusBalanceArgs = {
  unit?: Btcdenomination;
};

export enum LuxorSubaccountType {
  Ownership = 'OWNERSHIP',
  Rental = 'RENTAL'
}

export type LuxorSubaccountWallet = {
  __typename?: 'LuxorSubaccountWallet';
  address: Scalars['String']['output'];
  coin: CoinType;
  createdAt: Scalars['NaiveDateTime']['output'];
  id: Scalars['Int']['output'];
  luxorSubaccountId: Scalars['Int']['output'];
  luxorWalletId: Scalars['Int']['output'];
  luxorWalletRowId: Scalars['Int']['output'];
  splitPercentage: Scalars['Int']['output'];
  updatedAt: Scalars['NaiveDateTime']['output'];
  walletName: Scalars['String']['output'];
};

export type LuxorSubaccountWalletHistory = {
  __typename?: 'LuxorSubaccountWalletHistory';
  address: Scalars['String']['output'];
  coin: CoinType;
  createdAt: Scalars['NaiveDateTime']['output'];
  id: Scalars['Int']['output'];
  luxorSubaccountId: Scalars['Int']['output'];
  luxorSubaccountWalletId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type MasterContract = {
  __typename?: 'MasterContract';
  active: Scalars['Boolean']['output'];
  durationMths: Scalars['Int']['output'];
  endDate?: Maybe<Scalars['NaiveDateTime']['output']>;
  energyPrice: Scalars['Decimal']['output'];
  hostingNFirstMonths: Scalars['Int']['output'];
  hostingSites: Array<HostingSite>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  poolFeePct: Scalars['Decimal']['output'];
  salesCommissionPct: Scalars['Decimal']['output'];
  salesforceId?: Maybe<Scalars['String']['output']>;
  securityDepositsNMonths: Scalars['Int']['output'];
  slaPct: Scalars['Decimal']['output'];
};

export type MasterContractFilter = {
  active?: InputMaybe<FilterParamBool>;
  durationMths?: InputMaybe<FilterParamInt32>;
  energyPrice?: InputMaybe<FilterParamDecimal>;
  hostingSiteId?: InputMaybe<FilterParamInt>;
  id?: InputMaybe<FilterParamInt>;
  poolFeePct?: InputMaybe<FilterParamDecimal>;
  salesCommissionPct?: InputMaybe<FilterParamDecimal>;
  slaPct?: InputMaybe<FilterParamDecimal>;
};

export enum MasterContractSortField {
  Active = 'ACTIVE',
  DurationMths = 'DURATION_MTHS',
  EnergyPrice = 'ENERGY_PRICE',
  Id = 'ID',
  PoolFeePct = 'POOL_FEE_PCT',
  SalesCommissionPct = 'SALES_COMMISSION_PCT',
  SlaPct = 'SLA_PCT'
}

export type MasterContractSorting = {
  field: MasterContractSortField;
  order: Order;
};

export type Miner = {
  __typename?: 'Miner';
  active: Scalars['Boolean']['output'];
  created: Scalars['DateTime']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Energy Adjusted Hashprice in Satoshis
   *
   * How much revenue (in satoshis) the miner generates per unit of hashpower
   *
   * value = (HashpriceTh * 1000) / (Efficiency * 24)
   *
   * Hashprice in TH
   * Efficiency in W/TH
   *
   * As we already have the hashprice in sat/PH/s/day we can simplify the formula to:
   * value = HashpricePh / (Efficiency * 24)
   *
   * Unit: sat / kwh
   */
  energyAdjustedHashpriceSat: Scalars['Decimal']['output'];
  /**
   * Energy Adjusted Hashprice in USD
   *
   * How much revenue (in USD) the miner generates per unit of hashpower
   *
   * value = (HashpriceTh * 1000) / (Efficiency * 24)
   *
   * Unit: USD / kwh
   */
  energyAdjustedHashpriceUsd: Scalars['Decimal']['output'];
  hashRate?: Maybe<Scalars['Float']['output']>;
  hashRate24Hr?: Maybe<Scalars['Float']['output']>;
  hashRateIdeal?: Maybe<Scalars['Float']['output']>;
  historicUptime: Scalars['Float']['output'];
  hostingSite?: Maybe<HostingSite>;
  id: Scalars['Int']['output'];
  ip: Scalars['String']['output'];
  lastUpdated: Scalars['DateTime']['output'];
  location?: Maybe<Scalars['String']['output']>;
  mac: Scalars['String']['output'];
  model: Scalars['String']['output'];
  name: Scalars['String']['output'];
  owner: UserAccount;
  pickaxe: Scalars['Int']['output'];
  powerManufacturer?: Maybe<Scalars['Float']['output']>;
  powerMode?: Maybe<Scalars['String']['output']>;
  powerReported?: Maybe<Scalars['Boolean']['output']>;
  powerUsage?: Maybe<Scalars['Float']['output']>;
  powerUsage24Hr?: Maybe<Scalars['Float']['output']>;
  rig?: Maybe<Rig>;
  seen: Scalars['Boolean']['output'];
  serial?: Maybe<Scalars['String']['output']>;
};


export type MinerHashRateArgs = {
  unit?: HashRateUnit;
};


export type MinerHashRate24HrArgs = {
  unit?: HashRateUnit;
};


export type MinerHashRateIdealArgs = {
  unit?: HashRateUnit;
};


export type MinerPowerManufacturerArgs = {
  unit?: PowerUnit;
};


export type MinerPowerUsageArgs = {
  unit?: PowerUnit;
};


export type MinerPowerUsage24HrArgs = {
  unit?: PowerUnit;
};

export type MinerFilter = {
  active?: InputMaybe<FilterParamBool>;
  created?: InputMaybe<FilterParamDateTime>;
  currentInput?: InputMaybe<FilterParamFloat>;
  description?: InputMaybe<FilterParamString>;
  hashRate?: InputMaybe<FilterParamFloat>;
  hashRate24Hr?: InputMaybe<FilterParamDouble>;
  hashRateIdeal?: InputMaybe<FilterParamFloat>;
  id?: InputMaybe<FilterParamInt>;
  ip?: InputMaybe<FilterParamString>;
  lastUpdated?: InputMaybe<FilterParamDateTime>;
  mac?: InputMaybe<FilterParamString>;
  model?: InputMaybe<FilterParamString>;
  name?: InputMaybe<FilterParamString>;
  picKaxe?: InputMaybe<FilterParamInt>;
  platform?: InputMaybe<FilterParamString>;
  power?: InputMaybe<FilterParamFloat>;
  power24Hr?: InputMaybe<FilterParamDouble>;
  powerManufacturer?: InputMaybe<FilterParamFloat>;
  powerMode?: InputMaybe<FilterParamString>;
  powerModeReported?: InputMaybe<FilterParamBool>;
  seen?: InputMaybe<FilterParamBool>;
  serial?: InputMaybe<FilterParamString>;
  voltage?: InputMaybe<FilterParamFloat>;
  voltageInput?: InputMaybe<FilterParamFloat>;
};

export type MiningSummary = {
  __typename?: 'MiningSummary';
  hashrate: Scalars['Float']['output'];
  revenue: Scalars['Float']['output'];
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  addUserLesson: UserLesson;
  buyOrder: SalesOrder;
  cancelOrder: SalesOrder;
  /** Start a new chargebee portal session */
  chargebeePortalSession?: Maybe<PortalSessionResponse>;
  createBid: Bid;
  createOfferBundle: OfferBundle;
  removeBid: Scalars['Boolean']['output'];
  removeOfferBundle: Scalars['Boolean']['output'];
  removeRentOfferBundle: Scalars['Boolean']['output'];
  removeUserLesson: Scalars['Boolean']['output'];
  rentOrder: SalesOrder;
  signAgreement: UserSignedAgreement;
  unsignAgreement: Scalars['Boolean']['output'];
  updateBid: Bid;
  updateOfferBundle: OfferBundle;
  updateRig: Rig;
  updateSubaccountPayment: LuxorSubaccountPaymentConfig;
  updateSubaccountWallet: LuxorSubaccountWallet;
  updateUserAccount: UserAccount;
  updateUserLesson: UserLesson;
  updateUserSettings: UserSettings;
  /** Start a new user KYC process */
  userKyc: UserOnfido;
};


export type MutationRootAddUserLessonArgs = {
  moduleId: Scalars['String']['input'];
  status: UserLessonStatus;
  topicId: Scalars['String']['input'];
};


export type MutationRootBuyOrderArgs = {
  items: Array<OfferMasterContractPair>;
  paymentMethod?: InputMaybe<PaymentMethod>;
  promotionCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRootCancelOrderArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRootCreateBidArgs = {
  expirationDate?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  hashrateInRange: Scalars['Boolean']['input'];
  hostingSiteIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  itemModelId: Scalars['Int']['input'];
  onlineOnly: Scalars['Boolean']['input'];
  price: Price;
  quantity: Scalars['Int']['input'];
};


export type MutationRootCreateOfferBundleArgs = {
  allTogether: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  privateOffer?: Scalars['Boolean']['input'];
  rigsPrice: Array<OfferBundleRigPriceInput>;
};


export type MutationRootRemoveBidArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRootRemoveOfferBundleArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRootRemoveRentOfferBundleArgs = {
  robid: Scalars['Int']['input'];
};


export type MutationRootRemoveUserLessonArgs = {
  userLessonId: Scalars['Int']['input'];
};


export type MutationRootRentOrderArgs = {
  paymentMethod: PaymentMethod;
  rentOfferBundleId: Scalars['Int']['input'];
  rentOfferPricePeriodId: Scalars['Int']['input'];
};


export type MutationRootSignAgreementArgs = {
  agreementVersionId: Scalars['Int']['input'];
};


export type MutationRootUnsignAgreementArgs = {
  agreementVersionId: Scalars['Int']['input'];
};


export type MutationRootUpdateBidArgs = {
  expirationDate?: InputMaybe<Scalars['NaiveDateTime']['input']>;
  hashrateInRange?: InputMaybe<Scalars['Boolean']['input']>;
  hostingSiteIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  id: Scalars['Int']['input'];
  onlineOnly?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Price>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<BidStatus>;
};


export type MutationRootUpdateOfferBundleArgs = {
  allTogether?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  privateOffer?: InputMaybe<Scalars['Boolean']['input']>;
  rigsPrice: Array<OfferBundleRigPriceInput>;
};


export type MutationRootUpdateRigArgs = {
  name: Scalars['String']['input'];
  rigId: Scalars['Int']['input'];
};


export type MutationRootUpdateSubaccountPaymentArgs = {
  paymentConfigId: Scalars['Int']['input'];
  poolPaymentConfig: PoolPaymentConfigInput;
};


export type MutationRootUpdateSubaccountWalletArgs = {
  address: Scalars['String']['input'];
  subaccountWalletId: Scalars['Int']['input'];
  walletName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRootUpdateUserAccountArgs = {
  billingCity?: InputMaybe<Scalars['String']['input']>;
  billingCountry?: InputMaybe<Scalars['String']['input']>;
  billingPostalCode?: InputMaybe<Scalars['String']['input']>;
  billingState?: InputMaybe<Scalars['String']['input']>;
  billingStreet?: InputMaybe<Scalars['String']['input']>;
  birthdate?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberCountryCode?: InputMaybe<Scalars['String']['input']>;
  poolPaymentConfig?: InputMaybe<PoolPaymentConfigInput>;
  username?: InputMaybe<Scalars['String']['input']>;
  walletAddress?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRootUpdateUserLessonArgs = {
  status: UserLessonStatus;
  userLessonId: Scalars['Int']['input'];
};


export type MutationRootUpdateUserSettingsArgs = {
  emailNotificationBidFilled?: InputMaybe<Scalars['Boolean']['input']>;
  emailNotificationHighBid?: InputMaybe<Scalars['Boolean']['input']>;
  emailNotificationOfferDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  emailNotificationRewards?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type Offer = {
  __typename?: 'Offer';
  active: Scalars['Boolean']['output'];
  createdBy: UserAccount;
  createdOn: Scalars['Int']['output'];
  /**
   * Deposit is also known as Security Deposit
   * It is the extra last N months defined in the Master Contract
   *
   */
  deposit?: Maybe<OfferPrice>;
  description?: Maybe<Scalars['String']['output']>;
  estimatedMonthlyProfit?: Maybe<OfferPrice>;
  estimatedSubtotal: OfferPrice;
  estimatedTax: OfferPrice;
  exchangeRate: ExchangeRate;
  /**
   * Hosting is the first N months defined in the Master Contract
   * It is the amount to be paid upfront to host the rig
   * This value is not prorated to see prorated use prorated_hosting
   *
   */
  hosting?: Maybe<OfferPrice>;
  id: Scalars['Int']['output'];
  lastUpdatedOn?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the master contract instead */
  numHostingFee: Scalars['Int']['output'];
  offerBundle?: Maybe<OfferBundle>;
  offerBundleId?: Maybe<Scalars['Int']['output']>;
  price: OfferPrice;
  /**
   * Prorated Hosting is the first N months defined in the Master Contract
   * It is the amount to be paid upfront to host the rig
   * It will be prorated for the remaining hours of the current month
   *
   */
  proratedHosting?: Maybe<OfferPrice>;
  rig: Rig;
  taxPct: Scalars['Decimal']['output'];
};


export type OfferDepositArgs = {
  masterContractId: Scalars['Int']['input'];
};


export type OfferEstimatedSubtotalArgs = {
  masterContractId: Scalars['Int']['input'];
};


export type OfferHostingArgs = {
  masterContractId: Scalars['Int']['input'];
};


export type OfferProratedHostingArgs = {
  masterContractId: Scalars['Int']['input'];
};

export type OfferBundle = {
  __typename?: 'OfferBundle';
  active: Scalars['Boolean']['output'];
  aggregationDetails: OfferBundleAggregation;
  allTogether: Scalars['Boolean']['output'];
  /**
   * Bitcoin Stats
   * Gets the current exchange rate, difficulty, and block subsidy
   * for Bitcoin.
   */
  bitcoinStats: BitcoinStats;
  /**
   * Chargebee Credit Card Status
   * This is a special case where we need to check if the offer will exceed
   * the maximum USD payment allowed by the user.
   * The master contract id is optional, when not provided we will use the best master contract for the current hosting site.
   */
  chargebeeCcStats: ChargebeeCreditCardStatus;
  /**
   * Chargebee credit card processing fee
   * The value is in percentage
   */
  chargebeeCreditCardProcessingFeePct: Scalars['Decimal']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  createdBy: UserAccount;
  /**
   * Returns detailed scoring metrics for this offer bundle, exposed in the GraphQL `dealScoreDetails` field.
   *
   * This resolver provides a breakdown of how the offer ranks across various
   * economic and performance metrics, including:
   *
   * - `deal_score`: Overall normalized score (0–100)
   * - `th_score`: Score based on hashrate
   * - `dollar_per_th_score`: Score based on cost-efficiency (USD per TH/s)
   * - `efficiency_score`: Power efficiency score (W/TH)
   * - `profit_score`: Score based on expected profitability
   * - `capital_efficiency_score`: Score based on profit per dollar spent
   * - `break_even_score`: Score based on break-even BTC price
   *
   * # Behavior
   * - If a deal score exists in the cache, the actual normalized values are returned.
   * - If no score is available (e.g. offer is too new or does not meet inclusion criteria),
   * the resolver still returns an object with all fields set to `0.0`.
   *
   * # Errors
   * Returns a server error if the deal score cache is unavailable or cannot be read.
   */
  dealScoreDetails?: Maybe<OfferBundleDealScoreAggregation>;
  description?: Maybe<Scalars['String']['output']>;
  energyPrice?: Maybe<Scalars['Float']['output']>;
  /**
   * Fiat processing fee percentage
   * The value in percentage
   */
  fiatBtcProcessingFeePct: Scalars['Decimal']['output'];
  /**
   * Fiat Paynote Status
   * This is a special case where we need to check if the offer will cause
   * the system to exceed their daily or monthly fiat limits.
   * The master contract id is optional, when not provided we will use the best master contract for the current hosting site.
   */
  fiatPaynoteStats: FiatPaynoteStatus;
  hostingSite?: Maybe<HostingSite>;
  hostingSiteName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  itemMasterDescription?: Maybe<Scalars['String']['output']>;
  itemMasterId?: Maybe<Scalars['Int']['output']>;
  itemMasterManufacturer?: Maybe<Scalars['String']['output']>;
  itemMasterModel?: Maybe<Scalars['String']['output']>;
  itemMasterName?: Maybe<Scalars['String']['output']>;
  itemModel?: Maybe<ItemMaster>;
  monthlyEnergyCost?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use master contract instead */
  numHostingFee: Scalars['Int']['output'];
  offerCount: Scalars['Int']['output'];
  offers: Array<Offer>;
  /**
   * This function calculates the price per tera hash in USD and BTC.
   * The price is calculated by dividing the price in USD by the total hash rate in TH.
   * The price in BTC is calculated by dividing the price in satoshis by the total hash rate in TH.
   *
   * It should be calculated by the database, but we are not allowed to create new columns
   * during the selection in a materialzied view.
   */
  pricePerTh: PricePerTh;
  privateOffer: Scalars['Boolean']['output'];
  restrictedTo?: Maybe<UserAccount>;
  teraHashPerWatt: Scalars['Float']['output'];
  /**
   * Total Chargebee Credit Card fees
   * This function calculates the total estimated amount for the CC processing fees
   * It includes the total estimated price, deposit, hosting, and tax multiplied by the processing fee
   */
  totalChargebeeCreditCardFees: OfferPrice;
  /**
   * Deposit is also known as Security Deposit
   * It is the extra last N months defined in the Master Contract
   *
   */
  totalDeposit: OfferPrice;
  /**
   * Total Estimated Amount
   * This function calculates the total estimated amount for the offer bundle.
   * It includes:
   * - The total estimated price of the offer bundle
   * - The total estimated deposit
   * - The total estimated hosting
   * - The total estimated tax
   *
   */
  totalEstimatedAmount: OfferPrice;
  /**
   * Total Estimated Tax
   * This function calculates the total estimated tax for the offer bundle.
   * The tax depends on the HostingSite
   *
   */
  totalEstimatedTax: OfferPrice;
  totalHashRate: Scalars['Float']['output'];
  totalHashRate24Hr: Scalars['Float']['output'];
  totalHashRateIdeal: Scalars['Float']['output'];
  /**
   * Hosting is the first N months defined in the Master Contract
   * It is the amount to be paid upfront to host the rig
   * This value is not prorated to see prorated hosting view total_prorated_hosting
   *
   */
  totalHosting: OfferPrice;
  /**
   * Total Paynote ACH fees
   * This function calculates the total estimated amount for the ach processing fees
   * It includes the total estimated price, deposit, hosting, and tax multiplied by the processing fee
   */
  totalPaynoteAchFees: OfferPrice;
  totalPower: Scalars['Float']['output'];
  totalPower24Hr: Scalars['Float']['output'];
  totalPowerManufacturer: Scalars['Float']['output'];
  /**
   * Hosting is the first N months defined in the Master Contract
   * It is the amount to be paid upfront to host the rig
   * It will be prorated for the remaining hours of the month
   *
   */
  totalProratedHosting: OfferPrice;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  wattsPerTeraHash: Scalars['Float']['output'];
};


export type OfferBundleChargebeeCcStatsArgs = {
  masterContractId?: InputMaybe<Scalars['Int']['input']>;
};


export type OfferBundleFiatPaynoteStatsArgs = {
  masterContractId?: InputMaybe<Scalars['Int']['input']>;
};


export type OfferBundleTotalChargebeeCreditCardFeesArgs = {
  masterContractId: Scalars['Int']['input'];
};


export type OfferBundleTotalDepositArgs = {
  masterContractId: Scalars['Int']['input'];
};


export type OfferBundleTotalEstimatedAmountArgs = {
  masterContractId: Scalars['Int']['input'];
};


export type OfferBundleTotalHostingArgs = {
  masterContractId: Scalars['Int']['input'];
};


export type OfferBundleTotalPaynoteAchFeesArgs = {
  masterContractId: Scalars['Int']['input'];
};


export type OfferBundleTotalProratedHostingArgs = {
  masterContractId: Scalars['Int']['input'];
};

export type OfferBundleAggregation = {
  __typename?: 'OfferBundleAggregation';
  estimatedMonthlyProfit?: Maybe<OfferPrice>;
  estimatedMonthlyRevenue: OfferPrice;
  hashRate24Hr?: Maybe<Scalars['Float']['output']>;
  hashRateIdeal?: Maybe<Scalars['Float']['output']>;
  powerManufacturer?: Maybe<Scalars['Float']['output']>;
  powerUsage24Hr?: Maybe<Scalars['Float']['output']>;
  price: OfferPrice;
};


export type OfferBundleAggregationHashRate24HrArgs = {
  unit?: HashRateUnit;
};


export type OfferBundleAggregationHashRateIdealArgs = {
  unit?: HashRateUnit;
};


export type OfferBundleAggregationPowerManufacturerArgs = {
  unit?: PowerUnit;
};


export type OfferBundleAggregationPowerUsage24HrArgs = {
  unit?: PowerUnit;
};

export type OfferBundleDealScoreAggregation = {
  __typename?: 'OfferBundleDealScoreAggregation';
  breakEvenScore: Scalars['Float']['output'];
  capitalEfficiencyScore: Scalars['Float']['output'];
  dealScore: Scalars['Float']['output'];
  dollarPerThScore: Scalars['Float']['output'];
  efficiencyScore: Scalars['Float']['output'];
  profitScore: Scalars['Float']['output'];
  thScore: Scalars['Float']['output'];
};

export type OfferBundleFilter = {
  active?: InputMaybe<FilterParamBool>;
  allTogether?: InputMaybe<FilterParamBool>;
  createdBy?: InputMaybe<FilterParamInt>;
  description?: InputMaybe<FilterParamString>;
  dollarPerTh?: InputMaybe<FilterParamDouble>;
  hostingSiteId?: InputMaybe<FilterParamInt>;
  hostingSiteName?: InputMaybe<FilterParamString>;
  id?: InputMaybe<FilterParamInt>;
  itemModelDescription?: InputMaybe<FilterParamString>;
  itemModelId?: InputMaybe<FilterParamInt>;
  itemModelManufacturer?: InputMaybe<FilterParamString>;
  itemModelModel?: InputMaybe<FilterParamString>;
  itemModelName?: InputMaybe<FilterParamString>;
  priceSat?: InputMaybe<FilterParamInt>;
  priceUsd?: InputMaybe<FilterParamDecimal>;
  privateOffer?: InputMaybe<FilterParamBool>;
  satPerTh?: InputMaybe<FilterParamInt>;
  totalHashRate24HHr?: InputMaybe<FilterParamDouble>;
  totalHashRateIdeal?: InputMaybe<FilterParamFloat>;
  totalPower24Hr?: InputMaybe<FilterParamDouble>;
  totalPowerManufacturer?: InputMaybe<FilterParamFloat>;
};

export type OfferBundleRigPriceInput = {
  price: Price;
  rigId: Scalars['Int']['input'];
};

export enum OfferBundleSortField {
  Active = 'ACTIVE',
  CreatedAt = 'CREATED_AT',
  CreatedBy = 'CREATED_BY',
  DealScore = 'DEAL_SCORE',
  Description = 'DESCRIPTION',
  DollarPerTh = 'DOLLAR_PER_TH',
  EstimatedProfit = 'ESTIMATED_PROFIT',
  EstimatedRevenue = 'ESTIMATED_REVENUE',
  HostingSiteName = 'HOSTING_SITE_NAME',
  Id = 'ID',
  ItemMasterDescription = 'ITEM_MASTER_DESCRIPTION',
  ItemMasterId = 'ITEM_MASTER_ID',
  ItemMasterManufacturer = 'ITEM_MASTER_MANUFACTURER',
  ItemMasterModel = 'ITEM_MASTER_MODEL',
  ItemMasterName = 'ITEM_MASTER_NAME',
  PriceSat = 'PRICE_SAT',
  PriceUsd = 'PRICE_USD',
  SatPerTh = 'SAT_PER_TH',
  TotalHashRate_2_4HHr = 'TOTAL_HASH_RATE_2_4H_HR',
  TotalHashRateIdeal = 'TOTAL_HASH_RATE_IDEAL',
  TotalPower_24Hr = 'TOTAL_POWER_24_HR',
  TotalPowerManufacturer = 'TOTAL_POWER_MANUFACTURER',
  UpdatedAt = 'UPDATED_AT'
}

export type OfferBundleSorting = {
  field: OfferBundleSortField;
  order: Order;
};

export type OfferBundleSummaryOutput = {
  __typename?: 'OfferBundleSummaryOutput';
  results: Array<OfferBundle>;
  total: Scalars['Int']['output'];
};

export type OfferMasterContractPair = {
  masterContractId: Scalars['Int']['input'];
  offerId: Scalars['Int']['input'];
};

export type OfferPrice = {
  __typename?: 'OfferPrice';
  nativeCurrency: Scalars['String']['output'];
  priceBtc: Scalars['Decimal']['output'];
  priceUsd: Scalars['Decimal']['output'];
  timestamp: Scalars['String']['output'];
};


export type OfferPricePriceBtcArgs = {
  unit?: Btcdenomination;
};

export enum OnfidoWorkflowStatus {
  Abandoned = 'ABANDONED',
  Approved = 'APPROVED',
  AwaitingInput = 'AWAITING_INPUT',
  Declined = 'DECLINED',
  Error = 'ERROR',
  Processing = 'PROCESSING',
  Review = 'REVIEW'
}

export enum Order {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Pagination = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};

export enum PaymentMethod {
  Btc = 'BTC',
  ChargebeeCreditCard = 'CHARGEBEE_CREDIT_CARD',
  Fiat = 'FIAT',
  Lightning = 'LIGHTNING',
  PaynoteAch = 'PAYNOTE_ACH'
}

export enum PaymentMode {
  DailyInterval = 'DAILY_INTERVAL',
  MonthlyInterval = 'MONTHLY_INTERVAL',
  Threshold = 'THRESHOLD',
  WeeklyInterval = 'WEEKLY_INTERVAL'
}

export type PaynoteItem = {
  __typename?: 'PaynoteItem';
  amount: Scalars['Decimal']['output'];
  description: Scalars['String']['output'];
};

export type PctUsdPair = {
  __typename?: 'PctUsdPair';
  percentage: Scalars['Decimal']['output'];
  usd: Scalars['Decimal']['output'];
};

export type Pickaxe = {
  __typename?: 'Pickaxe';
  createdOn: Scalars['NaiveDateTime']['output'];
  hostingSiteId?: Maybe<Scalars['Int']['output']>;
  hostname: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  ip: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  updatedOn?: Maybe<Scalars['NaiveDateTime']['output']>;
  version: Scalars['String']['output'];
};

/** MiningSummary - contains data related to MiningSummary for a user. */
export type PoolMiningSummary = {
  __typename?: 'PoolMiningSummary';
  activeMiners: Scalars['Int']['output'];
  /**
   * AllTimeRevenue is the total revenue earned by the user across all subaccounts.
   * It differs from all time payouts/rewards, once this includes revenue that was not paid yet.
   */
  allTimeRevenue: Scalars['Decimal']['output'];
  /** Balance is the current balance of the user in BTC. A.k.a Pending Balance. */
  balance: Scalars['Decimal']['output'];
  efficiency5M?: Maybe<Scalars['Float']['output']>;
  /** HashPrice is a Luxor concept that represents the revenue per PH/s per day. */
  hashprice: Scalars['Decimal']['output'];
  hashrate5M?: Maybe<Scalars['Float']['output']>;
  hashrate24H?: Maybe<Scalars['Float']['output']>;
  luxorSubaccounts: Array<LuxorSubaccount>;
  revenue24H: Scalars['Decimal']['output'];
  uptime24H?: Maybe<Scalars['Float']['output']>;
  userId: Scalars['Int']['output'];
};


/** MiningSummary - contains data related to MiningSummary for a user. */
export type PoolMiningSummaryAllTimeRevenueArgs = {
  unit?: Btcdenomination;
};


/** MiningSummary - contains data related to MiningSummary for a user. */
export type PoolMiningSummaryBalanceArgs = {
  unit?: Btcdenomination;
};


/** MiningSummary - contains data related to MiningSummary for a user. */
export type PoolMiningSummaryHashpriceArgs = {
  unit?: Btcdenomination;
};


/** MiningSummary - contains data related to MiningSummary for a user. */
export type PoolMiningSummaryHashrate5MArgs = {
  unit?: HashRateUnit;
};


/** MiningSummary - contains data related to MiningSummary for a user. */
export type PoolMiningSummaryHashrate24HArgs = {
  unit?: HashRateUnit;
};


/** MiningSummary - contains data related to MiningSummary for a user. */
export type PoolMiningSummaryRevenue24HArgs = {
  unit?: Btcdenomination;
};

export type PoolPaymentConfig = {
  __typename?: 'PoolPaymentConfig';
  coin?: Maybe<CoinType>;
  intervalHours?: Maybe<Scalars['Int']['output']>;
  isFrozen?: Maybe<Scalars['Boolean']['output']>;
  mode?: Maybe<PaymentMode>;
  remainingFreezingTime?: Maybe<Scalars['Float']['output']>;
  thresholdBtc?: Maybe<Scalars['Float']['output']>;
  weeklyIntervalPaymentFrequency?: Maybe<WeeklyIntervalPaymentFrequency>;
};

export type PoolPaymentConfigInput = {
  coin?: InputMaybe<CoinType>;
  intervalHours?: InputMaybe<Scalars['Int']['input']>;
  isFrozen?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<PaymentMode>;
  remainingFreezingTime?: InputMaybe<Scalars['Float']['input']>;
  thresholdBtc?: InputMaybe<Scalars['Float']['input']>;
  weeklyIntervalPaymentFrequency?: InputMaybe<WeeklyIntervalPaymentFrequency>;
};

export type PortalSession = {
  __typename?: 'PortalSession';
  accessUrl: Scalars['String']['output'];
  createdAt: Scalars['Int']['output'];
  customerId: Scalars['String']['output'];
  expiresAt?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  linkedCustomers?: Maybe<Array<LinkedCustomer>>;
  object: Scalars['String']['output'];
  redirectUrl?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type PortalSessionResponse = {
  __typename?: 'PortalSessionResponse';
  portalSession: PortalSession;
};

export enum PowerUnit {
  Kw = 'KW',
  W = 'W'
}

export type Price = {
  btc?: InputMaybe<Btcprice>;
  usd?: InputMaybe<Scalars['Decimal']['input']>;
};

export type PriceObject = {
  __typename?: 'PriceObject';
  btc: Scalars['Decimal']['output'];
  exchangeRate: Scalars['Decimal']['output'];
  satoshis: Scalars['Int']['output'];
  usd: Scalars['Decimal']['output'];
};


export type PriceObjectBtcArgs = {
  unit?: Btcdenomination;
};

export type PricePerTh = {
  __typename?: 'PricePerTh';
  btcPerTh: Scalars['Decimal']['output'];
  dollarPerTh: Scalars['Float']['output'];
};


export type PricePerThBtcPerThArgs = {
  unit?: Btcdenomination;
};

export type PromotionCode = {
  __typename?: 'PromotionCode';
  active: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  label?: Maybe<Scalars['String']['output']>;
  salesforceId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['NaiveDateTime']['output'];
};

export enum PurchaseTransactionFailureReason {
  IncompletePayment = 'IncompletePayment',
  InvoiceCancelled = 'InvoiceCancelled',
  InvoiceExpired = 'InvoiceExpired'
}

export enum PurchaseTransactionStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  PaymentInProgress = 'PAYMENT_IN_PROGRESS',
  PendingPayment = 'PENDING_PAYMENT'
}

export type QueryRoot = {
  __typename?: 'QueryRoot';
  bitcoinStats: BitcoinStats;
  bwsSettings: BwsSettings;
  chargebeeCcStats: ChargebeeCreditCardStatus;
  exchangeRate: ExchangeRate;
  fiatPaynoteStats: FiatPaynoteStatus;
  historicalMetrics: Array<HistoricalMetric>;
  historicalMetricsPool: Array<HistoricalMetricPool>;
  listAgreements: Array<Agreement>;
  listBids: Array<Bid>;
  listBidsWithTotal: BidOutput;
  /**
   * Function takes as input a country and state string. Country and state should come from list_countries and list_states_by_country functions.
   * Returns a list of cities corresponding to said country and state.
   */
  listCitiesByStateAndCountry: Array<Scalars['String']['output']>;
  listContracts: ContractOutput;
  /**
   * Function returns a list of strings representing each valid country.
   * See https://github.com/dr5hn/countries-states-cities-database/blob/master/json/countries%2Bstates%2Bcities.json
   */
  listCountries: Array<Scalars['String']['output']>;
  listHostingSites: Array<HostingSite>;
  /**
   * List all the items available in the marketplace.
   * The items can be filtered by the presence of offers or assets.
   * If the user is authenticated, the items can be filtered by the user's assets.
   * Params:
   * with_offer: List only models with offers(preferred over with_asset)
   * with_asset: List only models with assets
   */
  listItemModel: Array<ItemMaster>;
  listLedgerDeposit: Array<LedgerDeposit>;
  /** List all luxor subaccounts for this user */
  listLuxorSubaccounts: Array<LuxorSubaccount>;
  listOfferBundle: OfferBundle;
  listOffersBundles: Array<OfferBundle>;
  /**
   * List all the offers bundles available in the marketplace.
   * This API can be used to list the total and the result.
   * The total will respect the filter definition.
   */
  listOffersBundlesWithTotal: OfferBundleSummaryOutput;
  listOrder: SalesOrder;
  listOrders: Array<SalesOrder>;
  /**
   * List all the orders for this user.
   * This API can be used to list the total and the result.
   * The total will respect the filter definition.
   */
  listOrdersWithTotal: SalesOrderOutput;
  listRentContracts: RentContractOutput;
  /**
   * List all the rent offers bundles available in the marketplace.
   * This API can be used to list the total and the result.
   * The total will respect the filter definition.
   */
  listRentOffers: RentOfferBundleOutput;
  listSellerRentContracts: SellerRentContractOutput;
  /**
   * Function takes as input a string representing a country name. Country name should come from
   * list_countries function. Returns a list of states corresponding to the country.
   */
  listStatesByCountry: Array<Scalars['String']['output']>;
  /**
   * List subaccount hashrate
   *
   * # Arguments
   * - `subaccount_id_list`: A list of subaccount ID to get data for.
   * If empty, will return data for all subaccounts associated with the user.
   * - `start_date`: The start date for the hashrate data (YYYY-MM-DD).
   * - `end_date`: The end date for the hashrate data (YYYY-MM-DD).
   * - `tick_size`: The time granularity (HOURLY or DAILY).
   *
   * # Returns
   * - `WorkerHashrateMap`: A map of worker names to their hashrate/efficiency info.
   */
  listSubaccountsHashrate: SubaccountsHashrateOutput;
  /**
   * List all the user KYC status
   * There is no need for totalization as there is only few KYC per user
   */
  listUserKyc: Array<UserOnfido>;
  /**
   * List all workers for this user
   *
   * # Arguments
   * - subaccount_ids: Vec<i64>; An optional list of subaccount IDs to get data for.
   * If the List is empty will return data for all subaccounts associated with the given user
   * # Returns
   * - WorkersList
   * -- active workers for the selected subaccounts
   * -- inactive workers for the selected subaccounts
   * -- Workers vector
   */
  listWorkers: WorkersList;
  /**
   * List workers hashrate
   *
   * # Arguments
   * - `subaccount_id`: The subaccount ID to get data for.
   * - `start_date`: The start date for the hashrate data (YYYY-MM-DD).
   * - `end_date`: The end date for the hashrate data (YYYY-MM-DD).
   * - `tick_size`: The time granularity (HOURLY or DAILY).
   * - `workers_names`: A list of worker names to query.
   *
   * # Returns
   * - `WorkerHashrateMap`: A map of worker names to their hashrate/efficiency info.
   */
  listWorkersHashrate: WorkerHashrateMapOutput;
  masterContracts: Array<MasterContract>;
  /**
   * Gets mining summary data per subaccount
   * # Arguments
   * - subaccount_ids: Vec<i64>; An optional list of subaccount IDs to get mining summary data for.
   * If the List is empty will return data for all subaccounts associated with the given user
   * # Returns
   * mining summary data for the selected subaccounts
   *
   */
  miningSummary?: Maybe<PoolMiningSummary>;
  /**
   * Gets revenue data
   *
   * # Arguments
   * - subaccount_ids: Vec<i64>; An optional list of subaccount IDs to get revenue data for.
   * If the List is empty will return data for all subaccounts associated with the given user
   * # Returns
   * Revenue
   * - pending rewards for the selected subaccounts
   * - revenue for the selected subaccounts and selected date range
   * - all time rewards for the selected subaccounts
   * - transaction summary data for the selected subaccounts and selected date range
   *
   */
  revenue?: Maybe<Revenue>;
  rigs: Array<Rig>;
  /**
   * List all rigs for this user.
   * This API can be used to list the total and the result.
   * The total will respect the filter definition.
   */
  rigsWithTotal: RigOutput;
  tradeSpreadHistoryByModel: Array<TradeSpread>;
  tradeStatsByModel: TradeStats;
  userAccount: UserAccount;
  /**
   * Get the user lessons
   *
   * # Arguments
   * - filter: UserLessonFilter; the filter does not affect the totals.
   * # Returns
   * UserLessons
   * - all user lessons: An array with all lessons ordered by id asc
   * - last user lesson: The latest updated lesson
   * - total lessons: The total number of lessons (via db query)
   * - total in progress: The total number of lessons in progress (via db query)
   * - total completed: The total number of lessons completed (via db query)
   *
   */
  userLessons: UserLessons;
  userSettings: UserSettings;
  /**
   * Get the user stats
   *
   * # Returns
   * UserStat
   */
  userStats: UserStats;
  userValidator: Array<UserValidator>;
  /**
   * Tales as input a promo code name and returns a PromotionCode if there exists
   * a PromotionCode with that name and that code is Active
   */
  validatePromoCode: PromotionCode;
  version: Scalars['String']['output'];
  wallet?: Maybe<Wallet>;
};


export type QueryRootHistoricalMetricsArgs = {
  begin: Scalars['String']['input'];
  end: Scalars['String']['input'];
  rigId: Scalars['Int']['input'];
};


export type QueryRootHistoricalMetricsPoolArgs = {
  begin: Scalars['String']['input'];
  end: Scalars['String']['input'];
  rigId: Scalars['Int']['input'];
};


export type QueryRootListBidsArgs = {
  filter?: BidFilter;
  pagination?: Pagination;
  sorting?: BidSorting;
};


export type QueryRootListBidsWithTotalArgs = {
  filter?: BidFilter;
  pagination?: Pagination;
  sorting?: BidSorting;
};


export type QueryRootListCitiesByStateAndCountryArgs = {
  country: Scalars['String']['input'];
  state: Scalars['String']['input'];
};


export type QueryRootListContractsArgs = {
  filter?: ContractsFilter;
  pagination?: Pagination;
  sorting?: ContractsSorting;
};


export type QueryRootListItemModelArgs = {
  withAsset?: InputMaybe<Scalars['Boolean']['input']>;
  withBid?: InputMaybe<Scalars['Boolean']['input']>;
  withOffer?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRootListOfferBundleArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRootListOffersBundlesArgs = {
  filter?: OfferBundleFilter;
  pagination?: Pagination;
  sorting?: OfferBundleSorting;
};


export type QueryRootListOffersBundlesWithTotalArgs = {
  filter?: OfferBundleFilter;
  pagination?: Pagination;
  sorting?: OfferBundleSorting;
};


export type QueryRootListOrderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRootListOrdersArgs = {
  filter?: SalesOrderFilter;
  pagination?: Pagination;
  sorting?: SalesOrderSorting;
};


export type QueryRootListOrdersWithTotalArgs = {
  filter?: SalesOrderFilter;
  pagination?: Pagination;
  sorting?: SalesOrderSorting;
};


export type QueryRootListRentContractsArgs = {
  filter?: RentContractsFilter;
  pagination?: Pagination;
  sorting?: RentContractSorting;
};


export type QueryRootListRentOffersArgs = {
  filter?: RentOfferBundleFilter;
  forecast?: InputMaybe<RentOfferBundleForecastInput>;
  pagination?: Pagination;
  sorting?: RentOfferBundleSorting;
};


export type QueryRootListSellerRentContractsArgs = {
  filter?: RentContractsFilter;
  pagination?: Pagination;
  sorting?: RentContractSorting;
};


export type QueryRootListStatesByCountryArgs = {
  country: Scalars['String']['input'];
};


export type QueryRootListSubaccountsHashrateArgs = {
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
  subaccountIdList: Array<Scalars['Int']['input']>;
  tickSize: InputTickSize;
};


export type QueryRootListWorkersArgs = {
  subaccountIds: Array<Scalars['Int']['input']>;
};


export type QueryRootListWorkersHashrateArgs = {
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
  subaccountId: Scalars['Int']['input'];
  tickSize: InputTickSize;
  workersNames: Array<Scalars['String']['input']>;
};


export type QueryRootMasterContractsArgs = {
  filter?: MasterContractFilter;
  pagination?: Pagination;
  sorting?: MasterContractSorting;
};


export type QueryRootMiningSummaryArgs = {
  subaccountIds: Array<Scalars['Int']['input']>;
};


export type QueryRootRevenueArgs = {
  subaccountIds: Array<Scalars['Int']['input']>;
};


export type QueryRootRigsArgs = {
  filter?: RigFilter;
  pagination?: Pagination;
  sorting?: RigSorting;
};


export type QueryRootRigsWithTotalArgs = {
  filter?: RigFilter;
  pagination?: Pagination;
  sorting?: RigSorting;
};


export type QueryRootTradeSpreadHistoryByModelArgs = {
  begin: Scalars['String']['input'];
  end: Scalars['String']['input'];
  itemModelId: Scalars['Int']['input'];
};


export type QueryRootTradeStatsByModelArgs = {
  hashrateInRange?: Scalars['Boolean']['input'];
  itemModelId: Scalars['Int']['input'];
  rangeLastNDays?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRootUserLessonsArgs = {
  filter?: UserLessonFilter;
};


export type QueryRootUserValidatorArgs = {
  pagination?: Pagination;
};


export type QueryRootValidatePromoCodeArgs = {
  promoCode: Scalars['String']['input'];
};

export type RealtimeSla = {
  __typename?: 'RealtimeSla';
  /**
   * Average hashrate
   * The average hashrate is calculated from the luxor hourly metrics.
   */
  avgHashrate?: Maybe<Scalars['Float']['output']>;
  /** Total number of hours in the month that the contract was active. */
  effectiveHoursInMonth: Scalars['Int']['output'];
  /**
   * Hashrate
   * It is the miner manufacturer specification.
   */
  hashrate?: Maybe<Scalars['Float']['output']>;
  /** Total number of hours in the month */
  hoursInMonth: Scalars['Int']['output'];
  month: Scalars['String']['output'];
  monthEnd: Scalars['NaiveDateTime']['output'];
  monthStart: Scalars['NaiveDateTime']['output'];
  /** Monthly usage percentage based on used hours and effective hours in month */
  monthUsage: PctUsdPair;
  /**
   * SLA adjustment percentage for the month
   *
   * The master contract specifies the SLA percentage, usually 90%.
   * The SLA adjustment percentage is calculated based on the uptime, and it is given by:
   *
   * If uptime < MC SLA:
   * SLA adjustment percentage = (MC SLA - uptime)
   * If uptime > 100:
   * SLA adjustment percentage = (uptime - 100)
   * else:
   * 0
   *
   * Real example:
   * SLA: 90%, Uptime: 85% -> SLA adjustment percentage = 5%
   * SLA: 90%, Uptime: 95% -> SLA adjustment percentage = 0
   * SLA: 90%, Uptime: 103% -> SLA adjustment percentage = -3%
   *
   * Positive values: BWS will pay the customer for the SLA adjustment.
   * Negative values: BWS will charge the customer for the SLA adjustment.
   *
   */
  monthlySlaAdjustment: PctUsdPair;
  /**
   * UPTIME:
   * Uptime is calculated as the ratio of the average hashrate in the month to the total hashrate of the contract.
   * The avg hashrate is read from the luxor hourly metrics.
   */
  uptime: Scalars['Decimal']['output'];
  /** Total number of hours used in the month considering the date where the contract was created and terminated. */
  usedHours: Scalars['Int']['output'];
};


export type RealtimeSlaAvgHashrateArgs = {
  unit?: HashRateUnit;
};


export type RealtimeSlaHashrateArgs = {
  unit?: HashRateUnit;
};

export type RentContractExtend = {
  __typename?: 'RentContractExtend';
  createdAt: Scalars['NaiveDateTime']['output'];
  /** Deficit TH-hour */
  deficitThHour: Scalars['Decimal']['output'];
  /** Delivered TH-hour */
  deliveredThHour: Scalars['Decimal']['output'];
  /** Extension in hours */
  extensionHours: Scalars['Decimal']['output'];
  extensionSecs: Scalars['Int']['output'];
  /** Hashrate delivery percentual */
  hashrateDeliveryPercentage: Scalars['Decimal']['output'];
  id: Scalars['Int']['output'];
  rentContractId: Scalars['Int']['output'];
};

export type RentContractHourlyMetricDetail = {
  __typename?: 'RentContractHourlyMetricDetail';
  difficulty: Scalars['Int']['output'];
  difficultyAtStart: Scalars['Int']['output'];
  /**
   * Difficulty change
   * The percentage change in mining difficulty since the contract started.
   */
  difficultyChange: Scalars['Decimal']['output'];
  /**
   * Exchange Rate at cthe timestamp
   * This is the exchange rate (USD to BTC) at the time the contract was activated.
   */
  exchangeRate: Scalars['Decimal']['output'];
  /**
   * Exchange Rate at start
   * This is the exchange rate (USD to BTC) at the time the contract was activated.
   */
  exchangeRateAtStart: Scalars['Decimal']['output'];
  /**
   * Exchange rate change
   * The percentage change in BTC to USD exchange rate since the contract started.
   */
  exchangeRateChange: Scalars['Decimal']['output'];
  /**
   * Yield Hourly
   * The yield over the last hour, calculated as (Revenue - Hourly Cost)
   * It uses the exchange rate at date to calculate the USD value.
   */
  gainLossHourly: OfferPrice;
  /**
   * GainLoss percentage
   * The percentage gain or loss over the last 24 hours, calculated as ((Revenue  - Hourly Cost) / Hourly Cost) * 100
   */
  gainLossPct: Scalars['Decimal']['output'];
  /**
   * Hashprice for the entry
   * The hashprice (in satoshis per TH per day) at the time of the HourlyMetric record.
   * It uses the exchange rate at the time of the HourlyMetric record to calculate the USD value of it.
   */
  hashprice: HashPrice;
  /**
   * Hashprice at start
   * The hashprice (in satoshis per TH per day) at the time the contract was activated.
   * It uses the exchange rate at the start of the contract. to calculate the USD value of it.
   */
  hashpriceAtStart: HashPrice;
  /**
   * Hashprice change
   * The percentage change in hashprice since the contract started.
   *
   */
  hashpriceChange: Scalars['Decimal']['output'];
  /**
   * Hashrate Hourly
   * The average hashrate over the last hour.
   */
  hashrate: Scalars['Decimal']['output'];
  /**
   * Hourly Cost
   * The daily cost of the contract in BTC or USD.
   * It uses the exchange rate at the start of the contract.
   */
  hourlyCost: OfferPrice;
  id: Scalars['Int']['output'];
  /**
   * Mining Reward
   * Aka "Mining Revenue"
   * The estimated revenue generated over the last hour.
   * It uses the exchange rate at date to calculate the USD value.
   */
  miningReward: OfferPrice;
  recordTimestamp: Scalars['NaiveDateTime']['output'];
  rentContractId: Scalars['Int']['output'];
  /**
   * Uptime %
   * The percentage of time the hashrate was active during the day.
   * It is calculated as (Average Hashrate / Total Hashrate) * 100
   *
   */
  uptime: Scalars['Decimal']['output'];
};


export type RentContractHourlyMetricDetailHashrateArgs = {
  unit?: HashRateUnit;
};

export type RentContractMetricDetail = {
  __typename?: 'RentContractMetricDetail';
  /**
   * Daily Cost
   * The daily cost of the contract in BTC or USD.
   * It uses the exchange rate at the start of the contract.
   */
  dailyCost: OfferPrice;
  difficulty: Scalars['Int']['output'];
  difficultyAtStart: Scalars['Int']['output'];
  /**
   * Difficulty change
   * The percentage change in mining difficulty since the contract started.
   */
  difficultyChange: Scalars['Decimal']['output'];
  /**
   * Exchange Rate at cthe timestamp
   * This is the exchange rate (USD to BTC) at the time the contract was activated.
   */
  exchangeRate: Scalars['Decimal']['output'];
  /**
   * Exchange Rate at start
   * This is the exchange rate (USD to BTC) at the time the contract was activated.
   */
  exchangeRateAtStart: Scalars['Decimal']['output'];
  /**
   * Exchange rate change
   * The percentage change in BTC to USD exchange rate since the contract started.
   */
  exchangeRateChange: Scalars['Decimal']['output'];
  /**
   * Yield 24h
   * The yield over the last 24 hours, calculated as (Revenue 24h - Daily Cost)
   * It uses the exchange rate at date to calculate the USD value.
   */
  gainLoss24H: OfferPrice;
  /**
   * GainLoss percentage
   * The percentage gain or loss over the last 24 hours, calculated as ((Revenue 24h - Daily Cost) / Daily Cost) * 100
   */
  gainLossPct: Scalars['Decimal']['output'];
  /**
   * Hashprice for the entry
   * The hashprice (in satoshis per TH per day) at the time of the metric record.
   * It uses the exchange rate at the time of the metric record to calculate the USD value of it.
   */
  hashprice: HashPrice;
  /**
   * Hashprice at start
   * The hashprice (in satoshis per TH per day) at the time the contract was activated.
   * It uses the exchange rate at the start of the contract. to calculate the USD value of it.
   */
  hashpriceAtStart: HashPrice;
  /**
   * Hashprice change
   * The percentage change in hashprice since the contract started.
   *
   */
  hashpriceChange: Scalars['Decimal']['output'];
  /**
   * Hashrate Daily Average
   * The average hashrate during the day.
   */
  hashrateAvg: Scalars['Decimal']['output'];
  /**
   * Hashrate Daily Sum
   * The total hashrate during the day
   */
  hashrateSum: Scalars['Decimal']['output'];
  id: Scalars['Int']['output'];
  metricsHourly: Array<RentContractHourlyMetricDetail>;
  /**
   * Mining Reward
   * Aka "Revenue Daily" or "Mining Revenue"
   * The estimated revenue generated over the day.
   * It uses the exchange rate at date to calculate the USD value.
   */
  miningReward: OfferPrice;
  recordTimestamp: Scalars['NaiveDateTime']['output'];
  /**
   * Uptime %
   * The percentage of time the hashrate was active during the day.
   * It is calculated as (Average Hashrate / Total Hashrate) * 100
   *
   */
  uptime: Scalars['Decimal']['output'];
};


export type RentContractMetricDetailHashrateAvgArgs = {
  unit?: HashRateUnit;
};


export type RentContractMetricDetailHashrateSumArgs = {
  unit?: HashRateUnit;
};

export type RentContractOutput = {
  __typename?: 'RentContractOutput';
  /** Results of the query. */
  results: Array<RentContractSummary>;
  /** Total count of results len. It follows the filter parmeter. */
  total: Scalars['Int']['output'];
};

export enum RentContractSortField {
  /**
   * Activated at
   * The sort by activated at will use contract activated at
   */
  ActivatedAt = 'ACTIVATED_AT',
  /**
   * Contract Status
   * The sort by contract status will use contract status alphabetically
   */
  ContractStatus = 'CONTRACT_STATUS',
  /**
   * Created at
   * The sort by created at will use contract created at
   */
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  /**
   * Period Days
   * The sort by period will use contract total period
   */
  PeriodDays = 'PERIOD_DAYS'
}

export type RentContractSorting = {
  field: RentContractSortField;
  order: Order;
};

export type RentContractSummary = {
  __typename?: 'RentContractSummary';
  /**
   * Activated At
   * The timestamp when the contract was activated.
   */
  activatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  /**
   * Average Efficiency in Watts per TH/s
   * The average efficiency is calculated as the total power divided by the total hashrate.
   * It is techically the same as Joules per TH.
   */
  avgEfficiency: Scalars['Decimal']['output'];
  /**
   * Current status of the contract
   * - Draft: The contract is created but not yet activated.
   * - Actived: The contract is active and mining is ongoing.
   * - Expired: The contract has expired, and mining has stopped.
   * - Paused: The contract is temporarily paused. Not used currently.
   * - Deactivated: The contract is deacivated. Not used currently.
   */
  contractStatus: ContractStatusType;
  createdAt: Scalars['NaiveDateTime']['output'];
  /**
   * Current Uptime (%)
   *
   * Returns the contract uptime as a percentage (0–100).
   *
   * **Definition**
   * Uptime represents how much of the contracted/guaranteed hashrate has been delivered so far,
   * based on hourly contract metrics.
   *
   * **How it is calculated**
   * - Load hourly hashrate metrics for this contract.
   * - For each hour, compute `hour_uptime = 100 * (delivered_hashrate / contracted_hashrate)`.
   * - Return the average of those hourly uptimes.
   */
  currentUptime: Scalars['Float']['output'];
  /**
   * Days Left
   *
   * If the contract is activated, it will return the number of days left until the contract expires.
   * If the contract is activated, but expired, it will return 0.
   * If the contract is not activated, it will return the total period days.
   */
  daysLeft: Scalars['Int']['output'];
  /**
   * Days Rented
   *
   * If the contract is activated, it will return the number of days since the contract was activated.
   * If the contract is not activated, it will return 0.
   *
   * Theoretically it could be extracted from period_days - days_left, but eventually we will extend
   * the number of days in the contract under certain conditions, so it's better to keep it separate.
   */
  daysRented: Scalars['Int']['output'];
  /**
   * Deactivated At
   * The timestamp when the contract was deactivated.
   */
  deactivatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  /** Difficulty at contract start */
  difficultyAtStart: Scalars['Int']['output'];
  /**
   * Estimated Cost to Mine 1 BTC
   *
   * This is an estimate of the cost to mine 1 BTC based on the hourly cost to mine and the estimated revenue.
   *
   * The formula used is:
   * cost_to_mine_1_btc = (1 BTC / hourly_revenue) * hourly_cost
   *
   * Where
   * - hourly_revenue = (total_hashrate in PH/s) * (hashprice in BTC/PH/s/day) / 24
   * - hourly_cost = (total_price_usd / period_days) / 24 / Total Power in kW
   */
  estCostToMine1Btc: Scalars['Decimal']['output'];
  estimatedExpirationDate: Scalars['NaiveDateTime']['output'];
  /**
   * Exchange Rate at contract activation
   *
   * This is the exchange rate (USD to BTC) at the time the contract was activated.
   */
  exchangeRateAtStart: Scalars['Decimal']['output'];
  /**
   * Extended End Date
   *
   * The estimated end date of the contract considering all extensions.
   */
  extendedEndDate: Scalars['NaiveDateTime']['output'];
  /**
   * Hashprice in Sat per kW per hour
   *
   * This is the price defined by the seller for the contract, selected by the buyer
   * at the time of contract creation.
   */
  hashpriceKwHrSat?: Maybe<Scalars['Int']['output']>;
  /**
   * Hashprice in USD per kW per hour
   *
   * This is the price defined by the seller for the contract, selected by the buyer
   * at the time of contract creation, rounded to 6 decimal places.
   */
  hashpriceKwHrUsd?: Maybe<Scalars['Decimal']['output']>;
  /**
   * Hashprice in Sat at contract start
   * This is the network hashprice at the time the contract was created.
   * Measured in Sat/TH/s/Day
   */
  hashpriceSatAtStart: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  /**
   * Metrics
   * The list of daily metrics for this rent contract.
   *
   * Each metric contains an array with the hourly metrics and the aggregated daily metrics.
   */
  metrics: Array<RentContractMetricDetail>;
  /**
   * Hourly Metrics
   * The list of hourly metrics for this rent contract.
   */
  metricsHourly: Array<RentContractHourlyMetricDetail>;
  /** The period in days for the contract duration */
  periodDays: Scalars['Int']['output'];
  /**
   * Predicted Extended End Date
   *
   * Returns the estimated contract end date after accounting for a *predicted* extension.
   *
   * **Behavior**
   * - If the contract already has extension entries, this returns the existing extended end date.
   * (i.e., we do not predict; we use the known extension duration.)
   * - If the contract has no extensions yet, this predicts how long the contract would be extended
   * based on hashrate delivery so far.
   *
   * **How the prediction works**
   * 1) Compute the average delivered hashrate so far from hourly metrics.
   * 2) Assume the same average delivery continues for the full contract duration.
   * 3) Forecast total delivered work over the full contract period (TH-hours).
   * 4) Compare forecast delivered work vs target promised work:
   * - `target_work = contracted_hashrate * total_contract_hours`
   * - `forecast_delivered_work = avg_delivered_hashrate * total_contract_hours`
   * 5) Convert any work deficit into additional time required at the contracted hashrate.
   * 6) Round the extension time up to the configured granularity and cap it at the configured max.
   */
  predictedExtendedEndDate: Scalars['NaiveDateTime']['output'];
  /**
   * Rent Extends
   *
   * The list of rent contract extensions associated with this rent contract.
   */
  rentExtends: Array<RentContractExtend>;
  rentOfferBundleId: Scalars['Int']['output'];
  rentOfferPricePeriodId: Scalars['Int']['output'];
  /**
   * Rigs
   * The list of rigs associated with this rent contract.
   */
  rigs: Array<Rig>;
  /** The total number of miners (rigs) used in this contract. */
  rigsCount: Scalars['Int']['output'];
  /**
   * Total Gain/Loss
   * The total gain or loss in percentage for this contract.
   * The result can be converted to usd using the current exchange rate.
   *
   * The total gain/loss is given by the price paid for each day of the contract
   * versus each day's mined amount.
   * A positive value means a gain, a negative value means a loss.
   * A zero value means break-even.
   *
   * The total gain/loss is calculated considering the accumulated profit against
   * the acumumlated cost up to the current day.
   *
   * The value is given as a percentage with 4 decimal places.
   */
  totalGainLoss: Scalars['Decimal']['output'];
  /**
   * Total Hashrate in specified unit
   * The total hashrate is the sum of the hashrate of all rigs in the rent offer bundle assigned to the rent contract.
   */
  totalHashrate: Scalars['Decimal']['output'];
  /**
   * Total Mined
   * Same as total revenue.
   * The total amount mined in satoshis for this contract.
   * The result can be converted to usd using the current exchange rate.
   */
  totalMined: OfferPrice;
  /**
   * Total Power in specified unit (default kW)
   * The total power is the sum of the power of all rigs in the rent offer bundle assigned to the rent contract.
   */
  totalPower: Scalars['Decimal']['output'];
  /**
   * Total Price
   *
   * The total price paid for the contract.
   * This is represented as an OfferPrice object containing both the satoshi and usd values,
   * along with the timestamp and currency.
   */
  totalPrice: OfferPrice;
  /**
   * Total Price in Sat
   *
   * This is the total price paid for the contract in satoshis, using the exchange rate
   * at the time of contract creation.
   */
  totalPriceSat: Scalars['Int']['output'];
  /**
   * Total Price in USD
   *
   * This is the total price paid for the contract in USD, rounded to 2 decimal places.
   */
  totalPriceUsd: Scalars['Decimal']['output'];
  /**
   * Total ReturnOverInvestment
   * The total return over investment (ROI) percentage for this contract.
   * A positive value means a gain, a negative value means a loss.
   * A zero value means break-even.
   *
   * The ROI is calculated as (total_yield / total_price_sat) * 100
   * If total_price_sat is zero, it will return None.
   *
   * The ROI will increment over time, as the profit(yield) increases with the mined amount.
   *
   * The value is given as a percentage with 4 decimal places.
   */
  totalReturnOverInvestment?: Maybe<Scalars['Decimal']['output']>;
  /**
   * Total Yield
   * The total profit in satoshis for this contract.
   * The result can be converted to usd using the current exchange rate.
   *
   * The total yield can be interpreted as gain/loss in btc or usd.
   *
   * It is given by TotalRevenue - TotalAccumulatedCost
   */
  totalYield: OfferPrice;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
};


export type RentContractSummaryTotalHashrateArgs = {
  unit?: HashRateUnit;
};


export type RentContractSummaryTotalPowerArgs = {
  unit?: PowerUnit;
};

export type RentContractsFilter = {
  activatedAt?: InputMaybe<FilterParamNaiveDateTime>;
  contractStatus?: InputMaybe<FilterParamContractStatusType>;
  createdAt?: InputMaybe<FilterParamNaiveDateTime>;
  id?: InputMaybe<FilterParamInt>;
  periodDays?: InputMaybe<FilterParamInt>;
};

export type RentOffer = {
  __typename?: 'RentOffer';
  createdAt: Scalars['NaiveDateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  rig: Rig;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
};

export type RentOfferBundleFilter = {
  createdAt?: InputMaybe<FilterParamNaiveDateTime>;
  /**
   * Filter By Efficiency in W/TH
   * This is the average efficiency of all offers in the bundle.
   */
  efficiency?: InputMaybe<FilterParamDecimal>;
  /**
   * Estimated yield not considering the period
   * Complex field disabled for now
   * NOT IMPLEMENTED
   */
  estimatedYield?: InputMaybe<FilterParamDecimal>;
  /**
   * Estimated yield considering the period of rent
   * Complex field disabled for now
   * NOT IMPLEMENTED
   */
  estimatedYieldTotal?: InputMaybe<FilterParamDecimal>;
  /**
   * Filter By Hashrate in TH/s
   * This is the total hashrate of all offers in the bundle.
   */
  hashrate?: InputMaybe<FilterParamDecimal>;
  id?: InputMaybe<FilterParamInt>;
  /**
   * Filter By Max Period Days
   * When filtering by max period days, the filter uses the maximum period_days of all price_periods in the bundle.
   */
  maxPeriodDays?: InputMaybe<FilterParamInt>;
  /**
   * Filter By Min Period Days
   * When filtering by min period days, the filter uses the minimum period_days of all price_periods in the bundle.
   */
  minPeriodDays?: InputMaybe<FilterParamInt>;
  /**
   * Filter By Power in KW
   * This is the total power consumption of all offers in the bundle.
   */
  power?: InputMaybe<FilterParamDecimal>;
  /**
   * Filter by hourly price in sats
   * This filter uses the min and max price of the bundle offers.
   * It only implements Lt, Lte, Gt and Gte operators.
   * EQ, NEQ and INSIDE operators are not implementable logically.
   */
  priceSatHourly?: InputMaybe<FilterParamInt>;
  /**
   * Filter by total price in sats
   * This filter uses the min and max price of the bundle offers.
   * It only implements Lt, Lte, Gt and Gte operators.
   * EQ, NEQ and INSIDE operators are not implementable logically.
   * Remember:
   * - price_total = price_hourly * 24 * period_days * power
   */
  priceSatTotal?: InputMaybe<FilterParamInt>;
  /**
   * Filter by hourly price in USD
   * This filter uses the min and max price of the bundle offers.
   * It only implements Lt, Lte, Gt and Gte operators.
   * EQ, NEQ and INSIDE operators are not implementable logically.
   */
  priceUsdHourly?: InputMaybe<FilterParamDecimal>;
  /**
   * Filter by total price in USD
   * This filter uses the min and max price of the bundle offers.
   * It only implements Lt, Lte, Gt and Gte operators.
   * EQ, NEQ and INSIDE operators are not implementable logically.
   * Remember:
   * - price_total = price_hourly * 24 * period_days * power
   */
  priceUsdTotal?: InputMaybe<FilterParamDecimal>;
  /**
   * Return bundles with an estimated ROI in days:
   * The ROI_Days is calculated as how many days it will take to earn back
   * the cost of renting the rig, based on the estimated yield.
   * NOT IMPLEMENTED
   */
  roiDays?: InputMaybe<FilterParamDecimal>;
  updatedAt?: InputMaybe<FilterParamNaiveDateTime>;
};

export type RentOfferBundleForecast = {
  __typename?: 'RentOfferBundleForecast';
  difficultyIncrementYearlyPct: Scalars['Decimal']['output'];
  exchangePriceIncrementYearlyPct: Scalars['Decimal']['output'];
};

export type RentOfferBundleForecastInput = {
  /**
   * The expected yearly percentage increase in the Bitcoin network difficulty.
   * For example, a value of 40 means a 40% increase in the network difficulty over a year.
   * This value can be positive (indicating an expected increase) or negative (indicating an expected decrease) limited to -100.
   */
  difficultyIncrementYearlyPct: Scalars['Decimal']['input'];
  /**
   * The expected yearly percentage increase in the exchange price of Bitcoin (BTC) in USD.
   * For example, a value of 50 means a 50% increase in the exchange price over a year.
   * This value can be positive (indicating an expected increase) or negative (indicating an expected decrease) limited to -100.
   */
  exchangePriceIncrementYearlyPct: Scalars['Decimal']['input'];
};

export type RentOfferBundleOutput = {
  __typename?: 'RentOfferBundleOutput';
  /**
   * The forecast parameters applied to the query
   * If the caller doenst specify a forecast, the default values from settings are used
   * and returned here
   */
  appliedForecast: RentOfferBundleForecast;
  /** The list of rent offer bundles filtered, sorted and paginated */
  results: Array<RentOfferBundleSummaryForecasted>;
  /** The total count of results without pagination but with filters applied */
  totalCount: Scalars['Int']['output'];
};

export enum RentOfferBundleSortField {
  CreatedAt = 'CREATED_AT',
  /**
   * The avg efficiency of the bundle in W/TH
   * This is the average efficiency of all offers in the bundle.
   */
  Efficiency = 'EFFICIENCY',
  /**
   * The estimated yield not considering the period.
   * It is given by:
   * yield(hourly) = revenue(hourly) - rent_price(hourly)
   * NOT IMPLEMENTED
   */
  EstimatedYield = 'ESTIMATED_YIELD',
  /**
   * The estimated yield considering the period of rent
   * It is given by:
   * yield_total = yield(hourly) * 24 * period_days
   * NOT IMPLEMENTED
   */
  EstimatedYieldTotal = 'ESTIMATED_YIELD_TOTAL',
  /**
   * The total hashrate in the bundle in TH/s
   * Remember: the total hashrate is the sum of all the rig hashrates
   */
  Hashrate = 'HASHRATE',
  Id = 'ID',
  /**
   * The sort by period will use the min period of the
   * RentOfferPricePeriods associated when ASC and the
   * max period when DESC. Remember: an rent offer bundle
   * has multiple rent offer price periods.
   */
  PeriodDays = 'PERIOD_DAYS',
  /**
   * The total power consumption in the bundle in KW
   * Remember: the total power is the sum of all the rig power consumption
   */
  Power = 'POWER',
  /**
   * Price hourly (min)
   * Remember: an rent offer bundle has multiple rent offer price periods.
   * The min price is the lowest price among all the rent offer price periods.
   * It only implements Lt, Lte, Gt and Gte operators.
   * EQ, NEQ and INSIDE operators are not implementable logically.
   */
  PriceHourly = 'PRICE_HOURLY',
  /**
   * Price total (max)
   * Remember: an rent offer bundle has multiple rent offer price periods.
   * The max price is the highest price among all the rent offer price periods.
   * It only implements Lt, Lte, Gt and Gte operators.
   * EQ, NEQ and INSIDE operators are not implementable logically.
   */
  PriceTotal = 'PRICE_TOTAL',
  /**
   * Return over investment
   * Remember: the ROI is calculated as:
   * ROI = ((estimated_yield_total - rent_price) / rent_price) * 100
   * NOT IMPLEMENTED
   */
  ReturnOverInvestment = 'RETURN_OVER_INVESTMENT',
  UpdatedAt = 'UPDATED_AT'
}

export type RentOfferBundleSorting = {
  field: RentOfferBundleSortField;
  order: Order;
};

export type RentOfferBundleSummaryForecasted = {
  __typename?: 'RentOfferBundleSummaryForecasted';
  active: Scalars['Boolean']['output'];
  /**
   * Average Efficiency in Watts per TH/s
   * The average efficiency is calculated as the total power divided by the total hashrate.
   * It is techically the same as Joules per TH.
   */
  avgEfficiency: Scalars['Decimal']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /**
   * Is mine
   *
   * A boolean flag to inform if this miner belongs to the caller
   */
  isMine: Scalars['Boolean']['output'];
  /**
   * Max Price Hourly
   * The maximum price per hour for the rent offer bundle.
   */
  maxPriceHourly: OfferPrice;
  /**
   * Max Price Total
   * The maximum total price for the rent offer bundle.
   */
  maxPriceTotal: OfferPrice;
  /**
   * Min Price Hourly
   * The minimum price per hour for the rent offer bundle.
   */
  minPriceHourly: OfferPrice;
  /**
   * Min Price Total
   * The minimum total price for the rent offer bundle.
   */
  minPriceTotal: OfferPrice;
  pricesCount: Scalars['Int']['output'];
  /**
   * Rent Offer Price Periods
   * The list of rent offer price periods associated with this bundle.
   */
  rentOfferPricePeriods: Array<RentOfferPricePeriodObject>;
  /**
   * Rent Offers
   * The list of rent offers associated with this bundle.
   */
  rentOffers: Array<RentOffer>;
  rigsCount: Scalars['Int']['output'];
  /**
   * Total Hashrate in specified unit
   * The total hashrate is the sum of the hashrate of all rigs in the rent offer bundle.
   */
  totalHashrate: Scalars['Decimal']['output'];
  /**
   * Total Power in specified unit (default kW)
   * The total power is the sum of the power of all rigs in the rent offer bundle.
   */
  totalPower: Scalars['Decimal']['output'];
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
};


export type RentOfferBundleSummaryForecastedTotalHashrateArgs = {
  unit?: HashRateUnit;
};


export type RentOfferBundleSummaryForecastedTotalPowerArgs = {
  unit?: PowerUnit;
};

export type RentOfferPricePeriodObject = {
  __typename?: 'RentOfferPricePeriodObject';
  buyerCommissionPrice: OfferPrice;
  chargebeeCcStats: ChargebeeCreditCardStatus;
  chargebeeCreditCardProcessingFeePct: Scalars['Decimal']['output'];
  /**
   * Cost to mine 1 BTC
   * This field calculates the cost to mine 1 BTC based on the rent offer price and the estimated mined.
   */
  costToMine1Btc: Scalars['Decimal']['output'];
  /**
   * Estimated Mined
   * This field calculates the estimated mined based on the rig's hash rate, hashprice
   * and the period of rent offer.
   *
   * The formula to calculate estimated mined coins in btc using hashprice is:
   * EstimatedMined = TotalHashrateTH * HashpriceBtc * PeriodDays * 24
   * Where:
   * TotalHashrateTH = sum of all rigs hashrate in TH/s
   * HashpriceBtc = current hashprice in btc per TH/s
   * PeriodDays = number of days for the rent offer
   * 24 = number of hours in a day
   *
   * This field is affected by the forecase simulation parameters
   */
  estimatedMined: OfferPrice;
  /**
   * Estimated Yield/Profit
   * This field calculated the expected mined sats based on the period discounting
   * the amount to be paid for the rent contract.
   */
  estimatedYield: OfferPrice;
  /** Exchange Rate */
  exchangeRate: ExchangeRate;
  /** Forecasted Exchange Rate */
  forecastedExchangeRate: ExchangeRate;
  /**
   * Forecasted Hashprice
   * The forecasted hashprice is calculated based on the forecasted difficulty and exchange rate.
   */
  forecastedHashprice: HashPrice;
  /** Current Hashprice */
  hashprice: HashPrice;
  /**
   * Hashprice in Sats per Kwh per hour
   * This field is used to calculate the rent offer price in BTC.
   * It is defined by the miner owner when creating the rent offer.
   */
  hashpriceKwHrSat?: Maybe<Scalars['Int']['output']>;
  /**
   * Hashprice in USD per Kwh per hour
   * This field is used to calculate the rent offer price in USD.
   */
  hashpriceKwHrUsd?: Maybe<Scalars['Decimal']['output']>;
  hostingRentOfferPrice: OfferPrice;
  id: Scalars['Int']['output'];
  /**
   * Miners Count
   * The number of miners in the rent offer.
   */
  minersCount: Scalars['Int']['output'];
  netRentOfferPrice: OfferPrice;
  periodDays: Scalars['Int']['output'];
  /**
   * Priced in BTC
   * Helper flag to inform if the rent offer is priced in BTC.
   */
  pricedInBtc: Scalars['Boolean']['output'];
  /**
   * Priced in USD
   * Helper flag to inform if the rent offer is priced in USD.
   */
  pricedInUsd: Scalars['Boolean']['output'];
  /**
   * Rent Offer Price
   * The rent offer price is given by the period, hashprice and the rigs specs.
   * As the hashprice can be defined in usd or in btc, the offer price will also
   * be calculated in one or the other.
   *
   * The formula to calculate rent offer price can be defined as:
   * Price = AdjustedHashprice * TotalPower * PeriodDays * 24
   * Where:
   * AdjustedHashprice = user defined Hashprice in Kwh per USD or BTC
   * TotalPower = sum of all rigs power in Kwh
   * PeriodDays = number of days for the rent offer
   * 24 = number of hours in a day
   */
  rentOfferPrice: OfferPrice;
  /**
   * Return Over Investment(ROI)
   * This field calculates the ROI based on the estimated yield and the rent offer price.
   * When yield (mined - paid) is negative, the ROI will be 0.
   */
  returnOverInvestment: Scalars['Decimal']['output'];
  taxPrice: OfferPrice;
  totalChargebeCreditCardFees: OfferPrice;
};

/** Revenue - contains data related to Revenue page in marketplace */
export type Revenue = {
  __typename?: 'Revenue';
  /** Gets all time rewards for the associated luxor subaccounts. */
  alltimeRewards?: Maybe<Scalars['Float']['output']>;
  /**
   * Gets revenue history for the associated luxor subaccounts for the last N days.
   * This will return a list of RevenueHistory objects, each containing the revenue, hashrate, efficiency, and number of reports for each day.
   */
  getRevenueHistory?: Maybe<Array<RevenueHistory>>;
  luxorSubaccounts: Array<LuxorSubaccount>;
  /** Gets the pending rewards for the associated luxor subaccounts. */
  pendingRewards?: Maybe<Scalars['Float']['output']>;
  /**
   * Gets revenue data for the associated subaccounts and time frame. Date format is the same as UserAccount.revenue.
   * E.g. start: "2024-11-29T00:00:00-00:00" end: "2025-12-31T00:00:00-00:00"
   */
  revenue?: Maybe<Scalars['Float']['output']>;
  /**
   * Gets the transaction summary data for the associated luxor subaccounts and time frame. Date format should be
   * start: "2024-12-11" end: "2024-12-23". first and offset inputs allow for pagination. First will determine the total
   * number of transaction records to receive and Offset is a counter to handle the pagination.
   */
  transactionSummary: TransactionSummaryOutput;
  userId: Scalars['Int']['output'];
};


/** Revenue - contains data related to Revenue page in marketplace */
export type RevenueGetRevenueHistoryArgs = {
  lastNDays: Scalars['Int']['input'];
};


/** Revenue - contains data related to Revenue page in marketplace */
export type RevenueRevenueArgs = {
  end: Scalars['String']['input'];
  start: Scalars['String']['input'];
};


/** Revenue - contains data related to Revenue page in marketplace */
export type RevenueTransactionSummaryArgs = {
  end: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  includeCredit: Scalars['Boolean']['input'];
  includeDebit: Scalars['Boolean']['input'];
  offset: Scalars['Int']['input'];
  orderBy: TransactionSummaryOrderBy;
  start: Scalars['String']['input'];
};

export type RevenueHistory = {
  __typename?: 'RevenueHistory';
  efficiency: Scalars['Float']['output'];
  hashrate?: Maybe<Scalars['Float']['output']>;
  numberOfReports: Scalars['Int']['output'];
  revenue: Scalars['Decimal']['output'];
  timestamp: Scalars['String']['output'];
};


export type RevenueHistoryHashrateArgs = {
  unit?: HashRateUnit;
};


export type RevenueHistoryRevenueArgs = {
  unit?: Btcdenomination;
};

export type Rig = {
  __typename?: 'Rig';
  activeSince: Scalars['DateTime']['output'];
  averageSellingPrice?: Maybe<Scalars['Int']['output']>;
  contract: Contract;
  estimatedMonthlyProfit?: Maybe<OfferPrice>;
  estimatedMonthlyRevenue?: Maybe<OfferPrice>;
  hasInProgressTransaction: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  itemModel?: Maybe<ItemMaster>;
  miner: Miner;
  mostRecentTransaction?: Maybe<RigPurchaseTransaction>;
  name: Scalars['String']['output'];
  offer?: Maybe<Offer>;
  onlineSince: Scalars['DateTime']['output'];
  pricePaid?: Maybe<OfferPrice>;
  rentContractId?: Maybe<Scalars['Int']['output']>;
  rentOfferBundleId?: Maybe<Scalars['Int']['output']>;
  rigStatus: RigStatus;
};

export type RigFilter = {
  contract?: InputMaybe<ContractFilter>;
  id?: InputMaybe<FilterParamInt>;
  itemModelDescription?: InputMaybe<FilterParamString>;
  itemModelId?: InputMaybe<FilterParamInt>;
  itemModelManufacturer?: InputMaybe<FilterParamString>;
  itemModelModel?: InputMaybe<FilterParamString>;
  itemModelName?: InputMaybe<FilterParamString>;
  miner?: InputMaybe<MinerFilter>;
  name?: InputMaybe<FilterParamString>;
  offerActive?: InputMaybe<FilterParamBool>;
  offerDescription?: InputMaybe<FilterParamString>;
  offerId?: InputMaybe<FilterParamInt>;
  rigStatus?: InputMaybe<FilterParamRigStatus>;
};

export type RigOutput = {
  __typename?: 'RigOutput';
  results: Array<Rig>;
  total: Scalars['Int']['output'];
};

export type RigPurchaseTransaction = {
  __typename?: 'RigPurchaseTransaction';
  bitcoinInvoice: Scalars['String']['output'];
  bitcoinInvoiceElectrum: Scalars['String']['output'];
  bitcoinInvoiceEstimatedFees?: Maybe<Scalars['Decimal']['output']>;
  btcInvoiceRequiredConfirmations: Scalars['Int']['output'];
  btcRemittanceRequiredConfirmations: Scalars['Int']['output'];
  buyer: UserAccount;
  contract: Contract;
  createdOn: Scalars['Int']['output'];
  depositPriceSat: Scalars['Int']['output'];
  exchangeRate: Scalars['Decimal']['output'];
  exchangeRateDate: Scalars['NaiveDateTime']['output'];
  expiresOn?: Maybe<Scalars['DateTime']['output']>;
  failureReason?: Maybe<TransactionFailureReason>;
  id: Scalars['Int']['output'];
  invoice: Scalars['String']['output'];
  invoiceTxid?: Maybe<Scalars['String']['output']>;
  lastUpdatedOn?: Maybe<Scalars['Int']['output']>;
  lndInvoiceEstimatedFees?: Maybe<Scalars['Decimal']['output']>;
  offer: Offer;
  price: OfferPrice;
  priceSat: Scalars['Int']['output'];
  remittanceAmt?: Maybe<OfferPrice>;
  remittancePaymentHash?: Maybe<Scalars['String']['output']>;
  remittanceTxid?: Maybe<Scalars['String']['output']>;
  remittanceTxnFees?: Maybe<OfferPrice>;
  rig: Rig;
  seller: UserAccount;
  sellerContract: Contract;
  sellerDepositPriceSat: Scalars['Int']['output'];
  status: TransactionStatus;
  subtotal: OfferPrice;
  taxPriceSat: Scalars['Int']['output'];
  /** @deprecated Deprecated, available via invoice_txid */
  txnId: Scalars['String']['output'];
};


export type RigPurchaseTransactionBitcoinInvoiceEstimatedFeesArgs = {
  unit?: Btcdenomination;
};


export type RigPurchaseTransactionLndInvoiceEstimatedFeesArgs = {
  unit?: Btcdenomination;
};

export enum RigSortField {
  Active = 'ACTIVE',
  ContractId = 'CONTRACT_ID',
  Created = 'CREATED',
  Duration = 'DURATION',
  EnergyPrice = 'ENERGY_PRICE',
  EstimatedProfit = 'ESTIMATED_PROFIT',
  EstimatedRevenue = 'ESTIMATED_REVENUE',
  ExpiresOn = 'EXPIRES_ON',
  HashRate = 'HASH_RATE',
  HashRate_24Hr = 'HASH_RATE_24_HR',
  HashRateIdeal = 'HASH_RATE_IDEAL',
  Ip = 'IP',
  ItemModelDescription = 'ITEM_MODEL_DESCRIPTION',
  ItemModelId = 'ITEM_MODEL_ID',
  ItemModelManufacturer = 'ITEM_MODEL_MANUFACTURER',
  ItemModelModel = 'ITEM_MODEL_MODEL',
  ItemModelName = 'ITEM_MODEL_NAME',
  LastUpdated = 'LAST_UPDATED',
  Mac = 'MAC',
  MasterContractId = 'MASTER_CONTRACT_ID',
  MinerId = 'MINER_ID',
  MinerModel = 'MINER_MODEL',
  MinerName = 'MINER_NAME',
  MostRecentTransactionPrice = 'MOST_RECENT_TRANSACTION_PRICE',
  OfferPriceBtc = 'OFFER_PRICE_BTC',
  OfferPriceUsd = 'OFFER_PRICE_USD',
  PicKaxe = 'PIC_KAXE',
  PoolFeePct = 'POOL_FEE_PCT',
  Power = 'POWER',
  Power_24Hr = 'POWER_24_HR',
  PowerManufacturer = 'POWER_MANUFACTURER',
  PowerMode = 'POWER_MODE',
  PowerModeReported = 'POWER_MODE_REPORTED',
  RigId = 'RIG_ID',
  RigName = 'RIG_NAME',
  SalesCommissionPct = 'SALES_COMMISSION_PCT',
  Seen = 'SEEN',
  Serial = 'SERIAL',
  SlaPct = 'SLA_PCT'
}

export type RigSorting = {
  field: RigSortField;
  order: Order;
};

export enum RigStatus {
  Active = 'Active',
  Disabled = 'Disabled',
  ListedForRent = 'ListedForRent',
  ListedForSale = 'ListedForSale',
  ListedForSaleAndRent = 'ListedForSaleAndRent',
  Rented = 'Rented'
}

export type SalesOrder = {
  __typename?: 'SalesOrder';
  bitcoinInvoiceEstimatedFees?: Maybe<Scalars['Decimal']['output']>;
  buyerCommissionSat?: Maybe<Scalars['Int']['output']>;
  /**
   * Chargebee credit card processing fee
   * The value is in percentage
   */
  chargebeeCreditCardProcessingFeePct: Scalars['Decimal']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  createdBy: UserAccount;
  exchangeRate: Scalars['Decimal']['output'];
  exchangeRateDate: Scalars['NaiveDateTime']['output'];
  expiresOn?: Maybe<Scalars['NaiveDateTime']['output']>;
  fiatBtcProcessingFee: Scalars['Decimal']['output'];
  fiatBtcProcessingFeePct: Scalars['Decimal']['output'];
  fiatBtcProcessingFeeSat: Scalars['Int']['output'];
  hostingRemittedToSeller: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  lndInvoiceEstimatedFees?: Maybe<Scalars['Decimal']['output']>;
  orderType: SalesOrderOrderType;
  otcSale: Scalars['Boolean']['output'];
  paymentType: SalesOrderPaymentType;
  rentalContractSummary?: Maybe<RentContractSummary>;
  /**
   * BTC Funds
   * This is the list of BTC funds related to the sales order. When the payment is performed in FIAT,
   * the backend needs to buy BTC to pay the seller.
   * This is the list of BTC funds related to the sales order.
   */
  salesOrderBtcFunds: Array<BtcFund>;
  salesOrderCreditCardChargebee?: Maybe<SalesOrderCreditCardChargebee>;
  salesOrderFiatPaynote?: Maybe<SalesOrderFiatPaynote>;
  salesOrderItems: Array<SalesOrderItem>;
  salesOrderPromotionCode?: Maybe<SalesOrderPromotionCode>;
  salesOrderPurchaseTransaction?: Maybe<SalesOrderPurchaseTransaction>;
  salesOrderRefundTransactions: Array<SalesOrderRefundTransaction>;
  salesOrderRemittanceTransactions: Array<SalesOrderRemittanceTransaction>;
  salesforceCreatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  salesforceId?: Maybe<Scalars['String']['output']>;
  salesforceUpdatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  sellerCommissionSat?: Maybe<Scalars['Int']['output']>;
  sellerList: Array<UserAccount>;
  status: SalesOrderStatus;
  totalAmount: Scalars['Decimal']['output'];
  /** Total amount in sats that the buyer needs to pay */
  totalAmountSat: Scalars['Int']['output'];
  totalBuyerCommission: Scalars['Decimal']['output'];
  totalDeposit: Scalars['Decimal']['output'];
  /** Total amount in sats related to the Security Deposits */
  totalDepositSat: Scalars['Int']['output'];
  totalFiatFees: Scalars['Decimal']['output'];
  totalHosting: Scalars['Decimal']['output'];
  /** Total amount in sats related the the Hosting Fees */
  totalHostingSat: Scalars['Int']['output'];
  totalOffer: Scalars['Decimal']['output'];
  totalOfferSat: Scalars['Int']['output'];
  totalSalesCommission: Scalars['Decimal']['output'];
  /**
   * Total amount in sats related to the Sales Commission
   * This is calculated by:
   * (Total Amount - Deposit - Hosting - Taxes) * Sales Commission Percentage
   */
  totalSalesCommissionSat: Scalars['Int']['output'];
  totalSellerCommission: Scalars['Decimal']['output'];
  totalTax: Scalars['Decimal']['output'];
  /** Total amount in sats related to the Taxes */
  totalTaxSat: Scalars['Int']['output'];
  totals: SalesOrderTotals;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  userDeviceType?: Maybe<Scalars['String']['output']>;
};


export type SalesOrderBitcoinInvoiceEstimatedFeesArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderFiatBtcProcessingFeeArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderLndInvoiceEstimatedFeesArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderTotalAmountArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderTotalBuyerCommissionArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderTotalDepositArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderTotalFiatFeesArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderTotalHostingArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderTotalOfferArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderTotalSalesCommissionArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderTotalSellerCommissionArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderTotalTaxArgs = {
  unit?: Btcdenomination;
};

export type SalesOrderCreditCardChargebee = {
  __typename?: 'SalesOrderCreditCardChargebee';
  createdAt: Scalars['NaiveDateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  expireAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  expireAtTs?: Maybe<Scalars['Int']['output']>;
  hostedPageId: Scalars['String']['output'];
  hostedPageState: Scalars['String']['output'];
  hostedPageUrl: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  invoiceId?: Maybe<Scalars['String']['output']>;
  invoiceStatus?: Maybe<Scalars['String']['output']>;
  isPaymentComplete: Scalars['Boolean']['output'];
  lastPolledAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  passThruContent?: Maybe<Scalars['String']['output']>;
  salesOrderId: Scalars['Int']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  webhookReceivedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
};

export type SalesOrderFiatPaynote = {
  __typename?: 'SalesOrderFiatPaynote';
  /**
   * Amount
   * This the amount the use payed for the salesorder in USD.
   * Before the backend receive the webhook, it is initialized with the requested amount.
   * After the backend webhook is executed, the amount is updated with the amount received.
   */
  amount: Scalars['Decimal']['output'];
  checkId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['NaiveDateTime']['output'];
  errorDescription?: Maybe<Scalars['String']['output']>;
  errorExplanation?: Maybe<Scalars['String']['output']>;
  /**
   * Fee
   * This is the fee the user payed for duing the fiat operation within their bank account.
   * Before the backend received the webhook, it is initialized with None.
   * After the backend webhook is executed, the fee is updated with the fee actually payed.
   */
  fee?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['Int']['output'];
  /** The paymentToken used to uniquely identify the payment within Paynote. */
  identifier: Scalars['String']['output'];
  items: Array<PaynoteItem>;
  number?: Maybe<Scalars['String']['output']>;
  paynoteStatus: Scalars['String']['output'];
  /**
   * PubKey
   * This is the public key of the paynote.
   */
  publicKey: Scalars['String']['output'];
  /**
   * Requested Amount
   * This is the amount the user needs to pay for the salesorde in USD
   */
  requestedAmount: Scalars['Decimal']['output'];
  salesOrderId: Scalars['Int']['output'];
  status: PurchaseTransactionStatus;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
};

export type SalesOrderFilter = {
  createdAt?: InputMaybe<FilterParamNaiveDateTime>;
  createdBy?: InputMaybe<FilterParamInt>;
  fiatBtcProcessingFeeSat?: InputMaybe<FilterParamInt>;
  hasRefunds?: InputMaybe<FilterParamBool>;
  id?: InputMaybe<FilterParamInt>;
  orderType?: InputMaybe<FilterParamSalesOrderOrderType>;
  otcSales?: InputMaybe<FilterParamBool>;
  paymentType?: InputMaybe<FilterParamSalesOrderPaymentType>;
  salesforceId?: InputMaybe<FilterParamString>;
  status?: InputMaybe<FilterParamSalesOrderStatus>;
  totalAmountSat?: InputMaybe<FilterParamInt>;
  updatedAt?: InputMaybe<FilterParamNaiveDateTime>;
};

export type SalesOrderItem = {
  __typename?: 'SalesOrderItem';
  amount: Scalars['Decimal']['output'];
  amountSat: Scalars['Int']['output'];
  buyer?: Maybe<UserAccount>;
  buyerCommissionSat?: Maybe<Scalars['Int']['output']>;
  buyerContract?: Maybe<Contract>;
  buyerContractId?: Maybe<Scalars['Int']['output']>;
  buyerId?: Maybe<Scalars['Int']['output']>;
  buyerRentContractId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['NaiveDateTime']['output'];
  deposit?: Maybe<Scalars['Decimal']['output']>;
  depositSat?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  itemMaster: ItemMaster;
  itemMasterId: Scalars['Int']['output'];
  masterContractId?: Maybe<Scalars['Int']['output']>;
  offer?: Maybe<Offer>;
  offerId?: Maybe<Scalars['Int']['output']>;
  quantity: Scalars['Decimal']['output'];
  rentOfferBundleId?: Maybe<Scalars['Int']['output']>;
  rigId?: Maybe<Scalars['Int']['output']>;
  salesCommission?: Maybe<Scalars['Decimal']['output']>;
  salesCommissionSat?: Maybe<Scalars['Int']['output']>;
  salesOrderId: Scalars['Int']['output'];
  salesOrderItemId?: Maybe<Scalars['Int']['output']>;
  salesOrderRemittanceTransaction?: Maybe<SalesOrderRemittanceTransaction>;
  salesOrderRemittanceTransactionId?: Maybe<Scalars['Int']['output']>;
  salesforceId?: Maybe<Scalars['String']['output']>;
  seller?: Maybe<UserAccount>;
  sellerCommissionSat?: Maybe<Scalars['Int']['output']>;
  sellerContractId?: Maybe<Scalars['Int']['output']>;
  sellerId?: Maybe<Scalars['Int']['output']>;
  sellerRentContractId?: Maybe<Scalars['Int']['output']>;
  tax?: Maybe<Scalars['Decimal']['output']>;
  taxSat?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
};


export type SalesOrderItemAmountArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderItemDepositArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderItemSalesCommissionArgs = {
  unit?: Btcdenomination;
};


export type SalesOrderItemTaxArgs = {
  unit?: Btcdenomination;
};

export enum SalesOrderOrderType {
  Purchase = 'PURCHASE',
  Rental = 'RENTAL'
}

export type SalesOrderOutput = {
  __typename?: 'SalesOrderOutput';
  results: Array<SalesOrder>;
  total: Scalars['Int']['output'];
};

export enum SalesOrderPaymentType {
  Btc = 'BTC',
  ChargebeeCreditCard = 'CHARGEBEE_CREDIT_CARD',
  Lightning = 'LIGHTNING',
  OtcFiat = 'OTC_FIAT',
  PaynoteAch = 'PAYNOTE_ACH'
}

export type SalesOrderPromotionCode = {
  __typename?: 'SalesOrderPromotionCode';
  id: Scalars['Int']['output'];
  promotionCode?: Maybe<PromotionCode>;
  promotionCodeId: Scalars['Int']['output'];
  salesOrderId: Scalars['Int']['output'];
  salesforceId?: Maybe<Scalars['String']['output']>;
};

export type SalesOrderPurchaseTransaction = {
  __typename?: 'SalesOrderPurchaseTransaction';
  createdAt: Scalars['NaiveDateTime']['output'];
  failureReason?: Maybe<PurchaseTransactionFailureReason>;
  id: Scalars['Int']['output'];
  lndInvoice: Scalars['String']['output'];
  onChainTxid?: Maybe<Scalars['String']['output']>;
  payToBtcAddress: Scalars['String']['output'];
  randTxnId: Scalars['String']['output'];
  salesOrderId: Scalars['Int']['output'];
  status: PurchaseTransactionStatus;
  totalAmountSat: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
};

export type SalesOrderRefundTransaction = {
  __typename?: 'SalesOrderRefundTransaction';
  amountSat: Scalars['Int']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  feesSat: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lndPayment?: Maybe<Scalars['String']['output']>;
  nodeId?: Maybe<Scalars['String']['output']>;
  onChainTxid?: Maybe<Scalars['String']['output']>;
  payedToBtcAddress?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  salesOrderId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
};

export type SalesOrderRemittanceTransaction = {
  __typename?: 'SalesOrderRemittanceTransaction';
  createdAt: Scalars['NaiveDateTime']['output'];
  id: Scalars['Int']['output'];
  onChainTxid?: Maybe<Scalars['String']['output']>;
  payedToBtcAddress: Scalars['String']['output'];
  randTxnId: Scalars['String']['output'];
  salesOrderId: Scalars['Int']['output'];
  seller: UserAccount;
  sellerId: Scalars['Int']['output'];
  status: PurchaseTransactionStatus;
  totalAmountSat: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
};

export enum SalesOrderSortField {
  CreatedAt = 'CREATED_AT',
  CreatedBy = 'CREATED_BY',
  Id = 'ID',
  Status = 'STATUS',
  TotalAmountSat = 'TOTAL_AMOUNT_SAT',
  UpdatedAt = 'UPDATED_AT'
}

export type SalesOrderSorting = {
  field: SalesOrderSortField;
  order: Order;
};

export enum SalesOrderStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  PaymentInProgress = 'PAYMENT_IN_PROGRESS',
  PendingPayment = 'PENDING_PAYMENT',
  PendingRemittance = 'PENDING_REMITTANCE',
  RemittanceInProgress = 'REMITTANCE_IN_PROGRESS'
}

export type SalesOrderTotals = {
  __typename?: 'SalesOrderTotals';
  totalAmount: PriceObject;
  /**
   * Total amount in sats that the buyer needs to pay.
   * The sum of:
   * - Total Offers Sat
   * - Total Hosting Sat
   * - Total Deposit Sat
   * - Total Tax Sat
   * - Total Fiat Fee Sat
   */
  totalAmountSat: Scalars['Int']['output'];
  totalBuyerCommission: PriceObject;
  totalBuyerCommissionSat: Scalars['Int']['output'];
  totalDeposit: PriceObject;
  /** Total amount in sats related to the Security Deposits */
  totalDepositSat: Scalars['Int']['output'];
  totalFiatFee: PriceObject;
  /** Total amount in sats related the Fiat Fee */
  totalFiatFeeSat: Scalars['Int']['output'];
  totalHosting: PriceObject;
  /** Total amount in sats related the the Hosting Fees */
  totalHostingSat: Scalars['Int']['output'];
  totalOffer: PriceObject;
  /** Total amount in sats related to the Offers */
  totalOfferSat: Scalars['Int']['output'];
  totalSalesCommission: PriceObject;
  /**
   * Total amount in sats related to the Sales Commission
   * This is calculated by:
   * (Total Amount - Deposit - Hosting - Taxes) * Sales Commission Percentage
   */
  totalSalesCommissionSat: Scalars['Int']['output'];
  totalSellerCommission: PriceObject;
  totalSellerCommissionSat: Scalars['Int']['output'];
  totalTax: PriceObject;
  /** Total amount in sats related to the Taxes */
  totalTaxSat: Scalars['Int']['output'];
};

export type SellerRentContractOutput = {
  __typename?: 'SellerRentContractOutput';
  results: Array<SellerRentContractSummary>;
  total: Scalars['Int']['output'];
};

export type SellerRentContractSummary = {
  __typename?: 'SellerRentContractSummary';
  activatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  avgEfficiency: Scalars['Decimal']['output'];
  contractStatus: ContractStatusType;
  createdAt: Scalars['NaiveDateTime']['output'];
  daysLeft: Scalars['Int']['output'];
  daysRented: Scalars['Int']['output'];
  deactivatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  estimatedExpirationDate: Scalars['NaiveDateTime']['output'];
  exchangeRateAtStart: Scalars['Decimal']['output'];
  hashpriceKwHrUsd?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['Int']['output'];
  periodDays: Scalars['Int']['output'];
  rentExtends: Array<RentContractExtend>;
  rentOfferBundleId: Scalars['Int']['output'];
  rentOfferPricePeriodId: Scalars['Int']['output'];
  rigs: Array<Rig>;
  rigsCount: Scalars['Int']['output'];
  totalHashrate: Scalars['Decimal']['output'];
  totalPower: Scalars['Decimal']['output'];
  totalPriceSat: Scalars['Int']['output'];
  totalPriceUsd: Scalars['Decimal']['output'];
};


export type SellerRentContractSummaryTotalHashrateArgs = {
  unit?: HashRateUnit;
};


export type SellerRentContractSummaryTotalPowerArgs = {
  unit?: PowerUnit;
};

export type SubaccountsHashrateOutput = {
  __typename?: 'SubaccountsHashrateOutput';
  results: Array<GqlHashrateEfficiency>;
  total: Scalars['Int']['output'];
};

export type SubscriptionRoot = {
  __typename?: 'SubscriptionRoot';
  exchangeRate?: Maybe<ExchangeRate>;
  heartbeat: Heartbeat;
  salesOrder?: Maybe<SalesOrder>;
  /**
   * UserKyc subscription
   * This subscription will return the user kyc status every 10 seconds for a given workflow run.
   */
  userKyc?: Maybe<UserOnfido>;
};


export type SubscriptionRootHeartbeatArgs = {
  interval?: Scalars['Int']['input'];
};


export type SubscriptionRootSalesOrderArgs = {
  id: Scalars['Int']['input'];
};


export type SubscriptionRootUserKycArgs = {
  workflowRunId: Scalars['String']['input'];
};

export type TradePrice = {
  __typename?: 'TradePrice';
  nativeCurrency: Scalars['String']['output'];
  priceBtc: Scalars['Decimal']['output'];
  priceUsd: Scalars['Decimal']['output'];
  timestamp: Scalars['String']['output'];
};


export type TradePricePriceBtcArgs = {
  unit?: Btcdenomination;
};

export type TradeSpread = {
  __typename?: 'TradeSpread';
  /** The average traded price in usd within the time frame */
  averagePrice?: Maybe<Scalars['Float']['output']>;
  date: Scalars['NaiveDate']['output'];
  /** The highest bid price in usd within the time frame */
  highestBid?: Maybe<Scalars['Float']['output']>;
  /** Identify the miner model */
  itemModelId: Scalars['Int']['output'];
  /** The lowest ask price in usd within the time frame */
  lowestAsk?: Maybe<Scalars['Float']['output']>;
  /** The timestamp on the start moment of the trade spread */
  timestamp: Scalars['Int']['output'];
  /** The number of trades in that day */
  volume?: Maybe<Scalars['Int']['output']>;
};

export type TradeStats = {
  __typename?: 'TradeStats';
  highestBid?: Maybe<TradePrice>;
  itemModelId: Scalars['Int']['output'];
  lastTrade?: Maybe<TradePrice>;
  lowestOffer?: Maybe<TradePrice>;
  tradeRangeMax?: Maybe<TradePrice>;
  tradeRangeMin?: Maybe<TradePrice>;
};

export enum TransactionFailureReason {
  IncompletePayment = 'IncompletePayment',
  InvoiceCanceled = 'InvoiceCanceled',
  InvoiceExpired = 'InvoiceExpired'
}

export enum TransactionStatus {
  Canceled = 'Canceled',
  Completed = 'Completed',
  Failed = 'Failed',
  PendingPayment = 'PendingPayment',
  PendingRemittance = 'PendingRemittance'
}

export type TransactionSummary = {
  __typename?: 'TransactionSummary';
  amount?: Maybe<Scalars['Float']['output']>;
  amountUsd?: Maybe<Scalars['Float']['output']>;
  coinPrice?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  luxorSubaccountUsername: Scalars['String']['output'];
  payoutAddress?: Maybe<Scalars['String']['output']>;
  transactionId?: Maybe<Scalars['String']['output']>;
  transactionType?: Maybe<Scalars['String']['output']>;
};

export enum TransactionSummaryOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC'
}

export type TransactionSummaryOutput = {
  __typename?: 'TransactionSummaryOutput';
  results: Array<TransactionSummary>;
  total: Scalars['Int']['output'];
};

export enum UnavailableReasonCode {
  DailyLimitExceeded = 'DAILY_LIMIT_EXCEEDED',
  KycNotCompleted = 'KYC_NOT_COMPLETED',
  MissingChargebeeId = 'MISSING_CHARGEBEE_ID',
  MonthlyLimitExceeded = 'MONTHLY_LIMIT_EXCEEDED',
  PaymentLimitExceeded = 'PAYMENT_LIMIT_EXCEEDED',
  PaynoteDisabled = 'PAYNOTE_DISABLED',
  UnknownReason = 'UNKNOWN_REASON',
  UnknownUser = 'UNKNOWN_USER'
}

export type UserAccount = {
  __typename?: 'UserAccount';
  alltimeRewards?: Maybe<Scalars['Float']['output']>;
  billingAddress: Scalars['String']['output'];
  billingCity?: Maybe<Scalars['String']['output']>;
  billingCountry?: Maybe<Scalars['String']['output']>;
  billingPostalCode?: Maybe<Scalars['String']['output']>;
  billingState?: Maybe<Scalars['String']['output']>;
  billingStreet?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['NaiveDate']['output']>;
  blockRewards: Scalars['Boolean']['output'];
  /** Block sell: when true the user can't sell his rigs */
  blockSell: Scalars['Boolean']['output'];
  chargebeeCcStats: ChargebeeCreditCardStatus;
  chargebeeId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['NaiveDateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  estimatedMonthlyProfit: OfferPrice;
  fiatPaynoteStats: FiatPaynoteStatus;
  firstName?: Maybe<Scalars['String']['output']>;
  foremanClientId: Scalars['Int']['output'];
  foremanClientIdList: Array<Scalars['Int']['output']>;
  getRevenueHistory?: Maybe<Array<RevenueHistory>>;
  id: Scalars['Int']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  miningSummary?: Maybe<MiningSummary>;
  /** The lightning network node id of this user, anonymized if the user is not the owner */
  nodeId?: Maybe<Scalars['String']['output']>;
  pendingRewards?: Maybe<Scalars['Float']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberCountryCode?: Maybe<Scalars['String']['output']>;
  phoneNumberVerified: Scalars['Boolean']['output'];
  /** @deprecated Deprecated, use luxor subaccount instead */
  poolPaymentConfig?: Maybe<PoolPaymentConfig>;
  /** Calculates the revenue sum between start and end dates */
  revenue?: Maybe<Scalars['Float']['output']>;
  role: UserRole;
  /** The salesforce identification */
  salesforceId?: Maybe<Scalars['String']['output']>;
  signedAgreements: Array<UserSignedAgreement>;
  skipDeposit: Scalars['Boolean']['output'];
  status: UserStatus;
  subaccountList: Array<LuxorSubaccount>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  /** Find if this user has an approved KYC process */
  userKycCompleted: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
  wallet?: Maybe<Wallet>;
  /** @deprecated Deprecated, available via wallet */
  walletAddress: Scalars['String']['output'];
};


export type UserAccountGetRevenueHistoryArgs = {
  lastNDays: Scalars['Int']['input'];
};


export type UserAccountMiningSummaryArgs = {
  interval: IntervalTime;
};


export type UserAccountRevenueArgs = {
  end: Scalars['String']['input'];
  start: Scalars['String']['input'];
};

export type UserLesson = {
  __typename?: 'UserLesson';
  createdAt: Scalars['NaiveDateTime']['output'];
  id: Scalars['Int']['output'];
  moduleId: Scalars['String']['output'];
  status: UserLessonStatus;
  topicId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  userId: Scalars['Int']['output'];
};

export type UserLessonFilter = {
  createdAt?: InputMaybe<FilterParamNaiveDateTime>;
  moduleId?: InputMaybe<FilterParamString>;
  status?: InputMaybe<FilterParamUserLessonStatus>;
  topicId?: InputMaybe<FilterParamString>;
  updatedAt?: InputMaybe<FilterParamNaiveDateTime>;
};

export enum UserLessonStatus {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS'
}

export type UserLessons = {
  __typename?: 'UserLessons';
  allUserLessons: Array<UserLesson>;
  lastUserLesson?: Maybe<UserLesson>;
  totalCompleted: Scalars['Int']['output'];
  totalInProgress: Scalars['Int']['output'];
  totalLessons: Scalars['Int']['output'];
};

export type UserOnfido = {
  __typename?: 'UserOnfido';
  applicantId: Scalars['String']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  id: Scalars['Int']['output'];
  reasons: Array<Scalars['String']['output']>;
  sdkToken: Scalars['String']['output'];
  status: OnfidoWorkflowStatus;
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  userId: Scalars['Int']['output'];
  workflowId: Scalars['String']['output'];
  workflowRunId: Scalars['String']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER'
}

export type UserSettings = {
  __typename?: 'UserSettings';
  buyerRentalCommissionPct?: Maybe<Scalars['Decimal']['output']>;
  emailNotificationBidFilled: Scalars['Boolean']['output'];
  emailNotificationHighBid: Scalars['Boolean']['output'];
  emailNotificationOfferDisabled: Scalars['Boolean']['output'];
  emailNotificationRewards: Scalars['Boolean']['output'];
  /**
   * Features List
   * Only the enabled features are returned as a list of string
   */
  features: Array<Scalars['String']['output']>;
  /**
   * Features Object as raw string
   * Admin only api
   */
  featuresRaw: Array<Scalars['String']['output']>;
  ignoreCreditCardLimit: Scalars['Boolean']['output'];
  remitRenthashHostingToSeller: Scalars['Boolean']['output'];
  rentalPoolFeePct?: Maybe<Scalars['Decimal']['output']>;
  sellerRentalCommissionPct?: Maybe<Scalars['Decimal']['output']>;
  timezone: Scalars['String']['output'];
  updatedAt: Scalars['NaiveDateTime']['output'];
};

export type UserSignedAgreement = {
  __typename?: 'UserSignedAgreement';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  dateSigned: Scalars['NaiveDateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  url: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

/**
 * UserStats is a complex object that contains user statistics
 * It is used to expose user statistics to the frontend
 *
 * # Fields
 * * `id` - The user database id
 * * `active_rigs_count` - The user total number of active rigs
 * * `active_offers_count` - The user total number of active offers
 * * `sales_order_count` - The total number of sales orders where the user is involved
 * * `completed_sales_order_count` - The total number of completed sales orders where the user is involved
 */
export type UserStats = {
  __typename?: 'UserStats';
  /** The user total number of active offers */
  activeOffersCount: Scalars['Int']['output'];
  /** The user total number of active rigs */
  activeRigsCount: Scalars['Int']['output'];
  /** The total number of completed sales orders where the user is involved */
  completedSalesOrderCount: Scalars['Int']['output'];
  /** The user database id */
  id: Scalars['Int']['output'];
  /** The total number of sales orders where the user is involved */
  salesOrderCount: Scalars['Int']['output'];
};

export enum UserStatus {
  Deleted = 'DELETED',
  Pending = 'PENDING',
  Restricted = 'RESTRICTED',
  Unrestricted = 'UNRESTRICTED'
}

export type UserValidator = {
  __typename?: 'UserValidator';
  createdOn: Scalars['NaiveDateTime']['output'];
  id: Scalars['Int']['output'];
  stakedAmt: Scalars['Int']['output'];
  status?: Maybe<Scalars['String']['output']>;
  updatedOn?: Maybe<Scalars['NaiveDateTime']['output']>;
  userId: Scalars['Int']['output'];
  valId: Scalars['Int']['output'];
  validator: Validator;
};

export type Validator = {
  __typename?: 'Validator';
  active: Scalars['Boolean']['output'];
  createdOn: Scalars['NaiveDateTime']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  type: ValidatorType;
  updatedOn?: Maybe<Scalars['NaiveDateTime']['output']>;
  validatorId: Scalars['String']['output'];
  walletAddress?: Maybe<Scalars['String']['output']>;
};

export enum ValidatorType {
  Ethereum = 'ETHEREUM',
  Helium = 'HELIUM',
  Luna = 'LUNA',
  Skale = 'SKALE'
}

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['String']['output'];
  confirmedBalance?: Maybe<Scalars['Decimal']['output']>;
  startBalance: Scalars['Decimal']['output'];
  totalBalance: Scalars['Decimal']['output'];
  /**
   * Get the transaction history of the wallet per days ago
   * This api allows you to get the transaction history of the wallet
   * for the last n days.
   * If a transaction can be related to a salesorder, the object will be availble.
   * The default value of days is 30.
   * Be carefull because maybe there is less transactions in the period requested then in the transaction count.
   */
  transactionHistory: Array<WalletTransaction>;
  /**
   * Get the number of transactions in the wallet
   * The number of transactions is the total number present in the txCount object
   * in the response from the explorer.
   * Please access the explorer documentation to get more details about it.
   * https://btc-rpc-explorer.testnet.blockwaresolutions.com/
   */
  transactionHistoryCount: Scalars['Int']['output'];
  /**
   * Get the transaction history of the wallet
   * This api allows you to walk over all pages of the wallet transaction history
   * by providing the after and first parameters.
   * If a transaction can be related to a salesorder, the object will be availble.
   */
  transactionHistoryPaginated: Array<WalletTransaction>;
  unconfirmedBalance?: Maybe<Scalars['Decimal']['output']>;
  walletHistory: Array<WalletHistory>;
};


export type WalletConfirmedBalanceArgs = {
  unit?: Btcdenomination;
};


export type WalletStartBalanceArgs = {
  unit?: Btcdenomination;
};


export type WalletTotalBalanceArgs = {
  unit?: Btcdenomination;
};


export type WalletTransactionHistoryArgs = {
  days?: Scalars['Int']['input'];
};


export type WalletTransactionHistoryPaginatedArgs = {
  after?: Scalars['Int']['input'];
  first?: Scalars['Int']['input'];
};


export type WalletUnconfirmedBalanceArgs = {
  unit?: Btcdenomination;
};

export type WalletHistory = {
  __typename?: 'WalletHistory';
  address: Scalars['String']['output'];
  coin: CoinType;
  createdAt: Scalars['NaiveDateTime']['output'];
  id: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type WalletTransaction = {
  __typename?: 'WalletTransaction';
  amt: Scalars['Decimal']['output'];
  blockHeight: Scalars['Int']['output'];
  rigPurchaseTransaction?: Maybe<RigPurchaseTransaction>;
  salesOrder?: Maybe<SalesOrder>;
  timestamp: Scalars['Int']['output'];
  txid: Scalars['String']['output'];
};


export type WalletTransactionAmtArgs = {
  unit?: Btcdenomination;
};

export enum WeeklyIntervalPaymentFrequency {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type Worker = {
  __typename?: 'Worker';
  /** Returns the efficiency of the worker as a percentage (0 to 100%). */
  efficiency: Scalars['Decimal']['output'];
  hashrate: Scalars['Decimal']['output'];
  id: Scalars['String']['output'];
  lastShareTime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rejectedShares: Scalars['Decimal']['output'];
  staleShares: Scalars['Decimal']['output'];
  status: WorkerStatus;
  subaccountName: Scalars['String']['output'];
};

export type WorkerHashrateEntry = {
  __typename?: 'WorkerHashrateEntry';
  data: Array<GqlHashrateEfficiencyRevenue>;
  workerName: Scalars['String']['output'];
};

export type WorkerHashrateMapOutput = {
  __typename?: 'WorkerHashrateMapOutput';
  results: Array<WorkerHashrateEntry>;
  total: Scalars['Int']['output'];
};

export enum WorkerStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Unspecified = 'UNSPECIFIED'
}

export type WorkersList = {
  __typename?: 'WorkersList';
  total: Scalars['Int']['output'];
  totalActive: Scalars['Int']['output'];
  totalInactive: Scalars['Int']['output'];
  workers: Array<Worker>;
};

export type ListOffersBundlesWithTotalQueryVariables = Exact<{
  pagination: Pagination;
  sorting: OfferBundleSorting;
  filter: OfferBundleFilter;
}>;


export type ListOffersBundlesWithTotalQuery = { __typename?: 'QueryRoot', listOffersBundlesWithTotal: { __typename: 'OfferBundleSummaryOutput', total: number, results: Array<{ __typename: 'OfferBundle', id: number, active: boolean, wattsPerTeraHash: number, description?: string | null, energyPrice?: number | null, hostingSiteName?: string | null, itemMasterDescription?: string | null, offerCount: number, totalHashRate: number, totalHashRate24Hr: number, totalHashRateIdeal: number, totalPower: number, totalPower24Hr: number, totalPowerManufacturer: number, updatedAt?: any | null, createdAt: any, offers: Array<{ __typename: 'Offer', id: number, offerBundle?: { __typename: 'OfferBundle', id: number, dealScoreDetails?: { __typename: 'OfferBundleDealScoreAggregation', dealScore: number, breakEvenScore: number, capitalEfficiencyScore: number, dollarPerThScore: number, efficiencyScore: number, profitScore: number, thScore: number } | null } | null }>, hostingSite?: { __typename: 'HostingSite', id: number, name: string } | null, bitcoinStats: { __typename: 'BitcoinStats', difficulty: number, avgBlockFeeMonthly: number, blockSubsidy: number, exchangeRate: { __typename: 'ExchangeRate', btcToUsd: number, usdToBtc: number } }, createdBy: { __typename: 'UserAccount', id: number, username: string }, pricePerTh: { __typename: 'PricePerTh', btcPerTh: any, dollarPerTh: number }, itemModel?: { __typename: 'ItemMaster', id: number, description?: string | null, efficiency?: number | null, hashRate?: number | null, photoUrl?: string | null, power?: number | null } | null, aggregationDetails: { __typename: 'OfferBundleAggregation', hashRateIdeal?: number | null, hashRate24Hr?: number | null, powerUsage24Hr?: number | null, powerManufacturer?: number | null, price: { __typename: 'OfferPrice', priceBtc: any, priceUsd: any }, estimatedMonthlyProfit?: { __typename: 'OfferPrice', priceBtc: any, priceUsd: any } | null, estimatedMonthlyRevenue: { __typename: 'OfferPrice', priceBtc: any, priceUsd: any } } }> } };


export const ListOffersBundlesWithTotalDocument = gql`
    query listOffersBundlesWithTotal($pagination: Pagination!, $sorting: OfferBundleSorting!, $filter: OfferBundleFilter!) {
  listOffersBundlesWithTotal(
    pagination: $pagination
    sorting: $sorting
    filter: $filter
  ) {
    __typename
    total
    results {
      __typename
      id
      active
      wattsPerTeraHash
      description
      energyPrice
      hostingSiteName
      id
      itemMasterDescription
      offerCount
      totalHashRate
      totalHashRate24Hr
      totalHashRateIdeal
      totalPower
      totalPower24Hr
      totalPowerManufacturer
      updatedAt
      wattsPerTeraHash
      offers {
        __typename
        id
        offerBundle {
          __typename
          id
          dealScoreDetails {
            __typename
            dealScore
            breakEvenScore
            capitalEfficiencyScore
            dollarPerThScore
            efficiencyScore
            profitScore
            thScore
          }
        }
      }
      hostingSite {
        __typename
        id
        id
      }
      bitcoinStats {
        __typename
        difficulty
        avgBlockFeeMonthly
        blockSubsidy
        exchangeRate {
          __typename
          btcToUsd
          usdToBtc
        }
      }
      createdBy {
        __typename
        id
        id
        username
      }
      createdAt
      pricePerTh {
        __typename
        btcPerTh(unit: BTC)
        dollarPerTh
      }
      itemModel {
        __typename
        id
        description
        efficiency
        hashRate(unit: TH_PS)
        photoUrl
        power(unit: KW)
      }
      pricePerTh {
        __typename
        btcPerTh(unit: BTC)
        dollarPerTh
      }
      aggregationDetails {
        __typename
        hashRateIdeal(unit: TH_PS)
        hashRate24Hr(unit: TH_PS)
        price {
          __typename
          priceBtc(unit: BTC)
          priceUsd
        }
        estimatedMonthlyProfit {
          __typename
          priceBtc(unit: BTC)
          priceUsd
        }
        estimatedMonthlyRevenue {
          __typename
          priceBtc(unit: BTC)
          priceUsd
        }
        hashRate24Hr(unit: TH_PS)
        powerUsage24Hr(unit: KW)
        powerManufacturer(unit: KW)
      }
      hostingSite {
        __typename
        id
        id
        name
      }
    }
  }
}
    `;

export function useListOffersBundlesWithTotalQuery(options: Omit<Urql.UseQueryArgs<ListOffersBundlesWithTotalQueryVariables>, 'query'>) {
  return Urql.useQuery<ListOffersBundlesWithTotalQuery, ListOffersBundlesWithTotalQueryVariables>({ query: ListOffersBundlesWithTotalDocument, ...options });
};