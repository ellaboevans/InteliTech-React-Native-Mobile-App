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
      address: "Ayeduase, KNUST",
      price: 250.55,
      stock: false,
      description: `Canam Hall offers you a privileged experience combining comfort and conviviality. Whether you are a backpacker, a solo traveler or with your family, our hotel with top-of-the-range service will meet all your expectations. More than just a hotel, (HN) offers you a place to live and meet people.`,
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
      description: `The Victory Towers Annex hotel offers a complete experience with common areas that allow you to meet new people in a unique atmosphere. Lounge area, Ping Pong table, table soccer, darts & Boiler room: we told you, it’s not a hotel like the others, it’s a sharing hotel.`,
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
      description: `Our Evandy Annex Hotel is in a superb location with friendly and helpful staff. The hostel offers comfortable, clean rooms and fantastic access to most famous sights and attractions.`,
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
      description: `St. Theresah's Hotel & Spa is a family-friendly hotel that offers a wide range of accommodation types, from rooms to suites. All this in the peaceful surroundings of our beautiful gardens, will make your time at an unforgettable holiday.`,
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
      description: `Our Wantapa Hotel is in a superb location with friendly and helpful staff. The hostel offers comfortable, clean rooms and fantastic access to most famous sights and attractions.`,
    },
  ]);

  useEffect(() => {});
  return (
    <>
      <View className="flex-row items-center mt-8">
        <Text className="font-bold text-[#1D2330] text-[18px] flex-1">
          {title ? `${title}` : "Not set"}
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
              description={item.description}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default ItemCategroy;
