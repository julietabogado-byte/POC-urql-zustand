import OfferCard from "@/src/components/OfferCard";
import { LIST_OFFERS_BUNDLES_QUERY } from "@/src/graphql/queries/listOffersBundles";
import { useMarketplaceStore } from "@/src/store/useMarketPlaceStore";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useQuery } from "urql";

export default function Index() {
  const { sortOrder, sortField, setSorting, resetFilters } =
    useMarketplaceStore();

  const [result] = useQuery({
    query: LIST_OFFERS_BUNDLES_QUERY,
    variables: {
      pagination: { first: 25, after: "0" },
      sorting: { order: sortOrder, field: sortField },
      filter: {
        id: { eq: null },
        createdBy: { eq: null },
        totalHashRate24HHr: { gte: null, lte: null },
        totalPowerManufacturer: { gte: null, lte: null },
        itemModelManufacturer: null,
        itemModelId: null,
        hostingSiteId: null,
        itemModelModel: null,
        itemModelName: null,
        priceUsd: {},
        dollarPerTh: {},
      },
    },
  });

  const { data, fetching, error } = result;

  if (fetching)
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  if (error)
    return (
      <View style={styles.center}>
        <Text>Error: {error.message}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <Text style={styles.sortLabel}>
          Sort: {sortOrder} by {sortField}
        </Text>
        <View style={styles.buttons}>
          <Button
            title="Best Deals"
            onPress={() => setSorting("DEAL_SCORE", "DESC")}
          />
          <Button
            title="Newest"
            onPress={() => setSorting("CREATED_AT", "DESC")}
          />
          <Button title="Reset" onPress={resetFilters} />
        </View>
      </View>

      <FlatList
        data={data?.listOffersBundlesWithTotal?.results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OfferCard offer={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  controls: { backgroundColor: "#fff", padding: 16 },
  sortLabel: { fontSize: 14, marginBottom: 8, color: "#666" },
  buttons: { flexDirection: "row", gap: 8, justifyContent: "space-between" },
});
