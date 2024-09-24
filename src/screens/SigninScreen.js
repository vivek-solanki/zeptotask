import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("userToken").then((token) => {
      if (token) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("SignIn");
      }
    });
  });

  const handleSignIn = async () => {
    if (email === "vivekssism@gmail.com" && password === "Admin@123") {
      try {
        await AsyncStorage.setItem("userToken", "dummy-auth-token");
        navigation.navigate("Home");
      } catch (e) {
        console.error("Failed to save user token");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View></View>
      <View className="flex-1 justify-center items-center bg-white px-4">
        <Text className="text-3xl font-bold mb-8">Sign In</Text>

        <TextInput
          className="border border-gray-300 rounded-md w-full p-4 mb-4"
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <View className="border border-gray-300 rounded-md w-full flex-row items-center mb-4 p-4">
          <TextInput
            className="flex-1"
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="bg-blue-500 w-full p-4 rounded-md"
          onPress={handleSignIn}
        >
          <Text className="text-white text-center text-lg">Sign In</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-600">Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text className="text-blue-500 ml-2">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
