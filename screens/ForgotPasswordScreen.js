import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../firebase";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  console.log(email);

  const handlePasswordReset = () => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("Verification Sent to:", email);
        navigation.replace("login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView className="px-4 mt-14">
        <Text className="text-[28px] font-bold mt-12 ">Forgot Password?</Text>
        <Text className="text-sm text-[#bebebe] mb-2 mt-2">
          Kindly check your email inbox to complete the process.
        </Text>
        <Text className="text-sm text-[#bebebe]">Thank you!</Text>
        <View>
          <TextInput
            placeholder="Enter your email for verification"
            placeholderTextColor={"#bebebe"}
            keyboardType="email-address"
            value={email.trim()}
            onChangeText={(text) => setEmail(text)}
            className="mt-4 bg-[#f2f2f2] py-5 pl-3 rounded-md"
          />
        </View>
        <TouchableOpacity
          className="bg-[#1D2330] py-4 mt-8 rounded-md"
          onPress={handlePasswordReset}
        >
          <Text className="text-white text-center font-semibold text-[18px] uppercase ">
            Reset Password
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
