import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import {
  EllipsisVerticalIcon,
  ArrowLeftIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";

const BookingScreen = () => {
  const navigation = useNavigation();

  const {
    params: { title, image, rating, address, price },
  } = useRoute();
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="p-2 ">
        <View className="flex-row items-center justify-between py-1 border-b-2 border-gray-100 ">
          <TouchableOpacity onPress={navigation.goBack}>
            <ArrowLeftIcon size={25} color="#1D2330" />
          </TouchableOpacity>
          <Text className="font-bold text-[20px] capitalize text-center ">
            Book
          </Text>
          <TouchableOpacity
            onPress={() =>
              alert("Oops! Sorry, we're yet to implement this feature")
            }
          >
            <EllipsisVerticalIcon size={25} color="#1D2330" />
          </TouchableOpacity>
        </View>
        <ScrollView className="h-full" showsVerticalScrollIndicator={false}>
          <View className="flex-row items-start space-x-2 bg-white shadow-xl rounded-lg mt-6 p-2">
            <Image
              source={{
                uri: image,
              }}
              className="w-28 h-28 p-2 rounded-lg bg-gray-400 "
            />
            <View className="mt-2 pl-2">
              <Text className="font-bold text-[18px] text-[#1D2330]  ">
                {title}
              </Text>
              <View className="flex-row items-center space-x-1 py-1">
                <MapPinIcon size={20} color="#1D2330" opacity={0.5} />
                <Text className="text-[#8b8b8b]">{address}</Text>
              </View>
              <View className="flex-row items-center space-x-2">
                <StarIcon size={20} fill={"gold"} />
                <Text className="text-[#8b8b8b]">{rating}</Text>
              </View>
              <Text className="font-bold text-lg ml-1 text-[#1D2330]  ">
                ${price}
                <Text className="font-normal text-gray-400">/day</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;
