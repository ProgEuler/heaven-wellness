import { AuthLayout } from "@/components/auth-layout";
import { Button } from "@/components/ui/button";
import { InputOTP } from "@/components/ui/input-otp";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { router } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet, Pressable } from "react-native";

export default function VerifyCodeScreen() {
  const [code, setCode] = useState("");
  const brownGold = "#9B7C56";

  return (
    <AuthLayout
      title="Check your email"
      subtitle="We sent a verification code to user@company.com. Enter the code below."
    >
      <View style={styles.form}>
        <View style={styles.otpContainer}>
          <InputOTP
            keyboardType="numeric"
            length={6}
            value={code}
            onChangeText={setCode}
            onComplete={(value) => console.log("OTP complete ", value)}
          />
        </View>

        <Button onPress={() => router.push("/new-password")}>
          <Text>Verify Code</Text>
          <ArrowRight size={18} />
        </Button>

        <View style={styles.footer}>
          <Text variant="caption">Didn't receive the email? </Text>
          <Pressable>
            <Text
              variant="caption"
              style={{ color: brownGold, fontWeight: "700" }}
            >
              Click to resend
            </Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
