import { Layout } from "@/components/layout/Layout";
import { ScreenView } from "@/components/layout/screen-view";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import { router } from "expo-router";
import {
  Calendar,
  ChevronRight,
  Clock,
  Plus,
  Users,
} from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type BookingStatus = "Upcoming" | "Past";

export default function MyReservationsScreen() {
  const [activeTab, setActiveTab] = useState<BookingStatus>("Upcoming");
  const translateX = useSharedValue(0);

  const handleTabChange = (tab: BookingStatus) => {
    setActiveTab(tab);
    translateX.value = withTiming(tab === "Upcoming" ? 0 : 1, {
      duration: 250,
    });
  };

  const buttonStyle = useAnimatedStyle(() => ({
    position: "absolute",
    top: 4,
    bottom: 4,
    left: 4,
    width: (250 - 8) / 2,
    transform: [{ translateX: translateX.value * ((250 - 8) / 2) }],
    backgroundColor: "#D4C4B0",
    borderRadius: 10,
  }));

  const textMuted = useColor("textMuted");
  const border = useColor("border");
  const secondary = useColor("secondary");
  const brownGold = "#9B7C56";
  const lightBeige = "#FCF2E9";

  const upcomingBookings = [
    {
      id: "1",
      title: "Private Sauna",
      category: "Private Sauna",
      date: "15 Feb 2026",
      time: "10:00 AM",
      guests: "2 guests",
      paymentStatus: "Paid",
      status: "Upcoming",
      type: "sauna"
    },
    {
      id: "2",
      title: "Lunchroom Reservation",
      category: "Restaurant",
      date: "20 Feb 2026",
      time: "1:00 AM",
      guests: "4 guests",
      paymentStatus: "Pay on arrival",
      status: "Upcoming",
      type: "launchroom"
    },
  ];

  const renderBookingCard = (booking: (typeof upcomingBookings)[0]) => (
    <Pressable
      key={booking.id}
      onPress={() =>
        router.push({
          pathname: "/(tabs)/booking/[id]",
          params: {
            id: booking.id,
            type: booking.type
          },
        })
      }
    >
      <Card style={[styles.bookingCard, { borderColor: border }]}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.bookingTitle}>{booking.title}</Text>
            <Text variant="caption" style={{ color: textMuted }}>
              {booking.category}
            </Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{booking.status}</Text>
          </View>
        </View>

        <View style={styles.cardInfo}>
          <View style={styles.infoRow}>
            <Calendar size={14} color={brownGold} />
            <Text variant="caption" style={styles.infoText}>
              {booking.date}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Clock size={14} color={brownGold} />
            <Text variant="caption" style={styles.infoText}>
              {booking.time}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Users size={14} color={brownGold} />
            <Text variant="caption" style={styles.infoText}>
              {booking.guests}
            </Text>
          </View>
        </View>

        <View style={styles.cardFooter}>
          <Text style={styles.paymentStatus}>{booking.paymentStatus}</Text>
          <ChevronRight size={18} color={textMuted} />
        </View>
      </Card>
    </Pressable>
  );

  return (
    <Layout>
      <View>
        <View style={styles.headerTop}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>My Reservations</Text>
            <Text style={[styles.subtitle, { color: textMuted }]}>
              View and manage your wellness experiences
            </Text>
          </View>
          <Pressable
            style={[styles.addButton, { borderColor: border, borderWidth: 1 }]}
            onPress={() => router.push("/(booking)")}
          >
            <Plus
              size={24}
              color="black"
              style={{ backgroundColor: secondary, borderRadius: "50%" }}
            />
          </Pressable>
        </View>

        <View style={styles.tabsContainer}>
          <Animated.View style={buttonStyle} />

          <Pressable
            style={styles.tab}
            onPress={() => handleTabChange("Upcoming")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Upcoming" && styles.activeTabText,
              ]}
            >
              Upcoming (2)
            </Text>
          </Pressable>

          <Pressable style={styles.tab} onPress={() => handleTabChange("Past")}>
            <Text
              style={[
                styles.tabText,
                activeTab === "Past" && styles.activeTabText,
              ]}
            >
              Past (0)
            </Text>
          </Pressable>
        </View>
      </View>

      <View>
        {activeTab === "Upcoming" ? (
          <View style={styles.list}>
            {upcomingBookings.map(renderBookingCard)}
          </View>
        ) : (
          <Card
            style={{
              padding: 32,
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
            }}
          >
            <View
              style={[styles.emptyIconCircle, { backgroundColor: lightBeige }]}
            >
              <Calendar size={32} color={brownGold} />
            </View>
            <View style={{ alignItems: "center", gap: 4 }}>
              <Text style={styles.emptyTitle}>No past bookings</Text>
              <Text style={[styles.emptySubtitle, { color: textMuted }]}>
                Your completed bookings will appear here
              </Text>
            </View>
            <Button onPress={() => router.push("/(booking)")}>
              Book Now
            </Button>
          </Card>
        )}
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    fontFamily: Fonts.serif,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 18,
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#FCF2E9",
    width: 250,
    height: 48,
    borderRadius: 14,
    padding: 4,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#71717A",
  },
  activeTabText: {
    color: "black",
    fontWeight: "700",
  },
  list: {
    gap: 16,
  },
  bookingCard: {
    padding: 20,
    borderRadius: 20,
    gap: 16,
    borderWidth: 1,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: Fonts.serif,
  },
  statusBadge: {
    backgroundColor: "#F0FDF4",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: "#166534",
    fontWeight: "600",
  },
  cardInfo: {
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F4F4F5",
    paddingBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#3F3F46",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paymentStatus: {
    fontSize: 14,
    color: "#71717A",
  },
  emptyIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: Fonts.serif,
  },
  emptySubtitle: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  bookNowText: {
    fontSize: 16,
    fontWeight: "700",
  },
});
