import { AuthLayout } from '@/components/auth-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { Link, router } from 'expo-router';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react-native';
import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Icon } from '@/components/ui/icon';

export default function SignupScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const textMuted = useColor('textMuted');
  const brownGold = '#9B7C56';

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Begin your wellness journey"
      showOverlay={false}
    >
      <View style={styles.form}>
        <Input
          label="Name"
          placeholder="Alex"
          icon={User}
          variant="outline"
        />

        <Input
          label="Email Address"
          placeholder="your@email.com"
          icon={Mail}
          variant="outline"
        />

        <Input
          label="Password"
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

        <Button
          onPress={() => router.replace('/language')}
        >
          <Text>Sign Up</Text>
          <ArrowRight size={18} />
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
          <Text variant="caption">Already have an account? </Text>
          <Link href="/login" asChild>
            <Pressable>
              <Text variant="caption" style={{ color: brownGold, fontWeight: '700' }}>Log in</Text>
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
  signupButton: {
    backgroundColor: '#9B7C56',
    borderRadius: 12,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  signupButtonText: {
    color: 'white',
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
    marginBottom: 24
  },
});
