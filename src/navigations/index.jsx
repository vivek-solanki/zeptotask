import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
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

export default function index() {
  return (
    <RootStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <RootStack.Group>
        <RootStack.Screen name="Signin" component={SigninScreen} />
        <RootStack.Screen name="Signup" component={SignUpScreen} />
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
        />
        <RootStack.Screen
          name="SubCategoryProductScreen"
          component={SubCategoryProductScreen}
        />
        <RootStack.Screen name="ProductsByBrand" component={ProductByBrand} />
        <RootStack.Screen
          name="AllFeatureProduct"
          component={AllFeatureProduct}
        />
        <RootStack.Screen name="UserScreen" component={UserScreen} />
        <RootStack.Screen name="CartScreen" component={CartScreen} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen
          name="ProductModalScreen"
          component={ProductModalScreen}
        />
        <RootStack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{
            presentation: "modal",
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
