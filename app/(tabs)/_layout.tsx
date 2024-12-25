import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import { useState } from "react";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [position, setPosition] = useState();
  const getPosition = async () => {
    const position: any = await AsyncStorage.getItem("position_id");
    setPosition(position);
  };

  useEffect(() => {
    getPosition();
  }, [position]);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Form",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Ionicons size={15} name="newspaper-outline" color={color} />
          ),
          href: position === "5" ? "/" : null, // Conditional href
        }}
      />

      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Ionicons size={15} name="time-outline" color={color} />
          ),
          href: position === "5" ? "/schedule" : null,
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          headerShown: true,
          title: "Nofication",
          tabBarIcon: ({ color }) => (
            <Ionicons size={15} name="notifications-outline" color={color} />
          ),
          href: position === "5" ? "/notification" : null,
        }}
      />

      <Tabs.Screen
        name="host"
        options={{
          headerShown: true,
          title: "Host",
          tabBarIcon: ({ color }) => (
            <Ionicons size={15} name="settings-outline" color={color} />
          ),
          href: position === "5" ? null : "/host",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          // headerShown:true,
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons size={15} name="settings-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="approval"
        options={{
          title: "Aprroval",
          href: null,
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="approved"
        options={{
          title: "Approved",
          href: null,
          headerShown: true,
        }}
      />
    </Tabs>
  );
}
