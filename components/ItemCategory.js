import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import PopularCards from "./PopularCards";
import Axios from "axios";

const ItemCategroy = ({ title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: "Python developer in Texas, USA",
        page: "1",
        num_pages: "1",
      },
      headers: {
        "X-RapidAPI-Key": "065acb88a4mshe9fab85054aff6fp12ec48jsn47201de46c36",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    Axios.request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

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
