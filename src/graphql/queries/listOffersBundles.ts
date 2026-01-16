import { gql } from 'urql';

{
/*Query definition */
}
export const LIST_OFFERS_BUNDLES_QUERY = gql`
query listOffersBundlesWithTotal(
  $pagination: Pagination!
  $sorting: OfferBundleSorting!
  $filter: OfferBundleFilter!
) {
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
