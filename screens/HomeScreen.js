import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
