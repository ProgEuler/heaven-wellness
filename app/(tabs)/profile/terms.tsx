import { Layout } from "@/components/layout/Layout";
import { ScreenView } from "@/components/layout/screen-view";
import { BackHeader } from "@/components/shared/booking-header";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TermsConditionsScreen() {
  const insets = useSafeAreaInsets();
  const textMuted = useColor("textMuted");

  return (
      <Layout>
        <Text style={styles.title}>Terms Conditions</Text>
        <Text style={[styles.subtitle, { color: textMuted }]}>
          Effective Date: Oct 1, 2025
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Terms of Service</Text>
          <Text style={[styles.lastUpdated, { color: textMuted }]}>Effective Date: Oct 1, 2025</Text>

          <Text style={styles.subHeading}>1. Acceptance of Terms</Text>
          <Text style={[styles.paragraph, { color: textMuted }]}>
            By using OasisFeels, you agree to comply with these terms. The platform is designed for parents and legal guardians.
          </Text>

          <Text style={styles.subHeading}>2. User Conduct</Text>
          <Text style={[styles.paragraph, { color: textMuted }]}>
            Users are expected to maintain a respectful and safe environment. Any form of harassment or inappropriate content will lead to account termination.
          </Text>

          <Text style={styles.subHeading}>3. Ticket Purchases</Text>
          <Text style={[styles.paragraph, { color: textMuted }]}>
            All ticket sales are subject to the organizer's refund policy. OasisFeels serves as a facilitator for event discovery and booking.
          </Text>

          <Text style={styles.subHeading}>4. Limitation of Liability</Text>
          <Text style={[styles.paragraph, { color: textMuted }]}>
            OasisFeels is not responsible for incidents occurring during physical events. Users attend events at their own discretion.
          </Text>
        </View>
      </Layout>
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
    fontSize: 14,
    marginBottom: 32,
  },
  section: {
    gap: 16,
    marginBottom: 40,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "700",
  },
  lastUpdated: {
    fontSize: 13,
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 8,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
  },
});
