import { View, Text, SafeAreaView, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Signed out successful");
        navigation.replace("login");
      })
      .catch((error) => alert(error.message));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      <View>
        <Text className="text-center font-bold text-[25px] mt-8 ">
          HomeScreen
        </Text>
        <Text className="text-center font-bold text-lg mt-16">
          Email: {auth.currentUser?.email}
        </Text>
        <View className="bg-[#1D2330] w-[80%] items-center mx-auto py-2 mt-8 rounded-md">
          <Button title="Sign out" color="white" onPress={handleSignOut} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
