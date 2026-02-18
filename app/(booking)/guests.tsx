import { BackHeader } from "@/components/shared/booking-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollView } from "@/components/ui/scroll-view";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import { router, useLocalSearchParams } from "expo-router";
import { Minus, Plus, Users, ArrowRight } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function GuestsScreen() {
  const { date, time } = useLocalSearchParams();
  const [guests, setGuests] = useState(2);
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
          <Text style={styles.title}>Number of Guests</Text>
          <Text style={[styles.subtitle, { color: textMuted }]}>
            How many people will attend?
          </Text>
        </View>

        <Card style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text variant="caption" style={{ color: textMuted }}>
              Date
            </Text>
            <Text style={styles.summaryValue}>{date}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text variant="caption" style={{ color: textMuted }}>
              Time
            </Text>
            <Text style={styles.summaryValue}>{time}</Text>
          </View>
        </Card>

        <Card style={styles.counterCard}>
          <View style={styles.iconCircle}>
            <Users size={32} color={brownGold} />
          </View>

          <Text style={[styles.label, { color: textMuted }]}>
            Selected Date
          </Text>

          <View style={styles.counterRow}>
            <Pressable
              style={[
                styles.counterButton,
                guests <= 1 && styles.disabledButton,
              ]}
              onPress={() => setGuests(Math.max(1, guests - 1))}
            >
              <Minus size={24} color="#71717A" />
            </Pressable>

            <Text style={styles.guestCount}>{guests}</Text>

            <Pressable
              style={[styles.counterButton, { backgroundColor: "#D4C4B0" }]}
              onPress={() => setGuests(guests + 1)}
            >
              <Plus size={24} color="black" />
            </Pressable>
          </View>

          <Text variant="caption" style={{ color: textMuted }}>
            Maximum 4 guests
          </Text>
        </Card>

        <View style={styles.quickSelect}>
          <Text style={styles.sectionTitle}>Quick Select</Text>
          <View style={styles.quickGrid}>
            {[1, 2, 4].map((n) => (
              <Pressable
                key={n}
                style={[
                  styles.quickItem,
                  guests === n
                    ? { backgroundColor: "#D4C4B0" }
                    : {
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderColor: "#E4E4E7",
                      },
                ]}
                onPress={() => setGuests(n)}
              >
                <Text
                  style={[
                    styles.quickText,
                    guests === n && { fontWeight: "700" },
                  ]}
                >
                  {n}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={[styles.footer, { borderTopColor: useColor("border") }]}>
        <Button
          style={styles.continueButton}
          onPress={() => router.push("/(booking)/information")}
        >
          <Text style={styles.buttonText}>Continue to Confirmation</Text>
          <ArrowRight size={18} color="white" />
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
    padding: 24,
  },
  header: {
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
  summaryCard: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
    gap: 12,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: Fonts.serif,
  },
  counterCard: {
    padding: 32,
    borderRadius: 24,
    alignItems: "center",
    gap: 12,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#F8F5F2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
  },
  counterRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
    marginVertical: 8,
  },
  counterButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#ECEEF1",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  guestCount: {
    fontSize: 48,
    fontWeight: "700",
    fontFamily: Fonts.serif,
  },
  quickSelect: {
    marginTop: 24,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  quickGrid: {
    flexDirection: "row",
    gap: 12,
  },
  quickItem: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  quickText: {
    fontSize: 16,
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
