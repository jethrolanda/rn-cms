import { View, StyleSheet, Text, Image } from "react-native";
import { useLocalSearchParams, useGlobalSearchParams, Link } from "expo-router";
import { Card } from "react-native-paper";

export default function DetailsScreen() {
  // const glob = useGlobalSearchParams();
  const { title, date, content, imageURI } = useLocalSearchParams();

  console.log(imageURI);
  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      </Card>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 8
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
    fontWeight: "600"
  },
  description: {
    fontSize: 16,
    fontWeight: "400"
  },
  date: {
    fontSize: 13,
    color: "grey"
  },
  image: {
    width: 200,
    height: 200
  }
});
