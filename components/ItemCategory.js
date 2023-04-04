import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import PopularCards from "./PopularCards";

const ItemCategroy = ({ title }) => {
  return (
    <>
      <View className="flex-row items-center mt-8">
        <Text className="font-bold text-[#1D2330] text-[18px] flex-1">
          {title ? title : "Not set"}
        </Text>
        <TouchableOpacity>
          <Text className="text-[15px] text-gray-400">View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="py-4  space-x-2 items-center flex-row ">
          <PopularCards
            image="https://cdn.pixabay.com/photo/2023/03/29/10/00/cherry-blossom-7885057__340.jpg"
            title="Coworking Space"
            rating={4.9}
            address="Newburry Street, Boston"
            price={250.89}
          />
          <PopularCards />
          <PopularCards />
          <PopularCards />
          <PopularCards />
        </View>
      </ScrollView>
    </>
  );
};

export default ItemCategroy;
