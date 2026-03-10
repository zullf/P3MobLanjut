import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList, DrawerItem, } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";

import HomeTabs from "./HomeTabs";
import CartScreen from "../screens/cart/CartScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { logout } = useAuth();

  const user = {
    name: "Zulfikar",
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      <View style={styles.profileSection}>
        <Image
          source={require("../assets/Profile.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{user.name}</Text>
      </View>

      <DrawerItemList {...props} />

      <View style={styles.logoutSection}>
        <DrawerItem
          label="Logout"
          onPress={logout}
          icon={({ color, size }) => (
            <Ionicons name="log-out" size={size} color={color} />
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: { backgroundColor: "#F5F5F5", width: 280 },
        drawerActiveTintColor: "#1565C0",
        drawerInactiveTintColor: "#37474F",
        headerStyle: { backgroundColor: "#1565C0" },
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeTabs}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          drawerLabel: "Cart",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cart" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: "Profile",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    marginBottom: 8,
  },
  profileImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 8,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  logoutSection: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
});