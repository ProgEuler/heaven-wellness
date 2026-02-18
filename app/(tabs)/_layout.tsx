import { useColor } from "@/hooks/useColor";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Fonts } from "@/theme/colors";
import { BlurView as ExpoBlurView } from "expo-blur";
import { Tabs } from "expo-router";
import {
  Calendar,
  Home,
  Key,
  User,
} from "lucide-react-native";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";

export default function TabsLayout() {
  const primary = useColor("primary");
  const textMuted = useColor("textMuted");
  const brownGold = "#9B7C56";
  const colorScheme = useColorScheme();
  const tint = colorScheme === 'dark' ? 'dark' : 'light';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0.5,
          borderTopColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
          elevation: 0,
          height: Platform.OS === 'ios' ? 88 : 68,
          backgroundColor: 'transparent',
        },
        tabBarBackground: () => (
          <ExpoBlurView
            intensity={Platform.OS === 'ios' ? 80 : 100}
            tint={tint}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarActiveTintColor: brownGold,
        tabBarInactiveTintColor: "#94A3B8",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
          padding: 6
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeIndicator} />}
              <Home size={24} color={color} strokeWidth={focused ? 2.5 : 2} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "Booking",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeIndicator} />}
              <Calendar size={24} color={color} strokeWidth={focused ? 2.5 : 2} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="access"
        options={{
          title: "Access",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeIndicator} />}
              <Key size={24} color={color} strokeWidth={focused ? 2.5 : 2} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeIndicator} />}
              <User size={24} color={color} strokeWidth={focused ? 2.5 : 2} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  activeIndicator: {
    position: 'absolute',
    top: -6,
    width: 48,
    height: 3,
    backgroundColor: "#9B7C56",
    borderRadius: 2,
  },
});
