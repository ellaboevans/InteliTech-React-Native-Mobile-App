import { View, Text, SafeAreaView, TextInput, Button } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const RegisterScreen = () => {
  const [name, setName] = useState("");
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
        .createUserWithEmailAndPassword(email, password, name)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Registered with:", user.email);
        })
        .catch((error) => alert(error.message));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4">
        <Text className="text-[28px] font-bold mt-12 ">Sign Up</Text>
        <Text className=" text-[#bebebe] mb-2 mt-2">
          Kindly register an account with us!
        </Text>
        <View>
          <TextInput
            placeholder="Enter your name"
            keyboardType="default"
            value={name}
            onChangeText={(text) => setName(text)}
            className="mt-4 bg-[#f2f2f2] py-5 pl-3 rounded-md"
          />
          <TextInput
            placeholder="Enter your email"
            keyboardType="default"
            value={email}
            onChangeText={(text) => setEmail(text)}
            className="mt-4 bg-[#f2f2f2] py-5 pl-3 rounded-md"
          />
          <TextInput
            placeholder="Enter your password"
            keyboardType="default"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            className="mt-4 bg-[#f2f2f2] py-5 pl-3 rounded-md"
          />
          <TextInput
            placeholder="Confirm your password"
            keyboardType="default"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
            className="mt-4 bg-[#f2f2f2] py-5 pl-3 rounded-md"
          />
          <View className="bg-[#1D2330] py-2 mt-8 rounded-md">
            <Button title="Register" color="white" onPress={handleSignUp} />
          </View>
          <View className="flex-row items-center justify-evenly mt-4">
            <View className="w-36 h-[1px] bg-[#9EA1AC] "></View>
            <Text className="text-[16px] text-[#9EA1AC]">or</Text>
            <View className="w-36 h-[1px] bg-[#9EA1AC] "></View>
          </View>
          <View className="bg-[#1f57d1] py-2 mt-2 rounded-md">
            <Button title="Sign Up with Facebook" color="white" />
          </View>
          <View className="mt-20 flex-row items-center justify-center space-x-2">
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
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
