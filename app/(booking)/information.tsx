import { Layout } from "@/components/layout/Layout";
import { BackHeader } from "@/components/shared/booking-header";
import Header from "@/components/shared/inside-header";
import { AvoidKeyboard } from "@/components/ui/avoid-keyboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColor } from "@/hooks/useColor";
import { router } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function InformationScreen() {
  return (
    <>
      <BackHeader />

      <Layout>
        <Header
          title="Your Information"
          subtitle="Tell us a bit about yourself"
        />

        <View style={styles.formCard}>
          <Input label="Full Name" placeholder="Akash" variant="outline" />
          <Input
            label="Email Address"
            placeholder="akash@example.com"
            variant="outline"
            keyboardType="email-address"
          />
          <Input
            label="Phone"
            placeholder="+1234567890"
            variant="outline"
            keyboardType="phone-pad"
            type="numeric"
          />
          <Input
            label="Special Requests (Optional)"
            variant="outline"
            multiline
            inputStyle={{ height: 100, textAlignVertical: "top" }}
            type="textarea"
          />

          <AvoidKeyboard />
        </View>
      </Layout>

      <View style={[styles.footer, { borderTopColor: useColor("border") }]}>
        <Button onPress={() => router.push("/(booking)/confirmation")}>
          <Text>Continue to Confirmation</Text>
          <ArrowRight />
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formCard: {
    //  padding: 24,
    borderRadius: 24,
    gap: 20,
  },
  footer: {
    padding: 24,
    paddingBottom: 40,
    borderTopWidth: 1,
  },
  continueButton: {
    backgroundColor: "#9B7C56",
    borderRadius: 30,
    height: 56,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
