import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Alert
} from "react-native";

import ModalForm from "./modal";
import { IRootState } from "@/store";
import { TData } from "@/types/item";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  removeBlog,
  toggleModal,
  setEditBlogId
} from "@/store/reducer/blogSlice";
import { useSelector, useDispatch } from "react-redux";

export default function PostsScreen() {
  const dispatch = useDispatch();
  const showModal = useSelector(
    (state: IRootState) => state.blogState.showModal
  );
  const data = useSelector((state: IRootState) => state.blogState.data);

  const confirmDeletion = (id: string) => {
    Alert.alert("Delete Post", "Are you sure you want to delete?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => dispatch(removeBlog(id)) }
    ]);
  };

  const renderItem = ({ item }: { item: TData }) => {
    // console.log(item);
    return (
      <View style={styles.row}>
        {/* <Text style={styles.cell}>{item.id}</Text> */}
        <Text style={styles.cell}>{item.date}</Text>
        <Text style={styles.cell}>{item.title}</Text>
        <View style={{ ...styles.cell, ...styles.action }}>
          <Pressable
            onPress={() => {
              dispatch(setEditBlogId(item.id));
              dispatch(toggleModal(!showModal));
            }}
          >
            <Ionicons name="pencil-outline" color="blue" size={24} />
          </Pressable>

          <Pressable onPress={() => confirmDeletion(item.id)}>
            <Ionicons name="remove-circle-outline" color="blue" size={24} />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <ModalForm />
      <View style={styles.wrapper}>
        <View style={styles.header}>
          {/* <Text style={styles.heading}>ID</Text> */}
          <Text style={styles.heading}>Date</Text>
          <Text style={styles.heading}>Title</Text>
          <Text style={styles.heading}>Action</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item?.id?.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20
    // borderColor: "#000",
    // borderWidth: 2
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  heading: {
    flex: 1,
    fontSize: 15,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    elevation: 1,
    borderRadius: 1
  },
  cell: {
    fontSize: 15,
    textAlign: "center",
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  action: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});
