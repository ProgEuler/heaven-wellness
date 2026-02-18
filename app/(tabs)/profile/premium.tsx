import { Layout } from "@/components/layout/Layout";
import { ScreenView } from "@/components/layout/screen-view";
import { BackHeader } from "@/components/shared/booking-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import { Check, ArrowRight } from "lucide-react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PremiumMemberScreen() {
  const insets = useSafeAreaInsets();
  const textMuted = useColor("textMuted");
  const brownGold = "#9B7C56";
  const lightBeige = "#FCF2E9";

  return (

      <Layout>

        <View style={styles.plans}>
          <PlanCard
            name="Essential"
            price="€89"
            features={[
              "2+ Initial Summary Access",
              "20% off all treatment",
              "Early Close Booking",
            ]}
          />

          <PlanCard
            name="Ethereal"
            price="€149"
            features={[
              "Priority Treatment Booking",
              "Complimentary Wellness Bag",
              "Quarterly Expert Session",
              "Annual VIP Gathering",
            ]}
          />
        </View>
      </Layout>
  );
}

function PlanCard({
  name,
  price,
  features,
}: {
  name: string;
  price: string;
  features: string[];
}) {
  const brownGold = "#9B7C56";
  const textMuted = useColor("textMuted");

  return (
    <Card style={styles.planCard}>
      <Text style={styles.planName}>{name}</Text>

      <View style={styles.featuresList}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <Check size={18} color={brownGold} />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>

      <View style={styles.cardFooter}>
        <View>
          <Text variant="caption" style={{ color: textMuted }}>
            From
          </Text>
          <Text style={styles.price}>
            {price}
            <Text variant="caption" style={{ color: textMuted }}>
              {" "}
              / month
            </Text>
          </Text>
        </View>
      </View>

      <Button variant="outline">
        <Text style={styles.applyText}>Apply Now</Text>
        <ArrowRight size={16} color={brownGold} />
      </Button>
    </Card>
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
  plans: {
    gap: 24,
    marginBottom: 40,
  },
  planCard: {
    padding: 32,
    gap: 24,
  },
  planName: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: Fonts.serif,
  },
  featuresList: {
    gap: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  featureText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#6B5D54",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 12,
    paddingBottom: 18,
    borderBottomColor: "#E4E4E7",
    borderBottomWidth: 1
  },
  price: {
    fontSize: 24,
    fontWeight: "800",
    fontFamily: Fonts.serif,
  },
  applyButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#E4E4E7",
    borderRadius: 30,
    flexDirection: "row",
    gap: 8,
    height: 48,
    paddingHorizontal: 20,
  },
  applyText: {
    fontSize: 14,
    fontWeight: "700",
  },
});
