import { StyleSheet, View, Text } from "react-native";

export default function Footer({ year }) {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>All Right Reserved. {year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "coral",
    marginTop: 50,
    justifyContent: "flex-end",
  },
  footerText: {
    textAlign: "center",
    fontSize: 5,
    color: "white",
    padding: 10,
  },
});
