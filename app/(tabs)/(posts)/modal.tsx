import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { toggleModal } from "@/store/reducer/blogSlice";
import { TData } from "@/types/item";
import { IRootState } from "@/store";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { addBlog, setEditBlogId, updateBlog } from "@/store/reducer/blogSlice";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-native-uuid";
import ImagePicker from "@/components/ImagePicker";

export default function ModalForm() {
  const dispatch = useDispatch();
  const showModal = useSelector(
    (state: IRootState) => state.blogState.showModal
  );
  const data = useSelector((state: IRootState) => state.blogState.data);
  const edit = useSelector((state: IRootState) => state.blogState.edit);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageURI, setImageURI] = useState("");

  const onChangeTitle = (text: string) => {
    setTitle(text);
  };
  const onChangeContent = (text: string) => {
    setContent(text);
  };

  // console.log(JSON.stringify(errors, null, "\t"));
  const onSubmit = () => {
    if (title !== "" && content !== "" && imageURI !== "") {
      if (edit !== "") {
        console.log("successfully updated");

        const updated = data.map((el) => {
          return el.id === edit
            ? {
                title,
                content,
                date: new Date().toLocaleString(),
                id: edit,
                imageURI
              }
            : el;
        });

        dispatch(updateBlog(updated));
        // updateBlogPost({
        //   id: edit,
        //   post: [
        //     {
        //       title,
        //       content,
        //       date: new Date().toLocaleString(),
        //       id: edit
        //     }
        //   ],
        //   cb: () => {}
        // });
        Alert.alert("Post Updated", "The post is successfully updated!");
      } else {
        console.log("successfully added");
        dispatch(
          addBlog({
            title,
            content,
            date: new Date().toLocaleString(),
            id: uuid.v4(),
            imageURI
          })
        );
        Alert.alert("Post Added", "The post is successfully added!");
      }
      setTitle("");
      setContent("");
      setImageURI("");
      dispatch(toggleModal(!showModal));
      dispatch(setEditBlogId(""));
    }
  };

  useEffect(() => {
    if (showModal && edit !== "" && data.length > 0) {
      const post = data.filter((el: TData) => el.id === edit)[0];

      setTitle(post.title);
      setContent(post.title);
    }
  }, [showModal, edit]);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          dispatch(toggleModal(!showModal));
          dispatch(setEditBlogId(""));
          setTitle("");
          setContent("");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                {edit !== "" ? "Edit Post" : "Add New Post"}
              </Text>
              <Pressable
                style={{ alignSelf: "flex-end", padding: 10 }}
                onPress={() => {
                  dispatch(toggleModal(!showModal));
                  dispatch(setEditBlogId(""));
                  setTitle("");
                  setContent("");
                }}
              >
                <Ionicons name="close-circle-outline" color="red" size={28} />
              </Pressable>
            </View>

            <View style={styles.container}>
              <Input
                label="Title:"
                onChangeText={onChangeTitle}
                value={title}
              />
              <Textarea
                label="Content:"
                onChangeText={onChangeContent}
                value={content}
              />
              <ImagePicker setImageURI={setImageURI} imageURI={imageURI} />
              <Button onPress={onSubmit} style={{ marginTop: 20 }}>
                Submit
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1
    // marginTop: 40
  },
  modalView: {
    flex: 1,
    // margin: 20,
    backgroundColor: "#fff"
    // borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    // shadowRadius: 4,
    // elevation: 5
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText: {
    fontWeight: "600",
    fontSize: 24
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
  }
});
