import { View, Text, StyleSheet } from "react-native";

export default function RenderEmpty() {
  return (
    <View style={styles.emptyStateView}>
      <Text style={styles.description}>No articles.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyStateView: {
    alignItems: "center"
  },
  description: {
    fontSize: 16,
    fontWeight: "400"
  }
});
