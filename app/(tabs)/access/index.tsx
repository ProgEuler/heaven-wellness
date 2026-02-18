import { Card } from "@/components/ui/card";
import { ScreenView } from "@/components/layout/screen-view";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import { Copy, Info, Key, Zap } from "lucide-react-native";
import React from "react";
import { Alert, Pressable, StyleSheet } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { toast } from "sonner-native";
import { useToast } from "@/components/ui/toast";

export default function AccessScreen() {
  const textMuted = useColor("textMuted");
  const brownGold = "#9B7C56";
  const lightBeige = "#FCF2E9";
  const lightBlue = "#EFF6FF";
  const blueText = "#1D4ED8";
  const border = useColor("border");
  const { toast } = useToast();

  // Mock data for the access code
  const booking = {
    title: "Private Sauna",
    status: "Upcoming",
    date: "Sunday, 15 February 2026",
    time: "10:00 AM",
    accessCode: "SRN-2468",
  };

const copyToClipboard = async (text: string) => {
  await Clipboard.setStringAsync(text);
//   Alert.alert('Copied!', 'Text copied to clipboard');
//  toast.success("copied")
showToast()
};

  const showToast = () => {
    toast({
      title: 'Success!',
      description: 'Your changes have been saved.',
      variant: 'success',
    });
  };

  return (
    <ScreenView safe padding={24}>
      {/* <View style={styles.header}>
        <Text style={styles.title}>Access Codes</Text>
        <Text style={[styles.subtitle, { color: textMuted }]}>
          Your sauna access information
        </Text>
      </View> */}

      <Card style={[styles.mainCard, { borderColor: border }]}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.serviceTitle}>{booking.title}</Text>
            <Text variant="caption" style={{ color: textMuted }}>
              {booking.date} at {booking.time}
            </Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{booking.status}</Text>
          </View>
        </View>

        <View style={[styles.codeCard, { backgroundColor: brownGold }]}>
          <View style={styles.codeHeader}>
            <Key size={20} color="white" opacity={0.8} />
            <Text style={styles.codeLabel}>Your Access Code</Text>
          </View>

          <View style={styles.codeRow}>
            <Text style={styles.codeValue}>{booking.accessCode}</Text>
            <Pressable style={styles.copyButton} onPress={() => copyToClipboard("Booking ID: 123123")}>
              <Copy size={16} color="#fff" />
              <Text style={styles.copyText}>Copy</Text>
            </Pressable>
          </View>
        </View>

        <View style={[styles.infoBox, { backgroundColor: lightBlue }]}>
          <Info size={18} color={blueText} />
          <Text style={[styles.infoText, { color: blueText }]}>
            Your access code becomes active during your reserved time. Please
            keep it safe and present it upon arrival.
          </Text>
        </View>
      </Card>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: Fonts.serif,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  mainCard: {
    gap: 24,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  serviceTitle: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: Fonts.serif,
    marginBottom: 4,
  },
  statusBadge: {
    backgroundColor: "#F0FDF4",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    left: -28
  },
  statusText: {
    fontSize: 12,
    color: "#166534",
    fontWeight: "700",
  },
  codeCard: {
    padding: 24,
    borderRadius: 20,
    gap: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  codeHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  codeLabel: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.9,
  },
  codeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  codeValue: {
    fontSize: 32,
    fontWeight: "700",
    color: "white",
    letterSpacing: 2,
    fontFamily: Fonts.serif,
  },
  copyButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    gap: 8,
  },
  copyText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
  infoBox: {
    flexDirection: "row",
    padding: 20,
    borderRadius: 16,
    gap: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
});
