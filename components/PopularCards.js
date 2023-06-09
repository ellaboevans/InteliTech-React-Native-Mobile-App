import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const PopularCards = ({
  title,
  image,
  rating,
  address,
  price,
  stock,
  description,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("hotelDetails", {
          title,
          image,
          rating,
          address,
          price,
          stock,
          description,
        })
      }
    >
      <View className="mx-2 ">
        <View className="p-1 bg-white shadow-md rounded-md">
          <Image
            source={{
              uri: image ? image : "https://picsum.photos/200/300",
            }}
            className="w-60 h-44 object-cover rounded-lg"
          />
          <View className="p-2">
            <View className=" flex-row space-x-2 items-center my-2">
              {title ? (
                <Text className="font-bold text-[#1D2330] text-[19px] flex-1">
                  {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
                </Text>
              ) : (
                <Text className="font-bold text-[#1D2330] text-[19px] flex-1">
                  No title
                </Text>
              )}
              <View className="flex-row items-center space-x-1">
                <StarIcon size={20} fill={"gold"} />
                <Text className="text-gray-400">
                  {rating ? `${rating}` : "No rating"}
                </Text>
              </View>
            </View>
            <View className="space-y-2 ">
              <View className="flex-row space-x-1">
                <MapPinIcon color="gray" opacity={0.5} size={20} />
                <Text className="text-sm text-gray-400">
                  {address ? `${address}` : "There's no address"}
                </Text>
              </View>
              <View className="flex-row items-center my-2 justify-between ">
                <Text className="font-bold text-xl text-[#1D2330]  ">
                  ${price ? `${price}` : "0.00"}
                  <Text className="font-normal text-gray-400">/day</Text>
                </Text>
                <TouchableOpacity className="bg-[#1D2330] p-1 px-2 rounded-md">
                  {stock ? (
                    <Text className="font-semibold text-xs text-white ">
                      Vacant Space
                    </Text>
                  ) : (
                    <Text className="font-semibold text-xs text-white ">
                      No Space
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularCards;
