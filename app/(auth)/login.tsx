import { AuthLayout } from '@/components/auth-layout';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { Colors } from '@/theme/colors';
import { Link, router } from 'expo-router';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react-native';
import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const primary = useColor('primary');
  const textMuted = useColor('textMuted');
  const brownGold = '#9B7C56';

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your journey"
    >
      <View style={styles.form}>
         <Text>Email Address</Text>
        <Input
          placeholder="your@email.com"
          icon={Mail}
          variant="outline"
        />

         <Text>Password</Text>
        <Input
          placeholder="••••••••"
          icon={Lock}
          secureTextEntry={!showPassword}
          variant="outline"
          rightComponent={() => (
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Icon name={showPassword ? EyeOff : Eye} size={20} color={textMuted} />
            </Pressable>
          )}
        />

        <View style={styles.row}>
          <Pressable style={styles.checkboxContainer}>
            <View style={[styles.checkbox, { borderColor: primary }]} />
            <Text variant="caption">Remember me</Text>
          </Pressable>
          <Link href="/forgot-password" asChild>
            <Pressable>
              <Text style={{ color: Colors.dark.primary }}>Forgot password?</Text>
            </Pressable>
          </Link>
        </View>

        <Button
          onPress={() => router.replace('/(tabs)/(home)')}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
          <ArrowRight size={18} color="black" />
        </Button>

        <View style={styles.dividerContainer}>
          <View style={[styles.divider, { backgroundColor: '#e4e4e7' }]} />
          <Text variant="caption" style={styles.dividerText}>or continue with</Text>
          <View style={[styles.divider, { backgroundColor: '#e4e4e7' }]} />
        </View>

        <View style={styles.socialContainer}>
          <SocialButton icon="apple" />
          <SocialButton icon="google" />
        </View>

        <View style={styles.footer}>
          <Text variant="caption">Don't have an account? </Text>
          <Link href="/signup" asChild>
            <Pressable>
              <Text variant="caption" style={{ color: brownGold, fontWeight: '700' }}>Sign up</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </AuthLayout>
  );
}

function SocialButton({ icon }: { icon: string }) {
  const border = useColor('border');
  return (
    <Pressable style={[styles.socialButton, { borderColor: border }]}>
       <Text style={styles.socialIconText}>{icon === 'apple' ? '' : 'G'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
  },
  loginButtonText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 12,
  },
  divider: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    color: '#a1a1aa',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIconText: {
    fontSize: 24,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
});
