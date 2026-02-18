import { ScreenView } from "@/components/layout/screen-view";
import { BackHeader } from "@/components/shared/booking-header";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import { Bell, ChevronRight } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  group: string;
}

export default function NotificationsScreen() {
  const textMuted = useColor("textMuted");
  const border = useColor("border");
  const brownGold = "#9B7C56";
  const lightBeige = "#FCF2E9";

  const notifications: NotificationItem[] = [
    {
      id: "1",
      title: "Booking Confirmed",
      description: "Your reservation has been successfully confirmed. We look forward to welcoming you.",
      time: "09:00 AM",
      group: "Today",
    },
    {
      id: "2",
      title: "Upcoming Visit Reminder",
      description: "This is a friendly reminder of your upcoming wellness experience. We are preparing everything for your arrival.",
      time: "09:00 AM",
      group: "Yesterday",
    },
    {
      id: "3",
      title: "Access Code Available",
      description: "Your personal sauna access code is now available and will be active during your reserved time.",
      time: "09:00 AM",
      group: "Yesterday",
    },
    {
      id: "4",
      title: "Reservation Cancelled",
      description: "Your reservation has been cancelled as requested. If you wish to book again, we will be happy to welcome you.",
      time: "09:00 AM",
      group: "jan 25, 2025",
    },
  ];

  const groupedNotifications = notifications.reduce((acc, item) => {
    if (!acc[item.group]) {
      acc[item.group] = [];
    }
    acc[item.group].push(item);
    return acc;
  }, {} as Record<string, NotificationItem[]>);

  return (
    <View style={styles.container}>
      <BackHeader />
      <ScreenView safe={false} contentContainerStyle={{ paddingTop: 120 }}>
        <Text style={styles.title}>Notification</Text>

        {Object.entries(groupedNotifications).map(([group, items], groupIndex) => (
          <View key={group} style={styles.groupContainer}>
            <View style={styles.groupHeader}>
              <Text style={[styles.groupTitle, { color: textMuted }]}>{group}</Text>
              {groupIndex > 0 && <View style={[styles.separator, { backgroundColor: border }]} />}
            </View>

            <View style={styles.notificationsList}>
              {items.map((item) => (
                <Pressable key={item.id} style={styles.notificationItem}>
                  <View style={[styles.iconCircle, { borderColor: border }]}>
                    <Bell size={20} color={brownGold} />
                  </View>
                  <View style={styles.content}>
                    <View style={styles.itemHeader}>
                      <Text style={styles.itemTitle}>{item.title}</Text>
                      <ChevronRight size={18} color={textMuted} />
                    </View>
                    <Text style={[styles.itemDescription, { color: textMuted }]}>
                      {item.description}
                    </Text>
                    <Text style={[styles.itemTime, { color: textMuted }]}>
                      {item.time}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        ))}
      </ScreenView>
    </View>
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
    marginBottom: 24,
  },
  groupContainer: {
    marginBottom: 32,
  },
  groupHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  separator: {
    flex: 1,
    height: 1,
  },
  notificationsList: {
    gap: 24,
  },
  notificationItem: {
    flexDirection: "row",
    gap: 16,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    gap: 4,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: Fonts.serif,
  },
  itemDescription: {
    fontSize: 15,
    lineHeight: 22,
  },
  itemTime: {
    fontSize: 13,
    marginTop: 2,
  },
});
