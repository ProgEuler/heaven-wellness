import React from 'react';
import { Icon } from '@/components/ui/icon';
import { useColor } from '@/hooks/useColor';
import { Tabs } from 'expo-router';
import { Home, Calendar, Key, CircleUser } from 'lucide-react-native';

export default function WebTabsLayout() {
  const primary = useColor('primary');

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: primary,
      }}
    >
      <Tabs.Screen
        name='(home)'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name={Home} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='booking'
        options={{
          title: 'Booking',
          tabBarIcon: ({ color }) => (
            <Icon name={Calendar} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='access'
        options={{
          title: 'Access',
          tabBarIcon: ({ color }) => (
            <Icon name={Key} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name={CircleUser} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
