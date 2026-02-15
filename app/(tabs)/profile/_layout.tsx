import { Stack } from 'expo-router';
import { useColor } from '@/hooks/useColor';
import { Platform, useColorScheme, StyleSheet } from 'react-native';
import { Text } from '@/components/ui/text';
import { isLiquidGlassAvailable } from 'expo-glass-effect';

export default function ProfileLayout() {
  const theme = useColorScheme();
  const text = useColor('text');
  const background = useColor('background');

  const screenOptions = {
    headerLargeTitle: true,
    headerLargeTitleShadowVisible: false,
    headerTintColor: text,
    headerBlurEffect: isLiquidGlassAvailable()
      ? undefined
      : theme === 'dark'
        ? 'systemMaterialDark'
        : 'systemMaterialLight',
    headerStyle: {
      backgroundColor: isLiquidGlassAvailable()
        ? 'transparent'
        : background,
    },
  };

  return (
    <Stack screenOptions={screenOptions as any}>
      <Stack.Screen
        name='index'
        options={{
          title: 'Profile',
          headerTitle: () =>
            Platform.OS === 'android' ? (
              <Text variant='heading'>Profile</Text>
            ) : undefined,
        }}
      />
    </Stack>
  );
}
