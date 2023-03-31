import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const ChangeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="Add new todo..."
        onChangeText={ChangeHandler}
        style={styles.input}
      />
      <View style={styles.btnContainer}>
        <Button
          onPress={() => console.log(submitHandler(text))}
          title="Add to do"
          color="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  btnContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "coral",
    borderRadius: 5,
  },
});
