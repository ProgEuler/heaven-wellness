import { BookingHeader } from "@/components/booking-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollView } from "@/components/ui/scroll-view";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Fonts } from "@/theme/colors";
import { router } from "expo-router";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SelectDateScreen() {
  const [selectedDay, setSelectedDay] = useState(20);
  const background = useColor("background");
  const textMuted = useColor("textMuted");
  const brownGold = "#9B7C56";
  const primary = useColor("primary");
  const secondary = useColor("secondary");
  const insets = useSafeAreaInsets();
  const headerHeight = insets.top + 60;

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <BookingHeader />

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: headerHeight },
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Select Date</Text>
          <Text style={[styles.subtitle, { color: textMuted }]}>
            Choose your preferred date
          </Text>
        </View>

        {/* <Card style={styles.calendarCard}> */}
        {/* <View style={styles.monthHeader}>
            <Pressable>
              <ChevronLeft size={20} color={brownGold} />
            </Pressable>
            <Text style={styles.monthName}>March 2026</Text>
            <Pressable>
              <ChevronRight size={20} color={brownGold} />
            </Pressable>
          </View>

          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.dot, { backgroundColor: "#FCD34D" }]} />
              <Text variant="caption">Available</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.dot, { backgroundColor: "#E5E7EB" }]} />
              <Text variant="caption">Booked</Text>
            </View>
          </View>

          <View style={styles.weekDays}>
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <Text key={d} style={styles.weekDayText}>
                {d}
              </Text>
            ))}
          </View> */}

        {/* <View style={styles.daysGrid}> */}
        {/* </View> */}
        {/* </Card> */}
        <Calendar
          onDayPress={(day) => {
            // console.log("selected day", day.day);
            // setSelectedDate(day.day);
          }}
          onMonthChange={(data) => {
            // setMonth(data.month);
            // setYear(data.year);
          }}
          //  markedDates={{
          //    ...markedDates,
          //    [selectedDate
          //      ? `${year}-${String(month).padStart(2, "0")}-${String(selectedDate).padStart(2, "0")}`
          //      : ""]: {
          //      selected: true,
          //      selectedColor: colors.dark.success,
          //    },
          //  }}
          hideExtraDays
          enableSwipeMonths
          style={{
            borderWidth: 1,
            borderRadius: 24,
            borderColor: primary,
            height: 320,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.08,
            shadowRadius: 12,
            elevation: 5,
          }}
          theme={{
            calendarBackground: background,
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: secondary,
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#000",
            todayBackgroundColor: primary,
            todayDotColor: primary,
            dayTextColor: "#000",
            // textDisabledColor: colors.dark.textSecondary,
            // monthTextColor: colors.dark.text,
            arrowColor: primary,
          }}
        />

        <Card style={styles.selectionSummary}>
          <Text variant="caption" style={{ color: textMuted }}>
            Selected Date
          </Text>
          <Text style={styles.summaryValue}>Friday 20 February 2026</Text>
        </Card>
      </ScrollView>

      <View style={[styles.footer, { borderTopColor: useColor("border") }]}>
        <Button onPress={() => router.push("/(booking)/select-time")}>
          <Text>Continue to Time Selection</Text>
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
  calendarCard: {
    padding: 20,
    borderRadius: 24,
  },
  monthHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  monthName: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: Fonts.serif,
  },
  legend: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 20,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  weekDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  weekDayText: {
    width: 40,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "700",
    color: "#3F3F46",
  },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dayBox: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  dayText: {
    fontSize: 14,
    fontWeight: "600",
  },
  availableIndicator: {
    position: "absolute",
    top: 4,
    right: 4,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FCD34D",
  },
  selectionSummary: {
    marginTop: 20,
    padding: 20,
    borderRadius: 16,
    gap: 4,
  },
  summaryValue: {
    fontSize: 18,
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
