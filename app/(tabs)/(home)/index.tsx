import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { ScrollView } from "@/components/ui/scroll-view";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import { Image } from "expo-image";
import {
  Bell,
  Search,
  Sparkles,
  Calendar,
  Clock,
  Users,
  ChevronRight,
  Plus,
} from "lucide-react-native";
import { router } from 'expo-router';
import React from "react";
import { Platform, Pressable, StyleSheet } from "react-native";

export default function HomeScreen() {
  const primary = useColor("primary");
  const background = useColor("background");
  const textMuted = useColor("textMuted");
  const border = useColor("border");

  // Custom colors to match the design
  const brownGold = "#9B7C56";
  const lightBeige = "#F8F5F2";

  const styles = createStyles(
    background,
    border,
    textMuted,
    primary,
    brownGold,
    lightBeige,
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source="https://i.pravatar.cc/150?u=akash"
            style={styles.avatar}
          />
          <View>
            <Text variant="caption" style={styles.welcomeText}>
              Welcome back
            </Text>
            <Text style={styles.userName}>Akash</Text>
          </View>
        </View>
        <Pressable style={styles.notificationButton}>
          <Icon name={Bell} size={24} color={primary} />
        </Pressable>
      </View>

      <Text style={styles.journeyText}>
        Your wellness journey continues today.
      </Text>

      {/* Search Bar */}
      <Input
        placeholder="Search Services..."
        icon={Search}
        variant="outline"
        borderRadius={12}
      />

      {/* Next Visit Card */}
      <View style={styles.nextVisitCard}>
        {/* Brown Header Section */}
        <View style={styles.cardHeader}>
          <View style={styles.nextVisitBadge}>
            <Sparkles size={16} color="white" />
            <Text style={styles.nextVisitLabel}>Next Visit</Text>
          </View>
          <Text style={styles.serviceName}>Private Sauna</Text>
        </View>

        {/* Details Section */}
        <View style={styles.cardDetails}>
          <DetailItem
            icon={Calendar}
            label="Date"
            value="Sun 15 Feb"
            iconBg={lightBeige}
          />
          <DetailItem
            icon={Clock}
            label="Time"
            value="10:00 AM"
            iconBg={lightBeige}
          />
          <DetailItem
            icon={Users}
            label="Guests"
            value="2 people"
            iconBg={lightBeige}
          />

          <Button style={styles.viewDetailsButton}>
            <Text style={styles.viewDetailsText}>View Details</Text>
            <ChevronRight size={18} color={primary} />
          </Button>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsGrid}>
          <Pressable
            style={{ flex: 1 }}
            onPress={() => router.push('/(booking)')}
          >
            <ActionCard
              icon={Plus}
              title="New Booking"
              subTitle="Reserve service"
              labelBg={lightBeige}
            />
          </Pressable>
          <Pressable style={{ flex: 1 }}>
            <ActionCard
              icon={Calendar}
              title="My Bookings"
              subTitle="2 upcoming"
              labelBg={lightBeige}
            />
          </Pressable>
        </View>
      </View>

      {/* Upcoming Visits */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Upcoming Visits</Text>
        <Card style={styles.upcomingVisitCard}>
          <View style={styles.upcomingVisitInfo}>
            <View style={styles.upcomingVisitIcon}>
              <Calendar size={22} color={brownGold} />
            </View>
            <View>
              <Text style={styles.upcomingVisitTitle}>
                Lunchroom Reservation
              </Text>
              <Text variant="caption" style={styles.upcomingVisitTime}>
                Fri 20 Feb • 01:30 PM
              </Text>
            </View>
          </View>
          <ChevronRight size={20} color={textMuted} />
        </Card>
      </View>
    </ScrollView>
  );
}

