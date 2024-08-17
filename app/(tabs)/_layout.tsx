import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={28}
            />
          )
        }}
      />
      <Tabs.Screen
        name="(posts)"
        options={{
          headerShown: false,
          title: "Posts",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "newspaper" : "newspaper-outline"}
              color={color}
              size={28}
            />
          ),
          headerStyle: { backgroundColor: "#021520" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      />
    </Tabs>
  );
}
