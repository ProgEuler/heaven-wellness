import { Layout } from "@/components/layout/Layout";
import { ScreenView } from "@/components/layout/screen-view";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import { Image } from "expo-image";
import { router } from "expo-router";
import {
  Bell,
  ChevronRight,
  Globe,
  HelpCircle,
  Info,
  LogOut,
  Shield,
  Star,
  User,
  Crown,
} from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, StyleSheet, Switch } from "react-native";

export default function ProfileScreen() {
  const textMuted = useColor("textMuted");
  const brownGold = "#9B7C56";
  const lightBeige = "#FCF2E9";
  const red = "#EF4444";
  const lightRed = "#FEF2F2";

  const [pushEnabled, setPushEnabled] = useState(false);

  return (
    <Layout title="Profile">
      {/* User Info Header */}
      <View style={styles.header}>
        <Image
          source="https://i.pravatar.cc/150?u=akash"
          style={styles.avatar}
        />
        <View>
          <Text style={styles.userName}>Akash</Text>
          <Text variant="caption" style={{ color: textMuted }}>
            Akash@gmail.com
          </Text>
        </View>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <Card style={styles.card}>
          <MenuItem
            icon={User}
            label="Profile"
            onPress={() => router.push("/(tabs)/profile/preview")}
          />
        </Card>
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <Card style={styles.card}>
          <View style={styles.menuItem}>
            <View style={styles.iconCircle}>
              <Bell size={20} color={brownGold} strokeWidth={1.5} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.menuLabel}>Push Notifications</Text>
              <Text style={{ color: textMuted, fontSize: 14 }}>
                Booking reminders & updates
              </Text>
            </View>
            <Switch
              value={pushEnabled}
              onValueChange={setPushEnabled}
              trackColor={{ false: "#D1D5DB", true: brownGold }}
              thumbColor="white"
              style={{ transform: [{ scale: 0.8 }] }}
            />
          </View>
          <View style={styles.separator} />
          <MenuItem
            icon={Crown}
            label="Premium Member"
            onPress={() => router.push("/(tabs)/profile/premium")}
          />
          <View style={styles.separator} />
          <MenuItem
            icon={Globe}
            label="Language"
            onPress={() => router.push("/(tabs)/profile/language")}
          />
        </Card>
      </View>

      {/* Privacy & Security Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy & Security</Text>
        <Card style={styles.card}>
          <MenuItem
            icon={Shield}
            label="Privacy Policy"
            onPress={() => router.push("/(tabs)/profile/privacy")}
          />
          <View style={styles.separator} />
          <MenuItem
            icon={HelpCircle}
            label="Help & Support"
            onPress={() => router.push("/(tabs)/profile/help")}
          />
          <View style={styles.separator} />
          <MenuItem
            icon={Info}
            label="Terms & Conditions"
            onPress={() => router.push("/(tabs)/profile/terms")}
          />
        </Card>
      </View>

      {/* Logout Button */}
      <Pressable
        style={styles.logoutButton}
        onPress={() => router.replace("/(auth)/login")}
      >
        <LogOut size={20} color={red} />
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </Layout>
  );
}

function MenuItem({ icon: IconComp, label, onPress }: any) {
  const textMuted = useColor("textMuted");
  const brownGold = "#9B7C56";

  return (
    <Pressable style={styles.menuItem} onPress={onPress}>
      <View style={styles.iconCircle}>
        <IconComp size={20} color={brownGold} strokeWidth={1.5} />
      </View>
      <Text style={styles.menuLabel}>{label}</Text>
      <ChevronRight size={18} color={textMuted} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 32,
    paddingTop: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: Fonts.serif,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: Fonts.serif,
    fontWeight: "600",
    color: "#18181B",
    marginBottom: 16,
    marginLeft: 4,
  },
  card: {
    padding: 2,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: "white",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 16,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FCF2E9",
    justifyContent: "center",
    alignItems: "center",
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
  },
  separator: {
    height: 1,
    backgroundColor: "#F4F4F5",
    marginHorizontal: 12,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    borderRadius: 12,
    backgroundColor: "#FEF2F2",
    gap: 10,
    marginTop: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#EF4444",
  },
});
