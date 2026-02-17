import { BookingHeader } from '@/components/booking-header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { Fonts } from '@/theme/colors';
import { router } from 'expo-router';
import { ArrowRight } from 'lucide-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function InformationScreen() {
  const background = useColor('background');
  const textMuted = useColor('textMuted');
  const insets = useSafeAreaInsets();
  const headerHeight = insets.top + 60;

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <BookingHeader />

      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: headerHeight }]}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Information</Text>
          <Text style={[styles.subtitle, { color: textMuted }]}>Tell us a bit about yourself</Text>
        </View>

        <Card style={styles.formCard}>
          <Input
            label="Full Name"
            placeholder="Akash"
            variant="outline"
          />
          <Input
            label="Email Address"
            placeholder="akash@example.com"
            variant="outline"
            keyboardType="email-address"
          />
          <Input
            label="Phone"
            placeholder="+1234567890"
            variant="outline"
            keyboardType="phone-pad"
          />
          <Input
            label="Special Requests (Optional)"
            placeholder="Any allergies or preferences..."
            variant="outline"
            multiline
            numberOfLines={4}
            inputStyle={{ height: 100, textAlignVertical: 'top' }}
          />
        </Card>
      </ScrollView>

      <View style={[styles.footer, { borderTopColor: useColor('border') }]}>
        <Button
          style={styles.continueButton}
          onPress={() => router.push('/(booking)/confirmation')}
        >
          <Text style={styles.buttonText}>Continue to Confirmation</Text>
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
  formCard: {
    padding: 24,
    borderRadius: 24,
    gap: 20,
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
