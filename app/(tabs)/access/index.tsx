import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { Code, Eye, Palette, Settings } from 'lucide-react-native';
import { StyleSheet } from 'react-native';

export default function AccessScreen() {
  const primary = useColor('primary');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <ModeToggle />

      <View style={styles.section}>
        <Text variant='title' style={styles.title}>
          Access Control
        </Text>

        <View style={styles.featuresList}>
          {features.map((feature, index) => (
            <Card key={index} style={styles.featureCard}>
              <Icon name={feature.icon} size={24} color={primary} />

              <View style={styles.featureText}>
                <Text variant='body' style={styles.featureTitle}>
                  {feature.title}
                </Text>
                <Text variant='caption'>{feature.description}</Text>
              </View>
            </Card>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    gap: 18,
    paddingTop: 96,
    alignItems: 'center',
  },
  section: {
    width: '90%',
    marginBottom: 40,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: '700',
  },
  featuresList: {
    gap: 12,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontWeight: '600',
    marginBottom: 4,
  },
});

const features = [
  {
    title: 'Live Preview',
    description: 'See components in action with real-time demos',
    icon: Eye,
  },
  {
    title: 'Code Examples',
    description: 'Copy-paste ready code snippets',
    icon: Code,
  },
  {
    title: 'Customizable',
    description: 'Easy to customize with your brand colors',
    icon: Palette,
  },
  {
    title: 'Accessible',
    description: 'Built with accessibility in mind',
    icon: Settings,
  },
];
