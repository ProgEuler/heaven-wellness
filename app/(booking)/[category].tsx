import { BackHeader } from "@/components/shared/booking-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollView } from "@/components/ui/scroll-view";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import { useLocalSearchParams, router } from "expo-router";
import {
  Star,
  Users,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react-native";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CATEGORY_DATA: Record<string, any> = {
  sauna: {
    title: "Sauna & Wellness",
    subtitle: "Heat. Release. Renew.",
    services: [
      {
        id: "private-sauna",
        title: "Private Sauna",
        description:
          "Your own exclusive sanctuary for ultimate privacy and relaxation.",
        rating: 4.9,
        capacity: "Up to 6 persons",
        duration: "2-hour sessions",
        requirement: "Prepayment required",
        price: 210,
        image:
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "wellness-pool",
        title: "Heated Wellness Pool",
        description:
          "Serenity in every stroke. Experience the warmth of our thermal waters.",
        rating: 4.8,
        capacity: "Up to 10 persons",
        duration: "1-hour sessions",
        requirement: "Booking required",
        price: 45,
        image:
          "https://images.unsplash.com/photo-1576013551627-0cc20b96862c?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  arrangements: {
    title: "Arrangements",
    subtitle: "Curated journeys of renewal",
    services: [
      {
        id: "wellness-escape",
        title: "Wellness Escape",
        description:
          "Sauna + Massage + Lunch. A complete day of relaxation combining our finest wellness services.",
        rating: 4.9,
        capacity: "2-4 people",
        duration: "6-hour duration",
        requirement: "Full prepayment",
        price: 210,
        image:
          "https://images.unsplash.com/photo-1544161515-436cefd54cbf?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  activities: {
    title: "Activities",
    subtitle: "Movement. Breath. Flow.",
    services: [
      {
        id: "yoga",
        title: "Morning Flow Yoga",
        description:
          "Find your center with guided movement in our serenity studio.",
        rating: 4.9,
        capacity: "12 people",
        duration: "8:00 AM - 9:00 AM",
        requirement: "Movement Studio",
        price: 40,
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  lunchroom: {
    title: "Lunchroom",
    subtitle: "Nourishment for body and soul",
    services: [
      {
        id: "lunch-exp",
        title: "Lunchroom Experience",
        description: "Seasonal, organic cuisine. Payment at location.",
        rating: 4.8,
        capacity: "1-6 people",
        duration: "120 minutes",
        requirement: "Table reservation",
        price: 0,
        isFree: true,
        image:
          "https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
};

export default function CategoryScreen() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const data = CATEGORY_DATA[category as string] || CATEGORY_DATA.sauna;

  const [selectedService, setSelectedService] = useState<string | null>(null);

  const primary = useColor("primary");
  const background = useColor("background");
  const textMuted = useColor("textMuted");
  const brownGold = "#9B7C56";
  const insets = useSafeAreaInsets();
  const headerHeight = insets.top + 60;

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
          <Text style={styles.title}>{data.title}</Text>
          <Text style={[styles.subtitle, { color: textMuted }]}>
            {data.subtitle}
          </Text>
        </View>

        <View style={styles.list}>
          {data.services.map((service: any) => (
            <Pressable
              key={service.id}
              onPress={() =>
                setSelectedService(
                  selectedService === service.id ? null : service.id,
                )
              }
            >
              <Card
                style={[
                  styles.serviceCard,
                  selectedService === service.id && {
                    borderWidth: 3,
                    borderColor: primary,
                  },
                ]}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: service.image }}
                    style={styles.serviceImage}
                  />
                  <View style={styles.ratingBadge}>
                    <Star size={12} color="#EAB308" fill="#EAB308" />
                    <Text style={styles.ratingText}>{service.rating}</Text>
                  </View>
                </View>

                <View style={styles.serviceInfo}>
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                  <Text
                    style={[styles.serviceDescription, { color: textMuted }]}
                  >
                    {service.description}
                  </Text>

                  <View style={styles.detailsGrid}>
                    <View style={styles.detailItem}>
                      <Users size={16} color={brownGold} />
                      <Text variant="caption" style={styles.detailText}>
                        {service.capacity}
                      </Text>
                    </View>
                    <View style={styles.detailItem}>
                      <Clock size={16} color={brownGold} />
                      <Text variant="caption" style={styles.detailText}>
                        {service.duration}
                      </Text>
                    </View>
                    <View style={styles.detailItem}>
                      <ShieldCheck size={16} color={brownGold} />
                      <Text variant="caption" style={styles.detailText}>
                        {service.requirement}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.priceRow}>
                    <Text style={styles.price}>
                      {service.isFree
                        ? "Free Reservation"
                        : `$${service.price}`}
                    </Text>
                  </View>
                </View>
              </Card>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View style={[styles.footer, { borderTopColor: useColor("border") }]}>
        <Button
          //  style={[!select && { opacity: 0.5 }]}
          onPress={() =>
            selectedService && router.push("/(booking)/select-date")
          }
          disabled={!selectedService}
        >
          <Text>Continue</Text>
          <ArrowRight size={18} />
        </Button>
      </View>
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
    gap: 24,
    paddingTop: 0,
  },
  serviceCard: {
    padding: 0,
    overflow: "hidden",
    borderRadius: 24,
  },
  imageContainer: {
    height: 200,
  },
  serviceImage: {
    width: "100%",
    height: "100%",
  },
  ratingBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "700",
  },
  serviceInfo: {
    padding: 20,
    gap: 12,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: Fonts.serif,
  },
  serviceDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  detailsGrid: {
    gap: 8,
    marginTop: 4,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  detailText: {
    fontSize: 14,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: Fonts.serif,
  },
  footer: {
    padding: 24,
    paddingBottom: 40,
    borderTopWidth: 1,
  },
  continueButton: {
    backgroundColor: "#9B7C56",
    borderRadius: 30,
    height: 56,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
