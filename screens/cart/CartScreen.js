import React, { useCallback } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function CartScreen() {
  useFocusEffect(
    useCallback(() => {
      console.log("Cart dibuka - refresh data");

      return () => {
        console.log("Cart ditinggalkan");
      };
    }, [])
  );

  const cartItems = [
    { id: "1", name: "Kopi Susu", price: 18000, qty: 1 },
    { id: "2", name: "Americano", price: 15000, qty: 2 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>
          Rp {item.price}
        </Text>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.itemQty}>x{item.qty}</Text>
        <Text style={styles.itemSubtotal}>
          Rp {(item.price * item.qty)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keranjang</Text>
      <Text style={styles.subtitle}>Ringkasan pesanan kopi kamu</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
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
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  itemCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  itemLeft: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  itemPrice: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },
  itemRight: {
    alignItems: "flex-end",
  },
  itemQty: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4B5563",
  },
  itemSubtotal: {
    fontSize: 14,
    fontWeight: "600",
    color: "#059669",
    marginTop: 2,
  },
});