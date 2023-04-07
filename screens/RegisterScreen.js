import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("home");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    if (password != confirmPassword) {
      alert("Password does not match!");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Registered with:", user.email);
        })
        .catch((error) => alert(error.message));

      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView className="px-4 mt-8">
        <Text className="text-[28px] font-bold text-[#1D2330] mt-12 ">
          Get an account!
        </Text>
        <Text className=" text-[#bebebe] mb-2 mt-2">
          Kindly register an account with us!
        </Text>
        <View>
          <TextInput
            placeholder="Enter your email"
            keyboardType="default"
            autoCorrect={false}
            autoComplete="off"
            value={email.trim()}
            onChangeText={(text) => setEmail(text)}
            className="mt-4 bg-[#f2f2f2] py-5 pl-3 rounded-md"
          />
          <TextInput
            placeholder="Enter your password"
            keyboardType="default"
            autoComplete="off"
            autoCorrect={false}
            value={password.trim()}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            className="mt-4 bg-[#f2f2f2] py-5 pl-3 rounded-md"
          />
          <TextInput
            placeholder="Confirm your password"
            keyboardType="default"
            value={confirmPassword.trim()}
            autoComplete="off"
            autoCorrect={false}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
            className="mt-4 bg-[#f2f2f2] py-5 pl-3 rounded-md"
          />
          <TouchableOpacity
            className="bg-[#1D2330] py-4 mt-8 rounded-md"
            onPress={handleSignUp}
          >
            <Text className="text-white text-center font-semibold text-[18px] uppercase">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row items-center justify-evenly mt-4">
            <View className="w-36 h-[1px] bg-[#9EA1AC] "></View>
            <Text className="text-[16px] text-[#9EA1AC]">or</Text>
            <View className="w-36 h-[1px] bg-[#9EA1AC] "></View>
          </View>
          <TouchableOpacity
            className="bg-[#1877F2] py-4 mt-4 rounded-md"
            onPress={() => alert("We're yet to integrate this feature!")}
          >
            <Text className="text-white text-center font-semibold text-[18px] uppercase">
              Sign Up in with Facebook
            </Text>
          </TouchableOpacity>
          <View className="mt-8 flex-row items-center justify-center space-x-2">
            <Text className="text-center   text-[#1D2330] text-[16px]">
              Already have an account?
            </Text>
            <Text
              className="font-bold text-lg"
              onPress={() => navigation.navigate("login")}
            >
              Log In
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
