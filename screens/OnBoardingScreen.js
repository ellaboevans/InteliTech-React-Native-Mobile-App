import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";

export default function OnBoardingScreen() {
  const navigation = useNavigation();

  // Get current year
  const copy = new Date();
  let year = copy.getFullYear();

  return (
    <SafeAreaView className="bg-[#19647E] flex-1 items-center justify-around">
      <View>
        <Animatable.Text
          animation="fadeIn"
          easing="ease-in-out"
          className="text-white text-center text-4xl font-bold"
        >
          InteliTech
        </Animatable.Text>
        <Text className="text-sm text-center text-white">
          Let's do this together
        </Text>
      </View>
      <View className="w-full mt-28">
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Animatable.View
            className="bg-orange-500 mx-5 py-5 rounded-md mb-5"
            animation="zoomIn"
            easing="ease-in"
          >
            <Text className="text-center font-semibold text-[18px] text-white  ">
              Get Started
            </Text>
          </Animatable.View>
        </TouchableOpacity>
        <View>
          <Text className="text-center text-white text-sm ">
            Powered by Concept ©{year}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