function DetailItem({ icon: IconComp, label, value, iconBg }: any) {
  const textMuted = useColor("textMuted");
  const styles = itemStyles(iconBg, textMuted);

  return (
    <View style={styles.detailItemCon}>
      <View style={styles.iconBatch}>
        <IconComp size={20} color="#9B7C56" />
      </View>
      <View>
        <Text variant="caption" style={styles.label}>
          {label}
        </Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

function ActionCard({ icon: IconComp, title, subTitle, labelBg }: any) {
  const border = useColor("border");
  const textMuted = useColor("textMuted");
  const brownGold = "#9B7C56";

  const styles = actionCardStyles(border, labelBg, brownGold, textMuted);

  return (
    <Card style={styles.actionCard}>
      <View style={styles.actionIcon}>
        <IconComp size={24} color={brownGold} />
      </View>
      <View>
        <Text style={styles.actionTitle}>{title}</Text>
        <Text variant="caption" style={styles.actionSubTitle}>
          {subTitle}
        </Text>
      </View>
    </Card>
  );
}

const createStyles = (
  background: string,
  border: string,
  textMuted: string,
  primary: string,
  brownGold: string,
  lightBeige: string,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: background,
    },
    contentContainer: {
      padding: 24,
      paddingTop: Platform.OS === "ios" ? 20 : 50,
      paddingBottom: 40,
      gap: 24,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    userInfo: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    avatar: {
      width: 56,
      height: 56,
      borderRadius: 28,
    },
    welcomeText: {
      color: textMuted,
    },
    userName: {
      fontSize: 24,
      fontWeight: "700",
      fontFamily: Fonts.serif,
    },
    notificationButton: {
      width: 48,
      height: 48,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: border,
      justifyContent: "center",
      alignItems: "center",
    },
    journeyText: {
      fontSize: 16,
      color: textMuted,
    },
    nextVisitCard: {
      borderRadius: 24,
      overflow: "hidden",
      backgroundColor: background,
      borderWidth: 1,
      borderColor: border,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
      elevation: 5,
    },
    cardHeader: {
      backgroundColor: brownGold,
      padding: 20,
      gap: 8,
    },
    nextVisitBadge: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    nextVisitLabel: {
      color: "white",
      fontSize: 12,
      fontWeight: "600",
      opacity: 0.9,
    },
    serviceName: {
      color: "white",
      fontSize: 22,
      fontWeight: "700",
      fontFamily: Fonts.serif,
    },
    cardDetails: {
      padding: 20,
      gap: 16,
    },
    viewDetailsButton: {
      marginTop: 8,
      backgroundColor: lightBeige,
      borderRadius: 30,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    viewDetailsText: {
      color: primary,
      fontWeight: "600",
    },
    sectionHeader: {
      gap: 16,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: textMuted,
      fontFamily: Fonts.serif,
    },
    quickActionsGrid: {
      flexDirection: "row",
      gap: 16,
    },
    upcomingVisitCard: {
      padding: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    upcomingVisitInfo: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    upcomingVisitIcon: {
      width: 44,
      height: 44,
      borderRadius: 12,
      backgroundColor: lightBeige,
      justifyContent: "center",
      alignItems: "center",
    },
    upcomingVisitTitle: {
      fontWeight: "600",
      fontSize: 16,
    },
    upcomingVisitTime: {
      color: textMuted,
    },
  });

const itemStyles = (iconBg: string, textMuted: string) =>
  StyleSheet.create({
    detailItemCon: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    iconBatch: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: iconBg,
      justifyContent: "center",
      alignItems: "center",
    },
    label: {
      color: textMuted,
    },
    value: {
      fontWeight: "700",
      fontSize: 16,
    },
  });

const actionCardStyles = (
  border: string,
  labelBg: string,
  brownGold: string,
  textMuted: string,
) =>
  StyleSheet.create({
    actionCard: {
      flex: 1,
      padding: 20,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: border,
      gap: 12,
    },
    actionIcon: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: labelBg,
      justifyContent: "center",
      alignItems: "center",
    },
    actionTitle: {
      fontWeight: "700",
      fontSize: 16,
    },
    actionSubTitle: {
      color: textMuted,
    },
  });
