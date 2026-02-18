import { BackHeader } from "@/components/shared/booking-header";
import { Card } from "@/components/ui/card";
import { ScrollView } from "@/components/ui/scroll-view";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CATEGORIES = [
  {
    id: "sauna",
    title: "Sauna & Wellness",
    subtitle: "Heat. Release. Renew.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "arrangements",
    title: "Arrangements",
    subtitle: "Curated journeys of renewal",
    image:
      "https://images.unsplash.com/photo-1544161515-436cefd54cbf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "activities",
    title: "Activities",
    subtitle: "Movement. Breath. Flow.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "lunchroom",
    title: "Lunchroom",
    subtitle: "Nourishment for body and soul",
    image:
      "https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function SelectServicesScreen() {
  const background = useColor("background");
  const textMuted = useColor("textMuted");
  const insets = useSafeAreaInsets();
  const headerHeight = insets.top + 60; // Approximate height of fixed header

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <BackHeader />

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: headerHeight },
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Select Services</Text>
          <Text style={[styles.subtitle, { color: textMuted }]}>
            Choose your wellness experience
          </Text>
        </View>

        <View style={styles.list}>
          {CATEGORIES.map((category) => (
            <Pressable
              key={category.id}
              onPress={() =>
                router.push({
                  pathname: "/(booking)/[category]",
                  params: { category: category.id },
                })
              }
            >
              <Card style={styles.categoryCard}>
                <ImageBackground
                  source={{ uri: category.image }}
                  style={styles.categoryImage}
                  imageStyle={styles.categoryImageBorder}
                >
                  <View style={styles.categoryOverlay}>
                    <View style={styles.categoryContent}>
                      <Text style={styles.categoryTitle}>{category.title}</Text>
                      <Text style={styles.categorySubtitle}>
                        {category.subtitle}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </Card>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: Fonts.serif,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  list: {
    padding: 24,
    gap: 20,
    paddingTop: 0,
  },
  categoryCard: {
    padding: 0,
    height: 180,
    overflow: "hidden",
    borderRadius: 24,
  },
  categoryImage: {
    flex: 1,
  },
  categoryImageBorder: {
    borderRadius: 24,
  },
  categoryOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
    padding: 20,
  },
  categoryContent: {
    gap: 4,
  },
  categoryTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: Fonts.serif,
  },
  categorySubtitle: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
  },
});
