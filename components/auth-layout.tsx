import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { Colors, Fonts } from '@/theme/colors';
import { ImageBackground } from 'react-native';
import { StyleSheet, Platform, ScrollView, Dimensions } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  const background = useColor('background');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/auth-bg.png')}
        style={styles.bgImage}
      >
        <View style={styles.overlay}>
          <View style={styles.topContent}>
            <Text style={styles.welcomeTitle}>
              Welcome to the Circle of Stillness.
            </Text>
            <Text style={styles.welcomeSubtitle}>
              Membership unlocks exclusive arrangements, priority reservations, and personalized wellness concierge services.
            </Text>
            <View style={{ width: 120, height: 1.5, backgroundColor: Colors.dark.secondary}} />
          </View>

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            bounces={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={[styles.card, { backgroundColor: background }]}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{title}</Text>
                {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
              </View>
              {children}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: SCREEN_HEIGHT * 0.8,
    position: 'absolute',
    top: 0,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  topContent: {
    paddingTop: Platform.OS === 'ios' ? 80 : 60,
    paddingHorizontal: 24,
    gap: 26,
  },
  welcomeTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    fontFamily: Fonts.serif,
    maxWidth: '100%'
  },
  welcomeSubtitle: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    maxWidth: '86%',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  card: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    paddingTop: 32,
    marginTop: SCREEN_HEIGHT * 0.25,
    minHeight: SCREEN_HEIGHT * 0.55,
  },
  cardHeader: {
    marginBottom: 24,
    gap: 4,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: Fonts.serif,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#71717a',
  },
});
