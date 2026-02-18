import React from 'react';
import { StyleSheet, ViewProps, ScrollViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColor } from '@/hooks/useColor';
import { ScrollView } from '../ui/scroll-view';
import { View } from '../ui/view';

interface ScreenViewProps {
  children: React.ReactNode;
  scrollable?: boolean;
  padding?: boolean | number;
  safe?: boolean;
  style?: any;
  contentContainerStyle?: any;
}

export function ScreenView({
  children,
  scrollable = true,
  padding = true,
  safe = true,
  style,
  contentContainerStyle,
}: ScreenViewProps) {
  const insets = useSafeAreaInsets();
  const background = useColor('background');

  const horizontalPadding = typeof padding === 'number' ? padding : (padding ? 24 : 0);

  const containerStyle = [
    styles.container,
    { backgroundColor: background },
    safe && {
      paddingTop: insets.top - 30,
      paddingBottom: insets.bottom
    },
    !scrollable && padding && { paddingHorizontal: horizontalPadding },
    style
  ];

  if (scrollable) {
    return (
      <ScrollView
        style={containerStyle}
        contentContainerStyle={[
          padding && { paddingHorizontal: horizontalPadding, paddingVertical: 24 },
          contentContainerStyle
        ]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
