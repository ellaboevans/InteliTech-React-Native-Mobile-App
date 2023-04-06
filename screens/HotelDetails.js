import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import {
  InformationCircleIcon,
  CameraIcon,
  GiftIcon,
  NewspaperIcon,
  WifiIcon,
  EllipsisHorizontalCircleIcon,
} from "react-native-heroicons/outline";

const HotelDetails = () => {
  const navigation = useNavigation();

  const {
    params: { title, image, rating, address, price, stock, description },
  } = useRoute();
  return (
    <>
      <View className="relative">
        <Image
          source={{
            uri: image,
          }}
          className="w-full h-72 p-2 bg-gray-400 "
        />
        <TouchableOpacity
          className="absolute top-8 left-5 bg-gray-100 p-2 rounded-full"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon size={20} color="#1D2330" />
        </TouchableOpacity>
      </View>
      <ScrollView
        className="-mt-4 flex-1 bg-white rounded-t-[20px] z-10"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View className="p-4 mt-auto">
            <Text className="font-bold text-[25px] text-[#1D2330] mt-2">
              {title}
            </Text>
            <View className="flex-row items-center justify-between">
              <View className="flex-row space-x-1 py-2">
                <MapPinIcon color="gray" opacity={0.5} size={20} />
                <Text className="text-[16px] text-gray-400">{address}</Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <StarIcon size={20} fill={"gold"} />
                <Text className="font-bold">{rating}</Text>
              </View>
            </View>
            <View>
              <Text className="font-bold text-lg mt-1 text-[#1D2330] ">
                Description
              </Text>
              <Text className="text-[#8b8b8b] ">{description}</Text>
            </View>
            <View className="flex-row items-center mt-2 justify-between">
              <Text className="font-semibold text-[16px] text-[#1D2330] ">
                Amenities
              </Text>
              <TouchableOpacity>
                <Text className="text-[#8b8b8b]">View all</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center justify-center space-x-2 mt-3">
              <TouchableOpacity className="p-3 bg-gray-200 rounded-md">
                <WifiIcon size={22} color="#1D2330" />
              </TouchableOpacity>
              <TouchableOpacity className="p-3 bg-gray-200 rounded-md">
                <CameraIcon size={22} color="#1D2330" />
              </TouchableOpacity>
              <TouchableOpacity className="p-3 bg-gray-200 rounded-md">
                <GiftIcon size={22} color="#1D2330" />
              </TouchableOpacity>
              <TouchableOpacity className="p-3 bg-gray-200 rounded-md">
                <NewspaperIcon size={22} color="#1D2330" />
              </TouchableOpacity>
              <TouchableOpacity className="p-3 bg-gray-200 rounded-md">
                <InformationCircleIcon size={22} color="#1D2330" />
              </TouchableOpacity>
              <TouchableOpacity className="p-3 bg-gray-200 rounded-md">
                <EllipsisHorizontalCircleIcon size={22} color="#1D2330" />
              </TouchableOpacity>
            </View>
            <View className=" flex-row items-center justify-between my-6">
              <Text className="font-bold text-xl text-[#1D2330]  ">
                ${price ? `${price}` : "0.00"}
                <Text className="font-normal text-gray-400">/day</Text>
              </Text>
              <TouchableOpacity
                className="p-3 bg-[#1D2330] rounded-md"
                onPress={() =>
                  navigation.navigate("booking", {
                    title,
                    image,
                    rating,
                    address,
                    price,
                  })
                }
              >
                <Text className="font-bold text-[18px] uppercase text-white ">
                  Book Room
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HotelDetails;
