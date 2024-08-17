import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
// import { GlobalStyles } from "../../constants/styles";

function Button({
  children,
  onPress,
  mode,
  style
}: {
  children: React.ReactNode;
  onPress: () => void;
  mode?: string;
  style?: ViewStyle;
}) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

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
  }
});
