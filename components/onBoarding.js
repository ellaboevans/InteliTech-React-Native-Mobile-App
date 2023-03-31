import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  Alert,
} from "react-native";

export default function OnBoarding() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const copy = new Date();
  let year = copy.getFullYear();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textLogo}>InteliTech</Text>
        <Text style={styles.slogan}>Let's do this together</Text>
      </View>
      <View style={styles.splashBtn}>
        <View style={styles.loginBtn}>
          <Button
            title="Login"
            color="white"
            onPress={() => navigation.navigate("login")}
          />
        </View>
        <View style={styles.registerBtn}>
          <Button
            title="Register"
            color="white"
            onPress={() => navigation.navigate("register")}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>©{year}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#19647E",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 60,
    height: "100%",
  },
  textLogo: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  slogan: {
    color: "#fff",
    marginTop: 2,
    fontSize: 16,
  },
  splashBtn: {
    width: "100%",
    marginTop: 90,
  },
  loginBtn: {
    backgroundColor: "coral",
    padding: 8,
    marginHorizontal: "5%",
    width: "90%",
    borderRadius: 5,
  },
  registerBtn: {
    borderColor: "coral",
    borderWidth: 1,
    width: "90%",
    padding: 8,
    marginHorizontal: "5%",
    marginTop: 20,
    borderRadius: 5,
    fontWeight: "bold",
  },
  footerText: {
    paddingTop: 50,
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});
