import { AuthLayout } from "@/components/auth-layout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { Colors } from "@/theme/colors";
import { Link, router } from "expo-router";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet, Pressable } from "react-native";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const primary = useColor("primary");
  const textMuted = useColor("textMuted");
  const brownGold = "#9B7C56";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailError =
    email && !email.includes("@") ? "Please enter a valid email address" : "";
  const passwordError =
    password && password.length < 6
      ? "Password must be at least 6 characters"
      : "";

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your journey"
      showOverlay={false}
    >
      <View style={styles.form}>
        <Input
          label="Email"
          placeholder="your@email.com"
          icon={Mail}
          variant="outline"
          value={email}
          onChangeText={setEmail}
          error={emailError}
          keyboardType="email-address"
        />

        <Input
          label="Password"
          placeholder="••••••••"
          icon={Lock}
          value={password}
          onChangeText={setPassword}
          error={passwordError}
          secureTextEntry={!showPassword}
          variant="outline"
          rightComponent={() => (
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? EyeOff : Eye}
                size={20}
                color={textMuted}
              />
            </Pressable>
          )}
        />

        <View style={styles.row}>
          <Checkbox
            checked={checked}
            onCheckedChange={setChecked}
            label="Remember me"
          />
          <Link href="/forgot-password" asChild>
            <Pressable>
              <Text style={{ color: Colors.light.primary }}>
                Forgot password?
              </Text>
            </Pressable>
          </Link>
        </View>

        <Button onPress={() => router.replace("/(tabs)/(home)")}>
          <Text>Log In</Text>
          <ArrowRight size={18} />
        </Button>

        <View style={styles.dividerContainer}>
          <View style={[styles.divider, { backgroundColor: "#e4e4e7" }]} />
          <Text variant="caption" style={styles.dividerText}>
            or continue with
          </Text>
          <View style={[styles.divider, { backgroundColor: "#e4e4e7" }]} />
        </View>

        <View style={styles.socialContainer}>
          <SocialButton icon="apple" />
          <SocialButton icon="google" />
        </View>

        <View style={styles.footer}>
          <Text variant="caption">Don't have an account? </Text>
          <Link href="/signup" asChild>
            <Pressable>
              <Text
                variant="caption"
                style={{ color: brownGold, fontWeight: "700" }}
              >
                Sign up
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </AuthLayout>
  );
}

function SocialButton({ icon }: { icon: string }) {
  const border = useColor("border");
  return (
    <Pressable style={[styles.socialButton, { borderColor: border }]}>
      <Text style={styles.socialIconText}>{icon === "apple" ? "" : "G"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -4,
    marginBottom: 18,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginVertical: 12,
  },
  divider: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    color: "#a1a1aa",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  socialIconText: {
    fontSize: 24,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },
});
