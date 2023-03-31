import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

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
            className="mt-4 bg-[#f2f2f2] py-5 pl-3 rounded-md"
          />

          <TextInput
            placeholder="Enter your password"
            keyboardType="numbers-and-punctuation"
            className="mt-4 bg-[#f2f2f2] py-5 pl-3 rounded-md"
          />
          <TouchableOpacity>
            <Text className="text-[16px] font-bold text-[#1D2330] text-right mb-1 mt-3">
              Forgot password?
            </Text>
          </TouchableOpacity>

          <View className="bg-[#1D2330] py-2 mt-8 rounded-md">
            <Button
              title="Log In"
              color="white"
              onPress={() => navigation.navigate("home")}
            />
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
