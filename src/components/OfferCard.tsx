import { Pressable, StyleSheet, Text, View } from 'react-native';

interface OfferCardProps {
  offer: {
    id: string;
    description: string;
    hostingSiteName: string;
    totalHashRate: number;
    totalPower: number;
    energyPrice: number;
    pricePerTh?: {
      dollarPerTh: number;
    };
    offerBundle?: {
      dealScoreDetails?: {
        dealScore: number;
      };
    };
  };
}

export default function OfferCard({ offer }: OfferCardProps) {
  return (
    <Pressable style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{offer.description}</Text>
        {offer.offerBundle?.dealScoreDetails && (
          <Text style={styles.score}>
            Score: {offer.offerBundle.dealScoreDetails.dealScore}
          </Text>
        )}
      </View>
      
      <Text style={styles.location}>{offer.hostingSiteName}</Text>
      
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.label}>Hash Rate</Text>
          <Text style={styles.value}>{offer.totalHashRate} TH/s</Text>
        </View>
        
        <View style={styles.stat}>
          <Text style={styles.label}>Power</Text>
          <Text style={styles.value}>{offer.totalPower} kW</Text>
        </View>
        
        <View style={styles.stat}>
          <Text style={styles.label}>Energy Price</Text>
          <Text style={styles.value}>${offer.energyPrice}</Text>
        </View>
      </View>
      
      {offer.pricePerTh && (
        <Text style={styles.price}>
          ${offer.pricePerTh.dollarPerTh}/TH
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  score: {
    fontSize: 16,
    fontWeight: '700',
    color: '#10b981',
  },
  location: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  stat: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3b82f6',
    textAlign: 'right',
  },
});
