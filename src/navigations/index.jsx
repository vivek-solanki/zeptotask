import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Icons for Tab Navigation

import AllFeatureProduct from "../screens/AllFeatureProduct";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductByBrand from "../screens/ProductByBrand";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductModalScreen from "../screens/ProductModalScreen";
import SubCategoryProductScreen from "../screens/SubCategoryProductScreen";
import UserScreen from "../screens/UserScreen";
import SigninScreen from "../screens/SigninScreen";
import SignUpScreen from "../screens/SignupScreen";

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack for Home-related screens
function HomeStack() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <RootStack.Screen
        name="SubCategoryProductScreen"
        component={SubCategoryProductScreen}
      />
      <RootStack.Screen name="ProductsByBrand" component={ProductByBrand} />
      <RootStack.Screen name="AllFeatureProduct" component={AllFeatureProduct} />
      <RootStack.Screen name="CartScreen" component={CartScreen} />
    </RootStack.Navigator>
  );
}

// Stack for User Account-related screens
function UserStack() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="UserScreen" component={UserScreen} />
    </RootStack.Navigator>
  );
}

// Stack for Cart-related screens
function CartStack() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="CartScreen" component={CartScreen} />
    </RootStack.Navigator>
  );
}

// Bottom Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Cart") {
            iconName = "cart";
          } else if (route.name === "User") {
            iconName = "person";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="User" component={UserStack} />
    </Tab.Navigator>
  );
}

// Root Stack for authentication and modal screens
export default function AppNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name="Signin" component={SigninScreen} />
        <RootStack.Screen name="Signup" component={SignUpScreen} />
        <RootStack.Screen name="Main" component={MainTabs} />
      </RootStack.Group>

      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen
          name="ProductModalScreen"
          component={ProductModalScreen}
          options={{
            cardStyle: {
              backgroundColor: "white",
              marginHorizontal: 10,
              marginTop: 100,
              borderRadius: 5,
              overflow: "hidden",
            },
            cardOverlayEnabled: true,
            cardShadowEnabled: true,
            cardOverlay: () => (
              <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
            ),
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
