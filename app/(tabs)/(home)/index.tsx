import { View, Text, StyleSheet, FlatList } from "react-native";
import RenderEmpty from "@/components/RenderEmpty";
import ArticleCard from "@/components/ArticleCard";
import { TData } from "@/types/item";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { ThemeContext } from "@/context/ThemeContext";
import Colors, { primaryColor } from "@/constants/Colors";

export default function HomeScreen() {
  const data = useSelector((state: IRootState) => state.blogState.data);
  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
        <FlatList
          ListEmptyComponent={RenderEmpty}
          data={data}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.title}> Welcome to MY Blog</Text>
              <Text style={styles.content}>
                Here, you'll find a lot of stuff that contains stuff about a lot
                of stuff. You could almost say it's a blog for stuff
              </Text>
            </View>
          }
          renderItem={({ item }: { item: TData }) => {
            return <ArticleCard item={item} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee"
  },
  pageContainer: {
    paddingHorizontal: 20
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#f4511e",
    paddingVertical: 20
  },
  title: {
    fontSize: 22,
    marginVertical: 5,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center"
  },
  content: {
    textAlign: "center"
  },
  description: {
    fontSize: 16,
    fontWeight: "400"
  }
});
