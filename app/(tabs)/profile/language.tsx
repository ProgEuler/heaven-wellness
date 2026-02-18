import { Layout } from "@/components/layout/Layout";
import { ScreenView } from "@/components/layout/screen-view";
import { BackHeader } from "@/components/shared/booking-header";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import { router } from "expo-router";
import { Check } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LanguageScreen() {
  const insets = useSafeAreaInsets();
  const textMuted = useColor("textMuted");
  const [selected, setSelected] = useState("English");

  const languages = [
    { label: "English", sub: "English" },
    { label: "Nederlands", sub: "Dutch" },
    { label: "Deutsch", sub: "German" },
  ];

  return (

      <Layout>
        <Text style={styles.title}>Choose Your Language</Text>
        <Text style={[styles.subtitle, { color: textMuted }]}>
          Select your preferred language
        </Text>

        <View style={styles.list}>
          {languages.map((lang) => {
            const isSelected = selected === lang.label;
            return (
              <Pressable
                key={lang.label}
                style={[
                  styles.item,
                  isSelected && styles.selectedItem,
                ]}
                onPress={() => setSelected(lang.label)}
              >
                <View>
                  <Text style={[styles.label, isSelected && styles.selectedText]}>
                    {lang.label}
                  </Text>
                  <Text variant="caption" style={{ color: isSelected ? "rgba(255,255,255,0.7)" : textMuted }}>
                    {lang.sub}
                  </Text>
                </View>
                {isSelected && <Check size={20} color="white" />}
              </Pressable>
            );
          })}
        </View>

        <Button
          style={styles.saveButton}
          onPress={() => router.back()}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </Button>
      </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: Fonts.serif,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 32,
  },
  list: {
    gap: 16,
    marginBottom: 40,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#F4F4F5",
  },
  selectedItem: {
    backgroundColor: "#9B7C56",
    borderColor: "#9B7C56",
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 2,
  },
  selectedText: {
    color: "white",
  },
  saveButton: {
    backgroundColor: "#D4C4B0",
    height: 56,
    borderRadius: 14,
    marginTop: "auto",
    marginBottom: 40,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
});
