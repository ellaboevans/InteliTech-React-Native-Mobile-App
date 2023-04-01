import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("home");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4">
        <Text className="text-[28px] font-bold mt-12 ">Sign In</Text>
        <Text className="text-xm text-[#bebebe] mb-2 mt-2">
          Please Sign In into your account!
        </Text>
        <View>
          <TextInput
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            className="mt-4 bg-[#f2f2f2] py-5 pl-3 rounded-md"
          />

          <TextInput
            placeholder="Enter your password"
            keyboardType="numbers-and-punctuation"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            className="mt-4 bg-[#f2f2f2] py-5 pl-3 rounded-md"
          />
          <TouchableOpacity>
            <Text className="text-[16px] font-bold text-[#1D2330] text-right mb-1 mt-3">
              Forgot password?
            </Text>
          </TouchableOpacity>

          <View className="bg-[#1D2330] py-2 mt-8 rounded-md">
            <Button title="Log In" color="white" onPress={handleLogin} />
          </View>
          <View className="flex-row items-center justify-evenly mt-4">
            <View className="w-36 h-[1px] bg-[#9EA1AC] "></View>
            <Text className="text-[16px] text-[#9EA1AC]">or</Text>
            <View className="w-36 h-[1px] bg-[#9EA1AC] "></View>
          </View>
          <View className="bg-[#1f57d1] py-2 mt-2 rounded-md">
            <Button title="Log In with Facebook" color="white" />
          </View>
          <View className="mt-20 flex-row items-center justify-center space-x-2">
            <Text className="text-center   text-[#1D2330] text-[16px]">
              Need an account?
            </Text>
            <Text
              className="font-bold text-lg"
              onPress={() => navigation.navigate("register")}
            >
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
