import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Fonts } from "@/theme/colors";
import { useColor } from "@/hooks/useColor";

export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
   const textMuted = useColor("textMuted")
  return (
    <View style={{ marginVertical: 12 }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.subtitle, { color: textMuted }]}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: Fonts.serif,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: Fonts.serif,
  },
});
