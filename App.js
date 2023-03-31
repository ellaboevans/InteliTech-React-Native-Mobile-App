import { StyleSheet, SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import OnBoarding from "./components/onBoarding";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="onboarding" component={OnBoarding} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#424242",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
