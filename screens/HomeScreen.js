import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeftOnRectangleIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { auth } from "../firebase";
import ItemCategory from "../components/ItemCategory";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Popular",
    },
    {
      id: 2,
      title: "Suggestions",
    },
    {
      id: 3,
      title: "Discounts",
    },
  ]);
  const navigation = useNavigation();

  console.log(searchText);

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
  {
    /* <View>
    <Text className="text-center font-bold text-[25px] mt-8 ">
      HomeScreen
    </Text>
    <Text className="text-center font-bold text-lg mt-16">
      Email: {auth.currentUser?.email}
    </Text>
    <View className="bg-[#1D2330] w-[80%] items-center mx-auto py-2 mt-8 rounded-md">
      <Button title="Sign out" color="white" onPress={handleSignOut} />
    </View>
  </View> */
  }

  return (
    <SafeAreaView className="bg-white flex-1 ">
      <View className="px-4 mt-8">
        <View className="flex-row  items-center justify-between">
          <View>
            <Text className="text-lg text-[22px] text-[#8b8b8b]">
              Let's find you a
            </Text>
            <Text className="font-bold text-3xl text-[#1D2330]">
              place to sleep
            </Text>
          </View>
          <TouchableOpacity
            className="border border-gray-400 w-10 h-10 items-center justify-center rounded-md"
            onPress={handleSignOut}
          >
            <ArrowLeftOnRectangleIcon color="black" opacity={0.6} size={28} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center mt-4 mb-2 space-x-2">
          <View className=" flex-1  flex-row items-center  bg-[#f2f2f2] py-3 pl-3 rounded-md">
            <MagnifyingGlassIcon color="gray" size={25} opacity={0.5} />
            <TextInput
              placeholder="Search for a place..."
              placeholderTextColor={"#bebebe"}
              keyboardType="default"
              value={searchText.trim()}
              onChangeText={(text) => setSearchText(text)}
              className="w-60"
            />
          </View>
          <TouchableOpacity className="bg-[#1D2330] w-11  py-2 items-center justify-center rounded-md">
            <AdjustmentsVerticalIcon color="white" size={30} opacity={1} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
        <View>
          {/* Popular Components */}
          {categories.map((category) => (
            <ItemCategory key={category.id} title={category.title} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
