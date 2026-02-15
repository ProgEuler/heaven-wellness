import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { Fonts } from '@/theme/colors';
import { Image } from 'expo-image';
import {
  Bell,
  Search,
  Sparkles,
  Calendar,
  Clock,
  Users,
  ChevronRight,
  Plus,
  ArrowRight,
} from 'lucide-react-native';
import React from 'react';
import { Platform, Pressable } from 'react-native';

export default function HomeScreen() {
  const primary = useColor('primary');
  const background = useColor('background');
  const textMuted = useColor('textMuted');
  const muted = useColor('muted');
  const border = useColor('border');

  // Custom colors to match the design
  const brownGold = '#9B7C56';
  const lightBeige = '#F8F5F2';

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: background }}
      contentContainerStyle={{
        padding: 24,
        paddingBottom: 40,
        gap: 24,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Image
            source="https://i.pravatar.cc/150?u=akash"
            style={{ width: 56, height: 56, borderRadius: 28 }}
          />
          <View>
            <Text variant="caption" style={{ color: textMuted }}>
              Welcome back
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                fontFamily: Fonts.serif,
              }}
            >
              Akash
            </Text>
          </View>
        </View>
        <Pressable
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            borderWidth: 1,
            borderColor: border,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon name={Bell} size={24} color={primary} />
        </Pressable>
      </View>

      <Text style={{ fontSize: 16, color: textMuted }}>
        Your wellness journey continues today.
      </Text>

      {/* Search Bar */}
      <Input
        placeholder="Search Services..."
        icon={Search}
        variant="outline"
      />

      {/* Next Visit Card */}
      <View
        style={{
          borderRadius: 24,
          overflow: 'hidden',
          backgroundColor: background,
          borderWidth: 1,
          borderColor: border,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 3,
        }}
      >
        {/* Brown Header Section */}
        <View style={{ backgroundColor: brownGold, padding: 20, gap: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Sparkles size={16} color="white" />
            <Text style={{ color: 'white', fontSize: 12, fontWeight: '600', opacity: 0.9 }}>
              Next Visit
            </Text>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: '700',
              fontFamily: Fonts.serif,
            }}
          >
            Private Sauna
          </Text>
        </View>

        {/* Details Section */}
        <View style={{ padding: 20, gap: 16 }}>
          <DetailItem icon={Calendar} label="Date" value="Sun 15 Feb" iconBg={lightBeige} />
          <DetailItem icon={Clock} label="Time" value="10:00 AM" iconBg={lightBeige} />
          <DetailItem icon={Users} label="Guests" value="2 people" iconBg={lightBeige} />

          <Button
            style={{
              marginTop: 8,
              backgroundColor: lightBeige,
              borderRadius: 30,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Text style={{ color: primary, fontWeight: '600' }}>View Details</Text>
            <ChevronRight size={18} color={primary} />
          </Button>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: textMuted, fontFamily: Fonts.serif }}>
          Quick Actions
        </Text>
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <ActionCard icon={Plus} title="New Booking" subTitle="Reserve service" labelBg={lightBeige} />
          <ActionCard icon={Calendar} title="My Bookings" subTitle="2 upcoming" labelBg={lightBeige} />
        </View>
      </View>

      {/* Upcoming Visits */}
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: textMuted, fontFamily: Fonts.serif }}>
          Upcoming Visits
        </Text>
        <Card style={{ padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: lightBeige, justifyContent: 'center', alignItems: 'center' }}>
               <Calendar size={22} color={brownGold} />
            </View>
            <View>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>Lunchroom Reservation</Text>
              <Text variant="caption" style={{ color: textMuted }}>Fri 20 Feb • 01:30 PM</Text>
            </View>
          </View>
          <ChevronRight size={20} color={textMuted} />
        </Card>
      </View>
    </ScrollView>
  );
}

function DetailItem({ icon: IconComp, label, value, iconBg }: any) {
  const textMuted = useColor('textMuted');
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: iconBg, justifyContent: 'center', alignItems: 'center' }}>
        <IconComp size={20} color="#9B7C56" />
      </View>
      <View>
        <Text variant="caption" style={{ color: textMuted }}>{label}</Text>
        <Text style={{ fontWeight: '700', fontSize: 16 }}>{value}</Text>
      </View>
    </View>
  );
}

function ActionCard({ icon: IconComp, title, subTitle, labelBg }: any) {
  const border = useColor('border');
  const textMuted = useColor('textMuted');
  const brownGold = '#9B7C56';

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: border,
        gap: 12,
      }}
    >
      <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: labelBg, justifyContent: 'center', alignItems: 'center' }}>
        <IconComp size={24} color={brownGold} />
      </View>
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16 }}>{title}</Text>
        <Text variant="caption" style={{ color: textMuted }}>{subTitle}</Text>
      </View>
    </View>
  );
}
