import { useState } from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoalText);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="수강 목표를 입력해보세요!"
          onChangeText={goalInputHandler}
        />
        <Button title="추가하기" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>목표 리스트</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 6,
  },
});
