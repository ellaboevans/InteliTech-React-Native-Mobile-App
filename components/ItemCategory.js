import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import PopularCards from "./PopularCards";
import Axios from "axios";

const ItemCategroy = ({ title }) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Canam Hall",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.1,
      address: "Accra, Ghana",
      price: 250.55,
      stock: false,
    },
    {
      id: 2,
      title: "Victory Towers Annex",
      image:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      address: "Cape Coast, Ghana",
      price: 180.98,
      stock: true,
    },
    {
      id: 3,
      title: "Evandy Annex Hotel",
      image:
        "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 3.9,
      address: "Winneba, Ghana",
      price: 250.55,
      stock: false,
    },
    {
      id: 4,
      title: "St. Theresah's Hotel",
      image:
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 3.2,
      address: "Tamale, Ghana",
      price: 180.98,
      stock: true,
    },
    {
      id: 5,
      title: "Wantapa Hotel",
      image:
        "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 3.3,
      address: "Koforidua, Ghana",
      price: 100.51,
      stock: false,
    },
  ]);

  useEffect(() => {});
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
          {data.map((item) => (
            <PopularCards
              key={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              address={item.address}
              price={item.price}
              stock={item.stock}
            />
          ))}
          {/* <PopularCards
            image="https://cdn.pixabay.com/photo/2023/03/29/10/00/cherry-blossom-7885057__340.jpg"
            title="Coworking Space"
            rating={4.9}
            address="Newburry Street, Boston"
            price={250.89}
          /> */}
        </View>
      </ScrollView>
    </>
  );
};

export default ItemCategroy;
