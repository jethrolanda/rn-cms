import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextInput
} from "react-native";
// import { GlobalStyles } from "../../constants/styles";

function Input({
  label,
  onChangeText,
  value,
  style
}: {
  // children: React.ReactNode;
  label: string;
  onChangeText: (text: string) => void;
  value?: string;
  style?: ViewStyle;
}) {
  return (
    <View style={style}>
      <Text>{label}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    // backgroundColor: GlobalStyles.colors.primary500,
    backgroundColor: "red"
  },
  flat: {
    backgroundColor: "transparent"
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  flatText: {
    color: "#000"
    // color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    // backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
    backgroundColor: "red"
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  }
});
