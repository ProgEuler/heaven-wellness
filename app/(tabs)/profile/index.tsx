import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { router } from 'expo-router';
import { LogOut, User, Mail, Shield, Bell } from 'lucide-react-native';
import { StyleSheet } from 'react-native';

export default function ProfileScreen() {
  const primary = useColor('primary');
  const red = useColor('red');
  const muted = useColor('muted');

  const styles = createStyles(muted, primary, red);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Icon name={User} size={48} color={primary} />
        </View>
        <Text variant="title" style={styles.profileName}>
          John Doe
        </Text>
        <Text variant="caption">Premium Member</Text>
      </View>

      <View style={styles.section}>
        <Text variant="body" style={styles.sectionHeader}>
          Account Information
        </Text>
        <Card style={styles.card}>
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
        style={styles.logoutButton}
        onPress={() => router.push("/(auth)/login")}
      >
        <Icon name={LogOut} size={20} color={red} />
        <Text style={styles.logoutText}>
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
  const styles = itemStyles(color);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={20} color={color} />
      </View>
      <View style={styles.textContainer}>
        <Text variant="caption" style={styles.label}>
          {label}
        </Text>
        <Text variant="body" style={styles.value}>
          {value}
        </Text>
      </View>
    </View>
  );
}

const createStyles = (muted: string, primary: string, red: string) => StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
    paddingTop: 120,
    gap: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: muted,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileName: {
    fontWeight: '700',
  },
  section: {
    gap: 12,
  },
  sectionHeader: {
    fontWeight: '600',
    marginLeft: 4,
  },
  card: {
    gap: 16,
  },
  logoutButton: {
    marginTop: 12,
    borderColor: red,
    borderWidth: 1,
  },
  logoutText: {
    color: red,
    fontWeight: '600',
    marginLeft: 8,
  },
});

const itemStyles = (color: string) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: color + '20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  label: {
    opacity: 0.7,
  },
  value: {
    fontWeight: '500',
  },
});
