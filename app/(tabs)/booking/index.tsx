import { Card } from '@/components/ui/card';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { Fonts } from '@/theme/colors';
import { Calendar, ChevronRight } from 'lucide-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function MyBookingsScreen() {
  const background = useColor('background');
  const textMuted = useColor('textMuted');
  const brownGold = '#9B7C56';
  const lightBeige = '#F8F5F2';

  return (
    <ScrollView style={[styles.container, { backgroundColor: background }]}>
      <View style={styles.header}>
        <Text style={styles.title}>My Bookings</Text>
        <Text style={[styles.subtitle, { color: textMuted }]}>Manage your upcoming wellness sessions</Text>
      </View>

      <View style={styles.list}>
        <Card style={styles.bookingCard}>
          <View style={styles.bookingInfo}>
            <View style={[styles.iconBox, { backgroundColor: lightBeige }]}>
              <Calendar size={22} color={brownGold} />
            </View>
            <View>
              <Text style={styles.bookingTitle}>Private Sauna</Text>
              <Text variant="caption" style={{ color: textMuted }}>Sun 15 Feb • 10:00 AM</Text>
            </View>
          </View>
          <ChevronRight size={20} color={textMuted} />
        </Card>

        <Card style={styles.bookingCard}>
          <View style={styles.bookingInfo}>
            <View style={[styles.iconBox, { backgroundColor: lightBeige }]}>
              <Calendar size={22} color={brownGold} />
            </View>
            <View>
              <Text style={styles.bookingTitle}>Lunchroom Reservation</Text>
              <Text variant="caption" style={{ color: textMuted }}>Fri 20 Feb • 01:30 PM</Text>
            </View>
          </View>
          <ChevronRight size={20} color={textMuted} />
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: Fonts.serif,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  list: {
    padding: 24,
    gap: 16,
    paddingTop: 0,
  },
  bookingCard: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
});
