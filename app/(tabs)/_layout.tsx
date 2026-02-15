import { Platform, StyleSheet } from "react-native";
import { useColor } from "@/hooks/useColor";
import {
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from "expo-router/unstable-native-tabs";
import MaterialIcons from "@expo/vector-icons/Feather";

export default function TabsLayout() {
  const red = useColor("red");
  const primary = useColor("primary");
  const foreground = useColor("foreground");

  const styles = createStyles(primary, foreground);

  return (
    <NativeTabs
      minimizeBehavior="onScrollDown"
      labelStyle={styles.labelStyle}
      iconColor={styles.iconColor}
      badgeBackgroundColor={red}
      labelVisibilityMode="labeled"
      disableTransparentOnScrollEdge={true}
    >
      <NativeTabs.Trigger name="(home)">
        {Platform.select({
          ios: <Icon sf="house.fill" />,
          android: (
            <Icon src={<VectorIcon family={MaterialIcons} name="home" />} />
          ),
        })}
        <Label>Home</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="booking">
        {Platform.select({
          ios: <Icon sf="calendar" />,
          android: (
            <Icon src={<VectorIcon family={MaterialIcons} name="calendar" />} />
          ),
        })}
        <Label>Booking</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="access">
        {Platform.select({
          ios: <Icon sf="key.fill" />,
          android: (
            <Icon src={<VectorIcon family={MaterialIcons} name="key" />} />
          ),
        })}
        <Label>Access</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        {Platform.select({
          ios: <Icon sf="person.fill" />,
          android: (
            <Icon src={<VectorIcon family={MaterialIcons} name="user" />} />
          ),
        })}
        <Label>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

const createStyles = (primary: string, foreground: string) => ({
  labelStyle: {
    default: { color: primary },
    selected: { color: foreground },
  },
  iconColor: {
    default: primary,
    selected: foreground,
  }
});
