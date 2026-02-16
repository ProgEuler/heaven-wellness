import { AuthLayout } from '@/components/auth-layout';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { router } from 'expo-router';
import { ArrowRight } from 'lucide-react-native';
import React, { useState } from 'react';
import { StyleSheet, Pressable, TextInput } from 'react-native';

export default function VerifyCodeScreen() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const brownGold = '#9B7C56';
  const border = useColor('border');

  return (
    <AuthLayout
      title="Check your email"
      subtitle="We sent a verification code to user@company.com. Enter the code below."
    >
      <View style={styles.form}>
        <View style={styles.otpContainer}>
          {code.map((digit, index) => (
            <View key={index} style={[styles.otpBox, { borderColor: border }]}>
              <Text style={styles.otpText}>{digit || ' '}</Text>
            </View>
          ))}
        </View>

        <Button
          style={styles.button}
          onPress={() => router.push('/new-password')}
        >
          <Text style={styles.buttonText}>Verify Code</Text>
          <ArrowRight size={18} color="white" />
        </Button>

        <View style={styles.footer}>
          <Text variant="caption">Didn't receive the email? </Text>
          <Pressable>
            <Text variant="caption" style={{ color: brownGold, fontWeight: '700' }}>Click to resend</Text>
          </Pressable>
        </View>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 24,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  otpBox: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpText: {
    fontSize: 20,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#9B7C56',
    borderRadius: 12,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
