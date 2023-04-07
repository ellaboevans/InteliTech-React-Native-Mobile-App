import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import {
  EllipsisVerticalIcon,
  ArrowLeftIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { TextInput } from "react-native";

const BookingScreen = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const navigation = useNavigation();

  const handleBooking = () => {
    console.log(startDate, endDate, fullName, mobileNumber);
    navigation.navigate("payment", {
      startDate,
      endDate,
      title,
      image,
      rating,
      address,
      price,
    });

    setStartDate("");
    setEndDate("");
    setFullName("");
    setMobileNumber("");
  };

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
        <ScrollView className="h-full p-2" showsVerticalScrollIndicator={false}>
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
          <KeyboardAvoidingView className="mt-8">
            <Text className="font-bold text-[18px] text-[#1D2330] ">Date</Text>
            <View className="flex-row items-center  justify-around flex-1">
              <View>
                <Text className="text-sm w-36 text-gray-400 mt-4 ml-3">
                  From
                </Text>
                <View className="bg-gray-200 py-3 rounded-md">
                  <TextInput
                    autoCorrect={false}
                    autoComplete="off"
                    placeholder="Start Date"
                    value={startDate}
                    onChangeText={(text) => setStartDate(text)}
                    className="p-1"
                  />
                </View>
              </View>
              <View>
                <Text className="text-sm w-36 text-gray-400 mt-4 ml-3">To</Text>
                <View className="bg-gray-200 py-3 rounded-md">
                  <TextInput
                    autoCorrect={false}
                    autoComplete="off"
                    placeholder="End Date"
                    value={endDate}
                    onChangeText={(text) => setEndDate(text)}
                    className="p-1"
                  />
                </View>
              </View>
            </View>
            <View>
              <Text className="font-bold text-[18px] my-4 ">
                Personal Information
              </Text>
              <Text className="text-sm w-36 text-gray-400 mb-1 ml-2">
                Full Name
              </Text>

              <View className="py-3 bg-gray-200 rounded-md mb-3">
                <TextInput
                  autoComplete="off"
                  autoCorrect={false}
                  keyboardType="default"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChangeText={(text) => setFullName(text)}
                  className="p-1"
                />
              </View>
              <Text className="text-sm w-36 text-gray-400 mb-1 ml-2">
                Mobile Number
              </Text>
              <View className="py-3 bg-gray-200 rounded-md">
                <TextInput
                  autoComplete="off"
                  autoCorrect={false}
                  keyboardType="numeric"
                  placeholder="Enter your mobile number"
                  value={mobileNumber}
                  onChangeText={(text) => setMobileNumber(text)}
                  className="p-1"
                />
              </View>
              <TouchableOpacity
                className="bg-[#1D2330] py-3 rounded-md mt-6"
                onPress={handleBooking}
              >
                <Text className="text-white font-bold uppercase text-[18px] text-center p-1 ">
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;
