import { Stack } from "expo-router";
import { View, Pressable, Modal } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { toggleModal } from "@/store/reducer/blogSlice";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "@/store";

export default function PostsLayout() {
  const dispatch = useDispatch();
  const showModal = useSelector(
    (state: IRootState) => state.blogState.showModal
  );
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerRight: (props) => {
          return (
            <View style={{ marginRight: 10 }}>
              <Pressable onPress={() => dispatch(toggleModal(!showModal))}>
                <Ionicons name="add-circle-outline" color="#fff" size={28} />
              </Pressable>
            </View>
          );
        }
      }}
    >
      <Stack.Screen name="index" options={{ title: "Posts" }} />
      <Stack.Screen
        name="modal"
        options={{
          title: "Modal"
        }}
      />
    </Stack>
  );
}
