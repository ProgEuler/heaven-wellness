import { ScreenView } from "@/components/layout/screen-view";
import { BackHeader } from "@/components/shared/booking-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function PreviewProfileScreen() {
  const textMuted = useColor("textMuted");
  const border = useColor("border");

  return (
    <View style={styles.container}>
      <ScreenView safe={false}>
        {/* <Text style={styles.title}>Profile</Text>
        <Text style={[styles.subtitle, { color: textMuted }]}>
          Manage your personal information
        </Text> */}

        <View style={styles.avatarSection}>
          <Image
            source="https://i.pravatar.cc/150?u=akash"
            style={styles.avatar}
          />
        </View>

        <View style={styles.infoSection}>
          <InfoItem label="Full Name" value="Akash" />
          <InfoItem label="Email Address" value="akash@example.com" />
          <InfoItem label="Phone" value="+1234567890" />
          <InfoItem label="Preferred Language" value="English" />
        </View>

        <Button onPress={() => router.push("/(tabs)/profile/edit")}>
          Edit Profile
        </Button>
      </ScreenView>
    </View>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <View>
      <Text style={{ marginBottom: 8, fontSize: 14 }}>{label}</Text>
      <TextInput
        value={value}
        readOnly
        style={{
          backgroundColor: "#F5F1ED",
          padding: 16,
          fontSize: 16,
          fontFamily: Fonts.serif,
          borderWidth: 1,
          borderColor: "#EBE3DB",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: Fonts.serif,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoSection: {
    gap: 18,
    marginBottom: 40,
  },
  infoItem: {
    borderBottomWidth: 1,
    paddingBottom: 12,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: "600",
  },
  editButton: {
    backgroundColor: "#D4C4B0",
    height: 56,
    borderRadius: 14,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
});
