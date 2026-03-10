import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const coffees = [
    { id: "1", name: "Kopi Susu", price: 18000, tag: "Favorit" },
    { id: "2", name: "Americano", price: 15000, tag: "Hitam" },
    { id: "3", name: "Cappuccino", price: 20000, tag: "Creamy" },
  ];

  const handlePressCoffee = (item) => {
    navigation.navigate("ProductDetail", {
      name: item.name,
      price: item.price,
    });
  };

  const renderCoffeeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handlePressCoffee(item)}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        {item.tag ? (
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.tag}</Text>
          </View>
        ) : null}
      </View>
      <Text style={styles.price}>Rp {item.price.toLocaleString("id-ID")}</Text>
      <Text style={styles.cardSubtitle}>Tap untuk lihat detail</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Menu Kopi</Text>
      <Text style={styles.headerSubtitle}>
        Pilih kopi favoritmu untuk melihat detail
      </Text>

      <FlatList
        data={coffees}
        keyExtractor={(item) => item.id}
        renderItem={renderCoffeeItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  tag: {
    backgroundColor: "#DBEAFE",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagText: {
    fontSize: 11,
    fontWeight: "500",
    color: "#1D4ED8",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#059669",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 4,
  },
});