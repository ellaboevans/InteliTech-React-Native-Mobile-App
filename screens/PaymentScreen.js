import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  EllipsisVerticalIcon,
  ArrowLeftIcon,
  CreditCardIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCreditCardNumberChange = (value) => {
    // Remove all non-digit characters
    const sanitizedValue = value.replace(/\D/g, "");
    // Add space every 4 characters
    const formattedValue = sanitizedValue.replace(/(\d{4})/g, "$1 ");

    setCardNumber(formattedValue);
  };

  const handlePayment = () => {
    alert("Oops! Sorry, we're yet to Route this feature");
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
  };

  const {
    params: { startDate, endDate, title, image, rating, address, price },
  } = useRoute();

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-2 ">
        <View className="flex-row items-center justify-between py-1 border-b-2 border-gray-100 ">
          <TouchableOpacity onPress={navigation.goBack}>
            <ArrowLeftIcon size={25} color="#1D2330" />
          </TouchableOpacity>
          <Text className="font-bold text-[20px] capitalize text-center ">
            payment
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
          <View className="">
            <View className="mt-3 flex-row items-center justify-between">
              <Text className="font-semibold text-[16px] text-[#1D2330] ">
                Date
              </Text>
              <Text className="font-bold text-sm text-[#8b8b8b] underline ">
                Edit
              </Text>
            </View>
            <View className="py-2">
              <Text className="text-[#8b8b8b] mb-2">
                {startDate} - {endDate}
              </Text>
              <View>
                <Text className="font-semibold text-[16px] text-[#1D2330] py-2 ">
                  Price
                </Text>
                <View className="flex-row items-center justify-between">
                  <Text className="text-[#8b8b8b] mb-2">${price} x 23 day</Text>
                  <Text className="font-semibold text-[16px] text-[#1D2330]">
                    $6000
                  </Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-[#8b8b8b] mb-2">Service fee</Text>
                  <Text className="font-semibold text-[16px] text-[#1D2330]">
                    $300
                  </Text>
                </View>
                <View className="border-b-2 border-gray-100 my-2"></View>
                <View className="flex-row items-center justify-between mb-4">
                  <Text className="font-semibold text-[16px] text-[#1D2330]">
                    Total
                  </Text>
                  <Text className="font-semibold text-[16px] text-[#1D2330]">
                    $6300
                  </Text>
                </View>
                <View>
                  <Text className="font-semibold text-[16px] mb-2">
                    Payment Method
                  </Text>
                  <TouchableOpacity
                    className="p-2 w-14 mb-2 items-center rounded-md border"
                    onPress={() =>
                      alert("Sorry We are yet to integrate payment system")
                    }
                  >
                    <CreditCardIcon size={30} color="#1D2330" opacity={0.8} />
                  </TouchableOpacity>
                  <View>
                    <Text className="text-[#8b8b8b] mb-2 mt-2">
                      Card Number
                    </Text>
                    <View className="py-3 bg-gray-200 rounded-md">
                      <TextInput
                        placeholder="0000 0000 0000 0000"
                        keyboardType="numeric"
                        value={cardNumber}
                        onChangeText={handleCreditCardNumberChange}
                        className="p-1"
                      />
                    </View>
                    <View className="my-5 flex-row items-center justify-around">
                      <View>
                        <Text className="text-[#8b8b8b] w-40 -ml-1 mb-2">
                          Expire Date
                        </Text>
                        <View className="py-3 bg-gray-200  -ml-2 rounded-md">
                          <TextInput
                            placeholder="MM/YY"
                            keyboardType="default"
                            value={expiryDate}
                            onChangeText={(text) => setExpiryDate(text)}
                            className="p-1 "
                          />
                        </View>
                      </View>
                      <View>
                        <Text className="text-[#8b8b8b] w-40 mb-2">CVV</Text>
                        <View className="py-3 bg-gray-200 rounded-md">
                          <TextInput
                            placeholder="****"
                            secureTextEntry
                            keyboardType="numeric"
                            value={cvv}
                            onChangeText={(text) => setCvv(text)}
                            className="p-1"
                          />
                        </View>
                      </View>
                    </View>
                    <View className="flex-row items-center justify-between my-9">
                      <View>
                        <Text className="text-[#8b8b8b] text-sm ">Total</Text>
                        <Text className="font-semibold text-[20px] text-[#1D2330]">
                          $6300
                        </Text>
                      </View>
                      <TouchableOpacity
                        className="py-4 bg-[#1D2330] rounded-md"
                        onPress={handlePayment}
                      >
                        <Text className="uppercase font-bold text-center text-white text-[20px] w-44 ">
                          Pay
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
