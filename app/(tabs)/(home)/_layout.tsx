import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { DrawerItemList, DrawerToggleButton } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

export default function HomeLayout() {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <Drawer
    //     screenOptions={{
    //       drawerPosition: "right",
    //       drawerType: "front",
    //       drawerStyle: {
    //         backgroundColor: "#021520",
    //         width: 250
    //       },
    //       drawerInactiveTintColor: "#021520",
    //       drawerLabelStyle: {
    //         color: "white"
    //       },
    //       headerLeft: () => <></>,
    //       headerRight: () => <DrawerToggleButton />
    //     }}
    //     drawerContent={(props) => (
    //       <SafeAreaView>
    //         <View
    //           style={{
    //             height: 200,
    //             width: "100%",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             backgroundColor: "#021520",
    //             paddingBottom: 12
    //           }}
    //         >
    //           {/* <Image/> */}
    //           <Text style={{ color: "white" }}>asd</Text>
    //           <Text style={{ color: "white" }}>asd</Text>
    //         </View>
    //         <DrawerItemList {...props} />
    //       </SafeAreaView>
    //     )}
    //   >
    //     <Drawer.Screen
    //       name="index"
    //       options={{ title: "Home", drawerIcon: () => <></> }}
    //     />
    //     <Drawer.Screen
    //       name="details"
    //       options={{
    //         title: "Details",

    //         drawerItemStyle: { display: "none" }
    //       }}
    //     />
    //   </Drawer>
    // </GestureHandlerRootView>
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="details"
        options={{
          title: "Details"
        }}
      />
    </Stack>
  );
}
