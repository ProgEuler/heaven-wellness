import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { LogOut, User, Mail, Shield, Bell } from 'lucide-react-native';

export default function ProfileScreen() {
  const primary = useColor('primary');
  const red = useColor('red');
  const muted = useColor('muted');

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        padding: 24,
        paddingTop: 120,
        gap: 24,
      }}
    >
      <View style={{ alignItems: 'center', marginBottom: 8 }}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: muted,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <Icon name={User} size={48} color={primary} />
        </View>
        <Text variant="title" style={{ fontWeight: '700' }}>
          John Doe
        </Text>
        <Text variant="caption">Premium Member</Text>
      </View>

      <View style={{ gap: 12 }}>
        <Text variant="body" style={{ fontWeight: '600', marginLeft: 4 }}>
          Account Information
        </Text>
        <Card style={{ gap: 16 }}>
          <ProfileItem
            icon={Mail}
            label="Email"
            value="john.doe@example.com"
            color={primary}
          />
          <ProfileItem
            icon={Shield}
            label="Security"
            value="Status: Protected"
            color={primary}
          />
          <ProfileItem
            icon={Bell}
            label="Notifications"
            value="Enabled"
            color={primary}
          />
        </Card>
      </View>

      <Button
        variant="ghost"
        style={{
          marginTop: 12,
          borderColor: red,
          borderWidth: 1,
        }}
        onPress={() => console.log('Logout pressed')}
      >
        <Icon name={LogOut} size={20} color={red} />
        <Text style={{ color: red, fontWeight: '600', marginLeft: 8 }}>
          Log Out
        </Text>
      </Button>
    </ScrollView>
  );
}

function ProfileItem({
  icon,
  label,
  value,
  color,
}: {
  icon: any;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: color + '20',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name={icon} size={20} color={color} />
      </View>
      <View style={{ flex: 1 }}>
        <Text variant="caption" style={{ opacity: 0.7 }}>
          {label}
        </Text>
        <Text variant="body" style={{ fontWeight: '500' }}>
          {value}
        </Text>
      </View>
    </View>
  );
}
