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
import { Camera } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export default function EditProfileScreen() {
  const textMuted = useColor("textMuted");

  const [name, setName] = useState("Akash");
  const [email, setEmail] = useState("akash@example.com");
  const [phone, setPhone] = useState("+1234567890");

  return (
    <View style={styles.container}>
      <ScreenView safe={false}>
        {/* <Text style={styles.title}>Profile</Text>
        <Text style={[styles.subtitle, { color: textMuted }]}>
          Manage your personal information
        </Text> */}

        <View style={styles.avatarSection}>
          <View>
            <Image
              source="https://i.pravatar.cc/150?u=akash"
              style={styles.avatar}
            />
            <Pressable style={styles.cameraButton}>
              <Camera size={20} color="black" />
            </Pressable>
          </View>
        </View>

        <View style={styles.form}>
          <Input
            label="Full Name"
            value={name}
            onChangeText={setName}
            variant="outline"
          />
          <Input
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            variant="outline"
            keyboardType="email-address"
          />
          <Input
            label="Phone"
            value={phone}
            onChangeText={setPhone}
            variant="outline"
            keyboardType="phone-pad"
          />

          <View style={styles.inputGroup}>
            <Text
              variant="caption"
              style={{ color: textMuted, marginBottom: 8, marginLeft: 4 }}
            >
              Preferred Language
            </Text>
            <Pressable
              style={styles.languageSelector}
              onPress={() => router.push("/(tabs)/profile/language")}
            >
              <Text>English</Text>
              <Text style={{ color: textMuted }}>▼</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.footer}>
          <Button style={{ width: "80%"}} variant="outline" onPress={() => router.back()}>
            Cancel
          </Button>
          <Button onPress={() => router.back()}>Save Changes</Button>
        </View>
      </ScreenView>
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
  cameraButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E4E4E7",
  },
  form: {
    gap: 20,
    marginBottom: 40,
  },
  inputGroup: {
    gap: 4,
  },
  languageSelector: {
    height: 56,
    borderWidth: 1,
    borderColor: "#E4E4E7",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
   //  justifyContent: "center",
   //  justifyContent: "space-between",
   //  gap: 16,
    marginBottom: 40,
  },
});
