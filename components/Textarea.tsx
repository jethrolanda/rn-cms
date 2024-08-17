import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
  Text
} from "react-native";
// import { GlobalStyles } from "../../constants/styles";

function Textarea({
  // children,
  label,
  onChangeText,
  style,
  value
}: {
  // children: React.ReactNode;
  label: string;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
  value?: string;
}) {
  return (
    <View style={style}>
      <Text>{label}</Text>
      <TextInput
        multiline={true}
        numberOfLines={10}
        onChangeText={onChangeText}
        style={styles.textInput}
        value={value}
      />
    </View>
  );
}

export default Textarea;

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
    height: 200,
    textAlignVertical: "top",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  }
});
