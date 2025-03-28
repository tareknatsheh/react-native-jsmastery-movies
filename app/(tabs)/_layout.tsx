import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabIcon = ({ focused, title, icon }: any) => {
  return focused ? (
    <View className="flex flex-1 flex-row w-full justify-center items-center rounded-full bg-[#c6b7e0] min-h-12 min-w-[92px]">
      <Ionicons name={icon} size={20} color="#151312" />
      <Text className="text-secondary text-sm ml-1">{title}</Text>
    </View>
  ) : (
    <View className="flex flex-1 flex-row w-full justify-center items-center">
      <Ionicons name={icon} size={20} color="#797089" />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIconStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Home" icon="home-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Saved" icon="bookmark-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Search" icon="search-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Profile" icon="person-outline" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
