import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function ProductDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { name, price } = route.params;

  const getImageSource = () => {
    if (name === "Kopi Susu") {
      return {
        uri: "https://images.pexels.com/photos/373888/pexels-photo-373888.jpeg?auto=compress&cs=tinysrgb&w=800",
      };
    }
    if (name === "Americano") {
      return {
        uri: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800",
      };
    }
    if (name === "Cappuccino") {
      return {
        uri: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=800",
      };
    }

    return {
      uri: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={getImageSource()} style={styles.image} />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>Rp {price.toLocaleString("id-ID")}</Text>
        <Text style={styles.description}>
          Nikmati kopi pilihan dengan rasa terbaik untuk menemani harimu.
        </Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Kembali</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#059669",
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: "#2563EB",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});