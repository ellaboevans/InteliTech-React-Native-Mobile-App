import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import HomeScreen from "./screens/HomeScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="onboarding"
          component={OnBoardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="forgotpassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
