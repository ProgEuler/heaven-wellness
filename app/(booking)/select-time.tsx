import { BookingHeader } from '@/components/booking-header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { Fonts } from '@/theme/colors';
import { router, useLocalSearchParams } from 'expo-router';
import { Clock, ArrowRight, TimerResetIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TIME_SLOTS = [
  '8:00 AM', '9:00 AM', '10:00 AM',
  '11:00 AM', '12:00 PM', '1:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM'
];

export default function SelectTimeScreen() {
   const { date } = useLocalSearchParams()
  const [selectedTime, setSelectedTime] = useState('12:00 PM');
  const background = useColor('background');
  const textMuted = useColor('textMuted');
  const brownGold = '#9B7C56';
  const insets = useSafeAreaInsets();
  const headerHeight = insets.top + 60;

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <BookingHeader />

      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: headerHeight }]}>
        <View style={styles.header}>
          <Text style={styles.title}>Select Time</Text>
          <Text style={[styles.subtitle, { color: textMuted }]}>Choose your preferred time slot</Text>
        </View>

        <Card style={styles.dateInfoCard}>
           <Text variant="caption" style={{ color: textMuted }}>Selected Date</Text>
           <Text style={styles.dateValue}>{date}</Text>
        </Card>

        <View style={styles.grid}>
          {TIME_SLOTS.map((time) => {
            const isSelected = selectedTime === time;
            return (
              <Pressable
                key={time}
                style={[
                  styles.timeSlot,
                  isSelected ? { backgroundColor: '#D4C4B0' } : { backgroundColor: '#ECEEF1' }
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Clock size={18} color={isSelected ? brownGold : '#71717A'} />
                <Text style={[
                  styles.timeText,
                  isSelected && { color: 'black', fontWeight: '700' }
                ]}>
                  {time}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Card style={styles.selectionSummary}>
          <Text variant="caption" style={{ color: textMuted }}>Selected Time</Text>
          <Text style={styles.summaryValue}>{selectedTime}</Text>
        </Card>
      </ScrollView>

      <View style={[styles.footer, { borderTopColor: useColor('border') }]}>
        <Button
          style={styles.continueButton}
          onPress={() => router.push({
            pathname: '/(booking)/guests',
            params: {
               date,
               time: selectedTime,
            }
          })}
        >
          <Text style={styles.buttonText}>Continue to Guests</Text>
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
    fontWeight: '700',
    fontFamily: Fonts.serif,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  dateInfoCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    gap: 4,
  },
  dateValue: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: Fonts.serif,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  timeSlot: {
    width: '31%',
    height: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  timeText: {
    fontSize: 14,
    color: '#71717A',
  },
  selectionSummary: {
    marginTop: 20,
    padding: 20,
    borderRadius: 16,
    gap: 4,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: Fonts.serif,
  },
  footer: {
    padding: 24,
    paddingBottom: 40,
    borderTopWidth: 1,
  },
  continueButton: {
    backgroundColor: '#9B7C56',
    borderRadius: 30,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
