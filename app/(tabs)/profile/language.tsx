import { Layout } from "@/components/layout/Layout";
import { BackHeader } from "@/components/shared/booking-header";
import Header from "@/components/shared/inside-header";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { router } from "expo-router";
import { Check } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export default function LanguageScreen() {
  const textMuted = useColor("textMuted");
  const [selected, setSelected] = useState("English");

  const languages = [
    { label: "English", sub: "English" },
    { label: "Nederlands", sub: "Dutch" },
    { label: "Deutsch", sub: "German" },
  ];

  return (
    <>
      <BackHeader />
      <Layout title="Language">
        <Header title="Choose Your Language" subtitle="Select your preferred language" />

        <View style={styles.list}>
          {languages.map((lang) => {
            const isSelected = selected === lang.label;
            return (
              <Pressable
                key={lang.label}
                style={[styles.item, isSelected && styles.selectedItem]}
                onPress={() => setSelected(lang.label)}
              >
                <View>
                  <Text
                    style={[styles.label, isSelected && styles.selectedText]}
                  >
                    {lang.label}
                  </Text>
                  <Text
                    variant="caption"
                    style={{
                      color: isSelected ? "rgba(255,255,255,0.7)" : textMuted,
                    }}
                  >
                    {lang.sub}
                  </Text>
                </View>
                {isSelected && <Check size={20} color="white" />}
              </Pressable>
            );
          })}
        </View>

        <Button onPress={() => router.back()}>
          <Text style={styles.saveButtonText}>Save</Text>
        </Button>
      </Layout>
    </>
  );
}

const styles = StyleSheet.create({
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
