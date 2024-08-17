import { router } from "expo-router";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity
} from "react-native";
import { TData } from "@/types/item";

export default function ArticleCard({ item }: { item: TData }) {
  const { id, title, date, content, imageURI } = item;

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(
          `/details?id=${id}&title=${title}&date=${date}&content=${content}&imageURI=${imageURI}`
        );
      }}
    >
      <View style={styles.container}>
        <View>
          {/* <Link
            href={{
              pathname: "/details/[id]",
              params: { id }
            }}
          > */}
          <Text style={styles.title}>{title}</Text>
          {/* </Link> */}

          <Text style={styles.date}>{date}</Text>
          <Text style={styles.description}>{content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
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
  }
});
