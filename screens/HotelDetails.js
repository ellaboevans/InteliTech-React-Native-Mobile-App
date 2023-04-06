import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const HotelDetails = () => {
  const navigation = useNavigation();

  const {
    params: { title, image, rating, address, price, stock },
  } = useRoute();
  return (
    <SafeAreaView>
      <View className="relative">
        <Image
          source={{
            uri: image,
          }}
          className="w-full h-60 p-2 bg-gray-400"
        />
        <TouchableOpacity
          className="absolute top-8 left-5 bg-white p-2 rounded-full"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon size={20} color="#1D2330" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HotelDetails;
