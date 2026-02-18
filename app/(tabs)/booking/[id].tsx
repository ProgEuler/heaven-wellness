import { ScreenView } from "@/components/layout/screen-view";
import { BackHeader } from "@/components/shared/booking-header";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import { router, useLocalSearchParams } from "expo-router";
import {
  Calendar,
  ChevronLeft,
  Clock,
  Copy,
  Timer,
  Users,
  Zap,
  CreditCard,
} from "lucide-react-native";
import React, { useState } from "react";
import { BackHandler, Modal, Pressable, StyleSheet } from "react-native";

export default function BookingDetailsScreen() {
  const { id, type } = useLocalSearchParams();
  const [showCancelModal, setShowCancelModal] = useState(false);

  const textMuted = useColor("textMuted");
  const border = useColor("border");
  const brownGold = "#9B7C56";
  const lightBeige = "#FCF2E9";

  // Mock data based on ID
  const isPaid = id === "1";
  const booking = {
    title: isPaid ? "Private Sauna" : "Lunchroom Reservation",
    date: isPaid ? "Sunday 20 February 2026" : "Friday 20 February 2026",
    time: isPaid ? "10:00 PM" : "1:00 PM",
    duration: isPaid ? "120 minutes" : "90 minutes",
    guests: isPaid ? "2" : "4",
    status: isPaid ? "Paid in Full" : "Pay on arrival",
    amount: isPaid ? "€89" : "",
    accessCode: isPaid ? "SRN-2468" : null,
  };

  return (
    <View style={styles.container}>

      <ScreenView>
        <Text style={styles.screenTitle}>Booking Details</Text>

        <Card style={styles.infoCard}>
          <Text style={styles.serviceTitle}>{booking.title}</Text>

          <View style={styles.detailList}>
            <View style={styles.detailRow}>
              <View style={[styles.iconBox, { backgroundColor: lightBeige }]}>
                <Calendar size={18} color={brownGold} />
              </View>
              <View>
                <Text variant="caption" style={{ color: textMuted }}>
                  Date
                </Text>
                <Text style={styles.detailValue}>{booking.date}</Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={[styles.iconBox, { backgroundColor: lightBeige }]}>
                <Clock size={18} color={brownGold} />
              </View>
              <View>
                <Text variant="caption" style={{ color: textMuted }}>
                  Time
                </Text>
                <Text style={styles.detailValue}>{booking.time}</Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={[styles.iconBox, { backgroundColor: lightBeige }]}>
                <Timer size={18} color={brownGold} />
              </View>
              <View>
                <Text variant="caption" style={{ color: textMuted }}>
                  Duration
                </Text>
                <Text style={styles.detailValue}>{booking.duration}</Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={[styles.iconBox, { backgroundColor: lightBeige }]}>
                <Users size={18} color={brownGold} />
              </View>
              <View>
                <Text variant="caption" style={{ color: textMuted }}>
                  Guests
                </Text>
                <Text style={styles.detailValue}>{booking.guests}</Text>
              </View>
            </View>
          </View>
        </Card>

        {booking.accessCode && (
          <Card style={[styles.accessCodeCard, { backgroundColor: brownGold }]}>
            <View style={styles.accessCodeHeader}>
              <Zap size={20} color="white" />
              <Text style={styles.accessCodeTitle}>Your Access Code</Text>
            </View>

            <View style={styles.codeRow}>
              <Text style={styles.codeText}>{booking.accessCode}</Text>
              <Pressable style={styles.copyButton}>
                <Copy size={14} color="#fff" />
                <Text style={styles.copyText}>Copy</Text>
              </Pressable>
            </View>

            <Text style={styles.accessCodeDesc}>
              Your access code becomes active during your reserved time. Please
              keep it safe and present it upon arrival.
            </Text>
          </Card>
        )}

        <Card style={[styles.paymentCard, { borderColor: border }]}>
          <View style={styles.paymentHeader}>
            <View style={styles.paymentIconRow}>
              <CreditCard size={18} color={textMuted} />
              <Text style={styles.paymentLabel}>Payment</Text>
            </View>
          </View>

          <View style={styles.paymentInfo}>
            <View style={styles.paymentRow}>
              <Text style={{ color: textMuted }}>Status</Text>
              <Text
                style={[
                  styles.paymentStatus,
                  isPaid ? { color: "#166534", fontWeight: "700" } : {},
                ]}
              >
                {booking.status}
              </Text>
            </View>
            {booking.amount ? (
              <View style={styles.paymentRow}>
                <Text style={{ color: textMuted }}>Amount</Text>
                <Text style={styles.amountText}>{booking.amount}</Text>
              </View>
            ) : null}
          </View>
        </Card>

        <Card>
          <View style={styles.policySection}>
            <Text style={styles.policyTitle}>Cancellation Policy</Text>
            <Text style={[styles.policyText, { color: textMuted }]}>
              You may cancel or modify your booking up to 24 hours before your
              scheduled time. Cancellations made within 24 hours may be subject
              to a cancellation fee.
            </Text>
          </View>

          <Pressable
            style={styles.cancelLink}
            onPress={() => setShowCancelModal(true)}
          >
            <Text style={styles.cancelLinkText}>Cancel This Booking</Text>
          </Pressable>
        </Card>
      </ScreenView>

      <Modal visible={showCancelModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cancel Reservation</Text>
            <Text style={[styles.modalSubtitle, { color: textMuted }]}>
              Are you sure you want to cancel this reservation?
            </Text>
            <Text style={[styles.modalWarning, { color: textMuted }]}>
              Cancellations made within 24 hours of your visit may be subject to
              a cancellation fee.
            </Text>

            <View style={styles.modalActions}>
              <Pressable
                style={styles.modalKeepButton}
                onPress={() => setShowCancelModal(false)}
              >
                <Text style={styles.modalKeepText}>Keep</Text>
              </Pressable>
              <Pressable
                style={styles.modalCancelButton}
                onPress={() => {
                  setShowCancelModal(false);
                  router.back();
                }}
              >
                <Text style={styles.modalCancelText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixedHeader: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginLeft: -4,
  },
  backText: {
    fontSize: 18,
    fontWeight: "500",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 60,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: Fonts.serif,
  },
  infoCard: {
    marginTop: 24,
    marginBottom: 20,
    gap: 20,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: Fonts.serif,
    marginBottom: 4,
  },
  detailList: {
    gap: 16,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "600",
  },
  accessCodeCard: {
    marginBottom: 24,
    gap: 16,
  },
  accessCodeHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  accessCodeTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
    opacity: 0.9,
  },
  codeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
  },
  codeText: {
    fontSize: 32,
    fontWeight: "700",
    color: "white",
    letterSpacing: 2,
    fontFamily: Fonts.serif,
  },
  copyButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
    gap: 6,
  },
  copyText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#fff",
  },
  accessCodeDesc: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 13,
    lineHeight: 18,
  },
  paymentCard: {
    marginBottom: 24,
  },
  paymentHeader: {
    marginBottom: 16,
  },
  paymentIconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  paymentLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#3F3F46",
  },
  paymentInfo: {
    gap: 12,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paymentStatus: {
    fontSize: 16,
    fontWeight: "600",
  },
  amountText: {
    fontSize: 18,
    fontWeight: "800",
  },
  policySection: {
    marginBottom: 24,
  },
  policyTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  policyText: {
    fontSize: 14,
    lineHeight: 22,
  },
  cancelLink: {
    height: 56,
    borderRadius: 16,
    backgroundColor: "#FEF2F2",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelLinkText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "700",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    padding: 24,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 32,
    padding: 32,
    gap: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: Fonts.serif,
    textAlign: "center",
  },
  modalSubtitle: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 4,
  },
  modalWarning: {
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
    opacity: 0.8,
  },
  modalActions: {
    flexDirection: "row",
    gap: 16,
    marginTop: 12,
  },
  modalKeepButton: {
    flex: 1,
    height: 56,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  modalKeepText: {
    fontSize: 16,
    fontWeight: "700",
  },
  modalCancelButton: {
    flex: 1,
    height: 56,
    borderRadius: 14,
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCancelText: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
});
